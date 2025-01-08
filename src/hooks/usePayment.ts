import { useState } from "react";
import { useCart } from "./useCart";
import { BASE_URL } from "../api/baseUrl";
import { useNavigate } from "react-router-dom";

export function usePayment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { items } = useCart();
  const navigate = useNavigate();

  const initializePayment = async (method: "ideal" | "card", bankId?: string) => {
    setIsLoading(true);
    setError(null);

    const dataPass = {
      method,
      bankId,
    };

    console.log(dataPass, items);

    try {
      const response = await fetch(`${BASE_URL}/api/payment/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataPass, items }),
      });

      if (!response.ok) throw new Error("Failed to initialize payment");

      const data = await response.json();

      if (data.paymentUrl) {
        // Navigate to external payment gateway
        window.location.href = data.paymentUrl;
      } else {
        // Handle in-app payment (e.g., card payment)
        navigate("/checkout/success");
      }
      setIsLoading(false);
    } catch (err: any) {
      console.log(err.message);
      setIsLoading(false);
      setError(err.message || "Something went wrong");
      navigate("/checkout/fail"); // Navigate to failure page on error
      throw err;
    }
  };

  return { initializePayment, isLoading, error };
}
