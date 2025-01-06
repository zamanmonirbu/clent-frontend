import React from 'react';
import { Truck, Shield, RotateCcw, BadgeCheck } from 'lucide-react';

export function ProductHighlights() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-gray-600">
        <Truck className="w-5 h-5 text-emerald-600" />
        <span>Free Shipping</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Shield className="w-5 h-5 text-emerald-600" />
        <span>2 Year Warranty</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <RotateCcw className="w-5 h-5 text-emerald-600" />
        <span>30-Day Money Back Guarantee</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <BadgeCheck className="w-5 h-5 text-emerald-600" />
        <span>Certified Refurbished</span>
      </div>
    </div>
  );
}