
import React from 'react';
import { Menu, X, Home } from 'lucide-react';
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

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const scrollToFireSafetyAudit = () => {
    window.location.href = '/#contact';
  };

  const goHome = () => {
    navigate('/');
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
            className="lg:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </Button>
          <div className="flex items-center ml-2">
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
