# Attractive Exit Confirmation with "Thank You" Message

The goal is to replace the standard `window.confirm` exit dialog with a custom, "attractive" modal that includes a "Thank you for visiting" message and a "Visit again" call-to-action when a user attempts to exit the app from the Home page.

## User Review Required

> [!NOTE]
> The custom modal will only appear on the Home page (`/`) when the user performs a back gesture or presses the back button, as this is the primary way users exit a Capacitor app on Android.

## Proposed Changes

### [NEW] [ExitModal.tsx](file:///C:/Users/vishn/Desktop/SLV v3/src/components/layout/ExitModal.tsx)
- Create a new component using `framer-motion` for a smooth entry/exit animation.
- Design: Glassmorphism style with a dark overlay, matching the app's aesthetic.
- Text: "Thank you for visiting SLV Marine!" and "We hope to see you again. Visit us anytime for premium seafood exports."
- Buttons:
    - **Exit App**: Triggers the actual app exit.
    - **Stay**: Closes the modal and keeps the user in the app.

### [MODIFY] [App.tsx](file:///C:/Users/vishn/Desktop/SLV v3/src/App.tsx)
- Update `NativeRouterSync` to manage a `showExitModal` state.
- Replace `window.confirm` with `setShowExitModal(true)`.
- Render `<ExitModal />` inside `NativeRouterSync` using `<AnimatePresence />`.

## Verification Plan

### Manual Verification
1. Deploy the app to an Android device/emulator.
2. Navigate to any sub-page and press "Back". Verify it takes you to the Home page.
3. From the Home page, press "Back".
4. Verify the new "Thank you for visiting" modal appears with a smooth animation.
5. Click "Stay" and verify the modal closes.
6. Press "Back" again, then click "Exit App" and verify the app closes.
