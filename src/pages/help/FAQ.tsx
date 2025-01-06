import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FAQSection } from '../../components/faq/FAQSection';
import { faqCategories } from '../../data/faqData';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about our products and services
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-shadow"
            />
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <FAQSection key={index} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No results found for "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}