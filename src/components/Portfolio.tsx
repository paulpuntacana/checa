
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const { t } = useLanguage();

  // Local portfolio images as fallback
  const portfolioImages = [
    {
      src: "/images/portfolio1.jpeg",
      alt: "Bridal makeup Punta Cana - Professional wedding makeup artist Dominican Republic - Checa Makeup by Franchesca Martinez Castillo"
    },
    {
      src: "/images/portfolio2.jpeg", 
      alt: "Wedding makeup Cap Cana - Professional bridal makeup services Dominican Republic - Checa Makeup destination wedding"
    },
    {
      src: "/images/portfolio3.jpeg",
      alt: "Professional makeup artist Punta Cana - Bridal makeup services Dominican Republic - Checa Makeup wedding specialist"
    },
    {
      src: "/images/portfolio4.jpeg",
      alt: "Destination wedding makeup Dominican Republic - Professional bridal makeup Punta Cana - Checa Makeup resort services"
    },
    {
      src: "/images/portfolio5.jpeg",
      alt: "Multicultural wedding makeup Dominican Republic - Professional bridal makeup artist Punta Cana - Checa Makeup"
    },
    {
      src: "/images/portfolio7.jpeg",
      alt: "Resort wedding makeup services Punta Cana - Professional bridal makeup Dominican Republic - Checa Makeup by Franchesca"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-lilac-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {t('portfolio.subtitle')}
          </p>
          <p className="text-lg text-purple-600 font-medium">
            {t('language.english') === 'English' 
              ? 'Live from our Instagram @checa_makeup' 
              : 'Directo desde nuestro Instagram @checa_makeup'
            }
          </p>
        </div>

        {/* Portfolio Images */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="https://www.instagram.com/checa_makeup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-white transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    {t('portfolio.viewOnInstagram')}
                  </a>
            </div>
          </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/checa_makeup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-pink-400 text-pink-600 px-8 py-3 rounded-lg font-semibold bg-white"
            >
              <Instagram className="w-6 h-6" />
              <span>
                {t('language.english') === 'English' 
                  ? 'Follow @checa_makeup for more'
                  : 'Síguenos @checa_makeup para más'
                }
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
