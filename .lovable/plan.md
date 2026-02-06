

# Complete Design Overhaul: Black & Cream Editorial Style

## Overview

This is a comprehensive design update that transforms the app from a warm brick-red palette to a minimal black-and-cream editorial aesthetic, with sharp corners, new callout styling, and content fixes.

---

## Part 1: Color Palette Change

### New Color Scheme

| Element | Current | New |
|---------|---------|-----|
| Background | #FAF6F1 (soft cream) | #F5F2E8 (warm cream) |
| Text/Foreground | #2D2D2D (charcoal) | #1A1A1A (black) |
| Headlines | Brick red (#B8352E) | Black (#1A1A1A) |
| Primary accent | Brick red (#B8352E) | Black (#1A1A1A) |
| Hotline phone numbers ONLY | - | Brick red (#B91C1C) |
| Handwritten "know your rights" | `text-muted-foreground/40` | Medium gray (#8A8A8A) with increased opacity |
| Callout box background | Pink accent | Slightly darker cream (#EDE9DF) |
| Callout border | None | 4px black left border |

### Files to Update

**`src/index.css`** - Complete CSS variable overhaul:
- `--background`: Change to `42 25% 94%` (#F5F2E8)
- `--foreground`: Change to `0 0% 10%` (#1A1A1A)
- `--headline`: Change to `0 0% 10%` (#1A1A1A - black instead of red)
- `--primary`: Change to `0 0% 10%` (#1A1A1A - black for buttons)
- `--primary-foreground`: Change to `42 25% 94%` (cream)
- `--accent`: Change to `40 20% 90%` (#EDE9DF - slightly darker cream for callouts)
- Add new `--hotline` color: `0 77% 41%` (#B91C1C) for phone numbers only
- `--radius`: Change to `0` (sharp corners globally)

**`tailwind.config.ts`** - Add hotline color utility

---

## Part 2: Sharp Corners (No Border Radius)

Replace all rounded corners throughout the app:

| Class | Replace With |
|-------|-------------|
| `rounded-2xl` | `rounded-none` |
| `rounded-xl` | `rounded-none` |
| `rounded-full` (badges) | Keep for 24/7 badge visual distinction |
| `rounded-lg`, `rounded-md` | `rounded-none` |

### Files Affected

- `src/pages/Index.tsx` - Buttons, cards, hotline box
- `src/pages/ReviewRights.tsx` - Section list card
- `src/pages/PrepareCard.tsx` - Buttons, progress dots, card container
- `src/components/RightsPreview.tsx` - Rights cards, quote boxes
- `src/components/InfoPageLayout.tsx` - Any containers
- `src/components/StatusSelector.tsx` - Status buttons
- `src/components/DocumentForm.tsx` - Form inputs
- `src/components/EmergencyContactForm.tsx` - Form inputs
- `src/index.css` - Global `.card-elevated`, `.btn-primary`, `.btn-secondary` classes
- All 8 rights pages - Callout boxes

---

## Part 3: New Callout Box Styling

### Current Pattern
```tsx
<div className="p-4 bg-card rounded-2xl shadow-card mb-4">
  <p className="text-sm font-medium text-headline mb-1">What to say:</p>
  <p className="text-sm text-muted-foreground italic">...</p>
</div>
```

### New Pattern
```tsx
<div className="p-3 bg-accent border-l-4 border-foreground mb-4">
  <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
  <p className="text-sm text-muted-foreground italic">...</p>
</div>
```

**Key changes:**
- Background: `bg-accent` (now #EDE9DF - slightly darker cream)
- Border: `border-l-4 border-foreground` (4px black left border)
- No shadow: Remove `shadow-card`
- No rounded corners: Remove `rounded-2xl`
- Label weight: `font-medium` to `font-semibold`
- Label color: `text-headline` to `text-foreground` (black, not red)
- Tighter padding: `p-4` to `p-3`

### Top/Bottom Summary Boxes

Current:
```tsx
<div className="p-4 bg-secondary/10 rounded-2xl mb-6">
```

New:
```tsx
<div className="p-3 bg-accent border-l-4 border-foreground mb-6">
```

### Files with Callouts to Update

| File | "What to say" boxes | Top/Bottom callouts |
|------|---------------------|---------------------|
| `src/pages/rights/UniversalRights.tsx` | 5 | 2 |
| `src/pages/rights/IceAtDoor.tsx` | 3 | 2 |
| `src/pages/rights/StoppedCar.tsx` | 2 | 2 |
| `src/pages/rights/StoppedStreet.tsx` | 2 | 2 |
| `src/pages/rights/IceWorkplace.tsx` | 0 | 2 |
| `src/pages/rights/Warrants.tsx` | 1 | 2 |
| `src/pages/rights/WhatToCarry.tsx` | 0 | 2 |
| `src/pages/rights/Hotlines.tsx` | 0 | 1 |
| `src/components/RightsPreview.tsx` | 5 quote boxes | 0 |

---

## Part 4: Typography Weight Updates

### Labels to Make Semi-bold

Change from `font-medium` to `font-semibold`:

- "What to say:" labels
- "Do not:" section headers
- Step titles (Step 1, Step 2, etc.)
- List item prefixes
- Warning/Note prefixes

### Tighter Padding Throughout

- Card padding: `p-5` to `p-4`, `p-4` to `p-3`
- Callout padding: `p-4` to `p-3`
- List spacing: `space-y-3` to `space-y-2` where appropriate

---

## Part 5: Homepage Fixes

### File: `src/pages/Index.tsx`

1. **Handwritten text visibility**: Change from `text-muted-foreground/40` to explicit medium gray with higher opacity
   ```tsx
   // Before
   className="text-muted-foreground/40 text-5xl..."
   
   // After
   className="text-5xl..." style={{ color: '#8A8A8A' }}
   ```

2. **Remove red accent line**: Delete the `<div className="w-12 h-1 bg-primary mx-auto mt-4" />` element

3. **Hotline phone number in red**: Apply special `text-hotline` class only to the phone number
   ```tsx
   <a href="tel:1-844-363-1423" className="text-hotline font-bold">
     1-844-363-1423
   </a>
   ```

4. **Sharp corners**: All buttons and cards to `rounded-none`

5. **Update headline color**: Headlines now black (via CSS variable change)

---

## Part 6: Content Fixes

### Add "Report and Record" to ReviewRights Menu

**File: `src/pages/ReviewRights.tsx`**

Add new section to the array (9 items total):
```tsx
const sections = [
  { key: 'universal', label: 'Your Universal Rights', path: '/rights/universal' },
  { key: 'door', label: 'ICE at Your Door', path: '/rights/door' },
  { key: 'car', label: 'Stopped in Your Car', path: '/rights/car' },
  { key: 'street', label: 'Stopped on the Street', path: '/rights/street' },
  { key: 'workplace', label: 'ICE at Your Workplace', path: '/rights/workplace' },
  { key: 'warrants', label: 'Warrants: Know the Difference', path: '/rights/warrants' },
  { key: 'report', label: 'Report and Record', path: '/rights/report' },  // NEW
  { key: 'carry', label: 'What to Carry', path: '/rights/carry' },
  { key: 'hotlines', label: 'Hotlines & Resources', path: '/rights/hotlines' },
];
```

**New File: `src/pages/rights/ReportRecord.tsx`**
- Create placeholder page with InfoPageLayout
- Basic content about documenting encounters

**File: `src/App.tsx`**
- Add route for `/rights/report`

### Fix "Lie about your name" Text

**File: `src/pages/rights/StoppedStreet.tsx`**

Change line 64:
```tsx
// Before
Lie about your name

// After
Lie
```

---

## Part 7: Google Sheet Content Integration (Future)

The user will provide a Google Sheet for content management. This requires:

1. **Public Google Sheet**: User shares sheet with "Anyone with link can view"
2. **Fetch function**: Create utility to fetch and parse CSV from Google Sheets
3. **Content context**: Create React context to provide content by section/language
4. **Component updates**: Update all text content to pull from context instead of hardcoded strings

**Note**: For MVP, we'll maintain hardcoded English content. Google Sheet integration can be added in a follow-up once the sheet structure is confirmed.

---

## Complete File List

| File | Changes |
|------|---------|
| `src/index.css` | New color palette, remove rounded from utilities |
| `tailwind.config.ts` | Add `hotline` color, update border-radius default |
| `src/pages/Index.tsx` | Sharp corners, remove red line, gray handwritten text, hotline red |
| `src/pages/ReviewRights.tsx` | Add "Report and Record", sharp corners |
| `src/pages/PrepareCard.tsx` | Sharp corners on buttons |
| `src/components/RightsPreview.tsx` | Sharp corners, left-border quote boxes |
| `src/components/StatusSelector.tsx` | Sharp corners on status buttons |
| `src/components/InfoPageLayout.tsx` | Update any styled containers |
| `src/pages/rights/UniversalRights.tsx` | New callout style, semibold labels |
| `src/pages/rights/IceAtDoor.tsx` | New callout style, semibold labels |
| `src/pages/rights/StoppedCar.tsx` | New callout style, semibold labels |
| `src/pages/rights/StoppedStreet.tsx` | New callout style, fix "Lie" text |
| `src/pages/rights/IceWorkplace.tsx` | New callout style, semibold labels |
| `src/pages/rights/Warrants.tsx` | New callout style, semibold labels |
| `src/pages/rights/WhatToCarry.tsx` | New callout style |
| `src/pages/rights/Hotlines.tsx` | Sharp corners, hotline numbers in red |
| `src/pages/rights/ReportRecord.tsx` | NEW - placeholder page |
| `src/App.tsx` | Add route for ReportRecord |

---

## Visual Summary

```text
Before                              After
──────────────────────────────────────────────────────────────
Brick red headlines                 Black headlines
Brick red buttons                   Black buttons
Pink rounded callouts               Cream with black left border
Rounded corners everywhere          Sharp corners everywhere
Brick red phone numbers             Brick red phone numbers (kept)
Light gray handwritten text         Medium gray (more visible)
Red accent line under subhead       Removed
```

