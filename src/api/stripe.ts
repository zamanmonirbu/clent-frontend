import { loadStripe } from "@stripe/stripe-js";

const public_key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const BASE_URL = "http://localhost:5000";

export async function createCheckoutSession(items) {
  console.log("Items:", items);
  try {
    const stripe = await loadStripe(public_key);

    const body = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [item.image], 
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));


    const response = await fetch(`${BASE_URL}/api/payment/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: body }),
    });

    if (!response.ok) {
      throw new Error("Failed to create Stripe session");
    }

    const session = await response.json();
    const result = await stripe?.redirectToCheckout({ sessionId: session.id });

    if (result?.error) {
      console.error("Stripe redirectToCheckout error:", result.error.message);
    }
  } catch (error) {
    console.error("Payment error:", error.message);
  }
}


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