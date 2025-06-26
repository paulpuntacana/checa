import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const DominicanFlag = () => (
    <svg className="w-4 h-3 mr-2" viewBox="0 0 24 18" fill="none">
      {/* Blue quarters */}
      <rect width="10" height="8" fill="#002d62" />
      <rect x="14" y="10" width="10" height="8" fill="#002d62" />
      {/* Red quarters */}
      <rect x="14" width="10" height="8" fill="#ce1126" />
      <rect y="10" width="10" height="8" fill="#ce1126" />
      {/* White cross */}
      <rect x="10" width="4" height="18" fill="#ffffff" />
      <rect width="24" height="4" y="7" fill="#ffffff" />
      {/* Small coat of arms representation */}
      <circle cx="12" cy="9" r="2" fill="#002d62" stroke="#ce1126" strokeWidth="0.5" />
    </svg>
  );

  const USFlag = () => (
    <svg className="w-4 h-3 mr-2" viewBox="0 0 24 18" fill="none">
      <rect width="24" height="18" fill="#b22234" />
      <rect width="24" height="2" y="2" fill="#ffffff" />
      <rect width="24" height="2" y="6" fill="#ffffff" />
      <rect width="24" height="2" y="10" fill="#ffffff" />
      <rect width="24" height="2" y="14" fill="#ffffff" />
      <rect width="10" height="10" fill="#3c3b6e" />
    </svg>
  );

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="bg-white/90 backdrop-blur-sm border-lilac/30 hover:bg-lilac/10 transition-all duration-300"
      >
        {language === 'en' ? (
          <>
            <DominicanFlag />
            Español
          </>
        ) : (
          <>
            <USFlag />
            English
          </>
        )}
      </Button>
    </div>
  );
};

export default LanguageToggle;
