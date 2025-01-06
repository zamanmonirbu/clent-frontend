import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Revolutionizing the Refurbished Phone Industry with AI
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Automate your workflow, enhance productivity, and scale your business with PhoneFlex's cutting-edge AI solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}