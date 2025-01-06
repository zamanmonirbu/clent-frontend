import React, { useState } from 'react';
import { Globe2, Check } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Nederlands' }
  ];

  const handleLanguageChange = (langCode: 'en' | 'nl') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Select language"
      >
        <Globe2 className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200"
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as 'en' | 'nl')}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              {lang.name}
              {language === lang.code && (
                <Check className="w-4 h-4 text-emerald-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}