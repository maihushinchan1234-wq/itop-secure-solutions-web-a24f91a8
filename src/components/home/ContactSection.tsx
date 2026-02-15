
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useContactContent } from '@/hooks/useCMSContent';

export const ContactSection = () => {
  const { content, isLoading } = useContactContent();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden border-t-4 border-blue-500">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            {content.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {content.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center">
                <div className="bg-green-100 text-green-600 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Call for Immediate Help</h3>
                    <p className="text-gray-600 mb-3">Speak directly with our technical experts</p>
                    <div className="space-y-1">
                      {content.phones.map((phone, index) => (
                        <a 
                          key={index}
                          href={`tel:${phone.replace(/\s/g, '')}`} 
                          className={`block ${index === 0 ? 'text-xl font-bold text-green-600 hover:text-green-700' : 'text-lg text-gray-700 hover:text-green-600'}`}
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600 mb-3">Quick responses, photos, and instant quotes</p>
                    <a 
                      href={`https://wa.me/${content.whatsappNumber}?text=Hi, I need help with my tech services`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">Detailed inquiries and service requests</p>
                    <a href={`mailto:${content.email}`} className="text-lg font-semibold text-purple-600 hover:text-purple-700">
                      {content.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 text-red-600 rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                    <p className="text-gray-600 mb-3">In-person consultations and device drop-off</p>
                    <address className="text-gray-700 not-italic mb-3">
                      {content.address.line1}<br />
                      {content.address.line2}<br />
                      {content.address.city}
                    </address>
                    <Button 
                      onClick={() => window.open(`https://maps.google.com/?q=${content.address.line1}, ${content.address.line2}, ${content.address.city}`, '_blank')}
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Hours & Areas */}
          <div className="space-y-8">
            {/* Service Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 text-indigo-600 rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Service Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium text-gray-700">Monday - Saturday</span>
                  <span className="font-bold text-green-600">{content.serviceHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="font-bold text-blue-600">{content.serviceHours.weekends}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="font-medium text-gray-700">Emergency Support</span>
                  <span className="font-bold text-orange-600">{content.serviceHours.emergency}</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Coverage Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {content.serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Don't see your area? <a href={`tel:${content.phones[0]?.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">Call us</a> - we might still be able to help!
              </p>
            </div>

            {/* Google Map */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.587!2d67.0611!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44dc8e4797!2s!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location on Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't let tech problems slow you down. Contact our expert team today for fast, 
              reliable solutions that get your devices working perfectly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${content.phones[0]?.replace(/\s/g, '')}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${content.whatsappNumber}?text=Hi, I need help with my tech services`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
