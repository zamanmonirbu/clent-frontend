import { create } from 'zustand';

interface Toast {
  type: 'success' | 'error';
  message: string;
}

interface ToastStore {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}

export const useToast = create<ToastStore>((set) => ({
  toast: null,
  showToast: (toast) => {
    set({ toast });
    // Auto-hide after 5 seconds
    setTimeout(() => {
      set({ toast: null });
    }, 5000);
  },
  hideToast: () => set({ toast: null })
}));