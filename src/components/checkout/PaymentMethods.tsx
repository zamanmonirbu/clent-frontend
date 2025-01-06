import { useState } from 'react';
import { CreditCard, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCheckout } from '../../hooks/useCheckout';
import { usePayment } from '../../hooks/usePayment';
import { IdealBankSelector } from './IdealBankSelector';
import { FastCheckoutButtons } from './FastCheckoutButtons';
import { StripeCheckout } from '../payment/StripeCheckout';

interface PaymentMethodsProps {
  onBack: () => void;
  onNext: () => void;
}

export function PaymentMethods({ onBack, onNext }: PaymentMethodsProps) {
  const { setPaymentInfo } = useCheckout();
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'ideal' | ''>('');
  const [selectedBank, setSelectedBank] = useState('');
  const [cardInfo, setCardInfo] = useState({ number: '', expiry: '', cvc: '' });
  const { clientSecret, isLoading, error, initializePayment } = usePayment();

  const handleMethodSelect = async (method: 'card' | 'ideal') => {
    setSelectedMethod(method);
    if (method === 'ideal') {
      await initializePayment(1000, 'ideal');
    } else if (method === 'card') {
      await initializePayment(1000, 'card');
    }
  };

  const handleSubmit = () => {
    if (!selectedMethod) return;

    const paymentInfo = {
      method: selectedMethod,
      ...(selectedMethod === 'ideal' && { bank: selectedBank }),
      ...(selectedMethod === 'card' && { cardInfo })
    };

    setPaymentInfo(paymentInfo);
    onNext();
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">
        Payment Method
      </h2>

      {/* Fast Checkout Options */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Quick Checkout</h3>
        <FastCheckoutButtons onSuccess={onNext} />
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or pay with</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Credit Card Option */}
        <button
          onClick={() => handleMethodSelect('card')}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
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

        {/* iDEAL Option */}
        <button
          onClick={() => handleMethodSelect('ideal')}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
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

      {/* Payment Forms */}
      {selectedMethod === 'card' && (
        <StripeCheckout 
          onSuccess={onNext}
          onError={(error) => console.error(error)}
        />
      )}

      {selectedMethod === 'ideal' && (
        <IdealBankSelector
          selectedBank={selectedBank}
          onBankSelect={setSelectedBank}
        />
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex gap-4 pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!selectedMethod || 
            (selectedMethod === 'ideal' && !selectedBank)}
          loading={isLoading}
          className="flex-1"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}