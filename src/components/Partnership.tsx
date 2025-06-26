
import { Building, Users, Calendar, Award, TrendingUp, Globe, Heart, Star } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Partnership = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Users,
      title: t('partnership.guestExperience'),
      description: t('partnership.guestExperienceDesc'),
    },
    {
      icon: Calendar,
      title: t('partnership.flexible'),
      description: t('partnership.flexibleDesc'),
    },
    {
      icon: Award,
      title: t('partnership.premium'),
      description: t('partnership.premiumDesc'),
    },
    {
      icon: TrendingUp,
      title: t('partnership.revenue'),
      description: t('partnership.revenueDesc'),
    },
    {
      icon: Building,
      title: t('partnership.brand'),
      description: t('partnership.brandDesc'),
    },
    {
      icon: Globe,
      title: t('partnership.expertise'),
      description: t('partnership.expertiseDesc'),
    },
  ];

  return (
    <section id="partnership" className="py-12 bg-gradient-to-br from-[#f4e1ff] via-[#f4e1ff]/80 to-[#f4e1ff] relative overflow-hidden">
      {/* Glamorous background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sunflower/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-palm-green/20 rounded-full blur-lg"></div>
      </div>
      
      {/* Decorative stars */}
      <div className="absolute top-32 left-1/3">
        <Star className="w-6 h-6 text-sunflower/60 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-1/3">
        <Heart className="w-5 h-5 text-white/80 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-1/2">
        <Star className="w-4 h-4 text-white/80 animate-pulse" fill="currentColor" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-sm">
            {t('partnership.title')}
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('partnership.subtitle')}
          </p>
        </div>

        {/* Benefits Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-4 rounded-xl bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20 text-center">
              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/40 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 font-playfair text-lg drop-shadow-sm">{benefit.title}</h4>
              <p className="text-foreground/80 text-xs leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
