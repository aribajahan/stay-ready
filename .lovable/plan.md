

# Bigger Headline & Homepage Visual Improvements

## 1. Make the Header Bigger

**Current sizes**:
- Handwritten "know your rights": `text-4xl` (~36px)
- Main headline "Stay Ready": `text-6xl` (~60px)

**Proposed sizes**:
- Handwritten text: `text-4xl` → `text-5xl` (~48px)
- Main headline: `text-6xl` → `text-7xl` or `text-8xl` (~72-96px)
- Increase negative margin for more dramatic overlap: `-mb-4` → `-mb-6`

---

## 2. Additional Homepage Improvements

Here are several ideas to make the homepage more impactful:

| Improvement | Description |
|-------------|-------------|
| **More vertical breathing room** | Increase spacing between headline and action cards (`mb-10` → `mb-12` or `mb-16`) |
| **Bolder subheadline** | Make the subhead slightly larger (`text-lg` → `text-xl`) for better hierarchy |
| **Add subtle background texture** | A light grain or paper texture could reinforce the activist/zine aesthetic |
| **Language selector prominence** | Add a visible language toggle at the top for accessibility |
| **Animated entrance** | Subtle fade-in or slide-up animation on page load for polish |
| **Decorative accent** | A small red accent line or shape near the headline |
| **Hotline more prominent** | Move hotline box above the action cards or give it a colored background |

---

## Recommended Quick Wins

For immediate impact, I suggest these changes:

### Typography Scale-Up
```text
Handwritten:  text-4xl  →  text-5xl
Headline:     text-6xl  →  text-7xl (or text-8xl for maximum impact)
Overlap:      -mb-4     →  -mb-6
Subhead:      text-lg   →  text-xl
```

### Spacing Improvements
```text
Headline section margin: mb-10 → mb-14
Container max-width:     max-w-sm → max-w-md (slightly wider)
```

### Optional: Decorative Red Line
Add a small horizontal accent line below the subheadline:
```tsx
<div className="w-12 h-1 bg-primary mx-auto mt-4" />
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Increase headline sizes, adjust spacing, optional decorative elements |

---

## Visual Preview

```text
Current:                          After:
                                  
   know your rights (4xl)            know your rights (5xl)
   STAY READY (6xl)                     STAY READY (7xl/8xl)
                                  
   [subhead]                         [subhead - larger]
                                         ────
   [cards]                           [cards with more spacing]
```

