import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';
import toc from '../../src/courses/eco/kit/toc.js';
import bank from '../../src/courses/eco/kit/bank.js';

// Principis d'economia a la plantilla d'assignatura (src/courses/_kit): temari, laboratoris,
// pràctica, enllaços antics i progrés importat de la versió anterior.
const kit = (page) => page.evaluate(() => JSON.parse(localStorage.getItem('kit-eco-v1') || 'null'));

/** L'índex del temari és plegable a les pantalles estretes. */
async function openToc(page) {
  await page.locator('.kit-toc').waitFor({ state: 'attached' });
  const btn = page.locator('.kit-toc-btn');
  if (await btn.isVisible()) await btn.click();
}

test('temari: els tres temes en els dos idiomes, amb l\'índex complet', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') await setLang(page, 'es');
    for (const u of toc) {
      await page.goto('/economia/temari/' + u.id);
      await expect(page.locator('.kit-unit-h h2')).toHaveText(u.t[lang === 'ca' ? 0 : 1]);
      await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
      // l'índex afegeix l'entrada dels exercicis tipus examen del final del tema
      await expect(page.locator('.kit-toc-s li')).toHaveCount(u.sections.length + 1);
      await expect(page.locator('.kit-toc-u[aria-current="page"]')).toContainText(u.t[lang === 'ca' ? 0 : 1]);
      await expectNoOverflow(page);
    }
  }
  await expect(page).toHaveTitle(/Principios de economía/);
  expect(errors).toEqual([]);
});

test('índex, apartat actual i fórmules', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/temari/t2');
  await openToc(page);
  await page.click('.kit-toc-s a:has-text("L\'equilibri de mercat")');
  await expect(page.locator('#t2-3-l-equilibri-de-mercat')).toBeInViewport();
  await expect(page.locator('.kit-toc-s a.is-cur')).toHaveText("L'equilibri de mercat");
  // les fórmules (abans MathML) es dibuixen amb Temml, sense errors de TeX
  await expect(page.locator('#t2-3-l-equilibri-de-mercat .kit-math math').first()).toBeAttached();
  await expect(page.locator('.kit-texerr')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('enllaços antics: temes, pràctica i àncores', async ({ page }) => {
  await page.goto('/economia/t2');
  await expect(page).toHaveURL(/\/economia\/temari\/t2$/);
  await page.goto('/economia/prac');
  await expect(page).toHaveURL(/\/economia\/practica$/);
  await page.goto('/economia#t3');
  await expect(page).toHaveURL(/\/economia\/temari\/t3$/);
  await page.goto('/economia.html#prac');
  await expect(page).toHaveURL(/\/economia\/practica$/);
  await page.goto('/economia/no-existeix');
  await expect(page).toHaveURL(/\/economia$/);
  // l'àncora d'una secció de la versió anterior porta a l'apartat de la plantilla
  await page.goto('/economia.html#4-excedents-i-benestar-social');
  await expect(page).toHaveURL(/\/economia\/temari\/t2#t2-4-excedents-i-benestar-social$/);
  await expect(page.locator('#t2-4-excedents-i-benestar-social')).toBeInViewport();
  await page.goto('/economia/t2#3-l-equilibri-de-mercat');
  await expect(page).toHaveURL(/#t2-3-l-equilibri-de-mercat$/);
  await expect(page.locator('#t2-3-l-equilibri-de-mercat')).toBeInViewport();
});

test('laboratoris: FPP, mercat i cadena, amb l\'estat conservat entre temes', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/temari/t1');
  const fpp = page.locator('.kit-lab[data-lab="fpp"]');
  await expect(fpp.locator('#fpp-msg')).toContainText('(15, 14): ineficient');
  await page.fill('#fpp-tx', '35'); await page.fill('#fpp-ty', '12,5');
  await expect(fpp.locator('#fpp-msg')).toContainText('(35, 12,5): inabastable');
  await setLang(page, 'es');
  await expect(fpp.locator('#fpp-msg')).toContainText('(35, 12,5): inalcanzable');
  await setLang(page, 'ca');
  await openToc(page);
  await page.click('.kit-toc-u:has-text("Demanda")');
  const mk = page.locator('.kit-lab[data-lab="mercat"]');
  await expect(mk.locator('#mk-msg')).toHaveText('El mercat és en equilibri: Qd = Qo.');
  await page.fill('#mk-p', '800');
  await expect(mk.locator('#mk-msg')).toContainText("excés d'oferta");
  await openToc(page);
  await page.click('.kit-toc-u:has-text("Magnituds")');
  const ch = page.locator('.kit-lab[data-lab="cadena"]');
  await expect(ch.locator('#ch-steps li')).toHaveCount(11);
  await openToc(page);
  await page.click('.kit-toc-u:has-text("Conceptes")');
  await expect(page.locator('#fpp-tx')).toHaveValue('35');
  expect(errors).toEqual([]);
});

test('pràctica: filtres, correcció automàtica i progrés desat', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/economia/practica');
  await expect(page.locator('#kit-count')).toHaveText(bank.items.length + ' exercicis');
  // sense exercicis d'exàmens reals, no hi ha filtre d'origen
  await expect(page.locator('#kit-f-origin')).toHaveCount(0);
  // classificació: una resposta malament i després bé
  const c1 = page.locator('article[data-ex="t1-f-01"]');
  const ans = bank.items.find((e) => e.id === 't1-f-01').answer;
  for (let i = 0; i < ans.length; i++) await c1.locator('.kit-match > li').nth(i).locator('.kit-chip').nth(i === 0 ? (ans[0] + 1) % 2 : ans[i]).click();
  await c1.locator('.kit-check').click();
  await expect(c1.locator('.kit-fb')).toHaveClass(/is-ko/);
  await c1.locator('.kit-match > li').first().locator('.kit-chip').nth(ans[0]).click();
  await c1.locator('.kit-check').click();
  await expect(c1.locator('.kit-fb')).toHaveText('Correcte.');
  await expect(c1).toHaveClass(/is-done/);
  // numèric amb diverses parts: llegeix comes decimals
  const n3 = bank.items.find((e) => e.id === 't1-f-03');
  const c3 = page.locator('article[data-ex="t1-f-03"]');
  for (let i = 0; i < n3.parts.length; i++) await c3.locator('.kit-nums input').nth(i).fill(String(n3.parts[i].answer).replace('.', ','));
  await c3.locator('.kit-check').click();
  await expect(c3.locator('.kit-fb')).toHaveClass(/is-ok/);
  // filtres: tema 2, difícil
  await page.selectOption('#kit-f-unit', 't2');
  await page.click('#kit-f-level [data-v="hard"]');
  const hard2 = bank.items.filter((e) => e.unit === 't2' && e.level === 'hard').length;
  await expect(page.locator('#kit-count')).toHaveText(hard2 + ' exercicis');
  await expect(page.locator('.kit-pitem')).toHaveCount(hard2);
  await page.selectOption('#kit-f-unit', 'all');
  await page.click('#kit-f-level [data-v="all"]');
  await page.click('#kit-f-state [data-v="done"]');
  await expect(page.locator('.kit-pitem')).toHaveCount(2);
  // progrés desat i al tauler
  await page.reload();
  expect(Object.keys((await kit(page)).practice).sort()).toEqual(['t1-f-01', 't1-f-03']);
  await page.goto('/tauler');
  const total = toc.reduce((n, u) => n + u.sections.length, 0) + bank.items.length;
  await expect(page.locator('[data-progress="eco"] .am-prog-num')).toHaveText('2 de ' + total);
  await expectNoOverflow(page);
  expect(errors).toEqual([]);
});

test('el progrés de la versió anterior (eco-prac) passa a la plantilla', async ({ page }) => {
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('eco-prac', JSON.stringify({ done: { 't1-f-01': 1, 't2-f-02': 1 } }));
  });
  await page.goto('/economia');
  await expect(page.locator('#kit-tabs')).toBeVisible();
  await expect.poll(async () => (await kit(page))?.mig).toBe(true);
  const st = await kit(page);
  expect(Object.keys(st.practice).sort()).toEqual(['t1-f-01', 't2-f-02']);
  await page.goto('/economia/practica');
  await page.click('#kit-f-state [data-v="done"]');
  await expect(page.locator('.kit-pitem')).toHaveCount(2);
});
