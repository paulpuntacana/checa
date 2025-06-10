import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToHowWeWork = () => {
    document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-glamour rounded-full flex items-center justify-center animate-pulse shadow-xl border-4 border-white/30">
                <Brush className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm text-center lg:text-left">
              Your Wedding. Your Glow.
              <span className="block bg-gradient-to-r from-lilac to-purple-soft bg-clip-text text-transparent">
                Our Team.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-sm text-center lg:text-left">
              Makeup artistry in paradise, by Checa make up & her squad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToHowWeWork}
                size="lg" 
                className="bg-purple-700 text-white hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 shadow-xl border-2 border-white/20"
              >
                How we work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-lilac text-purple-800 hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 bg-white shadow-lg"
                onClick={scrollToContact}
              >
                Book a Trial
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] bg-gradient-glamour rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <img 
                src="/images/header-image.jpg" 
                alt="Checa Makeup Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-sunflower rounded-full flex items-center justify-center shadow-lg">
              <Brush className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-lilac rounded-full flex items-center justify-center shadow-lg">
              <TreePalm className="w-6 h-6 text-white" />
            </div>
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
