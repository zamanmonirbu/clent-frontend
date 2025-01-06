import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useDiscount } from '../../hooks/useDiscount';
import { DiscountCode } from './DiscountCode';

export function OrderSummary() {
  const { items, getTotal } = useCart();
  const { discount, setDiscount } = useDiscount();
  const subtotal = getTotal();
  const shipping = 0; // Free shipping
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => {
          // Create a unique key combining all variant information
          const itemKey = `${item.id}-${item.storage}-${item.color}-${item.condition}`;
          
          return (
            <div key={itemKey} className="flex justify-between">
              <div>
                <div className="font-medium text-gray-900">
                  {item.name} ({item.storage})
                </div>
                <div className="text-sm text-gray-500">
                  {item.color} - {item.condition}
                </div>
                <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
              </div>
              <div className="font-medium text-gray-900">€{item.price * item.quantity}</div>
            </div>
          );
        })}
      </div>

      <DiscountCode onApply={setDiscount} />

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>€{subtotal}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Discount ({discount}%)</span>
            <span>-€{discountAmount}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `€${shipping}`}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2">
          <span>Total</span>
          <span>€{total}</span>
        </div>
      </div>
    </div>
  );
}