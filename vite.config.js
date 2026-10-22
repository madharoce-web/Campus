import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import scopeCourses from './tools/postcss-scope-courses.js';

// BASE_PATH permet publicar la web en una subcarpeta (p. ex. /Campus/ a GitHub Pages).
// Per defecte es publica a l'arrel del domini.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  // VITE_CACHE_DIR permet tenir diversos servidors de desenvolupament alhora
  cacheDir: process.env.VITE_CACHE_DIR || 'node_modules/.vite',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [scopeCourses({
        scopes: [
          { dir: 'src/courses', attr: 'data-course' },
          { dir: 'src/pages', attr: 'data-page' },
        ],
      })],
    },
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 2500,
    assetsInlineLimit: 0,
  },
  server: { port: 5173, host: true },
  preview: { port: 4173, host: true },
});
