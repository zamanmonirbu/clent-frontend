import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import a dropdown icon

interface IdealBankSelectorProps {
  selectedBank: string;
  onBankSelect: (bankId: string) => void;
}

const idealBanks = [
  {
    id: "ing",
    name: "ING",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UyXKdO0tg8P2yNQR4GA7MuXrJyKBahAiNg&s"
  },
  {
    id: "abn",
    name: "ABN AMRO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGSouxoo2C7lnAmouNdDBCMTNsD91LAb_xw&s"
  },
  {
    id: "rabobank",
    name: "Rabobank",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Rabobank_logo.svg"
  },
  {
    id: "asn",
    name: "ASN Bank",
    logo: "https://www.ecobusiness.fund/fileadmin/_processed_/6/c/csm_2017_07_ASN_Bank_logo_ef9949a5c3.png"
  },
  {
    id: "sns",
    name: "SNS Bank",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJesb2AILerOWRKlncyBFRquouIV7mSvJ1Q&s"
  },
  {
    id: "bunq",
    name: "bunq",
    logo: "https://logowik.com/content/uploads/images/bunq6945.jpg"
  },
  {
    id: "knab",
    name: "Knab",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcX8iPCR9zWAteG71dJBeGKEpRtdngl1KTg&s"
  },
  {
    id: "revolut",
    name: "Revolut",
    logo: "https://fintech.svetidej.com/images/stories/stran/600x315/revolut-logo.png"
  },
  {
    id: "VanLanschotKempen",
    name: "Van Lanschot Kempen",
    logo: "https://www.banken.nl/profile/media/van-lanschot-kempen-spotlight-2022-09-01-141233637.png"
  },
  {
    id: "Yoursafe",
    name: "Yoursafe",
    logo: "https://www.yoursafe.com/images.v2/logo-yoursafe-small.png"
  },
  {
    id: "N26",
    name: "N26",
    logo: "https://images.ctfassets.net/q33z48p65a6w/42Hvr3OYJgxAEdzoB2quix/83aedba1d73629c9953b615197915ac6/N26_Newsroom___N26_Logo_Thumbnail.png?fit=thumb&fm=png&q=80&w=600"
  },
  {
    id: "Nationale-Nederlanden",
    name: "Nationale-Nederlanden",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjIqsLtjmUjXIV1Pz9YW0iWAIc8Q79-WH4g&s"
  },
  {
    id: "RegioBank",
    name: "RegioBank",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h4jVxXkbabmXOBiftYhyocXRSiatfYR6Mw&s"
  },
  {
    id: "Triodos Bank",
    name: "Triodos Bank",
    logo: "https://banner2.cleanpng.com/20180601/syv/kisspng-triodos-bank-uk-european-investment-bank-bank-5b118cad18f103.8751841615278767811022.jpg"
  }
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
      {/* Search Input */}
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
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // Delay dropdown closing
          className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:ring-emerald-500 focus:border-emerald-500"
        />
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />

        {/* Dropdown */}
        {showDropdown && (
          <div
            onMouseDown={(e) => e.preventDefault()} // Prevent dropdown from closing
            className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10 overflow-y-auto"
            style={{ maxHeight: "200px" }} // Set a fixed max height for scrolling
          >
            {(searchTerm ? filteredBanks : idealBanks).map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  onBankSelect(bank.id);
                  setShowDropdown(false);
                  setSearchTerm(""); 
                  // console.log("Working click");
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

      {/* Selected Bank */}
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
