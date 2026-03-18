import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import OurStory from "./pages/OurStory.tsx";
import CompanyStory from "./pages/CompanyStory.tsx";
import AboutFounder from "./pages/AboutFounder.tsx";
import Advisory from "./pages/Advisory.tsx";
import Mentors from "./pages/Mentors.tsx";
import Team from "./pages/Team.tsx";
import AwardsAchievements from "./pages/AwardsAchievements.tsx";
import Books from "./pages/Books.tsx";
import Media from "./pages/Media.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import AIDigitalMarketing from "./pages/AIDigitalMarketing.tsx";
import AIConsultancy from "./pages/AIConsultancy.tsx";
import CustomizedAISolutions from "./pages/CustomizedAISolutions.tsx";
import MarketingConsultancy from "./pages/MarketingConsultancy.tsx";
import AgenticAI from "./pages/AgenticAI.tsx";
import Automations from "./pages/Automations.tsx";
import Robotics from "./pages/Robotics.tsx";
import ARSolutions from "./pages/ARSolutions.tsx";
import Trainings from "./pages/Trainings.tsx";
import OpenWorkshops from "./pages/OpenWorkshops.tsx";
import CorporateWorkshops from "./pages/CorporateWorkshops.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import Blogs from "./pages/Blogs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-story/company" element={<CompanyStory />} />
          <Route path="/our-story/founder" element={<AboutFounder />} />
          <Route path="/our-story/advisory" element={<Advisory />} />
          <Route path="/our-story/mentors" element={<Mentors />} />
          <Route path="/our-story/team" element={<Team />} />
          <Route path="/our-story/awards" element={<AwardsAchievements />} />
          <Route path="/our-story/books" element={<Books />} />
          <Route path="/our-story/media" element={<Media />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/ai-digital-marketing" element={<AIDigitalMarketing />} />
          <Route path="/what-we-do/ai-consultancy" element={<AIConsultancy />} />
          <Route path="/what-we-do/custom-solutions" element={<CustomizedAISolutions />} />
          <Route path="/what-we-do/marketing" element={<MarketingConsultancy />} />
          <Route path="/what-we-do/agentic-ai" element={<AgenticAI />} />
          <Route path="/what-we-do/automations" element={<Automations />} />
          <Route path="/what-we-do/robotics" element={<Robotics />} />
          <Route path="/what-we-do/ar-solutions" element={<ARSolutions />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/trainings/open-workshops" element={<OpenWorkshops />} />
          <Route path="/trainings/corporate" element={<CorporateWorkshops />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
