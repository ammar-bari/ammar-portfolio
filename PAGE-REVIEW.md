# Portfolio review — 16 September 2026

## Fixed
- Hero and search/social descriptions now identify Electrical Engineering as the degree, consistent with the resume.
- About text now uses shorter paragraphs; removed unsupported claims about CAN-bus debugging and open-source contributions.
- Simplified underwater, ROS, UWB, pump and orthopedic project descriptions while retaining the named tools and measured results.
- Used the resume as the source of truth after user confirmation: removed unspecified soccer/hockey prize claims and corrected SEA 5.0 to eight thrusters.
- Removed claims of medical-standard compliance and improved leak prevention that were not substantiated by the supplied resume.
- Corrected the skills categories: Git, Linux and Docker are development tools, not programming languages.
- Added Product Design as a filter for the orthopedic device instead of classifying it as Embedded Systems.
- Improved mobile workshop heading wrapping, badge wrapping, terminal line wrapping and navigation anchor spacing.
- Reduced background code density and opacity so it competes less with body text.
- Added accessible mobile-menu labels and state, contact field labels/autocomplete, and media-viewer control names.
- Media viewer now locks background scrolling, manages keyboard focus, restores focus on close, and supports inline mobile video. Reopening starts at the selected item.
- Cleaned up the hero typing timer and added reduced-motion CSS for decorative animations.
- Removed Lovable social-preview attribution and generic preview images.

## Still needs input or deployment work
1. Contact submission remains disabled because VITE_CONTACT_ENDPOINT is not configured. Direct delivery cannot be validated until the public form-service endpoint is supplied. A working email link is shown next to the notice.
2. The pump prototype photo shows an Arduino Uno; the resume describes ESP32. Confirm whether this is an earlier prototype. The photo caption now avoids naming the wrong board.
3. The portfolio remains a local preview. A public deployment and its final URL are still needed before sharing; a custom social-sharing image can then be added.
4. Large videos and the approximately 523 kB JavaScript bundle may affect slower connections. Build reports a bundle-size advisory and stale Browserslist data; these did not prevent the build.
5. Event badges remain at the underwater group level where the exact vehicle-to-award mapping is not fully specified. No new award assignments were invented.

## Validation
- TypeScript and ESLint passed for the changed components.
- Production build passed (bundle-size/Browserslist advisories remain).
- All 47 referenced local media/PDF paths exist; three unused legacy asset manifests were excluded.
- Downloadable CV matches the supplied PDF byte for byte.
- Browser checks: no missing section anchors; no document-wide horizontal overflow at 390 px in the mobile check; Product Design filter; resume skills command; video readyState 4 with no media error; modal Escape closing and focus restoration.
- External profile ownership, every video end-to-end, real message delivery, and all browser/device combinations were not verified.
