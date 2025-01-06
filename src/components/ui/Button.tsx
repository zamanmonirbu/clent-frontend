import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({ 
  variant = 'primary',
  children,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    outline: "border-2 border-gray-200 hover:border-gray-300 text-gray-700 focus:ring-gray-500"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        loading && "opacity-75 cursor-not-allowed",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : children}
    </button>
  );
}