import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    text: 'Excellent service and quality phones. The 2-year warranty gives great peace of mind.',
    date: '2 days ago'
  },
  {
    id: 2,
    author: 'Michael R.',
    rating: 5,
    text: 'Fast delivery and the phone was in perfect condition. Highly recommend!',
    date: '1 week ago'
  },
  {
    id: 3,
    author: 'Emma L.',
    rating: 4,
    text: 'Great value for money. The phone looks and works like new.',
    date: '2 weeks ago'
  }
];

export function TrustpilotReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
            alt="Trustpilot"
            className="h-8"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-green-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}