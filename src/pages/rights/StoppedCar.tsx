import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StoppedCar() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('stoppedCar')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          If you are stopped while driving, stay calm. You have rights.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">What You Must Do</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Pull over safely and turn off your engine
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Keep your hands visible on the steering wheel
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Show your driver's license, registration, and proof of insurance if asked
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">What You Do Not Have to Do</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Answer questions about where you were born or your immigration status
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Consent to a search of your car
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Sign any documents you do not understand
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If They Ask to Search Your Car</h2>
        <p className="text-lg leading-relaxed mb-4">
          You can say no. If they search anyway, do not physically resist—but clearly state that you do not consent.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"I do not consent to a search of my vehicle."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If They Ask About Your Status</h2>
        <p className="text-lg leading-relaxed mb-4">
          You do not have to answer questions about your immigration status or where you were born.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If You Are a Passenger</h2>
        <p className="text-lg leading-relaxed mb-4">
          As a passenger, you also have the right to remain silent. You may be required to show ID in some states, but you do not have to answer questions about your immigration status.
        </p>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          Stay calm. Keep your hands visible. Know your rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
