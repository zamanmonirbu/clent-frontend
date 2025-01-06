import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { CartItem } from './CartItem';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartOverlay({ isOpen, onClose }: CartOverlayProps) {
  const navigate = useNavigate();
  const { items, getTotal } = useCart();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.storage}-${item.color}-${item.condition}`}
                    {...item}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-xl font-bold">€{getTotal()}</span>
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}