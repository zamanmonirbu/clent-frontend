import React from 'react';
import { X } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export function Toast() {
  const { toast, hideToast } = useToast();

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`
          px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-sm
          ${toast.type === 'success' 
            ? 'bg-emerald-500/90 text-white' 
            : 'bg-red-500/90 text-white'
          }
        `}
      >
        <span>{toast.message}</span>
        <button 
          onClick={hideToast}
          className="hover:opacity-80 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}