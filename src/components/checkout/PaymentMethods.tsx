import { useState } from "react";
import { CreditCard, Building2 } from "lucide-react";
import { Button } from "../ui/Button";
import { usePayment } from "../../hooks/usePayment";
import { IdealBankSelector } from "./IdealBankSelector";
import Checkout from "../../pages/payment/Checkout";

interface PaymentMethodsProps {
  onBack: () => void;
}

export function PaymentMethods({ onBack }: PaymentMethodsProps) {



  const [selectedMethod, setSelectedMethod] = useState<"card" | "ideal" | "">(
    ""
  ); // Payment method state
  const [selectedBank, setSelectedBank] = useState(""); // Bank selection for iDEAL
  const { initializePayment, isLoading, error } = usePayment();

  // Handle payment method selection
  const handleMethodSelect = (method: "card" | "ideal") => {
    setSelectedMethod(method);
  };

  console.log(selectedBank,selectedBank);


  const handleSubmit = async () => {
    if (!selectedMethod) return;
  
    try {
      await initializePayment(selectedMethod, selectedBank); // Navigation handled in the hook
    } catch (err) {
      console.error("Payment failed:", err);
    }
  };
  

  return (
    <div className="space-y-8">

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">
          Select Payment Method
        </h3>

        {/* Credit Card Option */}
        <div>
          <button
            onClick={() => handleMethodSelect("card")}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedMethod === "card"
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-200 hover:border-emerald-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Credit Card</span>
            </div>
          </button>

          {/* Show Checkout form if "Credit Card" is selected */}
          {selectedMethod === "card" && (
            <div className="mt-4">
              <Checkout />
            </div>
          )}
        </div>

        {/* iDEAL Option */}
        <button
          onClick={() => handleMethodSelect("ideal")}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
            selectedMethod === "ideal"
              ? "border-emerald-500 bg-emerald-50"
              : "border-gray-200 hover:border-emerald-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-gray-600" />
            <span className="font-medium">iDEAL</span>
          </div>
        </button>
      </div>

      {selectedMethod === "ideal" && (
        <IdealBankSelector
          selectedBank={selectedBank}
          onBankSelect={setSelectedBank}
        />
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
      )}

<div className="flex gap-4 pt-6">
  <Button variant="outline" onClick={onBack} className="flex-1">
    Back
  </Button>
  <Button
    variant="primary"
    onClick={handleSubmit}
    disabled={
      !selectedMethod || // Disable if no payment method is selected
      (selectedMethod === "ideal" && !selectedBank) || // Disable for iDEAL if no bank is selected
      selectedMethod === "card" // Disable for Credit Card always
    }
    loading={isLoading} // Show loading state when processing
    className="flex-1"
  >
    Continue
  </Button>
</div>

    </div>
  );
}
