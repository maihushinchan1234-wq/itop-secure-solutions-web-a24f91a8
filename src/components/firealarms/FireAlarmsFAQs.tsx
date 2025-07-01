
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FireAlarmsFAQs = () => {
  const faqs = [
    {
      question: "What is the average lifespan of a fire alarm device?",
      answer: "Typically, 8 to 10 years. Sensors should be tested regularly and batteries replaced annually."
    },
    {
      question: "How often should I test my fire alarm?",
      answer: "Once a month. Testing takes under 5 minutes and ensures your system is always ready."
    },
    {
      question: "Can fire alarms be monitored on a mobile app?",
      answer: "Yes. Smart alarms connect to apps and alert you in real-time in case of fire, smoke, or system errors."
    },
    {
      question: "Do I need a fire alarm for a small office?",
      answer: "Yes, fire alarms are essential for any workplace regardless of size. Small offices should have at least smoke detectors in main areas and compliance with local fire safety regulations."
    },
    {
      question: "Will it work during a power cut?",
      answer: "Yes, all our fire alarm systems come with battery backup that can operate for 24-72 hours during power outages, ensuring continuous protection."
    },
    {
      question: "Can I upgrade an old alarm system?",
      answer: "Absolutely! We can upgrade your existing system to addressable or smart fire alarms, add new zones, or integrate with building management systems while using existing wiring where possible."
    },
    {
      question: "Can I receive alerts on my phone?",
      answer: "Yes! Our smart fire alarm systems can send instant notifications to your smartphone, security team, and monitoring center when an alarm is triggered."
    },
    {
      question: "What is the typical lifespan of a fire detector?",
      answer: "Smoke detectors typically last 8-10 years, while heat detectors can last 15-20 years. We provide replacement schedules and proactive maintenance to ensure optimal performance."
    },
    {
      question: "What's the difference between smoke and heat detectors?",
      answer: "Smoke detectors sense airborne particles from fires, while heat detectors respond to temperature changes. Smoke detectors are more sensitive and provide earlier warning, while heat detectors are better for dusty or steamy environments."
    },
    {
      question: "Are fire alarms mandatory for all buildings?",
      answer: "Yes, fire safety regulations mandate fire detection systems for most commercial buildings, apartments, and public spaces. Residential homes also benefit greatly from fire alarm installation."
    },
    {
      question: "How do I maintain my fire alarm system?",
      answer: "Regular maintenance includes monthly testing, annual professional inspections, battery replacements, and sensor cleaning. We offer comprehensive AMC packages to handle all maintenance requirements."
    },
    {
      question: "What should I do if my fire alarm keeps giving false alarms?",
      answer: "False alarms can be caused by dust accumulation, cooking smoke, or sensor malfunction. Our technicians can diagnose the issue and recommend solutions like sensor relocation or upgrades to reduce false alarms."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fire Safety FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about fire alarm systems, installation requirements, maintenance schedules, 
            and safety compliance. Our fire safety experts answer the most common questions to help you make 
            informed decisions about protecting your property and loved ones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-800 text-left leading-relaxed pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced Fire Safety Information */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Complete Fire Safety Solutions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h4 className="text-lg font-semibold text-red-700 mb-4">Detection Systems</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Smoke, heat, and flame detectors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Addressable fire alarm panels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Manual call points and sirens</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-100">
                <h4 className="text-lg font-semibold text-orange-700 mb-4">Professional Services</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Fire safety audits and assessments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Code-compliant installations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Annual maintenance contracts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100">
                <h4 className="text-lg font-semibold text-yellow-700 mb-4">Emergency Response</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">24/7 monitoring services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Automatic fire department alerts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Mobile app notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-red-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Protect Your Property with Professional Fire Safety
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Don't wait for an emergency. Get a comprehensive fire safety assessment and modern alarm system installation. 
              Our certified fire safety experts ensure your property meets all safety standards and regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Schedule Fire Safety Audit
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919990820830', '_blank')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Emergency Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
