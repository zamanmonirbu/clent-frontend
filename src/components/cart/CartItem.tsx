import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  storage: string;
  color: string;
  condition: string;
}

export function CartItem({
  id,
  name,
  price,
  image,
  quantity,
  storage,
  color,
  condition,
}: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) return;
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="text-sm text-gray-500 space-y-1">
          <p>Storage: {storage}</p>
          <p>Color: {color}</p>
          <p>Condition: {condition}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="w-24 text-right">€{price * quantity}</div>
        <button
          onClick={() => removeItem(id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}