# Deployment

The site is a static Vite + React app. It is built into `dist/` and served from the
root of **https://infinitron.al** on a Plesk host. A GitHub Actions workflow
builds every change and uploads `main` to Plesk over FTP.

## How it works

```
push / PR ──► GitHub Actions: build job ──► (main only) deploy job ──► FTP ──► Plesk httpdocs/
              npm ci · lint · build          upload dist/ to server
```

The workflow lives in `.github/workflows/deploy.yml`.

| Event                                         | Lint + build | Deploy |
|-----------------------------------------------|:------------:|:------:|
| Pull request (any branch)                     |      ✅       |   —    |
| Push / merge to `main`                        |      ✅       |   ✅    |
| Manual run (Actions → Run workflow) on `main` |      ✅       |   ✅    |

- **build** installs dependencies with `npm ci`, runs `npm run lint` and
  `npm run build`, and stores `dist/` as a workflow artifact. If lint or the
  TypeScript check fails, nothing is deployed.
- **deploy** downloads that artifact and syncs it to the server with
  [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action). Only
  changed files are uploaded. The action keeps a `.ftp-deploy-sync-state.json`
  file on the server to track what is already there.
- Deploys run one at a time (`concurrency: deploy-production`), so two quick
  merges can't overwrite each other halfway through.

## Serving from the domain root

The app is served from `/`. The settings that control this:

- `vite.config.ts` sets `base: '/'`. All built asset URLs start with `/assets/…`.
- `src/main.tsx` sets `BrowserRouter basename={import.meta.env.BASE_URL}`, so the
  router follows the same base automatically.
- Files in `public/` are referenced with root paths (for example `/images/team/…`, `/favicon.svg`).

If the site ever has to live under a sub-path again, change `base` in
`vite.config.ts`. Everything else follows from it.

> Don't add a folder in `public/` with the same name as a page route (`team`,
> `projects`, `contact`). The server would find a real directory and return
> 403 instead of the app. That's why team photos live in `public/images/team/`.

## Client-side routing on Plesk

`public/.htaccess` is copied into `dist/` on every build. It:

1. Sends any URL that isn't a real file or folder (like `/team` or `/contact`) to
   `index.html`, so React Router can handle it. Refreshing or opening a deep
   link works.
2. Sends `Cache-Control: no-cache` for `index.html`, so visitors pick up a new deploy right away.
3. Caches the hashed files in `/assets/` for a year, which is safe because their names change whenever their content changes.

Plesk uses Apache with nginx in front by default, and `.htaccess` works there.
If the subscription is set to **nginx only** (Apache disabled), `.htaccess`
is ignored. In that case add this under **Websites & Domains → infinitron.al →
Apache & nginx Settings → Additional nginx directives**:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

## One-time setup

### 1. Plesk

1. Make sure the domain **infinitron.al** exists in Plesk and its document root
   is `httpdocs` (the default).
2. Get an FTP account under **Websites & Domains → FTP Access** with its
   **home directory set to `/`** (the subscription root, which contains
   `httpdocs/`). The workflow uploads to `/httpdocs/` by default, so no
   `FTP_SERVER_DIR` variable is needed.
   - If the account's home is ever changed to `/httpdocs` itself, set the
     variable `FTP_SERVER_DIR=/`. Otherwise files would land in `httpdocs/httpdocs/`.
3. Enable SSL/TLS for the domain (**SSL/TLS Certificates → Let's Encrypt**), so
   both the website and FTPS use a valid certificate.
4. Remove the default Plesk placeholder `index.html` from `httpdocs/`, or let the first deploy overwrite it.

### 2. GitHub secrets and variables

In the repository, open **Settings → Secrets and variables → Actions**.

**Secrets** (required):

| Name           | Example                         |
|----------------|---------------------------------|
| `FTP_SERVER`   | `infinitron.al` or the server's hostname/IP |
| `FTP_USERNAME` | the Plesk FTP user              |
| `FTP_PASSWORD` | that user's password            |

**Variables** (optional. The defaults are shown):

| Name             | Default      | When to change                                              |
|------------------|--------------|-------------------------------------------------------------|
| `FTP_SERVER_DIR` | `/httpdocs/` | `/` if the FTP user's home is `httpdocs` itself. Must end with `/` |
| `FTP_PROTOCOL`   | `ftps`       | `ftp` only if the server has no TLS (not recommended)        |
| `FTP_PORT`       | `21`         | if the host uses a non-standard port                        |

### 3. GitHub environment (optional but recommended)

The deploy job uses the `production` environment. GitHub creates it on the first run. Under **Settings → Environments → production** you can:

- limit deployments to the `main` branch,
- require a reviewer to approve each deploy,
- store the FTP secrets there instead of at the repository level.

### 4. Turn off GitHub Pages

This workflow replaced the old GitHub Pages deploy. Under **Settings → Pages**,
set the source to *None* so the old `…github.io/infinitron-landing/` copy
stops being served.

## Everyday workflow

1. Create a branch, commit, and open a pull request. CI lints and builds it.
2. Merge into `main`. The site is built and uploaded to infinitron.al automatically.
3. Follow the run under the repository's **Actions** tab. The deploy job shows each uploaded file.

To redeploy without a code change (for example after a failed upload), open
**Actions → CI / Deploy to Plesk → Run workflow** on `main`.

Before pushing, run the same checks locally:

```bash
npm ci
npm run lint
npm run build
npm run preview   # serves dist/ at http://localhost:4173/
```

## Manual deployment over FTP

Use this when GitHub Actions is unavailable or for a one-off upload.

1. Build locally:
   ```bash
   npm ci && npm run build
   ```
2. Connect with an FTP client (FileZilla, Cyberduck, or Plesk's **File Manager**):
   - Host: the `FTP_SERVER` value, port 21
   - Encryption: *Require explicit FTP over TLS*
   - User / password: the Plesk FTP account
3. Upload the **contents** of `dist/` into `httpdocs/`, not the `dist` folder
   itself. Make sure hidden files are shown so `.htaccess` gets uploaded too.
4. Delete old files from `httpdocs/assets/` that are no longer in `dist/assets/`. They're harmless but pile up.

After a manual upload, the CI's sync-state file no longer matches the
server. If the next automatic deploy skips files, delete
`httpdocs/.ftp-deploy-sync-state.json` and run the workflow again. It will then
upload everything.

## Troubleshooting

| Symptom | Likely cause |
|---------|--------------|
| Deploy job fails with a login/timeout error | Wrong `FTP_SERVER`/credentials, or the host doesn't support FTPS. Check the FTP user in Plesk and try `FTP_PROTOCOL=ftp` only to diagnose |
| Site shows the Plesk default page | Files went to the wrong folder. Check `FTP_SERVER_DIR` |
| Home works but `/team` or a refresh returns 404 | `.htaccess` missing on the server, or the host runs nginx only (see above) |
| `/team` returns 403 | A real `team/` folder exists in `httpdocs/`. Remove it (photos now live in `images/team/`) |
| Blank page, JS/CSS 404 in the console | Built with the wrong `base`. It must be `'/'` in `vite.config.ts` |
| Changes don't appear after deploy | Hard-refresh. If it persists, check the deploy job actually ran on `main` |
