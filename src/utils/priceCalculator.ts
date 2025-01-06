import type { SellFormData } from '../hooks/useSellForm';

const baseValues: Record<string, number> = {
  'iPhone 12': 400,
  'iPhone 12 Mini': 350,
  'iPhone 12 Pro': 500,
  'iPhone 12 Pro Max': 600,
  'iPhone 13': 500,
  'iPhone 13 Mini': 450,
  'iPhone 13 Pro': 650,
  'iPhone 13 Pro Max': 750,
  'iPhone 14': 600,
  'iPhone 14 Plus': 650,
  'iPhone 14 Pro': 800,
  'iPhone 14 Pro Max': 900,
  'iPhone 15': 700,
  'iPhone 15 Plus': 750,
  'iPhone 15 Pro': 900,
  'iPhone 15 Pro Max': 1000
};

const storageMultipliers: Record<string, number> = {
  '64GB': 1,
  '128GB': 1.1,
  '256GB': 1.2,
  '512GB': 1.3,
  '1TB': 1.4
};

const conditionMultipliers = {
  screen: {
    excellent: 1,
    moderate: 0.8,
    severe: 0.6
  },
  sides: {
    excellent: 1,
    minor: 0.9,
    significant: 0.7
  },
  back: {
    likeNew: 1,
    minorScratches: 0.9,
    visibleScratches: 0.8,
    cracks: 0.7,
    severe: 0.6
  }
};

export function calculateEstimate(formData: SellFormData): number {
  let estimate = baseValues[formData.model] || 0;
  
  // Apply storage multiplier
  estimate *= storageMultipliers[formData.storage] || 1;
  
  // Apply condition multipliers
  estimate *= conditionMultipliers.screen[formData.screenCondition as keyof typeof conditionMultipliers.screen] || 0.6;
  estimate *= conditionMultipliers.sides[formData.sidesCondition as keyof typeof conditionMultipliers.sides] || 0.7;
  estimate *= conditionMultipliers.back[formData.backCondition as keyof typeof conditionMultipliers.back] || 0.6;
  
  // Apply battery health modifier
  if (formData.batteryHealth === false) {
    estimate *= 0.9;
  }
  
  // Apply functionality modifiers
  if (!formData.functionality.normal) {
    estimate *= 0.7;
  }
  if (formData.functionality.waterDamage) {
    estimate *= 0.6;
  }
  if (!formData.functionality.fingerprintSensor) {
    estimate *= 0.9;
  }
  
  // Round to nearest 10
  return Math.round(estimate / 10) * 10;
}