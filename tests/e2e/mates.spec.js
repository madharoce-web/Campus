import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

// Teoria Mates CP1: pestanyes, teoria amb laboratoris i passos, exercicis, banc, pràctica, simulacre i estat desat.
const TABS = [
  ['', 'Inici', 'Inicio', 'Teoria per al CP1, explicada i per tocar'],
  ['conj', 'T1 · Conjunts', 'T1 · Conjuntos', 'Conjunts i operacions'],
  ['rel', 'T1 · Relacions', 'T1 · Relaciones', 'Relacions binàries'],
  ['nomb', 'T2 · Nombres', 'T2 · Números', 'Nombres reals i inducció'],
  ['cx', 'T2 · Complexos', 'T2 · Complejos', 'Nombres complexos'],
  ['mat', 'T3 · Matrius', 'T3 · Matrices', 'Matrius i operacions'],
  ['det', 'T3 · Determinants', 'T3 · Determinantes', 'Determinants, inversa i rang'],
  ['exer', 'Exercicis', 'Ejercicios', 'Fulls, CP1-2025 i CP2-2025'],
  ['banc', "Banc d'exercicis", 'Banco de ejercicios', 'Exercicis per tema i nivell'],
  ['exam', "Simulacre d'examen", 'Simulacro de examen', 'Examen de prova'],
  ['prac', 'Pràctica', 'Práctica', 'Exercicis generats'],
];

test('totes les pestanyes es carreguen en els dos idiomes', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') { await page.goto('/mates'); await setLang(page, 'es'); }
    for (const [k, ca, es, h2] of TABS) {
      await page.goto('/mates' + (k ? '/' + k : ''));
      await expect(page.locator('#rail a[aria-current="page"]')).toHaveText(lang === 'ca' ? ca : es);
      if (lang === 'ca') await expect(page.locator('#main .pagehead h2')).toHaveText(h2);
      await expectNoOverflow(page);
    }
  }
  await expect(page.locator('.m-ph h1')).toHaveText('Teoría Mates CP1');
  await expect(page.locator('#brandsub')).toHaveText('Matemática Computacional');
  await expect(page).toHaveTitle(/Teoría Mates CP1/);
  // les pàgines de teoria tenen tots els laboratoris
  await page.goto('/mates/cx');
  await expect(page.locator('.lab[data-w]')).toHaveCount(6);
  expect(errors).toEqual([]);
});

test('enllaços directes, enllaços antics, índex i accés al banc des de la teoria', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates#exam');
  await expect(page).toHaveURL(/\/mates\/exam$/);
  await page.goto('/mates.html#c-buit');
  await expect(page).toHaveURL(/\/mates\/c-buit$/);
  await expect(page.locator('#rail a[aria-current="page"]')).toHaveText('T1 · Conjunts');
  await expect(page.locator('#c-buit')).toBeInViewport();
  await page.goto('/mates/no-existeix');
  await expect(page).toHaveURL(/\/mates$/);
  await page.goto('/mates/inici');
  await expect(page).toHaveURL(/\/mates$/);
  // des de l'inici: una secció i els botons de les activitats
  await page.click('.tcard a[data-sec="r-hasse"]');
  await expect(page).toHaveURL(/\/mates\/r-hasse$/);
  await expect(page.locator('#r-hasse')).toBeInViewport();
  await page.goto('/mates');
  await page.click('.tcard button[data-go="prac"]');
  await expect(page).toHaveURL(/\/mates\/prac$/);
  // índex de la pàgina
  await page.goto('/mates/cx');
  await page.click('.toc a[data-sec="x-pol"]');
  await expect(page).toHaveURL(/\/mates\/x-pol$/);
  await expect(page.locator('#x-pol')).toBeInViewport();
  // la teoria dels diagrames de Hasse obre el banc amb el tema i el nivell
  await page.goto('/mates/r-hasse');
  await page.click('[data-hzgo="2"]');
  await expect(page).toHaveURL(/\/mates\/banc$/);
  await expect(page.locator('#bk-t button[data-bkk="hasse"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#bk-l button[data-bkl="2"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#bk-list .exc')).toHaveCount(6);
  await expect(page.locator('#bk-list .exc').first()).toContainText('Ordres i Hasse');
  expect(errors).toEqual([]);
});

test('laboratoris i passos: recalculen, i l\'estat es conserva en canviar de pestanya i d\'idioma', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/c-buit');
  const caixes = page.locator('.lab[data-w="caixes"]');
  await caixes.locator('[data-ex="3"]').click();
  await expect(caixes.locator('.m.big')).toHaveText('({∅} ∪ {∅}) ∖ ∅ = {∅}');
  await page.fill('#th-caixes-in', '{∅} ∪ {{∅}}');
  await expect(caixes.locator('.m.big')).toHaveText('{∅} ∪ {{∅}} = {∅, {∅}}');
  await caixes.locator('.keys [data-k="⌫"]').click();
  await expect(page.locator('#th-caixes-in')).toHaveValue('{∅} ∪ {{∅}');
  // passos que es revelen un a un
  const dinc = page.locator('#stp-th-dinc');
  await expect(dinc.locator('.st')).toHaveCount(1);
  await dinc.locator('[data-stp="next"]').click();
  await expect(dinc.locator('.st')).toHaveCount(2);
  // Venn: preset, comparació i una regió
  const venn = page.locator('.lab[data-id="th-venn2"]');
  await venn.locator('[data-pre="9"]').click();
  await expect(venn.locator('.fb.bad')).toContainText('No són iguals');
  await venn.locator('svg.venn.hit').first().click({ position: { x: 150, y: 120 } });
  await expect(venn).toContainText(/Regió \d/);
  // canvi de pestanya i d'idioma: el mateix estat, en castellà
  await page.click('#rail a[data-k="exer"]');
  await page.click('#rail a[data-k="conj"]');
  await expect(page.locator('#th-caixes-in')).toHaveValue('{∅} ∪ {{∅}');
  await expect(page.locator('#stp-th-dinc .st')).toHaveCount(2);
  await setLang(page, 'es');
  await expect(caixes.locator('.lab-h .tt')).toHaveText('Cajas dentro de cajas: ∅, {∅}, {∅, {∅}}');
  await expect(venn.locator('.fb.bad')).toContainText('No son iguales');
  await expect(venn).toContainText(/Región \d/);
  await expect(page.locator('#stp-th-dinc [data-stp="next"]')).toContainText('Siguiente paso');
  await setLang(page, 'ca');
  // relacions: la matriu i les propietats
  await page.goto('/mates/r-props');
  const rel = page.locator('.lab[data-id="th-rel2"]');
  await rel.locator('[data-pre="le"]').click();
  await expect(rel.locator('.fb.ok')).toContainText("Relació d'ordre");
  await rel.locator('.mxb[data-a="1"][data-b="1"]').click();
  await expect(rel.locator('[data-hl="refl"]')).toContainText('✗');
  // pla complex: arrossegar el punt z
  await page.goto('/mates/x-mod');
  const cz = page.locator('.lab[data-id="th-cz"]');
  await cz.locator('svg.cp').scrollIntoViewIfNeeded();
  const h = await cz.locator('circle[data-h="z"]').boundingBox();
  const svg = await cz.locator('svg.cp').boundingBox();
  await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2);
  await page.mouse.down();
  await page.mouse.move(svg.x + svg.width * 0.2, svg.y + svg.height / 2, { steps: 5 });
  await page.mouse.up();
  await expect(page.locator('#th-cz-b')).toHaveValue('0');
  await expect(page.locator('#th-cz-a')).not.toHaveValue('3');
  // matrius: editar un element recalcula el rang
  await page.goto('/mates/d-rang');
  const rank = page.locator('.lab[data-id="th-mx-rank"]');
  await rank.locator('[data-pre="r1"]').click();
  await expect(rank.locator('.st.done')).toContainText('rang A = 1');
  await rank.locator('input.mxin[data-ij="2,2"]').fill('1/2');
  await expect(rank.locator('.st.done')).toContainText('rang A = 2');
  await rank.locator('input.mxin[data-ij="2,2"]').fill('x');
  await expect(rank.locator('input.mxin[data-ij="2,2"]')).toHaveClass(/\bbad\b/);
  // dòmino: l'animació s'atura a la cinquena fitxa
  await page.goto('/mates/n-ind');
  const dom = page.locator('.lab[data-w="domino"]');
  await dom.locator('[data-s="k5"]').click();
  await dom.locator('[data-push]').click();
  await expect(dom.locator('.dom.fall')).toHaveCount(5);
  await expect(dom.locator('.dom.stuck')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('exercicis resolts: pista, solució pas a pas i laboratori', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/exer');
  const card = page.locator('#exc-f1e3b');
  await card.locator('[data-t="hint"]').click();
  await expect(card.locator('.fb.info')).toBeVisible();
  await card.locator('[data-t="sol"]').click();
  await expect(card.locator('.bx.form')).toBeVisible();
  await expect(card.locator('#stp-sol-f1e3b .st')).toHaveCount(1);
  await card.locator('#stp-sol-f1e3b [data-stp="all"]').click();
  await expect(card.locator('#stp-sol-f1e3b [data-stp="next"]')).toHaveCount(0);
  await expect(card.locator('#stp-sol2-f1e3b [data-stp="next"]')).toHaveCount(0);
  await card.locator('[data-t="lab"]').click();
  await expect(card.locator('.lab[data-w]')).toBeVisible();
  await expect(page.locator('#exc-cp1e3 .pill.out')).toHaveText('No entra');
  await setLang(page, 'es');
  await expect(card.locator('[data-t="sol"]')).toHaveText('Solución');
  await expect(card.locator('.bx.form .bh')).toHaveText('Cómo usar el formulario');
  expect(errors).toEqual([]);
});

test('pràctica: correcció, puntuació desada i el mateix exercici en l\'altre idioma', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/prac');
  await page.click('#prk button[data-k="mod"]');
  const q = page.locator('#main .card p').first();
  const nums = (await q.innerText()).match(/−?\d+/g).join(',');
  await setLang(page, 'es');
  await expect(q).toContainText('¿a qué clase');
  expect((await q.innerText()).match(/−?\d+/g).join(',')).toBe(nums);
  await setLang(page, 'ca');
  const [, n, a] = (await q.innerText()).match(/mòdul (\d+).*pertany (−?\d+)/);
  const r = (((+a.replace('−', '-')) % +n) + +n) % +n;
  await page.fill('#pr-in', String(r));
  await page.press('#pr-in', 'Enter');
  await expect(page.locator('#main .card .fb.ok')).toContainText('Correcte');
  await expect(page.locator('#score')).toHaveText('1/1');
  // venn: tocar zones i comprovar
  await page.click('#prk button[data-k="venn"]');
  await page.locator('#pr-venn svg').click({ position: { x: 150, y: 120 } });
  await page.click('#pr-check');
  await expect(page.locator('#main .card .fb')).toBeVisible();
  await expect(page.locator('#score')).toHaveText(/\/2$/);
  // teclat de símbols
  await page.click('#prk button[data-k="buit"]');
  await page.locator('.keys [data-k="{"]').click();
  await page.locator('.keys [data-k="∅"]').click();
  await page.locator('.keys [data-k="}"]').click();
  await expect(page.locator('#pr-in')).toHaveValue('{∅}');
  await page.click('#pr-new');
  await expect(page.locator('#pr-in')).toHaveValue('');
  await page.reload();
  await expect(page.locator('#score')).toHaveText(/\/2$/);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('uda-teoria-mates-v1')));
  expect(saved.n).toBe(2);
  expect(saved.tab).toBe('prac');
  expect(errors).toEqual([]);
});

test('banc d\'exercicis: tema, nivell, correcció, solució i el mateix exercici en l\'altre idioma', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/banc');
  await expect(page.locator('#bk-list .exc')).toHaveCount(6);
  await page.click('#bk-t button[data-bkk="cx"]');
  await page.click('#bk-l button[data-bkl="2"]');
  await page.click('[data-bkn="4"]');
  await expect(page.locator('#bk-list .exc')).toHaveCount(4);
  const first = page.locator('#bk-list .exc').first();
  await expect(first.locator('.exc-h')).toContainText('Complexos');
  await expect(first.locator('.exc-h')).toContainText('Mitjà');
  const nums = (await first.locator('.exc-b > div').first().innerText()).match(/\d+/g).join(',');
  await setLang(page, 'es');
  await expect(first.locator('.exc-h')).toContainText('Complejos');
  expect((await first.locator('.exc-b > div').first().innerText()).match(/\d+/g).join(',')).toBe(nums);
  await setLang(page, 'ca');
  // sense resposta: avís; amb resposta: correcció i solució
  const check = first.locator('[data-bka$="|check"]');
  if (await check.count()) {
    await check.click();
    await expect(first.locator('.fb.warn')).toBeVisible();
    for (const inp of await first.locator('input.bkin').all()) await inp.fill('1');
    for (const g of await first.locator('.tog').all()) await g.locator('button').first().click();
    await check.click();
  } else {
    await first.locator('.opt').first().click();
  }
  await expect(first.locator('.fb.ok, .fb.bad').first()).toBeVisible();
  await expect(page.locator('#score')).toHaveText(/^[01]\/1$/);
  await first.locator('[data-bka$="|sol"]').click();
  await expect(first.locator('[data-bka$="|sol"]')).toHaveText(/Amaga la solució|Solució pas a pas/);
  // un altre del mateix tipus
  const tipus = await first.locator('.exc-h .pill').first().innerText();
  await first.locator('[data-bka$="|re"]').click();
  await expect(page.locator('#bk-list .exc').first().locator('.exc-h .pill').first()).toHaveText(tipus);
  await expect(page.locator('#bk-list .exc').first().locator('.fb')).toHaveCount(0);
  // les matrius mostren la vista prèvia del que s'escriu
  await page.click('#bk-t button[data-bkk="mat"]');
  await page.click('#bk-l button[data-bkl="1"]');
  await page.click('[data-bkn="10"]');
  const mat = page.locator('input.bkin[data-k="mat"]').first();
  if (await mat.count()) {
    await mat.fill('1 2; 3 4');
    await expect(page.locator('.bkprev').first()).toContainText('2 × 2');
  }
  expect(errors).toEqual([]);
});

test('simulacre: rellotge, entrega, rúbrica, nota i estat desat', async ({ page }) => {
  const errors = watchErrors(page);
  await page.clock.install();
  await page.goto('/mates/exam');
  // rellotge aturat: només avança amb runFor
  await page.clock.pauseAt(await page.evaluate(() => Date.now() + 1000));
  await page.click('#ex-modes button[data-exm="hard"]');
  await expect(page.locator('#ex-time')).toHaveText('105:00');
  await expect(page.locator('#ex-start')).toHaveText('Comença');
  await page.click('#ex-start');
  await expect(page.locator('#ex-start')).toHaveText('Pausa');
  await page.clock.runFor('01:05');
  await expect(page.locator('#ex-time')).toHaveText('103:55');
  // el rellotge continua en una altra pestanya
  await page.click('#rail a[data-k="conj"]');
  await page.clock.runFor('01:00');
  await page.click('#rail a[data-k="exam"]');
  await expect(page.locator('#ex-time')).toHaveText('102:55');
  await page.click('#ex-start');
  await expect(page.locator('#ex-start')).toHaveText('Continua');
  const statement = await page.locator('#exq-0 .ex-q').first().innerText();
  await setLang(page, 'es');
  await expect(page.locator('#exq-0 .exc-h .src')).toHaveText('Ejercicio 1');
  await setLang(page, 'ca');
  await expect(page.locator('#exq-0 .ex-q').first()).toHaveText(statement, { useInnerText: true });
  await page.click('#ex-done');
  await expect(page.locator('.exsum')).toBeVisible();
  await expect(page.locator('.bx.rub').first()).toContainText('Com es puntua');
  await page.locator('#exq-0 [data-exg="0-0|0.75"]').click();
  await expect(page.locator('.exnote b')).toHaveText('0,75');
  await page.clock.resume();
  await page.reload();
  await expect(page.locator('.exnote b')).toHaveText('0,75');
  await expect(page.locator('#ex-time')).toHaveText('102:55');
  await expect(page.locator('#exq-0 .ex-q').first()).toHaveText(statement, { useInnerText: true });
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('teoria-mates-exam-v2')));
  expect(saved.mode).toBe('hard');
  expect(saved.done).toBe(true);
  expect(saved.sc['0-0']).toBe(0.75);
  await page.click('#ex-hide');
  await expect(page.locator('.exsum')).toHaveCount(0);
  await page.click('#ex-new');
  await expect(page.locator('#ex-time')).toHaveText('105:00');
  await expect(page.locator('#ex-done')).toBeVisible();
  expect(errors).toEqual([]);
});
