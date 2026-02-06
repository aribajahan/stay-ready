

# Sharp Corners Fix + Making This Feel Less AI-Generated

## Part 1: Fix Remaining Rounded Corners

Found `rounded-2xl` and `rounded-xl` still in these components:

| File | Elements with rounded corners |
|------|-------------------------------|
| `src/components/DocumentForm.tsx` | Selection buttons (line 46), input field (line 69) |
| `src/components/EmergencyContactForm.tsx` | Contact cards (line 83), remove button (line 91), inputs (lines 108, 116), add button (line 127) |
| `src/components/LanguageSelector.tsx` | Language buttons (line 27) |
| `src/components/RightsCard.tsx` | Rights strips (lines 183, 193, 209), bars (lines 235, 292) |

### Changes Required

Replace all `rounded-2xl` and `rounded-xl` with `rounded-none`:

**DocumentForm.tsx:**
- Line 46: `rounded-2xl` to nothing (sharp)
- Line 69: `rounded-2xl` to nothing

**EmergencyContactForm.tsx:**
- Line 83: `rounded-2xl` to nothing
- Line 91: `rounded-xl` to nothing
- Line 108: `rounded-2xl` to nothing
- Line 116: `rounded-2xl` to nothing
- Line 127: `rounded-2xl` to nothing

**LanguageSelector.tsx:**
- Line 27: `rounded-2xl` to nothing

**RightsCard.tsx:**
- Multiple `borderRadius: '12px'` inline styles to `borderRadius: '0'`

---

## Part 2: Making This Feel Less AI-Generated

Here are specific design interventions that add human intentionality and break the "template" feel:

### 1. Asymmetric Details
AI tends to make everything perfectly centered and balanced. Add intentional asymmetry:
- **Offset accent marks**: A small black square or dash positioned off-center near headlines
- **Uneven margins**: Slightly different left/right padding in certain sections (e.g., 24px left, 20px right)

### 2. Editorial Typography Flourishes
- **Pull quotes with oversized quotation marks**: Large `"` character (64px+) in a lighter gray before "What to say" text
- **Numbered lists with bold oversized numbers**: Instead of bullets, use `01.`, `02.` with the number in a heavier weight
- **Em dashes with spacing**: Replace hyphens with proper em dashes surrounded by thin spaces

### 3. Intentional White Space
- **Generous margins around the headline**: More vertical breathing room (e.g., `py-8` instead of `py-4`)
- **Section breaks**: Thin horizontal rules (1px) in muted gray between major sections

### 4. Micro-Interactions That Feel Crafted
- **Underline on hover instead of background change**: Links/buttons get a thick underline (2-3px) that animates in
- **Subtle hover lift**: Cards lift 2px on hover with a slight shadow increase

### 5. Distinct Visual Anchors
- **Page-level accent**: A thick black vertical line (4px) running down the left edge of the page on desktop
- **Section markers**: Small black squares (8x8px) next to section titles

### 6. Handcrafted Details on Forms
- **Input focus state**: Instead of a ring, show a thick bottom border that slides in from the left
- **Labels above inputs**: Position labels inside the field that animate up when focused (floating labels)
- **Custom checkmarks**: Replace default checkboxes with bold, hand-drawn style checkmarks

### 7. The "Rights Card" Should Feel Like a Protest Poster
- **Remove all border-radius** (already doing this)
- **Bolder contrast**: Thicker borders (4px instead of 3px)
- **Stencil-style text**: Consider uppercase throughout with tighter letter-spacing

---

## Recommended High-Impact Changes

For immediate implementation:

| Change | Impact | Effort |
|--------|--------|--------|
| Remove all remaining rounded corners | High | Low |
| Add oversized pull quote marks to "What to say" | High | Low |
| Thick underline hover on buttons instead of opacity | Medium | Low |
| Add thin horizontal rules between sections | Medium | Low |
| Numbered lists with bold oversized numbers | Medium | Medium |
| Floating label inputs | High | Medium |
| Vertical accent line on left edge | Medium | Low |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/DocumentForm.tsx` | Remove `rounded-2xl` |
| `src/components/EmergencyContactForm.tsx` | Remove `rounded-2xl`, `rounded-xl` |
| `src/components/LanguageSelector.tsx` | Remove `rounded-2xl` |
| `src/components/RightsCard.tsx` | Remove all `borderRadius` |
| `src/index.css` | Add new hover styles, pull quote utility |
| Rights pages | Add oversized quote marks to "What to say" boxes |

---

## Visual Examples

### Oversized Pull Quote
```text
Current:
┃  What to say:
┃  "I am exercising my right..."

After:
┃  "  What to say:
┃     "I am exercising my right..."
   (with a 48px light gray " before the text)
```

### Numbered List Style
```text
Current:
• Stay calm
• Ask if you are free to leave
• Request a lawyer

After:
01  Stay calm
02  Ask if you are free to leave
03  Request a lawyer
(numbers in bold, slightly larger)
```

### Thick Underline Hover
```text
Button at rest:       [  NEXT  ]
Button on hover:      [  NEXT  ]
                       ────────
                      (3px black underline animates in)
```

