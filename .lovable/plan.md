

# Compact Footer + Support & Mutual Aid Page

## Summary

Two changes:
1. Make homepage footer more compact by placing "Hotlines & Resources" and "About" links side-by-side
2. Create new "Support & Mutual Aid" page for the Help Your Community section

---

## 1. Homepage Footer Layout (`src/pages/Index.tsx`)

### Current Layout
```text
This is not legal advice.
[privacy notice]
About
```

### New Layout
Put the two links on the same line with a separator:

```text
This is not legal advice.
[privacy notice]
Hotlines & Resources · About
```

Wait - looking at the current code, "All hotlines & resources" is in a different section above (line 53-55), with the About link below in the disclaimer section. 

Looking more carefully at the footer structure:
- Lines 44-51: Hotline number block
- Lines 53-55: "All hotlines & resources" link with `mb-6`
- Lines 57-63: Disclaimer section with border-t

To make it tighter, I'll move the hotlines link into the disclaimer section alongside About, allowing us to remove the `mb-6` spacing.

**New footer structure:**
```tsx
<div className="border-t border-foreground/10 pt-4 space-y-0.5">
  <p className="text-xs text-muted-foreground">This is not legal advice.</p>
  <PrivacyNotice />
  <div className="flex items-center justify-center gap-3 pt-1">
    <Link to="/hotlines" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">
      Hotlines & Resources
    </Link>
    <span className="text-xs text-muted-foreground">·</span>
    <Link to="/about" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">
      About
    </Link>
  </div>
</div>
```

This removes the separate "All hotlines & resources" block and `mb-6`, making the footer significantly shorter.

---

## 2. Support & Mutual Aid Page

### Add to Navigation (`src/pages/HelpCommunity.tsx`)

Add new entry to the sections array:

```tsx
{ key: 'support', label: 'Support & Mutual Aid', path: '/community/support' },
```

### Create New Page (`src/pages/community/SupportMutualAid.tsx`)

Uses InfoPageLayout with organized sections for:
- National Organizations (United We Dream, RAICES, Make the Road, NDLON)
- Minnesota (MIRAC, Minnesota's Fund to Rebuild, CLUES)
- Bond Funds (National Bail Fund Network, Envision Freedom Fund)
- Find Local Groups (Mutual Aid Hub, Win Without War)

**Styling pattern per organization:**
```tsx
<div className="mb-4">
  <p className="font-bold">United We Dream</p>
  <a href="https://unitedwedream.org" target="_blank" rel="noopener noreferrer" 
     className="text-sm underline hover:text-muted-foreground transition-colors">
    unitedwedream.org
  </a>
  <p className="text-sm text-muted-foreground">Largest immigrant youth-led network</p>
</div>
```

### Add Route (`src/App.tsx`)

```tsx
import SupportMutualAid from "./pages/community/SupportMutualAid";
// ...
<Route path="/community/support" element={<SupportMutualAid />} />
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Move hotlines link into footer disclaimer, make side-by-side with About |
| `src/pages/HelpCommunity.tsx` | Add "Support & Mutual Aid" to sections array |
| `src/pages/community/SupportMutualAid.tsx` | **NEW FILE** - Full page with all organizations |
| `src/App.tsx` | Add route for `/community/support` |

---

## Full Page Content

### National Organizations
- **United We Dream** - unitedwedream.org - Largest immigrant youth-led network
- **RAICES (Texas)** - raicestexas.org - Legal services and bond fund
- **Make the Road (NYC)** - maketheroadny.org - Legal aid, community programs, advocacy
- **National Day Laborer Organizing Network** - ndlon.org - Support for day laborers and migrants

### Minnesota
- **Minnesota Immigrant Rights Action Committee (MIRAC)** - miracmn.com - Rapid response, resources, advocacy
- **Minnesota's Fund to Rebuild** - workingpartnerships.betterworld.org/campaigns/supportminnesotans
- **CLUES** - clues.org - Services for Latino communities

### Bond Funds
- **National Bail Fund Network** - communityjusticeexchange.org/nbfn-directory
- **Envision Freedom Fund** - envisionfreedom.org

### Find Local Groups
- **Mutual Aid Hub** - mutualaidhub.org
- **Win Without War Resource List** - winwithoutwar.org/policy/immigration-mutual-aid (Organized by state)

