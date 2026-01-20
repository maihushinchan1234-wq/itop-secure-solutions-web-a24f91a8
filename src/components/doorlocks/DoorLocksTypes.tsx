
import React from 'react';
import { usePageTypes } from '@/hooks/useCMSContent';

export const DoorLocksTypes = () => {
  const { content } = usePageTypes('doorlocks');

  return (
    <section id="types" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {content.sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.types.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
