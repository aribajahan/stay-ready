import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

export default function Hotlines() {
  const { t } = useLanguage();

  const hotlines = [
    {
      name: 'United We Dream',
      phone: '1-844-363-1423',
      description: '24/7 hotline for immigrants and allies. Report raids, get support, and connect with local resources.',
    },
    {
      name: 'ACLU',
      phone: '212-549-2500',
      description: 'American Civil Liberties Union. Defends constitutional rights and civil liberties.',
    },
    {
      name: 'National Immigration Law Center',
      phone: '213-639-3900',
      description: 'Advocates for the rights of low-income immigrants.',
    },
    {
      name: 'RAICES Texas',
      phone: '210-787-3365',
      description: 'Provides free and low-cost legal services to immigrant families.',
    },
    {
      name: 'Immigrant Legal Resource Center',
      phone: '415-255-9499',
      description: 'Training and resources for immigrant communities and advocates.',
    },
  ];

  return (
    <InfoPageLayout title={t('hotlinesResources')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          Save these numbers. They can help in an emergency.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Emergency Hotlines</h2>
        <div className="space-y-4">
          {hotlines.map((hotline, index) => (
            <div 
              key={index}
              className="p-4 border-4 border-foreground bg-card"
              style={{ boxShadow: '6px 6px 0px hsl(var(--pure-black))' }}
            >
              <h3 className="font-bold text-xl mb-1">{hotline.name}</h3>
              <a 
                href={`tel:${hotline.phone.replace(/-/g, '')}`}
                className="flex items-center gap-2 text-primary font-bold text-lg mb-2 hover:underline"
              >
                <Phone size={20} />
                {hotline.phone}
              </a>
              <p className="text-muted-foreground">{hotline.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 font-display">Online Resources</h2>
        <ul className="list-none space-y-3">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            <a 
              href="https://www.unitedwedream.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              unitedwedream.org
            </a>
            <span>— United We Dream</span>
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            <a 
              href="https://www.aclu.org/know-your-rights/immigrants-rights" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              aclu.org/know-your-rights
            </a>
            <span>— ACLU Rights Guide</span>
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            <a 
              href="https://www.nilc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              nilc.org
            </a>
            <span>— National Immigration Law Center</span>
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            <a 
              href="https://www.ilrc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              ilrc.org
            </a>
            <span>— Immigrant Legal Resource Center</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 font-display">What to Do Right Now</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Save these numbers in your phone
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Share this page with family and friends
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Create your rights card and save it to your phone
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Make a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          You are not alone. Help is available.
        </p>
      </div>
    </InfoPageLayout>
  );
}
