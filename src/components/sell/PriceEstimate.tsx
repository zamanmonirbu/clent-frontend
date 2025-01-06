import React from 'react';
import { ChevronLeft, Truck, Store } from 'lucide-react';
import { Button } from '../ui/Button';
import type { SellFormData } from '../../hooks/useSellForm';
import { calculateEstimate } from '../../utils/priceCalculator';

interface PriceEstimateProps {
  formData: SellFormData;
  onBack: () => void;
}

export function PriceEstimate({ formData, onBack }: PriceEstimateProps) {
  const estimate = calculateEstimate(formData);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Your Estimated Price</h2>
        <p className="text-gray-600 mt-2">Based on your device's condition</p>
        
        <div className="mt-6">
          <span className="text-5xl font-bold text-emerald-600">€{estimate}</span>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900">How to Proceed</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-emerald-200 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Truck className="w-8 h-8 text-emerald-600" />
              <h4 className="text-lg font-medium">Ship to Us</h4>
            </div>
            <p className="text-gray-600 mb-4">
              We'll send you a prepaid shipping label. Pack your device and drop it off at any post office.
            </p>
            <Button variant="primary" className="w-full">Ship My Device</Button>
          </div>

          <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-emerald-200 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Store className="w-8 h-8 text-emerald-600" />
              <h4 className="text-lg font-medium">Visit Our Store</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Get paid instantly by visiting one of our physical locations.
            </p>
            <Button variant="outline" className="w-full">Find Nearest Store</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </Button>
      </div>
    </div>
  );
}