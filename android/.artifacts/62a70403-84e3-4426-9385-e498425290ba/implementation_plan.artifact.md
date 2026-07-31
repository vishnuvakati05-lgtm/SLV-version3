# Implementation Plan - Android Build Modernization & Restoration

The goal is to modernize the Android build system as previously proposed and restore the app to a working state by reverting the Infrastructure removal (since the user requested to "revert to that part").

## User Review Required

> [!IMPORTANT]
> This plan will restore the **Infrastructure** page and then proceed to upgrade the entire build system to **Kotlin DSL** and **Version Catalog**. This will ensure the app is both functional and follows modern best practices.

## Proposed Changes

### 1. Restoration of Infrastructure Page
- Re-create [InfrastructurePage.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/pages/InfrastructurePage.tsx).
- Update [App.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/App.tsx) with route and lazy import.
- Restore navigation links in [Header.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/components/layout/Header.tsx) and [Footer.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/components/layout/Footer.tsx).
- Re-add the "Infrastructure" category and images to [GalleryPage.tsx](file:///C:/Users/vishn/Desktop/SLV%20v3/src/pages/GalleryPage.tsx).

### 2. Build System Modernization
#### [NEW] [libs.versions.toml](file:///C:/Users/vishn/Desktop/SLV%20v3/android/gradle/libs.versions.toml)
Centralize all dependency versions and plugin definitions.

#### [NEW] [build.gradle.kts](file:///C:/Users/vishn/Desktop/SLV%20v3/android/build.gradle.kts) (Root)
Migrate the top-level build file to Kotlin DSL.

#### [NEW] [settings.gradle.kts](file:///C:/Users/vishn/Desktop/SLV%20v3/android/settings.gradle.kts)
Migrate settings to Kotlin DSL and configure the Version Catalog.

#### [NEW] [build.gradle.kts](file:///C:/Users/vishn/Desktop/SLV%20v3/android/app/build.gradle.kts) (App)
Migrate the app module build file to Kotlin DSL, utilizing the Version Catalog.

#### [DELETE] [build.gradle](file:///C:/Users/vishn/Desktop/SLV%20v3/android/build.gradle)
#### [DELETE] [settings.gradle](file:///C:/Users/vishn/Desktop/SLV%20v3/android/settings.gradle)
#### [DELETE] [app/build.gradle](file:///C:/Users/vishn/Desktop/SLV%20v3/android/app/build.gradle)
#### [DELETE] [variables.gradle](file:///C:/Users/vishn/Desktop/SLV%20v3/android/variables.gradle)

### 3. App Fixes
- Run `npm run build` and `npx cap sync android` to ensure the web assets are correctly bundled and synced to the Android project.
- Verify the splash screen and initial load issues.

## Verification Plan

### Automated Tests
- `./gradlew assembleDebug` to verify the build.
- `./gradlew lint` to check for any configuration errors.

### Manual Verification
- Deploy to emulator/device.
- Verify "Infrastructure" page is accessible.
- Verify overall app navigation and performance.
