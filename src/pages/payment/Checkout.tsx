import { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CheckoutDetails from "../../components/checkout/CheckoutDetails";

const Checkout = () => {
  const { items } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [nameOnCard, setNameOnCard] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/payment/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await response.json();

      if (!data.client_secret) throw new Error("Client secret not received from backend.");

      const { error, paymentIntent } = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: { name: nameOnCard },
        },
      });

      if (error) {
        Swal.fire({ icon: "error", title: "Payment Failed", text: error.message });
      } else if (paymentIntent.status === "succeeded") {
        Swal.fire({ icon: "success", title: "Payment Successful", text: "Your payment has been processed." });
        navigate("/checkout/success");
      }
    } catch (error) {
      Swal.fire({ icon: "error", title: "Payment Failed", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-4xl gap-6">
        {/* CheckoutDetails */}
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
          <CheckoutDetails />
        </div>

        {/* Payment Form */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Payment Information</h2>

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
              className="w-full border border-gray-300 rounded-md shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </label>

          {/* Payment Icons */}
          <div className="flex mt-2 space-x-4 text-gray-600">
            <FaCcVisa size={40} className="text-blue-600" />
            <FaCcMastercard size={40} className="text-red-600" />
            <FaCcAmex size={40} className="text-green-600" />
            <FaCcDiscover size={40} className="text-orange-600" />
          </div>

          {/* Card Number */}
          <label className="block mb-4 mt-6">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </span>
            <div className="border border-gray-300 rounded-md p-2">
              <CardNumberElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      letterSpacing: "0.025em",
                      "::placeholder": { color: "#a0aec0" },
                    },
                    invalid: { color: "#e74c3c" },
                  },
                }}
              />
            </div>
          </label>

          {/* Expiry Date */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date (MM/YY)
            </span>
            <div className="border border-gray-300 rounded-md p-2">
              <CardExpiryElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      letterSpacing: "0.025em",
                      "::placeholder": { color: "#a0aec0" },
                    },
                    invalid: { color: "#e74c3c" },
                  },
                }}
              />
            </div>
          </label>

          {/* CVC */}
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              CVC
            </span>
            <div className="border border-gray-300 rounded-md p-2">
              <CardCvcElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      letterSpacing: "0.025em",
                      "::placeholder": { color: "#a0aec0" },
                    },
                    invalid: { color: "#e74c3c" },
                  },
                }}
              />
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !stripe}
            className="w-full mt-6 py-3 bg-gray-600 hover:bg-black text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
