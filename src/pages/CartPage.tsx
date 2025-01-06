import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CartItem } from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const navigate = useNavigate();
  const { items, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={`${item.id}-${item.storage}-${item.color}-${item.condition}`} {...item} />
              ))}
            </div>
            
            <div className="mt-8 border-t pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-2xl font-bold text-gray-900">€{getTotal()}</span>
              </div>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/shop')}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate('/checkout')}
                  className="flex-1"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}