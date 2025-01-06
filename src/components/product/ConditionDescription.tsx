import React from 'react';
import { Info } from 'lucide-react';
import { conditionDescriptions } from '../../utils/productConditions';

interface ConditionDescriptionProps {
  condition: string;
}

export function ConditionDescription({ condition }: ConditionDescriptionProps) {
  const conditionInfo = conditionDescriptions[condition];

  if (!conditionInfo) return null;

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-gray-900 mb-1">{conditionInfo.title} Condition</h4>
          <p className="text-sm text-gray-600">{conditionInfo.description}</p>
        </div>
      </div>
    </div>
  );
}