import React from 'react';
import { products } from '../../data/products';
import { SlideItem } from '../slider/SlideItem';
import { SliderControls } from '../slider/SliderControls';
import { useSlider } from '../slider/useSlider';

const ITEMS_PER_VIEW = 6;

export function PhoneSlideshow() {
  const {
    startIndex,
    containerRef,
    nextSlide,
    prevSlide,
    canGoPrev,
    canGoNext
  } = useSlider({
    totalItems: products.length,
    itemsPerView: ITEMS_PER_VIEW
  });

  const visiblePhones = products.slice(startIndex, startIndex + ITEMS_PER_VIEW);

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Available Models</h2>
        
        <div className="relative">
          <div className="flex items-center gap-3 pb-8">
            <div className="overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm p-4 shadow-sm">
              <div
                ref={containerRef}
                className="flex gap-3"
                style={{ willChange: 'transform' }}
              >
                {visiblePhones.map((phone) => (
                  <SlideItem
                    key={phone.id}
                    product={phone}
                    isActive={true}
                  />
                ))}
              </div>
            </div>
          </div>

          <SliderControls
            onPrev={prevSlide}
            onNext={nextSlide}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            currentIndex={startIndex}
            totalSlides={products.length}
          />
        </div>
      </div>
    </section>
  );
}