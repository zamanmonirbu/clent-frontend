import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CheckoutCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-gray-600 mb-8">
            Your payment was cancelled. No charges were made.
          </p>
          <div className="space-y-4">
            <Button
              variant="primary"
              onClick={() => navigate('/checkout')}
              className="w-full"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/cart')}
              className="w-full"
            >
              Return to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}