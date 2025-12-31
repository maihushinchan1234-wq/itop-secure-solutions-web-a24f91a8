
import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';
import { useAboutContent } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Clock,
  Award,
  CheckCircle
};

export const AboutSection = () => {
  const { content, isLoading } = useAboutContent();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {content.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              {content.description}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {content.secondaryDescription}
            </p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {content.achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Users;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Why Choose iTOP Services?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{content.commitmentTitle}</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              {content.commitmentDescription}
            </p>
            <p className="text-lg text-gray-600">
              {content.secondaryCommitmentDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
