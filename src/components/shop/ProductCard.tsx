import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ProductImage } from '../product/ProductImage';
import { WarrantyBadge } from '../product/WarrantyBadge';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-square relative">
          <ProductImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-emerald-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
              Special Offer!
            </div>
          )}
          {product.warranty && <WarrantyBadge />}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {product.name}
              </h3>
              <div className="text-sm text-gray-600">{product.storage}</div>
            </div>
            <div className="text-right">
              {product.originalPrice && (
                <div className="text-sm text-gray-400 line-through">
                  €{product.originalPrice}
                </div>
              )}
              <div className="text-lg font-bold text-gray-900">
                €{product.price}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}