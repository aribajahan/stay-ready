

# Three Updates: Menu Hover, Privacy Text & Card Colors

## 1. Menu Hover State (Review My Rights)

Add a subtle hover effect to menu items that works on desktop while keeping mobile tap feedback.

### Current
```css
.menu-item:active { @apply bg-accent/30; }
```
No hover state.

### New
```css
.menu-item:hover {
  @apply bg-accent/30;
}
.menu-item:active {
  @apply bg-accent/50;
}
```
Hover shows subtle cream tint, active (tap) is slightly stronger.

---

## 2. Privacy Notice Text

### Current
> "This tool does not collect or store any personal information."

### Options (shorter versions of your message)
| Option | Text |
|--------|------|
| A | "Your info stays on your phone. We never see it." |
| B | "This only appears on your card. Nothing is stored." |
| C | "For your card only — we don't keep anything." |

Recommended: **Option A** — direct, reassuring, conversational.

---

## 3. RightsCard Updates

### Color Changes: Brick Red → Black

| Element | Current | New |
|---------|---------|-----|
| Top bar background | `#B8352E` (brick red) | `#1A1A1A` (black) |
| "MY RIGHTS" headline | `#B8352E` | `#1A1A1A` |
| Icon backgrounds | `#B91C1C` | `#1A1A1A` |
| Icon internal strokes (door, lips, document) | `#B91C1C` | `#1A1A1A` |

### Hero Text Size: Make More Legible

| Element | Current | New |
|---------|---------|-----|
| "DOCUMENT TYPE" label | 10px | 11px |
| Document value | 16px | 18px |
| "A-NUMBER" label | 10px | 11px |
| A-Number value | 16px | 18px |
| Status badge | 11px | 13px, padding 10px 18px |

---

## Visual Result

```text
Before:                          After:
┌──────────────────────┐         ┌──────────────────────┐
│ ████ RED BAR ██████ │         │ ████ BLACK BAR █████ │
│ VISA HOLDER (small)  │         │ VISA HOLDER (larger) │
├──────────────────────┤         ├──────────────────────┤
│ MY RIGHTS (red)      │         │ MY RIGHTS (black)    │
│ [🔴][text] [🔴][text]│         │ [⬛][text] [⬛][text] │
└──────────────────────┘         └──────────────────────┘
```

The card becomes more monochromatic and authoritative, with the hero section easier to read.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `.menu-item:hover` state |
| `src/components/PrivacyNotice.tsx` | Update text |
| `src/components/RightsCard.tsx` | Replace all `#B8352E`/`#B91C1C` → `#1A1A1A`, increase hero text sizes |

