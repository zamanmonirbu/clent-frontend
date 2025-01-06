import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Button } from '../ui/Button';

interface CreditCardFormProps {
  onSubmit: () => Promise<void>;
  isProcessing: boolean;
  error?: string;
}

export function CreditCardForm({ onSubmit, isProcessing, error }: CreditCardFormProps) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <div className="p-4 border rounded-lg bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isProcessing}
        loading={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </Button>
    </form>
  );
}