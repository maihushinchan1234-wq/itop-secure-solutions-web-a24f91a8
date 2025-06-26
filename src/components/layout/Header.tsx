
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const getNavigationButtons = () => {
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
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
            <Button 
              variant="ghost" 
              onClick={scrollToContact}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
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
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
            <Button 
              variant="ghost" 
              onClick={scrollToContact}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Button>
          </>
        );
      
      case '/fire-alarms':
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
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-blue-600"
            >
              FAQs
            </Button>
            <Button 
              variant="ghost" 
              onClick={scrollToContact}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
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
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-xl font-bold text-gray-800 ml-2">iTOP Services</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {getNavigationButtons()}
        </nav>
      </div>
    </header>
  );
};
