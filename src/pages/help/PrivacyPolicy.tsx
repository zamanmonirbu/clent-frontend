import React from 'react';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  Mail, 
  Globe, 
  Database,
  Cookie,
  AlertTriangle,
  FileText,
  MessageCircle
} from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Quick Navigation */}
        <nav className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Information Collection', href: '#collection' },
              { label: 'How We Use Your Data', href: '#usage' },
              { label: 'Your Rights', href: '#rights' },
              { label: 'Data Protection', href: '#protection' },
              { label: 'Cookie Policy', href: '#cookies' },
              { label: 'Contact Information', href: '#contact' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Information Collection */}
          <section id="collection" className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information Collection</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-gray-900">Personal Data</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and contact information</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Email address and phone number</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mt-6">Usage Data</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Interaction with our services</li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section id="usage" className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support</li>
                <li>Send important updates about your order</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section id="rights" className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Access',
                  description: 'Request access to your personal data'
                },
                {
                  title: 'Rectification',
                  description: 'Request correction of inaccurate data'
                },
                {
                  title: 'Erasure',
                  description: 'Request deletion of your personal data'
                },
                {
                  title: 'Portability',
                  description: 'Receive and transfer your data'
                }
              ].map((right) => (
                <div key={right.title} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cookie Policy */}
          <section id="cookies" className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <Cookie className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>We use cookies to enhance your browsing experience:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p>Required for basic website functionality</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p>Help us understand how visitors use our site</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">For privacy-related inquiries:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>privacy@phoneflex.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <span>www.phoneflex.com/privacy</span>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}