import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 pt-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl animate-blob1 top-1/4 -left-20" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-blob2 top-1/2 left-1/3" />
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-blob3 -top-32 right-0" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-blob4 bottom-0 right-1/4" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight animate-fadeIn">
              Premium Refurbished Phones<br />for Smart Buyers
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto lg:mx-0 mb-10 animate-fadeInDelay">
              High-quality refurbished phones at unbeatable prices. Every device is thoroughly tested and comes with a 12-month warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInDelay2">
              <Button 
                variant="primary" 
                className="group"
                onClick={() => navigate('/shop')}
              >
                Shop Now <ArrowRight className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="!border-white !text-white hover:!bg-white/10"
                onClick={() => navigate('/sell')}
              >
                Sell To Us
              </Button>
            </div>
          </div>
          
          {/* Animated Phone */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent z-10" />
            <div className="relative z-20 animate-float">
              <div className="relative w-[300px] h-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-900/10 backdrop-blur-sm rounded-[3rem] border border-white/20" />
                <div className="absolute inset-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem]" />
                <div className="absolute inset-x-4 top-6 h-6 bg-black rounded-full" />
                <div className="absolute inset-2 rounded-[2.75rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 animate-gradient" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}