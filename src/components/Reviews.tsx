import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "What Our Brides Say",
      subtitle: "Real experiences from real brides who trusted us with their special day",
      reviews: [
        {
          name: "Isabella Rodriguez",
          location: "Punta Cana",
          text: "Franchesca gave us an unforgettable experience! My makeup was flawless and lasted all day in the Caribbean heat. She made me feel like a true princess on my wedding day.",
          rating: 5
        },
        {
          name: "Sarah Johnson",
          location: "Cap Cana Resort",
          text: "Working with Checa makeup was the best decision for our destination wedding. Professional, talented, and so sweet. My entire bridal party looked absolutely stunning!",
          rating: 5
        },
        {
          name: "Maria Fernandez",
          location: "Casa Colonial Beach",
          text: "Franchesca understood exactly what I wanted and brought my vision to life. The attention to detail and quality of products used was exceptional. Highly recommend!",
          rating: 5
        },
        {
          name: "Emma Thompson",
          location: "Dreams Resort",
          text: "From the trial to the wedding day, everything was perfect. Franchesca's expertise with tropical climate makeup is unmatched. My makeup looked fresh all day!",
          rating: 5
        }
      ]
    },
    es: {
      title: "Lo Que Dicen Nuestras Novias",
      subtitle: "Experiencias reales de novias que confiaron en nosotros para su día especial",
      reviews: [
        {
          name: "Isabella Rodriguez",
          location: "Punta Cana",
          text: "¡Franchesca nos dio una experiencia inolvidable! Mi maquillaje fue perfecto y duró todo el día bajo el calor caribeño. Me hizo sentir como una verdadera princesa.",
          rating: 5
        },
        {
          name: "Sarah Johnson",
          location: "Cap Cana Resort",
          text: "Trabajar con Checa makeup fue la mejor decisión para nuestra boda destino. Profesional, talentosa y muy dulce. ¡Todo mi cortejo nupcial se veía absolutamente radiante!",
          rating: 5
        },
        {
          name: "Maria Fernandez",
          location: "Casa Colonial Beach",
          text: "Franchesca entendió exactamente lo que quería y dio vida a mi visión. La atención al detalle y calidad de productos fue excepcional. ¡Altamente recomendada!",
          rating: 5
        },
        {
          name: "Emma Thompson",
          location: "Dreams Resort",
          text: "Desde la prueba hasta el día de la boda, todo fue perfecto. La experiencia de Franchesca con maquillaje tropical es incomparable. ¡Mi maquillaje se veía fresco todo el día!",
          rating: 5
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f4e1ff] rounded-full mb-6 border border-purple-200">
            <Quote className="w-8 h-8 text-purple-900" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-foreground text-sm">
                  {review.name}
                </div>
                <div className="text-purple-600 text-xs font-medium">
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 