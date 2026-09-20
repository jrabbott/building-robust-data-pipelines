# Building robust data pipelines

Reveal.js slide deck for the talk **Building robust data pipelines**, presented by **Darren Hutton** and **Jonathan Abbott** at the **Yorkshire Azure User Group (YAUG)**.

**Live deck:** [https://jrabbott.github.io/building-robust-data-pipelines/](https://jrabbott.github.io/building-robust-data-pipelines/)

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/building-robust-data-pipelines/`).

To check the production build:

```bash
npm run build
npm run preview
```

## Present

1. Start with `npm run dev` (or open the live Pages URL).
2. Click the slides, then use arrow keys / space to navigate.
3. Press `F` for fullscreen, `S` for speaker notes, `Esc` for overview.
4. Slide numbers and URL hashes are enabled so you can deep-link to a slide.

## Publish

Pushes to `main` build the site with Vite and deploy `dist/` via GitHub Actions (`Deploy to GitHub Pages`).

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Scaffold

Small Vite + [reveal.js](https://revealjs.com/) setup intended to be copied for future talk repos. Base path is set to `/building-robust-data-pipelines/` for project Pages.
