import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VideoSection = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
      // Small delay to ensure iframe is rendered, then request fullscreen
      setTimeout(() => {
        const iframe = iframeRef.current;
        if (iframe) {
          // First try to focus the iframe
          iframe.focus();
          
          // Then request fullscreen with better mobile support
          const requestFullscreen = iframe.requestFullscreen || 
                                  (iframe as any).webkitRequestFullscreen || 
                                  (iframe as any).webkitEnterFullscreen || 
                                  (iframe as any).mozRequestFullScreen || 
                                  (iframe as any).msRequestFullscreen;
          
          if (requestFullscreen) {
            requestFullscreen.call(iframe).catch((err: any) => {
              console.log('Fullscreen request failed:', err);
            });
          }
        }
      }, 1000);
    }
  };

  useEffect(() => {
    // YouTube Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('youtube-player', {
        events: {
          onStateChange: (event: any) => {
            // When video ends, restart from 10 seconds
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.seekTo(10);
              event.target.playVideo();
            }
            // Check current time and restart if past 2:14 (134 seconds)
            const checkTime = setInterval(() => {
              if (event.target.getCurrentTime && event.target.getCurrentTime() >= 134) {
                event.target.seekTo(10);
                clearInterval(checkTime);
              }
            }, 1000);
          }
        }
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-warm-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Centered Title Section */}
        <div className="text-center mb-16">
          {/* Main Title */}
          <h2 className="font-playfair font-bold text-foreground leading-tight mb-8">
            {t('language.english') === 'English' 
              ? (
                <>
                  <span className="block text-3xl md:text-5xl" style={{ color: '#000000' }}>Based in Punta Cana.</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl" style={{ color: '#000000' }}>Rooted in La Romana.</span>
                  <span className="block text-3xl md:text-4xl lg:text-4xl" style={{ color: '#512082' }}>Created with passion.</span>
                </>
              ) 
              : (
                <>
                  <span className="block text-3xl md:text-5xl" style={{ color: '#000000' }}>Con base en Punta Cana.</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl" style={{ color: '#000000' }}>Con raíces en La Romana.</span>
                  <span className="block text-3xl md:text-4xl lg:text-4xl" style={{ color: '#512082' }}>Creado con pasión.</span>
                </>
              )
            }
          </h2>

          {/* Decorative line below title */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Video and Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Video */}
          <div className="relative w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            {/* Video Title */}
            <h3 className="text-center lg:text-left text-lg md:text-xl font-semibold text-purple-800 mb-6">
              {t('language.english') === 'English' 
                ? 'This is how we create magic together'
                : 'Así se vive el momento con nosotras'
              }
            </h3>
            
            <div 
              className="aspect-video w-full bg-gradient-glamour shadow-2xl relative overflow-hidden cursor-pointer"
              style={{ borderRadius: '24px' }}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
                        >
              {!isPlaying ? (
                // Play Button Overlay
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#6f617d' }}>
                  <div className="text-center">
                    <button
                      onClick={handlePlayVideo}
                      className="font-semibold py-4 px-8 rounded-full flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl mx-auto mb-4"
                      style={{ backgroundColor: '#f1e2fd', color: '#512082' }}
                    >
                      <Play className="w-6 h-6" />
                      <span className="text-lg">
                        {t('language.english') === 'English' ? 'Play Video' : 'Reproducir Video'}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                // YouTube Video Embed
                <iframe
                  id="youtube-player"
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/7PFpO1XeycE?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
                  title="Checa Makeup Video"
                  className="absolute inset-0 w-full h-full object-cover border-0"
                  frameBorder="0"
                  style={{ border: 'none', outline: 'none' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
          </div>
          
                      {/* Elegant corner decorations with connecting vine and decorative flourishes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top right corner decoration with 3 flowers */}
              <div className="absolute top-0 right-0 w-28 h-28 lg:w-32 lg:h-32 transform translate-x-6 translate-y-8 lg:translate-x-6 lg:translate-y-8 z-10">
              <svg viewBox="0 0 140 140" className="w-full h-full">
                <g>
                  
                  {/* Main corner flower - larger and positioned at exact corner */}
                  <g transform="translate(105, 28)">
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(30)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(60)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(90)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(120)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(150)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(180)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(210)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(240)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(270)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#dab5fa" transform="rotate(300)" />
                    <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#f1e2fd" transform="rotate(330)" />
                    <circle cx="0" cy="0" r="9" fill="#512082" />
                  </g>
                  
                  {/* Second flower - larger */}
                  <g transform="translate(60, 55)">
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(45)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(90)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(135)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(180)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(225)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(270)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(315)" />
                    <circle cx="0" cy="0" r="6" fill="#512082" />
                  </g>
                  
                  {/* Third flower - larger */}
                  <g transform="translate(85, 85)">
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(60)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(120)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(180)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(240)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(300)" />
                    <circle cx="0" cy="0" r="5" fill="#512082" />
                  </g>
                  
                </g>
              </svg>
            </div>
            
            {/* Connecting decorative vine between corners */}
            <div className="absolute top-0 right-0 w-16 h-full transform translate-x-2 lg:translate-x-3">
              <svg viewBox="0 0 64 400" className="w-full h-full" preserveAspectRatio="none">
                <g>
                  {/* Main elegant vine connecting top to bottom */}
                  <path d="M50 80 Q30 120 40 160 Q55 200 35 240 Q25 280 45 320 Q55 360 40 380" 
                        stroke="#dab5fa" strokeWidth="2.5" fill="none" opacity="0.7" />
                  
                  <path d="M47 85 Q27 125 37 165 Q52 205 32 245 Q22 285 42 325 Q52 365 37 380" 
                        stroke="#f1e2fd" strokeWidth="1.5" fill="none" opacity="0.8" />
                  
                  {/* Larger graceful leaves along the vine */}
                  <g transform="translate(32, 120) rotate(-25)">
                    <ellipse cx="0" cy="0" rx="5" ry="12" fill="#dab5fa" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="2.5" ry="8" fill="#f1e2fd" opacity="0.7" />
                  </g>
                  
                  <g transform="translate(50, 160) rotate(20)">
                    <ellipse cx="0" cy="0" rx="4" ry="10" fill="#f1e2fd" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="2" ry="6" fill="#dab5fa" opacity="0.7" />
                  </g>
                  
                  <g transform="translate(28, 200) rotate(-35)">
                    <ellipse cx="0" cy="0" rx="5" ry="14" fill="#dab5fa" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="2.5" ry="10" fill="#f1e2fd" opacity="0.7" />
                  </g>
                  
                  <g transform="translate(45, 240) rotate(15)">
                    <ellipse cx="0" cy="0" rx="4" ry="11" fill="#f1e2fd" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="2" ry="7" fill="#dab5fa" opacity="0.7" />
                  </g>
                  
                  <g transform="translate(30, 280) rotate(-20)">
                    <ellipse cx="0" cy="0" rx="4.5" ry="12" fill="#dab5fa" opacity="0.6" />
                    <ellipse cx="0" cy="0" rx="2" ry="8" fill="#f1e2fd" opacity="0.7" />
                  </g>
                 
                  {/* Small decorative flourishes */}
                  <g transform="translate(20, 140) rotate(-15)">
                    <ellipse cx="0" cy="0" rx="1" ry="3" fill="#f1e2fd" opacity="0.5" />
                  </g>
                  
                  <g transform="translate(15, 220) rotate(25)">
                    <ellipse cx="0" cy="0" rx="1.5" ry="4" fill="#dab5fa" opacity="0.5" />
                  </g>
                  
                  <g transform="translate(18, 300) rotate(-10)">
                    <ellipse cx="0" cy="0" rx="1" ry="3" fill="#f1e2fd" opacity="0.5" />
                  </g>
                </g>
              </svg>
            </div>

                          {/* Bottom right corner decoration with 3 flowers */}
              <div className="absolute bottom-0 right-0 w-44 h-44 lg:w-48 lg:h-48 transform translate-x-4 -translate-y-5 lg:translate-x-5 lg:-translate-y-5">
              <svg viewBox="0 0 250 250" className="w-full h-full">
                <g>
                  
                  {/* Main corner flower - larger and positioned at exact corner */}
                  <g transform="translate(215, 215)">
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(30)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(60)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(90)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(120)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(150)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(180)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(210)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(240)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(270)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#dab5fa" transform="rotate(300)" />
                    <ellipse cx="0" cy="-22" rx="5" ry="12" fill="#f1e2fd" transform="rotate(330)" />
                    <circle cx="0" cy="0" r="11" fill="#512082" />
                  </g>
                  
                  {/* Second flower - larger */}
                  <g transform="translate(175, 155)">
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(45)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(90)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(135)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(180)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(225)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#f1e2fd" transform="rotate(270)" />
                    <ellipse cx="0" cy="-12" rx="3" ry="7" fill="#dab5fa" transform="rotate(315)" />
                    <circle cx="0" cy="0" r="6" fill="#512082" />
                  </g>
                  
                  {/* Third flower - larger */}
                  <g transform="translate(155, 190)">
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(60)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(120)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(180)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#dab5fa" transform="rotate(240)" />
                    <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill="#f1e2fd" transform="rotate(300)" />
                    <circle cx="0" cy="0" r="5" fill="#512082" />
                  </g>
                  
                </g>
                             </svg>
             </div>
           </div>

           {/* Horizontal decorative line below video - centered */}
           <div className="flex justify-center mt-8">
             <div className="flex items-center space-x-2">
               <div className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-lilac rounded-full"></div>
               <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
               <div className="w-12 h-0.5 bg-gradient-to-r from-lilac to-purple-400 rounded-full"></div>
               <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
               <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
             </div>
           </div>
         </div>

         {/* Right side - Text Content */}
         <div className="relative order-1 lg:order-2 text-center lg:text-left">
           {/* Content paragraphs */}
           <div className="space-y-6 text-muted-foreground leading-relaxed">
             <p className="text-lg">
               {t('language.english') === 'English' 
                 ? "With over 8 years of experience in bridal makeup, I bring my background in painting to life through every brushstroke — now on faces instead of canvas."
                 : "Con más de 8 años de experiencia en maquillaje nupcial, transformo mi pasión por la pintura en arte sobre el rostro — cada trazo cuenta una historia."
               }
             </p>

             <p className="text-lg">
               {t('language.english') === 'English' 
                 ? "I believe makeup is more than beauty — it's emotion, confidence, and calm on one of the most meaningful days of your life."
                 : "Creo que el maquillaje va más allá de la belleza: transmite emoción, seguridad y tranquilidad en uno de los días más importantes de tu vida."
               }
             </p>

             <p className="text-lg">
               {t('language.english') === 'English' 
                 ? "Together with a team of trusted professionals from the region, I work across the Dominican Republic to make every bride (and every bridal party) feel their absolute best."
                 : "Junto a un equipo de profesionales de confianza en toda la región, trabajo en toda la República Dominicana para que cada novia (y cada grupo de invitadas) se sienta radiante y especial."
               }
             </p>



             <p className="text-lg font-medium text-purple-800">
               {t('language.english') === 'English' 
                 ? "Only top-tier, long-lasting products are used to ensure your look stays flawless from first look to last dance — even in the Caribbean sun."
                 : "Solo utilizo productos de alta gama y larga duración, ideales para el clima tropical, para que tu maquillaje se mantenga impecable desde el primer vistazo hasta el último baile."
               }
             </p>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default VideoSection; 