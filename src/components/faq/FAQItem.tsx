import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <div className="flex items-center gap-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          )}
          <span className="font-medium text-gray-900">{question}</span>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 pb-4 pl-[60px] text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}