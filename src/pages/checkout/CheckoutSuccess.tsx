import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../hooks/useCart';

export function CheckoutSuccess() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}