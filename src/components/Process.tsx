import React from 'react';
import { Upload, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Connect Your Inventory',
    description: 'Upload your phone details effortlessly and let our system do the heavy lifting.'
  },
  {
    icon: Cpu,
    title: 'Optimize with AI',
    description: 'Our AI analyzes market data to optimize pricing and streamline operations.'
  },
  {
    icon: TrendingUp,
    title: 'Watch Your Business Grow',
    description: 'Scale your operations seamlessly with automated workflows and insights.'
  }
];

export default function Process() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Three simple steps to transform your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200" />
              )}
              <div className="relative bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}