import { create } from 'zustand';
import { products } from '../data/products';
import type { Product } from '../types/product';

interface Filters {
  priceRange: [number, number];
  series: string[];
  storage: string[];
  condition: string[];
}

interface FilterStore {
  filters: Filters;
  sortBy: string;
  updateFilter: (category: keyof Filters, value: string | string[] | [number, number]) => void;
  resetFilters: () => void;
  setSortBy: (value: string) => void;
  getFilteredProducts: () => Product[];
}

const initialFilters: Filters = {
  priceRange: [200, 1200],
  series: [],
  storage: [],
  condition: []
};

export const useFilters = create<FilterStore>((set, get) => ({
  filters: initialFilters,
  sortBy: 'popular',

  updateFilter: (category, value) => set(state => {
    if (category === 'priceRange' && Array.isArray(value)) {
      return {
        filters: {
          ...state.filters,
          [category]: value
        }
      };
    }

    // Handle single string value for array filters
    if (typeof value === 'string') {
      const currentArray = state.filters[category] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        filters: {
          ...state.filters,
          [category]: newArray
        }
      };
    }

    // Handle array of strings
    if (Array.isArray(value) && typeof value[0] === 'string') {
      return {
        filters: {
          ...state.filters,
          [category]: value
        }
      };
    }

    return state;
  }),

  resetFilters: () => set({ filters: initialFilters, sortBy: 'popular' }),

  setSortBy: (value) => set({ sortBy: value }),

  getFilteredProducts: () => {
    const { filters, sortBy } = get();
    let result = [...products];

    // Apply series filter
    if (filters.series && filters.series.length > 0) {
      result = result.filter(product => 
        filters.series.some(series => product.name.includes(series))
      );
    }

    // Apply storage filter
    if (filters.storage && filters.storage.length > 0) {
      result = result.filter(product => 
        filters.storage.includes(product.storage)
      );
    }

    // Apply condition filter
    if (filters.condition && filters.condition.length > 0) {
      result = result.filter(product => 
        filters.condition.includes(product.condition.toLowerCase())
      );
    }

    // Apply price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());
        break;
      default: // 'popular'
        result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }
}));