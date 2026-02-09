import { InfoPageLayout } from '@/components/InfoPageLayout';

function ResourceLink({ 
  href, 
  name, 
  description 
}: { 
  href: string; 
  name: string; 
  description?: string;
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start gap-3 py-3 border-b border-border/50 hover:bg-accent/30 transition-colors -mx-2 px-2"
    >
      <span className="text-muted-foreground">→</span>
      <div>
        <span className="font-bold">{name}</span>
        {description && (
          <span className="text-muted-foreground"> — {description}</span>
        )}
      </div>
    </a>
  );
}

export default function SupportMutualAid() {
  return (
    <InfoPageLayout 
      title="Support & Mutual Aid" 
      backTo="/community" 
      backLabel="Help Your Community"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Give time, money, or resources to organizations doing this work.
      </p>

      <section>
        <h2>National Organizations</h2>
        <div className="space-y-0">
          <ResourceLink 
            href="https://unitedwedream.org" 
            name="United We Dream" 
            description="Largest immigrant youth-led network" 
          />
          <ResourceLink 
            href="https://raicestexas.org" 
            name="RAICES" 
            description="Legal services and bond fund" 
          />
          <ResourceLink 
            href="https://maketheroadny.org" 
            name="Make the Road" 
            description="Legal aid, community programs, advocacy" 
          />
          <ResourceLink 
            href="https://ndlon.org" 
            name="National Day Laborer Organizing Network" 
            description="Support for day laborers and migrants" 
          />
        </div>
      </section>

      <section>
        <h2>Minnesota</h2>
        <div className="space-y-0">
          <ResourceLink 
            href="https://miracmn.com" 
            name="MIRAC" 
            description="Rapid response, resources, advocacy" 
          />
          <ResourceLink 
            href="https://workingpartnerships.betterworld.org/campaigns/supportminnesotans" 
            name="Minnesota's Fund to Rebuild" 
            description="Emergency support for families" 
          />
          <ResourceLink 
            href="https://clues.org" 
            name="CLUES" 
            description="Services for Latino communities" 
          />
        </div>
      </section>

      <section>
        <h2>Bond Funds</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Help people get out of detention while they fight their case.
        </p>
        <div className="space-y-0">
          <ResourceLink 
            href="https://communityjusticeexchange.org/nbfn-directory" 
            name="National Bail Fund Network" 
          />
          <ResourceLink 
            href="https://envisionfreedom.org" 
            name="Envision Freedom Fund" 
          />
        </div>
      </section>

      <section>
        <h2>Find Local Groups</h2>
        <p className="text-sm text-muted-foreground mb-2">
          The best support is often local. Find groups near you:
        </p>
        <div className="space-y-0">
          <ResourceLink 
            href="https://mutualaidhub.org" 
            name="Mutual Aid Hub" 
          />
          <ResourceLink 
            href="https://winwithoutwar.org/policy/immigration-mutual-aid" 
            name="Win Without War Resource List" 
            description="Organized by state" 
          />
        </div>
      </section>
    </InfoPageLayout>
  );
}
