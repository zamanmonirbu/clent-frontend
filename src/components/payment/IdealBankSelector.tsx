import React from 'react';

interface IdealBankSelectorProps {
  selectedBank: string;
  onBankSelect: (bankId: string) => void;
}

const idealBanks = [
  {
    id: 'ing',
    name: 'ING',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UyXKdO0tg8P2yNQR4GA7MuXrJyKBahAiNg&s'
  },
  {
    id: 'abn',
    name: 'ABN AMRO',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGSouxoo2C7lnAmouNdDBCMTNsD91LAb_xw&s'
  },
  {
    id: 'rabobank',
    name: 'Rabobank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Rabobank_logo.svg'
  },
  {
    id: 'asn',
    name: 'ASN Bank',
    logo: 'https://www.asnbank.nl/web/file?uuid=06f6e40f-9d9e-4b52-9f7a-9f7af46f58d2'
  }
];

export function IdealBankSelector({ selectedBank, onBankSelect }: IdealBankSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <img 
          src="https://www.ideal.nl/img/ideal-logo.svg" 
          alt="iDEAL" 
          className="h-8"
        />
        <span className="text-sm font-medium text-gray-700">
          Select your bank to pay with iDEAL
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {idealBanks.map((bank) => (
          <button
            key={bank.id}
            onClick={() => onBankSelect(bank.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedBank === bank.id
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md p-2 border border-gray-100">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="font-medium">{bank.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}