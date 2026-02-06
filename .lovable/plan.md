

# Icon Color Reversal & Layout Adjustment

Updating the rights card to match the reference style: cream icon backgrounds with dark icons, and a single-line headline.

---

## Visual Changes

| Element | Current | New |
|---------|---------|-----|
| Icon box background | Black `#1A1A1A` | Cream `#F5F2E8` |
| Icon strokes | White | Black `#1A1A1A` |
| Icon accents | Brick Red `#B8352E` | Brick Red `#B8352E` (keep) |
| Icon box border | None | 3px solid `#1A1A1A` |
| "MY RIGHTS" | 96px, two lines | 72px, single line |
| Rights strip height | 72px | 88px |
| Rights strip text | 22px | 26px |

---

## Reference Alignment

The reference image shows:
- Light/cream icon backgrounds with dark silhouettes
- Bold, high-contrast black icons
- Single-line "MY RIGHTS" headline
- Larger rights strips with prominent text

---

## Technical Changes

### File: `src/components/RightsCard.tsx`

**Update all icon SVGs (lines 23-79)**
- Change all `stroke="white"` to `stroke="#1A1A1A"`
- Change all `fill="white"` to `fill="#1A1A1A"`
- Keep brick red `#B8352E` accents as-is

**Update "MY RIGHTS" headline (lines 154-165)**
- Reduce fontSize from `96px` to `72px`
- Remove the `<br />` to make it single line
- Adjust marginBottom to `16px`

**Update icon box styling (lines 180-189)**
- Change backgroundColor from `#1A1A1A` to `#F5F2E8`
- Add border: `3px solid #1A1A1A`
- Add borderRadius for left corners: `12px 0 0 12px`

**Update rights strip dimensions (lines 172-177)**
- Increase height from `72px` to `88px`

**Update icon box dimensions (lines 181-182)**
- Increase width/height from `72px` to `88px`

**Update rights strip text (line 209)**
- Increase fontSize from `22px` to `26px`

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/RightsCard.tsx` | Reverse icon colors, resize headline, enlarge rights strips |

