import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentProviderProps {
  clientSecret: string;
  amount: number;
  onSuccess: () => void;
  paymentMethod: 'ideal' | 'card';
}

export function PaymentProvider({ 
  clientSecret, 
  amount, 
  onSuccess,
  paymentMethod 
}: PaymentProviderProps) {
  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#059669',
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm 
        amount={amount} 
        onSuccess={onSuccess} 
        paymentMethod={paymentMethod}
      />
    </Elements>
  );
}