import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { IdealBankSelector } from './IdealBankSelector';
import { Button } from '../ui/Button';
import { createPaymentIntent } from '../../services/stripe';

interface IdealPaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export function IdealPaymentForm({ amount, onSuccess, onError }: IdealPaymentFormProps) {
  const stripe = useStripe();
  const [selectedBank, setSelectedBank] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !selectedBank) return;

    setIsProcessing(true);

    try {
      const { clientSecret } = await createPaymentIntent({
        amount: amount * 100, // Convert to cents
        currency: 'eur',
        paymentMethod: 'ideal'
      });

      const { error } = await stripe.confirmIdealPayment(clientSecret, {
        payment_method: {
          ideal: {
            bank: selectedBank,
          },
        },
        return_url: `${window.location.origin}/checkout/success`,
      });

      if (error) {
        onError(error.message || 'Payment failed');
      }
    } catch (err) {
      const error = err as Error;
      onError(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <IdealBankSelector
        selectedBank={selectedBank}
        onBankSelect={setSelectedBank}
      />
      
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={!selectedBank || isProcessing}
        loading={isProcessing}
      >
        {isProcessing ? 'Processing...' : `Pay €${amount} with iDEAL`}
      </Button>
    </form>
  );
}