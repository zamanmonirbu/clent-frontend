import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface CreatePaymentIntentParams {
  amount: number;
  currency?: string;
  paymentMethod?: 'ideal' | 'card';
}

export const createPaymentIntent = async ({ 
  amount, 
  currency = 'eur',
  paymentMethod = 'card'
}: CreatePaymentIntentParams) => {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      amount,
      currency,
      payment_method_types: [paymentMethod],
      payment_method_options: {
        ideal: {
          setup_future_usage: null
        }
      }
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create payment intent');
  }

  return await response.json();
};