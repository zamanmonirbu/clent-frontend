import React from 'react';
import { cn } from '../../utils/cn';

interface VariantOption {
  label: string;
  value: string;
  price?: number;
}

interface ProductVariantSelectorProps {
  label: string;
  options: VariantOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  basePrice?: number;
}

export function ProductVariantSelector({
  label,
  options,
  selectedValue,
  onChange,
  basePrice
}: ProductVariantSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900">{label}:</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "py-2 px-4 rounded-lg border transition-all",
              selectedValue === option.value
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-gray-200 hover:border-emerald-200"
            )}
          >
            <span>{option.label}</span>
            {basePrice && option.price && option.price > basePrice && (
              <span className="ml-1 text-sm text-emerald-600">
                +€{option.price - basePrice}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}