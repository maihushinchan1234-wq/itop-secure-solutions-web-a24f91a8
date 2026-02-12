
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageFAQs } from '@/hooks/useCMSContent';

export const HomeAutomationFAQs = () => {
  const { content } = usePageFAQs('homeautomation');

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.sectionDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {content.categories?.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.categoryTitle}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${catIndex}-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {content.faqs && !content.categories && (
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {content.ctaTitle}
            </h3>
            <p className="text-gray-600 mb-6">
              {content.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.ctaButtons.map((button, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (button.action.startsWith('http')) {
                      window.open(button.action, '_blank');
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    button.variant === 'primary' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
