import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowWeWorkPackages from "@/components/HowWeWorkPackages";
import Partnership from "@/components/Partnership";
import Reviews from "@/components/Reviews";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";

const Index = () => {
  return (
      <div className="min-h-screen">
      <SEOHead />
      <SEOSchema />
        <LanguageToggle />
        <Hero />
      <Services />
      <Portfolio />
        <About />
      <HowWeWorkPackages />
      <Reviews />
        <Partnership />
        <Contact />
      <Footer />
      </div>
  );
};

export default Index;
