import React from 'react';
import { Shield } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  hasDiscount?: boolean;
  hasWarranty?: boolean;
}

export function ProductImage({ src, alt, hasDiscount, hasWarranty }: ProductImageProps) {
  return (
    <div className="aspect-square relative rounded-lg overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {hasDiscount && (
        <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          Special offer!
        </div>
      )}
      {hasWarranty && (
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium text-emerald-600 shadow-sm">
          <Shield className="w-3 h-3" />
          <span>24M Warranty</span>
        </div>
      )}
    </div>
  );
}