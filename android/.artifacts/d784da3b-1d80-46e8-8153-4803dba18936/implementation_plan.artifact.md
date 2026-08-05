# Remove Download Option in App Only

The user wants to hide the "Download APK" section and the corresponding page when the application is running as a native Android app (via Capacitor), but keep it visible when viewed as a website.

## User Review Required

> [!NOTE]
> I will use the `Capacitor.isNativePlatform()` check to conditionally render these sections. This ensures that the download option is only hidden when the app is installed and running natively.

## Proposed Changes

### [Component] [APKDownloadSection.tsx](file:///C:/Users/vishn/Desktop/SLV v3/src/components/home/APKDownloadSection.tsx)
- Import `Capacitor` from `@capacitor/core`.
- Add a check at the beginning of the component: `if (Capacitor.isNativePlatform()) return null;`.
- This will hide the entire "Take SLV Marine everywhere you go" section in the app.

### [Page] [DownloadAppPage.tsx](file:///C:/Users/vishn/Desktop/SLV v3/src/pages/DownloadAppPage.tsx)
- Import `Capacitor` from `@capacitor/core` and `Navigate` from `react-router-dom`.
- If `Capacitor.isNativePlatform()` is true, redirect the user to the home page or show a message. Redirecting to home (`/`) is cleaner.

## Verification Plan

### Automated Tests
- I will verify that the code compiles without errors.

### Manual Verification
- The user should run the app on an Android device/emulator and verify the "Download" section is gone.
- The user should open the website in a browser and verify the "Download" section is still there.
