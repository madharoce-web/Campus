import { expect } from '@playwright/test';

/** Recull errors de la consola i de la pàgina. */
export function watchErrors(page) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  return errors;
}

/** La pàgina no ha de fer desplaçament horitzontal. */
export async function expectNoOverflow(page) {
  const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(over, 'desplaçament horitzontal').toBeLessThanOrEqual(0);
}

/** Canvia l'idioma des del menú d'usuari. */
export async function setLang(page, lang) {
  await page.click('#m-ubtn');
  await page.click('#m-ulang');
  await page.click(`.m-uopt[data-lang="${lang}"]`);
}
