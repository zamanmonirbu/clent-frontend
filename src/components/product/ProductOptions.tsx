import React from 'react';
import { cn } from '../../utils/cn';
import type { StorageOption, ConditionOption } from '../../utils/productOptions';

interface ProductOptionsProps {
  storageOptions: StorageOption[];
  conditionOptions: ConditionOption[];
  selectedStorage: string;
  selectedCondition: string;
  selectedColor: string;
  colors: { name: string; value: string; }[];
  onStorageChange: (storage: string) => void;
  onConditionChange: (condition: string) => void;
  onColorChange: (color: string) => void;
  basePrice: number;
}

export function ProductOptions({
  storageOptions,
  conditionOptions,
  selectedStorage,
  selectedCondition,
  selectedColor,
  colors,
  onStorageChange,
  onConditionChange,
  onColorChange,
  basePrice
}: ProductOptionsProps) {
  return (
    <div className="space-y-6">
      {/* Storage Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Storage:</h3>
        <div className="flex flex-wrap gap-2">
          {storageOptions.map((option) => (
            <button
              key={option.capacity}
              onClick={() => onStorageChange(option.capacity)}
              className={cn(
                "py-2 px-4 rounded-lg border transition-all",
                selectedStorage === option.capacity
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 hover:border-emerald-200"
              )}
            >
              <span>{option.capacity}</span>
              {option.price > basePrice && (
                <span className="ml-1 text-sm text-emerald-600">
                  +€{option.price - basePrice}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Condition Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Condition:</h3>
        <div className="flex flex-wrap gap-2">
          {conditionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onConditionChange(option.value)}
              className={cn(
                "py-2 px-4 rounded-lg border transition-all",
                selectedCondition === option.value
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 hover:border-emerald-200"
              )}
            >
              <span>{option.label}</span>
              {option.price > 0 && (
                <span className="ml-1 text-sm text-emerald-600">+€{option.price}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Color:</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map(({ name, value }) => (
            <button
              key={name}
              onClick={() => onColorChange(name)}
              className="group relative"
              aria-label={`Select ${name} color`}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full border-2 transition-all",
                  selectedColor === name
                    ? "ring-2 ring-emerald-500 ring-offset-2"
                    : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
                )}
                style={{ 
                  backgroundColor: value,
                  borderColor: value === '#FFFFFF' ? '#E5E7EB' : value 
                }}
              />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-gray-600 whitespace-nowrap">
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}