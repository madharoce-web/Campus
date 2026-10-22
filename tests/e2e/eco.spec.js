import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

// Principis d'economia: temes, índex, cercador, laboratoris, pràctica, enllaços i estat desat.
const DOCS = [
  ['t1', "Tema 1: Conceptes bàsics d'economia", 'Tema 1: Conceptos básicos de economía'],
  ['t2', 'Tema 2: Demanda, oferta i mercat', 'Tema 2: Demanda, oferta y mercado'],
  ['t3', 'Tema 3: Magnituds agregades', 'Tema 3: Magnitudes agregadas'],
  ['prac', 'Pràctica: exercicis dels temes 1, 2 i 3', 'Práctica: ejercicios de los temas 1, 2 y 3'],
];

/** L'índex és un calaix a les pantalles estretes: s'obre amb el botó. */
async function openToc(page) {
  if (page.viewportSize().width <= 1080) {
    await page.click('#burger');
    await expect(page.locator('#side')).toHaveClass(/\bopen\b/);
  }
}

test('tots els temes es carreguen en els dos idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') { await page.goto('/economia'); await setLang(page, 'es'); }
    for (const [k, ca, es] of DOCS) {
      await page.goto('/economia/' + k);
      await expect(page.locator('.doc .head h1')).toHaveText(lang === 'ca' ? ca : es);
      await expect(page.locator('.m-pick [aria-current="page"]')).toHaveAttribute('id', 'pk-' + k);
      await expect(page.locator('.toc a').first()).toBeAttached();
      await expectNoOverflow(page);
    }
  }
  await expect(page.locator('.m-ph h1')).toHaveText('Principios de economía');
  await expect(page.locator('#ct-prac')).toHaveText('43 ejercicios');
  await expect(page).toHaveTitle(/Principios de economía/);
  expect(errors).toEqual([]);
});

test('índex, àncores, barra de progrés i cercador', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/t2');
  await openToc(page);
  await page.click('.toc a:has-text("3. L\'equilibri de mercat")');
  await expect(page).toHaveURL(/\/economia\/t2#3-l-equilibri-de-mercat$/);
  await expect(page.locator('#side')).not.toHaveClass(/\bopen\b/);
  await expect(page.locator('[id="3-l-equilibri-de-mercat"]')).toBeInViewport();
  await expect(page.locator('.toc a.on')).toHaveCount(1);
  expect(parseFloat(await page.locator('#prog').evaluate((e) => e.style.width))).toBeGreaterThan(5);
  // canvi d'idioma: la mateixa secció en castellà
  await setLang(page, 'es');
  await expect(page.locator('[id="3-el-equilibrio-de-mercado"], [id="3-1-el-concepto"]').first()).toBeInViewport();
  await setLang(page, 'ca');
  // cercador: resultats destacats, teclat i navegació
  await page.locator('#q').pressSequentially('excedent');
  await expect(page.locator('#res')).toHaveClass(/\bon\b/);
  await expect(page.locator('#res a').first()).toHaveClass('k');
  await expect(page.locator('#res mark').first()).toHaveText(/excedent/i);
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('#res a').nth(1)).toHaveClass('k');
  await page.keyboard.press('Enter');
  await expect(page.locator('#res')).not.toHaveClass(/\bon\b/);
  await expect(page.locator('#q')).toHaveValue('');
  await expect(page).toHaveURL(/#/);
  await page.locator('#q').fill('zzqx');
  await expect(page.locator('#res .none')).toHaveText('Cap resultat');
  await page.keyboard.press('Escape');
  await expect(page.locator('#res')).not.toHaveClass(/\bon\b/);
  // «/» enfoca el cercador
  await page.locator('.doc h1').click();
  await page.keyboard.press('/');
  await expect(page.locator('#q')).toBeFocused();
  // amunt
  await page.click('#totop');
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  expect(errors).toEqual([]);
});

test('enllaços directes, enllaços antics i referències entre temes', async ({ page }) => {
  await page.goto('/economia#t3');
  await expect(page).toHaveURL(/\/economia\/t3$/);
  await page.goto('/economia.html#prac');
  await expect(page).toHaveURL(/\/economia\/prac$/);
  await page.goto('/economia/no-existeix');
  await expect(page).toHaveURL(/\/economia$/);
  // àncora d'una secció en un enllaç antic: es busca a l'índex
  await page.goto('/economia.html#4-excedents-i-benestar-social');
  await expect(page).toHaveURL(/\/economia\/t2#4-excedents-i-benestar-social$/);
  await expect(page.locator('[id="4-excedents-i-benestar-social"]')).toBeInViewport();
  await page.goto('/economia/t2#3-l-equilibri-de-mercat');
  await expect(page.locator('[id="3-l-equilibri-de-mercat"]')).toBeInViewport();
  // referència del tema 2 al tema 1
  await page.goto('/economia/t2');
  await page.locator('.doc a.xref').first().click();
  await expect(page).toHaveURL(/\/economia\/t1$/);
  await expect(page.locator('.doc .head h1')).toHaveText("Tema 1: Conceptes bàsics d'economia");
  // el darrer tema obert es recorda (eco-state)
  await page.goto('/economia/t3');
  await expect(page.locator('.doc .head h1')).toHaveText('Tema 3: Magnituds agregades');
  await page.goto('/economia');
  await expect(page.locator('#pk-t3')).toHaveAttribute('aria-current', 'page');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('eco-state')))).toEqual({ s: 't3', l: 'ca' });
});

test('laboratoris: FPP, mercat i cadena, amb l\'estat conservat', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/t1');
  const fpp = page.locator('.lab[data-lab="fpp"]');
  await expect(fpp.locator('#fpp-msg')).toContainText('(15, 14): ineficient');
  await expect(fpp.locator('#fpp-co li')).toHaveCount(4);
  await page.fill('#fpp-tx', '35'); await page.fill('#fpp-ty', '12,5');
  await expect(fpp.locator('#fpp-msg')).toContainText('(35, 12,5): inabastable');
  await page.fill('#fpp-tech', '20');
  await expect(fpp.locator('#fpp-tv')).toHaveText('+20 %');
  await expect(fpp.locator('svg text', { hasText: 'FPP nova' })).toHaveCount(1);
  await page.fill('#fpp-y1', '25');
  await expect(fpp.locator('#fpp-msg')).toHaveClass(/warn/);
  await expect(fpp.locator('svg')).toHaveCount(0);
  await page.fill('#fpp-y1', '18');
  // canvi d'idioma i de tema: els valors es mantenen
  await setLang(page, 'es');
  await expect(fpp.locator('#fpp-msg')).toContainText('(35, 12,5): inalcanzable');
  await setLang(page, 'ca');
  await page.click('#pk-t2');
  const mk = page.locator('.lab[data-lab="mercat"]');
  await expect(mk.locator('#mk-msg')).toHaveText('El mercat és en equilibri: Qd = Qo.');
  await expect(mk.locator('.lab-kv').first()).toContainText('3,4');
  await page.fill('#mk-p', '800');
  await expect(mk.locator('#mk-msg')).toContainText("excés d'oferta");
  await mk.locator('[data-sh="a+"]').click();
  await expect(page.locator('#mk-a')).toHaveValue('1.100');
  await mk.locator('[data-pre="2"]').click();
  await expect(page.locator('#mk-e')).toHaveValue('−100');
  await expect(mk.locator('.lab-kv').first()).toContainText('4');
  await page.fill('#mk-b', '0');
  await expect(mk.locator('#mk-msg')).toHaveClass(/warn/);
  await page.click('#pk-t3');
  const ch = page.locator('.lab[data-lab="cadena"]');
  await expect(ch.locator('#ch-steps li')).toHaveCount(11);
  await expect(ch.locator('#ch-steps li').last()).toContainText('−50 (dèficit)');
  await page.fill('#ch-d', '100');
  await expect(ch.locator('#ch-steps li').last()).toContainText('230 (superàvit)');
  await page.click('#pk-t1');
  await expect(page.locator('#fpp-tx')).toHaveValue('35');
  await page.click('#fpp-reset');
  await expect(page.locator('#fpp-tx')).toHaveValue('15');
  expect(errors).toEqual([]);
});

test('pràctica: filtres, correcció, progrés desat i canvi d\'idioma', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/prac');
  await expect(page.locator('#px-c')).toHaveText('0 / 43 resolts');
  // classificació (multi): dues respostes, una de malament
  const c1 = page.locator('#ex-t1-f-01');
  await c1.locator('.ex-check').click();
  await expect(c1.locator('.ex-fb')).toHaveText('Tria una opció.');
  const right = [0, 1, 0, 1, 1, 0];
  for (let i = 0; i < 6; i++) await c1.locator('.it').nth(i).locator(`[data-o="${i === 0 ? 1 : right[i]}"]`).click();
  await c1.locator('.ex-check').click();
  await expect(c1.locator('.ex-fb')).toHaveClass(/\bp\b/);
  await expect(c1.locator('.it.n')).toHaveCount(1);
  await c1.locator('.it').first().locator('[data-o="0"]').click();
  await c1.locator('.ex-check').click();
  await expect(c1.locator('.ex-fb')).toHaveText('Correcte.');
  await expect(c1).toHaveClass(/\bdone\b/);
  await expect(page.locator('#px-c')).toHaveText('1 / 43 resolts');
  // numèric: tolerància i lectura de comes
  const c3 = page.locator('#ex-t1-f-03');
  await page.fill('#in-t1-f-03-0', '6,0'); await page.fill('#in-t1-f-03-1', '9');
  await c3.locator('.ex-check').click();
  await expect(c3.locator('.okm.y')).toHaveCount(1);
  await expect(c3.locator('.okm.n')).toHaveCount(1);
  // opció múltiple, de malament
  const c2 = page.locator('#ex-t1-f-02');
  await c2.locator('.opt').nth(1).click();
  await c2.locator('.ex-check').click();
  await expect(c2.locator('.opt.n')).toHaveCount(1);
  await expect(c2.locator('.ex-fb')).toHaveClass(/\bn\b/);
  // canvi d'idioma: respostes i correcció es conserven
  await setLang(page, 'es');
  await expect(page.locator('#in-t1-f-03-1')).toHaveValue('9');
  await expect(c2.locator('.ex-fb')).toContainText('No es correcto');
  await expect(c1.locator('.ex-st')).toHaveText('✓ resuelto');
  await setLang(page, 'ca');
  await c3.locator('.ex-clear').click();
  await expect(page.locator('#in-t1-f-03-0')).toHaveValue('');
  await expect(c3.locator('.ex-fb')).toBeHidden();
  // filtres
  await page.click('[data-ft="2"]'); await page.click('[data-fn="dificil"]');
  await expect(page.locator('article.ex:visible')).toHaveCount(4);
  await expect(page.locator('#tema-1')).toBeHidden();
  // una àncora amagada pels filtres (cercador): es treuen els filtres
  await page.locator('#q').fill("cost d'oportunitat en una FPP");
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-ft="all"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#t1-f-03')).toBeInViewport();
  // progrés desat
  await page.reload();
  await expect(page.locator('#px-c')).toHaveText('1 / 43 resolts');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('eco-prac')))).toEqual({ done: { 't1-f-01': 1 } });
  await page.click('#px-r');
  await expect(page.locator('#px-c')).toHaveText('0 / 43 resolts');
  await expectNoOverflow(page);
  expect(errors).toEqual([]);
});
