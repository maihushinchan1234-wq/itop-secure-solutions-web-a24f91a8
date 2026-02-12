import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrintersPage from "./pages/PrintersPage";
import CCTVPage from "./pages/CCTVPage";
import DoorLocksPage from "./pages/DoorLocksPage";
import FireAlarmsPage from "./pages/FireAlarmsPage";
import HomeAutomationPage from "./pages/HomeAutomationPage";
import FeedbackPage from "./pages/FeedbackPage";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/chat/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/printers" element={<PrintersPage />} />
          <Route path="/cctv" element={<CCTVPage />} />
          <Route path="/door-locks" element={<DoorLocksPage />} />
          <Route path="/fire-alarms" element={<FireAlarmsPage />} />
          <Route path="/home-automation" element={<HomeAutomationPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
