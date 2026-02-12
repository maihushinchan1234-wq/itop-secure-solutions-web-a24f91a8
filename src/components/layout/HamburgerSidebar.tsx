
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Printer, 
  Shield, 
  Eye, 
  Flame,
  Lightbulb,
  MapPin, 
  Star,
  Settings,
  Wrench,
  RefreshCw,
  Headphones,
  MessageSquare,
  ChevronDown,
  Home,
  Info,
  Phone,
  FileText
} from "lucide-react";

interface HamburgerSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerSidebar = ({ isOpen, onToggle }: HamburgerSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === path && sectionId) {
      // Same page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Different page, navigate then scroll
      navigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }
    onToggle(); // Close sidebar after navigation
  };

  const openMap = () => {
    window.open('https://maps.google.com/?q=224, B1, DDA Flats, Loknayak Puram, New Delhi 110041', '_blank');
    onToggle();
  };

  const getFeedbackSections = () => {
    if (location.pathname === '/feedback') {
      return [
        { id: 'hero', label: 'Leave Feedback', icon: MessageSquare },
        { id: 'form', label: 'Feedback Form', icon: FileText },
        { id: 'testimonials', label: 'Customer Reviews', icon: Star },
        { id: 'overview', label: 'Why Choose Us', icon: Info }
      ];
    }
    return [];
  };

  return (
    <>
      {/* Hamburger Button - Always visible */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-20 pb-4">
          <div className="px-6 mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              iTOP Services
            </h2>
            <p className="text-sm text-gray-600 mt-1">Complete Tech Solutions</p>
          </div>

          <nav className="space-y-2 px-4">
            {/* Home Button */}
            <button
              onClick={() => handleNavigation('/')}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors border-b border-gray-100"
            >
              <Home className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Home</span>
            </button>

            {/* Main Page Sections (when on home page) */}
            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => handleNavigation('/', 'about')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Info className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">About Us</span>
                </button>

                <button
                  onClick={() => handleNavigation('/', 'services')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Settings className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-gray-700">Our Services</span>
                </button>

                <button
                  onClick={() => handleNavigation('/', 'contact')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-gray-700">Contact Us</span>
                </button>

                <button
                  onClick={() => handleNavigation('/', 'blogs')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">Blogs & FAQs</span>
                </button>
              </>
            )}

            {/* Feedback Page Sections */}
            {location.pathname === '/feedback' && (
              <div className="space-y-1 mb-4">
                <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Feedback Sections</h3>
                {getFeedbackSections().map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigation('/feedback', section.id)}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <section.icon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-700">{section.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Service Pages Navigation */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Our Services</h3>
              
              {/* Installation Section */}
              <div>
                <button
                  onClick={() => toggleSection('installation')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-700">Installation</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                    openSections.includes('installation') ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openSections.includes('installation') && (
                  <div className="ml-8 space-y-1 mt-2">
                    <button
                      onClick={() => handleNavigation('/printers', 'services')}
                      className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      <Printer className="h-4 w-4 text-gray-500" />
                      <span>Printers</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/door-locks', 'services')}
                      className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span>Door Locks</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/cctv', 'services')}
                      className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      <Eye className="h-4 w-4 text-gray-500" />
                      <span>CCTV</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/fire-alarms', 'services')}
                      className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      <Flame className="h-4 w-4 text-gray-500" />
                      <span>Fire Alarms</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/home-automation', 'services')}
                      className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      <Lightbulb className="h-4 w-4 text-gray-500" />
                      <span>Home Automation</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Repair & Maintenance Section */}
              <div>
                <button
                  onClick={() => toggleSection('repair')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-gray-700">Repair & AMC</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                    openSections.includes('repair') ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openSections.includes('repair') && (
                  <div className="ml-8 space-y-1 mt-2">
                    <button
                      onClick={() => handleNavigation('/printers', 'services')}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      Printer Repair & AMC
                    </button>
                    <button
                      onClick={() => handleNavigation('/cctv', 'services')}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      CCTV Maintenance
                    </button>
                    <button
                      onClick={() => handleNavigation('/door-locks', 'services')}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      Door Lock Service
                    </button>
                  </div>
                )}
              </div>

              {/* Refilling Section */}
              <div>
                <button
                  onClick={() => toggleSection('refilling')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-gray-700">Refilling</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                    openSections.includes('refilling') ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openSections.includes('refilling') && (
                  <div className="ml-8 space-y-1 mt-2">
                    <button
                      onClick={() => handleNavigation('/printers', 'services')}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      Toner Refills (HP, Canon, Brother)
                    </button>
                    <button
                      onClick={() => handleNavigation('/printers', 'services')}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                    >
                      Ink Refills (HP, Canon, Epson)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <button
                onClick={() => handleNavigation('/feedback')}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-yellow-50 rounded-lg transition-colors"
              >
                <Star className="h-5 w-5 text-yellow-600" />
                <span className="font-medium text-gray-700">Leave Feedback</span>
              </button>

              <button
                onClick={openMap}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors"
              >
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="font-medium text-gray-700">Find Us</span>
              </button>
            </div>
          </nav>

          {/* Contact CTA */}
          <div className="mt-8 mx-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Need Immediate Help?</h3>
              <p className="text-sm text-blue-600 mb-3">Get expert support for all your tech needs</p>
              <button
                onClick={() => handleNavigation('/', 'contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
