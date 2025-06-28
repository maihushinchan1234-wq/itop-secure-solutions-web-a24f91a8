
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { PrinterHero } from "@/components/printers/PrinterHero";
import { PrinterServices } from "@/components/printers/PrinterServices";
import { PrinterTypes } from "@/components/printers/PrinterTypes";
import { PrinterBrands } from "@/components/printers/PrinterBrands";
import { PrinterIndustries } from "@/components/printers/PrinterIndustries";
import { PrinterFAQs } from "@/components/printers/PrinterFAQs";
import { Footer } from "@/components/layout/Footer";

const PrintersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <PrinterHero />
            <PrinterServices />
            <PrinterTypes />
            <PrinterBrands />
            <PrinterIndustries />
            <PrinterFAQs />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PrintersPage;
