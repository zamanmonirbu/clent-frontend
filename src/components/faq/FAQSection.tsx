import React from 'react';
import { FAQItem } from './FAQItem';
import type { FAQCategory } from '../../types/faq';

interface FAQSectionProps {
  category: FAQCategory;
}

export function FAQSection({ category }: FAQSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-emerald-500 rounded-full" />
        {category.title}
      </h2>
      <div className="space-y-4">
        {category.questions.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}