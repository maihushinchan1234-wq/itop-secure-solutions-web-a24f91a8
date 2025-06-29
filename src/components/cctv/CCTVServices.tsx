
import React from 'react';
import { Shield, Camera, Wrench, HardDrive, AlertTriangle, Settings } from 'lucide-react';

export const CCTVServices = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Camera Installation",
      description: "Professional installation of dome, bullet, PTZ, IP, and face recognition cameras. Covers placement, cabling, and integration with control systems. Our technicians ensure optimal camera positioning for maximum coverage and minimal blind spots."
    },
    {
      icon: Settings,
      title: "System Upgrade & Expansion", 
      description: "Upgrade from analog to HD or IP-based systems. Includes expanding coverage, integrating facial recognition, and modernizing storage solutions. Transform your old surveillance system into a smart, connected security network."
    },
    {
      icon: Wrench,
      title: "Camera Repair & Maintenance",
      description: "Lens cleaning, connectivity troubleshooting, DVR issues, recording failure diagnosis. Includes scheduled maintenance and system health checks to ensure continuous surveillance and optimal performance of your security system."
    },
    {
      icon: HardDrive,
      title: "DVR/NVR Setup",
      description: "Configuration of DVR/NVRs for storage, recording schedules, motion detection triggers, and remote access. Complete setup includes network configuration, mobile app integration, and user training for easy system management."
    },
    {
      icon: Shield,
      title: "Security System Integration",
      description: "Integration with access control systems, alarm systems, and building management platforms. Comprehensive security ecosystem setup for maximum protection and centralized monitoring capabilities."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Setup",
      description: "24/7 monitoring solutions with instant alerts and emergency response protocols. Integration with security services and automated notification systems for immediate incident response."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Provide the Best CCTV Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete surveillance solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Repair Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              CCTV Repair Services
            </h3>
            <p className="text-lg text-gray-600">
              Expert repair solutions for all CCTV system issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Camera className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Camera Repair</h4>
              <p className="text-sm text-gray-600">Lens replacement, image quality issues, and housing repairs</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <HardDrive className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">DVR/NVR Repair</h4>
              <p className="text-sm text-gray-600">Storage issues, recording problems, and system crashes</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Settings className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Network Issues</h4>
              <p className="text-sm text-gray-600">Connectivity problems, IP conflicts, and remote access issues</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Emergency Repairs</h4>
              <p className="text-sm text-gray-600">24/7 urgent repair services for critical security systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
