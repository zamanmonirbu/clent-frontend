import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { CreditCardForm } from './CreditCardForm';
import { useCart } from '../../hooks/useCart';
import { createPaymentIntent } from '../../services/stripe';

interface PaymentProcessorProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export function PaymentProcessor({ onSuccess, onError }: PaymentProcessorProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { getTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(undefined);

    try {
      // Create payment intent
      const { clientSecret } = await createPaymentIntent({
        amount: getTotal() * 100, // Convert to cents
        currency: 'eur'
      });

      // Confirm card payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message);
        onError(stripeError.message || 'Payment failed');
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      onError(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <CreditCardForm
      onSubmit={handleSubmit}
      isProcessing={isProcessing}
      error={error}
    />
  );
}