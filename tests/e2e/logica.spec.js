import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';
import toc from '../../src/courses/logica/kit/toc.js';
import bank from '../../src/courses/logica/kit/bank.js';

// Lògica i grafs a la plantilla: deu temes de lògica i deu de grafs, qüestionaris com a
// comprovacions, calculadores i laboratoris, els exercicis del banc i els controls CP1/CP2.
async function openToc(page) {
  await page.locator('.kit-toc').waitFor({ state: 'attached' });
  const btn = page.locator('.kit-toc-btn');
  if (await btn.isVisible()) await btn.click();
}

test('temari: tots els temes en els dos idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') await setLang(page, 'es');
    for (const u of toc) {
      await page.goto('/logica/temari/' + u.id);
      // un títol igual en tots dos idiomes es desa com a text sol
      await expect(page.locator('.kit-unit-h h2')).toHaveText(typeof u.t === 'string' ? u.t : u.t[lang === 'ca' ? 0 : 1]);
      await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
      await expectNoOverflow(page);
    }
  }
  expect(errors).toEqual([]);
});

test('enllaços antics: unitats, grafs amb àncora, exercicis i simulacre', async ({ page }) => {
  await page.goto('/logica/u5');
  await expect(page).toHaveURL(/\/logica\/temari\/u5$/);
  await page.goto('/logica#u3');
  await expect(page).toHaveURL(/\/logica\/temari\/u3$/);
  await page.goto('/logica/grafs#8-circuits-d-euler');
  await expect(page).toHaveURL(/\/logica\/temari\/gr4#8-circuits-d-euler$/);
  await expect(page.locator('[id="8-circuits-d-euler"]')).toBeInViewport();
  // una àncora de dins d'un apartat de l'antic temari de grafs: va a l'apartat on és ara
  await page.goto('/logica/grafs#13-5-polinomi-cromatic');
  await expect(page).toHaveURL(/\/logica\/temari\/gr7#gr7-polinomi$/);
  // els temes de grafs d'abans de la reorganització
  await page.goto('/logica/temari/g3');
  await expect(page).toHaveURL(/\/logica\/temari\/gr9$/);
  await page.goto('/logica/metodes/g2');
  await expect(page).toHaveURL(/\/logica\/metodes\/gr8$/);
  await page.goto('/logica/xr');
  await expect(page).toHaveURL(/\/logica\/practica$/);
  await page.goto('/logica/sim');
  await expect(page).toHaveURL(/\/logica\/simulacre$/);
});

test('qüestionaris, calculadores i laboratoris', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/temari/u2');
  // qüestionari → comprovació
  const q = page.locator('.kit-ex-check').first();
  await q.locator('.kit-opt').first().click();
  await q.locator('.kit-check').click();
  await expect(q.locator('.kit-fb')).toBeVisible();
  // calculadora de taules de veritat
  const tt = page.locator('.lx-tool[data-tool="tt"]');
  await expect(tt.locator('.lt-v')).toContainText('Satisfactible no vàlida: certa a 1 de 4 files');
  await tt.locator('.lt-in').fill('P -> Q; Q -> R => P -> R');
  await tt.locator('.lt-in').press('Enter');
  await expect(tt.locator('.lt-v')).toContainText('És vàlid');
  await expect(tt.locator('tbody tr')).toHaveCount(8);
  // unificació
  await openToc(page);
  await page.click('.kit-toc-u:has-text("unificació")');
  const un = page.locator('.lx-tool[data-tool="unif"]');
  await expect(un.locator('.lt-v')).toContainText('Unifiquen.');
  await un.locator('[data-i="a"]').fill('P(x, f(x))'); await un.locator('[data-i="b"]').fill('P(y, y)');
  await un.locator('.lt-go').click();
  await expect(un.locator('.lt-v')).toContainText("comprovació d'ocurrència");
  // laboratoris del CP1, amb l'estat conservat entre temes
  await openToc(page);
  await page.click('.kit-toc-u:has-text("formalitzar")');
  const qn = page.locator('.lab[data-lab="quant"]');
  await expect(qn.locator('.lb-f.sel .lb-why')).toContainText('Contraexemple: Anna');
  await qn.locator('[data-n="col"]').click();
  await expect(qn.locator('.lb-f').first().locator('.lb-fx')).toHaveText('∀x : : E(x)');
  await page.click('.kit-pn .am-btn-primary');
  await page.click('.kit-pn .am-btn-secondary');
  await expect(page.locator('.lab[data-lab="quant"] [data-n="col"]')).toHaveAttribute('aria-pressed', 'true');
  expect(errors).toEqual([]);
});

test("pràctica: els exercicis i les famílies de grafs, amb el filtre d'origen i la solució per passos", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/practica');
  await expect(page.locator('#kit-count')).toHaveText(bank.items.length + bank.families.length + ' exercicis');
  await page.click('#kit-f-origin [data-v="exam"]');
  await expect(page.locator('#kit-count')).toHaveText(bank.items.filter((x) => x.src === 'exam').length + ' exercicis');
  const r1 = page.locator('article[data-ex="lg-r1"]');
  await r1.locator('.kit-steps-open').click();
  await expect(r1.locator('.kit-steps')).toContainText('Refutació per resolució');
  await r1.locator('.kit-self-b').last().click();
  await expect(r1).toHaveClass(/is-done/);
  expect(errors).toEqual([]);
});

test('simulacre: format del control CP1 (raonament, formalització i taula)', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/simulacre');
  await expect(page.locator('#kit-fmt [data-fmt="cp1"]')).toHaveAttribute('aria-checked', 'true');
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(3);
  await expect(page.locator('.kit-ex-exam .kit-pts')).toHaveText(['5 punts', '3 punts', '2 punts']);
  page.once('dialog', (d) => d.accept());
  await page.click('#kit-deliver');
  for (const g of await page.locator('.kit-ex-exam .kit-self').all()) await g.locator('.kit-self-b').nth(2).click();
  await page.click('#kit-finish');
  await expect(page.locator('#kit-mark')).toContainText('5,00');
  expect(errors).toEqual([]);
});

test('el progrés de la versió anterior passa a la plantilla', async ({ page }) => {
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('lx-done', JSON.stringify({ r1: 1, a2: 1 }));
    localStorage.setItem('lx-sim-hist', JSON.stringify([{ d: 1760000000000, m: 'CP1', t: 3000, g: 6.5 }]));
  });
  await page.goto('/logica/simulacre');
  await expect(page.locator('.kit-hist-t tbody tr')).toHaveCount(1);
  await page.goto('/logica/practica');
  await page.click('#kit-f-state [data-v="done"]');
  await expect(page.locator('.kit-pitem')).toHaveCount(2);
});
