import React from 'react';
import { ChevronRight, ChevronLeft, Droplets } from 'lucide-react';
import { Button } from '../ui/Button';

interface WaterDamageCheckProps {
  hasWaterDamage: boolean;
  onSelect: (value: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export function WaterDamageCheck({
  hasWaterDamage,
  onSelect,
  onNext,
  onBack
}: WaterDamageCheckProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Water Damage Check</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Droplets className="w-6 h-6 text-gray-600" />
          <p className="text-gray-900">Has the phone experienced water damage?</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onSelect(true)}
            className={`p-4 rounded-lg border-2 transition-all ${
              hasWaterDamage
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => onSelect(false)}
            className={`p-4 rounded-lg border-2 transition-all ${
              hasWaterDamage === false
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            No
          </button>
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
        <Button
          variant="primary"
          onClick={onNext}
          className="flex items-center gap-2"
        >
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}