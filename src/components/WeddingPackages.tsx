import { Diamond, Gem, Heart, Star, Crown, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WeddingPackages = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Wedding Packages",
      subtitle: "Choose the perfect package for your special day",
      packages: [
        {
          name: "Diamond Bride",
          subtitle: "& Courtship Package",
          icon: Diamond,
          features: [
            "Makeup for the bride ceremony",
            "Hairstyle for the bride's ceremony", 
            "Makeup and hairstyle for 8 people in the party",
            "Makeup touch-up for the bride",
            "Before and after ceremony service"
          ]
        },
        {
          name: "Sapphire Package",
          subtitle: "(For the Bride Only)",
          icon: Gem,
          features: [
            "Hair and makeup trial for the bride",
            "Makeup for the bride ceremony",
            "Hairstyle for the bride's ceremony",
            "Makeup touch-up before the ceremony"
          ]
        },
        {
          name: "Ruby Package",
          subtitle: "(Basic, Makeup Only)",
          icon: Heart,
          features: [
            "Makeup test for the bride",
            "Makeup for the bride ceremony", 
            "Makeup for 5 people"
          ]
        }
      ],
      contactForPricing: "Contact for pricing"
    },
    es: {
      title: "Paquetes de Boda",
      subtitle: "Elige el paquete perfecto para tu día especial",
      packages: [
        {
          name: "Diamond Bride",
          subtitle: "& Paquete de Cortejo",
          icon: Diamond,
          features: [
            "Maquillaje para la ceremonia de la novia",
            "Peinado para la ceremonia de la novia",
            "Maquillaje y peinado para 8 personas del grupo",
            "Retoque de maquillaje para la novia",
            "Servicio antes y después de la ceremonia"
          ]
        },
        {
          name: "Paquete Sapphire",
          subtitle: "(Solo para la Novia)",
          icon: Gem,
          features: [
            "Prueba de cabello y maquillaje para la novia",
            "Maquillaje para la ceremonia de la novia",
            "Peinado para la ceremonia de la novia",
            "Retoque de maquillaje antes de la ceremonia"
          ]
        },
        {
          name: "Paquete Ruby",
          subtitle: "(Básico, Solo Maquillaje)",
          icon: Heart,
          features: [
            "Prueba de maquillaje para la novia",
            "Maquillaje para la ceremonia de la novia",
            "Maquillaje para 5 personas"
          ]
        }
      ],
      contactForPricing: "Contacta para precios"
    }
  };

  const t = content[language];

  return (
    <section id="wedding-packages" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f4e1ff] rounded-full mb-6 border border-purple-200">
            <Crown className="w-8 h-8 text-purple-900" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.packages.map((pkg, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
            >
              {/* Package Header */}
              <div className="bg-gradient-to-br from-[#f4e1ff] to-purple-100 p-6 text-center relative">
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" />
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pkg.icon className="w-8 h-8 text-purple-700" fill="currentColor" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-1">{pkg.name}</h3>
                <p className="text-purple-700 text-sm font-medium">{pkg.subtitle}</p>
              </div>

              {/* Package Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-[#f4e1ff] hover:bg-[#f4e1ff]/80 text-purple-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-300 border border-purple-200">
                  {t.contactForPricing}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingPackages; 