import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Home, Search, Scale } from 'lucide-react';

export function RightsPreview() {
  const { t } = useLanguage();

  const rights = [
    {
      icon: Shield,
      title: t('rightSilent'),
      explanation: t('rightSilentExplain'),
    },
    {
      icon: Home,
      title: t('rightDoor'),
      explanation: t('rightDoorExplain'),
    },
    {
      icon: Search,
      title: t('rightSearch'),
      explanation: t('rightSearchExplain'),
    },
    {
      icon: Scale,
      title: t('rightLawyer'),
      explanation: t('rightLawyerExplain'),
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-center">
        {t('previewRights')}
      </h2>
      <div className="space-y-4">
        {rights.map((right, index) => (
          <div
            key={index}
            className="p-4 bg-card border-4 border-foreground animate-slide-up"
            style={{ 
              boxShadow: '6px 6px 0px hsl(var(--pure-black))',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary text-primary-foreground">
                <right.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{right.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {right.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
