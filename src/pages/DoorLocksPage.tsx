
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { DoorLocksHero } from "@/components/doorlocks/DoorLocksHero";
import { DoorLocksServices } from "@/components/doorlocks/DoorLocksServices";
import { DoorLocksTypes } from "@/components/doorlocks/DoorLocksTypes";
import { DoorLocksBrands } from "@/components/doorlocks/DoorLocksBrands";
import { DoorLocksIndustries } from "@/components/doorlocks/DoorLocksIndustries";
import { DoorLocksFAQs } from "@/components/doorlocks/DoorLocksFAQs";

const DoorLocksPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <DoorLocksHero />
            <DoorLocksServices />
            <DoorLocksTypes />
            <DoorLocksBrands />
            <DoorLocksIndustries />
            <DoorLocksFAQs />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DoorLocksPage;
