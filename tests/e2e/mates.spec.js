import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';
import toc from '../../src/courses/mates/kit/toc.js';
import exercises from '../../src/courses/mates/kit/exercises.js';
import formulas from '../../src/courses/mates/kit/formulas.js';

// Teoria Mates CP1 a la plantilla: sis temes importats (amb les fórmules en TeX), 30 laboratoris,
// passos que es revelen un a un, el formulari de l'examen, els exercicis resolts, el banc per nivells
// i la pràctica ràpida (generadors d'abans) i el simulacre amb el format del CP.
async function openToc(page) {
  await page.locator('.kit-toc').waitFor({ state: 'attached' });
  const btn = page.locator('.kit-toc-btn');
  if (await btn.isVisible()) await btn.click();
}
const flat = (s) => s.replace(/\s+/g, '');

test('temari: els sis temes en els dos idiomes, sense errors de fórmules', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') await setLang(page, 'es');
    for (const u of toc) {
      await page.goto('/mates/temari/' + u.id);
      await expect(page.locator('.kit-unit-h h2')).toHaveText(typeof u.t === 'string' ? u.t : u.t[lang === 'ca' ? 0 : 1]);
      await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
      await expect(page.locator('.kit-texerr')).toHaveCount(0);
      await expectNoOverflow(page);
    }
  }
  // en anglès: els temes ja estan traduïts, sense avís
  await setLang(page, 'en');
  await page.goto('/mates/temari/conj');
  await expect(page.locator('.app-langnote')).toHaveCount(0);
  await expect(page.locator('.kit-unit-h h2')).toHaveText(toc[0].t[2]);
  expect(errors).toEqual([]);
});

test('enllaços antics: pestanyes, apartats i el simulacre', async ({ page }) => {
  await page.goto('/mates/conj');
  await expect(page).toHaveURL(/\/mates\/temari\/conj$/);
  await page.goto('/mates/c-desc');
  await expect(page).toHaveURL(/\/mates\/temari\/conj#c-desc$/);
  await expect(page.locator('#c-desc')).toBeInViewport();
  await page.goto('/mates/det');
  await expect(page).toHaveURL(/\/mates\/temari\/det$/);
  for (const t of ['banc', 'prac', 'exer']) {
    await page.goto('/mates/' + t);
    await expect(page).toHaveURL(/\/mates\/practica$/);
  }
  await page.goto('/mates/exam');
  await expect(page).toHaveURL(/\/mates\/simulacre$/);
  await page.goto('/mates#exam');
  await expect(page).toHaveURL(/\/mates\/simulacre$/);
});

test('teoria: «Per entendre-ho» només en mode explicat, passos un a un i laboratoris', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/temari/conj#c-incl');
  const sec = page.locator('#c-incl');
  await expect(sec.locator('.kit-box-box').first()).toContainText('Per entendre-ho');
  // passos de la doble inclusió: el primer i, després, un a un
  const st = sec.locator('.kit-steps').first();
  await expect(st.locator('li')).toHaveCount(1);
  await st.locator('.kit-steps-more .am-btn').click();
  await expect(st.locator('li')).toHaveCount(2);
  await st.locator('.kit-steps-more .kit-link').click();
  await expect(st.locator('.kit-steps-more')).toHaveCount(0);
  // mode directe: sense «Per entendre-ho»
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.click('.kit-mode-sw [data-mode="direct"]');
  await expect(page.locator('.kit-box-box')).toHaveCount(0);
  await page.click('.kit-mode-sw [data-mode="explained"]');
  // laboratori de comprensió: canviar l'univers recalcula el resultat
  await openToc(page);
  await page.click('.kit-toc-s a:has-text("extensió")');
  const lab = page.locator('.lab[data-w="compr"]');
  await lab.scrollIntoViewIfNeeded();
  await expect(lab.locator('.disp').first()).toBeVisible();
  const before = await lab.locator('.st.done').last().innerText();
  await lab.locator('button:has-text("ℤ")').first().click();
  await expect.poll(async () => lab.locator('.st.done').last().innerText()).not.toBe(before);
  await expect(page.locator('.kit-texerr')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('formulari: les entrades del full del CP, amb el nom de cada fila', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/temari/rel');
  await page.click('#kit-dockbtn');
  const dock = page.locator('.kit-dock');
  await expect(dock.locator('.kit-f')).toHaveCount(formulas.groups.reduce((n, g) => n + g.items.length, 0));
  await dock.locator('.kit-dock-q').fill('Complementari (7)');
  await expect(dock.locator('.kit-f')).toHaveCount(1);
  await expect(dock.locator('.kit-f math')).toHaveCount(1);
  await expect(dock.locator('.kit-texerr')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('exercicis resolts: origen, pista, solució amb les files del formulari i laboratori', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/practica');
  await page.click('#kit-f-origin [data-v="exam"]');
  await expect(page.locator('#kit-count')).toHaveText(exercises.items.filter((x) => x.src === 'exam').length + ' exercicis');
  const ex = page.locator('article[data-ex="m-cp1e2"]');
  await expect(ex.locator('.kit-src')).toContainText('CP1-2025');
  await ex.locator('.kit-link:has-text("Pista")').click();
  await expect(ex.locator('.kit-hint')).toContainText('Doble inclusió');
  await ex.locator('.kit-steps-open').click();
  await expect(ex.locator('.kit-steps .kit-h3').first()).toContainText('Mètode 1');
  // una referència al formulari obre el formulari flotant
  await ex.locator('.kit-step-f').first().click();
  await expect(page.locator('.kit-dock')).toBeVisible();
  await page.keyboard.press('Escape');
  await ex.locator('.kit-labbtn').click();
  await expect(ex.locator('.lab[data-w="venn"]')).toBeVisible();
  await ex.locator('.kit-self-b').last().click();
  await expect(ex).toHaveClass(/is-done/);
  expect(errors).toEqual([]);
});

test('banc per nivells: correcció, resposta, solució i el mateix exercici en castellà', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/practica');
  await page.selectOption('#kit-f-unit', 'conj');
  await page.click('#kit-f-level [data-v="easy"]');
  const ex = page.locator('article[data-ex="mb-conj-1-0"]');
  await ex.locator('.bkin').fill('{99}');
  await ex.locator('.kit-check').click();
  await expect(ex.locator('.kit-fb')).toHaveClass(/is-ko/);
  // la solució s'obre sola després d'un error, amb la guia «Només amb el formulari»
  await expect(ex.locator('.mb-sol')).toContainText('Només amb el formulari');
  const ans = flat((await ex.locator('.kit-fb').innerText()).split(':').pop());
  // el mateix exercici en castellà (mateixa llavor): els mateixos nombres
  const nums = (t) => t.replace(/[^0-9{}]/g, '');
  const q = nums(await ex.locator('.mb-q').innerText());
  await setLang(page, 'es');
  await expect(ex.locator('.mb-q')).toContainText('Sea');
  expect(nums(await ex.locator('.mb-q').innerText())).toBe(q);
  await ex.locator('.bkin').fill(ans);
  await ex.locator('.kit-check').click();
  await expect(ex.locator('.kit-fb')).toHaveClass(/is-ok/);
  await expect(ex).toHaveClass(/is-done/);
  // «Genera'n un altre»: dades noves
  await page.locator('.kit-fam:has(article[data-ex="mb-conj-1-0"]) .kit-another').click();
  await expect.poll(async () => nums(await ex.locator('.mb-q').innerText())).not.toBe(q);
  expect(errors).toEqual([]);
});

test('pràctica ràpida: classes mòdul n, Venn i torna-hi', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/practica');
  await page.selectOption('#kit-f-unit', 'rel');
  const m = page.locator('article[data-ex="mp-mod"]');
  const txt = flat(await m.locator('.mp-in p').first().innerText());
  const [, n, a] = txt.match(/mòdul(\d+).*pertany([−-]?\d+)/);
  const r = ((+a.replace('−', '-') % +n) + +n) % +n;
  await m.locator('input').fill(String(r));
  await m.locator('.kit-check').click();
  await expect(m.locator('.fb.ok')).toBeVisible();
  await expect(m).toHaveClass(/is-done/);
  await page.selectOption('#kit-f-unit', 'conj');
  const v = page.locator('article[data-ex="mp-venn"]');
  await v.locator('.kit-check').click();
  await expect(v.locator('.fb.bad')).toBeVisible();
  await v.locator('.mp-again').click();
  await expect(v.locator('.fb')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('simulacre amb el format del CP: sis exercicis, 10 punts, rúbrica, nota i PDF', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/mates/simulacre');
  await expect(page.locator('#kit-fmt [data-fmt="cp"]')).toHaveAttribute('aria-checked', 'true');
  await expect(page.locator('#kit-fmt [data-fmt]')).toHaveCount(4);
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(6);
  const pts = await page.locator('.kit-ex-exam .kit-ex-h .kit-pts').allTextContents();
  expect(pts.reduce((s, t) => s + parseFloat(t.replace(',', '.')), 0)).toBeCloseTo(10, 5);
  await expect(page.locator('.kit-ex-exam').first()).toContainText('Conjunts');
  page.once('dialog', (d) => d.accept());
  await page.click('#kit-deliver');
  const first = page.locator('.kit-ex-exam').first();
  await first.locator('.mb-solbtn').first().click();
  await expect(first.locator('.bx.rub')).toContainText('Com es puntua');
  for (const g of await page.locator('.kit-ex-exam .kit-self').all()) await g.locator('.kit-self-b').nth(4).click();
  await page.click('#kit-finish');
  await expect(page.locator('#kit-mark')).toContainText('10,00');
  await page.click('text=Fes-ne un altre');
  await page.click('#kit-fmt [data-fmt="hard"]');
  await page.click('#kit-pdf');
  await page.click('#kit-topdf');
  await expect(page.locator('#kit-sheet .kp-q')).toHaveCount(7);
  await expect(page.locator('#kit-sheet .kit-texerr')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('el simulacre lliurat de la versió anterior passa a l\'historial', async ({ page }) => {
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('teoria-mates-exam-v2', JSON.stringify({ mode: 'cp', seed: 5, el: 3000, done: true, sc: { '0-0': 1, '0-1': 0.5, '2-0': 1.25 } }));
  });
  await page.goto('/mates/simulacre');
  await expect(page.locator('.kit-hist-t tbody tr')).toHaveCount(1);
  await expect(page.locator('.kit-hist-t tbody tr')).toContainText('2,75');
});
