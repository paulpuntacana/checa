import { useState, useEffect } from "react";
import { MessageCircle, Palette, Brush, Sparkles, Diamond, Gem, Heart, Crown, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWorkPackages = () => {
  const { language } = useLanguage();
  const [openStep, setOpenStep] = useState(0); // First step open by default



  const content = {
    en: {
      howWeWorkTitle: "How We Work",
      packagesTitle: "Wedding Packages",
      packagesSubtitle: "Choose the perfect package for your special day",
      steps: [
        {
          title: "Consultation",
          description: "We discuss your vision, preferences, and event details",
          details: "During this session, we align with your desired style, skin type, and occasion to create the perfect plan for your makeup look."
        },
        {
          title: "Skin Prep & Product Selection",
          description: "We prep your skin and choose the right products",
          details: "We prepare your skin with care and select long-lasting products tailored to your needs and the tropical Dominican climate."
        },
        {
          title: "Personalized Application",
          description: "We bring your dream look to life",
          details: "Your look is applied with precision, blending artistry with technique — fully customized to match your features and style."
        },
        {
          title: "Final Touch & Set",
          description: "We finalize the look and ensure it stays perfect",
          details: "We finish with expert setting techniques, final checks, and a touch-up kit if needed — so you stay flawless all day."
        }
      ],
      packages: [
        {
          name: "Diamond Bride",
          subtitle: "& Courtship Package",
          icon: Diamond,
          bgImage: "/images/diamond.jpg",
          iconColor: "text-blue-200",
          features: [
            "Makeup for the bride ceremony",
            "Hairstyle for the bride's ceremony", 
            "Makeup and hairstyle for 8 people in the party",
            "Makeup touch-up for the bride",
            "Before and after ceremony service"
          ],
          summary: "💎 The most complete package for 8 people - you'll be completely worry-free on your special day."
        },
        {
          name: "Sapphire Package",
          subtitle: "(For the Bride Only)",
          icon: Gem,
          bgImage: "/images/sapphire.png",
          iconColor: "text-blue-400",
          features: [
            "Hair and makeup trial for the bride",
            "Makeup for the bride ceremony",
            "Hairstyle for the bride's ceremony",
            "Makeup touch-up before and after the ceremony",
            "Personalized skincare prep (hydration & glow boost)"
          ],
          summary: "✨ Bride-focused package with personal attention and perfect preparation."
        },
        {
          name: "Ruby Package",
          subtitle: "(Basic, Makeup Only)",
          icon: Heart,
          bgImage: "/images/ruby.png",
          iconColor: "text-red-400",
          features: [
            "Makeup test for the bride",
            "Makeup for the bride ceremony", 
            "Makeup for 5 people",
            "Basic skin prep (primer, hydration, SPF)",
            "Optional add-on: hair service available on request"
          ],
          summary: "💖 Essential makeup package for 5 people - everything you need for a beautiful celebration."
        }
      ],
      contactForPricing: "Contact for pricing"
    },
    es: {
      howWeWorkTitle: "Cómo Trabajamos",
      packagesTitle: "Paquetes de Boda",
      packagesSubtitle: "Elige el paquete perfecto para tu día especial",
      steps: [
        {
          title: "Consulta inicial",
          description: "Hablamos sobre tu estilo, preferencias y detalles del evento",
          details: "Durante esta sesión nos alineamos contigo para definir tu look ideal, tipo de piel y ocasión, creando así un plan de maquillaje perfecto."
        },
        {
          title: "Preparación de la piel y selección de productos",
          description: "Preparamos tu piel y elegimos los productos ideales",
          details: "Tratamos tu piel con cuidado y seleccionamos productos duraderos adaptados a tus necesidades y al clima tropical de República Dominicana."
        },
        {
          title: "Aplicación personalizada",
          description: "Damos vida al look de tus sueños",
          details: "Aplicamos tu maquillaje con precisión, combinando técnica y arte para resaltar tus rasgos y reflejar tu estilo único."
        },
        {
          title: "Toques finales y fijación",
          description: "Finalizamos el look y garantizamos que se mantenga perfecto",
          details: "Usamos técnicas profesionales de fijación, ajustes finales y un kit de retoque si es necesario, para que estés radiante todo el día."
        }
      ],
      packages: [
        {
          name: "Diamond Bride",
          subtitle: "& Paquete de Cortejo",
          icon: Diamond,
          bgImage: "/images/diamond.jpg",
          iconColor: "text-blue-200",
          features: [
            "Maquillaje para la ceremonia de la novia",
            "Peinado para la ceremonia de la novia",
            "Maquillaje y peinado para 8 personas del grupo",
            "Retoque de maquillaje para la novia",
            "Servicio antes y después de la ceremonia"
          ],
          summary: "💎 El paquete más completo para 8 personas - estarás completamente despreocupada en tu día especial."
        },
        {
          name: "Paquete Sapphire",
          subtitle: "(Solo para la Novia)",
          icon: Gem,
          bgImage: "/images/sapphire.png",
          iconColor: "text-blue-400",
          features: [
            "Prueba de cabello y maquillaje para la novia",
            "Maquillaje para la ceremonia de la novia",
            "Peinado para la ceremonia de la novia",
            "Retoque de maquillaje antes y después de la ceremonia",
            "Preparación personalizada de la piel (hidratación y brillo)"
          ],
          summary: "✨ Paquete enfocado en la novia con atención personal y preparación perfecta."
        },
        {
          name: "Paquete Ruby",
          subtitle: "(Básico, Solo Maquillaje)",
          icon: Heart,
          bgImage: "/images/ruby.png",
          iconColor: "text-red-400",
          features: [
            "Prueba de maquillaje para la novia",
            "Maquillaje para la ceremonia de la novia",
            "Maquillaje para 5 personas",
            "Preparación básica de la piel (primer, hidratación, SPF)",
            "Opcional: servicio de peinado disponible bajo solicitud"
          ],
          summary: "💖 Paquete esencial de maquillaje para 5 personas - todo lo que necesitas para una celebración hermosa."
        }
      ],
      contactForPricing: "Contacta para precios"
    }
  };

  const t = content[language];
  const stepIcons = [MessageCircle, Palette, Brush, Sparkles];

  return (
    <section id="how-we-work-packages" className="py-16 bg-gradient-to-br from-warm-white to-white">
      <div className="container mx-auto px-6">
        {/* Main Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f4e1ff] rounded-full mb-6 border border-purple-200">
            <Crown className="w-8 h-8 text-purple-900" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.packagesTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.packagesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          
          {/* Left Side - How We Work Accordion (30%) */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="mb-0">
                <div className="w-full flex items-center justify-center space-x-3 bg-gradient-to-b from-[#f4e1ff] to-white rounded-t-xl px-4 py-4 border border-gray-200 border-b-0">
                  <Brush className="w-5 h-5 text-purple-900" />
                  <h3 className="font-playfair text-xl font-semibold text-purple-900">
                    {t.howWeWorkTitle}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {t.steps.map((step, index) => {
                  const StepIcon = stepIcons[index];
                  const isOpen = openStep === index;
                  const isFirst = index === 0;
                  
                  return (
                    <div key={index} className={`border border-gray-200 overflow-hidden bg-white shadow-sm ${
                      isFirst ? 'rounded-b-xl rounded-t-none border-t-0' : 'rounded-xl'
                    }`}>
                      <button
                        onClick={() => setOpenStep(isOpen ? -1 : index)}
                        onMouseEnter={() => setOpenStep(index)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#f4e1ff] rounded-full flex items-center justify-center border border-purple-200">
                            <StepIcon className="w-5 h-5 text-purple-900" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-purple-700">
                              0{index + 1}
                            </div>
                            <h3 className="font-semibold text-foreground text-sm">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-2">
                            {step.description}
                          </p>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Wedding Packages (70%) */}
          <div className="lg:col-span-7">


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {t.packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col ${
                    index === 0 ? 'border-2 border-purple-200 ring-2 ring-purple-100/50' : 'border border-gray-100'
                  }`}
                >
                  {/* Premium badge for Diamond package */}
                  {index === 0 && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-[#f4e1ff] text-purple-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-purple-200">
                        PREMIUM
                      </div>
                    </div>
                  )}
                  
                  {/* Package Header */}
                  <div className="relative p-12 text-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={pkg.bgImage} 
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 group-hover:from-purple-600/50 group-hover:via-purple-500/40 group-hover:to-purple-600/50 transition-all duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-playfair text-xl font-bold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">{pkg.name}</h3>
                      <p className="text-white/90 text-xs font-medium group-hover:text-purple-100/90 transition-colors duration-300">{pkg.subtitle}</p>
                    </div>
                  </div>

                  {/* Package Features */}
                  <div className="p-5 flex flex-col h-full">
                    <ul className="space-y-2.5 flex-grow">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Package Summary */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-purple-700 text-xs font-medium text-center bg-purple-50/50 py-2 px-3 rounded-lg">
                        {pkg.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Package Option */}
            <div className="bg-gradient-to-r from-purple-50/50 to-lilac-light/30 rounded-xl p-6 mb-8 border border-purple-100">
              <div className="text-center">
                <h3 className="font-playfair text-xl font-semibold text-purple-900 mb-3">
                  {language === 'en' ? 'Create Your Own Package' : 'Crea Tu Propio Paquete'}
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  {language === 'en'
                    ? 'Remember that you can also customize your own package! Mix and match services to perfectly fit your needs and vision for your special day.'
                    : 'Recuerda que también puedes personalizar tu propio paquete. Combina servicios para que se adapte perfectamente a tus necesidades y visión para tu día especial.'
                  }
                </p>
              </div>
            </div>

            {/* Contact for Pricing Button - Full Width */}
            <div>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-center space-x-3 border-2 border-lilac text-purple-800 hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold py-4 px-8 rounded-xl bg-white shadow-lg hover:shadow-xl text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.contactForPricing}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkPackages; 