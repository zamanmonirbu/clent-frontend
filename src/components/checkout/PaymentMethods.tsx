import { useState } from 'react';
import { CreditCard, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { usePayment } from '../../hooks/usePayment';
import { IdealBankSelector } from './IdealBankSelector';
import { useNavigate } from 'react-router-dom';

interface PaymentMethodsProps {
  onBack: () => void;
  onNext: () => void;
}

export function PaymentMethods({ onBack }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'ideal' | ''>('');
  const [selectedBank, setSelectedBank] = useState('');
  const { initializePayment, isLoading, error } = usePayment();
  const navigate = useNavigate(); // For navigation

  const handleMethodSelect = (method: 'card' | 'ideal') => {
    setSelectedMethod(method);
  };

  const handleSubmit = async () => {
    if (!selectedMethod) return;

    if (selectedMethod === 'ideal' && selectedBank) {
      try {
        // Initialize iDEAL payment with Stripe
        const { paymentUrl } = await initializePayment('ideal', selectedBank);

        // Redirect to Stripe's hosted payment page
        window.location.href = paymentUrl;
      } catch (err) {
        console.error('Payment initialization failed:', err);
      }
    } else if (selectedMethod === 'card') {
      // Redirect to '/pay/checkout' for credit card payment
      navigate('/pay/checkout');
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Select Payment Method</h3>

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

      {selectedMethod === 'ideal' && (
        <IdealBankSelector
          selectedBank={selectedBank}
          onBankSelect={setSelectedBank}
        />
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
      )}

      <div className="flex gap-4 pt-6">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!selectedMethod || (selectedMethod === 'ideal' && !selectedBank)}
          loading={isLoading}
          className="flex-1"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
