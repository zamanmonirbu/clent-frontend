import { useState, useEffect } from 'react';
import { products } from '../data/products';
import type { Product } from '../types/product';

export function useSearchResults(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.storage.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return { results, isLoading };
}