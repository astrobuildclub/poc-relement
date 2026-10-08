# relement (POC)

> Conceptwebsite voor Relement (biobased aromatische chemicaliën): homepage en productpagina’s als Astro-POC. Het project is niet doorgegaan.

| | |
|---|---|
| **Klant** | Relement |
| **Bedrijf** | All This |
| **Status** | Archief · niet doorgegaan (okt 2026) |
| **SLA** | Nee |
| **Live** | Was concept op [relement.netlify.app](https://relement.netlify.app). Geen custom domain |
| **Netlify** | team All This, site `relement` → [relement.netlify.app](https://relement.netlify.app) |
| **CMS** | geen (content in Markdown onder `src/content/`) |
| **Repo** | [github.com/astrobuildclub/poc-relement](https://github.com/astrobuildclub/poc-relement) |
| **Notion** | TODO |

## Stack

- Astro 7 · Node ≥22.12 (`.nvmrc`) · static
- Styling: Tailwind 4 (`@tailwindcss/vite`), SCSS (Utopia) · Fonts: projectfonts
- Animatie: GSAP + ScrollTrigger, Lenis · View transitions (`ClientRouter` + PageProgress)
- Consent: geen · Hosting: Netlify

## Lokaal starten

```bash
nvm use
npm install
npm run dev            # http://localhost:4321
```

Overige scripts: `npm run build`, `npm run preview`, `npm run astro …`.

Controle oktober 2026, Node ≥22.12: `npm install` en `npm run build` slagen; `npm audit` is schoon.

### Environment-variabelen

Geen. Er is geen `.env.example`.

## Structuur

```
public/         Favicon, dummy-media
src/
  components/   Button, PageProgress, homepage-secties
  content/      Markdown (homepage, careers, news)
  layouts/      BaseLayout
  lib/          page-transitions
  pages/        Homepage + placeholder-routes (products, company, …)
  scripts/      Client-side scripts (Lenis/GSAP)
  styles/       Tokens, layout, base, Tailwind entry
```

## Content en CMS

Geen CMS. Homepage-copy staat in Markdown onder `src/content/homepage/` en wordt via Astro Content Collections geladen. Dummy-video’s en -beeld staan in `public/`.

## Privacy, toegankelijkheid en SEO

- Consent: geen tracking ingericht
- WCAG: semantische opzet, geen formele 2.2 AA-audit
- Archief: `X-Robots-Tag: noindex, nofollow` in `netlify.toml`

## Deploy

- `main` → productie op Netlify (`relement`) · pull requests → deploy preview
- Werkwijze gold: branch → PR → preview → merge. Geen nieuwe features meer

## Bekende issues en afspraken

- Gearchiveerd in oktober 2026. Project niet doorgegaan. Geen nieuwe features (wel security/onderhoud).
- Laatste WIP vóór archief is gemerged naar `main`.

---

Eigenaar: All This · Wat er gedaan is: zie [`CHANGELOG.md`](CHANGELOG.md) · Werkafspraken voor ontwikkelaars en AI-agents: [`AGENTS.md`](AGENTS.md)
