import React from 'react';

const paymentMethods = [
  // Credit/Debit Cards
  {
    name: 'Visa',
    icon: 'https://raw.githubusercontent.com/github/explore/2a3ce46f963399611d8e2054bb0ce9a4b539296a/topics/visa/visa.png'
  },
  {
    name: 'Mastercard',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png'
  },
  {
    name: 'American Express',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1200px-American_Express_logo.svg.png'
  },
  {
    name: 'Apple Pay',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png'
  },
  {
    name: 'iDEAL',
    icon: 'https://www.ideal.nl/img/ideal-logo.svg'
  },
  // Dutch Banks for iDEAL
  {
    name: 'ING',
    icon: 'https://www.ing.nl/assets/img/logos/ing-logo-desktop.png'
  },
  {
    name: 'ABN AMRO',
    icon: 'https://www.abnamro.nl/nl/media/logo-abn-amro_tcm16-11456.png'
  },
  {
    name: 'Rabobank',
    icon: 'https://www.rabobank.nl/assets/img/logo-rabobank.svg'
  }
];

export function PaymentMethods() {
  return (
    <div className="border-t border-gray-800 pt-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-300">Secure Payment Methods</h3>
        
        {/* Payment Methods Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {paymentMethods.map((method) => (
            <div 
              key={method.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center hover:bg-white/20 transition-colors"
              title={method.name}
            >
              <img 
                src={method.icon} 
                alt={method.name} 
                className="h-6 w-auto object-contain filter brightness-0 invert" 
              />
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mt-4">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
          <span>All transactions are secure and encrypted</span>
        </div>
      </div>
    </div>
  );
}