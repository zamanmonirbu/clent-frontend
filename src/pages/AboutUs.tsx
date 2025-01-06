import React from 'react';
import { Shield, Users, Globe, Award, Smartphone, Recycle } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <div className="relative bg-emerald-900 text-white py-24 mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PhoneFlex</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Leading the way in sustainable technology through innovative refurbishment solutions
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At PhoneFlex, we're committed to reducing electronic waste while providing 
              high-quality refurbished phones at competitive prices. Our AI-driven 
              approach ensures the best possible experience for both buyers and sellers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where buying refurbished phones is the smart choice 
              for environmentally conscious consumers who don't want to compromise on quality.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Every phone undergoes a rigorous 30-point inspection process.'
              },
              {
                icon: Award,
                title: '2-Year Warranty',
                description: 'Comprehensive coverage for complete peace of mind.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Dedicated team available to help you every step of the way.'
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-emerald-900 rounded-xl text-white p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Smartphone,
                stat: '50,000+',
                label: 'Phones Refurbished'
              },
              {
                icon: Recycle,
                stat: '500,000 kg',
                label: 'E-Waste Prevented'
              },
              {
                icon: Globe,
                stat: '20+',
                label: 'Countries Served'
              }
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
                <div className="text-4xl font-bold mb-2">{stat.stat}</div>
                <div className="text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}