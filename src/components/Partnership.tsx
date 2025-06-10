
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="partnership" className="py-20 bg-gradient-to-br from-lilac-light via-purple-soft to-lilac-light relative overflow-hidden">
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
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-8 flex items-center drop-shadow-sm">
              <Star className="w-8 h-8 text-sunflower mr-3" fill="currentColor" />
              {t('partnership.whyPartner')}
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group p-4 rounded-2xl bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20">
                  <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-playfair text-lg drop-shadow-sm">{benefit.title}</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-sunflower/30 rounded-full flex items-center justify-center mr-3">
                <Star className="w-5 h-5 text-foreground" fill="currentColor" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground drop-shadow-sm">
                {t('partnership.packages')}
              </h3>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/95 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lilac font-playfair flex items-center">
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    {t('partnership.preferred')}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{t('partnership.preferredDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Priority booking and scheduling</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Discounted rates for bulk bookings</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Dedicated account management</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Marketing collaboration opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/95 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-palm-green font-playfair flex items-center">
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    {t('partnership.event')}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{t('partnership.eventDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Custom event packages</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Multiple artist coordination</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Setup and breakdown included</li>
                    <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-sunflower" fill="currentColor" /> Professional photography support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-sunflower" fill="currentColor" />
              ))}
            </div>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-6 drop-shadow-sm">
            {t('partnership.ready')}
          </h3>
          <p className="text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('partnership.readyDesc')}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-lilac hover:bg-white/90 transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-3 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('partnership.startDiscussion')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
