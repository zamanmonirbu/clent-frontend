import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/Button';

const conditionOptions = {
  screen: [
    { value: 'excellent', label: 'Excellent Condition', description: 'No visible scratches or damage' },
    { value: 'moderate', label: 'Moderate Scratches', description: 'Minor scratches visible when screen is off' },
    { value: 'severe', label: 'Severe Damage', description: 'Cracks or deep scratches present' }
  ],
  sides: [
    { value: 'excellent', label: 'Excellent Condition', description: 'No visible marks or dents' },
    { value: 'minor', label: 'Minor Scratches', description: 'Light scratches or small dents' },
    { value: 'significant', label: 'Significant Damage', description: 'Deep scratches or multiple dents' }
  ],
  back: [
    { value: 'likeNew', label: 'Like New', description: 'Pristine condition, no scratches' },
    { value: 'minorScratches', label: 'Minor Scratches', description: 'Light surface scratches' },
    { value: 'visibleScratches', label: 'Visible Scratches', description: 'Noticeable scratches' },
    { value: 'cracks', label: 'Cracks', description: 'Cracked back glass' },
    { value: 'severe', label: 'Severe Damage', description: 'Multiple cracks or missing glass' }
  ]
};

interface ConditionSelectorProps {
  type: 'screen' | 'sides' | 'back';
  selected: string;
  onSelect: (condition: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ConditionSelector({
  type,
  selected,
  onSelect,
  onNext,
  onBack
}: ConditionSelectorProps) {
  const options = conditionOptions[type];
  const titles = {
    screen: 'Screen Condition',
    sides: 'Frame Condition',
    back: 'Back Glass Condition'
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">{titles[type]}</h2>
      <p className="text-gray-600">Select the condition that best describes your iPhone's {type}</p>

      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selected === option.value
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <div className="font-medium text-gray-900">{option.label}</div>
            <div className="text-sm text-gray-600 mt-1">{option.description}</div>
          </button>
        ))}
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
          disabled={!selected}
          className="flex items-center gap-2"
        >
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}