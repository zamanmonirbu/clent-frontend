import React from 'react';
import { Shield } from 'lucide-react';

export function WarrantyBadge() {
  return (
    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium text-emerald-600 shadow-sm">
      <Shield className="w-3 h-3" />
      <span>24M Warranty</span>
    </div>
  );
}