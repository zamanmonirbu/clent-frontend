import { useState } from "react";
import { useCart } from "./useCart";
import {BASE_URL} from '../api/baseUrl'
export function usePayment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
    const { items } = useCart();
  

  const initializePayment = async (method: 'ideal' | 'card', bankId?: string) => {
    setIsLoading(true);
    setError(null);

    const dataPass={
      method, bankId
    };

    try {
      const response = await fetch(`${BASE_URL}/api/payment/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({dataPass,items}),
      });

      if (!response.ok) throw new Error('Failed to initialize payment');
      const data = await response.json();

      setIsLoading(false);
      return data; // { paymentUrl: "https://checkout.stripe.com/..." }
    } catch (err: any) {
      console.log(err.message)
      setIsLoading(false);
      setError(err.message || 'Something went wrong');
      throw err;
    }
  };

  return { initializePayment, isLoading, error };
}


// import { useState } from 'react';
// import { createPaymentIntent } from '../utils/stripe';

// interface UsePaymentOptions {
//   onSuccess?: () => void;
//   onError?: (error: string) => void;
// }

// export function usePayment(options: UsePaymentOptions = {}) {
//   const [clientSecret, setClientSecret] = useState<string>('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const initializePayment = async (amount: number, paymentMethod: 'ideal' | 'card' = 'card') => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const { clientSecret } = await createPaymentIntent({
//         amount,
//         paymentMethod
//       });
//       setClientSecret(clientSecret);
//       options.onSuccess?.();
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Payment initialization failed';
//       setError(errorMessage);
//       options.onError?.(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     clientSecret,
//     isLoading,
//     error,
//     initializePayment,
//   };
// }