import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="bg-white/90 backdrop-blur-sm border-lilac/30 hover:bg-lilac/10 transition-all duration-300"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language === 'en' ? 'Español' : 'English'}
        <span className="ml-2">{language === 'en' ? '🇪🇸' : '🇬🇧'}</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
