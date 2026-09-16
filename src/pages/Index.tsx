import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TerminalBackground from "@/components/TerminalBackground";
import ProjectsSection from "@/components/ProjectsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import ResumeSection from "@/components/ResumeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <TerminalBackground />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <WorkshopsSection />
      <ResumeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
