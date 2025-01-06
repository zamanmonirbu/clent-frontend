import React from 'react';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { ProductGrid } from '../components/shop/ProductGrid';
import { SortDropdown } from '../components/shop/SortDropdown';
import { useFilters } from '../hooks/useFilters';

export function ShopPage() {
  const {
    filters,
    updateFilter,
    resetFilters,
    setSortBy,
    getFilteredProducts
  } = useFilters();

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Refurbished iPhones ({filteredProducts.length})
          </h1>
          <SortDropdown onSort={setSortBy} />
        </div>
        
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={updateFilter}
            onReset={resetFilters}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}