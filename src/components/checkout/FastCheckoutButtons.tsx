import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function FastCheckoutButtons() {
  const navigate = useNavigate();

  const handleStripeCheckout = () => {
    navigate("/pay/checkout");
  };

  return (
    <div className="space-y-3">
      {/* Apple Pay Button */}
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white border-black"
        onClick={
          handleStripeCheckout
        }
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.0425 7.19086C16.6431 7.67708 15.9197 8.06308 15.1964 7.99474C15.1148 7.22672 15.4733 6.41224 15.8318 5.9602C16.2719 5.41474 17.0425 5.06496 17.6843 5.02869C17.7659 5.83144 17.4482 6.6459 17.0425 7.19086Z" />
        </svg>
        Pay with Apple Pay
      </Button>

      {/* Stripe Payment Button */}
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 bg-[#635BFF] hover:bg-[#4F46E5] text-white border-[#635BFF]"
        onClick={handleStripeCheckout}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-1.028 1.324-1.028 1.567 0 3.177.603 4.27 1.14l.628-3.854c-.907-.363-2.853-.8-5.422-.8-1.858 0-3.407.484-4.27 1.29-.907.787-1.324 1.93-1.324 3.298 0 2.485 1.512 3.643 3.991 4.578 1.626.604 2.171 1.14 2.171 1.861 0 .708-.603 1.163-1.533 1.163-1.22 0-3.21-.604-4.532-1.4l-.628 3.854c1.22.622 3.479 1.14 5.82 1.14 1.974 0 3.617-.484 4.532-1.325.994-.863 1.463-2.072 1.463-3.557 0-2.522-1.533-3.643-3.978-4.557z" />
        </svg>
        Pay with Stripe
      </Button>
    </div>
  );
}
