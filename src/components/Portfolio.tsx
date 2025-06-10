
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-lilac-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] bg-gradient-glamour"></div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Bridal Elegance</h3>
              <p className="text-muted-foreground">Resort wedding makeup</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] bg-gradient-accent"></div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Tropical Glow</h3>
              <p className="text-muted-foreground">Beach photoshoot look</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] bg-purple-soft"></div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Evening Glamour</h3>
              <p className="text-muted-foreground">Resort gala makeup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
