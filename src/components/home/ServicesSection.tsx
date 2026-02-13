
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, Shield, Eye, Flame, Home, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHomeServices } from '@/hooks/useCMSContent';

export const ServicesSection = () => {
  const navigate = useNavigate();
  const { content } = useHomeServices();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('printer')) return Printer;
    if (title.toLowerCase().includes('cctv')) return Eye;
    if (title.toLowerCase().includes('door') || title.toLowerCase().includes('lock')) return Shield;
    if (title.toLowerCase().includes('fire')) return Flame;
    if (title.toLowerCase().includes('home') || title.toLowerCase().includes('automation') || title.toLowerCase().includes('smart')) return Home;
    return Printer;
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [content.services]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.sectionDescription}
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200 -ml-2 md:-ml-4"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200 -mr-2 md:-mr-4"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.services.map((service, index) => {
              const Icon = getIcon(service.title);
              return (
                <div
                  key={index}
                  className="min-w-[260px] max-w-[280px] flex-shrink-0 snap-start bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(service.path)}
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-full ${service.colorClass} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-600 font-medium">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-400 mt-4">← Swipe or use arrows to explore services →</p>
        </div>
      </div>
    </section>
  );
};
