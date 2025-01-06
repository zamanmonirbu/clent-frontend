import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useCartOverlay } from '../../hooks/useCartOverlay';

export function CartButton() {
  const { items } = useCart();
  const { toggle } = useCartOverlay();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={toggle}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="w-6 h-6 text-gray-600" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}