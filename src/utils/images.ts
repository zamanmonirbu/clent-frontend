import { ImageOff } from 'lucide-react';

// Define image paths for each iPhone model
export const productImages: Record<string, string> = {
  'iphone-12': '/images/iphone-12.png',
  'iphone-12-mini': '/images/iphone-12-mini.png',
  'iphone-12-pro': '/images/iphone-12-pro.png',
  'iphone-12-pro-max': '/images/iphone-12-pro-max.png',
  'iphone-13': '/images/iphone-13.png',
  'iphone-13-mini': '/images/iphone-13-mini.png',
  'iphone-13-pro': '/images/iphone-13-pro.png',
  'iphone-13-pro-max': '/images/iphone-13-pro-max.png',
  'iphone-14': '/images/iphone-14.png',
  'iphone-14-plus': '/images/iphone-14-plus.png',
  'iphone-14-pro': '/images/iphone-14-pro.png',
  'iphone-14-pro-max': '/images/iphone-14-pro-max.png',
  'iphone-15': '/images/iphone-15.png',
  'iphone-15-plus': '/images/iphone-15-plus.png',
  'iphone-15-pro': '/images/iphone-15-pro.png',
  'iphone-15-pro-max': '/images/iphone-15-pro-max.png'
};

// Helper function to get the correct image path
export const getProductImage = (modelId: string): string => {
  const normalizedId = modelId.toLowerCase().replace(/_/g, '-');
  return productImages[normalizedId] || '/images/placeholder.png';
};