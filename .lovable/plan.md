

# Mobile-First Homepage + Tighter Content Spacing

## Problems Identified

### 1. Homepage - Not Mobile-First
The current `min-h-screen` hero forces users to scroll past an entire viewport just to see navigation. On mobile, this buries the three main paths completely.

### 2. Content Pages - Too Much Spacing
Multiple spacing issues make pages feel stretched and AI-generated:
- `.info-content space-y-6` adds 24px between every child element
- `.section-header my-6` adds 24px margins above AND below section headers
- `.section-divider mb-8` adds 32px after title divider
- `.phrase-box my-6` adds 24px above AND below each box
- `<section> mb-8` adds 32px after each section
- Combined: massive cumulative gaps between every element

---

## Fixes

### Fix 1: Mobile-First Homepage Layout

**File:** `src/pages/Index.tsx`

Change from full-viewport hero to a compact header with navigation visible immediately:

```text
CURRENT                          UPDATED
┌─────────────────┐              ┌─────────────────┐
│                 │              │     STAY        │
│      STAY       │              │     READY       │
│      READY      │ (100vh)      │─────────────────│
│                 │              │ PREPARE MY CARD │
│       ↓         │              │ REVIEW RIGHTS   │
└─────────────────┘              │ HELP COMMUNITY  │
│ PREPARE...      │              │─────────────────│
│ REVIEW...       │              │ Tips section    │
│ HELP...         │              │ Hotline         │
└─────────────────┘              └─────────────────┘
```

Changes:
- Remove `min-h-screen` from hero section
- Add padding (`py-16` or `py-20`) instead — keeps drama without the scroll
- Remove scroll indicator (ChevronDown)
- Keep stacked headline but at slightly smaller scale for mobile context

### Fix 2: Tighten Content Page Spacing

**File:** `src/index.css`

Reduce spacing in the `.info-content` and related classes:

| Element | Current | Updated |
|---------|---------|---------|
| `.info-content` container | `space-y-6` (24px) | `space-y-4` (16px) |
| `.info-content h2` | `mt-8` (32px) | `mt-6` (24px) |
| `.info-content p` | `mb-4` (16px) | `mb-3` (12px) |
| `.info-content ul` | `space-y-3 mb-6` | `space-y-2 mb-4` |
| `.info-content section` | `mb-8` (32px) | `mb-6` (24px) |
| `.section-divider` | `my-8` (32px) | `my-4` (16px) |
| `.section-header` | `my-6` (24px) | `my-4` (16px) |
| `.phrase-box` | `my-6 p-6` (24px) | `my-4 p-4` (16px) |
| `.warning-box` | `my-6 p-4` | `my-3 p-3` |

**File:** `src/components/InfoPageLayout.tsx`

- Change `space-y-6` to `space-y-4` on the content wrapper
- Change `mb-8` to `mb-4` after section divider

### Fix 3: Individual Content Pages

Update spacing in pages that override defaults:

**Files to update:**
- `src/pages/rights/IceAtDoor.tsx`
- `src/pages/rights/UniversalRights.tsx`
- `src/pages/community/GoodWitness.tsx`

Changes per file:
- Reduce `mb-8` to `mb-6` on intro text
- Reduce `my-6` to `my-4` on section headers
- Reduce `space-y-3` to `space-y-2` on lists

---

## Visual Comparison

### Content Page - Before
```text
┌─────────────────────┐
│ ← Back      [Home]  │
│                     │
│ AT YOUR             │
│ DOOR                │
│                     │  ← 32px gap
│ ─────────────────── │
│                     │  ← 32px gap
│ ─ YOUR RIGHTS ───── │
│                     │  ← 24px gap
│ You are not...      │
│                     │  ← 16px gap
│ You do NOT have...  │
│                     │  ← 24px gap
│ ─ WHAT TO SAY ───── │
│                     │  ← 24px gap
│ ┌─────────────────┐ │
│ │ SAY THIS        │ │
│ │ "I do not..."   │ │  ← 24px padding
│ └─────────────────┘ │
│                     │  ← 24px gap
```

### Content Page - After
```text
┌─────────────────────┐
│ ← Back      [Home]  │
│ AT YOUR             │
│ DOOR                │
│ ─────────────────── │  ← 16px gap
│ ─ YOUR RIGHTS ───── │  ← 16px gap
│ You are not...      │
│ You do NOT have...  │  ← 12px gap
│ ─ WHAT TO SAY ───── │  ← 16px gap
│ ┌─────────────────┐ │
│ │ SAY THIS        │ │
│ │ "I do not..."   │ │  ← 16px padding
│ └─────────────────┘ │  ← 16px gap
│ ┌─────────────────┐ │
│ │ SAY THIS        │ │
│ │ "I am exercis..."│ │
│ └─────────────────┘ │
```

Content feels tighter, more intentional, less like a template.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Remove `min-h-screen` hero, reduce to `py-16`/`py-20` |
| `src/index.css` | Tighten spacing across all content utilities |
| `src/components/InfoPageLayout.tsx` | Reduce `space-y-6` to `space-y-4`, reduce divider margin |
| `src/pages/rights/IceAtDoor.tsx` | Reduce section header margins |
| `src/pages/rights/UniversalRights.tsx` | Reduce intro and section margins |
| `src/pages/community/GoodWitness.tsx` | Reduce list and section spacing |

---

## Technical Details

### Homepage Hero Height Options
The current `min-h-screen` can be replaced with:
- `py-16` (64px top/bottom) — compact but still impactful
- `py-20` (80px) — slightly more breathing room
- `pt-12 pb-16` — asymmetric for visual interest

The headline scale is already responsive via `clamp()`, so reducing container height won't break the typography.

### Content Spacing Philosophy
The tighter spacing follows newspaper/magazine conventions:
- Body text: ~12px paragraph spacing (not 16px)
- Section breaks: 16-24px (not 32px)
- Pull quotes/callouts: 16px margins (not 24px)

This creates rhythm without the "padded template" feel.

