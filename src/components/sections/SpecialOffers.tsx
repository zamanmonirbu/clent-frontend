import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { Button } from '../ui/Button';

const specialOffers = products.filter(product => product.discount);

export function SpecialOffers() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleSlide = (direction: 'left' | 'right') => {
    if (isAnimating || !containerRef.current) return;

    setIsAnimating(true);
    const container = containerRef.current;
    const slideDistance = direction === 'right' ? -100 : 100;

    container.style.transform = `translateX(${slideDistance}%)`;
    container.style.transition = 'transform 500ms ease-in-out';

    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setCurrentIndex(prev => {
        if (direction === 'right') {
          return (prev + 1) % specialOffers.length;
        }
        return prev === 0 ? specialOffers.length - 1 : prev - 1;
      });
      setIsAnimating(false);
    }, 500);
  };

  const nextSlide = () => handleSlide('right');
  const prevSlide = () => handleSlide('left');

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleProductClick = () => {
    navigate(`/product/${specialOffers[currentIndex].id}`);
  };

  if (specialOffers.length === 0) return null;

  return (
    <div className="relative max-w-md mx-auto mt-8">
      <div 
        className="overflow-hidden rounded-lg bg-white/30 backdrop-blur-sm cursor-pointer hover:bg-white/40 transition-all shadow-lg hover:shadow-xl"
        onClick={handleProductClick}
      >
        <div
          ref={containerRef}
          className="relative"
          style={{ height: '300px' }}
        >
          <div className="absolute inset-0">
            <div className="relative h-3/4">
              <img
                src={specialOffers[currentIndex].image}
                alt={specialOffers[currentIndex].name}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                Special Offer!
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-600 transition-colors">
                {specialOffers[currentIndex].name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-white">
                  €{specialOffers[currentIndex].price}
                </span>
                {specialOffers[currentIndex].originalPrice && (
                  <span className="text-sm text-white/70 line-through">
                    €{specialOffers[currentIndex].originalPrice}
                  </span>
                )}
              </div>
              <Button
                variant="primary"
                className="w-full mt-4"
              >
                View Deal
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-2 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm shadow-lg hover:bg-white/50 transition-colors z-10"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-2 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm shadow-lg hover:bg-white/50 transition-colors z-10"
        disabled={isAnimating}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {specialOffers.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-emerald-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}