import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import { createCheckoutSession } from '../../api/stripe';

interface StripeCheckoutProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function StripeCheckout({ onSuccess, onError }: StripeCheckoutProps) {
  const stripe = useStripe();
  const { items } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!stripe) return;

    try {
      setIsLoading(true);

      // Create Stripe checkout session
      const session = await createCheckoutSession(items);

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        onError?.(result.error.message);
      }
    } catch (err) {
      const error = err as Error;
      onError?.(error.message);
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