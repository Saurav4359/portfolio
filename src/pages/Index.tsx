import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

const Index = () => {
  return (
    <div className="portfolio-shell min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="portfolio-aurora portfolio-aurora-left" />
        <div className="portfolio-aurora portfolio-aurora-right" />
        <div className="portfolio-spotlight" />
        <div className="portfolio-grid" />
        <div className="portfolio-noise" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
