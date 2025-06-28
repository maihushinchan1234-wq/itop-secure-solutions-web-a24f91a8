
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { CCTVHero } from "@/components/cctv/CCTVHero";
import { CCTVServices } from "@/components/cctv/CCTVServices";
import { CCTVTypes } from "@/components/cctv/CCTVTypes";
import { CCTVIndustries } from "@/components/cctv/CCTVIndustries";
import { SmartCCTVFeatures } from "@/components/cctv/SmartCCTVFeatures";
import { CCTVBrands } from "@/components/cctv/CCTVBrands";
import { CCTVFAQs } from "@/components/cctv/CCTVFAQs";
import { MonitorProperty } from "@/components/cctv/MonitorProperty";

const CCTVPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <CCTVHero />
            <CCTVServices />
            <CCTVTypes />
            <CCTVIndustries />
            <SmartCCTVFeatures />
            <CCTVBrands />
            <CCTVFAQs />
            <MonitorProperty />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CCTVPage;
