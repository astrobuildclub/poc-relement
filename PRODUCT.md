# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are B2B decision-makers and evaluators in coatings, adhesives, and materials: people looking for biobased aromatic performance ingredients, samples, collaboration, or partnership context. Secondary audiences (careers, press, events) exist on the live site and are represented lightly in this POC, but they are not the primary job-to-be-done.

## Product Purpose

This site presents Relement — a Dutch company developing specialty biobased aromatic chemicals from non-food biomass — as a credible digital front door. Core jobs: explain the offer (especially bio MPA), support sample/contact interest, and convey company substance (origin, team, production status).

This repository is an All This concept/POC that did not continue as a live client build. Success for ongoing work is still a **credible client demo**: the site should look and behave like a believable Relement property, not a throwaway prototype — while remaining an archive (noindex, no new product scope).

## Positioning

Relement’s claim is specialty **biobased aromatics** with real performance (gloss, durability, scratch resistance, stability) from **non-edible biomass**, not “green for green’s sake.” Launching product **bio MPA** (3-methylphthalic anhydride) is the concrete proof point; a patented platform implies future molecules (e.g. bio HMA, bio MHHPA). Tagline territory already in use: “Adding the R element” / “All elements matter.”

## Operating Context

- Production reference: [relement.eu](https://www.relement.eu/) (Squarespace-era live site; POC routes map roughly: about→`/company`, bio-aromatics→`/products`, jobs→`/careers`).
- POC host: Netlify site `relement` → relement.netlify.app, `X-Robots-Tag: noindex, nofollow`.
- Agency: All This; client: Relement; no SLA.
- Content is Markdown collections under `src/content/` (no CMS). Contact/careers CTAs are mailto-based in the POC (no form backend).

## Capabilities and Constraints

**In scope (current POC):** static Astro site — homepage sections, company, products/bio-mpa, careers, news, press-kit, agenda, contact; ClientRouter + progress; GSAP/Lenis; header/footer.

**Constraints:**
- Archived: no new features or dependencies except security/maintenance; placeholder routes may receive minimal content; new routes only if they exist on relement.eu.
- Do not invent customers, testimonials, benchmarks, pricing, or claims beyond confirmed Relement/public copy.
- **Do not change content or structure casually** — prefer small, intentional edits (user directive, init 2026-10-08).
- No consent/tracking stack; no custom domain on the Netlify POC.
- Image profile per `IMAGES.md` was never locked (TODO; not to be introduced lightly).
- Open: Notion project link; real brand logo asset not in repo (wordmark text only).

## Brand Commitments

- Name: **Relement**
- Voice cues from existing copy: chemistry-serious, industrial, optimistic about renewable aromatics; English site language for this POC
- Phrases in use: “Adding the R element.”, “All elements matter.”
- No separate visual-world brief in PRODUCT.md (visual system lives in the incumbent implementation; DESIGN.md still absent)

## Evidence on Hand

- Live production copy/structure: relement.eu (company, products, careers, press kit, agenda, contact, news)
- POC content: `src/content/homepage/*`, `src/content/news/*`, `src/content/careers/index.md`
- Media: dummy video/image under `public/` (placeholders, not final brand assets)
- Docs: `README.md`, `AGENTS.md`, `CHANGELOG.md`
- **Must not fabricate:** customer logos, quotes, performance numbers, or press quotes not already present

## Product Principles

1. **Demo-credible, archive-disciplined** — look like a real Relement site without expanding product scope.
2. **Product-first storytelling** — bio MPA and sample/contact paths stay findable within seconds.
3. **Truth over invention** — only claims and assets grounded in Relement/public evidence.
4. **Change with intent** — no casual rewrites of copy, IA, or chrome; prefer minimal diffs.
5. **Light accessibility floor** — aim toward WCAG 2.2 AA where reasonable when touching UI; do not big-bang refactor for compliance alone.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA where reasonable** on surfaces we still change (focus, contrast, skip link, keyboard nav). No dedicated audit obligation or legal AA claim for the archive POC. Prefer incremental fixes over sweeping redesigns.
