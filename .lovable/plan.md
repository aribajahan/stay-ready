

# Move Hero Image Above Headline

Relocating the fist/gavel image from a background element to a prominent hero banner position at the top of the page.

---

## New Layout

```text
+----------------------------------+
|                                  |
|     [Fist/Gavel Image]           |
|        (120-160px height)        |
|                                  |
+----------------------------------+
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

---

## Technical Changes

### File: `src/pages/Index.tsx`

**Remove background image approach (lines 13-24)**
- Remove the `relative` container wrapper
- Remove the absolutely positioned background image
- Remove the `relative py-8` inner wrapper

**Add hero image as standalone element**
- Place the image above the headline in a centered container
- Set height to `h-32` to `h-40` (128-160px)
- Apply `object-contain` to preserve aspect ratio
- Keep some margin below (`mb-6`) before the headline

**Updated headline section**
- Restore simple headline without positioning complexity
- Keep the same text styling and spacing

---

## Visual Treatment Options

The image can be displayed with:
- Full color at 100% opacity for maximum impact
- Slightly reduced opacity (80-90%) for a softer look
- Optional subtle drop shadow for depth

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Move image from background to above headline |

