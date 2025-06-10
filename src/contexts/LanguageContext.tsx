
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Hero section
    'hero.title1': 'Tropical Beauty',
    'hero.title2': 'Makeup Artistry',
    'hero.subtitle': 'Professional makeup services for resorts, weddings, and special events in the Dominican Republic',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.partnerships': 'Resort Partnerships',
    
    // About section
    'about.title': 'Professional Makeup Artist',
    'about.meetTitle': 'Meet Franchesca',
    'about.intro': 'With over 10 years of experience in the beauty industry, Franchesca Martinez Castillo has become one of the most sought-after makeup artists in the Dominican Republic. Specializing in bridal, fashion, and resort makeup services.',
    'about.experience': '10+ Years',
    'about.experienceDesc': 'Professional makeup artistry',
    'about.specialization': 'Caribbean Beauty',
    'about.specializationDesc': 'Tropical & resort expertise',
    'about.philosophy': 'My Philosophy',
    'about.philosophyDesc': 'Every woman deserves to feel beautiful and confident. I create looks that enhance natural beauty while embracing the vibrant spirit of Caribbean glamour.',
    
    // Portfolio section
    'portfolio.title': 'Glamorous Portfolio',
    'portfolio.subtitle': 'Discover our stunning makeup transformations for weddings, events, and photoshoots',
    
    // Services section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional makeup artistry tailored to your special moments',
    'services.bridal': 'Bridal Makeup',
    'services.bridalDesc': 'Perfect wedding day looks that photograph beautifully and last all day',
    'services.events': 'Special Events',
    'services.eventsDesc': 'Glamorous makeup for galas, parties, and photoshoots',
    'services.resort': 'Resort Services',
    'services.resortDesc': 'On-location makeup services for resort guests and events',
    
    // How We Work section
    'howWeWork.title': 'How We Work',
    'howWeWork.subtitle': 'Our professional process ensures the perfect look for your special day',
    'howWeWork.consultation': 'Consultation',
    'howWeWork.consultationDesc': 'We discuss your vision, skin type, and event details',
    'howWeWork.trial': 'Makeup Trial',
    'howWeWork.trialDesc': 'Perfect your look with a professional trial session',
    'howWeWork.eventDay': 'Event Day',
    'howWeWork.eventDayDesc': 'Flawless application and touch-ups throughout your event',
    'howWeWork.followUp': 'Follow-up',
    'howWeWork.followUpDesc': 'We ensure your complete satisfaction with our service',
    
    // Partnership section
    'partnership.title': 'Resort Partnerships',
    'partnership.subtitle': 'Elevate your resort\'s beauty services with our professional makeup artistry team',
    'partnership.whyPartner': 'Why Partner With Us?',
    'partnership.guestExperience': 'Enhanced Guest Experience',
    'partnership.guestExperienceDesc': 'Premium beauty services that create memorable experiences',
    'partnership.flexible': 'Flexible Scheduling',
    'partnership.flexibleDesc': 'Available for weddings, events, and daily services',
    'partnership.premium': 'Premium Quality',
    'partnership.premiumDesc': 'High-end products and professional techniques',
    'partnership.revenue': 'Revenue Growth',
    'partnership.revenueDesc': 'Additional income stream through beauty services',
    'partnership.brand': 'Brand Enhancement',
    'partnership.brandDesc': 'Elevate your resort\'s luxury positioning',
    'partnership.expertise': 'Local Expertise',
    'partnership.expertiseDesc': 'Deep knowledge of Caribbean beauty and climate',
    'partnership.packages': 'Partnership Packages',
    'partnership.preferred': 'Preferred Partner',
    'partnership.preferredDesc': 'Exclusive partnership with preferred rates',
    'partnership.event': 'Event Specialist',
    'partnership.eventDesc': 'Large event and wedding coordination',
    'partnership.ready': 'Ready to Partner?',
    'partnership.readyDesc': 'Let\'s discuss how we can enhance your resort\'s beauty offerings',
    'partnership.startDiscussion': 'Start Partnership Discussion',
    
    // Contact section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to create your perfect look? Contact us today',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  es: {
    // Hero section
    'hero.title1': 'Belleza Tropical',
    'hero.title2': 'Arte en Maquillaje',
    'hero.subtitle': 'Servicios profesionales de maquillaje para resorts, bodas y eventos especiales en República Dominicana',
    'hero.viewPortfolio': 'Ver Portafolio',
    'hero.partnerships': 'Alianzas con Resorts',
    
    // About section
    'about.title': 'Maquilladora Profesional',
    'about.meetTitle': 'Conoce a Franchesca',
    'about.intro': 'Con más de 10 años de experiencia en la industria de la belleza, Franchesca Martinez Castillo se ha convertido en una de las maquilladoras más solicitadas de República Dominicana. Especializada en maquillaje nupcial, de moda y servicios para resorts.',
    'about.experience': '10+ Años',
    'about.experienceDesc': 'Arte profesional en maquillaje',
    'about.specialization': 'Belleza Caribeña',
    'about.specializationDesc': 'Experiencia tropical y resorts',
    'about.philosophy': 'Mi Filosofía',
    'about.philosophyDesc': 'Toda mujer merece sentirse hermosa y segura. Creo looks que realzan la belleza natural mientras abrazan el espíritu vibrante del glamour caribeño.',
    
    // Portfolio section
    'portfolio.title': 'Portafolio Glamoroso',
    'portfolio.subtitle': 'Descubre nuestras impresionantes transformaciones de maquillaje para bodas, eventos y sesiones fotográficas',
    
    // Services section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Arte profesional en maquillaje adaptado a tus momentos especiales',
    'services.bridal': 'Maquillaje Nupcial',
    'services.bridalDesc': 'Looks perfectos para el día de la boda que se ven hermosos en fotos y duran todo el día',
    'services.events': 'Eventos Especiales',
    'services.eventsDesc': 'Maquillaje glamoroso para galas, fiestas y sesiones fotográficas',
    'services.resort': 'Servicios de Resort',
    'services.resortDesc': 'Servicios de maquillaje en el lugar para huéspedes y eventos de resort',
    
    // How We Work section
    'howWeWork.title': 'Cómo Trabajamos',
    'howWeWork.subtitle': 'Nuestro proceso profesional asegura el look perfecto para tu día especial',
    'howWeWork.consultation': 'Consulta',
    'howWeWork.consultationDesc': 'Discutimos tu visión, tipo de piel y detalles del evento',
    'howWeWork.trial': 'Prueba de Maquillaje',
    'howWeWork.trialDesc': 'Perfecciona tu look con una sesión de prueba profesional',
    'howWeWork.eventDay': 'Día del Evento',
    'howWeWork.eventDayDesc': 'Aplicación impecable y retoques durante todo tu evento',
    'howWeWork.followUp': 'Seguimiento',
    'howWeWork.followUpDesc': 'Aseguramos tu completa satisfacción con nuestro servicio',
    
    // Partnership section
    'partnership.title': 'Alianzas con Resorts',
    'partnership.subtitle': 'Eleva los servicios de belleza de tu resort con nuestro equipo profesional de maquillaje',
    'partnership.whyPartner': '¿Por Qué Asociarse Con Nosotros?',
    'partnership.guestExperience': 'Experiencia Mejorada del Huésped',
    'partnership.guestExperienceDesc': 'Servicios de belleza premium que crean experiencias memorables',
    'partnership.flexible': 'Horarios Flexibles',
    'partnership.flexibleDesc': 'Disponible para bodas, eventos y servicios diarios',
    'partnership.premium': 'Calidad Premium',
    'partnership.premiumDesc': 'Productos de alta gama y técnicas profesionales',
    'partnership.revenue': 'Crecimiento de Ingresos',
    'partnership.revenueDesc': 'Flujo de ingresos adicional a través de servicios de belleza',
    'partnership.brand': 'Mejora de Marca',
    'partnership.brandDesc': 'Eleva el posicionamiento de lujo de tu resort',
    'partnership.expertise': 'Experiencia Local',
    'partnership.expertiseDesc': 'Conocimiento profundo de la belleza caribeña y el clima',
    'partnership.packages': 'Paquetes de Alianza',
    'partnership.preferred': 'Socio Preferido',
    'partnership.preferredDesc': 'Alianza exclusiva con tarifas preferenciales',
    'partnership.event': 'Especialista en Eventos',
    'partnership.eventDesc': 'Coordinación de eventos grandes y bodas',
    'partnership.ready': '¿Listo para Asociarte?',
    'partnership.readyDesc': 'Hablemos sobre cómo podemos mejorar las ofertas de belleza de tu resort',
    'partnership.startDiscussion': 'Iniciar Discusión de Alianza',
    
    // Contact section
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para crear tu look perfecto? Contáctanos hoy',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.location': 'Ubicación',
    'contact.name': 'Nombre',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
