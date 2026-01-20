import React from 'react';
import { Home, Building, School, Hotel, Factory, ShoppingBag } from 'lucide-react';
import { usePageIndustries } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building,
  School,
  Hotel,
  Factory,
  ShoppingBag,
};

export const CCTVIndustries = () => {
  const { content } = usePageIndustries('cctv');

  const getIcon = (iconName?: string) => {
    return iconMap[iconName || ''] || Building;
  };

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content?.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content?.sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content?.industries?.map((industry, index) => {
            const Icon = getIcon(industry.icon);

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* 🔹 RECTANGLE IMAGE */}
                {industry.image && (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* 🔹 SMALL ICON CIRCLE */}
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
