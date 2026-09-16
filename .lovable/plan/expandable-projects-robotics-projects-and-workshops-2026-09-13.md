# Expandable Projects, Robotics Projects, and Workshops

## What will change

- Finish the compact expand/collapse chevron on every individual project card, with details open by default.
- Add **Robo Soccer** immediately after Personalized Electronic Door Lock.
  - Mention participation and prize wins at IIT Delhi 2025 and IIT Roorkee 2026.
- Add **Robo Hockey** immediately after Robo Soccer.
  - Mention participation and prize wins at Technoxian 2025.
- Add a dedicated **Workshops** section directly after Featured Projects and before the résumé.
  - Match the existing terminal visual style.
  - Prepare workshop entries with clear video areas so uploaded workshop videos can be added later.
  - Use the existing résumé facts for robotic-arm and RC-car workshops without inventing dates or media.

## Technical details

- Extend the existing standard and IISc research cards with animated, accessible chevron controls.
- Keep all content expanded on first load and preserve the current media galleries and modal behavior.
- Add Robo Soccer and Robo Hockey to the existing project data and Embedded Systems filtering.
- Create a focused Workshops section component and render it after the Projects section.
- Validate desktop and mobile layouts, filter behavior, card toggles, and current diagnostics.

## Assumption

The IIT Delhi and IIT Roorkee results belong to Robo Soccer; the Technoxian result belongs to Robo Hockey. Videos will remain as ready-to-fill areas until workshop media is provided.
