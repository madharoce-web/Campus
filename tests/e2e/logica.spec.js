import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

// Lògica i grafs: unitats, grafs, índex, cercador, qüestionaris, calculadores, laboratoris,
// banc d'exercicis, simulacre, enllaços i estat desat.
const PAGES = [
  ['u0', 'Introducció a la lògica', 'Introducción a la lógica'],
  ['u1', '1 · CP0: llenguatge i formalització', '1 · CP0: lenguaje y formalización'],
  ['u2', '2 · CP0: semàntica i taules de veritat', '2 · CP0: semántica y tablas de verdad'],
  ['u3', '3 · CP0: demostrar un raonament', '3 · CP0: demostrar un razonamiento'],
  ['u4', '4 · CP1: el llenguatge dels predicats', '4 · CP1: el lenguaje de los predicados'],
  ['u5', '5 · CP1: formalitzar en predicats', '5 · CP1: formalizar en predicados'],
  ['u6', '6 · CP1: semàntica i interpretacions', '6 · CP1: semántica e interpretaciones'],
  ['u7', '7 · CP1: forma clausal', '7 · CP1: forma clausal'],
  ['u8', '8 · CP1: unificació i resolució', '8 · CP1: unificación y resolución'],
  ['u9', '9 · Programació lògica', '9 · Programación lógica'],
  ['fs', "Formulari de l'examen", 'Formulario del examen'],
  ['xr', 'Exercicis · Raonaments en CP0', 'Ejercicios · Razonamientos en CP0'],
  ['xa', 'Exercicis · Formalització en CP0', 'Ejercicios · Formalización en CP0'],
  ['xb', 'Exercicis · Taules de veritat', 'Ejercicios · Tablas de verdad'],
  ['xe', 'Exercicis · Formalització en CP1', 'Ejercicios · Formalización en CP1'],
  ['xf', 'Exercicis · Resolució en CP1', 'Ejercicios · Resolución en CP1'],
  ['sim', 'Simulacre de control', 'Simulacro de control'],
  ['grafs', 'Teoria de grafs', 'Teoría de grafos'],
];

/** L'índex és un calaix a les pantalles estretes: s'obre amb el botó. */
async function openToc(page) {
  if (page.viewportSize().width <= 1080) {
    await page.click('#burger');
    await expect(page.locator('#side')).toHaveClass(/\bopen\b/);
  }
}

test('totes les unitats i els grafs es carreguen en els dos idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') { await page.goto('/logica'); await setLang(page, 'es'); }
    for (const [k, ca, es] of PAGES) {
      await page.goto('/logica/' + k);
      await expect(page.locator('.doc .head h1')).toHaveText(lang === 'ca' ? ca : es);
      await expect(page.locator('.m-pick [aria-current="page"]')).toHaveAttribute('id', k === 'grafs' ? 'pk-grafs' : 'pk-logica');
      if (k !== 'grafs') await expect(page.locator('.toc .lu.cur a')).toHaveAttribute('aria-current', 'page');
      await expectNoOverflow(page);
    }
  }
  await expect(page.locator('#ct-logica')).toHaveText('17 apartados');
  await expect(page).toHaveTitle(/Lógica y grafos/);
  expect(errors).toEqual([]);
});

test('navegació: índex, àncores, unitats veïnes, selector, enllaços antics i estat desat', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica');
  await expect(page.locator('.doc .head h1')).toHaveText('Introducció a la lògica');
  await expect(page.locator('.head-art')).toBeVisible();
  await openToc(page);
  await page.click('.toc a.xu:has-text("5 · CP1")');
  await expect(page).toHaveURL(/\/logica\/u5$/);
  await expect(page.locator('.head-art')).toHaveCount(0);
  await expect(page.locator('.doc .eyebrow')).toHaveText('Teoria');
  await openToc(page);
  await page.click('.toc li.l3 a:has-text("Catàleg de patrons")');
  await expect(page).toHaveURL(/\/logica\/u5#u5-cataleg-de-patrons$/);
  await expect(page.locator('#u5-cataleg-de-patrons')).toBeInViewport();
  await expect(page.locator('.toc a.on')).toHaveText('Catàleg de patrons');
  // canvi d'idioma: la mateixa secció
  await setLang(page, 'es');
  await expect(page).toHaveURL(/\/logica\/u5#u5-catalogo-de-patrones$/);
  await expect(page.locator('#u5-catalogo-de-patrones')).toBeInViewport();
  await setLang(page, 'ca');
  // unitat següent i enllaç dins del text
  await page.click('.lu-nav .lu-next');
  await expect(page).toHaveURL(/\/logica\/u6$/);
  await page.goto('/logica/xr');
  await page.click('.doc a.xu[data-u="u3"]');
  await expect(page).toHaveURL(/\/logica\/u3$/);
  // selector: grafs i tornada a la darrera unitat
  await page.click('#pk-grafs');
  await expect(page.locator('.doc .head h1')).toHaveText('Teoria de grafs');
  await page.click('#pk-logica');
  await expect(page).toHaveURL(/\/logica\/u3$/);
  // la darrera pàgina oberta es recorda (lig-state)
  await page.goto('/logica');
  await expect(page.locator('.doc .head h1')).toHaveText('3 · CP0: demostrar un raonament');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('lig-state')))).toEqual({ s: 'logica', l: 'ca', u: 'u3' });
  // enllaços antics i rutes desconegudes
  await page.goto('/logica#grafs');
  await expect(page).toHaveURL(/\/logica\/grafs$/);
  await page.goto('/logica.html#sim');
  await expect(page).toHaveURL(/\/logica\/sim$/);
  await page.goto('/logica.html#u5');
  await expect(page).toHaveURL(/\/logica\/u5$/);
  await page.goto('/logica/no-existeix');
  await expect(page).toHaveURL(/\/logica$/);
  await page.goto('/logica.html#u5-cataleg-de-patrons');
  await expect(page).toHaveURL(/\/logica\/u5#u5-cataleg-de-patrons$/);
  await expect(page.locator('#u5-cataleg-de-patrons')).toBeInViewport();
  await page.goto('/logica/grafs#1-conceptes-basics');
  await expect(page.locator('[id="1-conceptes-basics"]')).toBeInViewport();
  expect(errors).toEqual([]);
});

test('cercador amb teclat', async ({ page }) => {
  await page.goto('/logica/u0');
  await page.locator('#q').pressSequentially('unific');
  await expect(page.locator('#res a').first()).toHaveClass('k');
  await expect(page.locator('#res .tag').first()).toHaveText('Lògica');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/logica\/(u\d|x\w|fs)/);
  await expect(page.locator('#q')).toHaveValue('');
  await page.locator('#q').fill('arbre generador');
  await expect(page.locator('#res .tag').first()).toHaveText('Grafs');
  await page.locator('#res a').first().click();
  await expect(page).toHaveURL(/\/logica\/grafs#/);
});

test('qüestionaris, calculadores i laboratoris', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/u1');
  const q = page.locator('.lq').first();
  await expect(q.locator('.why')).toBeHidden();
  await q.locator('.lq-op').first().click();
  await expect(q.locator('.lq-op.ko')).toHaveCount(1);
  await expect(q.locator('.lq-op.ok')).toHaveCount(1);
  await expect(q.locator('.lq-res')).toHaveText('No és correcte.');
  await expect(q.locator('.lq-op').first()).toBeDisabled();
  await setLang(page, 'es');
  await expect(q.locator('.lq-res')).toHaveText('No es correcto.');
  await setLang(page, 'ca');
  // taula de veritat
  await page.goto('/logica/u2');
  const tt = page.locator('.lx-tool[data-tool="tt"]');
  await expect(tt.locator('.lt-v')).toContainText('Satisfactible no vàlida: certa a 1 de 4 files');
  await tt.locator('.lt-in').fill('P -> Q; Q -> R => P -> R');
  await tt.locator('.lt-in').press('Enter');
  await expect(tt.locator('.lt-v')).toContainText('És vàlid');
  await expect(tt.locator('tbody tr')).toHaveCount(8);
  await tt.locator('.lt-in').fill('P ');
  await tt.locator('.lt-kb [data-k="∨"]').click();
  await expect(tt.locator('.lt-in')).toBeFocused();
  await tt.locator('.lt-in').pressSequentially(' Q');
  await tt.locator('.lt-go').click();
  await expect(tt.locator('.lt-in')).toHaveValue('P ∨ Q');
  await expect(tt.locator('.lt-v')).toContainText('certa a 3 de 4 files');
  await tt.locator('.lt-in').fill('P ∧ (Q');
  await tt.locator('.lt-go').click();
  await expect(tt.locator('.lt-err')).toHaveText("S'esperava )");
  // unificació
  await page.goto('/logica/u8');
  const un = page.locator('.lx-tool[data-tool="unif"]');
  await expect(un.locator('.lt-v')).toContainText('Unifiquen.');
  await un.locator('[data-i="a"]').fill('P(x, f(x))'); await un.locator('[data-i="b"]').fill('P(y, y)');
  await un.locator('.lt-go').click();
  await expect(un.locator('.lt-v')).toContainText("comprovació d'ocurrència");
  await expect(un.locator('tr.bad')).toHaveCount(1);
  // laboratoris del CP1
  await page.goto('/logica/u5');
  const qn = page.locator('.lab[data-lab="quant"]');
  await expect(qn.locator('.lb-f.sel .lb-why')).toContainText('Contraexemple: Anna');
  await qn.locator('.lb-tg[data-i="0"][data-k="T"]').click();
  await expect(qn.locator('.lb-f.sel .lb-pill')).toHaveText('T');
  await qn.locator('[data-n="col"]').click();
  await expect(qn.locator('.lb-f').first().locator('.lb-fx')).toHaveText('∀x : : E(x)');
  await qn.locator('[data-p="1"]').click();
  await qn.locator('.lb-f[data-f="2"]').click();
  await expect(qn.locator('.lb-f.sel .lb-why')).toContainText('rang buit');
  const or = page.locator('.lab[data-lab="order"]');
  await or.locator('.lb-f[data-f="1"]').click();
  await expect(or.locator('.lb-f.sel .lb-why')).toContainText('ningú no rep fletxa');
  await or.locator('[data-p="1"]').click();
  await expect(or.locator('.lb-f.sel .lb-pill')).toHaveText('T');
  await expect(or.locator('path.lb-thick')).toHaveCount(4);
  await or.locator('.lb-tg[data-i="1"][data-j="2"]').click();
  await expect(or.locator('.lb-f.sel .lb-pill')).toHaveText('F');
  // l'estat dels laboratoris es conserva en canviar d'unitat
  await page.click('.lu-nav .lu-next');
  await page.click('.lu-nav .lu-prev');
  await expect(qn.locator('[data-n="col"]')).toHaveAttribute('aria-pressed', 'true');
  expect(errors).toEqual([]);
});

test('banc d\'exercicis: passos, filtre, fet i salts', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/xr');
  const card = page.locator('#lx-r1');
  await expect(card.locator('.lx-c')).toHaveText('0/4');
  await card.locator('.lx-next').click();
  await card.locator('.lx-next').click();
  await expect(card.locator('.lx-s:visible')).toHaveCount(2);
  await expect(card.locator('.lx-c')).toHaveText('2/4');
  await card.locator('.lx-all').click();
  await expect(card.locator('.lx-next')).toBeDisabled();
  await card.locator('.lx-hide').click();
  await expect(card.locator('.lx-s:visible')).toHaveCount(0);
  await card.locator('.lx-done input').check();
  await expect(page.locator('.lx-prog')).toHaveText('1 / 10 fets');
  await expect(page.locator('.lx-jump a[data-j="r1"]')).toHaveClass('dn');
  await page.click('.lx-chips [data-f="exam"]');
  await expect(page.locator('article.lx')).toHaveCount(3);
  await page.locator('.lx-jump a').last().click();
  await expect(page.locator('article.lx').last()).toBeInViewport();
  await page.reload();
  await expect(page.locator('.lx-chips [data-f="exam"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.lx-prog')).toHaveText('1 / 10 fets');
  expect(Object.keys(await page.evaluate(() => JSON.parse(localStorage.getItem('lx-done'))))).toEqual(['r1']);
  await page.click('.lx-chips [data-f="all"]');
  await setLang(page, 'es');
  await expect(page.locator('.lx-prog')).toHaveText('1 / 10 hechos');
  expect(errors).toEqual([]);
});

test('simulacre: rellotge, correcció, autoavaluació, nota i historial', async ({ page }) => {
  const errors = watchErrors(page);
  await page.clock.install({ time: new Date('2026-10-22T10:00:00') });
  await page.goto('/logica/sim');
  await expect(page.locator('.lx-model')).toHaveCount(2);
  await page.click('.lx-model[data-m="cp1"]');
  await expect(page.locator('.lx-simex')).toHaveCount(3);
  await expect(page.locator('.lx-clock')).toHaveText(/^1:(30:00|29:5\d)$/);
  await expect(page.locator('.lx-simex .lx-s:visible')).toHaveCount(0);
  await page.clock.fastForward(85 * 60 * 1000);
  await expect(page.locator('.lx-clock')).toHaveText(/^0:0[45]:\d\d$/);
  await expect(page.locator('.lx-clock')).toHaveClass(/warn/);
  // l'examen continua després de recarregar
  await page.reload();
  await expect(page.locator('.lx-simex')).toHaveCount(3);
  await page.clock.fastForward(6 * 60 * 1000);
  await expect(page.locator('.lx-clock')).toHaveText(/^\+0:01:\d\d$/);
  await expect(page.locator('.lx-clock')).toHaveClass(/over/);
  await page.click('.lx-end');
  await expect(page.locator('.lx-clock')).toHaveText(/^Temps emprat 1:31:\d\d$/);
  await expect(page.locator('.lx-grade b')).toHaveText('0,0');
  await expect(page.locator('.lx-simex .lx-s:visible').first()).toBeVisible();
  await page.click('.lx-self[data-i="0"] [data-v="100"]');
  await page.click('.lx-self[data-i="1"] [data-v="50"]');
  await page.click('.lx-self[data-i="2"] [data-v="75"]');
  await expect(page.locator('.lx-grade b')).toHaveText('8,0');
  await setLang(page, 'es');
  await expect(page.locator('.lx-clock')).toHaveText(/^Tiempo empleado 1:31:\d\d$/);
  await page.click('.lx-end');
  await expect(page.locator('.lx-simh table tbody tr')).toHaveCount(1);
  await expect(page.locator('.lx-simh table tbody tr td').last()).toHaveText('8,0 / 10');
  const hist = await page.evaluate(() => JSON.parse(localStorage.getItem('lx-sim-hist')));
  expect(hist).toHaveLength(1);
  expect(hist[0]).toMatchObject({ m: 'CP1', g: 8 });
  expect(hist[0].t).toBeGreaterThanOrEqual(5460);
  expect(hist[0].t).toBeLessThan(5520);
  // abandonar torna a l'inici sense desar res
  await page.click('.lx-model[data-m="cp2"]');
  await page.click('.lx-quit');
  await expect(page.locator('.lx-model')).toHaveCount(2);
  expect(await page.evaluate(() => localStorage.getItem('lx-sim'))).toBe('null');
  expect(errors).toEqual([]);
});
