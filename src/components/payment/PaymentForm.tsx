import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '../ui/Button';
import { useToast } from '../../hooks/useToast';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  paymentMethod: 'ideal' | 'card';
}

export function PaymentForm({ amount, onSuccess, paymentMethod }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      });

      if (error) {
        showToast({ type: 'error', message: error.message || 'Payment failed' });
      } else {
        showToast({ type: 'success', message: 'Payment successful!' });
        onSuccess();
      }
    } catch (err) {
      showToast({ type: 'error', message: 'An unexpected error occurred' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={!stripe || isProcessing}
        loading={isProcessing}
      >
        {isProcessing ? 'Processing...' : `Pay €${amount}`}
      </Button>
    </form>
  );
}