import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useSearchResults } from '../../hooks/useSearchResults';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { results, isLoading } = useSearchResults(query);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      <div
        ref={searchRef}
        className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-lg shadow-xl"
      >
        <div className="p-4 border-b flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for iPhones..."
            className="flex-1 outline-none text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {query && (
          <div className="max-h-96 overflow-y-auto p-2">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Loading...</div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full p-2 hover:bg-gray-50 rounded-lg flex items-center gap-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.storage}</div>
                    </div>
                    <div className="text-emerald-600 font-medium">€{product.price}</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}