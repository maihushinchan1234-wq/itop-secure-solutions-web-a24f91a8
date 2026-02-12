
import React from 'react';
import { Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const goHome = () => {
    navigate('/');
  };

  const getNavigationButtons = () => {
    // Check if we're on a blog detail page
    if (location.pathname.startsWith('/blog/')) {
      return null; // No navigation items for blog detail pages
    }

    switch (location.pathname) {
      case '/printers':
        return (
          <>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('types')}
              className="text-gray-700 hover:text-blue-600"
            >
              Types
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-blue-600"
            >
              Brands
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-blue-600"
            >
              Industries
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
          </>
        );
      
      case '/cctv':
        return (
          <>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('types')}
              className="text-gray-700 hover:text-blue-600"
            >
              Types
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-blue-600"
            >
              Brands
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-blue-600"
            >
              Industries
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
          </>
        );
      
      case '/door-locks':
        return (
          <>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('types')}
              className="text-gray-700 hover:text-blue-600"
            >
              Types
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-blue-600"
            >
              Brands
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-blue-600"
            >
              Industries
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
          </>
        );
      
      case '/fire-alarms':
        return (
          <>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">Services</Button>
            <Button variant="ghost" onClick={() => scrollToSection('types')} className="text-gray-700 hover:text-blue-600">Types</Button>
            <Button variant="ghost" onClick={() => scrollToSection('brands')} className="text-gray-700 hover:text-blue-600">Brands</Button>
            <Button variant="ghost" onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-600">Industries</Button>
            <Button variant="ghost" onClick={() => scrollToSection('faqs')} className="text-gray-700 hover:text-blue-600">FAQs</Button>
          </>
        );

      case '/home-automation':
        return (
          <>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">Services</Button>
            <Button variant="ghost" onClick={() => scrollToSection('types')} className="text-gray-700 hover:text-blue-600">Types</Button>
            <Button variant="ghost" onClick={() => scrollToSection('brands')} className="text-gray-700 hover:text-blue-600">Brands</Button>
            <Button variant="ghost" onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-600">Industries</Button>
            <Button variant="ghost" onClick={() => scrollToSection('faqs')} className="text-gray-700 hover:text-blue-600">FAQs</Button>
          </>
        );
      
      case '/feedback':
        return (
          <>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600"
            >
              Share Your Experience
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600"
            >
              Customer Testimonials
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('overview')}
              className="text-gray-700 hover:text-blue-600"
            >
              Rating Overview
            </Button>
          </>
        );
      
      default:
        return (
          <>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('blogs')}
              className="text-gray-700 hover:text-blue-600"
            >
              Blogs / FAQs
            </Button>
          </>
        );
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3 ml-16">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              iTOP Services
            </h1>
            <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              Tech Solutions
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            {getNavigationButtons()}
          </nav>
          
          {/* Home Button */}
          {location.pathname !== '/' && (
            <Button
              variant="outline"
              size="sm"
              onClick={goHome}
              className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
