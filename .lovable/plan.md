
# Fix Review Rights Flow, Enlarge Card Icons & Add Hero Image

## Summary of Issues and Changes

### Issue 1: Broken "Review Your Rights" Navigation
The home page links to `/review` but the route is registered as `/rights`, causing users to hit a 404.

### Issue 2: Card Icons Too Small
The SVG icons are currently 40x40 viewBox displayed in 88x88 boxes - they should be larger to fill the space better.

### Issue 3: Home Page Hero Image
Add the uploaded fist/gavel illustration as a subtle background behind the "Know Your Rights" headline.

---

## Technical Changes

### File: `src/pages/Index.tsx`

**Fix navigation link (line 38)**
- Change `to="/review"` to `to="/rights"` to match the actual route

**Add hero image behind headline**
- Copy the uploaded image to `src/assets/hero-fist.png`
- Import the image at top of file
- Wrap the headline section in a container with the image as a background
- Apply reduced opacity (~20-30%) so text remains readable
- Keep the cream background showing through

### File: `src/components/RightsCard.tsx`

**Enlarge icon SVGs (lines 23-73)**
- Increase viewBox from 40x40 to 56x56 for all four icons
- Scale up internal SVG elements proportionally (multiply coordinates by 1.4)
- Increase width/height attributes from 40 to 56
- This makes icons fill ~64% of the 88px box vs current ~45%

---

## Icon Scaling Details

| Icon | Current Size | New Size | Change |
|------|--------------|----------|--------|
| DoorIcon | 40x40 | 56x56 | +40% |
| SilenceIcon | 40x40 | 56x56 | +40% |
| HandIcon | 40x40 | 56x56 | +40% |
| PhoneIcon | 40x40 | 56x56 | +40% |

---

## Home Page Layout with Hero Image

```text
+----------------------------------+
|                                  |
|   [Hero image @ 20% opacity]     |
|                                  |
|      KNOW YOUR RIGHTS            |
|   Be prepared. Stay calm...      |
|                                  |
+----------------------------------+
|   [Prepare My Card button]       |
|   [Review My Rights button]      |
|   [Hotline box]                  |
+----------------------------------+
```

The image will be positioned absolutely behind the headline with:
- `opacity: 0.15` to `0.25` for subtlety
- Contained sizing so it doesn't overflow
- Centered positioning

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Fix link from `/review` to `/rights`, add hero image background |
| `src/components/RightsCard.tsx` | Scale up all 4 icon SVGs from 40x40 to 56x56 |
| `src/assets/hero-fist.png` | Copy uploaded image here (new file) |

---

## Steps

1. Copy uploaded image to `src/assets/hero-fist.png`
2. Fix the navigation link in Index.tsx from `/review` to `/rights`
3. Add the hero image as a background behind the headline section
4. Scale up all four SVG icons in RightsCard.tsx
