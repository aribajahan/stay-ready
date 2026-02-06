
# Unified Hover States + Hotline Button Treatment

## The Problem

Currently there are 3 different hover behaviors on the home page:
1. **Primary button**: Brackets extend to full border + background shift
2. **Secondary button**: Underline thickens
3. **Phone number**: Opacity fades

This feels inconsistent and jarring. Everything should use the same visual language.

---

## The Solution

### Unified Hover: Brackets Extend

Apply the **same bracket-extension hover** to all interactive elements:

| Element | Current Hover | New Hover |
|---------|---------------|-----------|
| Primary button | Brackets extend ✓ | Keep |
| Secondary button | Underline thickens | **Brackets extend** |
| Hotline section | Opacity fade | **Brackets extend** |

This creates one consistent interaction pattern: **hover = brackets grow**.

---

## Phone Number → Black

Change from red to black. The hotline section itself will have brackets, making it clear it's interactive.

---

## "Report ICE Activity" → Bracket Button

Turn the entire hotline section into a clickable bracket button:

```text
Current:
────────────────────────────
REPORT ICE ACTIVITY
United We Dream  1-844-363-1423  24/7

After:
┌                              ┐
  REPORT ICE ACTIVITY
  United We Dream
  1-844-363-1423  •  24/7
└                              ┘
(brackets extend on hover, clicking dials the number)
```

This makes it feel like a third action alongside "Prepare My Card" and "Review My Rights".

---

## Implementation

### File: `src/index.css`

Update `.btn-text` to also use bracket hover (smaller brackets):

```css
.btn-text {
  @apply relative inline-flex items-center justify-center py-4 px-6 font-semibold text-foreground bg-transparent transition-all duration-300;
}

.btn-text::before,
.btn-text::after {
  content: '';
  @apply absolute w-3 h-3 transition-all duration-300 opacity-0;
  border-color: hsl(var(--foreground));
}

.btn-text::before {
  @apply top-0 left-0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.btn-text::after {
  @apply bottom-0 right-0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.btn-text:hover::before,
.btn-text:hover::after {
  @apply opacity-100 w-5 h-5;
}
```

Add new `.btn-hotline` class for the hotline section (larger, stacked layout):

```css
.btn-hotline {
  @apply relative block text-left px-8 py-6 transition-all duration-300;
}

.btn-hotline::before,
.btn-hotline::after {
  content: '';
  @apply absolute w-5 h-5 transition-all duration-300;
  border-color: hsl(var(--foreground));
}

.btn-hotline::before {
  @apply top-0 left-0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.btn-hotline::after {
  @apply bottom-0 right-0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.btn-hotline:hover::before,
.btn-hotline:hover::after {
  @apply w-full h-full;
}

.btn-hotline:hover {
  @apply bg-accent/50;
}
```

### File: `src/pages/Index.tsx`

Update the hotline section to use the bracket button style:

```tsx
{/* Hotline - bracket button style */}
<a 
  href="tel:1-844-363-1423" 
  className="btn-hotline block border-t border-border/50 mt-8"
>
  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
    Report ICE Activity
  </p>
  <p className="text-sm font-medium text-muted-foreground mb-1">
    United We Dream
  </p>
  <div className="flex items-baseline gap-3">
    <span className="text-foreground font-bold text-xl">
      1-844-363-1423
    </span>
    <span className="text-xs font-semibold text-muted-foreground">24/7</span>
  </div>
</a>
```

---

## Visual Result

```text
┌                              ┐
       PREPARE MY CARD  →
└                              ┘

       REVIEW MY RIGHTS  →
      (small brackets appear on hover)

────────────────────────────────

┌                              ┐
  REPORT ICE ACTIVITY
  United We Dream
  1-844-363-1423  •  24/7
└                              ┘
```

All three interactive elements now share the same visual language:
- **Resting**: Corner brackets (visible or subtle)
- **Hover**: Brackets extend, background shifts

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update `.btn-text` with bracket hover, add `.btn-hotline` class |
| `src/pages/Index.tsx` | Make phone number black, wrap hotline section in bracket button |
