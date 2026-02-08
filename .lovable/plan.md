
# Fix Card Content Display & Mobile Photo Download

## Issues Identified

### Issue 1: Document Number Not Displayed
The `RightsCard` component receives `documentInfo.number` but never renders it. The card only shows the document type label, ignoring the optional document number field.

### Issue 2: Emergency Contacts Not Showing
After tracing the data flow, the logic appears correct. The most likely cause is that the contacts data is being passed correctly, but the `html-to-image` library may have rendering issues with the card when it's scaled down in the preview. The contacts should render when data exists.

However, there may be an issue where the user adds contacts but the state isn't being captured correctly, or the card preview isn't updating. Need to ensure the card ref captures the full content.

### Issue 3: Mobile Photo Album Download
The current download method creates a data URL and triggers an anchor click. On iOS/Android, this typically saves to Files, not Photos. To save directly to the photo album on mobile:
- Use `navigator.share()` with a File object (already partially implemented)
- On iOS, sharing an image file will prompt "Save Image" option
- Fallback to standard download for unsupported browsers

---

## Fixes

### Fix 1: Add Document Number to Card

**File:** `src/components/RightsCard.tsx`

Add the document number below the document type when provided:

```text
Current:
┌────────────────────────┐
│ DOCUMENT TYPE          │
│ Green Card             │
└────────────────────────┘

Updated:
┌────────────────────────┐
│ DOCUMENT TYPE          │
│ Green Card             │
│ A-123456789           │  ← NEW (if number provided)
└────────────────────────┘
```

Add after line 85:
```tsx
{documentInfo.number && (
  <p style={{ fontSize: '28px', opacity: 0.7, marginTop: '4px' }}>
    {documentInfo.number}
  </p>
)}
```

---

### Fix 2: Improve Mobile Download for Photo Album

**File:** `src/pages/PrepareCard.tsx`

Update the `saveCard` function to:
1. Check if Web Share API is available and supports files
2. If yes, use `navigator.share()` with the image file (iOS will show "Save Image" option)
3. If no, fall back to standard download

```typescript
const saveCard = async () => {
  if (!cardRef.current) return;

  try {
    const dataUrl = await toPng(cardRef.current, {
      quality: 1,
      pixelRatio: 2,
    });

    // Convert to blob/file for sharing
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], 'know-your-rights-card.png', { 
      type: 'image/png' 
    });

    // Try Web Share API first (works better on mobile for Photos)
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'Know Your Rights Card',
      });
      toast.success('Card shared successfully!');
    } else {
      // Fallback: standard download
      const link = document.createElement('a');
      link.download = 'know-your-rights-card.png';
      link.href = dataUrl;
      link.click();
      toast.success('Card saved to your device!');
    }
  } catch (error) {
    // Handle user cancellation gracefully
    if ((error as Error).name === 'AbortError') {
      return; // User cancelled, no error message needed
    }
    console.error('Failed to save card:', error);
    toast.error('Failed to save card. Please try again.');
  }
};
```

---

### Fix 3: Ensure Card Renders Off-Screen for Capture

The card is currently rendered inside a scaled-down preview container. The `html-to-image` library should capture the full-size card, but the transform scaling might cause issues.

**File:** `src/pages/PrepareCard.tsx`

Add a hidden full-size card for image capture, separate from the preview:

```tsx
{/* Hidden card for image generation - positioned off-screen */}
<div 
  style={{
    position: 'absolute',
    left: '-9999px',
    top: 0,
  }}
>
  <RightsCard 
    ref={cardRef} 
    status={status} 
    documentInfo={documentInfo} 
    contacts={contacts} 
  />
</div>

{/* Visible preview (scaled) */}
<div style={{ transform: 'scale(0.152)', ... }}>
  <RightsCard status={status} documentInfo={documentInfo} contacts={contacts} />
</div>
```

This ensures:
- The preview shows a scaled version for visual feedback
- The capture ref points to a full-size, unscaled version
- No transform interference with `html-to-image`

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/RightsCard.tsx` | Add document number display |
| `src/pages/PrepareCard.tsx` | Mobile-friendly download + separate capture element |

---

## Technical Notes

- **Web Share API**: Supported on iOS Safari 15+, Chrome for Android 61+. On iOS, sharing an image file presents "Save Image" option which saves to Photos.
- **`html-to-image`**: Works best on unscaled, visible elements. Using `position: absolute; left: -9999px` keeps element in DOM but off-screen.
- **User cancellation**: When user dismisses share sheet, it throws an `AbortError` which we handle silently.
