import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js"; 
import Swal from "sweetalert2";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useStripeCheckout } from "../../api/stripe";
import CheckoutDetails from "../../components/checkout/CheckoutDetails";

const Checkout = () => {
  const { items } = useCart();
  const { handlePayment } = useStripeCheckout();
  const stripe = useStripe();
  const navigate = useNavigate();
  
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate expiry date format MM/YY
    const expiryParts = expiryDate.split("/");
    if (expiryParts.length !== 2 || expiryParts[0].length !== 2 || expiryParts[1].length !== 2) {
      Swal.fire({
        icon: "error",
        title: "Invalid Expiry Date",
        text: "Please enter a valid expiry date (MM/YY).",
        timer: 3000,
        showConfirmButton: false,
        position: "center",
      });
      return;
    }

    // Check if Stripe has loaded
    if (!stripe) {
      Swal.fire({
        icon: "error",
        title: "Stripe not loaded",
        text: "Stripe has not loaded properly. Please try again later.",
        timer: 3000,
        showConfirmButton: false,
        position: "center",
      });
      return;
    }

    // Manually create a PaymentMethod
    const paymentMethod = await stripe.createPaymentMethod({
      type: "card",
      card: {
        number: cardNumber,
        exp_month: parseInt(expiryParts[0]), // MM
        exp_year: `20${expiryParts[1]}`, // YY
        cvc: cvc,
      },
      billing_details: {
        name: nameOnCard,
      },
    });

    if (paymentMethod.error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: paymentMethod.error.message || "Please check your card details.",
        timer: 3000,
        showConfirmButton: false,
        position: "center",
      });
      return;
    }

    try {
      // Proceed to handle payment via backend with paymentMethod.id
      const paymentIntent = await handlePayment(items, paymentMethod.id);
      if (paymentIntent?.status === "succeeded") {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been processed successfully!",
          timer: 3000,
          showConfirmButton: false,
          position: "center",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message || "Something went wrong. Please try again.",
        timer: 3000,
        showConfirmButton: false,
        position: "center",
      });
    }
  };


  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-[80%] gap-6">
        {/* CheckoutDetails section */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
          <CheckoutDetails />
        </div>

        {/* Form section */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white rounded-lg shadow-md p-6 flex flex-col"
        >
          {/* Card Number */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </span>
            <input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              inputMode="numeric"
              pattern="\d{16}"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </label>

          {/* Payment Icons */}
          <div className="flex mt-2 space-x-4 text-gray-600">
            <FaCcVisa size={40} />
            <FaCcMastercard size={40} />
            <FaCcAmex size={40} />
            <FaCcDiscover size={40} />
          </div>

          {/* Expiry Date */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date (MM/YY)
              </span>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                className="w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>

            {/* CVC */}
            <label>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </span>
              <input
                type="text"
                placeholder="3-4 digits"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                maxLength="4"
                pattern="\d{3,4}"
                className="w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>
          </div>

          {/* Name on Card */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Name on Card
            </span>
            <input
              type="text"
              placeholder="John Doe"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-gray-700 to-black text-white font-bold text-center rounded-lg hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-900 shadow-lg transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
