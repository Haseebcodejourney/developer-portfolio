# Deploy without GitHub Pages

The app is built with **Vite**. If you **do not** set `VITE_BASE_PATH`, assets use **`/`** as the base, which matches **Netlify**, **Vercel**, and **Cloudflare Pages** when the site is served from the domain root.

Do **not** set `VITE_BASE_PATH` on these hosts unless you deploy under a subpath.

---

## Netlify (recommended if GitHub Pages fails)

### Option A — Deploy from GitHub Actions (no Netlify “Import” UI)

This repo includes **`.github/workflows/deploy-netlify.yml`**. It runs on every push to **`main`** or **`master`**.

1. **Create a Netlify personal access token**  
   [Netlify User settings → Applications](https://app.netlify.com/user/applications) → **New access token** → copy it.

2. **Create or pick a Netlify site** (can be an empty placeholder) and copy its **Site ID**  
   **Site configuration → Site details → Site information → Site ID**.

3. In **GitHub** → your **`developer-portfolio`** repo → **Settings → Secrets and variables → Actions** → **New repository secret**:
   - `NETLIFY_AUTH_TOKEN` = the token from step 1  
   - `NETLIFY_SITE_ID` = the Site ID from step 2  

4. **Push** to `main` (or run the workflow manually under **Actions**). The site updates from **`dist/`** at the URL shown in Netlify for that site.

### Option B — Netlify “Import from Git” (no GitHub secrets)

1. Sign in at [netlify.com](https://www.netlify.com/).
2. **Add new site** → **Import an existing project** → connect **GitHub** and pick **`developer-portfolio`**.
3. Netlify reads **`netlify.toml`** automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Your site will be something like **`https://<random-name>.netlify.app`**.
5. Optional: **Site settings → Domain management** → add a custom domain.

---

## Vercel

1. Sign in at [vercel.com](https://vercel.com/).
2. **Add New…** → **Project** → import **`developer-portfolio`** from GitHub.
3. Vercel detects **Vite**; **`vercel.json`** sets build output to **`dist`**.
4. Deploy. You get **`https://<project>.vercel.app`**.

---

## Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repo, then set:
   - **Framework preset:** Vite (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. **Environment variables:** none required for a normal root deploy.
4. Save and deploy. URL will be **`https://<project>.pages.dev`**.

---

## One-off static upload (any static host)

```bash
npm ci
npm run build
```

Upload the **`dist`** folder contents to any host that serves static files (S3 + CloudFront, Azure Static Web Apps, etc.).

---

## GitHub Pages (subpath) vs these hosts (root)

- **GitHub Pages** project sites live under **`/<repo-name>/`**, so CI sets **`VITE_BASE_PATH=/developer-portfolio/`** (see `.github/workflows`).
- **Netlify / Vercel / Cloudflare** at the default URL use **`/`** — leave **`VITE_BASE_PATH`** unset in their build settings.
