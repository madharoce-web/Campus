import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';
import scopeCourses from './tools/postcss-scope-courses.js';

// Versió publicada (commit): queda dins del fitxer principal, de manera que cada publicació en té un de
// nom nou i cap memòria cau no pot servir una versió anterior amb el mateix nom.
let build = process.env.CF_PAGES_COMMIT_SHA || '';
if (!build) { try { build = execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { build = 'local'; } }
process.env.VITE_BUILD = build.slice(0, 7);

// BASE_PATH permet publicar la web en una subcarpeta (p. ex. /Campus/ a GitHub Pages).
// Per defecte es publica a l'arrel del domini.
const base = process.env.BASE_PATH || '/';

// Capçaleres de seguretat: les mateixes que a deploy/nginx.conf, perquè `npm run preview`
// (i les proves) funcionin amb les mateixes restriccions que la web publicada.
// 'wasm-unsafe-eval' cal per compilar el C++ amb Clang (WebAssembly) dins el navegador.
export const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'wasm-unsafe-eval' https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    // comptes i progrés al núvol (Supabase); amb un domini propi per a Supabase, afegiu-lo aquí
    "connect-src 'self' https://cloudflareinsights.com https://*.supabase.co wss://*.supabase.co",
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
