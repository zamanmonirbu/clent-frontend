import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {BASE_URL} from './baseUrl'

export const useStripeCheckout = () => {

  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async (items) => {
    console.log(items);
    try {
      const response = await fetch(`${BASE_URL}/api/payment/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) throw new Error('Failed to create payment intent.');

      const { client_secret } = await response.json();
      return client_secret;
    } catch (error) {
      console.error('Error creating payment intent:', error.message);
      throw error;
    }
  };

  const handlePayment = async (items) => {
    if (!stripe || !elements) {
      throw new Error('Stripe has not loaded properly.');
    }

    console.log(items);

    const clientSecret = await createPaymentIntent(items);
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      throw new Error('Card Element not found.');
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
      throw error;
    }

    return paymentIntent;
  };

  return { handlePayment };
};


// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'


// export async function createCheckoutSession(items) {
//   // const elements = useElements();
//   const stripe = useStripe()


// // const handleSubmit = async (e: React.FormEvent) => {
//   // e.preventDefault()

//   // if (!stripe || !elements) {
//   //   setPaymentStatus('Stripe is not loaded.')
//   //   return
//   // }

//   // const card = elements.getElement(CardElement)
//   // if (!card) {
//   //   setPaymentStatus('Card Element not found.')
//   //   return
//   // }



//       const body = items.map(item => ({
//         price_data: {
//           currency: 'eur',
//           product_data: {
//             name: item.name,
//             images: [item.image], 
//           },
//           unit_amount: Math.round(item.price * 100), // Convert to cents
//         },
//         quantity: item.quantity,
//       }));
  

//   try {
//     const response = await fetch(
//       'http://localhost:3001/api/payment/create-payment-intent',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ products: body }),
//       }
//     )

//     if (!response.ok) {
//       throw new Error('Failed to create payment intent.')
//     }

//     const { client_secret } = await response.json()

//     // Step 2: Confirm the PaymentIntent with the client secret
//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       client_secret,
//       {
//         payment_method: { card },
//       }
//     )

//     if (error) {
//       console.log(error.message || 'Payment failed.')
//     } else if (paymentIntent?.status === 'succeeded') {
//       console.log('Payment successful!')
//     }
//   } catch (err) {
//     console.log('An unexpected error occurred.')
//   }
// }





// import { loadStripe } from "@stripe/stripe-js";

// const public_key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
// const BASE_URL = "http://localhost:5000";

// export async function createCheckoutSession(items) {
//   console.log("Items:", items);
//   try {
//     const stripe = await loadStripe(public_key);

//     const body = items.map(item => ({
//       price_data: {
//         currency: 'eur',
//         product_data: {
//           name: item.name,
//           images: [item.image], 
//         },
//         unit_amount: Math.round(item.price * 100), // Convert to cents
//       },
//       quantity: item.quantity,
//     }));


//     const response = await fetch(`${BASE_URL}/api/payment/create-checkout-session`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ products: body }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create Stripe session");
//     }

//     const session = await response.json();
//     const result = await stripe?.redirectToCheckout({ sessionId: session.id });

//     if (result?.error) {
//       console.error("Stripe redirectToCheckout error:", result.error.message);
//     }
//   } catch (error) {
//     console.error("Payment error:", error.message);
//   }
// }







// import Stripe from 'stripe';

// const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
//   apiVersion: '2023-10-16'
// });

// export async function createCheckoutSession(items: any[]) {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card', 'ideal'],
//       line_items: items.map(item => ({
//         price_data: {
//           currency: 'eur',
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: Math.round(item.price * 100), // Convert to cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment',
//       success_url: `${window.location.origin}/checkout/success`,
//       cancel_url: `${window.location.origin}/checkout/cancel`,
//     });

//     return session;
//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//     throw error;
//   }
// }





  //   const body = [
          //     {
          //         name: "monir",
          //         image: "https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-15-zwart-thumb_7_7.jpg", // Replace with an actual image URL
          //         price: 120,
          //         quantity: 50,
          //     },
          // ];


            // const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ products: body }),
            // });