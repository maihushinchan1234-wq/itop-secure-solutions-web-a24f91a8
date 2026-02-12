
import React from 'react';
import { usePageBrands } from '@/hooks/useCMSContent';

export const HomeAutomationBrands = () => {
  const { content } = usePageBrands('homeautomation');

  return (
    <section id="brands" className="py-16 bg-white">
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
          {content.brands.map((brand, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {brand.description}
              </p>
              {brand.specialties && brand.specialties.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <ul className="space-y-1">
                    {brand.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {content.ctaTitle && (
          <div className="mt-12 text-center">
            <div className="bg-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {content.ctaTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.ctaDescription}
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {content.ctaButtonText || 'Contact Us'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
