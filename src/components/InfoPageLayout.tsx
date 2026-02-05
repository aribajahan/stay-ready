import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b-4 border-foreground">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
          >
            <ArrowLeft size={24} />
            {t('back')}
          </button>
          <Link
            to="/"
            className="p-2 hover:text-primary transition-colors"
            aria-label={t('home')}
          >
            <Home size={24} />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8 px-4 pb-24">
        <article className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
            {title}
          </h1>
          <div className="info-content space-y-6">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}
