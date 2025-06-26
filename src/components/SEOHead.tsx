import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

const SEOHead = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const baseUrl = 'https://checamakeup.com';
    
    // Update page title based on language
    const titles = {
      en: 'Checa Makeup - Professional Bridal & Wedding Makeup Artist Punta Cana | Dominican Republic',
      es: 'Checa Makeup - Maquilladora Profesional de Bodas y Novias Punta Cana | República Dominicana'
    };

    const descriptions = {
      en: 'Franchesca Martinez Castillo - Professional bridal makeup artist in Punta Cana, Dominican Republic. 8+ years experience in wedding makeup, special events & resort services. Multicultural weddings specialist. Book your makeup trial today!',
      es: 'Franchesca Martinez Castillo - Maquilladora profesional de novias en Punta Cana, República Dominicana. 8+ años de experiencia en maquillaje de bodas, eventos especiales y servicios en resorts. Especialista en bodas multiculturales. ¡Reserva tu prueba de maquillaje hoy!'
    };

    // Update title
    document.title = titles[language];

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[language]);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[language]);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${baseUrl}${currentPath}`);
    }

    // Update language attribute
    document.documentElement.lang = language;

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${baseUrl}${currentPath}`);
    }

  }, [language, location.pathname]);

  return null; // This component doesn't render anything
};

export default SEOHead; 