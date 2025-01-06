import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '../translations';

type Language = 'en' | 'nl';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      t: (key) => {
        const { language } = get();
        return translations[language][key] || key;
      }
    }),
    {
      name: 'language-storage'
    }
  )
);