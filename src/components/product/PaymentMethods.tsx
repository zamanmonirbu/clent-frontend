import React from 'react';

export function PaymentMethods() {
  return (
    <div className="border-t pt-6">
      <p className="text-sm text-gray-600 mb-3">Secure payment methods:</p>
      <div className="flex items-center gap-2 flex-wrap">
        <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/349/349238.png" alt="PayPal" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968416.png" alt="Apple Pay" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968389.png" alt="Shop Pay" className="h-8" />
        <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="iDEAL" className="h-8" />
      </div>
    </div>
  );
}