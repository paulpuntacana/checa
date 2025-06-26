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
      <div className="absolute top-2 left-2 lg:top-12 lg:left-32 z-20">
        <img 
          src="/images/logo.png" 
          alt="Checa Makeup Logo" 
          className="h-20 lg:h-32 w-auto drop-shadow-lg"
        />
      </div>
      {/* Elegant decorative elements - Hidden on all mobile devices */}
      <div className="absolute top-40 right-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-lilac/50 to-transparent hidden xl:block transform -rotate-12" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-48 left-20 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-200/70 to-transparent hidden xl:block transform rotate-45" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in lg:col-span-2 order-1 lg:order-1 mt-16 lg:mt-8 lg:pl-8 xl:pl-16">
          
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
            
            {/* Elegant line under buttons - left aligned */}
            <div className="hidden xl:flex justify-center lg:justify-start mb-8">
              <div className="flex items-center justify-center space-x-3 max-w-md">
                <div className="w-24 h-0.5 bg-gradient-to-r from-purple-400 to-lilac rounded-full"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-lilac to-purple-300 rounded-full"></div>
                <div className="w-2 h-2 bg-lilac rounded-full animate-pulse"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative w-full max-w-xl mx-auto lg:col-span-3 order-2 lg:order-2 flex flex-col justify-center">
            {/* Horizontal decorative line above video - right aligned, running from right to left */}
            <div className="hidden xl:flex justify-end mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-gradient-to-l from-purple-400 to-lilac rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-4 h-0.5 bg-gradient-to-l from-lilac to-purple-300 rounded-full"></div>
              </div>
            </div>
            
            <div 
              className="aspect-video w-full bg-gradient-glamour shadow-2xl relative overflow-hidden cursor-pointer"
              style={{ borderRadius: '0 24px 24px 24px' }}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              {/* YouTube Video Embed */}
              <iframe
                id="youtube-player"
                ref={iframeRef}
                src="https://www.youtube.com/embed/7PFpO1XeycE?start=10&end=134&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&vq=hd1080&enablejsapi=1"
                title="Checa Makeup Video"
                className="absolute inset-0 w-full h-full object-cover border-0"
                frameBorder="0"
                style={{ border: 'none', outline: 'none' }}
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
            {/* Sunflower on corner of video - more realistic */}
            <div className="absolute -bottom-6 -right-8 w-16 h-16 lg:-bottom-8 lg:-right-10 lg:w-20 lg:h-20 transform rotate-15">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer petals */}
                <g fill="#FFD700">
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(0 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(22.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(45 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(67.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(90 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(112.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(135 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(157.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(180 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(202.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(225 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(247.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(270 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(292.5 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(315 50 50)"/>
                  <ellipse cx="50" cy="20" rx="3" ry="16" transform="rotate(337.5 50 50)"/>
                </g>
                {/* Inner petals */}
                <g fill="#FFA500">
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(11.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(33.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(56.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(78.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(101.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(123.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(146.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(168.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(191.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(213.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(236.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(258.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(281.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(303.75 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(326.25 50 50)"/>
                  <ellipse cx="50" cy="28" rx="2.5" ry="10" transform="rotate(348.75 50 50)"/>
                </g>
                {/* Center with gradient effect */}
                <circle cx="50" cy="50" r="16" fill="#654321"/>
                <circle cx="50" cy="50" r="12" fill="#8B4513"/>
                <circle cx="50" cy="50" r="8" fill="#A0522D"/>
              </svg>
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
