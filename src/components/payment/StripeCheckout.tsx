import { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import { useStripeCheckout } from '../../api/stripe';

interface StripeCheckoutProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function StripeCheckout({ onSuccess, onError }: StripeCheckoutProps) {
  const stripe = useStripe();
  const { items } = useCart();
  const { handlePayment } = useStripeCheckout(); // Destructure `handlePayment` from the hook
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!stripe) {
      onError?.('Stripe has not loaded properly.');
      return;
    }

    try {
      setIsLoading(true);

      // Handle payment through the hook
      const paymentIntent = await handlePayment(items);

      if (paymentIntent.status === 'succeeded') {
        onSuccess?.();
      } else {
        throw new Error('Payment did not succeed.');
      }
    } catch (error) {
      const err = error as Error;
      onError?.(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="primary"
      onClick={handleCheckout}
      disabled={isLoading}
      loading={isLoading}
      className="w-full flex items-center justify-center gap-2"
    >
      {isLoading ? 'Processing...' : 'Pay with Stripe'}
    </Button>
  );
}
