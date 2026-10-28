import { test, expect } from '@playwright/test';
import lgToc from '../../src/courses/logica/kit/toc.js';
import lgBank from '../../src/courses/logica/kit/bank.js';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

test('portada pública: presentació, graus i crida a començar', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Prepara les assignatures');
  await expect(page.locator('.m-navbar')).toHaveCount(0);
  await expect(page.locator('#avantatges li')).toHaveCount(6);
  await expect(page).toHaveTitle(/Aula Mada/);
  await expect(page.locator('#graus [data-degree]')).toHaveCount(5);
  await expect(page.locator('#graus [data-degree="informatica"] h3')).toHaveText('Enginyeria Informàtica');
  await expect(page.locator('#graus [data-degree]:not([data-degree="informatica"]) .am-badge')).toHaveText(['Properament', 'Properament', 'Properament', 'Properament']);
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
  await expect(page.locator('#in-graus [data-degree]')).toHaveCount(5);
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
  await expect(page.locator('[data-degree]')).toHaveCount(5);
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

// totes les assignatures ja tenen el contingut en anglès: cap avís de «contingut en castellà»
test('en anglès, els cursos es mostren en anglès i sense avís', async ({ page }) => {
  await page.goto('/graus/informatica');
  await setLang(page, 'en');
  await expect(page.locator('h1')).toHaveText('Computer Engineering');
  for (const p of ['/mates', '/logica', '/economia', '/computadors', '/programacio']) {
    await page.goto(p);
    await expect(page.locator('.kit')).toBeVisible();
    await expect(page.locator('.app-langnote')).toHaveCount(0);
  }
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
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
  await expect(page.locator('.kit[data-kit="logica"]')).toBeVisible();
  await page.goto('/tauler');
  await expect(page.locator('h1')).toHaveText('Tauler');
  await expect(page.locator('#m-stats .am-stat')).toHaveCount(4);
  await expect(page.locator('#m-stats .am-stat').first()).toContainText('1/5');
  // a la plantilla: apartats + exercicis; el progrés antic (lx-done) s'hi ha importat
  const lgTotal = lgToc.reduce((n, u) => n + u.sections.length, 0) + lgBank.items.length;
  await expect(page.locator('[data-progress="logica"] .am-prog-num')).toHaveText('3 de ' + lgTotal);
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

test('plans i administració, sense activar: /preus no existeix i /admin avisa que no hi ha comptes', async ({ page }) => {
  await page.goto('/preus');
  await expect(page.locator('h1')).toContainText("No s'ha trobat");
  await page.goto('/precios');
  await expect(page).toHaveURL(/\/preus$/);
  await page.goto('/');
  await expect(page.locator('.lp-plan-pro')).toHaveCount(0);
  await page.goto('/admin');
  await expect(page.locator('h1')).toHaveText('Administració');
  await expect(page.locator('.ad-muted').first()).toBeVisible();
});

test('registre guiat: graus i assignatures; «Els meus cursos» només mostra les triades, amb tutorial', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/cursos');
  await expect(page.locator('#m-setup')).toBeVisible();
  await page.click('#m-setup a');
  await expect(page).toHaveURL(/\/benvinguda$/);
  await expect(page.locator('.m-navbar')).toHaveCount(0);
  await page.click('#bv-start');
  await page.fill('#bv-name', 'Laia Puig');
  await page.click('#bv-next');
  // cal triar com a mínim un grau
  await expect(page.locator('#bv-next')).toBeDisabled();
  await page.click('[data-degree="informatica"]');
  await page.click('[data-degree="historia"]');
  await expect(page.locator('.bv-note')).toBeVisible();
  await page.click('#bv-next');
  await expectNoOverflow(page);
  await page.click('[data-subject="mates"]');
  await page.click('[data-subject="logica"]');
  await page.click('#bv-finish');
  await expect(page.locator('#bv-h4')).toHaveText('Tot a punt, Laia');
  await page.click('#bv-go');
  await expect(page).toHaveURL(/\/cursos$/);
  // tutorial de la primera visita: es pot tancar amb Escape i no torna a sortir
  await expect(page.locator('.am-tour-box')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('.am-tour-box')).toHaveCount(0);
  await expect(page.locator('#m-grid .m-card')).toHaveCount(2);
  await expect(page.locator('#m-mine')).toContainText('Història');
  // canviar les assignatures
  await page.click('#m-edit');
  await expect(page.locator('#bv-h2')).toBeVisible();
  await page.click('#bv-next');
  await page.click('[data-subject="prog"]');
  await page.click('#bv-finish');
  await page.click('#bv-go');
  await expect(page.locator('#m-grid .m-card')).toHaveCount(3);
  await page.reload();
  await expect(page.locator('.am-tour-box')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('portada: sobre nosaltres, contacte i pàgines legals', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('#nosaltres h2')).toHaveText('Sobre nosaltres');
  await expect(page.locator('#contacte form')).toBeVisible();
  await expect(page.locator('.lp-consent a')).toHaveText('política de privacitat');
  for (const d of ['avis-legal', 'privacitat', 'condicions']) {
    await page.goto('/legal/' + d);
    await expect(page.locator('.lg-doc h1')).toBeVisible();
    await expect(page.locator('.lg-tabs [aria-current="page"]')).toHaveCount(1);
    await expectNoOverflow(page);
  }
  await page.goto('/legal/no-existeix');
  await expect(page.locator('h1')).toContainText("No s'ha trobat");
  expect(errors).toEqual([]);
});
