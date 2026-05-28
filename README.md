# Indovina il Radionuclide — Web prototype

Clean web-only React/Vite prototype.

## Run locally

```bash
npm install --no-audit --no-fund --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The project includes `vite.config.js` with `base: './'`, so generated JS/CSS assets use relative paths and work correctly on GitHub Pages project URLs such as:

`https://USERNAME.github.io/REPOSITORY/`

Enable Pages from **Settings → Pages → Source: GitHub Actions**, or let the workflow enable it automatically.
