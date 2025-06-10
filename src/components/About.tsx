
import { Star, Award, Heart, Brush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-glamour rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">Franchesca Martinez Castillo</h3>
                  <p className="text-muted-foreground text-sm">{t('about.title')}</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-sunflower rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lilac rounded-full flex items-center justify-center shadow-lg">
              <Brush className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center mb-6">
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
