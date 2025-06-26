import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Makeup artistry in paradise",
      quickLinks: "Quick Links",
      services: "Services",
      servicesList: [
        "Bridal Makeup",
        "Special Occasions", 
        "Resort Appointments",
        "Studio Sessions"
      ],
      contact: "Contact Info",
      followUs: "Follow Us",
      newsletter: "Stay Updated",
      newsletterText: "Get the latest beauty tips and special offers",
      subscribe: "Subscribe",
      copyright: "© 2025 Checa Makeup. All rights reserved.",
      madeWith: "Made with",
      inDR: "in Dominican Republic by",
      company: "Den Hartogh Solutions"
    },
    es: {
      tagline: "Arte del maquillaje en el paraíso",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      servicesList: [
        "Maquillaje Nupcial",
        "Ocasiones Especiales",
        "Citas en Resort", 
        "Sesiones de Estudio"
      ],
      contact: "Información de Contacto",
      followUs: "Síguenos",
      newsletter: "Mantente Actualizada",
      newsletterText: "Recibe los últimos consejos de belleza y ofertas especiales",
      subscribe: "Suscribirse",
      copyright: "© 2025 Checa Makeup. Todos los derechos reservados.",
      madeWith: "Hecho con",
      inDR: "en República Dominicana por",
      company: "Den Hartogh Solutions"
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#f4e1ff] text-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-3">
              <img 
                src="/images/logo.png" 
                alt="Checa Makeup Logo" 
                className="h-24 w-auto"
              />
              <h3 className="text-2xl font-bold text-black">
                Checa Makeup
              </h3>
            </div>
            <p className="text-black text-sm leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">{t.services}</h4>
            <ul className="space-y-2">
              {t.servicesList.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  {language === 'en' ? 'About' : 'Acerca de'}
                </a>
              </li>
              <li>
                <a 
                  href="#how-we-work-packages" 
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  {language === 'en' ? 'How We Work' : 'Cómo Trabajamos'}
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-purple-700 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Punta Cana, Dominican Republic
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-700 flex-shrink-0" />
                <a 
                  href="mailto:checamakeup24@gmail.com"
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  checamakeup24@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-purple-700 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/checa_makeup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-900 transition-colors duration-300 text-sm"
                >
                  @checa_makeup
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 pb-4 border-t border-purple-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left mb-0">
              {t.copyright}
            </p>
            <p className="text-purple-900 text-sm text-center md:text-right mb-0">
              <span className="inline-flex items-center flex-wrap justify-center md:justify-end gap-1">
                <span>{t.madeWith}</span>
                <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
                <span>{t.inDR}</span>
                <a 
                  href="https://www.denhartogh.solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-900 hover:text-purple-700 transition-colors duration-300"
                >
                  {t.company}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 