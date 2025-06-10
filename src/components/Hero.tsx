
import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lilac-light via-warm-white to-purple-soft overflow-hidden">
      {/* Makeup-themed decorative elements */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-glamour rounded-full animate-float flex items-center justify-center shadow-lg">
        <Brush className="w-10 h-10 text-white" />
      </div>
      <div className="absolute top-32 right-16 w-24 h-24 bg-sunflower/80 rounded-full animate-float flex items-center justify-center shadow-lg" style={{animationDelay: '1s'}}>
        <Sun className="w-12 h-12 text-white" />
      </div>
      <div className="absolute top-20 left-1/3 w-16 h-16 bg-palm-green/70 rounded-full animate-float flex items-center justify-center shadow-lg" style={{animationDelay: '2s'}}>
        <TreePalm className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-40 right-1/4 w-18 h-18 bg-gradient-accent rounded-full animate-float flex items-center justify-center shadow-lg" style={{animationDelay: '0.5s'}}>
        <Brush className="w-9 h-9 text-white" />
      </div>
      <div className="absolute bottom-32 left-16 w-14 h-14 bg-lilac/60 rounded-full animate-float shadow-lg" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-64 right-32 w-12 h-12 bg-sunflower/40 rounded-full animate-float shadow-lg" style={{animationDelay: '2.5s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-glamour rounded-full flex items-center justify-center animate-pulse shadow-xl border-4 border-white/30">
              <Brush className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm">
            {t('hero.title1')}
            <span className="block bg-gradient-to-r from-lilac to-purple-soft bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light drop-shadow-sm">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-lilac text-white hover:bg-purple-soft transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 shadow-xl border-2 border-white/20"
            >
              {t('hero.viewPortfolio')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-lilac text-lilac hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 bg-white/80 backdrop-blur-sm shadow-lg"
              onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.partnerships')}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-lilac drop-shadow-sm" />
      </div>
    </section>
  );
};

export default Hero;
