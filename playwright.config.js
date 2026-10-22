import { defineConfig, devices } from '@playwright/test';

// Proves de punta a punta sobre la versió compilada (npm run build && npm run test:e2e).
// Amb BASE_URL es poden llançar contra un servidor ja engegat (p. ex. el de desenvolupament).
const external = process.env.BASE_URL;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: external || 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
    // PW_CHROMIUM permet fer servir un Chromium ja instal·lat en lloc del de Playwright
    launchOptions: process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
  },
  projects: [
    { name: 'escriptori', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } } },
    { name: 'mobil', use: { ...devices['Pixel 7'] } },
  ],
  webServer: external ? undefined : {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
  },
});
