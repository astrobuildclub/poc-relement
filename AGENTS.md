# AGENTS.md: Relement (POC)

Gearchiveerd project: geen nieuwe features.

Instructies voor AI-agents en ontwikkelaars. Lees eerst `README.md` en `CHANGELOG.md`.

## Project
- Klant: Relement · Bedrijf: All This · SLA: Nee
- Status: archief, niet doorgegaan (oktober 2026)
- Stack: Astro 7, Tailwind 4 (`@tailwindcss/vite`), SCSS, GSAP, Lenis, Node ≥22.12 (zie `.nvmrc`)
- CMS: geen (content in Markdown onder `src/content/`)
- Transities: `<ClientRouter />` + `PageProgress` (zie `~/Code/_standards/TRANSITIONS.md`)

## Werkwijze
- Niets verwijderen. Niet pushen naar `main`. Geen force-push.
- Alleen documentatie of archiefonderhoud, op een branch en via een PR.
- Commit nooit `.env`-bestanden of tokens.
- Bij een noodzakelijke wijziging: een regel onder de nieuwste datum in `CHANGELOG.md`.

## Conventies
- Geen nieuwe features of dependencies (behalve security/onderhoud). Placeholder-routes mogen minimale content krijgen; nieuwe routes alleen als ze op relement.eu bestaan.
- Site blijft op Netlify (`relement`) met `X-Robots-Tag: noindex, nofollow`.
- Laatste WIP vóór archief is gemerged naar `main` (was branch `archive/laatste-stand`).
- Afbeeldingen: geen vastgelegd profiel volgens `~/Code/_standards/IMAGES.md` (TODO, niet meer in te voeren).
