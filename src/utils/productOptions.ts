import type { Product } from '../types/product';

export interface StorageOption {
  capacity: string;
  price: number;
}

export interface ConditionOption {
  value: string;
  label: string;
  price: number;
}

export const getStorageOptions = (product: Product): StorageOption[] => {
  if (!product) return [];
  
  const basePrice = product.price;
  const modelName = product.name;
  
  // Define base storage options
  const allOptions = [
    { capacity: '64GB', price: basePrice },
    { capacity: '128GB', price: basePrice + 50 },
    { capacity: '256GB', price: basePrice + 150 },
    { capacity: '512GB', price: basePrice + 350 }
  ];

  // Add 1TB option only for Pro models that support it
  if (modelName.includes('Pro') && 
      (modelName.includes('13') || modelName.includes('14') || modelName.includes('15'))) {
    allOptions.push({ capacity: '1TB', price: basePrice + 550 });
  }

  // Filter options based on iPhone model
  return allOptions.filter(option => {
    // iPhone 12 and 12 Mini start at 64GB
    if ((modelName === 'iPhone 12' || modelName === 'iPhone 12 Mini') && 
        !['64GB', '128GB', '256GB'].includes(option.capacity)) {
      return false;
    }
    
    // iPhone 12 Pro and Pro Max start at 128GB
    if ((modelName === 'iPhone 12 Pro' || modelName === 'iPhone 12 Pro Max') && 
        !['128GB', '256GB', '512GB'].includes(option.capacity)) {
      return false;
    }
    
    // iPhone 13/14/15 base models start at 128GB
    if ((modelName.includes('iPhone 13') || modelName.includes('iPhone 14') || modelName.includes('iPhone 15')) && 
        !modelName.includes('Pro') && option.capacity === '64GB') {
      return false;
    }

    return true;
  });
};

export const conditionOptions: ConditionOption[] = [
  { value: 'fair', label: 'Fair', price: 0 },
  { value: 'good', label: 'Good', price: 40 },
  { value: 'excellent', label: 'Excellent', price: 80 }
];

export const calculateTotalPrice = (
  basePrice: number,
  selectedStorage: string,
  selectedCondition: string
): number => {
  if (!basePrice || !selectedStorage || !selectedCondition) {
    return basePrice || 0;
  }

  const dummyProduct = { price: basePrice, name: '' } as Product;
  const storageOption = getStorageOptions(dummyProduct)
    .find(option => option.capacity === selectedStorage);
  
  const conditionOption = conditionOptions
    .find(option => option.value === selectedCondition);

  const storagePrice = storageOption?.price || basePrice;
  const conditionUpcharge = conditionOption?.price || 0;

  return storagePrice + conditionUpcharge;
};