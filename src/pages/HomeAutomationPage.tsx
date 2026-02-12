
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { HomeAutomationHero } from "@/components/homeautomation/HomeAutomationHero";
import { HomeAutomationServices } from "@/components/homeautomation/HomeAutomationServices";
import { HomeAutomationTypes } from "@/components/homeautomation/HomeAutomationTypes";
import { HomeAutomationBrands } from "@/components/homeautomation/HomeAutomationBrands";
import { HomeAutomationIndustries } from "@/components/homeautomation/HomeAutomationIndustries";
import { HomeAutomationFAQs } from "@/components/homeautomation/HomeAutomationFAQs";
import { Footer } from "@/components/layout/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const HomeAutomationPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useScrollPosition();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <HamburgerSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1">
        <HomeAutomationHero />
        <HomeAutomationServices />
        <HomeAutomationTypes />
        <HomeAutomationBrands />
        <HomeAutomationIndustries />
        <HomeAutomationFAQs />
      </main>
      <Footer />
    </div>
  );
};

export default HomeAutomationPage;
