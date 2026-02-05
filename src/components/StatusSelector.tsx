import { useLanguage } from '@/contexts/LanguageContext';
import { ImmigrationStatus } from '@/types/card';

interface StatusSelectorProps {
  value: ImmigrationStatus;
  onChange: (status: ImmigrationStatus) => void;
}

const statusOptions: { key: Exclude<ImmigrationStatus, null>; translationKey: string }[] = [
  { key: 'citizen', translationKey: 'usCitizen' },
  { key: 'greenCard', translationKey: 'greenCard' },
  { key: 'visa', translationKey: 'visaHolder' },
  { key: 'dacaTps', translationKey: 'dacaTps' },
  { key: 'asylum', translationKey: 'asylumSeeker' },
  { key: 'undocumented', translationKey: 'undocumented' },
  { key: 'preferNot', translationKey: 'preferNotToSay' },
];

export function StatusSelector({ value, onChange }: StatusSelectorProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-2 text-center">
        {t('selectStatus')}
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        {t('statusOptional')}
      </p>
      <div className="space-y-3">
        {statusOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => onChange(option.key)}
            className={`
              w-full p-4 text-left text-lg font-medium border-4 transition-all duration-150
              ${value === option.key 
                ? 'bg-primary text-primary-foreground border-foreground' 
                : 'bg-background text-foreground border-foreground hover:bg-muted'
              }
            `}
            style={{
              boxShadow: value === option.key 
                ? '4px 4px 0px hsl(var(--pure-black))' 
                : '6px 6px 0px hsl(var(--pure-black))',
              transform: value === option.key ? 'translate(2px, 2px)' : 'none',
            }}
          >
            {t(option.translationKey as any)}
          </button>
        ))}
      </div>
    </div>
  );
}
