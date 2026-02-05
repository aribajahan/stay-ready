import { Link } from 'react-router-dom';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import { CreditCard, BookOpen, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const { t, language, setLanguage } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);
  const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language selector button */}
      <header className="p-4">
        <div className="container flex justify-end">
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-4 py-2 border-4 border-foreground font-bold hover:bg-muted transition-colors"
              style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}
            >
              <Globe size={20} />
              {languageNames[language]}
            </button>
            {showLanguages && (
              <div 
                className="absolute right-0 mt-2 bg-card border-4 border-foreground z-50"
                style={{ boxShadow: '6px 6px 0px hsl(var(--pure-black))' }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguages(false);
                    }}
                    className={`block w-full text-left px-4 py-3 font-medium hover:bg-muted transition-colors ${
                      language === lang ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary transform rotate-45" />
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-none tracking-tight">
            {t('appTitle').split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-primary' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-medium">
            {t('tagline')}
          </p>

          {/* Action buttons */}
          <div className="space-y-4">
            <Link
              to="/prepare"
              className="block w-full p-6 bg-primary text-primary-foreground border-4 border-foreground transition-all duration-150 hover:translate-x-1 hover:translate-y-1 group"
              style={{ boxShadow: '8px 8px 0px hsl(var(--pure-black))' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/20">
                  <CreditCard size={32} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold font-display">
                    {t('prepareCard')}
                  </h2>
                  <p className="text-sm text-primary-foreground/80">
                    {t('prepareCardDesc')}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/rights"
              className="block w-full p-6 bg-secondary text-secondary-foreground border-4 border-foreground transition-all duration-150 hover:translate-x-1 hover:translate-y-1 group"
              style={{ boxShadow: '8px 8px 0px hsl(var(--pure-black))' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary-foreground/20">
                  <BookOpen size={32} className="text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold font-display">
                    {t('reviewRights')}
                  </h2>
                  <p className="text-sm text-secondary-foreground/80">
                    {t('reviewRightsDesc')}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Hotline */}
          <div className="mt-12 p-4 border-4 border-foreground" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
            <p className="text-sm text-muted-foreground mb-1">24/7 Hotline</p>
            <a 
              href="tel:18443631423" 
              className="text-xl font-bold text-primary hover:underline font-display"
            >
              United We Dream: 1-844-363-1423
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-muted-foreground border-t-4 border-foreground">
        <p>This app asserts your constitutional rights. It is not legal advice.</p>
      </footer>
    </div>
  );
}
