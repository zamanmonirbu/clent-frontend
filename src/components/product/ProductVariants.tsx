import React from 'react';
import { ProductVariantSelector } from './ProductVariantSelector';
import { ColorSelector } from './ColorSelector';
import { ConditionDescription } from './ConditionDescription';

interface ProductVariantsProps {
  storageOptions: Array<{ label: string; value: string; price?: number }>;
  conditionOptions: Array<{ label: string; value: string; price?: number }>;
  colors: Array<{ name: string; value: string }>;
  selectedStorage: string;
  selectedCondition: string;
  selectedColor: string;
  basePrice: number;
  onStorageChange: (value: string) => void;
  onConditionChange: (value: string) => void;
  onColorChange: (value: string) => void;
}

export function ProductVariants({
  storageOptions,
  conditionOptions,
  colors,
  selectedStorage,
  selectedCondition,
  selectedColor,
  basePrice,
  onStorageChange,
  onConditionChange,
  onColorChange
}: ProductVariantsProps) {
  return (
    <div className="space-y-6">
      <ProductVariantSelector
        label="Storage"
        options={storageOptions}
        selectedValue={selectedStorage}
        onChange={onStorageChange}
        basePrice={basePrice}
      />

      <div>
        <ProductVariantSelector
          label="Condition"
          options={conditionOptions}
          selectedValue={selectedCondition}
          onChange={onConditionChange}
          basePrice={basePrice}
        />
        <ConditionDescription condition={selectedCondition} />
      </div>

      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onChange={onColorChange}
      />
    </div>
  );
}