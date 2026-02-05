import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IceWorkplace() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('iceWorkplace')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          ICE may conduct workplace raids. You have rights at work, too.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If ICE Comes to Your Workplace</h2>
        <p className="text-lg leading-relaxed mb-4">
          Stay calm. Do not run. You have rights even at work.
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
            You have the right to speak with a lawyer
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Public vs. Private Areas</h2>
        <p className="text-lg leading-relaxed mb-4">
          ICE can enter public areas of a business (like a lobby or store floor) without permission. But they need consent or a judicial warrant to enter private areas like employee break rooms or back offices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If ICE Asks to Speak with You</h2>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic mb-3">"I am exercising my right to remain silent."</p>
          <p className="text-lg italic">"I want to speak to a lawyer before answering any questions."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Know Your Employer's Responsibilities</h2>
        <p className="text-lg leading-relaxed mb-4">
          Your employer cannot force you to speak with ICE. They also cannot fire you or retaliate against you for exercising your rights.
        </p>
        <p className="text-lg leading-relaxed">
          Some states and cities have laws that require employers to notify workers before an ICE inspection. Check your local laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Prepare in Advance</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Know your emergency contacts
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Have a lawyer's number saved
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Create a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          Your workplace does not take away your constitutional rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
