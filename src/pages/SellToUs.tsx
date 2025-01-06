import React from 'react';
import { PhoneModelSelector } from '../components/sell/PhoneModelSelector';
import { StorageSelector } from '../components/sell/StorageSelector';
import { ConditionSelector } from '../components/sell/ConditionSelector';
import { BatteryHealthCheck } from '../components/sell/BatteryHealthCheck';
import { FunctionalityCheck } from '../components/sell/FunctionalityCheck';
import { PriceEstimate } from '../components/sell/PriceEstimate';
import { StepIndicator } from '../components/sell/StepIndicator';
import { useSellForm } from '../hooks/useSellForm';

export function SellToUs() {
  const { 
    currentStep,
    formData,
    handleModelSelect,
    handleStorageSelect,
    handleConditionSelect,
    handleBatterySelect,
    handleFunctionalitySelect,
    goToNextStep,
    goToPreviousStep,
    isStepComplete
  } = useSellForm();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Sell Your iPhone to Us
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <StepIndicator currentStep={currentStep} />
          
          <div className="mt-8">
            {currentStep === 1 && (
              <PhoneModelSelector
                selectedModel={formData.model}
                onSelect={handleModelSelect}
                onNext={goToNextStep}
              />
            )}
            
            {currentStep === 2 && (
              <StorageSelector
                selectedStorage={formData.storage}
                phoneModel={formData.model}
                onSelect={handleStorageSelect}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 3 && (
              <ConditionSelector
                type="screen"
                selected={formData.screenCondition}
                onSelect={(condition) => handleConditionSelect('screen', condition)}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 4 && (
              <ConditionSelector
                type="sides"
                selected={formData.sidesCondition}
                onSelect={(condition) => handleConditionSelect('sides', condition)}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 5 && (
              <ConditionSelector
                type="back"
                selected={formData.backCondition}
                onSelect={(condition) => handleConditionSelect('back', condition)}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 6 && (
              <BatteryHealthCheck
                batteryHealth={formData.batteryHealth}
                onSelect={handleBatterySelect}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 7 && (
              <FunctionalityCheck
                functionality={formData.functionality}
                onSelect={handleFunctionalitySelect}
                onNext={goToNextStep}
                onBack={goToPreviousStep}
              />
            )}
            
            {currentStep === 8 && (
              <PriceEstimate
                formData={formData}
                onBack={goToPreviousStep}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}