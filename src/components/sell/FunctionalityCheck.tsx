import React from 'react';
import { ChevronRight, ChevronLeft, Smartphone } from 'lucide-react';
import { Button } from '../ui/Button';

interface FunctionalityCheckProps {
  functionality: {
    normal: boolean;
    fingerprintSensor: boolean;
  };
  onSelect: (key: string, value: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export function FunctionalityCheck({
  functionality,
  onSelect,
  onNext,
  onBack
}: FunctionalityCheckProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Functionality Check</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Smartphone className="w-6 h-6 text-gray-600" />
            <p className="text-gray-900">Does the phone function normally?</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onSelect('normal', true)}
              className={`p-4 rounded-lg border-2 transition-all ${
                functionality.normal
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => onSelect('normal', false)}
              className={`p-4 rounded-lg border-2 transition-all ${
                !functionality.normal
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-900">Has the phone gotten wet or is the fingerprint sensor broken?</p>
            <p className="text-sm text-gray-500">FaceID and TouchID do not work (if available)</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onSelect('fingerprintSensor', false)}
              className={`p-4 rounded-lg border-2 transition-all ${
                !functionality.fingerprintSensor
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => onSelect('fingerprintSensor', true)}
              className={`p-4 rounded-lg border-2 transition-all ${
                functionality.fingerprintSensor
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              No
            </button>
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
        <Button
          variant="primary"
          onClick={onNext}
          className="flex items-center gap-2"
        >
          Get Estimate <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}