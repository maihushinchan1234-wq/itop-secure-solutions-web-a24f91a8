
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, Shield, Eye, Flame, Home, ArrowRight } from 'lucide-react';
import { useHomeServices } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Shield,
  Eye,
  Flame,
};

export const ServicesSection = () => {
  const navigate = useNavigate();
  const { content } = useHomeServices();

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('printer')) return Printer;
    if (title.toLowerCase().includes('cctv')) return Eye;
    if (title.toLowerCase().includes('door') || title.toLowerCase().includes('lock')) return Shield;
    if (title.toLowerCase().includes('fire')) return Flame;
    if (title.toLowerCase().includes('home') || title.toLowerCase().includes('automation') || title.toLowerCase().includes('smart')) return Home;
    return Printer;
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => {
            const Icon = getIcon(service.title);
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
      </div>
    </section>
  );
};
