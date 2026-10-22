import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

test('portada: vistes, idioma i enllaços antics', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Els meus cursos');
  await expect(page.locator('.m-card')).toHaveCount(5);
  await expectNoOverflow(page);

  await page.fill('#m-search', 'grafs');
  await expect(page.locator('.m-card .m-cname')).toHaveText(['Lògica i grafs']);
  await page.fill('#m-search', '');

  await setLang(page, 'es');
  await expect(page.locator('h1')).toHaveText('Mis cursos');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await setLang(page, 'ca');

  await page.goto('/tauler');
  await expect(page.locator('h1')).toHaveText('Tauler');
  await page.goto('/index.html#inici');
  await expect(page).toHaveURL(/\/inici$/);
  await page.goto('/no-existeix/de/cap/manera');
  await expect(page.locator('h1')).toContainText("No s'ha trobat");
  expect(errors).toEqual([]);
});

test('destacar i treure de la vista un curs', async ({ page }) => {
  await page.goto('/cursos');
  await page.click('[data-kebab="mates"] .m-kbtn');
  await page.click('[data-kebab="mates"] [data-act="star"]');
  await page.click('[data-kebab="eco"] .m-kbtn');
  await page.click('[data-kebab="eco"] [data-act="hide"]');
  await expect(page.locator('.m-card')).toHaveCount(4);
  await page.click('[data-dd="filter"] .m-ddbtn');
  await page.click('[data-dd="filter"] [data-v="star"]');
  await expect(page.locator('.m-card .m-cname')).toHaveText(['Teoria Mates CP1']);
  await page.reload();
  await expect(page.locator('.m-card .m-cname')).toHaveText(['Teoria Mates CP1']);
});
