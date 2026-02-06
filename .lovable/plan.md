
# Rights Card Hybrid Color Update

Implement the hybrid approach: keep black icon boxes for maximum contrast and readability, but introduce brick red (`#B8352E`) for accent elements.

---

## Color Changes

| Element | Current | New |
|---------|---------|-----|
| Icon boxes | Black `#1A1A1A` | Black `#1A1A1A` (keep) |
| Top bar | Black `#1A1A1A` | Brick Red `#B8352E` |
| Status badge | Cream on black | Cream `#F5F2E8` on red |
| "MY RIGHTS" headline | Black `#1A1A1A` | Brick Red `#B8352E` |
| Rights strip borders | Black `#1A1A1A` | Brick Red `#B8352E` |
| Calm bar | Black `#1A1A1A` | Brick Red `#B8352E` |
| Hotline bar | Black `#1A1A1A` | Brick Red `#B8352E` |

---

## Visual Result

The card will have a warm, branded feel with:
- **Black icon squares** for maximum pop and legibility
- **Brick red accents** on header, footer bars, and text borders
- **Cream background** stays the same
- **Red headline** matches the app's visual identity

This creates visual continuity with the app while keeping the icons highly readable as a crisis document.

---

## Technical Changes

### File: `src/components/RightsCard.tsx`

**Line 81-86**: Change top bar background from `#1A1A1A` to `#B8352E`

**Line 135**: Change "MY RIGHTS" headline color from `#1A1A1A` to `#B8352E`

**Line 172**: Change rights strip border from `#1A1A1A` to `#B8352E`

**Line 199**: Change calm bar background from `#1A1A1A` to `#B8352E`

**Line 256**: Change hotline bar background from `#1A1A1A` to `#B8352E`

---

## What Stays the Same

- Icon box backgrounds stay **black** (`#1A1A1A`) for maximum contrast
- Icon stroke colors stay **white** for visibility
- Cream background (`#F5F2E8`) unchanged
- All layout and sizing unchanged
- Emergency contacts section unchanged
