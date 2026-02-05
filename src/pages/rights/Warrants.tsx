import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Warrants() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('warrantsDifference')}>
      <div className="p-4 bg-primary text-primary-foreground mb-6">
        <p className="text-lg font-bold">
          Not all warrants are the same. Understanding the difference can protect your rights.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Judicial Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          A judicial warrant is signed by a judge. This is the only type of warrant that allows officers to enter your home without your permission.
        </p>
        <div className="p-4 bg-muted border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg mb-2">A valid judicial warrant:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-lg">
              <span className="text-primary font-bold text-2xl leading-none">•</span>
              Is signed by a judge
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-primary font-bold text-2xl leading-none">•</span>
              Has your correct name
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-primary font-bold text-2xl leading-none">•</span>
              Has your correct address
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">ICE Administrative Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          An ICE administrative warrant is signed by an immigration officer, <strong>not a judge</strong>. This type of warrant does NOT give ICE the right to enter your home.
        </p>
        <div className="p-4 bg-muted border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg mb-2">ICE administrative warrants include:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-lg">
              <span className="text-primary font-bold text-2xl leading-none">•</span>
              Form I-200 (Warrant for Arrest of Alien)
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-primary font-bold text-2xl leading-none">•</span>
              Form I-205 (Warrant of Removal/Deportation)
            </li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          If ICE shows you one of these forms, you can refuse to open your door.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">How to Tell the Difference</h2>
        <p className="text-lg leading-relaxed mb-4">
          Ask to see the warrant. Ask them to slip it under the door or hold it up to a window.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Look for a judge's signature. If the signature is from an immigration officer or DHS official, it is an administrative warrant—not a judicial warrant.
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="font-bold text-lg">What to say:</p>
          <p className="text-lg italic">"Please slip the warrant under the door so I can read it."</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">If It's Not a Judicial Warrant</h2>
        <p className="text-lg leading-relaxed mb-4">
          You can say:
        </p>
        <div className="p-4 border-4 border-foreground mb-4" style={{ boxShadow: '4px 4px 0px hsl(var(--pure-black))' }}>
          <p className="text-lg italic">"This is not a judicial warrant signed by a judge. I do not consent to your entry."</p>
        </div>
      </section>

      <div className="p-4 bg-secondary text-secondary-foreground mt-8">
        <p className="text-lg font-bold text-center">
          Know the difference. It can protect your home.
        </p>
      </div>
    </InfoPageLayout>
  );
}
