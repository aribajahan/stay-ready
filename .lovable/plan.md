

# Icon Redesign: Bold Graphic Style with Human Figures

Redesign the four rights card icons to be more illustrative with human figures, thicker strokes, and brick red accent details.

---

## New Icon Designs

| Icon | Current | New Design |
|------|---------|------------|
| No Warrant, No Entry | Simple door with X | Person behind door with hand up in "stop" gesture |
| Right to Silence | Circle with lips | Person with finger over lips (shh gesture) |
| No Search Without Consent | Basic palm | Two hands - one reaching, one blocking |
| Right to a Lawyer | Phone handset | Person on phone or phone with speech bubble |

---

## Visual Style

- **Stroke weight**: Thick 3-4px main strokes
- **Human elements**: Simplified figures with expressive gestures
- **Color scheme**: White primary strokes + Brick Red (`#B8352E`) accent fills
- **Background**: Keep black (`#1A1A1A`) boxes for maximum contrast

---

## Technical Changes

### File: `src/components/RightsCard.tsx`

**Redesign DoorIcon (lines 21-27)**
New design: Person silhouette behind door with raised palm
- White stroke for door frame and person outline
- Brick red fill for the "stop" palm gesture

**Redesign SilenceIcon (lines 29-37)**
New design: Face profile with finger over lips
- White stroke for head outline
- Brick red fill for the "shh" finger

**Redesign HandIcon (lines 39-45)**
New design: Two-hand scene - reaching hand blocked by stop palm
- White stroke for both hands
- Brick red fill for the blocking palm

**Redesign PhoneIcon (lines 47-52)**
New design: Person holding phone with speech bubble
- White stroke for figure and phone
- Brick red fill for speech bubble (represents lawyer)

---

## Icon Specifications

Each icon will be:
- 32x32 viewBox (same as current)
- strokeWidth="3" for main elements
- White (`#FFFFFF`) for primary strokes
- Brick Red (`#B8352E`) for accent fills
- Designed for legibility at 72x72px display size

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/RightsCard.tsx` | Replace all 4 SVG icon components with new illustrative designs |

