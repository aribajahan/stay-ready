
# Fix Duplicate Headers & Strengthen Section Headers

## Summary

Two issues to fix:
1. **Duplicate headers** on PrepareCard steps - both the page AND the form show redundant titles
2. **Weak section headers** in info pages - "During the Arrest" etc. don't stand out enough for mobile scanning

---

## Issue 1: Duplicate Headers

### Current Problem

On the "Document Info" step:
```text
┌─────────────────────────────┐
│      DOCUMENT              │ ← Page title (PrepareCard.tsx)
│        INFO                │
│                            │
│      Document Type         │ ← Form title (DocumentForm.tsx) - DUPLICATE!
│  Select your ID type...    │
└─────────────────────────────┘
```

Same issue on "Emergency Contacts" step - the title appears twice.

### Fix

Remove the internal `<h2>` headers from `DocumentForm.tsx` and `EmergencyContactForm.tsx` since the parent page already provides the section title.

**Files to modify:**

| File | Change |
|------|--------|
| `src/components/DocumentForm.tsx` | Remove lines 29-37 (h2 and two p tags) |
| `src/components/EmergencyContactForm.tsx` | Remove lines 77-84 (h2 and two p tags) |

The description text ("Select your ID type..." and "This will be added to your card...") can be moved to the parent if needed, or kept as a single intro line.

---

## Issue 2: Section Headers Need More Weight

### Current Problem

```text
DURING THE ARREST          ← text-sm (14px), font-semibold, muted gray
                              Hard to spot when scanning quickly on mobile
```

### Proposed Fix

Make section headers more prominent while keeping them distinct from page titles:

```text
DURING THE ARREST          ← text-base (16px), font-bold, black text
                              Clear section breaks, easier to scan
```

**CSS Change in `src/index.css`:**

```css
/* Current */
.info-content h2 {
  font-family: 'DM Sans', sans-serif;
  @apply text-sm font-semibold uppercase tracking-widest mb-2 mt-4 first:mt-0;
  color: hsl(var(--headline));
}

/* Proposed */
.info-content h2 {
  font-family: 'DM Sans', sans-serif;
  @apply text-base font-bold uppercase tracking-wider mb-2 mt-6 first:mt-0;
  color: hsl(var(--headline));
}
```

Changes:
- `text-sm` → `text-base` (14px → 16px)
- `font-semibold` → `font-bold` (600 → 700)
- `tracking-widest` → `tracking-wider` (slightly tighter letter spacing)
- `mt-4` → `mt-6` (more breathing room above sections)

---

## Visual Comparison

### Section Headers - Before vs After

```text
BEFORE:                              AFTER:
┌────────────────────────┐           ┌────────────────────────┐
│ during the arrest      │           │ DURING THE ARREST      │
│ (small, gray-ish)      │           │ (larger, bold, black)  │
│                        │           │                        │
│ • Record from a safe   │           │ • Record from a safe   │
│   distance             │           │   distance             │
└────────────────────────┘           └────────────────────────┘
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/DocumentForm.tsx` | Remove duplicate h2 and description paragraphs |
| `src/components/EmergencyContactForm.tsx` | Remove duplicate h2 and description paragraphs |
| `src/index.css` | Update `.info-content h2` to be bolder and larger |

---

## Result

1. PrepareCard steps show clean single titles without duplication
2. Info pages have scannable, bold section headers that guide users through content quickly on mobile
