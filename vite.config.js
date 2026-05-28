import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT for GitHub Pages project sites:
// relative asset paths prevent a blank page when the app is served from
// https://USER.github.io/REPOSITORY/ instead of the domain root.
export default defineConfig({
  plugins: [react()],
  base: './'
});
