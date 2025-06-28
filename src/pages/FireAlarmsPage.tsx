
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { FireAlarmsHero } from "@/components/firealarms/FireAlarmsHero";
import { FireAlarmsServices } from "@/components/firealarms/FireAlarmsServices";
import { FireAlarmsTypes } from "@/components/firealarms/FireAlarmsTypes";
import { FireAlarmsBrands } from "@/components/firealarms/FireAlarmsBrands";
import { FireAlarmsIndustries } from "@/components/firealarms/FireAlarmsIndustries";
import { FireAlarmsFAQs } from "@/components/firealarms/FireAlarmsFAQs";

const FireAlarmsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <FireAlarmsHero />
            <FireAlarmsServices />
            <FireAlarmsTypes />
            <FireAlarmsBrands />
            <FireAlarmsIndustries />
            <FireAlarmsFAQs />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FireAlarmsPage;
