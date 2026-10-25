import { defineConfig, devices } from '@playwright/test';
import { SUPABASE_TEST_URL } from './tests/e2e/supabase-mock.js';

// Proves de punta a punta sobre la versió compilada (npm run build && npm run test:e2e).
// Amb BASE_URL es poden llançar contra un servidor ja engegat (p. ex. el de desenvolupament).
const external = process.env.BASE_URL;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  // a la integració contínua, un segon intent per si una prova falla per temps (Playwright la marca com a «flaky»)
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  use: {
    baseURL: external || 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
    // PW_CHROMIUM permet fer servir un Chromium ja instal·lat en lloc del de Playwright
    launchOptions: process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
  },
  projects: [
    // locale: el primer cop la web tria l'idioma del navegador; les proves comencen en català
    { name: 'escriptori', testIgnore: /comptes\.spec/, use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, locale: 'ca-ES' } },
    { name: 'mobil', testIgnore: /comptes\.spec/, use: { ...devices['Pixel 7'], locale: 'ca-ES' } },
    // comptes: una còpia compilada amb Supabase configurat (dist-comptes), contra un Supabase simulat
    { name: 'comptes', testMatch: /comptes\.spec/, use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, locale: 'ca-ES', baseURL: 'http://127.0.0.1:4174' } },
  ],
  webServer: external ? undefined : [
    {
      command: 'npm run preview -- --port 4173 --strictPort',
      url: 'http://127.0.0.1:4173',
      reuseExistingServer: true,
    },
    {
      command: 'npx vite build --outDir dist-comptes --emptyOutDir && npx vite preview --outDir dist-comptes --port 4174 --strictPort',
      env: { VITE_SUPABASE_URL: SUPABASE_TEST_URL, VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_proves' },
      url: 'http://127.0.0.1:4174',
      reuseExistingServer: true,
      timeout: 180_000,
    },
  ],
});
