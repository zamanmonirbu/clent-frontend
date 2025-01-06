import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

// Custom TikTok icon since it's not available in lucide-react
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition-colors"
      >
        <TikTokIcon className="w-6 h-6" />
      </a>
    </div>
  );
}