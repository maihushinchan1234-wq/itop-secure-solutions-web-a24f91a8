
import React from 'react';
import { useHomeHero } from '@/hooks/useCMSContent';

export const HeroSection = () => {
  const { content, isLoading } = useHomeHero();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {content.subtitle}
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          {content.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
