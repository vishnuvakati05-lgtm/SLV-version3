# Implementation Plan - Infrastructure Removal and International Update

This plan outlines the steps to remove the "Infrastructure" section from the app, update the "Export Markets" data, and add a statement regarding international expansion. It also includes UI refinements for a smoother user experience.

## User Review Required

> [!IMPORTANT]
> - The "Infrastructure" page and all its references will be permanently removed.
> - The "Export Markets" page will be updated to reflect the new focus on international expansion.
> - Please confirm if there are specific new countries to be added to the list, or if only the international expansion statement is required for now.

## Proposed Changes

### Web Application Source (`src/`)

#### [DELETE] [InfrastructurePage.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/pages/InfrastructurePage.tsx)
- Remove the entire file as it is no longer needed.

#### [MODIFY] [App.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/App.tsx)
- Remove the import statement for `InfrastructurePage`.
- Remove the `<Route>` definition for `/infrastructure`.

#### [MODIFY] [Header.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/components/layout/Header.tsx)
- Remove "Infrastructure" from the `mobileLinks` array.

#### [MODIFY] [Footer.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/components/layout/Footer.tsx)
- Remove "Infrastructure" from the `quickLinks` array.

#### [MODIFY] [ExportMarketsPage.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/pages/ExportMarketsPage.tsx)
- Add a new section or banner stating: "We will soon be expanding our premium seafood exports internationally, reaching new markets across the globe."
- Update existing country cards or descriptions if necessary.
- Add smoother entrance animations for the new statement.

#### [MODIFY] [HeroSection.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/components/home/HeroSection.tsx)
- Update the "INDIA & NEPAL EXPORT FOCUS" badge and related text to include "International Expansion Coming Soon".
- Refine the hero headline to reflect the broader reach.

### UI Refinements

- Implement smoother page transitions in `App.tsx` using `AnimatePresence` and `motion` if needed.
- Enhance hover effects on all interactive elements (buttons, cards) for a more "smooth" feel.
- Ensure consistent spacing and typography across modified pages.

## Verification Plan

### Manual Verification
- Verify that the "Infrastructure" link is gone from the header (mobile) and footer.
- Verify that navigating to `/infrastructure` directly shows a fallback or nothing (as the route is removed).
- Check the "Export Markets" page for the new international expansion statement.
- Observe UI animations and transitions to ensure they are "smooth".
- Run the web project (`npm run dev` or equivalent) to verify changes in the browser.
- Deploy to Android (Capacitor) and verify on a real device/emulator.
