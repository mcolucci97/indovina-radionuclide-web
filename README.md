# Indovina il Radionuclide — Web clean

Versione web pulita del prototipo, senza Android, Capacitor, Gradle o Vitest.

## Comandi

```bash
npm install
npm run dev
npm run build
```

La build web viene generata nella cartella `dist/`.

## Pubblicazione GitHub Pages

Il workflow `.github/workflows/deploy-pages.yml` compila automaticamente la web app e la pubblica su GitHub Pages quando fai push su `main`.

Nel repository GitHub vai in:

`Settings → Pages → Build and deployment → Source: GitHub Actions`

## Nota scientifica

Il database contiene carte originali e carte candidate. Prima della pubblicazione pubblica definitiva, i dati e le storie devono essere validati fonte per fonte.
