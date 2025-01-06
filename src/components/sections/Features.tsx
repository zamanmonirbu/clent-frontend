import React from 'react';
import { Shield, Truck, BadgeCheck } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

const features = [
  {
    icon: Shield,
    title: '12-Month Warranty',
    description: 'Every device comes with our comprehensive warranty coverage.'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Fast and free shipping on all orders within Europe.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assured',
    description: '30-point quality check on every device before shipping.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose PhoneFlex?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Quality and reliability you can trust
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}