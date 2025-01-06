import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  method: 'card' | 'ideal' | 'bank';
  bank?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvc?: string;
}

interface CheckoutStore {
  shippingInfo: ShippingInfo | null;
  paymentInfo: PaymentInfo | null;
  setShippingInfo: (info: ShippingInfo) => void;
  setPaymentInfo: (info: PaymentInfo) => void;
  clearCheckout: () => void;
}

export const useCheckout = create<CheckoutStore>()(
  persist(
    (set) => ({
      shippingInfo: null,
      paymentInfo: null,
      setShippingInfo: (info) => set({ shippingInfo: info }),
      setPaymentInfo: (info) => set({ paymentInfo: info }),
      clearCheckout: () => set({ shippingInfo: null, paymentInfo: null })
    }),
    {
      name: 'checkout-storage'
    }
  )
);