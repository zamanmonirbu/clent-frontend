import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Check, MapPin, CreditCard, FileCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ShippingForm } from '../components/checkout/ShippingForm';
import { PaymentMethods } from '../components/checkout/PaymentMethods';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { useCart } from '../hooks/useCart';
import { useCheckout } from '../hooks/useCheckout';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const { clearCheckout } = useCheckout();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    if (items.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [items, navigate, orderComplete]);

  const handleOrderComplete = () => {
    setOrderComplete(true);
    clearCart();
    clearCheckout();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Order Confirmed!
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

  const steps = [
    { icon: MapPin, label: 'Shipping', step: 1 },
    { icon: CreditCard, label: 'Payment', step: 2 },
    { icon: FileCheck, label: 'Confirmation', step: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative flex justify-between">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            />
            {steps.map((step, index) => (
              <div key={step.label} className="relative z-10">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    currentStep > index + 1
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : currentStep === index + 1
                      ? 'border-emerald-500 bg-white text-emerald-500'
                      : 'border-gray-300 bg-white text-gray-300'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="absolute -left-1/2 w-32 text-center mt-2">
                  <span className={`text-sm font-medium ${
                    currentStep >= index + 1 ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {currentStep === 1 && (
                <ShippingForm
                  onNext={() => setCurrentStep(2)}
                />
              )}
              {currentStep === 2 && (
                <PaymentMethods
                  onBack={() => setCurrentStep(1)}
                  onNext={() => setCurrentStep(3)}
                />
              )}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Confirm Order
                  </h2>
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Shield className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Secure Payment</p>
                      <p className="text-sm">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleOrderComplete}
                      className="flex-1"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}