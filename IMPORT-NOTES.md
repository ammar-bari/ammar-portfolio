# Local import notes

Imported from ammar-portfolio.zip on 2026-09-15.

- Recovered all 18 external media files referenced by the current source from the supplied Lovable preview. Each downloaded file matched the byte size recorded in its asset manifest.
- Stored recovered media in public/media and changed the corresponding asset JSON URLs to /media/... for local use.
- Three unused asset manifests still point to Lovable: ammar-headshot.jpg, door-lock-poster.jpg, and uwb-localisation-poster.jpg. Their actual files were not recovered; they are not referenced by current source code.
- ContactSection currently only displays a success state and clears the form. It does not deliver messages.
- Google Fonts and external social/demo links still require internet access.
- Reconciled package-lock.json with package.json because the exported lockfile omitted required peer dependencies.

## Run with Node.js and npm installed

    npm ci
    npm run dev -- --host 127.0.0.1

## Production build

    npm run build

The original ZIP on the Desktop is unchanged. No changes were published to Lovable.

## Validation

Production build passed. All 18 referenced recovered media files passed local HTTP size checks. Headshot rendered and the IR demo was checked in the browser. Vite reports an advisory about the main JavaScript bundle exceeding 500 kB; optimization is separate work.

## Resume and presentation updates

Replaced the CV download with the user-supplied 30Jul_cv (1).pdf (byte-identical copy). Both resume views share content summarized from that CV, including ASV, technical skills, awards and leadership. The Visual view uses section navigation and an experience timeline; Terminal supports section commands, help and whoami. Replaced research posters with selected video frames and labeled preview cards. Research text flows below media, with tags and actions across the card footer. Production build and TypeScript checks passed; browser checks covered commands, section switching, narrow-screen layout and UWB playback.
