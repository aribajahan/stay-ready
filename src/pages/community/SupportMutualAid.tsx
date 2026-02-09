import { InfoPageLayout } from '@/components/InfoPageLayout';

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
        
        <div className="mb-4">
          <p className="font-bold">United We Dream</p>
          <a 
            href="https://unitedwedream.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            unitedwedream.org
          </a>
          <p className="text-sm text-muted-foreground">Largest immigrant youth-led network</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">RAICES (Texas)</p>
          <a 
            href="https://raicestexas.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            raicestexas.org
          </a>
          <p className="text-sm text-muted-foreground">Legal services and bond fund</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Make the Road (NYC)</p>
          <a 
            href="https://maketheroadny.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            maketheroadny.org
          </a>
          <p className="text-sm text-muted-foreground">Legal aid, community programs, advocacy</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">National Day Laborer Organizing Network</p>
          <a 
            href="https://ndlon.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            ndlon.org
          </a>
          <p className="text-sm text-muted-foreground">Support for day laborers and migrants</p>
        </div>
      </section>

      <section>
        <h2>Minnesota</h2>
        
        <div className="mb-4">
          <p className="font-bold">Minnesota Immigrant Rights Action Committee (MIRAC)</p>
          <a 
            href="https://miracmn.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            miracmn.com
          </a>
          <p className="text-sm text-muted-foreground">Rapid response, resources, advocacy</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Minnesota's Fund to Rebuild</p>
          <a 
            href="https://workingpartnerships.betterworld.org/campaigns/supportminnesotans" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            workingpartnerships.betterworld.org
          </a>
        </div>

        <div className="mb-4">
          <p className="font-bold">CLUES</p>
          <a 
            href="https://clues.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            clues.org
          </a>
          <p className="text-sm text-muted-foreground">Services for Latino communities</p>
        </div>
      </section>

      <section>
        <h2>Bond Funds</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Help people get out of detention while they fight their case.
        </p>
        
        <div className="mb-4">
          <p className="font-bold">National Bail Fund Network</p>
          <a 
            href="https://communityjusticeexchange.org/nbfn-directory" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            communityjusticeexchange.org/nbfn-directory
          </a>
        </div>

        <div className="mb-4">
          <p className="font-bold">Envision Freedom Fund</p>
          <a 
            href="https://envisionfreedom.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            envisionfreedom.org
          </a>
        </div>
      </section>

      <section>
        <h2>Find Local Groups</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The best support is often local. Find groups near you:
        </p>
        
        <div className="mb-4">
          <p className="font-bold">Mutual Aid Hub</p>
          <a 
            href="https://mutualaidhub.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            mutualaidhub.org
          </a>
        </div>

        <div className="mb-4">
          <p className="font-bold">Win Without War Resource List</p>
          <a 
            href="https://winwithoutwar.org/policy/immigration-mutual-aid" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            winwithoutwar.org/policy/immigration-mutual-aid
          </a>
          <p className="text-sm text-muted-foreground">Organized by state</p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
