
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <HowWeWork />
        <Partnership />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
