
# Fixes: Card Data Bug + Homepage Updates

## Issue 1: Emergency Contact & Document Number Not Appearing on Card

### Diagnosis

After reviewing the code flow, I identified a **React state batching issue** in `goNext()`:

```tsx
// PrepareCard.tsx lines 48-67
const goNext = () => {
  if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
    setContacts([...contacts, newContact]); // Async state update
    // ...
  }
  setStep(steps[nextIndex]); // Immediately moves to next step
};
```

When `setContacts` and `setStep` are called in sequence, React batches them together. However, the `newContact` is created using the **current** `contacts` array value. The issue is that subsequent renders may not pick up the new contact if there's a timing issue.

### Fix: Use Functional State Update

Change from:
```tsx
setContacts([...contacts, newContact]);
```

To:
```tsx
setContacts(prev => [...prev, newContact]);
```

This ensures we always work with the latest state value, regardless of React's batching behavior.

### Files to Modify

| File | Change |
|------|--------|
| `src/pages/PrepareCard.tsx` | Use functional state update pattern in `goNext()` |

### Code Change

```tsx
// Line 57 - change:
setContacts([...contacts, newContact]);

// To:
setContacts(prev => [...prev, newContact]);
```

---

## Issue 2: Add Subheadline to Homepage

Add a clear, action-oriented subheadline below "STAY READY":

**Text:** "Know what to say if ICE comes to your door, car, or workplace."

### Placement

```text
┌────────────────────────────┐
│        STAY                │
│        READY               │
│                            │
│  Know what to say if ICE   │  ← NEW subheadline
│  comes to your door, car,  │
│  or workplace.             │
│                            │
│  ┌──────────────────────┐  │
│  │ Prepare My Card      │  │
│  └──────────────────────┘  │
└────────────────────────────┘
```

### Styling

- `text-base` or `text-sm` (subtle, not competing with headline)
- `text-muted-foreground` (secondary color)
- `text-center`
- Tight margin below headline (`mt-4`)

---

## Issue 3: Add "Know Your Rights" Back to Homepage

### Design Options

Based on the editorial brutalist aesthetic, here are three approaches:

**Option A: Small Uppercase Eyebrow (Recommended)**
Position a small, uppercase label ABOVE the main headline. This is a common editorial pattern.

```text
┌────────────────────────────┐
│     KNOW YOUR RIGHTS       │  ← tiny uppercase eyebrow
│        STAY                │
│        READY               │
│                            │
│  Know what to say if ICE   │
│  comes to your door...     │
└────────────────────────────┘
```

Styling:
- `text-[10px]` or `text-xs`
- `uppercase tracking-[0.3em]`
- `text-muted-foreground`
- Acts as a category/brand label without competing with headline

**Option B: Handwritten Script Accent**
Use a handwritten-style font positioned as an accent element, floating at an angle.

```text
┌────────────────────────────┐
│    ✎ Know your rights      │  ← script font, rotated -3deg
│        STAY                │
│        READY               │
└────────────────────────────┘
```

This creates visual interest but requires adding a script font (Caveat, Kalam, etc.)

**Option C: Integrated as Part of Headline**
Make it part of the stacked headline in a smaller weight:

```text
┌────────────────────────────┐
│    Know Your Rights        │  ← smaller, lighter weight
│        STAY                │
│        READY               │
└────────────────────────────┘
```

### My Recommendation: Option A

The small uppercase eyebrow label maintains the clean brutalist aesthetic while establishing "Know Your Rights" as the brand identity. It's:
- Minimal and unobtrusive
- Common in editorial/magazine design
- Easy to implement with existing font stack
- Won't compete with the powerful stacked headline

---

## Summary of Changes

| File | Changes |
|------|---------|
| `src/pages/PrepareCard.tsx` | Fix state update to use functional pattern |
| `src/pages/Index.tsx` | Add "KNOW YOUR RIGHTS" eyebrow + subheadline |

---

## Final Homepage Layout

```text
┌──────────────────────────────────┐
│         KNOW YOUR RIGHTS         │  ← 10px, uppercase, tracking wide
│             STAY                 │  ← Anton headline (large)
│             READY                │
│                                  │
│    Know what to say if ICE       │  ← text-sm, muted
│    comes to your door, car,      │
│    or workplace.                 │
│                                  │
│  ┌────────────────────────────┐  │
│  │    Prepare My Card         │  │
│  └────────────────────────────┘  │
│  ┌────────────────────────────┐  │
│  │    Review My Rights        │  │
│  └────────────────────────────┘  │
│  ┌────────────────────────────┐  │
│  │    Help Your Community     │  │
│  └────────────────────────────┘  │
│                                  │
│  ─────────────────────────────   │
│  STAY READY TIPS                 │
│  ...                             │
└──────────────────────────────────┘
```
