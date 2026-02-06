

# Visual Redesign: Warm Brick Red Palette

## New Color Direction

Based on the reference images, this redesign shifts from the current purple/teal palette to a warm, unified brick red aesthetic.

### New Palette

| Element | Current | New | Hex |
|---------|---------|-----|-----|
| Background | Warm cream | Soft cream | `#FAF6F1` |
| Headlines | Deep purple | Brick red | `#B8352E` |
| Body text | Dark gray | Charcoal | `#2D2D2D` |
| Buttons | Teal green | Brick red | `#B8352E` |
| Cards | White | Warm white | `#FFFFFF` |
| Muted text | Gray | Warm gray | `#6B6560` |

### Typography Updates

- **Headlines**: Keep Anton (condensed bold), but use the brick red color
- **Body**: Keep DM Sans for readability
- **Style**: More uppercase headlines for impact (matching reference)

---

## Technical Changes

### File: `src/index.css`

Update CSS custom properties:

```text
--background: Warm cream (#FAF6F1)
--foreground: Charcoal (#2D2D2D)
--headline: Brick red (#B8352E)
--primary: Brick red (#B8352E)
--primary-foreground: Cream (#FAF6F1)
--muted-foreground: Warm gray (#6B6560)
--coral: Remove or change to brick red
```

Remove the secondary purple color entirely - use brick red as the single accent.

### File: `tailwind.config.ts`

- Update shadow colors to work with warm palette
- Adjust any purple-specific utilities

### File: `src/pages/Index.tsx`

- Update any hardcoded color references
- Ensure buttons use new primary (brick red) color
- Cards remain white with subtle shadows

### Component Updates

The following components may need minor color class updates:
- `StatusSelector.tsx` - button states
- `RightsCard.tsx` - already uses black/cream (no change needed)
- `InfoPageLayout.tsx` - headline colors

---

## Visual Comparison

### Before (Current)
- Purple headlines (#5B21B6)
- Teal buttons (#059669)
- Multiple accent colors
- Feels: corporate, clinical

### After (New)
- Brick red headlines (#B8352E)
- Brick red buttons (#B8352E)
- Single unified accent
- Feels: warm, confident, trustworthy

---

## What Stays the Same

- **Downloadable card**: Keeps the bold black (#1A1A1A) and cream (#F5F2E8) high-contrast design
- **Typography**: Anton for display, DM Sans for body
- **Layout**: All page structures remain unchanged
- **Content**: All text from the content spec stays exactly the same

---

## Files to Modify

| File | Change |
|------|--------|
| `src/index.css` | Update all CSS custom properties to new palette |
| `tailwind.config.ts` | Update any color-specific configurations |
| `src/pages/Index.tsx` | Remove any hardcoded purple/teal classes |
| `src/components/StatusSelector.tsx` | Update selected state colors |
| `src/components/RightsPreview.tsx` | Update accent colors |
| `src/pages/ReviewRights.tsx` | Verify heading colors use new palette |

