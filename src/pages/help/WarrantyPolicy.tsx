import React from 'react';
import { Shield, Battery, Wrench, AlertTriangle } from 'lucide-react';

export function WarrantyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Warranty Policy</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">Warranty Coverage</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>• 12-month warranty on the battery</p>
              <p>• 24-month warranty on the phone</p>
              <p>• Coverage begins from the date of purchase</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Battery className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">What's Covered</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Manufacturing defects</li>
              <li>• Hardware malfunctions</li>
              <li>• Battery performance issues</li>
              <li>• Screen display problems</li>
              <li>• Camera functionality</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">What's Not Covered</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Physical damage from drops or accidents</li>
              <li>• Water damage</li>
              <li>• Unauthorized repairs</li>
              <li>• Normal wear and tear</li>
              <li>• Cosmetic damage</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Wrench className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">Repair Process</h2>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Contact our support team</li>
              <li>Get a return authorization</li>
              <li>Back up your data</li>
              <li>Ship the device to us</li>
              <li>Receive repair confirmation</li>
              <li>Get your device back within 5-7 business days</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}