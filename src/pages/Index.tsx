import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MindMarketingSection from "@/components/MindMarketingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="neon-line mx-auto w-1/2" />
        <AboutSection />
        <div className="neon-line mx-auto w-1/2" />
        <ServicesSection />
        <div className="neon-line mx-auto w-1/2" />
        <ProjectsSection />
        <MindMarketingSection />
        <div className="neon-line mx-auto w-1/2" />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
