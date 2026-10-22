import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

// Computadors CP1: pestanyes, laboratoris, exercicis, pràctica, simulacre, enllaços i estat desat.
const TABS = [
  ['', 'Inici', 'Inicio', 'Teoria, activitats i simulacres per al CP1'],
  ['t1', 'T1 · Introducció', 'T1 · Introducción', 'Introducció als computadors'],
  ['t21', 'T2.1 · Representació', 'T2.1 · Representación', 'Representació de la informació'],
  ['t22', 'T2.2 · Multimèdia', 'T2.2 · Multimedia', 'Formats multimèdia'],
  ['exer', 'Exercicis', 'Ejercicios', 'Activitats, full d\'exercicis i pràctica CP1'],
  ['prac', 'Pràctica', 'Práctica', 'Exercicis generats'],
  ['exam', 'Simulacre', 'Simulacro', 'Examen tipus CP1'],
];

test('totes les pestanyes es carreguen en els dos idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') { await page.goto('/computadors'); await setLang(page, 'es'); }
    for (const [k, ca, es, h2] of TABS) {
      await page.goto('/computadors' + (k ? '/' + k : ''));
      await expect(page.locator('#rail a[aria-current="page"]')).toHaveText(lang === 'ca' ? ca : es);
      if (lang === 'ca') await expect(page.locator('#main .pagehead h2')).toHaveText(h2);
      await expectNoOverflow(page);
    }
  }
  await expect(page.locator('.m-ph h1')).toHaveText('Computadores CP1');
  await expect(page).toHaveTitle(/Computadores CP1/);
  expect(errors).toEqual([]);
});

test('enllaços directes, enllaços antics i rutes desconegudes', async ({ page }) => {
  await page.goto('/computadors#exam');
  await expect(page).toHaveURL(/\/computadors\/exam$/);
  await page.goto('/computadors.html#t21');
  await expect(page).toHaveURL(/\/computadors\/t21$/);
  await page.goto('/computadors/no-existeix');
  await expect(page).toHaveURL(/\/computadors$/);
  await page.goto('/computadors/inici');
  await expect(page).toHaveURL(/\/computadors$/);
  // una secció de teoria: pestanya T1 i la secció a la vista
  await page.goto('/computadors/t1-vn');
  await expect(page.locator('#rail a[aria-current="page"]')).toHaveText('T1 · Introducció');
  await expect(page.locator('#t1-vn')).toBeInViewport();
  // des de l'inici, l'enllaç d'una secció i el d'un grup d'exercicis
  await page.goto('/computadors');
  await page.click('.tcard a[data-sec="b-ieee"]');
  await expect(page).toHaveURL(/\/computadors\/b-ieee$/);
  await expect(page.locator('#b-ieee')).toBeInViewport();
  await page.goto('/computadors');
  await page.click('.tcard a[data-xg="g5"]');
  await expect(page).toHaveURL(/\/computadors\/exer$/);
  await expect(page.locator('#xg button[aria-pressed="true"]')).toContainText('T2.2 · Multimèdia');
  // índex de la pàgina de teoria
  await page.goto('/computadors/t22');
  await page.click('.toc a[data-sec="m-video"]');
  await expect(page).toHaveURL(/\/computadors\/m-video$/);
  await expect(page.locator('#m-video')).toBeInViewport();
});

test('laboratoris: els controls recalculen i l\'estat es conserva en canviar de pestanya i d\'idioma', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/computadors/t1');
  const units = page.locator('.lab[data-w="units"]');
  await page.fill('#th-units-x', '1.5'); await page.press('#th-units-x', 'Tab');
  await page.selectOption('#th-units-a', 'GB'); await page.selectOption('#th-units-b', 'GiB');
  await expect(page.locator('#th-units-x')).toHaveValue('1,5');
  await expect(units.locator('.st.done .mm')).toHaveText(/1,5 GB ≈ 1,397 GiB/);
  const vn = page.locator('.lab[data-w="vonneumann"]');
  await vn.getByRole('button', { name: 'Harvard' }).click();
  await vn.getByRole('button', { name: 'Tot' }).click();
  await expect(vn.locator('.explain')).toContainText('5 cicles');
  const comp = page.locator('.lab[data-w="compila"]');
  await comp.getByRole('button', { name: 'Executa' }).click();
  await expect(comp.locator('.console .err')).toContainText('error a la línia 3');
  // canvi d'idioma: els laboratoris es tornen a pintar amb el mateix estat
  await setLang(page, 'es');
  await expect(units.locator('.lab-h .tt')).toHaveText('Convertidor de unidades paso a paso');
  await expect(units.locator('.st.done .mm')).toHaveText(/1,5 GB ≈ 1,397 GiB/);
  await expect(comp.locator('.console .err')).toContainText('error en la línea 3');
  await expect(vn.locator('.explain')).toContainText('5 ciclos');
  await setLang(page, 'ca');
  // T2.1: bits del registre i IEEE 754
  await page.goto('/computadors/t21');
  const signed = page.locator('.lab[data-w="signed"]');
  await signed.locator('.chipbtn', { hasText: /^4$/ }).click();
  await expect(signed.locator('svg.p-wheel')).toBeVisible();
  await signed.getByRole('button', { name: '+1' }).click();
  await expect(signed.locator('.prow').nth(3)).toContainText('−4');
  const ieee = page.locator('.lab[data-w="ieee"]');
  await ieee.getByRole('button', { name: 'NaN' }).click();
  await expect(ieee.locator('.kv .bigmono')).toHaveText('NaN');
  await ieee.getByRole('button', { name: 'nombre → bits' }).click();
  await page.fill('#th-ieee-x', '-2,75'); await page.press('#th-ieee-x', 'Enter');
  await expect(ieee.locator('.kv .mono').last()).toHaveText('C0300000');
  // l'estat es conserva en tornar a la pestanya
  await page.click('#rail a[data-k="exer"]');
  await page.click('#rail a[data-k="t21"]');
  await expect(page.locator('.lab[data-w="ieee"] .kv .mono').last()).toHaveText('C0300000');
  // T2.2: el canvas de l'àudio es dibuixa
  await page.goto('/computadors/t22');
  const painted = await page.locator('#th-audio-cv').evaluate((c) => { const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
  expect(painted).toBeGreaterThan(1000);
  expect(errors).toEqual([]);
});

test('exercicis: comprovar, pistes d\'error, solucions i laboratori', async ({ page }) => {
  await page.goto('/computadors/exer');
  const p0 = page.locator('#xp-a1-0'), p1 = page.locator('#xp-a1-1');
  await p0.locator('input').fill('32'); await p0.getByRole('button', { name: 'Comprova' }).click();
  await expect(p0).toHaveClass(/\bok\b/);
  await expect(page.locator('#exc-a1 .pill')).toHaveText('1/7');
  await p1.locator('input').fill('64'); await p1.locator('input').press('Enter');
  await expect(p1.locator('.fb.bad')).toContainText('factor 8');
  await setLang(page, 'es');
  await expect(p1.locator('.fb.bad')).toContainText('el factor 8 entre bits y bytes');
  await expect(p0.locator('input')).toHaveValue('32');
  await setLang(page, 'ca');
  await p1.getByRole('button', { name: 'Solució' }).click();
  await expect(p1.locator('.stepsE')).toBeVisible();
  await p1.getByRole('button', { name: 'Lab' }).click();
  await expect(p1.locator('.lab[data-w="units"]')).toBeVisible();
  const mc = page.locator('#xp-a2-4');
  await mc.locator('.pick').nth(1).click();
  await expect(mc.locator('.pick').nth(1)).toHaveClass(/\bok\b/);
  await page.locator('#exc-a3').getByRole('button', { name: 'Mostra totes les solucions' }).click();
  await expect(page.locator('#exc-a3 .stepsE')).toHaveCount(4);
  await page.locator('#xg button[data-g="g4"]').click();
  const sm = page.locator('#xp-sm-1');
  await sm.locator('input').fill('11100111'); await sm.getByRole('button', { name: 'Comprova' }).click();
  await expect(sm.locator('.fb.bad')).toContainText('representació en C2');
  await expect(page.locator('#xg button[data-g="g1"] .muted')).toHaveText('2/29');
});

test('pràctica: correcció, ratxa, puntuació desada i canvi d\'idioma amb el mateix exercici', async ({ page }) => {
  await page.goto('/computadors/prac');
  await page.click('#prk button[data-k="range"]');
  await page.click('[data-lvl="normal"]');
  const q = page.locator('.card.stack > div').first();
  const text = await q.innerText();
  const sys = /\((SM|C1|C2|CE)\)/.exec(text)[1], N = +/(\d+) bits/.exec(text)[1];
  const h = 2 ** (N - 1), lo = sys === 'SM' || sys === 'C1' ? -(h - 1) : -h, hi = h - 1;
  // canvi d'idioma: el mateix sistema i els mateixos bits
  await setLang(page, 'es');
  await expect(q).toContainText('(' + sys + ')');
  await expect(q).toContainText(N + ' bits');
  await setLang(page, 'ca');
  await page.fill('#pr-min', String(lo)); await page.fill('#pr-max', String(hi)); await page.press('#pr-max', 'Enter');
  await expect(page.locator('.card .fb.ok')).toContainText('Correcte');
  await expect(page.locator('.lvl b.mono')).toHaveText('1');
  await expect(page.locator('#score')).toHaveText('1/1');
  await page.click('#pr-new');
  await expect(page.locator('#pr-min')).toBeFocused();
  await page.fill('#pr-min', '0'); await page.fill('#pr-max', '0'); await page.click('#pr-check');
  await expect(page.locator('.card .fb.bad')).toContainText('Incorrecte');
  await expect(page.locator('.lvl b.mono')).toHaveText('0');
  await expect(page.locator('#score')).toHaveText('1/2');
  // conceptes: opcions a, b, c, d
  await page.click('#prk button[data-k="teo"]');
  await page.locator('.opt').first().click();
  await page.click('#pr-check');
  await expect(page.locator('.opt.ok')).toHaveCount(1);
  await expect(page.locator('#score')).toHaveText(/\/3$/);
  // codificar en nivell dur: botó «No es pot representar»
  await page.click('#prk button[data-k="enc"]'); await page.click('[data-lvl="dur"]');
  await page.click('#pr-oor');
  await expect(page.locator('#pr-oor')).toHaveClass(/primary/);
  await page.reload();
  await expect(page.locator('#score')).toHaveText(/\/3$/);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('uda-computadors-cp1-v1')));
  expect(saved.n).toBe(3);
  expect(saved.tab).toBe('prac');
});

test('simulacre: rellotge, entrega amb confirmació, nota i historial', async ({ page }) => {
  await page.goto('/computadors/exam');
  await page.click('[data-dur="45"]');
  await page.click('#ex-go');
  await expect(page.locator('#ex-timer')).toHaveText(/^4[45]:\d\d$/);
  await expect(page.locator('#ex-cnt')).toHaveText('0/22 respostes');
  await page.fill('[data-exin="0"]', '123'); await page.press('[data-exin="0"]', 'Enter');
  await expect(page.locator('[data-exin="1"]')).toBeFocused();
  await expect(page.locator('#ex-cnt')).toHaveText('1/22 respostes');
  // la resposta es conserva en canviar de pestanya
  await page.click('#rail a[data-k="t1"]');
  await page.click('#rail a[data-k="exam"]');
  await expect(page.locator('[data-exin="0"]')).toHaveValue('123');
  await page.click('#ex-sub');
  await expect(page.locator('#ex-sub')).toHaveText('Segur? Falten 21');
  await page.click('#ex-sub');
  await expect(page.locator('.grade')).toBeVisible();
  await expect(page.locator('.qcard.bad').first()).toBeVisible();
  await expect(page.locator('#score')).toHaveText('0/22');
  await page.click('#ex-wrong');
  await expect(page.locator('.qcard .stepsE').first()).toBeVisible();
  await page.click('#ex-again');
  await expect(page.locator('#main')).toContainText('Notes anteriors: ');
  // abandonar demana confirmació
  await page.click('#ex-go');
  await page.click('#ex-quit');
  await expect(page.locator('#ex-quit')).toHaveText('Segur? Es perd tot');
  await page.click('#ex-quit');
  await expect(page.locator('#ex-go')).toBeVisible();
  await page.reload();
  await expect(page.locator('#main')).toContainText('Notes anteriors: ');
});

test('simulacre: s\'entrega sol quan s\'acaba el temps, encara que s\'estigui en una altra pestanya', async ({ page }) => {
  await page.clock.install();
  await page.goto('/computadors/exam');
  await page.click('[data-dur="45"]');
  await page.click('#ex-go');
  await page.click('#rail a[data-k="t1"]');
  await page.clock.runFor('45:02');
  await expect(page.locator('#score')).toHaveText('0/22');
  await page.click('#rail a[data-k="exam"]');
  await expect(page.locator('#main')).toContainText("S'ha acabat el temps.");
});
