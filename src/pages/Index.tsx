import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Partnership from "@/components/Partnership";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <Hero />
        <Services />
        <About />
        <HowWeWork />
        <Partnership />
        <Portfolio />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
