import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+31 (0) 20 123 4567',
                subtext: 'Mon-Fri, 9:00-17:00 CET'
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'support@phoneflex.com',
                subtext: 'We reply within 24 hours'
              },
              {
                icon: MapPin,
                title: 'Office',
                content: 'Amsterdam, Netherlands',
                subtext: 'Tech District, 1234 AB'
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Monday - Friday',
                subtext: '9:00 AM - 5:00 PM CET'
              }
            ].map((item) => (
              <div 
                key={item.title}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    <p className="text-sm text-gray-500">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="return">Return Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Interactive Map Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}