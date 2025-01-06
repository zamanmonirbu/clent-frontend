import { useEffect } from 'react';
import { products } from '../data/products';

export function useImagePreload() {
  useEffect(() => {
    const imageUrls = products.map(product => product.image);
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);
}