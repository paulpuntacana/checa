import { Button } from "@/components/ui/button";
import { ArrowDown, Sun, TreePalm, Brush, Play, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToHowWeWork = () => {
    document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Add throttling to prevent too many updates
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

    // Set initial scroll state
    handleScroll();
    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/video-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

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
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
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
              className={`font-medium transition-colors duration-300 text-sm ${
                isScrolled ? 'text-gray-600 hover:text-purple-900' : 'text-white hover:text-purple-200'
              }`}
            >
              {t('language.english') === 'English' ? 'Services' : 'Servicios'}
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className={`font-medium transition-colors duration-300 text-sm ${
                isScrolled ? 'text-gray-600 hover:text-purple-900' : 'text-white hover:text-purple-200'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className={`font-medium transition-colors duration-300 text-sm ${
                isScrolled ? 'text-gray-600 hover:text-purple-900' : 'text-white hover:text-purple-200'
              }`}
            >
              {t('language.english') === 'English' ? 'About' : 'Acerca'}
            </button>
            <button 
              onClick={() => document.getElementById('how-we-work-packages')?.scrollIntoView({ behavior: 'smooth' })}
              className={`font-medium transition-colors duration-300 text-sm ${
                isScrolled ? 'text-gray-600 hover:text-purple-900' : 'text-white hover:text-purple-200'
              }`}
            >
              {t('language.english') === 'English' ? 'Packages' : 'Paquetes'}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#f4e1ff] text-purple-900 border-purple-200 hover:bg-purple-200'
                  : 'bg-white/20 text-white border-white/50 hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {t('language.english') === 'English' ? 'Contact' : 'Contacto'}
            </button>
            
            {/* Language Toggle integrated in menu */}
            <div className={`flex items-center border rounded-full p-1 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 backdrop-blur-sm border-purple-300'
                : 'bg-white/20 backdrop-blur-sm border-white/50'
            }`}>
              <button
                onClick={() => window.location.href = '/en'}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') === 'English'
                    ? isScrolled 
                      ? 'bg-[#f4e1ff] text-purple-900'
                      : 'bg-white/30 text-white'
                    : isScrolled
                      ? 'text-gray-600 hover:text-purple-900'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => window.location.href = '/es'}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') !== 'English'
                    ? isScrolled 
                      ? 'bg-[#f4e1ff] text-purple-900'
                      : 'bg-white/30 text-white'
                    : isScrolled
                      ? 'text-gray-600 hover:text-purple-900'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Toggle for Mobile */}
            <div className={`flex items-center border rounded-full p-1 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 backdrop-blur-sm border-purple-300'
                : 'bg-white/20 backdrop-blur-sm border-white/50'
            }`}>
              <button
                onClick={() => window.location.href = '/en'}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') === 'English'
                    ? isScrolled 
                      ? 'bg-[#f4e1ff] text-purple-900'
                      : 'bg-white/30 text-white'
                    : isScrolled
                      ? 'text-gray-600 hover:text-purple-900'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => window.location.href = '/es'}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  t('language.english') !== 'English'
                    ? isScrolled 
                      ? 'bg-[#f4e1ff] text-purple-900'
                      : 'bg-white/30 text-white'
                    : isScrolled
                      ? 'text-gray-600 hover:text-purple-900'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full border transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-[#f4e1ff] text-purple-900 border-purple-200 hover:bg-purple-200'
                  : 'bg-white/20 text-white border-white/50 hover:bg-white/30 backdrop-blur-sm'
              }`}
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

      {/* Hero Content - Left Aligned */}
      <div className={`container mx-auto px-6 relative z-10 max-w-7xl transition-all duration-300 ${
        isScrolled ? 'pt-24' : 'pt-8'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in mt-16 lg:mt-8 lg:pl-8 xl:pl-16 text-center lg:text-left">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
              {t('hero.title1')}
              <span className="block text-white">
                {t('hero.title2')}
              </span>
              <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {t('hero.title3')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-lg text-white">
              {t('hero.subtitle')}
            </p>
            
            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-white/95 text-purple-900 px-6 py-3 font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:shadow-lg backdrop-blur-sm border border-white/30 shadow-md"
              >
                {t('language.english') === 'English' ? 'Book Your Date' : 'Reserva Tu Fecha'}
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/60 text-white px-6 py-3 font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/80 backdrop-blur-sm shadow-md"
              >
                {t('language.english') === 'English' ? 'See Our Work' : 'Ver Nuestro Trabajo'}
              </button>
            </div>
          </div>
          
          {/* Right side - Empty space for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
