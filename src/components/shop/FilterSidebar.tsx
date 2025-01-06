import React from 'react';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  filters: any;
  onFilterChange: (category: string, value: string | number[]) => void;
  onReset: () => void;
}

export function FilterSidebar({ filters, onFilterChange, onReset }: FilterSidebarProps) {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Filters</h2>
          </div>
          <button
            onClick={onReset}
            className="text-sm text-emerald-600 hover:text-emerald-700"
          >
            Reset
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Price range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min={200}
              max={1200}
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>€{filters.priceRange[0]}</span>
              <span>€{filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Series Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Series</h3>
          <div className="space-y-2">
            {['iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12'].map((series) => (
              <label key={series} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.series.includes(series)}
                  onChange={() => onFilterChange('series', series)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600">{series}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Storage */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Storage</h3>
          <div className="space-y-2">
            {['64GB', '128GB', '256GB', '512GB'].map((storage) => (
              <label key={storage} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.storage.includes(storage)}
                  onChange={() => onFilterChange('storage', storage)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600">{storage}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Condition */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Condition</h3>
          <div className="space-y-2">
            {['fair', 'good', 'excellent'].map((condition) => (
              <label key={condition} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.condition.includes(condition)}
                  onChange={() => onFilterChange('condition', condition)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600 capitalize">{condition}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}