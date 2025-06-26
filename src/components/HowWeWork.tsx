import { MessageCircle, Palette, Brush, Sparkles, Wand2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      number: "01"
    },
    {
      icon: Palette,
      number: "02"
    },
    {
      icon: Brush,
      number: "03"
    },
    {
      icon: Sparkles,
      number: "04"
    }
  ];

  return (
    <section id="how-we-work" className="py-16 bg-gradient-to-br from-warm-white to-white">
      <div className="container mx-auto px-6">
                  <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Wand2 className="w-8 h-8 text-purple-700" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('howWeWork.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('howWeWork.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-50/50"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#f4e1ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-200">
                  <step.icon className="w-8 h-8 text-purple-900" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-700">{step.number}</span>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 text-center">
                {t(`howWeWork.steps.${index}.title`)}
              </h3>
              <p className="text-muted-foreground text-center mb-4 font-medium">
                {t(`howWeWork.steps.${index}.description`)}
              </p>
              <div className="h-px w-12 bg-purple-200 mx-auto mb-4"></div>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {t(`howWeWork.steps.${index}.details`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
