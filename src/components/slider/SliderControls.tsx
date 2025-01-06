import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  currentIndex: number;
  totalSlides: number;
}

export function SliderControls({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  currentIndex,
  totalSlides
}: SliderControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`absolute top-1/2 -left-2 -translate-y-1/2 p-2 rounded-full shadow-sm transition-all ${
          canGoPrev
            ? 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:scale-110'
            : 'bg-gray-100/50 text-gray-400 cursor-not-allowed'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`absolute top-1/2 -right-2 -translate-y-1/2 p-2 rounded-full shadow-sm transition-all ${
          canGoNext
            ? 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:scale-110'
            : 'bg-gray-100/50 text-gray-400 cursor-not-allowed'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-white/50 backdrop-blur-sm">
        {Array.from({ length: Math.ceil(totalSlides / 6) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {}}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              Math.floor(currentIndex / 6) === i
                ? 'bg-emerald-600 w-3'
                : 'bg-gray-400/50 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}