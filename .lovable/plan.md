
# Fix Double Lines on Index Pages

## Problem

The index pages (Review Rights, Help Community, Stay Ready Tips) show two horizontal lines at the top of the navigation:

```text
REVIEW
MY RIGHTS
───────────────────  ← section-divider
───────────────────  ← nav-list border-top
Universal Rights  →
At Your Door      →
```

This happens because:
1. The `.section-divider` component adds a horizontal line
2. The `.nav-list` CSS class includes `border-top: 1px solid`

When placed back-to-back, they create a double line.

## Solution

Remove the redundant `.section-divider` from these three index pages. The `.nav-list` already provides its own top border, so the divider is unnecessary.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/ReviewRights.tsx` | Remove section-divider (lines 40-41) |
| `src/pages/HelpCommunity.tsx` | Remove section-divider (lines 38-39) |
| `src/pages/StayReadyTips.tsx` | Remove section-divider (lines 28-29) |

---

## Code Changes

### ReviewRights.tsx

**Before (lines 35-44):**
```tsx
<h1 className="headline-stacked headline-section mb-6">
  <span className="block">Review</span>
  <span className="block">My Rights</span>
</h1>

{/* Divider */}
<div className="section-divider mb-8" />

{/* Section list */}
<nav className="nav-list">
```

**After:**
```tsx
<h1 className="headline-stacked headline-section mb-8">
  <span className="block">Review</span>
  <span className="block">My Rights</span>
</h1>

{/* Section list */}
<nav className="nav-list">
```

Note: Changed `mb-6` to `mb-8` on the headline to maintain proper spacing after removing the divider.

### HelpCommunity.tsx

Same pattern — remove divider, adjust headline margin.

### StayReadyTips.tsx

Same pattern — remove the first divider only (lines 28-29). Keep the dividers between sections (lines 46 and 58) as those separate grouped content.

---

## Visual Result

```text
Before:                    After:
REVIEW                     REVIEW
MY RIGHTS                  MY RIGHTS
────────────               ────────────
────────────               Universal Rights  →
Universal Rights  →        At Your Door      →
At Your Door      →
```

Single clean line separating headline from navigation.
