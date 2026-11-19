# muruhukyejacob.github.io

Personal professional website of **Muruhukye Jacob** — biostatistician, climate and health researcher, lecturer and statistical consultant (Kampala, Uganda).

Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Updating content

All content lives in `src/data/`, separate from the design:

| File | What it holds |
|---|---|
| `site.ts` | Name, description, profile links (add Google Scholar / ResearchGate here), headline stats, research interests, navigation |
| `publications.ts` | Publications and manuscripts under review |
| `career.ts` | Employment, field assignments, education, certificates, milestones |
| `work.ts` | Projects, services, teaching, skills, photo gallery |

Photos go in `src/assets/photos/` as `.jpg` and are referenced by file name (without extension). They are resized and converted to WebP automatically at build time.

The downloadable CV is `public/Muruhukye_Jacob_CV.pdf`. It is generated from the `/cv/` page (print to PDF, A4) and deliberately omits phone numbers and referee details.

### Adding a publication

Copy an entry in `src/data/publications.ts`, edit the fields, and keep the full author list in published order. Use `type: 'under-review'` only for submitted work — never list it as published.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run check-links
```

## Deployment

Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`).
One-time setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

For larger changes, work on a branch and open a pull request; the site updates when it is merged.

### Custom domain (optional)

1. Buy the domain and add DNS records pointing to GitHub Pages (four `A` records for the apex, or a `CNAME` to `muruhukyejacob.github.io` for `www`).
2. Create `public/CNAME` containing the domain, e.g. `www.example.com`.
3. Change `site` in `astro.config.mjs`, `url` in `src/data/site.ts` and the sitemap line in `public/robots.txt`.
4. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS**.

## Search engines

The site ships with a sitemap (`/sitemap-index.xml`), `robots.txt`, canonical URLs, Open Graph tags and Schema.org `Person` and `ScholarlyArticle` data. After the first deployment, add the site to [Google Search Console](https://search.google.com/search-console) (URL-prefix property, HTML-tag verification) and submit the sitemap. Adding the website URL to ORCID, LinkedIn and GitHub profiles also helps discovery.
