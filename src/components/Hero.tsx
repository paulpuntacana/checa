import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const scrollToHowWeWork = () => {
    document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // YouTube Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('youtube-player', {
        events: {
          onStateChange: (event: any) => {
            // When video ends, restart from 10 seconds
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.seekTo(10);
              event.target.playVideo();
            }
            // Check current time and restart if past 2:14 (134 seconds)
            const checkTime = setInterval(() => {
              if (event.target.getCurrentTime && event.target.getCurrentTime() >= 134) {
                event.target.seekTo(10);
                clearInterval(checkTime);
              }
            }, 1000);
          }
        }
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lilac-light via-warm-white to-purple-soft overflow-hidden py-8">
      {/* Logo in top left */}
      <div className="absolute top-4 left-4 lg:top-12 lg:left-32 z-20 lg:animate-float">
        <img 
          src="/images/logo.png" 
          alt="Checa Makeup Logo" 
          className="h-32 lg:h-40 w-auto drop-shadow-lg"
        />
      </div>
      {/* Makeup-themed decorative elements - hidden on mobile */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-glamour rounded-full animate-float flex items-center justify-center shadow-lg hidden lg:flex">
        <Brush className="w-10 h-10 text-white" />
      </div>
      <div className="absolute top-32 right-16 w-24 h-24 bg-sunflower/80 rounded-full animate-float flex items-center justify-center shadow-lg hidden lg:flex" style={{animationDelay: '1s'}}>
        <Sun className="w-12 h-12 text-white" />
      </div>
      <div className="absolute top-20 left-1/3 w-16 h-16 bg-palm-green/70 rounded-full animate-float flex items-center justify-center shadow-lg hidden lg:flex" style={{animationDelay: '2s'}}>
        <TreePalm className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-40 right-1/4 w-18 h-18 bg-gradient-accent rounded-full animate-float flex items-center justify-center shadow-lg hidden lg:flex" style={{animationDelay: '0.5s'}}>
        <Brush className="w-9 h-9 text-white" />
      </div>
      <div className="absolute bottom-32 left-16 w-14 h-14 bg-lilac/60 rounded-full animate-float shadow-lg hidden lg:block" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-64 right-32 w-12 h-12 bg-sunflower/40 rounded-full animate-float shadow-lg hidden lg:block" style={{animationDelay: '2.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center justify-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in lg:col-span-2 order-1 lg:order-1">
            <div className="hidden lg:flex justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-glamour rounded-full flex items-center justify-center animate-pulse shadow-xl border-4 border-white/30">
                <Brush className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm text-center lg:text-left">
              {t('hero.title1')}
              <span className="block text-foreground">
                {t('hero.title2')}
              </span>
              <span className="block bg-gradient-to-r from-lilac to-purple-soft bg-clip-text text-transparent">
                {t('hero.title3')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-sm text-center lg:text-left">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToHowWeWork}
                size="lg" 
                className="bg-purple-700 text-white hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 shadow-xl border-2 border-white/20"
              >
                {t('hero.howWeWork')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-lilac text-purple-800 hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 bg-white shadow-lg"
                onClick={scrollToContact}
              >
                {t('hero.bookTrial')}
              </Button>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:col-span-3 order-2 lg:order-2 block">
            <div 
              className="aspect-video w-full bg-gradient-glamour rounded-3xl shadow-2xl relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              {/* YouTube Video Embed */}
              <iframe
                id="youtube-player"
                ref={iframeRef}
                src="https://www.youtube.com/embed/7PFpO1XeycE?start=10&end=134&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&vq=hd1080&enablejsapi=1"
                title="Checa Makeup Video"
                className="absolute inset-0 w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                  isVideoHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <a
                  href="https://www.youtube.com/watch?v=7PFpO1XeycE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-purple-900 font-semibold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  <span>View on YouTube</span>
                </a>
              </div>
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
      
      {/* Discover More Arrow - Hidden on mobile */}
      <div className="absolute bottom-8 w-full hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="animate-bounce">
              <div className="flex flex-col items-center space-y-3">
                <span className="text-lilac text-lg font-semibold drop-shadow-sm text-center whitespace-nowrap">
                  {t('hero.discoverMore')}
                </span>
                <ArrowDown className="w-8 h-8 text-lilac drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
