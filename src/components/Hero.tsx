import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush, Play, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      {/* Top Navigation Menu */}
      <nav className="absolute top-2 left-0 right-0 z-30 px-4 lg:px-32">
        <div className="flex items-center justify-between">
          {/* Logo in top left */}
          <div>
            <img 
              src="/images/logo.png" 
              alt="Checa Makeup Logo" 
              className="h-20 lg:h-32 w-auto drop-shadow-lg"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-sm"
            >
              {t('language.english') === 'English' ? 'Services' : 'Servicios'}
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-sm"
            >
              Portfolio
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-sm"
            >
              {t('language.english') === 'English' ? 'About' : 'Acerca'}
            </button>
            <button 
              onClick={() => document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-sm"
            >
              {t('language.english') === 'English' ? 'Packages' : 'Paquetes'}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#f4e1ff] text-purple-900 px-6 py-2 rounded-full hover:bg-purple-200 transition-all duration-300 font-medium text-sm border border-purple-200"
            >
              {t('language.english') === 'English' ? 'Contact' : 'Contacto'}
            </button>
            
            {/* Language Toggle integrated in menu */}
            <div className="flex items-center bg-white/90 backdrop-blur-sm border border-purple-300 rounded-full p-1">
              <button
                onClick={() => window.location.href = '/en'}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') === 'English'
                    ? 'bg-[#f4e1ff] text-purple-900'
                    : 'text-gray-600 hover:text-purple-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => window.location.href = '/es'}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') !== 'English'
                    ? 'bg-[#f4e1ff] text-purple-900'
                    : 'text-gray-600 hover:text-purple-900'
                }`}
              >
                ES
              </button>
            </div>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Toggle for Mobile */}
            <div className="flex items-center bg-white/90 backdrop-blur-sm border border-purple-300 rounded-full p-1">
              <button
                onClick={() => window.location.href = '/en'}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') === 'English'
                    ? 'bg-[#f4e1ff] text-purple-900'
                    : 'text-gray-600 hover:text-purple-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => window.location.href = '/es'}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') !== 'English'
                    ? 'bg-[#f4e1ff] text-purple-900'
                    : 'text-gray-600 hover:text-purple-900'
                }`}
              >
                ES
              </button>
            </div>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-[#f4e1ff] text-purple-900 p-2 rounded-full hover:bg-purple-200 transition-colors duration-300 border border-purple-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-purple-200 rounded-xl shadow-lg md:hidden z-40 mx-4">
              <div className="flex flex-col space-y-4 p-6">
                <button 
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-left"
                >
                  {t('language.english') === 'English' ? 'Services' : 'Servicios'}
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-left"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-left"
                >
                  {t('language.english') === 'English' ? 'About' : 'Acerca'}
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-purple-900 font-medium transition-colors duration-300 text-left"
                >
                  {t('language.english') === 'English' ? 'Packages' : 'Paquetes'}
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#f4e1ff] text-purple-900 px-6 py-3 rounded-full hover:bg-purple-200 transition-all duration-300 font-medium border border-purple-200 text-center"
                >
                  {t('language.english') === 'English' ? 'Contact' : 'Contacto'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
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
            {/* Large soft purple sunflower corner decoration */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Bottom-right corner large sunflower ornament - positioned over video corner */}
              <div className="absolute -bottom-7 -right-7 w-48 h-48 lg:-bottom-9 lg:-right-9 lg:w-64 lg:h-64">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <defs>
                    <linearGradient id="customPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#f1e2fd', stopOpacity:0.9}} />
                      <stop offset="33%" style={{stopColor:'#dab5fa', stopOpacity:0.95}} />
                      <stop offset="66%" style={{stopColor:'#7329c6', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#512082', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  
                  <g fill="url(#customPurpleGradient)">
                    {/* Main decorative corner curves */}
                    <path d="M120 160 Q160 160 160 120 Q160 110 150 115 Q140 120 130 130 Q120 140 115 150 Q110 160 120 160 Z" stroke="#7329c6" stroke-width="2" fill="none" />
                    <path d="M100 160 Q120 160 130 140 Q140 120 160 100" stroke="#dab5fa" stroke-width="1" fill="none" />
                    
                    {/* Large main sunflower */}
                    <g transform="translate(125, 125)">
                      {/* Sunflower petals - larger */}
                      <ellipse cx="0" cy="-12" rx="3" ry="9" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(30)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(60)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(90)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(120)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(150)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(180)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(210)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(240)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(270)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(300)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-12" rx="3" ry="9" transform="rotate(330)" fill="#f1e2fd" />
                      {/* Center */}
                      <circle cx="0" cy="0" r="7" fill="#512082" />
                    </g>
                    
                    {/* Medium sunflower */}
                    <g transform="translate(95, 135)">
                      <ellipse cx="0" cy="-8" rx="2" ry="6" fill="#dab5fa" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(45)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(90)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(135)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(180)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(225)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(270)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-8" rx="2" ry="6" transform="rotate(315)" fill="#f1e2fd" />
                      <circle cx="0" cy="0" r="4" fill="#512082" />
                    </g>
                    
                    {/* Small sunflower */}
                    <g transform="translate(135, 95)">
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" fill="#dab5fa" />
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" transform="rotate(60)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" transform="rotate(120)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" transform="rotate(180)" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" transform="rotate(240)" fill="#dab5fa" />
                      <ellipse cx="0" cy="-6" rx="1.5" ry="4" transform="rotate(300)" fill="#f1e2fd" />
                      <circle cx="0" cy="0" r="3" fill="#512082" />
                    </g>
                    
                    {/* Decorative leaves and swirls */}
                    <path d="M110 140 Q105 135 110 130 Q115 135 110 140" fill="#7329c6" />
                    <path d="M140 110 Q135 105 140 100 Q145 105 140 110" fill="#dab5fa" />
                    <ellipse cx="115" cy="132" rx="1.5" ry="5" transform="rotate(-30 115 132)" fill="#f1e2fd" />
                    <ellipse cx="132" cy="115" rx="1.5" ry="5" transform="rotate(30 132 115)" fill="#7329c6" />
                    
                    {/* Extra decorative swirls */}
                    <path d="M80 150 Q90 145 100 150 Q110 155 120 150" stroke="#dab5fa" stroke-width="2" fill="none" />
                    <path d="M150 80 Q145 90 150 100 Q155 110 150 120" stroke="#7329c6" stroke-width="2" fill="none" />
                  </g>
                </svg>
              </div>
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
