

# Typography & Spacing Refinements

## Summary

Polish the editorial design by establishing proper visual hierarchy: page titles stay bold and commanding, section headers become quieter labels, body text becomes lighter and more readable, and spacing tightens for a denser, magazine-like feel.

---

## Changes Overview

| Element | Current | After |
|---------|---------|-------|
| Body/paragraph text | `font-semibold` (600) | `font-normal` (400) |
| Section headers (h2) | Anton font, bold condensed | DM Sans, semibold, smaller, letterspaced |
| Section spacing | `mb-6` (24px) | `mb-4` (16px) |
| Paragraph spacing | `mb-3` (12px) | `mb-2` (8px) |
| List item spacing | `space-y-2` (8px) | `space-y-1.5` (6px) |
| Bullets | 6px squares | 4px dots, muted color |

---

## Visual Hierarchy (Before → After)

```text
BEFORE:
┌──────────────────────────────────┐
│ YOUR UNIVERSAL                   │ ← Page title (Anton, bold)
│ RIGHTS                           │
│                                  │
│ THE RIGHT TO REMAIN SILENT       │ ← Section h2 (also Anton, bold - TOO HEAVY)
│                                  │
│ You do not have to answer...     │ ← Body (semibold - too heavy)
│                                  │
│ ■ List item one                  │ ← 6px square bullet
│                                  │
│ ■ List item two                  │
└──────────────────────────────────┘

AFTER:
┌──────────────────────────────────┐
│ YOUR UNIVERSAL                   │ ← Page title (Anton, bold - UNCHANGED)
│ RIGHTS                           │
│                                  │
│ THE RIGHT TO REMAIN SILENT       │ ← Section h2 (DM Sans, semibold, smaller)
│                                  │
│ You do not have to answer...     │ ← Body (regular weight - lighter)
│                                  │
│ • List item one                  │ ← 4px dot, muted
│ • List item two                  │
└──────────────────────────────────┘
```

The page title still commands attention. Section headers organize content without competing. Body text is easy to read.

---

## File Changes

### `src/index.css`

**1. Change body text weight from semibold to normal**

```css
/* Line 102-106: Change body weight */
body {
  @apply bg-background text-foreground font-normal;  /* was font-semibold */
  font-family: 'DM Sans', system-ui, sans-serif;
  position: relative;
}

/* Line 137-139: Change p, span, li weight */
p, span, li, label {
  @apply font-normal;  /* was font-semibold */
}
```

**2. Override section headers in info-content to use DM Sans**

```css
/* Line 340-343: Update .info-content h2 */
.info-content h2 {
  font-family: 'DM Sans', sans-serif;  /* Override Anton inheritance */
  @apply text-sm font-semibold uppercase tracking-widest mb-2 mt-4 first:mt-0;
  color: hsl(var(--headline));
}
```

**3. Tighten spacing in info-content**

```css
/* Line 345-347: Reduce paragraph margin */
.info-content p {
  @apply text-base leading-relaxed mb-2;  /* was mb-3 */
}

/* Line 349-351: Reduce list spacing */
.info-content ul {
  @apply space-y-1.5 mb-3;  /* was space-y-2 mb-4 */
}

/* Line 357-359: Reduce section margin */
.info-content section {
  @apply mb-4;  /* was mb-6 */
}
```

**4. Update section-header styling**

```css
/* Line 327-334: Refine .section-header */
.section-header {
  @apply py-2 mt-4 first:mt-0;  /* Remove borders, add top margin */
}

.section-header h2 {
  font-family: 'DM Sans', sans-serif;  /* Override Anton */
  @apply text-xs font-semibold uppercase tracking-widest m-0;
  color: hsl(var(--muted-foreground));
}
```

**5. Keep buttons and critical UI elements bold**

The `button` rule stays `font-bold`. The `.btn-primary` and `.btn-link` stay as-is.

---

## What Stays The Same

- **Page titles** (`headline-stacked`, `headline-page`): Still use Anton font, bold condensed
- **Navigation list items** (`.nav-list-item`): Still use Anton for that bold nav feel
- **Phrase boxes**: Keep `font-medium` for the critical "what to say" text
- **Buttons**: Stay `font-bold`

---

## Technical Notes

- The base `h1, h2, h3` rule sets `font-family: 'Anton'` globally
- We override this specifically for `.info-content h2` and `.section-header h2` to use DM Sans
- This creates the hierarchy: Anton for titles/nav, DM Sans for section labels and body

---

## Files Modified

| File | Changes |
|------|---------|
| `src/index.css` | Update font weights, section header styling, and spacing values |

