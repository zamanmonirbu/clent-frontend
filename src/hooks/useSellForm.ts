import { useState } from 'react';

export interface SellFormData {
  model: string;
  storage: string;
  screenCondition: string;
  sidesCondition: string;
  backCondition: string;
  batteryHealth: boolean | null;
  waterDamage: boolean | null;
  functionality: {
    normal: boolean;
    fingerprintSensor: boolean;
  };
}

const initialFormData: SellFormData = {
  model: '',
  storage: '',
  screenCondition: '',
  sidesCondition: '',
  backCondition: '',
  batteryHealth: null,
  waterDamage: null,
  functionality: {
    normal: true,
    fingerprintSensor: true
  }
};

export function useSellForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SellFormData>(initialFormData);

  const handleModelSelect = (model: string) => {
    setFormData(prev => ({ ...prev, model }));
  };

  const handleStorageSelect = (storage: string) => {
    setFormData(prev => ({ ...prev, storage }));
  };

  const handleConditionSelect = (type: 'screen' | 'sides' | 'back', condition: string) => {
    setFormData(prev => ({
      ...prev,
      [`${type}Condition`]: condition
    }));
  };

  const handleBatterySelect = (health: boolean) => {
    setFormData(prev => ({ ...prev, batteryHealth: health }));
  };

  const handleWaterDamageSelect = (value: boolean) => {
    setFormData(prev => ({ ...prev, waterDamage: value }));
  };

  const handleFunctionalitySelect = (key: keyof SellFormData['functionality'], value: boolean) => {
    setFormData(prev => ({
      ...prev,
      functionality: {
        ...prev.functionality,
        [key]: value
      }
    }));
  };

  const goToNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 9)); // Added one more step for water damage
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.model;
      case 2:
        return !!formData.storage;
      case 3:
        return !!formData.screenCondition;
      case 4:
        return !!formData.sidesCondition;
      case 5:
        return !!formData.backCondition;
      case 6:
        return formData.batteryHealth !== null;
      case 7:
        return formData.waterDamage !== null;
      case 8:
        return true; // Functionality check is always complete as it has default values
      default:
        return false;
    }
  };

  return {
    currentStep,
    formData,
    handleModelSelect,
    handleStorageSelect,
    handleConditionSelect,
    handleBatterySelect,
    handleWaterDamageSelect,
    handleFunctionalitySelect,
    goToNextStep,
    goToPreviousStep,
    isStepComplete
  };
}