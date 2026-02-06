

# Unified Bracket Hover for Menu Items

## Current State

The Review Rights page menu items (`.menu-item`) currently have a simple hover:
- Text fades to muted gray
- No bracket animation

This feels inconsistent with the home page's unified bracket language.

## The Fix

Apply the same subtle bracket-appear hover to menu items that the secondary button uses.

| Element | Current Hover | New Hover |
|---------|---------------|-----------|
| Menu items | Text fades gray | Small brackets appear (like `.btn-text`) |
| Chevron arrow | Static gray | Stays static (no change) |

## Implementation

### File: `src/index.css`

Update `.menu-item` to include bracket pseudo-elements:

```css
/* Menu item - minimal with bracket hover */
.menu-item {
  @apply relative flex items-center justify-between py-5 border-b border-border/50 transition-all duration-300;
}

.menu-item::before,
.menu-item::after {
  content: '';
  @apply absolute w-3 h-3 transition-all duration-300 opacity-0;
  border-color: hsl(var(--foreground));
}

.menu-item::before {
  @apply top-2 left-0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.menu-item::after {
  @apply bottom-2 right-0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.menu-item:last-child {
  @apply border-b-0;
}

.menu-item:hover::before,
.menu-item:hover::after {
  @apply opacity-100 w-4 h-4;
}

.menu-item:hover {
  @apply bg-accent/30;
}
```

Key differences from `.btn-text`:
- Brackets positioned inward (`top-2`, `bottom-2`) to not overlap the border
- Slightly smaller final size (`w-4 h-4` vs `w-5 h-5`)
- Very subtle background shift (`bg-accent/30` vs `bg-accent/50`)

## Visual Result

```text
Current (hover):
  ICE at Your Door                    >
  (text fades gray)

After (hover):
┌                                      ┐
  ICE at Your Door                    >
└                                      ┘
  (small brackets appear, subtle bg shift)
```

## About "Too Much Animation"

This is NOT too much because:
1. The animation is subtle (opacity fade, not sliding)
2. It's the same interaction everywhere (predictable)
3. It only happens on hover (not constantly moving)
4. It reinforces the gallery/exhibition aesthetic

The brackets become a **signature detail** — users learn "hover = brackets appear" and it feels intentional, not chaotic.

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update `.menu-item` with bracket pseudo-elements |

