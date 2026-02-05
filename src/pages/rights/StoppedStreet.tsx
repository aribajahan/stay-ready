import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StoppedStreet() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('stoppedStreet')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          If you are approached by police or ICE in public, you have rights. Stay calm.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Can I Walk Away?</h2>
        <p className="text-lg leading-relaxed mb-4">
          You can calmly ask if you are free to leave. If the officer says yes, you can walk away calmly. Do not run.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"Am I free to leave?"</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If You Are Not Free to Leave</h2>
        <p className="text-lg leading-relaxed mb-4">
          If the officer says you are not free to leave, you are being detained. You still have rights:
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            You have the right to remain silent
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            You do not have to answer questions about your immigration status
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            You do not have to consent to a search
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">What to Say</h2>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">To remain silent:</p>
          <p className="text-lg italic mb-3">"I am exercising my right to remain silent."</p>
          <p className="font-bold text-lg">If they ask to search you:</p>
          <p className="text-lg italic mb-3">"I do not consent to a search."</p>
          <p className="font-bold text-lg">If you are detained:</p>
          <p className="text-lg italic">"I want to speak to a lawyer."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Do Not</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Run away
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Physically resist, even if you believe the stop is unjust
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Lie or give false documents
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Sign anything you do not understand
          </li>
        </ul>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          Stay calm. Assert your rights clearly and respectfully.
        </p>
      </div>
    </InfoPageLayout>
  );
}
