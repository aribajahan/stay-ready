

# Lock Screen Rights Card Redesign

## Overview

Complete redesign of the RightsCard to serve as a phone lock screen wallpaper (1080 x 2400 px). The top 45% remains empty cream for clock/notifications, while the bottom 55% contains all rights content on black.

---

## New Card Layout

```text
┌────────────────────────────────────────┐
│                                        │
│           CREAM (#F5F2E8)              │
│                                        │
│    ← Phone clock appears here          │
│    ← Notifications appear here         │
│                                        │
│              TOP 45%                   │
│            (~1080px)                   │
│                                        │
├────────────────────────────────────────┤
│                                        │
│           BLACK (#1A1A1A)              │
│                                        │
│  DOCUMENT TYPE: Green Card    STATUS   │
│                                        │
│        MY RIGHTS                       │
│                                        │
│  • NO WARRANT, NO ENTRY                │
│  • RIGHT TO SILENCE                    │
│  • NO SEARCH WITHOUT CONSENT           │
│  • DO NOT SIGN                         │
│  • RIGHT TO A LAWYER                   │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │   STAY CALM · DON'T RUN · ...   │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │   I am exercising my             │  │
│  │   constitutional rights...       │  │
│  └──────────────────────────────────┘  │
│                                        │
│  EMERGENCY CONTACTS                    │
│  Mom: 555-1234                         │
│                                        │
│          (disclaimer)                  │
│                                        │
│             BOTTOM 55%                 │
│            (~1320px)                   │
│                                        │
└────────────────────────────────────────┘
```

---

## Key Changes

| Element | Current | New |
|---------|---------|-----|
| Dimensions | 540 x 960 px | 1080 x 2400 px |
| Layout | Content fills entire card | Top 45% empty, bottom 55% content |
| Background | All cream | Top cream, bottom black |
| Icons | 5 icon boxes with text | Text-only list (cleaner, more legible) |
| Hotline | Included on card | Removed (lives on website) |
| Statement box | Not present | Added (constitutional rights statement) |
| Rights text | Two-line per right | Single line per right |
| "Refuse to Sign" | "RIGHT TO REFUSE TO SIGN" | "DO NOT SIGN" (shorter) |

---

## Content Structure (Bottom Section)

### 1. Status Bar
- Left: Document type with value
- Right: Status badge (cream on black inverted)

### 2. Headline
- "MY RIGHTS" in Anton, ~64-72px
- Cream text on black

### 3. Rights List (5 items, text only)
```text
NO WARRANT, NO ENTRY
RIGHT TO SILENCE
NO SEARCH WITHOUT CONSENT
DO NOT SIGN
RIGHT TO A LAWYER
```
- Bold, uppercase, ~24px
- No icons (cleaner for lock screen legibility)

### 4. Calm Bar
- Cream background (#F5F2E8)
- Black text (#1A1A1A)
- "STAY CALM · DON'T RUN · DON'T LIE"
- Full width within padding

### 5. Statement Box (NEW)
```text
I am exercising my constitutional rights. I do not wish to 
speak with you, answer your questions, or sign or hand you 
any documents based on my 5th Amendment rights. I do not 
consent to your entry or to any search based on my 4th 
Amendment rights.
```
- Cream background, black text
- Smaller font (~14-16px), readable
- This is what user shows to officers

### 6. Emergency Contacts
- Only if user added contacts
- Cream text on black

### 7. Disclaimer
- Very small, subtle cream text
- "This card asserts your constitutional rights. It is not legal advice."

---

## PrepareCard Preview Changes

Update the card step to show a phone mockup preview:

```text
┌─────────────────────────┐
│     ┌───────────┐       │
│     │  📱       │       │
│     │  Phone    │       │
│     │  mockup   │       │
│     │  with     │       │
│     │  card     │       │
│     └───────────┘       │
│                         │
│  Set as your lock       │
│  screen so your rights  │
│  are always visible.    │
│                         │
│  ┌─────────────────┐    │
│  │  Download Card  │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/RightsCard.tsx` | Complete rewrite with new 1080x2400 layout |
| `src/pages/PrepareCard.tsx` | Update card preview with phone mockup and instruction text |

---

## Technical Notes

### RightsCard.tsx
- Dimensions: `width: 1080px`, `height: 2400px`
- Top section: 45% height (~1080px), cream background, empty
- Bottom section: 55% height (~1320px), black background
- Side padding: 48px left/right
- All text cream (#F5F2E8) on black, except calm bar and statement box
- Remove all icon components (DoorIcon, SilenceIcon, etc.)
- Remove hotline section

### PrepareCard.tsx
- Scale preview appropriately for phone mockup (smaller scale factor)
- Add instruction text: "Set as your lock screen so your rights are always visible."
- Change button text from "Download Image" to "Download Card"
- Keep phone mockup styling minimal

