import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  'Model',
  'Storage',
  'Screen',
  'Sides',
  'Back',
  'Battery',
  'Function',
  'Estimate'
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200" />
      <div
        className="absolute top-4 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;

          return (
            <div
              key={step}
              className="flex flex-col items-center"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isCompleted
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : isCurrent
                    ? 'border-emerald-500 text-emerald-500'
                    : 'border-gray-300 text-gray-300'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs ${
                  isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}