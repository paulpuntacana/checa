import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOSchema = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Remove existing schema
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "BeautySalon"],
      "name": "Checa Makeup",
      "alternateName": "Franchesca Martinez Castillo",
      "description": language === 'en' 
        ? "Professional makeup artist offering bridal, event and resort makeup services in Punta Cana, Dominican Republic"
        : "Maquilladora profesional que ofrece servicios de maquillaje nupcial, eventos y resorts en Punta Cana, República Dominicana",
      "url": `https://checamakeup.com/${language}`,
      "telephone": "+1 (849) 354-4938",
      "email": "checamakeup24@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Punta Cana",
        "addressRegion": "La Altagracia",
        "addressCountry": "DO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5601",
        "longitude": "-68.3725"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "18.5601",
          "longitude": "-68.3725"
        },
        "geoRadius": "50000"
      },
      "priceRange": "$$",
      "image": [
        "https://checamakeup.com/images/logo.png",
        "https://checamakeup.com/images/about2.jpeg",
        "https://checamakeup.com/images/portfolio1.jpeg",
        "https://checamakeup.com/images/portfolio2.jpeg",
        "https://checamakeup.com/images/portfolio3.jpeg"
      ],
      "logo": "https://checamakeup.com/images/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Franchesca Martinez Castillo",
        "jobTitle": language === 'en' ? "Professional Makeup Artist" : "Maquilladora Profesional",
        "knowsAbout": [
          "Bridal Makeup",
          "Wedding Makeup", 
          "Tropical Climate Makeup",
          "Multicultural Weddings",
          "Destination Weddings"
        ],
        "yearsOfExperience": "8+",
        "worksFor": {
          "@type": "Organization",
          "name": "Checa Makeup"
        }
      },
      "keywords": [
        "bridal makeup artist punta cana",
        "wedding makeup dominican republic", 
        "destination wedding makeup",
        "tropical climate makeup",
        "multicultural wedding makeup",
        "resort makeup services",
        "professional makeup artist dominican republic"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Punta Cana"
        },
        {
          "@type": "City", 
          "name": "Cap Cana"
        },
        {
          "@type": "City",
          "name": "Bavaro"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": language === 'en' ? "Makeup Services" : "Servicios de Maquillaje",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'en' ? "Bridal Makeup" : "Maquillaje de Novia",
              "description": language === 'en' 
                ? "Flawless bridal looks with professional styling and long-lasting products"
                : "Look nupcial impecable con estilo profesional y productos de larga duración"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'en' ? "Special Occasions" : "Eventos Especiales",
              "description": language === 'en' 
                ? "Makeup for parties, birthdays, graduations, and more"
                : "Maquillaje para fiestas, cumpleaños, graduaciones y más"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'en' ? "Resort Appointments" : "Servicio en Resorts",
              "description": language === 'en' 
                ? "On-site makeup services at your resort or wedding venue"
                : "Maquillaje a domicilio en tu resort o lugar del evento"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'en' ? "Studio Sessions" : "Estudio Privado",
              "description": language === 'en' 
                ? "Private makeup sessions in our Punta Cana home studio"
                : "Sesiones de maquillaje en nuestro estudio en Punta Cana"
            }
          }
        ]
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://checamakeup.com/${language}`,
        "name": language === 'en' 
          ? "Checa Makeup - Professional Makeup Artist Dominican Republic"
          : "Checa Makeup - Maquilladora Profesional República Dominicana",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": `https://checamakeup.com/${language}#services`,
              "name": language === 'en' ? "Our Services" : "Nuestros Servicios"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": `https://checamakeup.com/${language}#about`,
              "name": language === 'en' ? "About Franchesca" : "Sobre Franchesca"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "url": `https://checamakeup.com/${language}#how-we-work-packages`,
              "name": language === 'en' ? "How We Work & Packages" : "Cómo Trabajamos y Paquetes"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "url": `https://checamakeup.com/${language}#reviews`,
              "name": language === 'en' ? "Client Reviews" : "Reseñas de Clientes"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "url": `https://checamakeup.com/${language}#partnership`,
              "name": language === 'en' ? "Resort Partnerships" : "Alianzas con Resorts"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "url": `https://checamakeup.com/${language}#portfolio`,
              "name": language === 'en' ? "Portfolio" : "Portafolio"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "url": `https://checamakeup.com/${language}#contact`,
              "name": language === 'en' ? "Contact" : "Contacto"
            }
          ]
        }
      }
    };

    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

  }, [language]);

  return null;
};

export default SEOSchema; 