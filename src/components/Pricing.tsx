import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '€99',
    description: 'Perfect for small businesses',
    features: [
      'AI Price Suggestions',
      'Basic Analytics',
      'Up to 100 listings',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: '€299',
    description: 'For growing businesses',
    features: [
      'Advanced AI Pricing',
      'Full Analytics Suite',
      'Unlimited Listings',
      'Priority Support',
      'Custom Integrations',
      'Team Management'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large operations',
    features: [
      'Custom AI Solutions',
      'Dedicated Account Manager',
      'API Access',
      'Custom Reporting',
      '24/7 Support',
      'SLA Guarantee'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50'
                  : 'bg-white text-gray-900 border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wide bg-blue-500 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold">{plan.price}</p>
              <p className={`mt-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-blue-500'} mr-3`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}