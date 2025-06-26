import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Wand2, Brush, Palette, Diamond, Star, Gem, Flower2, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Diamond,
      title: t('services.bridal'),
      description: t('services.bridalDesc'),
      gradient: "from-purple-700 to-purple-900"
    },
    {
      icon: Gem,
      title: t('services.resort'),
      description: t('services.resortDesc'),
      gradient: "from-purple-700 to-purple-900"
    },
    {
      icon: Star,
      title: t('services.events'),
      description: t('services.eventsDesc'),
      gradient: "from-purple-700 to-purple-900"
    },
    {
      icon: Home,
      title: t('services.homeStudio'),
      description: t('services.homeStudioDesc'),
      gradient: "from-purple-700 to-purple-900"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-warm-white to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group hover:bg-purple-50/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#f4e1ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-200">
                  <service.icon className="w-8 h-8 text-purple-900" fill="currentColor" />
                </div>
                <CardTitle className="font-playfair text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
