import { useNavigate } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import { useCart } from "../../hooks/useCart";
import { useStripeCheckout } from "../../api/stripe";
import CheckoutDetails from "../../components/checkout/CheckoutDetails";
import Swal from "sweetalert2";

const Checkout = () => {
  const { items } = useCart();
  const { handlePayment } = useStripeCheckout();
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const paymentIntent = await handlePayment(items);
      if (paymentIntent?.status === "succeeded") {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been processed successfully!",
          timer: 3000,
          showConfirmButton: false,
          position: "center",
        }).then(() => {
          navigate("/"); // Navigate to home page after the alert
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
      {/* Flex container for CheckoutDetails and Form */}
      <div className="flex w-full max-w-[80%] gap-6">
        {/* CheckoutDetails section - left 50% */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
          <CheckoutDetails />
        </div>

        {/* Form section - right 50% */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white rounded-lg shadow-md p-6 flex flex-col max-h-40"
        >
          {/* CardElement section */}
          <div className="flex-grow">
            <div className="border border-gray-300 rounded-lg p-4">
              <CardElement />
            </div>
          </div>

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


// import { CardElement, useStripe } from '@stripe/react-stripe-js'
// import { createCheckoutSession } from '../../api/stripe'
// import { useCart } from '../../hooks/useCart'

// const Checkout = () => {
//   const stripe = useStripe()

//     const { items } = useCart();
  
//     const handleSubmit = async () => {
//       try {
  
//         console.log(items)
//         await createCheckoutSession(items); 
//       } catch (error) {
//         console.error("Error during checkout:", error.message);
//       }
//     };



//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
//           Checkout
//         </h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Amount (EUR)
//           </label>
//         </div>
//         <div className="mb-4 border border-gray-300 rounded p-3">
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '16px',
//                   color: '#495057',
//                   '::placeholder': { color: '#6c757d' },
//                 },
//                 invalid: { color: '#dc3545' },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe}
//           className={`w-full py-2 px-4 text-white font-bold rounded ${
//             stripe
//               ? 'bg-blue-500 hover:bg-blue-600'
//               : 'bg-gray-300 cursor-not-allowed'
//           }`}
//         >
//           Pay
//         </button>
        
//       </form>
//     </div>
//   )
// }

// export default Checkout

// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import { useState } from 'react'

// const Checkout = () => {
//   const stripe = useStripe()
//   const elements = useElements()
//   const [paymentStatus, setPaymentStatus] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!stripe || !elements) {
//       setPaymentStatus('Stripe is not loaded.')
//       return
//     }

//     const card = elements.getElement(CardElement)
//     if (!card) {
//       setPaymentStatus('Card Element not found.')
//       return
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         'client_secret_from_backend',
//         {
//           payment_method: { card },
//         }
//       )

//       if (error) {
//         setPaymentStatus(error.message || 'Payment failed.')
//       } else if (paymentIntent?.status === 'succeeded') {
//         setPaymentStatus('Payment successful!')
//       }
//     } catch (err) {
//       setPaymentStatus('An unexpected error occurred.')
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
//           Checkout
//         </h2>
//         <div className="mb-4 border border-gray-300 rounded p-3">
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '16px',
//                   color: '#495057',
//                   '::placeholder': { color: '#6c757d' },
//                 },
//                 invalid: { color: '#dc3545' },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe}
//           className={`w-full py-2 px-4 text-white font-bold rounded ${
//             stripe
//               ? 'bg-blue-500 hover:bg-blue-600'
//               : 'bg-gray-300 cursor-not-allowed'
//           }`}
//         >
//           Pay
//         </button>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           {paymentStatus}
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Checkout
