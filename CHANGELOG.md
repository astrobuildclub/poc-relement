# Changelog

Alle noemenswaardige wijzigingen aan dit project. Nieuwste bovenaan.
Format gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/).

Categorieën: **Toegevoegd**, **Gewijzigd**, **Opgelost**, **Verwijderd**, **Beveiliging**, **Onderhoud**.

## [2026-10-08]

### Toegevoegd
- Minimale content voor company, products/bio-mpa, careers, agenda, contact en press-kit (bron: relement.eu).

### Beveiliging
- Dependencies bijgewerkt: Astro 5 → 7.3.7, Tailwind 3 → 4 (`@tailwindcss/vite`); `npm audit` schoon.

### Opgelost
- Tailwind 4: unlayered `* { padding/margin: 0 }` in `_reset.scss` overschreef utilities in `@layer`; reset ingekort. `font-display` toegevoegd aan `@theme`.

### Toegevoegd
- View transitions: `<ClientRouter />`, `PageProgress` + `page-transitions.ts` (standaard `TRANSITIONS.md`).
- GSAP/Lenis aangesloten op `astro:before-swap` / `page:transition-end` voor navigatie.

### Onderhoud
- Gearchiveerd. Het project is niet doorgegaan.
- Documentatie bijgewerkt (README, CHANGELOG, AGENTS, CLAUDE); Node ≥22.12 via `.nvmrc` en `netlify.toml`; noindex/nofollow-header.
- Laatste WIP (secties, layout, dummy-video’s) gemerged naar `main`.

## [2026-01]

### Toegevoegd
- Initiële Astro-site: layout, homepage-secties, content collections, Tailwind/SCSS, GSAP/Lenis.

### Gewijzigd
- Button-component: animatie, ghost text, opacity/scale/blur en duur bijgewerkt.
