import React from 'react';
import { cn } from '../../utils/cn';

interface ColorOption {
  name: string;
  value: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onChange: (color: string) => void;
}

export function ColorSelector({ colors, selectedColor, onChange }: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900">Color:</h3>
      <div className="flex flex-wrap gap-3">
        {colors.map(({ name, value }) => (
          <button
            key={name}
            onClick={() => onChange(name)}
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
  );
}