
import React, { useRef } from 'react';
import { Lightbulb, Blinds, ToggleLeft, Mic, Palette, Zap, Smartphone, Cpu, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePageServices } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Blinds,
  ToggleLeft,
  Mic,
  Palette,
  Zap,
  Smartphone,
  Cpu,
  ArrowRight,
};

export const HomeAutomationServices = () => {
  const { content } = usePageServices('homeautomation');
  const scrollRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Lightbulb;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
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
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200 -ml-2 md:-ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200 -mr-2 md:-mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Horizontally scrollable services */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={index}
                  className="min-w-[280px] max-w-[300px] flex-shrink-0 snap-start bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Scroll indicator dots */}
          <p className="text-center text-sm text-gray-400 mt-4">← Swipe or use arrows to explore more services →</p>
        </div>
      </div>
    </section>
  );
};
