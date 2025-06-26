import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    
    // Check if it's Spanish (including regional variants like es-DO, es-ES, etc.)
    if (browserLang.startsWith('es')) {
      navigate('/es', { replace: true });
    } else {
      // Default to English for all other languages
      navigate('/en', { replace: true });
    }
  }, [navigate]);

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
        <p className="text-gray-600">Detectando idioma / Detecting language...</p>
      </div>
    </div>
  );
};

export default LanguageRedirect; 