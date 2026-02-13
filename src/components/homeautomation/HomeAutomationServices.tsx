
import React from 'react';
import { Lightbulb, Blinds, ToggleLeft, Mic, Palette, Zap, Smartphone, Cpu, ArrowRight } from 'lucide-react';
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

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Lightbulb;
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-indigo-100/50"
              >
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
