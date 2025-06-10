import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Language names
    'language.english': 'English',
    'language.spanish': 'Spanish',
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
    'services.subtitle': 'Professional makeup services for all your special occasions',
    'services.bridal': 'Bridal Makeup',
    'services.bridalDesc': 'Flawless bridal makeup with a pre-wedding trial included.',
    'services.events': 'Special Occasions',
    'services.eventsDesc': 'Makeup for parties, birthdays, graduations, and more.',
    'services.resort': 'Resort Appointments',
    'services.resortDesc': 'On-site makeup services at your resort or wedding venue.',
    'services.homeStudio': 'Studio Sessions',
    'services.homeStudioDesc': 'Private makeup sessions in our Punta Cana home studio.',
    
    // How We Work section
    'howWeWork.title': 'How We Work',
    'howWeWork.subtitle': 'Our professional process ensures the perfect look for your special day',
    'howWeWork.steps.0.title': 'Consultation',
    'howWeWork.steps.0.description': 'We discuss your vision, preferences, and event details',
    'howWeWork.steps.0.details': 'During this session, we align with your desired style, skin type, and occasion to create the perfect plan for your makeup look.',
    'howWeWork.steps.1.title': 'Skin Prep & Product Selection',
    'howWeWork.steps.1.description': 'We prep your skin and choose the right products',
    'howWeWork.steps.1.details': 'We prepare your skin with care and select long-lasting products tailored to your needs and the tropical Dominican climate.',
    'howWeWork.steps.2.title': 'Personalized Application',
    'howWeWork.steps.2.description': 'We bring your dream look to life',
    'howWeWork.steps.2.details': 'Your look is applied with precision, blending artistry with technique — fully customized to match your features and style.',
    'howWeWork.steps.3.title': 'Final Touch & Set',
    'howWeWork.steps.3.description': 'We finalize the look and ensure it stays perfect',
    'howWeWork.steps.3.details': 'We finish with expert setting techniques, final checks, and a touch-up kit if needed — so you stay flawless all day.',
    
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
    // Language names
    'language.english': 'Inglés',
    'language.spanish': 'Español',
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
    'services.subtitle': 'Servicios profesionales de maquillaje para todas tus ocasiones especiales',
    'services.bridal': 'Maquillaje de Novia',
    'services.bridalDesc': 'Look de novia perfecto con prueba previa incluida.',
    'services.events': 'Eventos Especiales',
    'services.eventsDesc': 'Maquillaje para fiestas, cumpleaños, graduaciones y más.',
    'services.resort': 'Servicio en Resorts',
    'services.resortDesc': 'Maquillaje a domicilio en tu resort o lugar del evento.',
    'services.homeStudio': 'Estudio Privado',
    'services.homeStudioDesc': 'Sesiones de maquillaje en nuestro estudio en Punta Cana.',
    
    // How We Work section
    'howWeWork.title': 'Cómo Trabajamos',
    'howWeWork.subtitle': 'Nuestro proceso profesional asegura el look perfecto para tu día especial',
    'howWeWork.steps.0.title': 'Consulta inicial',
    'howWeWork.steps.0.description': 'Hablamos sobre tu estilo, preferencias y detalles del evento',
    'howWeWork.steps.0.details': 'Durante esta sesión nos alineamos contigo para definir tu look ideal, tipo de piel y ocasión, creando así un plan de maquillaje perfecto.',
    'howWeWork.steps.1.title': 'Preparación de la piel y selección de productos',
    'howWeWork.steps.1.description': 'Preparamos tu piel y elegimos los productos ideales',
    'howWeWork.steps.1.details': 'Tratamos tu piel con cuidado y seleccionamos productos duraderos adaptados a tus necesidades y al clima tropical de República Dominicana.',
    'howWeWork.steps.2.title': 'Aplicación personalizada',
    'howWeWork.steps.2.description': 'Damos vida al look de tus sueños',
    'howWeWork.steps.2.details': 'Aplicamos tu maquillaje con precisión, combinando técnica y arte para resaltar tus rasgos y reflejar tu estilo único.',
    'howWeWork.steps.3.title': 'Toques finales y fijación',
    'howWeWork.steps.3.description': 'Finalizamos el look y garantizamos que se mantenga perfecto',
    'howWeWork.steps.3.details': 'Usamos técnicas profesionales de fijación, ajustes finales y un kit de retoque si es necesario, para que estés radiante todo el día.',
    
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
