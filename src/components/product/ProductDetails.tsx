import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < product.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {product.reviews} reviews
        </span>
      </div>
    </div>
  );
}