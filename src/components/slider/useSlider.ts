import { useState, useRef, useCallback } from 'react';

interface UseSliderProps {
  totalItems: number;
  itemsPerView: number;
}

export function useSlider({ totalItems, itemsPerView }: UseSliderProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const animateSlide = useCallback((direction: 'left' | 'right') => {
    if (isAnimating || !containerRef.current) return;
    
    setIsAnimating(true);
    const container = containerRef.current;
    const slideDistance = direction === 'right' ? -200 : 200;
    
    container.style.transform = `translateX(${slideDistance}px)`;
    container.style.transition = 'transform 500ms ease-in-out';

    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setStartIndex(prev => 
        direction === 'right' 
          ? Math.min(prev + 1, totalItems - itemsPerView)
          : Math.max(prev - 1, 0)
      );
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, totalItems, itemsPerView]);

  const nextSlide = useCallback(() => {
    if (startIndex + itemsPerView >= totalItems) return;
    animateSlide('right');
  }, [startIndex, itemsPerView, totalItems, animateSlide]);

  const prevSlide = useCallback(() => {
    if (startIndex <= 0) return;
    animateSlide('left');
  }, [startIndex, animateSlide]);

  return {
    startIndex,
    isAnimating,
    containerRef,
    nextSlide,
    prevSlide,
    canGoPrev: startIndex > 0,
    canGoNext: startIndex + itemsPerView < totalItems
  };
}