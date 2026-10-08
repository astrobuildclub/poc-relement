# AGENTS.md: Relement (POC)

Gearchiveerd project: geen nieuwe features.

Instructies voor AI-agents en ontwikkelaars. Lees eerst `README.md` en `CHANGELOG.md`.

## Project
- Klant: Relement · Bedrijf: All This · SLA: Nee
- Status: archief, niet doorgegaan (oktober 2026)
- Stack: Astro 5, Tailwind 3, SCSS, GSAP, Lenis, Node 22 (zie `.nvmrc`)
- CMS: geen (content in Markdown onder `src/content/`)

## Werkwijze
- Niets verwijderen. Niet pushen naar `main`. Geen force-push.
- Alleen documentatie of archiefonderhoud, op een branch en via een PR.
- Commit nooit `.env`-bestanden of tokens.
- Bij een noodzakelijke wijziging: een regel onder de nieuwste datum in `CHANGELOG.md`.

## Conventies
- Geen nieuwe pagina’s, features of dependencies.
- Site blijft op Netlify (`relement`) met `X-Robots-Tag: noindex, nofollow`.
- Laatste WIP vóór archief: branch `archive/laatste-stand`.
- Afbeeldingen: geen vastgelegd profiel volgens `~/Code/_standards/IMAGES.md` (TODO, niet meer in te voeren).
