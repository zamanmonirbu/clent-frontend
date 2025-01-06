import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { FooterLinks } from './footer/FooterLinks';
import { SocialLinks } from './footer/SocialLinks';
import { PaymentMethods } from './footer/PaymentMethods';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get 10% Off Your Next Purchase
            </h3>
            <p className="text-gray-400 mb-6">
              Fill in your email now and get 10% off your next purchase!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                {t('footer.subscribe')} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">PhoneFlex</span>
            </div>
            <p className="text-gray-400 mb-4">
              Explore premium refurbished iPhones with unbeatable quality and prices.
            </p>
            <SocialLinks />
          </div>
          
          <FooterLinks />
        </div>

        <PaymentMethods />
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PhoneFlex. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}