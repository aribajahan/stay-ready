

# Mobile-First Simplification

## The Problems

1. **Review My Rights menu**: Plain text list doesn't look tappable on mobile (no hover = no feedback)
2. **Homepage has 3 different button styles**: Inconsistent visual language
3. **Hotline brackets feel heavy**: Draws too much attention away from the primary action

---

## The Solution

### Homepage: 2 Button Styles Only

| Element | Current | New |
|---------|---------|-----|
| PREPARE MY CARD | Solid black button | Keep (primary action) |
| REVIEW MY RIGHTS | Underlined text | Keep (secondary action) |
| Report ICE Activity | Bracket button | **Remove brackets, make it a simple footer element** |

The hotline should feel like helpful info in the footer area, not a third competing action.

### Review My Rights Menu: Add Visual Affordance

Make each row clearly look tappable:

| Element | Current | New |
|---------|---------|-----|
| Menu items | Plain text, underline on hover | **Add chevron (>) to indicate tappable, remove underline hover** |

The chevron (>) is a universal mobile pattern that says "tap to go somewhere."

---

## Homepage Layout Change

Move the hotline section further down and simplify it:

```text
Current:
┌─────────────────────────────┐
│     PREPARE MY CARD         │  ← Primary
└─────────────────────────────┘

      REVIEW MY RIGHTS         ← Secondary (underlined)

┌                             ┐
│  REPORT ICE ACTIVITY        │  ← Feels like 3rd CTA
│  1-844-363-1423             │
└                             ┘

──────────────────────────────
Footer disclaimer


After:
┌─────────────────────────────┐
│     PREPARE MY CARD         │  ← Primary
└─────────────────────────────┘

      REVIEW MY RIGHTS         ← Secondary (underlined)



──────────────────────────────
REPORT ICE ACTIVITY            ← Demoted to footer info
United We Dream
1-844-363-1423  •  24/7

Footer disclaimer
```

The hotline becomes part of the footer — still prominent, still tappable, but not competing with the two main actions.

---

## Review My Rights Menu: Chevron Pattern

```text
Current (no hover feedback on mobile):
  Your Universal Rights
  ────────────────────
  ICE at Your Door
  ────────────────────
  Stopped in Your Car


After (clear tap affordance):
  Your Universal Rights                    >
  ─────────────────────────────────────────
  ICE at Your Door                         >
  ─────────────────────────────────────────
  Stopped in Your Car                      >
```

The chevron makes it obvious these are links, even without hover.

---

## Implementation

### File: `src/index.css`

Remove `.btn-hotline` bracket styles entirely. Update `.menu-item` to include chevron support:

```css
/* Menu item - with chevron for tap affordance */
.menu-item {
  @apply flex items-center justify-between py-4 border-b border-border/50 font-medium text-foreground transition-colors duration-200;
}

.menu-item:last-child {
  @apply border-b-0;
}

.menu-item:active {
  @apply bg-accent/30;
}
```

### File: `src/pages/Index.tsx`

Move hotline into the footer area, remove bracket styling:

```tsx
{/* Footer with hotline */}
<footer className="px-6 pb-8 pt-16">
  {/* Hotline - simple footer style */}
  <a 
    href="tel:1-844-363-1423" 
    className="block text-center mb-8"
  >
    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
      Report ICE Activity
    </p>
    <p className="text-sm font-medium text-muted-foreground mb-1">
      United We Dream
    </p>
    <span className="text-foreground font-bold text-lg underline underline-offset-4">
      1-844-363-1423
    </span>
    <span className="text-xs font-semibold text-muted-foreground ml-2">24/7</span>
  </a>
  
  <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed text-center">
    This tool provides general information...
  </p>
</footer>
```

### File: `src/pages/ReviewRights.tsx`

Add chevron to each menu item:

```tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

{sections.map((section) => (
  <Link
    key={section.key}
    to={section.path}
    className="menu-item"
  >
    <span>{section.label}</span>
    <ChevronRight size={18} className="text-muted-foreground" />
  </Link>
))}
```

---

## Mobile Interaction Summary

| Element | Visual Affordance | Tap Feedback |
|---------|-------------------|--------------|
| Primary button | Solid black fill | Opacity 90% on active |
| Text link | Underline | Underline thickens |
| Menu items | Chevron (>) | Background tint on active |
| Hotline | Underlined phone number | Standard link behavior |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Remove `.btn-hotline`, update `.menu-item` for flex + active state |
| `src/pages/Index.tsx` | Move hotline to footer, simplify to text style |
| `src/pages/ReviewRights.tsx` | Add `ChevronRight` to menu items |

