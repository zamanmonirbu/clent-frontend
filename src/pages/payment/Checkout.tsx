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
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name on Card */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
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
            <div className="mt-2">
              <img src={cart} alt="Payment Methods" className="h-10" />
            </div>
          </div>

          {/* Expiry Date and CVC in two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date (MM/YY)
              </label>
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
            </div>

            {/* CVC */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </label>
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
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !stripe}
            className="w-full mt-6 py-3 bg-green-400 hover:bg-green-600 text-white font-bold rounded-lg transition duration-200 shadow-md"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
