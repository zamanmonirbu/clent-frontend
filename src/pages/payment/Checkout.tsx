import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState } from 'react'

const Checkout = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [paymentStatus, setPaymentStatus] = useState('')
  const [amount, setAmount] = useState(1500) // Amount in cents (e.g., $15.00)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      setPaymentStatus('Stripe is not loaded.')
      return
    }

    const card = elements.getElement(CardElement)
    if (!card) {
      setPaymentStatus('Card Element not found.')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:3001/api/payment/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount, // Amount in cents
            currency: 'eur',
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to create payment intent.')
      }

      const { client_secret } = await response.json()

      // Step 2: Confirm the PaymentIntent with the client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: { card },
        }
      )

      if (error) {
        setPaymentStatus(error.message || 'Payment failed.')
      } else if (paymentIntent?.status === 'succeeded') {
        setPaymentStatus('Payment successful!')
      }
    } catch (err) {
      setPaymentStatus('An unexpected error occurred.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Checkout
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount (EUR)
          </label>
          <input
            type="number"
            value={amount / 100}
            onChange={(e) => setAmount(Number(e.target.value) * 100)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4 border border-gray-300 rounded p-3">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#495057',
                  '::placeholder': { color: '#6c757d' },
                },
                invalid: { color: '#dc3545' },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className={`w-full py-2 px-4 text-white font-bold rounded ${
            stripe
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Pay
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          {paymentStatus}
        </p>
      </form>
    </div>
  )
}

export default Checkout

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
