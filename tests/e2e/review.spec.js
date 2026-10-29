import { test, expect } from '@playwright/test';
import { expectNoOverflow, watchErrors } from './helpers.js';
import { INTERVALS, isDue, nextState, parseId, cardId, pickSession, streak, dayOf } from '../../src/lib/review.js';
import { GRAPH_FAMILIES } from '../../src/courses/logica/graphs/families.js';
import { instance } from '../../src/courses/_kit/bank.js';

// Repàs a mida (lib/review.js): l'algorisme de caixes, sense navegador, i el recorregut complet a la web.

const DAY = 86400000;
const T0 = new Date(2026, 9, 29, 18, 30).getTime();

test('algorisme: un error entra a la caixa 1 i cada encert la puja fins que es domina', () => {
  expect(nextState(null, true, T0)).toBeNull();
  let c = nextState(null, false, T0, { ref: 'x' });
  expect(c).toMatchObject({ ref: 'x', box: 1, wrong: 1 });
  expect(isDue(c, T0)).toBe(false);
  expect(isDue(c, T0 + DAY)).toBe(true);
  let t = T0;
  for (let box = 2; box <= INTERVALS.length; box++) {
    t = c.due + 3600000;
    c = nextState(c, true, t);
    expect(c.box).toBe(box);
    expect(isDue(c, t + (INTERVALS[box - 1] - 1) * DAY)).toBe(false);
    expect(isDue(c, t + INTERVALS[box - 1] * DAY)).toBe(true);
  }
  expect(nextState(c, true, c.due)).toBe('mastered');
  // un error a mig camí la torna a la primera caixa
  expect(nextState({ ...c, box: 4 }, false, T0)).toMatchObject({ box: 1, wrong: 2 });
});

test('algorisme: sessió alternant assignatures, ratxa i ids de famílies', () => {
  const cards = {
    a: { a1: { due: 10, wrong: 1 }, a2: { due: 20, wrong: 1 }, a3: { due: T0 + 9 * DAY, wrong: 1 } },
    b: { b1: { due: 5, wrong: 2 } },
  };
  expect(pickSession(cards, T0).map((x) => x.id)).toEqual(['b1', 'a1', 'a2']);
  expect(pickSession(cards, T0, { max: 2, subjects: ['a'] }).map((x) => x.id)).toEqual(['a1', 'a2']);
  expect(streak([dayOf(T0 - DAY), dayOf(T0)], T0)).toBe(2);
  expect(streak([dayOf(T0 - 2 * DAY), dayOf(T0 - DAY)], T0)).toBe(2);
  expect(streak([dayOf(T0 - 3 * DAY)], T0)).toBe(0);
  expect(parseId('gr4-troba@4')).toEqual({ ref: 'gr4-troba', seed: 4 });
  expect(parseId('gr4-troba', 7)).toEqual({ ref: 'gr4-troba', seed: 7 });
  expect(cardId(parseId('g1-c1'))).toBe('g1-c1');
});

/** Avança les targetes del repàs com si hagués passat un dia (les que no són per avui passen a vençudes). */
async function nextDay(page) {
  await page.evaluate(() => {
    const st = JSON.parse(localStorage.getItem('review-v1'));
    for (const cs of Object.values(st.cards)) for (const c of Object.values(cs)) c.due -= 86400000;
    localStorage.setItem('review-v1', JSON.stringify(st));
  });
}

test('web: els errors tornen al tauler i a la pestanya de repàs, i en encertar-los avancen', async ({ page }) => {
  const errors = watchErrors(page);
  // un error en una comprovació de la lliçó i un altre en un exercici generat del final del tema
  await page.goto('/logica/temari/gr1');
  const c1 = page.locator('article[data-ex="g1-c1"]');
  await c1.locator('input').fill('5');
  await c1.locator('.kit-check').click();
  await expect(c1.locator('.kit-fb')).toHaveClass(/is-ko/);
  await page.goto('/logica/temari/gr4#kit-end');
  const ex = instance(GRAPH_FAMILIES.find((f) => f.id === 'gr4-troba'), 4);
  const eu = page.locator('article[data-ex="gr4-troba@4"]');
  await eu.locator('.gl-seq').fill(ex.G.V.slice(0, 2).join(' '));
  await eu.locator('.kit-check').click();
  await expect(eu.locator('.kit-fb')).toHaveClass(/is-ko/);

  // avui encara no toca
  await page.goto('/tauler');
  await expect(page.locator('#m-review')).toContainText('Avui no tens res per repassar');
  await nextDay(page);
  await page.reload();
  await expect(page.locator('#m-review [data-review="logica"] .am-prog-num')).toHaveText('2 exercicis');
  await page.click('#m-review [data-review="logica"] .m-revgo');
  await expect(page).toHaveURL(/\/logica\/repas$/);
  await expect(page.locator('#kit-tabs [data-out="review-due"]')).toHaveText('2');
  await expect(page.locator('.kit-review .kit-ex')).toHaveCount(2);
  await expectNoOverflow(page);

  // es tornen a fer bé
  await page.locator('article[data-ex="g1-c1"] input').fill('6');
  await page.locator('article[data-ex="g1-c1"] .kit-check').click();
  await page.locator('article[data-ex="gr4-troba@4"] .gl-seq').fill(ex.answer.join(' '));
  await page.locator('article[data-ex="gr4-troba@4"] .kit-check').click();
  await expect(page.locator('#kit-review-end')).toBeVisible();
  await expect(page.locator('[data-out="prog"]')).toHaveText('2 de 2 fets');

  // pugen a la caixa 2 (tornen d'aquí a 3 dies) i la ratxa és d'un dia
  const st = await page.evaluate(() => JSON.parse(localStorage.getItem('review-v1')));
  expect(Object.values(st.cards.logica).map((c) => c.box)).toEqual([2, 2]);
  expect(st.cards.logica['gr4-troba@4']).toMatchObject({ ref: 'gr4-troba', seed: 4 });
  await page.reload();
  await expect(page.locator('#kit-review-empty')).toContainText('Avui no tens res per repassar');
  await expect(page.locator('#kit-review-stats [data-out="total"]')).toHaveText('2');
  await expect(page.locator('#kit-tabs [data-out="review-due"]')).toHaveCount(0);
  await page.goto('/logica');
  await expect(page.locator('#kit-review-note')).toHaveCount(0);
  expect(errors).toEqual([]);
});
