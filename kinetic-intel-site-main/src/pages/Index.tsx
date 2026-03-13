import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AwardsSection from "@/components/AwardsSection";
import CTASection from "@/components/CTASection";
import ClienteleSection from "@/components/ClienteleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
      <ClienteleSection />
      <Footer />
    </div>
  );
};

export default Index;
