import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IceAtDoor() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('iceAtDoor')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          If someone knocks on your door and says they are from ICE, you do not have to open it.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Step 1: Stay Calm</h2>
        <p className="text-lg leading-relaxed mb-4">
          Do not open the door. You can speak through the door or through a window. Stay calm and speak clearly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Step 2: Ask for Identification</h2>
        <p className="text-lg leading-relaxed mb-4">
          Ask the officers to identify themselves. Ask them to show their badges and state the purpose of their visit.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"Who are you? What agency are you from? Why are you here?"</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Step 3: Ask for a Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          Ask if they have a warrant. A valid judicial warrant must be signed by a judge. Ask them to slip it under the door or hold it up to a window so you can read it.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"Do you have a warrant signed by a judge? Please slip it under the door."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Step 4: Check the Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          Look at the warrant carefully. A real judicial warrant will:
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Be signed by a judge (not an immigration officer)
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Have the correct address
          </li>
          <li className="flex items-start gap-3 text-lg">
            <span className="text-primary font-bold text-2xl leading-none">•</span>
            Have the correct name (if it names someone specific)
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          ICE administrative warrants (Form I-200 or I-205) do <strong>not</strong> give officers the right to enter your home.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Step 5: If There Is No Valid Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          You can tell them you are exercising your right not to open the door.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"I do not consent to your entry. I am exercising my constitutional rights."</p>
        </div>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          Remember: You have rights even if you are not a citizen. Stay calm and exercise them.
        </p>
      </div>
    </InfoPageLayout>
  );
}
