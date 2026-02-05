import { useLanguage, Language, languageNames } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  onSelect?: (language: Language) => void;
}

export function LanguageSelector({ onSelect }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    onSelect?.(lang);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-center">
        {t('selectLanguage')}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            className={`
              p-4 text-lg font-bold border-4 transition-all duration-150
              ${language === lang 
                ? 'bg-primary text-primary-foreground border-foreground shadow-bold' 
                : 'bg-background text-foreground border-foreground hover:bg-muted'
              }
            `}
            style={{
              transform: language === lang ? 'translate(2px, 2px)' : 'none',
              boxShadow: language === lang ? '6px 6px 0px hsl(var(--pure-black))' : '8px 8px 0px hsl(var(--pure-black))',
            }}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
