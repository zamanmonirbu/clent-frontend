import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';

const featuredPhones = products.filter(product => product.discount);

export function FeaturedPhones() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPhones.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPhones.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPhones.length) % featuredPhones.length);
  };

  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Special Offers</h2>
        
        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredPhones.map((phone) => (
                <div 
                  key={phone.id}
                  className="w-full flex-shrink-0 bg-white"
                >
                  <div className="p-6">
                    <div className="relative mb-4">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full aspect-[3/4] object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Sale!
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{phone.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{phone.storage}</p>
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-xl font-bold text-emerald-600">€{phone.price}</span>
                        {phone.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">€{phone.originalPrice}</span>
                        )}
                      </div>
                      <Link
                        to={`/product/${phone.id}`}
                        className="inline-flex items-center justify-center px-6 py-2 bg-emerald-600 text-white text-sm rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                      >
                        View Deal
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-5 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-5 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredPhones.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}