
import React, { useState, useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { FeedbackHero } from "@/components/feedback/FeedbackHero";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";
import { FeedbackTestimonials } from "@/components/feedback/FeedbackTestimonials";
import { FeedbackOverview } from "@/components/feedback/FeedbackOverview";

const FeedbackPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <FeedbackHero />
            <FeedbackForm />
            <FeedbackTestimonials />
            <FeedbackOverview />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FeedbackPage;
