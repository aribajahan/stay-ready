

# Create "Stay Ready" Favicon

## Summary

Create a favicon inspired by the "Stay Ready" stacked headline from the homepage, then apply it to the site.

---

## Design Approach

Since favicons are small (32x32 or 16x16 pixels), the full "STAY READY" text won't be legible. Two options:

### Option A: "SR" Monogram (Recommended)
A bold, stacked "SR" that echoes the homepage lockup:
```text
┌────────┐
│   S    │
│   R    │
└────────┘
```
- Black background with cream/white "SR" letters
- Anton-style bold uppercase
- Matches the editorial brutalist aesthetic

### Option B: Stylized "S"
A single bold "S" in the Anton style on black background.

---

## Implementation

### Step 1: Generate Favicon Image

Use AI image generation to create a 512x512 PNG with:
- Black (#1A1A1A) square background
- Stacked "SR" in cream/white (#FAF9F6)
- Bold, condensed sans-serif letters (Anton-style)
- Tight vertical stacking matching the homepage lockup

### Step 2: Save to Project

Save the generated image to `public/favicon.png`

### Step 3: Update index.html

Replace the current favicon reference:

```html
<!-- Current -->
<link rel="icon" href="/favicon.ico">

<!-- New -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
```

---

## Files to Modify

| File | Change |
|------|--------|
| `public/favicon.png` | **NEW** - Generated SR monogram favicon |
| `index.html` | Update favicon link to reference new PNG |

---

## Visual Reference

The favicon will echo the homepage lockup:

```text
Homepage:          Favicon:
┌──────────────┐   ┌────┐
│    STAY      │   │ S  │
│    READY     │   │ R  │
└──────────────┘   └────┘
```

Same editorial brutalist energy, condensed for small display.

