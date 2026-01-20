import React from 'react';
import {
  Home,
  Building,
  School,
  Hotel,
  Factory,
  ShoppingBag,
} from 'lucide-react';
import { usePageIndustries } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building,
  School,
  Hotel,
  Factory,
  ShoppingBag,
};

export const DoorLocksIndustries = () => {
  const { content } = usePageIndustries('doorlocks');

  const getIcon = (iconName?: string) => {
    return iconMap[iconName || ''] || Building;
  };

  return (
    <section id="industries" className="py-16 bg-gray-50">
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
                {/* 🔹 RECTANGLE IMAGE (Sanity-controlled) */}
                {industry.image && (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* 🔹 SMALL CIRCLE ICON */}
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>

                  {industry.solutions && industry.solutions.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Our Solutions:
                      </h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
