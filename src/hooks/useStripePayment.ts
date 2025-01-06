import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent, confirmIdealPayment } from '../services/stripe';
import { PAYMENT_METHODS } from '../config/stripe';

interface UseStripePaymentProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useStripePayment({ onSuccess, onError }: UseStripePaymentProps = {}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processIdealPayment = async (amount: number, bankId: string) => {
    if (!stripe) {
      throw new Error('Stripe not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create payment intent
      const { clientSecret } = await createPaymentIntent({
        amount,
        paymentMethod: PAYMENT_METHODS.IDEAL,
        bankId
      });

      // Confirm iDEAL payment
      await confirmIdealPayment(
        stripe,
        clientSecret,
        bankId,
        `${window.location.origin}/payment/success`
      );

      onSuccess?.();
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processIdealPayment,
    isLoading,
    error
  };
}