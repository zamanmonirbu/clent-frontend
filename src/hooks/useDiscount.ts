import { create } from 'zustand';

interface DiscountStore {
  discount: number;
  setDiscount: (amount: number) => void;
}

export const useDiscount = create<DiscountStore>((set) => ({
  discount: 0,
  setDiscount: (amount) => set({ discount: amount })
}));