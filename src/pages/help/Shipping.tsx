import React from 'react';
import { 
  Truck, 
  Package, 
  Clock, 
  Globe, 
  MapPin,
  CalendarCheck,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export function Shipping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast and reliable shipping across Europe. Free shipping on all orders.
          </p>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Truck,
              title: 'Standard Delivery',
              time: '3-5 business days',
              price: 'Free',
              description: 'Available for all orders'
            },
            {
              icon: Package,
              title: 'Express Delivery',
              time: '1-2 business days',
              price: '€9.99',
              description: 'Order before 2 PM for same-day processing'
            },
            {
              icon: Clock,
              title: 'Next Day Delivery',
              time: 'Next business day',
              price: '€14.99',
              description: 'Order before 2 PM for delivery tomorrow'
            }
          ].map((option) => (
            <div 
              key={option.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <option.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                  <p className="text-sm text-emerald-600">{option.time}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">{option.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Shipping Process */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: 'Order Processing',
                description: 'Orders are processed within 24 hours'
              },
              {
                icon: CalendarCheck,
                title: 'Quality Check',
                description: 'Each device undergoes final inspection'
              },
              {
                icon: Truck,
                title: 'Shipping',
                description: 'Secure packaging and tracked shipping'
              },
              {
                icon: MapPin,
                title: 'Delivery',
                description: 'Safe delivery to your doorstep'
              }
            ].map((step, index) => (
              <div key={step.title} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-200" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-6 h-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Shipping Destinations</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We currently ship to all EU countries. Delivery times may vary by location.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Note: Additional customs fees may apply for certain countries.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Shipping Insurance</h3>
            </div>
            <p className="text-gray-600 mb-4">
              All shipments are fully insured and tracked. We guarantee safe delivery of your device.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Contact customer service within 24 hours if there are any issues with delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-emerald-50 rounded-xl p-6 mb-16">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Information</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Orders placed after 2 PM will be processed the next business day</li>
                <li>• Delivery times may be extended during peak periods</li>
                <li>• A signature may be required upon delivery</li>
                <li>• Track your order using the provided tracking number</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}