import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface CreatePaymentIntentParams {
  amount: number;
  currency?: string;
  paymentMethod?: 'ideal' | 'card';
}

export async function createPaymentIntent({ 
  amount, 
  currency = 'eur',
  paymentMethod = 'card'
}: CreatePaymentIntentParams) {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      amount: Math.round(amount * 100), // Convert to cents
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
    const error = await response.json();
    throw new Error(error.message || 'Payment failed');
  }

  return response.json();
}

export async function confirmIdealPayment(stripe: any, clientSecret: string, bankId: string) {
  return stripe.confirmIdealPayment(clientSecret, {
    payment_method: {
      ideal: { bank: bankId }
    },
    return_url: `${window.location.origin}/checkout/success`
  });
}