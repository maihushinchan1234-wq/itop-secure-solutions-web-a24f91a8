
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

const FireAlarmsPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Fire Alarm & Detection Systems
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  From Smoke Detectors to Integrated Alarm Systems – Detect Early, Respond Fast, Stay Safe
                </p>
              </div>
            </section>
            
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Coming Soon</h2>
                <p className="text-center text-gray-600">
                  Our comprehensive fire alarm services page is under development. 
                  Please contact us for immediate assistance with your safety needs.
                </p>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FireAlarmsPage;
