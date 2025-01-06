import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Smartphone, Globe2, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { NavigationMenu } from './NavigationMenu';
import { LanguageSelector } from './LanguageSelector';
import { SearchBar } from './SearchBar';
import { CartButton } from './CartButton';
import { useLanguage } from '../../hooks/useLanguage';

export function Header() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b top-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-bold">PhoneFlex</span>
        </Link>
        
        <NavigationMenu />
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/sell')}
          >
            {t('nav.sellToUs')}
          </Button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          <LanguageSelector />
          
          <CartButton />
        </div>
      </div>

      {/* Search Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}