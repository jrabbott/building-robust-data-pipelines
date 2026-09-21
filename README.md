# Building robust data pipelines

Reveal.js slide deck for the talk **Building robust data pipelines**, presented by **Darren Hutton** and **Jonathan Abbott** (Hippo Digital).

**Live deck:** [https://jrabbott.github.io/building-robust-data-pipelines/](https://jrabbott.github.io/building-robust-data-pipelines/)

**Source deck:** [Google Slides — Azure Yorkshire Robust Data Pipelines](https://docs.google.com/presentation/d/1SxkHLTn-OwMTLRERSwlPYcUhgkUx7ysgz1wcZO5wyj8/edit?usp=drivesdk)

## Requirements

- **Node.js 22+** (see `.nvmrc`). Prefer `npm ci` so the lockfile is respected.

## Run locally

```bash
npm ci
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/building-robust-data-pipelines/`).

To check the production build:

```bash
npm run build
npm run preview
```

Dependency audit (also runs in CI):

```bash
npm run audit
```

## Present

1. Start with `npm run dev` (or open the live Pages URL).
2. Click the slides, then use arrow keys / space to navigate.
3. Press `F` for fullscreen, `S` for speaker notes, `Esc` for overview.
4. Slide numbers and URL hashes are enabled so you can deep-link to a slide.

Speaker notes in `<aside class="notes">` are author-controlled HTML rendered by reveal.js in the speaker view. Treat them as trusted content only—do not paste untrusted markup into notes.

## CI and publish

Shared quality gate lives in `.github/actions/build` (`npm ci`, audit, Vite build, `dist/` smoke check).

- **CI** (`.github/workflows/ci.yml`) runs that action on pull requests (and non-`main` pushes).
- **CD** (`.github/workflows/cd.yml`) runs the same action on pushes to `main` (or `workflow_dispatch`), uploads `dist/`, and deploys to GitHub Pages.

Dependabot watches npm and GitHub Actions weekly.

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Scaffold

Vite + [reveal.js](https://revealjs.com/) setup with Hippo Digital branding, diagrams, and self-hosted DM Sans. Base path is `/building-robust-data-pipelines/` for project Pages.
