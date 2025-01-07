import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import a dropdown icon

interface IdealBankSelectorProps {
  selectedBank: string;
  onBankSelect: (bankId: string) => void;
}

const idealBanks = [
  { id: "ing", name: "ING", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UyXKdO0tg8P2yNQR4GA7MuXrJyKBahAiNg&s" },
  { id: "abn", name: "ABN AMRO", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGSouxoo2C7lnAmouNdDBCMTNsD91LAb_xw&s" },
  { id: "rabobank", name: "Rabobank", logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Rabobank_logo.svg" },
  { id: "asn", name: "ASN Bank", logo: "https://www.asnbank.nl/web/file?uuid=06f6e40f-9d9e-4b52-9f7a-9f7af46f58d2" },
  { id: "sns", name: "SNS Bank", logo: "https://www.snsbank.nl/content/dam/sns/logos/sns-logo.png" },
  { id: "bunq", name: "bunq", logo: "https://www.bunq.com/assets/images/bunq-logo.svg" },
  { id: "knab", name: "Knab", logo: "https://www.knab.nl/content/knab/nl/_jcr_content/root/header/logo.img.png" },
  { id: "revolut", name: "Revolut", logo: "https://www.revolut.com/icons/icon-512x512.png" },
];

export function IdealBankSelector({ selectedBank, onBankSelect }: IdealBankSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter banks based on the search term
  const filteredBanks = idealBanks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a bank"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true); // Show dropdown when typing
          }}
          onFocus={() => setShowDropdown(true)} // Show dropdown when focused
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // Hide dropdown after losing focus
          className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:ring-emerald-500 focus:border-emerald-500"
        />
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" /> {/* Dropdown Icon */}

        {showDropdown && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
            {(searchTerm ? filteredBanks : idealBanks).map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  onBankSelect(bank.id);
                  setShowDropdown(false);
                  setSearchTerm(""); // Clear search after selection
                }}
                className="flex items-center gap-4 w-full p-3 hover:bg-gray-100 focus:outline-none"
              >
                <img src={bank.logo} alt={bank.name} className="h-8 w-8" />
                <span className="text-sm text-gray-700">{bank.name}</span>
              </button>
            ))}
            {filteredBanks.length === 0 && searchTerm && (
              <div className="p-3 text-sm text-gray-500">No banks found</div>
            )}
          </div>
        )}
      </div>

      {selectedBank && (
        <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
          <img
            src={idealBanks.find((bank) => bank.id === selectedBank)?.logo}
            alt={selectedBank}
            className="h-10 w-10"
          />
          <span className="text-sm text-gray-900">
            {idealBanks.find((bank) => bank.id === selectedBank)?.name}
          </span>
        </div>
      )}
    </div>
  );
}
