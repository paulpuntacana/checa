import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.bridal'),
      description: t('services.bridalDesc'),
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="bridalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#512082', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#dab5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f1e2fd', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Crown for bridal */}
          <path d="M20 45 L30 25 L40 35 L50 20 L60 35 L70 25 L80 45 L85 55 L75 60 L15 60 Z" 
                fill="url(#bridalGradient)" opacity="0.8" />
          {/* Gems on crown */}
          <circle cx="30" cy="30" r="3" fill="#f1e2fd" />
          <circle cx="50" cy="25" r="4" fill="#dab5fa" />
          <circle cx="70" cy="30" r="3" fill="#f1e2fd" />
          {/* Main flower center */}
          <g transform="translate(50, 70)">
            <circle cx="0" cy="0" r="12" fill="#512082" opacity="0.9" />
            {/* Petals */}
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(0)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(30)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(60)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(90)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(120)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(150)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(180)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(210)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(240)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(270)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#dab5fa" transform="rotate(300)" />
            <ellipse cx="0" cy="-18" rx="6" ry="12" fill="#f1e2fd" transform="rotate(330)" />
            <circle cx="0" cy="0" r="8" fill="#512082" />
          </g>
          {/* Side decorative elements */}
          <path d="M15 75 Q25 70 30 80 Q25 85 15 82" fill="#dab5fa" opacity="0.6" />
          <path d="M85 75 Q75 70 70 80 Q75 85 85 82" fill="#f1e2fd" opacity="0.6" />
        </svg>
      ),
              details: [
          t('services.bridal.detail1'),
          t('services.bridal.detail2'),
          t('services.bridal.detail3'), 
          t('services.bridal.detail4')
        ]
    },
    {
      title: t('services.events'),
      description: t('services.eventsDesc'),
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="eventGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f1e2fd', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#dab5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#512082', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Champagne glass */}
          <path d="M45 20 L55 20 L60 40 L65 60 L62 65 L60 70 L40 70 L38 65 L35 60 L40 40 Z" 
                fill="url(#eventGradient)" opacity="0.8" />
          {/* Bubbles */}
          <circle cx="50" cy="15" r="2" fill="#dab5fa" opacity="0.7" />
          <circle cx="48" cy="10" r="1.5" fill="#f1e2fd" opacity="0.8" />
          <circle cx="52" cy="12" r="1" fill="#dab5fa" opacity="0.6" />
          {/* Decorative stars */}
          <g transform="translate(25, 30)">
            <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="#dab5fa" opacity="0.7" />
          </g>
          <g transform="translate(75, 25)">
            <path d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" fill="#f1e2fd" opacity="0.8" />
          </g>
          <g transform="translate(80, 50)">
            <path d="M0,-5 L1.2,-1.2 L5,0 L1.2,1.2 L0,5 L-1.2,1.2 L-5,0 L-1.2,-1.2 Z" fill="#dab5fa" opacity="0.6" />
          </g>
          {/* Makeup brush */}
          <g transform="translate(30, 75)">
            <rect x="0" y="0" width="3" height="20" fill="#512082" />
            <ellipse cx="1.5" cy="-5" rx="4" ry="5" fill="#dab5fa" opacity="0.8" />
          </g>
          {/* Lipstick */}
          <g transform="translate(70, 75)">
            <rect x="0" y="5" width="4" height="15" fill="#512082" />
            <ellipse cx="2" cy="5" rx="2" ry="3" fill="#f1e2fd" />
          </g>
        </svg>
      ),
              details: [
          t('services.events.detail1'),
          t('services.events.detail2'),
          t('services.events.detail3'),
          t('services.events.detail4')
        ]
    },
    {
      title: t('services.resort'),
      description: t('services.resortDesc'),
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="resortGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#512082', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#dab5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f1e2fd', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Palm tree trunk */}
          <path d="M50 95 Q52 75 50 55 Q48 35 50 15" stroke="#512082" strokeWidth="4" fill="none" />
          {/* Palm leaves */}
          <path d="M50 20 Q35 10 20 15 Q30 20 50 20" fill="#dab5fa" opacity="0.8" />
          <path d="M50 20 Q65 10 80 15 Q70 20 50 20" fill="#f1e2fd" opacity="0.8" />
          <path d="M50 20 Q40 5 25 5 Q35 15 50 20" fill="#dab5fa" opacity="0.7" />
          <path d="M50 20 Q60 5 75 5 Q65 15 50 20" fill="#f1e2fd" opacity="0.7" />
          {/* Sun */}
          <circle cx="85" cy="25" r="8" fill="url(#resortGradient)" opacity="0.8" />
          <path d="M85 10 L85 15 M95 25 L100 25 M91 17 L94 14 M91 33 L94 36 M79 17 L76 14 M79 33 L76 36 M85 35 L85 40 M75 25 L70 25" 
                stroke="#dab5fa" strokeWidth="2" />
          {/* Beach waves */}
          <path d="M10 80 Q20 75 30 80 Q40 85 50 80 Q60 75 70 80 Q80 85 90 80 Q100 75 110 80" 
                stroke="#f1e2fd" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M5 85 Q15 82 25 85 Q35 88 45 85 Q55 82 65 85 Q75 88 85 85 Q95 82 105 85" 
                stroke="#dab5fa" strokeWidth="2" fill="none" opacity="0.5" />
          {/* Makeup compact */}
          <g transform="translate(20, 60)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#512082" />
            <ellipse cx="0" cy="-2" rx="6" ry="4" fill="#f1e2fd" />
            <circle cx="-2" cy="-2" r="2" fill="#dab5fa" />
            <circle cx="2" cy="-2" r="2" fill="#dab5fa" />
          </g>
        </svg>
      ),
              details: [
          t('services.resort.detail1'),
          t('services.resort.detail2'),
          t('services.resort.detail3'),
          t('services.resort.detail4')
        ]
    },
    {
      title: t('services.homeStudio'),
      description: t('services.homeStudioDesc'),
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="studioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f1e2fd', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: '#dab5fa', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#512082', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#dab5fa', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Mirror frame */}
          <ellipse cx="60" cy="40" rx="35" ry="25" fill="url(#studioGradient)" opacity="0.8" />
          <ellipse cx="60" cy="40" rx="30" ry="20" fill="#f1e2fd" opacity="0.3" />
          {/* Mirror bulbs */}
          <circle cx="35" cy="25" r="3" fill="#dab5fa" opacity="0.9" />
          <circle cx="50" cy="20" r="3" fill="#f1e2fd" opacity="0.9" />
          <circle cx="70" cy="20" r="3" fill="#dab5fa" opacity="0.9" />
          <circle cx="85" cy="25" r="3" fill="#f1e2fd" opacity="0.9" />
          <circle cx="35" cy="55" r="3" fill="#f1e2fd" opacity="0.9" />
          <circle cx="85" cy="55" r="3" fill="#dab5fa" opacity="0.9" />
          {/* Reflection sparkles */}
          <g transform="translate(55, 35)">
            <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#f1e2fd" opacity="0.8" />
          </g>
          <g transform="translate(65, 45)">
            <path d="M0,-3 L0.8,-0.8 L3,0 L0.8,0.8 L0,3 L-0.8,0.8 L-3,0 L-0.8,-0.8 Z" fill="#dab5fa" opacity="0.7" />
          </g>
          {/* Makeup brushes in holder */}
          <g transform="translate(25, 75)">
            <rect x="0" y="0" width="15" height="8" rx="2" fill="#512082" />
            <rect x="2" y="-15" width="2" height="15" fill="#dab5fa" />
            <rect x="6" y="-20" width="2" height="20" fill="#f1e2fd" />
            <rect x="10" y="-18" width="2" height="18" fill="#dab5fa" />
            <ellipse cx="3" cy="-17" rx="1.5" ry="2" fill="#f1e2fd" />
            <ellipse cx="7" cy="-22" rx="1.5" ry="2" fill="#dab5fa" />
            <ellipse cx="11" cy="-20" rx="1.5" ry="2" fill="#f1e2fd" />
          </g>
          {/* Perfume bottle */}
          <g transform="translate(85, 75)">
            <rect x="0" y="0" width="8" height="12" rx="2" fill="url(#studioGradient)" opacity="0.8" />
            <rect x="2" y="-3" width="4" height="3" fill="#512082" />
            <circle cx="4" cy="-5" r="2" fill="#dab5fa" />
          </g>
          {/* Decorative flourishes */}
          <path d="M15 95 Q25 90 35 95" stroke="#dab5fa" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M85 95 Q95 90 105 95" stroke="#f1e2fd" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      ),
              details: [
          t('services.homeStudio.detail1'),
          t('services.homeStudio.detail2'),
          t('services.homeStudio.detail3'),
          t('services.homeStudio.detail4')
        ]
    }
  ];

  return (
    <section id="services" className="pt-32 pb-16 bg-gradient-to-br from-warm-white via-purple-50/30 to-white relative overflow-hidden scroll-mt-48">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-50/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container */}
              <div className="relative p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-purple-900 transition-colors duration-300 h-14 flex items-center justify-center">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 h-12 flex items-center justify-center">
                  {service.description}
                </p>
                
                {/* Feature list with fixed height */}
                <div className="space-y-2 h-24 flex flex-col justify-start">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-xs text-purple-700 h-5">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="leading-tight">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom gradient border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-lilac to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mx-3 animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>
          
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('language.english') === 'English' 
              ? 'Ready to look stunning? Let\'s create your perfect look together.'
              : '¿Lista para verte espectacular? Creemos juntas tu look perfecto.'
            }
          </p>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full border-2 border-lilac text-purple-800 hover:bg-lilac hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold py-3 px-4 bg-white shadow-lg rounded-lg max-w-md mx-auto"
          >
            {t('language.english') === 'English' ? 'Book Your Session' : 'Reserva Tu Sesión'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
