import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush, Play, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const scrollToHowWeWork = () => {
    document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll detection with initial check
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    // Check initial scroll position immediately
    handleScroll();

    // Add scroll listener with throttling for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

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

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lilac-light via-warm-white to-purple-soft overflow-hidden py-8">
      {/* Top Navigation Menu - Transparent at top, visible when scrolling */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-32 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between py-3">
          {/* Logo in top left - clickable to scroll to top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/images/logo.png" 
              alt="Checa Makeup Logo" 
              className={`w-auto drop-shadow-lg transition-all duration-300 ${
                isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-32'
              }`}
            />
          </button>
          
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
      
      <div className={`container mx-auto px-6 relative z-10 max-w-7xl transition-all duration-300 ${
        isScrolled ? 'pt-24' : 'pt-8'
      }`}>
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
            <button 
                onClick={scrollToHowWeWork}
                className="w-full border-2 border-lilac text-purple-800 hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold py-3 px-4 bg-white shadow-lg rounded-lg"
            >
                {t('hero.howWeWork')}
            </button>
            <button 
                className="w-full bg-[#f4e1ff] hover:bg-[#f4e1ff]/80 text-purple-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-300 border border-purple-200"
                onClick={scrollToContact}
              >
                {t('hero.bookTrial')}
              </button>
            </div>
            
            {/* Elegant line under buttons - left aligned */}
            <div className="flex justify-center lg:justify-start mb-8">
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
            {/* Horizontal decorative line above video - left aligned */}
            <div className="hidden lg:flex justify-start mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-gradient-to-r from-purple-300 to-lilac rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-lilac to-purple-400 rounded-full"></div>
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
            {/* Elegant corner decorations with connecting vine and decorative flourishes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top right corner decoration with 3 flowers */}
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-28 lg:h-28 transform translate-x-4 -translate-y-1 lg:translate-x-6 lg:translate-y-3">
                <svg viewBox="0 0 140 140" className="w-full h-full">
                  <g>
                    
                    {/* Main corner flower - larger and positioned at exact corner */}
                    <g transform="translate(105, 28)">
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(30)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(60)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(90)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(120)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(150)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(180)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(210)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(240)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(270)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(300)" />
                      <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(330)" />
                      <circle cx="0" cy="0" r="9" fill="#512082" />
                    </g>
                    

                    
                    {/* Second flower - larger */}
                    <g transform="translate(60, 55)">
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(45)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(90)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(135)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(180)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(225)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(270)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(315)" />
                      <circle cx="0" cy="0" r="6" fill="#512082" />
                    </g>
                    

                    
                    {/* Third flower - larger */}
                    <g transform="translate(85, 85)">
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(60)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(120)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(180)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(240)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(300)" />
                      <circle cx="0" cy="0" r="5" fill="#512082" />
                    </g>
                    

                  </g>
                </svg>
              </div>
              
              {/* Connecting decorative vine between corners */}
              <div className="absolute top-0 right-0 w-16 h-full transform translate-x-2 lg:translate-x-3">
                <svg viewBox="0 0 64 400" className="w-full h-full" preserveAspectRatio="none">
                  <g>
                    {/* Main elegant vine connecting top to bottom */}
                    <path d="M50 80 Q30 120 40 160 Q55 200 35 240 Q25 280 45 320 Q55 360 40 380" 
                          stroke="#dab5fa" stroke-width="2.5" fill="none" opacity="0.7" />
                    
                    <path d="M47 85 Q27 125 37 165 Q52 205 32 245 Q22 285 42 325 Q52 365 37 380" 
                          stroke="#f1e2fd" stroke-width="1.5" fill="none" opacity="0.8" />
                    
                                         {/* Larger graceful leaves along the vine */}
                     <g transform="translate(32, 120) rotate(-25)">
                       <ellipse cx="0" cy="0" rx="5" ry="12" fill="#dab5fa" opacity="0.6" />
                       <ellipse cx="0" cy="0" rx="2.5" ry="8" fill="#f1e2fd" opacity="0.7" />
                     </g>
                     
                     <g transform="translate(50, 160) rotate(20)">
                       <ellipse cx="0" cy="0" rx="4" ry="10" fill="#f1e2fd" opacity="0.6" />
                       <ellipse cx="0" cy="0" rx="2" ry="6" fill="#dab5fa" opacity="0.7" />
                     </g>
                     
                     <g transform="translate(28, 200) rotate(-35)">
                       <ellipse cx="0" cy="0" rx="5" ry="14" fill="#dab5fa" opacity="0.6" />
                       <ellipse cx="0" cy="0" rx="2.5" ry="10" fill="#f1e2fd" opacity="0.7" />
                     </g>
                     
                     <g transform="translate(45, 240) rotate(15)">
                       <ellipse cx="0" cy="0" rx="4" ry="11" fill="#f1e2fd" opacity="0.6" />
                       <ellipse cx="0" cy="0" rx="2" ry="7" fill="#dab5fa" opacity="0.7" />
                     </g>
                     
                     <g transform="translate(30, 280) rotate(-20)">
                       <ellipse cx="0" cy="0" rx="4.5" ry="12" fill="#dab5fa" opacity="0.6" />
                       <ellipse cx="0" cy="0" rx="2" ry="8" fill="#f1e2fd" opacity="0.7" />
                     </g>
                    
                    {/* Small decorative flourishes */}
                    <g transform="translate(20, 140) rotate(-15)">
                      <ellipse cx="0" cy="0" rx="1" ry="3" fill="#f1e2fd" opacity="0.5" />
                    </g>
                    
                    <g transform="translate(15, 220) rotate(25)">
                      <ellipse cx="0" cy="0" rx="1.5" ry="4" fill="#dab5fa" opacity="0.5" />
                    </g>
                    
                    <g transform="translate(18, 300) rotate(-10)">
                      <ellipse cx="0" cy="0" rx="1" ry="3" fill="#f1e2fd" opacity="0.5" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Bottom right corner decoration with 3 flowers */}
              <div className="absolute bottom-0 right-0 w-44 h-44 lg:w-48 lg:h-48 transform translate-x-4 translate-y-4 lg:translate-x-5 lg:translate-y-5">
                <svg viewBox="0 0 250 250" className="w-full h-full">
                  <g>
                    
                    {/* Main corner flower - larger and positioned at exact corner */}
                    <g transform="translate(215, 215)">
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(30)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(60)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(90)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(120)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(150)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(180)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(210)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(240)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(270)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(300)" />
                      <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(330)" />
                      <circle cx="0" cy="0" r="11" fill="#512082" />
                    </g>
                    

                    
                    {/* Second flower - larger */}
                    <g transform="translate(175, 155)">
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(45)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(90)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(135)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(180)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(225)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(270)" />
                      <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(315)" />
                      <circle cx="0" cy="0" r="6" fill="#512082" />
                    </g>
                    

                    
                    {/* Third flower - larger */}
                    <g transform="translate(155, 190)">
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(60)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(120)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(180)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(240)" />
                      <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(300)" />
                      <circle cx="0" cy="0" r="5" fill="#512082" />
                    </g>
                    

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
