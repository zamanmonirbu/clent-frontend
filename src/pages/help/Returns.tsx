import React from 'react';
import { 
  RotateCcw, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Package, 
  Truck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Returns() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <RotateCcw className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple and hassle-free returns within 30 days of purchase
          </p>
        </div>

        {/* Return Process Steps */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: 'Pack Your Device',
                description: 'Securely package your device with all original accessories'
              },
              {
                icon: CheckCircle,
                title: 'Request Return',
                description: 'Fill out the return form and get your return label'
              },
              {
                icon: Truck,
                title: 'Ship It Back',
                description: 'Drop off at any post office using our prepaid label'
              },
              {
                icon: Clock,
                title: 'Get Refunded',
                description: 'Refund processed within 5-7 business days'
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

        {/* Return Policy Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-900">Return Conditions</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Device must be in original condition</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>All original accessories included</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Device must be factory reset</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Return within 30 days of purchase</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-900">Non-Returnable Cases</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Physical damage beyond original condition</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Missing accessories or packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Device locked to iCloud account</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Signs of water damage or tampering</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Start Return Process */}
        <div className="bg-emerald-50 rounded-xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Return?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your return process now. Make sure you have your order number and the device ready.
          </p>
          <Button variant="primary" className="inline-flex items-center gap-2">
            Start Return Process <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any questions about returns.
          </p>
          <Button variant="outline" onClick={() => window.location.href = '/help/contact'}>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}