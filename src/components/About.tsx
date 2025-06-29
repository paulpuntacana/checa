import { Star, Award, Heart, Brush, TreePalm } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-warm-white scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Mobile title - only visible on mobile */}
        <div className="lg:hidden text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-glamour rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center">
              {t('about.meetTitle')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="relative lg:col-span-1">
            <div className="aspect-[3/4] max-w-[400px] mx-auto bg-gradient-glamour rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <img 
                src="/images/about2.jpeg" 
                alt="Franchesca Martinez Castillo" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">Franchesca Martinez Castillo</h3>
                  <p className="text-muted-foreground text-sm">{t('about.title')}</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            {/* Sunflower top right - same as Hero */}
            <div className="absolute -top-6 -right-8 w-16 h-16 lg:w-20 lg:h-20 transform rotate-15">
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
            {/* Palm tree bottom left */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-palm-green rounded-full flex items-center justify-center shadow-lg">
              <TreePalm className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            {/* Desktop title - only visible on desktop */}
            <div className="hidden lg:flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-glamour rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                {t('about.meetTitle')}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.intro')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-lilac-light/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-lilac rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-1">
                  {t('about.experience')}
                </h4>
                <p className="text-muted-foreground text-sm">{t('about.experienceDesc')}</p>
              </div>

              <div className="bg-purple-soft/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-palm-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-1">
                  {t('about.specialization')}
                </h4>
                <p className="text-muted-foreground text-sm">{t('about.specializationDesc')}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lilac-light to-purple-soft rounded-2xl p-6">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-3 flex items-center">
                <Brush className="w-5 h-5 mr-2" />
                {t('about.philosophy')}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.philosophyDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
