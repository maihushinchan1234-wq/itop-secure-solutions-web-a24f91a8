
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919990820830', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch for all your technology and security needs. We're here to help 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Phone / WhatsApp</h4>
                  <p className="text-blue-100 text-lg">+91 9990820830</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Email</h4>
                  <p className="text-blue-100 text-lg">sachidanand@live.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Address</h4>
                  <p className="text-blue-100 text-lg">224, B1, DDA Flats, Loknayak Puram, New Delhi 110041</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Coverage Area</h4>
                  <p className="text-blue-100 text-lg">Delhi NCR</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
