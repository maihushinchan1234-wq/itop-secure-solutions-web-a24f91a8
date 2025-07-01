
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const DoorLocksFAQs = () => {
  const doorLockFaqs = [
    {
      question: "Will a smart lock fit my wooden or metal door?",
      answer: "Yes. Most smart locks fit standard door thicknesses. We recommend sharing door images for better compatibility checks."
    },
    {
      question: "Will my smart lock still work during power or internet outages?",
      answer: "Yes. Most smart locks use battery power and support Bluetooth unlocking. Some models come with physical key backups."
    },
    {
      question: "What if my smart lock's battery dies?",
      answer: "You will be notified in advance. Also, emergency USB charging or mechanical key options are available in most models."
    },
    {
      question: "Can I install a smart lock myself?",
      answer: "While some smart locks are designed for DIY installation, we recommend professional installation to ensure proper alignment, security, and warranty coverage."
    },
    {
      question: "How secure are smart locks compared to traditional locks?",
      answer: "Smart locks often provide enhanced security features like tamper alerts, activity logs, and temporary access codes. They use encrypted communication and are designed to be as secure as traditional deadbolts."
    },
    {
      question: "Can I integrate smart locks with other smart home devices?",
      answer: "Yes! Most smart locks work with popular platforms like Alexa, Google Home, and Apple HomeKit, allowing integration with cameras, lights, and security systems."
    },
    {
      question: "What happens if I lose my phone?",
      answer: "Smart locks typically offer multiple access methods including backup keys, keypads, or secondary user access through family members' phones."
    },
    {
      question: "How long do smart lock batteries last?",
      answer: "Most smart lock batteries last 6-12 months depending on usage. You'll receive low battery notifications well in advance through the mobile app."
    },
    {
      question: "Do smart locks work with all door types?",
      answer: "Smart locks are compatible with most standard doors including wooden, metal, and composite doors. Our technicians assess door compatibility during the free consultation to ensure proper fit and functionality."
    },
    {
      question: "Can I still use a regular key with a smart lock?",
      answer: "Many smart locks offer traditional key backup options alongside digital access methods. This provides peace of mind and ensures you're never locked out, even if the electronic components fail."
    },
    {
      question: "How do I manage access for guests or service providers?",
      answer: "Smart locks allow you to create temporary access codes that can be set to expire after a specific time or number of uses. You can also grant and revoke access remotely through the mobile app."
    },
    {
      question: "What maintenance do smart locks require?",
      answer: "Smart locks require minimal maintenance - mainly battery replacement every 6-12 months and occasional cleaning of the keypad or fingerprint sensor. Our service team provides annual maintenance checks to ensure optimal performance."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Door Lock FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about smart door locks, installation process, 
            security features, and ongoing maintenance. Our expert team has compiled these insights 
            from years of experience helping customers upgrade their home security.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-6">
            {doorLockFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-800 text-left leading-relaxed pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced Service Benefits Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Professional Smart Lock Installation?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">Expert Assessment & Recommendation</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Free door compatibility evaluation at your location</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Personalized smart lock recommendations based on your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Security level assessment and upgrade suggestions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-700 mb-4">Professional Installation & Setup</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Precise alignment and secure mounting for optimal performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Complete mobile app configuration and user training</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">6-month service warranty with ongoing technical support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Upgrade Your Home Security?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied customers who have upgraded to smart locks. Our certified technicians 
              provide professional installation and setup for all smart lock brands with comprehensive warranty coverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919990820830', '_blank')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                WhatsApp Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
