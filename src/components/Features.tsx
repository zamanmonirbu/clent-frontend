import React from 'react';
import { Brain, Workflow, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Automated Pricing Tools',
    description: 'AI-driven price suggestions that maximize your profits while staying competitive in the market.'
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    description: 'Streamline your operations with intelligent automation for inventory management and logistics.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Insights',
    description: 'Advanced analytics and market trend analysis to make data-driven decisions.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Your Business
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to scale your refurbished phone business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}