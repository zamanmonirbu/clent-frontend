import React, { useState } from 'react';
import { CreditCard, Building2 } from 'lucide-react';
import { PaymentProcessor } from './PaymentProcessor';
import { IdealPaymentForm } from './IdealPaymentForm';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

interface PaymentMethodsProps {
  onSuccess: () => void;
}

export function PaymentMethods({ onSuccess }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'ideal'>('card');
  const { getTotal } = useCart();
  const { showToast } = useToast();
  const total = getTotal();

  const handleError = (error: string) => {
    showToast({
      type: 'error',
      message: error
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedMethod('card')}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedMethod === 'card'
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Credit Card</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedMethod('ideal')}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedMethod === 'ideal'
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-gray-600" />
              <span className="font-medium">iDEAL</span>
            </div>
          </button>
        </div>
      </div>

      {selectedMethod === 'card' ? (
        <PaymentProcessor
          onSuccess={onSuccess}
          onError={handleError}
        />
      ) : (
        <IdealPaymentForm
          amount={total}
          onSuccess={onSuccess}
          onError={handleError}
        />
      )}
    </div>
  );
}