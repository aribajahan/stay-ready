

# Update Home Page Copy, Fix Button Text & Add Right to Refuse to Sign

## Overview

Three focused changes:
1. Fix the "Prepare My Card" button text visibility (make it white)
2. Update all home page copy with new structure
3. Add "Right to Refuse to Sign" to the RightsPreview component

---

## 1. Fix Button Text Visibility

**Issue**: The h2 inside the primary button uses `text-headline` color (brick red) instead of inheriting `text-primary-foreground` (white).

**Fix**: Add explicit `text-white` class to the h2 in the primary button.

---

## 2. Updated Home Page Copy Structure

| Element | Current | New |
|---------|---------|-----|
| Handwritten script | "stay prepared" | "know your rights" (uppercase) |
| Headline | "Know Your Rights" | "STAY READY" |
| Subhead | "Be prepared. Stay calm. Know your rights." | "Know what to say if ICE comes to your door, car, or workplace." |
| Primary button title | "Prepare My Card" | "PREPARE MY CARD" |
| Primary button description | "Create a digital rights card to save on your phone" | "Save a rights card to your phone" |
| Secondary button title | "Review My Rights" | "REVIEW MY RIGHTS" |
| Secondary button description | "Learn what to do in different situations" | "Learn what to do in different situations" (unchanged) |
| Hotline label | "24/7 Hotline" | "REPORT ICE ACTIVITY" |
| Hotline org | "United We Dream" | "United We Dream \| 1-844-363-1423" |
| Hotline detail | phone number separately | "24/7" as badge/tag |

---

## 3. Add Right to Refuse to Sign

Add a 5th entry to the RightsPreview component:

```text
Title: Right to refuse to sign
Description: Do not sign anything you don't understand. Signing certain documents can waive your rights.
Quote: "I do not wish to sign anything without speaking to a lawyer."
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Fix button text color, update all copy per new structure |
| `src/components/RightsPreview.tsx` | Add 5th right: "Right to refuse to sign" |

---

## Technical Details

### Index.tsx Changes

**Headline section**:
```tsx
<p style={{ fontFamily: 'Caveat, cursive' }}>
  KNOW YOUR RIGHTS  {/* uppercase handwritten */}
</p>
<h1>STAY READY</h1>
<p>Know what to say if ICE comes to your door, car, or workplace.</p>
```

**Primary button**:
```tsx
<h2 className="text-lg font-bold text-white">PREPARE MY CARD</h2>
<p>Save a rights card to your phone</p>
```

**Secondary button**:
```tsx
<h2>REVIEW MY RIGHTS</h2>
<p>Learn what to do in different situations</p>
```

**Hotline box** (restructured):
```tsx
<div className="bg-card rounded-2xl p-4 shadow-card">
  <p className="text-xs font-bold text-headline uppercase">REPORT ICE ACTIVITY</p>
  <div className="flex items-center justify-between mt-2">
    <p>United We Dream | 1-844-363-1423</p>
    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">24/7</span>
  </div>
</div>
```

### RightsPreview.tsx Changes

Add to the `rights` array:
```tsx
{
  title: 'Right to refuse to sign',
  description: 'Do not sign anything you don\'t understand. Signing certain documents can waive your rights.',
  quote: '"I do not wish to sign anything without speaking to a lawyer."',
}
```

