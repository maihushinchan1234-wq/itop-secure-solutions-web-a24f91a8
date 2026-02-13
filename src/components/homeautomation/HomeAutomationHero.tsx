
import React from 'react';
import { Cpu, Wifi } from 'lucide-react';
import { usePageHero } from '@/hooks/useCMSContent';

export const HomeAutomationHero = () => {
  const { content } = usePageHero('homeautomation');

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-800 via-purple-900 to-slate-900 text-white py-20 overflow-hidden">
      {/* Subtle tech pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-pulse">
          <Cpu className="h-16 w-16 text-indigo-300" />
        </div>
        <div className="absolute bottom-16 right-16 animate-pulse" style={{ animationDelay: '1s' }}>
          <Wifi className="h-12 w-12 text-purple-300" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
          <Cpu className="h-8 w-8 text-blue-300" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6 border border-white/20">
          <Cpu className="h-4 w-4" />
          <span>AI-Powered Smart Living</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {content.subtitle}
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-indigo-100">
          {content.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25"
          >
            {content.primaryButtonText}
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
          >
            {content.secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};
