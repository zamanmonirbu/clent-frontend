import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';

interface AddToCartButtonProps {
  onClick: () => void;
  disabled: boolean;
  price: number;
  originalPrice?: number;
}

export function AddToCartButton({
  onClick,
  disabled,
  price,
  originalPrice
}: AddToCartButtonProps) {
  return (
    <div className="pt-6 border-t">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-gray-500">Price:</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">
              €{price}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                €{originalPrice}
              </span>
            )}
          </div>
        </div>
        <div className="text-sm text-emerald-600">
          <span className="font-medium">In Stock</span>
        </div>
      </div>
      <Button
        variant="primary"
        className="w-full flex items-center justify-center gap-2"
        onClick={onClick}
        disabled={disabled}
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </Button>
    </div>
  );
}