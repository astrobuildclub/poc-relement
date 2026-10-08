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

- Astro 5 · Node 22 (`.nvmrc`) · static
- Styling: Tailwind 3, SCSS (Utopia) · Fonts: projectfonts
- Animatie: GSAP + ScrollTrigger, Lenis
- Consent: geen · Hosting: Netlify

## Lokaal starten

```bash
nvm use
npm install
npm run dev            # http://localhost:4321
```

Overige scripts: `npm run build`, `npm run preview`, `npm run astro …`.

Controle oktober 2026, Node 22: `npm install` en `npm run build` slagen.

### Environment-variabelen

Geen. Er is geen `.env.example`.

## Structuur

```
public/         Favicon, dummy-media
src/
  components/   Button, homepage-secties
  content/      Markdown (homepage, careers, news)
  layouts/      BaseLayout
  pages/        Homepage + placeholder-routes (products, company, …)
  scripts/      Client-side scripts
  styles/       Tokens, layout, base
```

## Content en CMS

Geen CMS. Homepage-copy staat in Markdown onder `src/content/homepage/` en wordt via Astro Content Collections geladen. Dummy-video’s en -beeld staan in `public/`.

Laatste niet-gemergde WIP (secties, layout, dummy-video’s 03/04) staat op branch `archive/laatste-stand`.

## Privacy, toegankelijkheid en SEO

- Consent: geen tracking ingericht
- WCAG: semantische opzet, geen formele 2.2 AA-audit
- Archief: `X-Robots-Tag: noindex, nofollow` in `netlify.toml`

## Deploy

- `main` → productie op Netlify (`relement`) · pull requests → deploy preview
- Werkwijze gold: branch → PR → preview → merge. Geen nieuwe features meer

## Bekende issues en afspraken

- Gearchiveerd in oktober 2026. Project niet doorgegaan. Geen nieuwe features.
- `npm audit` meldt kwetsbaarheden. Niet opgelost.
- Build waarschuwt dat browserslist-/caniuse-data verouderd is. Niet opgelost.
- Laatste WIP vóór archief: branch `archive/laatste-stand` (niet op `main`).

---

Eigenaar: All This · Wat er gedaan is: zie [`CHANGELOG.md`](CHANGELOG.md) · Werkafspraken voor ontwikkelaars en AI-agents: [`AGENTS.md`](AGENTS.md)
