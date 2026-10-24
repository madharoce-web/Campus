import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';
import toc from '../../src/courses/comp/kit/toc.js';
import t3toc from '../../src/courses/comp/kit/t3/toc.js';

// Computadors CP1 a la plantilla: temes T1–T2.2 importats, T3 (àlgebra de Boole) escrit en tres
// idiomes, laboratoris, exercicis amb apartats, pràctica generada i simulacre amb el format del CP1.
const UNITS = [...toc, t3toc];

async function openToc(page) {
  await page.locator('.kit-toc').waitFor({ state: 'attached' });
  const btn = page.locator('.kit-toc-btn');
  if (await btn.isVisible()) await btn.click();
}

test('temari: els quatre temes, en català i castellà; el T3 també en anglès', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') await setLang(page, 'es');
    for (const u of UNITS) {
      await page.goto('/computadors/temari/' + u.id);
      await expect(page.locator('.kit-unit-h h2')).toHaveText(u.t[lang === 'ca' ? 0 : 1]);
      await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
      await expectNoOverflow(page);
    }
  }
  await setLang(page, 'en');
  await page.goto('/computadors/temari/t3');
  await expect(page.locator('.kit-unit-h h2')).toHaveText('Boolean algebra');
  await expect(page.locator('.app-langnote')).toHaveCount(0);
  await expect(page.locator('#t3-abs')).toContainText('A variable «absorbs» a term that already contains it');
  await page.goto('/computadors/temari/t21');
  await expect(page.locator('.app-langnote')).toContainText('not yet available in English');
  await expect(page.locator('.kit-texerr')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('enllaços antics', async ({ page }) => {
  await page.goto('/computadors/t21');
  await expect(page).toHaveURL(/\/computadors\/temari\/t21$/);
  await page.goto('/computadors/b-conv');
  await expect(page).toHaveURL(/\/computadors\/temari\/t21#b-conv$/);
  await expect(page.locator('#b-conv')).toBeInViewport();
  await page.goto('/computadors/exer');
  await expect(page).toHaveURL(/\/computadors\/practica$/);
  await page.goto('/computadors/exam');
  await expect(page).toHaveURL(/\/computadors\/simulacre$/);
  await page.goto('/computadors/no-existeix');
  await expect(page).toHaveURL(/\/computadors$/);
});

test('laboratoris: recalculen i conserven l\'estat entre temes i idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/temari/t1');
  const units = page.locator('.lab[data-w="units"]');
  await page.fill('#th-units-x', '1.5'); await page.press('#th-units-x', 'Tab');
  await page.selectOption('#th-units-a', 'GB'); await page.selectOption('#th-units-b', 'GiB');
  await expect(page.locator('#th-units-x')).toHaveValue('1,5');
  await expect(units.locator('.st.done .mm')).toHaveText(/1,5 GB ≈ 1,397 GiB/);
  const comp = page.locator('.lab[data-w="compila"]');
  await comp.getByRole('button', { name: 'Executa' }).click();
  await expect(comp.locator('.console .err')).toContainText('error a la línia 3');
  await setLang(page, 'es');
  await expect(units.locator('.lab-h .tt')).toHaveText('Convertidor de unidades paso a paso');
  await expect(comp.locator('.console .err')).toContainText('error en la línea 3');
  await setLang(page, 'ca');
  await openToc(page);
  await page.click('.kit-toc-u:has-text("Representació")');
  const ieee = page.locator('.lab[data-w="ieee"]');
  await ieee.getByRole('button', { name: 'nombre → bits' }).click();
  await page.fill('#th-ieee-x', '-2,75'); await page.press('#th-ieee-x', 'Enter');
  await expect(ieee.locator('.kv .mono').last()).toHaveText('C0300000');
  await openToc(page);
  await page.click('.kit-toc-u:has-text("Introducció")');
  await expect(page.locator('#th-units-x')).toHaveValue('1,5');
  expect(errors).toEqual([]);
});

test('exercicis amb apartats: comprovació, avís de l\'error, solució i laboratori', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/practica');
  const ex = page.locator('article[data-ex="c-a1"]');
  const p1 = ex.locator('.cp-part').nth(0), p2 = ex.locator('.cp-part').nth(1);
  await p1.locator('.cp-in').fill('32');
  await p1.locator('.cp-check').click();
  await expect(p1).toHaveClass(/is-ok/);
  // sense dividir entre 8: l'avís ho diu
  await p2.locator('.cp-in').fill('64');
  await p2.locator('.cp-check').click();
  await expect(p2.locator('.kit-fb')).toContainText('factor 8');
  await p2.locator('.cp-solbtn').click();
  await expect(p2.locator('.cp-sol')).toContainText('8 B');
  await p2.locator('.cp-labbtn').click();
  await expect(p2.locator('.lab[data-w="units"]')).toBeVisible();
  // pràctica generada: la primera instància de cada família és la llavor 1
  await page.selectOption('#kit-f-unit', 't1');
  await page.click('#kit-f-level [data-v="easy"]');
  const g = page.locator('article[data-ex="g-units"]');
  await g.locator('.cp-in').fill('1000');
  await g.locator('.kit-check').click();
  await expect(g.locator('.kit-fb')).toHaveClass(/is-ok/);
  await expect(g).toHaveClass(/is-done/);
  expect(errors).toEqual([]);
});

test('simulacre amb el format del CP1: blocs, punts, lliurament i PDF', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/simulacre');
  await expect(page.locator('#kit-fmt [data-fmt="cp1"]')).toHaveAttribute('aria-checked', 'true');
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(22);
  const pts = await page.locator('.kit-ex-exam .kit-pts').allTextContents();
  expect(pts.reduce((s, t) => s + parseFloat(t.replace(',', '.')), 0)).toBeCloseTo(10, 5);
  await expect(page.locator('.kit-ex-exam').first()).toContainText('Canvis de mida');
  page.once('dialog', (d) => d.accept());
  await page.click('#kit-deliver');
  await page.click('#kit-finish');
  await expect(page.locator('#kit-mark')).toContainText('0,00');
  await page.click('text=Fes-ne un altre');
  await page.click('#kit-fmt [data-fmt="custom"]');
  await expect(page.locator('.kit-cb')).toHaveCount(4);
  await page.click('#kit-pdf');
  await page.click('#kit-topdf');
  await expect(page.locator('#kit-sheet .kp-q').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('T3: taula de veritat, expressió simplificada i laboratoris de Boole', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/temari/t3');
  // taula de A·B̄·C: només la fila 1 0 1 val 1
  const tt = page.locator('article[data-ex="t3-basic-q1"]');
  const cells = tt.locator('.bl-cell');
  for (let i = 0; i < 8; i++) { await cells.nth(i).click(); if (i !== 5) await cells.nth(i).click(); }
  await tt.locator('.kit-check').click();
  await expect(tt.locator('.kit-fb')).toHaveText('Correcte.');
  // simplificar: una resposta equivalent però massa llarga no val
  const b = page.locator('article[data-ex="t3-simp-q1"]');
  await b.locator('.bl-in').fill("AB'C+AB'");
  await expect(b.locator('.bl-prev .kit-math')).toBeVisible();
  await b.locator('.kit-check').click();
  await expect(b.locator('.bl-why')).toContainText('encara es pot simplificar');
  await b.locator('.bl-in').fill("A·B'");
  await b.locator('.kit-check').click();
  await expect(b.locator('.kit-fb').last()).toHaveText('Correcte.');
  // portes en viu
  const gates = page.locator('.lab[data-w="boole-gates"]');
  await gates.locator('[data-var="A"]').click();
  await expect(gates.locator('tr[data-op="AND"] .bl-led')).toHaveAttribute('data-v', '1');
  await expect(gates.locator('tr[data-op="XOR"] .bl-led')).toHaveAttribute('data-v', '0');
  // són equivalents? l'error típic de la NAND
  const eq = page.locator('.lab[data-w="boole-equiv"]').first();
  await eq.locator('select').selectOption('bad1');
  await expect(eq.locator('.bl-verdict')).toHaveClass(/is-no/);
  await expect(eq.locator('tr.is-diff')).toHaveCount(2);
  await eq.locator('select').selectOption('morgan');
  await expect(eq.locator('.bl-verdict')).toHaveClass(/is-yes/);
  // taula de veritat amb columnes intermèdies
  const tr = page.locator('.lab[data-w="boole-truth"]');
  await tr.locator('input.bl-in').fill("(A+B)'C");
  await expect(tr.locator('thead th')).toHaveCount(3 + 3);
  await expect(tr.locator('.small').last()).toContainText('1 de 8');
  expect(errors).toEqual([]);
});

test('T3: mètodes d\'examen, pràctica per nivells i formulari amb les lleis', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/metodes/t3');
  await expect(page.locator('#kit-tricks .kit-box')).toHaveCount(3);
  await expect(page.locator('#kit-solved .kit-solved')).toHaveCount(3);
  await page.goto('/computadors/practica');
  await page.selectOption('#kit-f-unit', 't3');
  for (const lv of ['easy', 'exam', 'hard']) {
    await page.click('#kit-f-level [data-v="' + lv + '"]');
    expect(await page.locator('.kit-pitem').count(), lv).toBeGreaterThan(2);
  }
  await page.click('#kit-dockbtn');
  await page.locator('.kit-dock-q').fill('absor');
  await expect(page.locator('.kit-dock .kit-f')).toHaveCount(1);
  await expect(page.locator('.kit-dock .kit-f math')).toHaveCount(1);
  expect(errors).toEqual([]);
});
