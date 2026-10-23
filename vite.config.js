import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import scopeCourses from './tools/postcss-scope-courses.js';

// BASE_PATH permet publicar la web en una subcarpeta (p. ex. /Campus/ a GitHub Pages).
// Per defecte es publica a l'arrel del domini.
const base = process.env.BASE_PATH || '/';

// Capçaleres de seguretat: les mateixes que a deploy/nginx.conf, perquè `npm run preview`
// (i les proves) funcionin amb les mateixes restriccions que la web publicada.
// 'wasm-unsafe-eval' cal per compilar el C++ amb Clang (WebAssembly) dins el navegador.
export const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'wasm-unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    // comptes i progrés al núvol (Supabase); amb un domini propi per a Supabase, afegiu-lo aquí
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

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
  preview: { port: 4173, host: true, headers: SECURITY_HEADERS },
});
