import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

test('portada pública: presentació, graus i crida a començar', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Aula Mada');
  await expect(page).toHaveTitle(/Aula Mada/);
  await expect(page.locator('#graus [data-degree]')).toHaveCount(4);
  await expect(page.locator('#graus [data-degree="informatica"] h3')).toHaveText('Enginyeria Informàtica');
  await expect(page.locator('#graus [data-degree]:not([data-degree="informatica"]) .am-badge')).toHaveText(['Properament', 'Properament', 'Properament']);
  await expectNoOverflow(page);

  await page.locator('.lp-faq summary').first().click();
  await expect(page.locator('.lp-faq details').first()).toHaveAttribute('open', '');

  await page.locator('.lp-ctas .am-btn-primary').click();
  await expect(page).toHaveURL(/\/cursos$/);
  await expect(page.locator('h1')).toHaveText('Els meus cursos');
  expect(errors).toEqual([]);
});

test('els meus cursos: vistes, idiomes i enllaços antics', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/cursos');
  await expect(page.locator('h1')).toHaveText('Els meus cursos');
  await expect(page.locator('.m-card')).toHaveCount(5);
  await expectNoOverflow(page);

  await page.fill('#m-search', 'grafs');
  await expect(page.locator('.m-card .m-cname')).toHaveText(['Lògica i grafs']);
  await page.fill('#m-search', '');

  await setLang(page, 'es');
  await expect(page.locator('h1')).toHaveText('Mis cursos');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await setLang(page, 'en');
  await expect(page.locator('h1')).toHaveText('My courses');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.fill('#m-search', 'graphs');
  await expect(page.locator('.m-card .m-cname')).toHaveText(['Logic and Graphs']);
  await page.fill('#m-search', '');
  await setLang(page, 'ca');

  await page.goto('/tauler');
  await expect(page.locator('h1')).toHaveText('Tauler');
  await page.goto('/index.html#inici');
  await expect(page).toHaveURL(/\/graus\/informatica$/);
  await page.goto('/inici');
  await expect(page).toHaveURL(/\/graus\/informatica$/);
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

test('catàleg de graus: disponibles, properament i adreces alternatives', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/graus');
  await expect(page.locator('h1')).toHaveText('Graus');
  await expect(page.locator('[data-degree]')).toHaveCount(4);
  await expectNoOverflow(page);

  await page.click('[data-degree="informatica"] h2 a');
  await expect(page).toHaveURL(/\/graus\/informatica$/);
  await expect(page.locator('h1')).toHaveText('Enginyeria Informàtica');
  await expect(page.locator('[data-term="s1"] [data-subject]')).toHaveCount(5);
  await expectNoOverflow(page);
  await page.click('[data-subject="logica"] h3 a');
  await expect(page).toHaveURL(/\/logica$/);

  await page.goto('/grados/ade');
  await expect(page).toHaveURL(/\/graus\/ade$/);
  await expect(page.locator('.gr-soon h2')).toHaveText('Estem preparant aquest grau');
  await page.goto('/graus/no-existeix');
  await expect(page.locator('h1')).toContainText("No s'ha trobat");
  expect(errors).toEqual([]);
});

test('en anglès, els cursos avisen que el contingut és en castellà', async ({ page }) => {
  await page.goto('/graus/informatica');
  await setLang(page, 'en');
  await expect(page.locator('h1')).toHaveText('Computer Engineering');
  await page.goto('/mates');
  await expect(page.locator('.app-langnote')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await setLang(page, 'es');
  await expect(page.locator('.app-langnote')).toHaveCount(0);
});
