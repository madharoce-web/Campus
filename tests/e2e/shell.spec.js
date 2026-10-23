import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

test('portada pública: presentació, graus i crida a començar', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Prepara les assignatures');
  await expect(page.locator('.m-navbar')).toHaveCount(0);
  await expect(page.locator('#avantatges li')).toHaveCount(6);
  await expect(page).toHaveTitle(/Aula Mada/);
  await expect(page.locator('#graus [data-degree]')).toHaveCount(4);
  await expect(page.locator('#graus [data-degree="informatica"] h3')).toHaveText('Enginyeria Informàtica');
  await expect(page.locator('#graus [data-degree]:not([data-degree="informatica"]) .am-badge')).toHaveText(['Properament', 'Properament', 'Properament']);
  await expectNoOverflow(page);

  await page.locator('.lp-faq summary').first().click();
  await expect(page.locator('.lp-faq details').first()).toHaveAttribute('open', '');
  await page.click('.lp-langs [data-lang="es"]');
  await expect(page.locator('h1')).toContainText('Prepara las asignaturas');
  await page.click('.lp-langs [data-lang="ca"]');

  // sense comptes configurats, el botó principal porta directament al campus
  await page.locator('.lp-ctas .am-btn-primary').click();
  await expect(page).toHaveURL(/\/tauler$/);
  await expect(page.locator('h1')).toHaveText('Tauler');
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
  await expect(page).toHaveURL(/\/inici$/);
  await expect(page.locator('h1')).toHaveText('Aula Mada');
  await expect(page.locator('#in-graus [data-degree]')).toHaveCount(4);
  await expect(page.locator('#in-news .am-post')).toHaveCount(3);
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

  await page.click('[data-degree="informatica"] h3 a');
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

test('tauler: resum, progrés de cada assignatura, calendari i calaix de blocs', async ({ page }) => {
  const errors = watchErrors(page);
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('lx-done', JSON.stringify({ a: 1, b: 1, c: 1 }));
    localStorage.setItem('eco-prac', JSON.stringify({ done: { x: true } }));
  });
  await page.goto('/logica');
  await expect(page.locator('div.course[data-course="logica"]')).toBeVisible();
  await page.goto('/tauler');
  await expect(page.locator('h1')).toHaveText('Tauler');
  await expect(page.locator('#m-stats .am-stat')).toHaveCount(4);
  await expect(page.locator('#m-stats .am-stat').first()).toContainText('1/5');
  await expect(page.locator('[data-progress="logica"] .am-prog-num')).toHaveText('3 de 46');
  await expect(page.locator('[data-progress="eco"] .am-prog-num')).toHaveText('1 de 43');
  await expect(page.locator('[data-progress="mates"]')).toContainText('Sense seguiment');
  await expect(page.locator('#am-cal td.is-today.is-study')).toHaveCount(1);
  await expectNoOverflow(page);

  // el calaix de blocs (tancat d'entrada a pantalles estretes) es tanca i s'obre, i ho recorda
  if (!(await page.locator('#am-cal').isVisible())) await page.click('#am-dopen');
  await expect(page.locator('#am-cal')).toBeVisible();
  await page.click('#am-dclose');
  await expect(page.locator('#am-cal')).toBeHidden();
  await page.reload();
  await expect(page.locator('#am-cal')).toBeHidden();
  await page.click('#am-dopen');
  await expect(page.locator('#am-cal')).toBeVisible();
  expect(errors).toEqual([]);
});
