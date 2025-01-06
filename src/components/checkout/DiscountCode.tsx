import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import { Button } from '../ui/Button';

interface DiscountCodeProps {
  onApply: (discount: number) => void;
}

export function DiscountCode({ onApply }: DiscountCodeProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [appliedCode, setAppliedCode] = useState('');

  // Simulated valid discount codes
  const validCodes = {
    'WELCOME10': 10,
    'SAVE20': 20,
    'SPECIAL30': 30
  };

  const handleApply = async () => {
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const normalizedCode = code.toUpperCase();
    const discount = validCodes[normalizedCode as keyof typeof validCodes];

    if (discount) {
      onApply(discount);
      setAppliedCode(normalizedCode);
      setCode('');
    } else {
      setError('Invalid or expired discount code');
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-emerald-600" />
        <h3 className="font-medium text-gray-900">
          Have a discount code?
        </h3>
      </div>

      {appliedCode ? (
        <div className="flex items-center justify-between bg-emerald-50 text-emerald-700 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-medium">{appliedCode}</span>
            <span className="text-sm">
              ({validCodes[appliedCode as keyof typeof validCodes]}% off)
            </span>
          </div>
          <button
            onClick={() => {
              setAppliedCode('');
              onApply(0);
            }}
            className="text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Enter discount code"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
            <Button
              variant="primary"
              onClick={handleApply}
              disabled={!code || isLoading}
              loading={isLoading}
            >
              Apply
            </Button>
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}