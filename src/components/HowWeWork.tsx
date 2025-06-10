
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Palette, Sparkles, Camera } from "lucide-react";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      title: t('howWeWork.consultation'),
      description: t('howWeWork.consultationDesc'),
      number: "01"
    },
    {
      icon: Palette,
      title: t('howWeWork.preparation'),
      description: t('howWeWork.preparationDesc'),
      number: "02"
    },
    {
      icon: Sparkles,
      title: t('howWeWork.application'),
      description: t('howWeWork.applicationDesc'),
      number: "03"
    },
    {
      icon: Camera,
      title: t('howWeWork.finishing'),
      description: t('howWeWork.finishingDesc'),
      number: "04"
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('howWeWork.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('howWeWork.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-glamour rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{step.number}</span>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
