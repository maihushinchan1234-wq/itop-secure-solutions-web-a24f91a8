// File: DoorLocksIndustries.jsx or DoorLocksIndustries.tsx
import React from 'react';
import { usePageTypes } from '@/hooks/useCMSContent';

// Export with the name DoorLocksIndustries to match your import
export const DoorLocksIndustries = () => {
  const { content } = usePageTypes('doorlocks');

  // Ensure content exists and is an array
  const industries = content || [];

  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Customized lock solutions for every sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {industry.icon && <industry.icon className="h-8 w-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
