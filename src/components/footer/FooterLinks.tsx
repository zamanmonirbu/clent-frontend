import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    to: string;
  }>;
}

export function FooterLinks() {
  const { t } = useLanguage();

  const sections: FooterSection[] = [
    {
      title: t('footer.quickLinks'),
      links: [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.shop'), to: '/shop' },
        { label: t('nav.about'), to: '/about' },
        { label: t('nav.blog'), to: '/blog' }
      ]
    },
    {
      title: t('footer.help'),
      links: [
        { label: 'FAQ', to: '/help/faq' },
        { label: t('nav.contact'), to: '/help/contact' },
        { label: t('nav.shipping'), to: '/help/shipping' },
        { label: t('nav.returns'), to: '/help/returns' },
        { label: t('nav.privacy'), to: '/privacy-policy' },
        { label: t('nav.warranty'), to: '/warranty-policy' }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}