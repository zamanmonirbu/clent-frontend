import React from 'react';
import { ChevronRight, ChevronLeft, Battery } from 'lucide-react';
import { Button } from '../ui/Button';

interface BatteryHealthCheckProps {
  batteryHealth: boolean | null;
  onSelect: (health: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export function BatteryHealthCheck({
  batteryHealth,
  onSelect,
  onNext,
  onBack
}: BatteryHealthCheckProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Battery Health</h2>
      <div className="flex items-center gap-4 text-gray-600 mb-6">
        <Battery className="w-6 h-6" />
        <p>Is your iPhone's battery health at least 85%?</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onSelect(true)}
          className={`p-6 rounded-lg border-2 transition-all ${
            batteryHealth === true
              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
              : 'border-gray-200 hover:border-emerald-200'
          }`}
        >
          <div className="font-medium">Yes</div>
          <div className="text-sm text-gray-600 mt-1">85% or higher</div>
        </button>
        <button
          onClick={() => onSelect(false)}
          className={`p-6 rounded-lg border-2 transition-all ${
            batteryHealth === false
              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
              : 'border-gray-200 hover:border-emerald-200'
          }`}
        >
          <div className="font-medium">No</div>
          <div className="text-sm text-gray-600 mt-1">Below 85%</div>
        </button>
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
          disabled={batteryHealth === null}
          className="flex items-center gap-2"
        >
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}