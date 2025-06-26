import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    'hero.title1': 'Your Wedding.',
    'hero.title2': 'Your Glow.',
    'hero.title3': 'Our Team.',
    'hero.subtitle': 'Professional bridal makeup under the Caribbean sun.',
    'hero.howWeWork': 'How we work',
    'hero.bookTrial': 'Book a Trial',
    'hero.discoverMore': 'Discover More',
    
    // About section
    'about.title': 'Professional Bridal & Editorial Makeup Artist',
    'about.meetTitle': 'Meet Franchesca',
    'about.intro': 'With 8 years of professional makeup experience, Franchesca Martinez Castillo has worked with brides from all backgrounds — Dominican, Hindu, American and more. She specializes in long-lasting, radiant looks for every skin tone, tailored to tropical destinations like Punta Cana.',
    'about.experience': '8 Years',
    'about.experienceDesc': 'Professional makeup expertise',
    'about.specialization': 'Multicultural Weddings',
    'about.specializationDesc': 'American, Hindu, Dominican & more',
    'about.philosophy': 'My Approach',
    'about.philosophyDesc': 'From luxury resorts to intimate weddings, her style is always elegant, personal, and heat-proof.',
    
    // Portfolio section
    'portfolio.title': 'Glamorous Portfolio',
    'portfolio.subtitle': 'Discover our stunning makeup transformations for weddings, events, and photoshoots',
    
    // Services section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional makeup services for all your special occasions',
    'services.bridal': 'Bridal Makeup',
    'services.bridalDesc': 'Flawless bridal looks with professional styling.',
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
    'contact.title': 'Let\'s Create Your Perfect Day',
    'contact.subtitle': 'Your wedding deserves to be magical. Let\'s bring your bridal beauty dreams to life in paradise.',
    'contact.letsConnect': 'Let\'s Connect',
    'contact.description': 'Whether you\'re planning a destination wedding, organizing a luxury event, or looking to establish a partnership with your resort, I\'m here to help create unforgettable beauty experiences.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.followWork': 'Follow Our Work',
    'contact.sendMessage': 'Send a Message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.firstNamePlaceholder': 'Your first name',
    'contact.lastNamePlaceholder': 'Your last name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.phoneOptional': 'Phone (Optional)',
    'contact.phonePlaceholder': '+1 (849) 354-4938',
    'contact.serviceInterest': 'Service Interest',
    'contact.selectService': 'Select a service',
    'contact.bridalMakeup': 'Bridal Makeup',
    'contact.eventMakeup': 'Event Makeup',
    'contact.resortPartnership': 'Resort Partnership',
    'contact.editorialPhoto': 'Editorial/Photo Shoot',
    'contact.groupServices': 'Group Services',
    'contact.other': 'Other',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your event, vision, or partnership interest...',
    'contact.send': 'Send Message',
    
    // Contact specifications
    'contact.specifications.title': 'Important Information',
    'contact.specifications.1.title': 'Consultation Details',
    'contact.specifications.1.desc': 'Please provide information about your requested makeup look, any allergies, and your skin type to ensure the best results.',
    'contact.specifications.2.title': 'Preparation Guidelines', 
    'contact.specifications.2.desc': 'Please make sure to clean your skin and eyebrows a day before the event for optimal makeup application.',
    'contact.specifications.3.title': 'Punctuality Commitment',
    'contact.specifications.3.desc': 'We will arrive at the agreed time to avoid delays. Punctuality is key to ensuring your event runs smoothly.',
  },
  es: {
    // Language names
    'language.english': 'Inglés',
    'language.spanish': 'Español',
    // Hero section
          'hero.title1': 'Tu Boda.',
      'hero.title2': 'Tu Brillo.',
      'hero.title3': 'Nuestro Equipo.',
      'hero.subtitle': 'Maquillaje profesional para novias bajo el sol del Caribe.',
          'hero.howWeWork': 'Cómo trabajamos',
      'hero.bookTrial': 'Reservar Prueba',
      'hero.discoverMore': 'Descubre Más',
    
    // About section
    'about.title': 'Maquilladora Profesional de Novias y Editorial',
    'about.meetTitle': 'Conoce a Franchesca',
    'about.intro': 'Con 8 años de experiencia en maquillaje profesional, Franchesca Martinez Castillo ha embellecido novias de todo tipo: bodas dominicanas, hindúes, americanas y más. Su especialidad es crear looks duraderos y radiantes para todos los tonos de piel, incluso en climas tropicales exigentes como el de Punta Cana.',
    'about.experience': '8 Años',
    'about.experienceDesc': 'Experiencia profesional en maquillaje',
    'about.specialization': 'Bodas Multiculturales',
    'about.specializationDesc': 'Americanas, Hindúes, Dominicanas y más',
    'about.philosophy': 'Mi Enfoque',
    'about.philosophyDesc': 'Desde resorts de lujo hasta celebraciones íntimas, su toque es siempre personalizado, elegante y a prueba de calor.',
    
    // Portfolio section
    'portfolio.title': 'Portafolio Glamoroso',
    'portfolio.subtitle': 'Descubre nuestras impresionantes transformaciones de maquillaje para bodas, eventos y sesiones fotográficas',
    
    // Services section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Servicios profesionales de maquillaje para todas tus ocasiones especiales',
    'services.bridal': 'Maquillaje de Novia',
    'services.bridalDesc': 'Look de novia perfecto con estilo profesional.',
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
    'contact.title': 'Creemos Tu Día Perfecto',
    'contact.subtitle': 'Tu boda merece ser mágica. Hagamos realidad tus sueños de belleza nupcial en el paraíso.',
    'contact.letsConnect': 'Conectemos',
    'contact.description': 'Ya sea que estés planeando una boda destino, organizando un evento de lujo, o buscando establecer una alianza con tu resort, estoy aquí para ayudar a crear experiencias de belleza inolvidables.',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.location': 'Ubicación',
    'contact.followWork': 'Sigue Nuestro Trabajo',
    'contact.sendMessage': 'Enviar un Mensaje',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.firstNamePlaceholder': 'Tu nombre',
    'contact.lastNamePlaceholder': 'Tu apellido',
    'contact.emailPlaceholder': 'tu.correo@ejemplo.com',
    'contact.phoneOptional': 'Teléfono (Opcional)',
    'contact.phonePlaceholder': '+1 (849) 354-4938',
    'contact.serviceInterest': 'Interés de Servicio',
    'contact.selectService': 'Selecciona un servicio',
    'contact.bridalMakeup': 'Maquillaje de Novia',
    'contact.eventMakeup': 'Maquillaje de Eventos',
    'contact.resortPartnership': 'Alianza con Resort',
    'contact.editorialPhoto': 'Editorial/Sesión Fotográfica',
    'contact.groupServices': 'Servicios Grupales',
    'contact.other': 'Otro',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu evento, visión, o interés de alianza...',
    'contact.send': 'Enviar Mensaje',
    
    // Contact specifications  
    'contact.specifications.title': 'Información Importante',
    'contact.specifications.1.title': 'Detalles de Consulta',
    'contact.specifications.1.desc': 'Por favor proporciona información sobre el look de maquillaje deseado, alergias y tipo de piel para asegurar los mejores resultados.',
    'contact.specifications.2.title': 'Guías de Preparación',
    'contact.specifications.2.desc': 'Por favor asegúrate de limpiar tu piel y cejas un día antes del evento para una aplicación óptima del maquillaje.',
    'contact.specifications.3.title': 'Compromiso de Puntualidad', 
    'contact.specifications.3.desc': 'Llegaremos a la hora acordada para evitar retrasos. La puntualidad es clave para asegurar que tu evento transcurra sin problemas.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('en');

  // Set language based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/es')) {
      setLanguage('es');
    } else if (path.startsWith('/en')) {
      setLanguage('en');
    }
  }, [location.pathname]);

  // Handle language switching with navigation
  const handleSetLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(en|es)/, `/${lang}`);
    navigate(newPath, { replace: true });
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
