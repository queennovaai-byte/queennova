# Queen Nova — Official Website

Static marketing + legal website for **Queen Nova**, a personal AI agent for life,
study and business. Built with **React 19 + Vite + Tailwind CSS v4**. No backend —
the entire site compiles into a static `dist/` folder that can be hosted free on
Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Pages

| Route      | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| `/`        | Product site: what Nova is, capabilities, how she works, Minions, integrations (TikTok), security, contact |
| `/terms`   | Terms of Service                                                |
| `/privacy` | Privacy Policy                                                  |

Clean URLs work out of the box on Netlify / Vercel / Cloudflare Pages thanks to
`public/_redirects` and `vercel.json` (SPA fallback to `index.html`).

## Editing the content

All wording is deliberately easy to change:

| What                                   | Where                          |
| -------------------------------------- | ------------------------------ |
| Contact email, site URL, legal dates   | `src/config/site.ts`           |
| Terms of Service text                  | `src/content/terms.ts`         |
| Privacy Policy text                    | `src/content/privacy.ts`       |
| Home page copy (sections, cards, hero) | `src/pages/Home.tsx`           |
| Navigation items                       | `src/lib/nav.ts`               |
| Favicon / logo mark                    | `public/favicon.svg`, `src/components/Logo.tsx` |
| Social share image                     | `public/og-image.jpg`          |

> **Before launch:** replace the placeholder email in `src/config/site.ts`
> (`support@queennova.app`) with the real support inbox, and update `siteUrl`
> to the final domain.

## Develop & build locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # local dev server with hot reload
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

The build inlines everything into a single `dist/index.html` — the whole site is
one self-contained file (plus static assets in `dist/`).

## Deploy (pick one — all free)

### Netlify (easiest)

1. Run `npm run build`.
2. Go to https://app.netlify.com/drop and drag the `dist/` folder in.
3. Done — clean URLs (`/terms`, `/privacy`) work immediately via `_redirects`.

### Vercel

1. Push the project to a GitHub repo.
2. https://vercel.com/new → import the repo (framework preset **Vite** — auto-detected).
3. Deploy. `vercel.json` handles the SPA rewrite automatically.

### Cloudflare Pages

1. Push to GitHub, then Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Build command: `npm run build` · Output directory: `dist`.
3. Deploy — `_redirects` is respected automatically.

### GitHub Pages

GitHub Pages needs two extra steps (it has no built-in SPA fallback):

```bash
# 1. Build with your repo name as the base path:
npx vite build --base=/YOUR-REPO-NAME/

# 2. Copy the fallback page so /terms and /privacy resolve:
cp dist/index.html dist/404.html

# 3. Serve the dist/ folder from the gh-pages branch (e.g. with the
#    peaceiris/actions-gh-pages action) and enable Pages in repo settings.
```

Prefer a custom domain? All four hosts support one for free — point the DNS, then
update `siteUrl` in `src/config/site.ts`.
