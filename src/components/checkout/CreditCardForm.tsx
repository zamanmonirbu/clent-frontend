import React from 'react';

interface CreditCardFormProps {
  cardInfo: {
    number: string;
    expiry: string;
    cvc: string;
  };
  onChange: (info: { number: string; expiry: string; cvc: string }) => void;
}

export function CreditCardForm({ cardInfo, onChange }: CreditCardFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          value={cardInfo.number}
          onChange={(e) => onChange({ ...cardInfo, number: e.target.value })}
          className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            value={cardInfo.expiry}
            onChange={(e) => onChange({ ...cardInfo, expiry: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVC
          </label>
          <input
            type="text"
            value={cardInfo.cvc}
            onChange={(e) => onChange({ ...cardInfo, cvc: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
    </div>
  );
}