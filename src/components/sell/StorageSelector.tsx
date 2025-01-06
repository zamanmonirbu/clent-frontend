import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/Button';

const storageOptions: Record<string, string[]> = {
  'iPhone 12': ['64GB', '128GB', '256GB'],
  'iPhone 12 Mini': ['64GB', '128GB', '256GB'],
  'iPhone 12 Pro': ['128GB', '256GB', '512GB'],
  'iPhone 12 Pro Max': ['128GB', '256GB', '512GB'],
  'iPhone 13': ['128GB', '256GB', '512GB'],
  'iPhone 13 Mini': ['128GB', '256GB', '512GB'],
  'iPhone 13 Pro': ['128GB', '256GB', '512GB', '1TB'],
  'iPhone 13 Pro Max': ['128GB', '256GB', '512GB', '1TB'],
  'iPhone 14': ['128GB', '256GB', '512GB'],
  'iPhone 14 Plus': ['128GB', '256GB', '512GB'],
  'iPhone 14 Pro': ['128GB', '256GB', '512GB', '1TB'],
  'iPhone 14 Pro Max': ['128GB', '256GB', '512GB', '1TB'],
  'iPhone 15': ['128GB', '256GB', '512GB'],
  'iPhone 15 Plus': ['128GB', '256GB', '512GB'],
  'iPhone 15 Pro': ['128GB', '256GB', '512GB', '1TB'],
  'iPhone 15 Pro Max': ['256GB', '512GB', '1TB']
};

interface StorageSelectorProps {
  selectedStorage: string;
  phoneModel: string;
  onSelect: (storage: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StorageSelector({
  selectedStorage,
  phoneModel,
  onSelect,
  onNext,
  onBack
}: StorageSelectorProps) {
  const availableStorage = storageOptions[phoneModel] || [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Select Storage Capacity</h2>
      <p className="text-gray-600">Choose the storage capacity of your {phoneModel}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableStorage.map((storage) => (
          <button
            key={storage}
            onClick={() => onSelect(storage)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStorage === storage
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            {storage}
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
          disabled={!selectedStorage}
          className="flex items-center gap-2"
        >
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}