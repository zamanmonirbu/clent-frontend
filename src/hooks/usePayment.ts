import { useState } from 'react';
import { createPaymentIntent } from '../utils/stripe';

interface UsePaymentOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function usePayment(options: UsePaymentOptions = {}) {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializePayment = async (amount: number, paymentMethod: 'ideal' | 'card' = 'card') => {
    setIsLoading(true);
    setError(null);

    try {
      const { clientSecret } = await createPaymentIntent({
        amount,
        paymentMethod
      });
      setClientSecret(clientSecret);
      options.onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment initialization failed';
      setError(errorMessage);
      options.onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    clientSecret,
    isLoading,
    error,
    initializePayment,
  };
}