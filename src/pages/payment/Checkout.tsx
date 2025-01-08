import { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import cart from '../../components/image/paymnt.png'
import { BASE_URL } from "../../api/baseUrl";

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
      const response = await fetch(`${BASE_URL}/api/payment/create-payment-intent`, {
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
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-full gap-6">
        {/* Payment Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-col"
        >
          {/* Name on Card */}
          <label className="block ">
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
             {/* Payment Image */}
          <div className="flex justify-start">
            <img
              src={cart} // Replace with your image URL
              alt="Payment Methods"
              className="h-10"
            />
          </div>
          </label>

          {/* Expiry Date and CVC in two columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Expiry Date */}
            <label className="block">
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
            <label className="block">
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
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !stripe}
            className="w-full mt-6 py-3 bg-green-400 hover:bg-green-600 text-white font-bold rounded-lg  transition duration-200 shadow-md"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
