

## Fixes and Enhancements for Card Flow

Based on my code review, I've identified all the issues and will implement the following changes:

### 1. Emergency Contacts on Card - Already Working

Good news: The emergency contacts section **is already implemented** in `RightsCard.tsx` (lines 186-217). If contacts aren't appearing, it may be a display or data passing issue. I'll verify the card is receiving the contacts correctly.

### 2. Phone Number Validation - Already Working

The phone validation is **already implemented** in `EmergencyContactForm.tsx` (lines 11-18). It validates:
- Minimum 10 digits (US phone numbers)
- Maximum 15 digits (international)
- Formats display as `(XXX) XXX-XXXX` for 10-digit numbers

### 3. Update Document Types for ICE Context

Current document types include some that aren't relevant for immigration purposes. I'll update `src/types/card.ts` to use immigration-relevant documents:

**Current types:**
- Passport, Driver's License, State ID, Work Permit, Green Card, Other

**Updated types:**
- Green Card (Permanent Resident Card)
- Work Permit (EAD)
- Visa / I-94
- DACA Approval Notice
- TPS Card
- Passport (with visa)
- Other

### 4. Final Screen - Replace Buttons

**Current buttons on card screen:**
- Save to Phone
- Share
- Start Over

**New buttons:**
- Download Image (primary)
- Review My Rights (navigates to `/review`)
- Start Over (subtle link)

### 5. Add Language Selector to Review Rights Flow

Add a language selector dropdown or modal at the top of the Review Rights page so users can switch languages before reading the content.

---

## Technical Changes

### File: `src/types/card.ts`
- Update `DocumentType` to include immigration-relevant document types
- Update `documentLabels` to match new types

### File: `src/components/DocumentForm.tsx`
- Update `documentOptions` array with new document types

### File: `src/pages/PrepareCard.tsx`
- Replace "Share" button with "Review My Rights" button
- Add navigation to `/review` when clicked
- Keep Download Image as primary action

### File: `src/pages/ReviewRights.tsx`
- Import `LanguageSelector` component
- Add language selector UI at the top of the page (either inline buttons or a dropdown)
- Allow users to switch language before reading content

### File: `src/contexts/LanguageContext.tsx`
- Add new translation key for "Review My Rights" button label on card screen

