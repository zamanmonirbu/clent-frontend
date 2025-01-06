import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';

interface SlideItemProps {
  product: Product;
  isActive: boolean;
}

export function SlideItem({ product, isActive }: SlideItemProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`flex-shrink-0 w-44 bg-gray-50/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-contain p-2 bg-white/50"
          loading="lazy"
        />
        {product.discount && (
          <div className="absolute top-1 left-1 bg-emerald-600/90 backdrop-blur-sm text-white text-xs px-1.5 py-0.5 rounded-full">
            Sale!
          </div>
        )}
      </div>
      <div className="p-3 bg-white/70 backdrop-blur-sm">
        <h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600">{product.storage}</p>
        <div className="mt-1">
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through mr-1">
              €{product.originalPrice}
            </span>
          )}
          <span className="text-sm font-bold text-emerald-600">
            €{product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}