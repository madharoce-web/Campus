import { test, expect } from '@playwright/test';
import { expectNoOverflow, watchErrors } from './helpers.js';
import {
  adjMatrix, bfs, chromatic, cpm, degrees, dfs, dijkstra, eulerInfo, graph, hamilton, hierholzer, invariants,
  isConnected, isGraphic, isIsomorphism, isomorphism, isProperColouring, kruskal, matPow, pathTo, planarBounds, prim,
  strongComponents, welshPowell, walkEdges,
} from '../../src/courses/logica/graphs/model.js';
import { PRESETS, PROJECTE, complete, bipartiteK, make } from '../../src/courses/logica/graphs/presets.js';
import { graphSvg, fit } from '../../src/courses/logica/graphs/svg.js';
import { checkSeq, readSeq } from '../../src/courses/logica/graphs/check.js';
import { GRAPH_FAMILIES } from '../../src/courses/logica/graphs/families.js';
import { instance, rngOf } from '../../src/courses/_kit/bank.js';
import toc from '../../src/courses/logica/kit/toc.js';

// Grafs de Lògica i grafs: el motor (sense navegador), els generadors d'exercicis, les lliçons i els laboratoris.

test('motor: valències, matrius i successions de costats', () => {
  const G = make('ABCDE', 'AB AC AE BC BE CE DE DD');
  const d = degrees(G);
  expect(Object.values(d).reduce((a, b) => a + b, 0)).toBe(2 * G.E.length);
  expect(d.D).toBe(3);
  const A = adjMatrix(G);
  expect(A[3][3]).toBe(1);
  expect(matPow(A, 2)[0][2]).toBe(2);
  expect(isGraphic([3, 3, 2, 2, 2])).toBe(true);
  expect(isGraphic([3, 3, 3, 1])).toBe(false);
  expect(walkEdges(G, ['A', 'B', 'C', 'A'])).toEqual([0, 3, 1]);
});

test('motor: Euler, Hamilton i connexió', () => {
  expect(eulerInfo(PRESETS.konigsberg.G).kind).toBe('none');
  expect(eulerInfo(PRESETS.casa.G).kind).toBe('path');
  const flor = make('ABCDEFG', 'AB BC CA CD DE EC CF FG GC');
  const h = hierholzer(flor, 'A');
  expect(h.walk.length).toBe(flor.E.length + 1);
  expect(checkSeq({ G: flor, want: 'euler', closed: true }, h.walk.join(' '))).toBe(true);
  expect(hamilton(flor)).toBeNull();
  expect(hamilton(PRESETS.petersen.G)).toBeNull();
  expect(hamilton(complete(['A', 'B', 'C', 'D']))).toHaveLength(5);
  const sc = strongComponents(PRESETS.digraf.G);
  expect(sc.comps).toEqual([['A', 'B', 'C'], ['D', 'E', 'F']]);
});

test('motor: Dijkstra, arbres generadors i recorreguts', () => {
  const C = PRESETS.ciutats.G;
  const r = dijkstra(C, 'S');
  expect(r.dist.T).toBe(15);
  expect(pathTo(r.prev, 'T')).toEqual(['S', 'B', 'A', 'C', 'D', 'E', 'T']);
  expect(kruskal(C).total).toBe(15);
  expect(prim(C, 'S').total).toBe(15);
  const G = make('ABCDEFG', 'AB AC BD BE CE CF DG EG FG');
  expect(bfs(G, 'A').order.join('')).toBe('ABCDEFG');
  expect(dfs(G, 'A').order.join('')).toBe('ABDGECF');
});

test('motor: planaritat, isomorfisme i acoloriment', () => {
  const K5 = complete(['A', 'B', 'C', 'D', 'E']), K33 = bipartiteK(['A', 'B', 'C'], ['X', 'Y', 'Z']);
  expect(planarBounds(K5).ok3).toBe(false);
  expect(planarBounds(K33)).toMatchObject({ ok3: true, ok2: false });
  expect(isomorphism(PRESETS.prisma.G, K33)).toBeNull();
  expect(invariants(PRESETS.prisma.G).seq).toBe(invariants(K33).seq);
  const C5 = make('ABCDE', 'AB BC CD DE EA'), star = make('PQRST', 'PR RT TQ QS SP');
  const f = isomorphism(C5, star);
  expect(isIsomorphism(C5, star, f)).toBe(true);
  expect(chromatic(PRESETS.petersen.G).k).toBe(3);
  expect(chromatic(PRESETS.w5.G).k).toBe(4);
  const hex = make('ABCDEF', 'AD DE EB BC CF FA');
  expect(welshPowell(hex).k).toBe(3);
  expect(chromatic(hex).k).toBe(2);
  expect(isProperColouring(hex, welshPowell(hex).col)).toBe(true);
});

test('motor: mètode C.P.M. amb l\'exemple de classe', () => {
  const T = [['A', ['H'], 4], ['B', ['A', 'G', 'J'], 8], ['C', ['E'], 14], ['D', [], 12], ['E', [], 8], ['F', ['E'], 6], ['G', ['D', 'K', 'J'], 6], ['H', [], 8], ['I', ['J', 'K'], 10], ['J', ['H'], 6], ['K', ['E', 'D', 'F'], 8]]
    .map(([id, pre, d]) => ({ id, pre, d }));
  const r = cpm(T);
  expect(r.duration).toBe(36);
  expect(r.paths).toEqual([['E', 'F', 'K', 'G', 'B']]);
  expect([r.early.J, r.late.J]).toEqual([8, 16]);
});

test('figures: dins del dibuix i amb els colors a l\'SVG', () => {
  const G = graph(['A', 'B'], [['A', 'B'], ['B', 'B']]);
  const pos = fit({ A: [0, 0], B: [600, 400] }, G, 320, 230);
  for (const [x, y] of Object.values(pos)) { expect(x).toBeGreaterThanOrEqual(15); expect(x).toBeLessThanOrEqual(305); expect(y).toBeLessThanOrEqual(215); }
  const s = graphSvg(PRESETS.ciutats.G, { hlE: [['S', 'B']] });
  expect(s).toMatch(/^<svg viewBox="0 0 320 230"/);
  expect(s).toContain('stroke="#55672a"');
  expect(readSeq('a-b-c', ['A', 'B', 'C'])).toEqual(['A', 'B', 'C']);
  expect(readSeq('ABCA', ['A', 'B', 'C'])).toEqual(['A', 'B', 'C', 'A']);
});

test('generadors: 200 llavors de cada família donen exercicis vàlids i corregibles', () => {
  expect(GRAPH_FAMILIES.length).toBeGreaterThanOrEqual(27);
  for (const unit of toc.filter((u) => u.id.startsWith('gr') && u.id !== 'grr')) {
    const levels = new Set(GRAPH_FAMILIES.filter((f) => f.unit === unit.id).map((f) => f.level));
    expect([...levels].sort(), unit.id).toEqual(['easy', 'exam', 'hard'].filter((l) => levels.has(l)));
    expect(levels.size, unit.id).toBeGreaterThanOrEqual(2);
  }
  for (const f of GRAPH_FAMILIES) {
    for (let seed = 1; seed <= 200; seed++) {
      const ex = instance(f, seed);
      expect(ex.q || ex.qb, f.id).toBeTruthy();
      if (ex.level === 'exam') expect(ex.rubric?.length, f.id).toBeGreaterThan(0);
      if (ex.type === 'seq') expect(checkSeq(ex, ex.answer.join(' ')), f.id + '@' + seed).toBe(true);
      if (ex.type === 'colour') expect(isProperColouring(ex.G, chromatic(ex.G).col)).toBe(true);
      if (ex.type === 'nums') expect(ex.parts.every((p) => Number.isFinite(p.answer)), f.id).toBe(true);
      if (ex.G) expect(isConnected(ex.G) || ex.type === 'seq' || f.id === 'gr3-comps', f.id).toBe(true);
    }
    // la mateixa llavor dona el mateix enunciat
    expect(JSON.stringify(f.gen(rngOf(7), 7))).toBe(JSON.stringify(f.gen(rngOf(7), 7)));
  }
});

test('lliçons: els deu temes de grafs, amb figures i sense errors', async ({ page }) => {
  const errors = watchErrors(page);
  for (const u of toc.filter((x) => x.id.startsWith('gr'))) {
    await page.goto('/logica/temari/' + u.id);
    await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
    await expect(page.locator('.kit-diagram').first()).toBeVisible();
    await expectNoOverflow(page);
  }
  expect(errors).toEqual([]);
});

test('laboratoris: editor, Euler i Dijkstra', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/temari/gr1');
  const ed = page.locator('.gl[data-glab="g-editor"]');
  await expect(ed.locator('[data-out="sum"]')).toHaveText('Suma de valències: 16 = 2 · 8');
  await ed.locator('[data-m="edge"]').click();
  await ed.getByRole('button', { name: 'A', exact: true }).click();
  await ed.getByRole('button', { name: 'E', exact: true }).click();
  await expect(ed.locator('[data-out="sum"]')).toHaveText('Suma de valències: 18 = 2 · 9');
  await expect(ed.locator('.gl-mat td.is-on')).toHaveCount(18);

  await page.goto('/logica/temari/gr4');
  const eu = page.locator('.gl[data-glab="g-euler"]');
  const casa = hierholzer(PRESETS.casa.G);
  for (const v of casa.walk) await eu.getByRole('button', { name: v, exact: true }).click();
  await expect(eu.locator('[data-out="done"]')).toContainText('Camí d\'Euler');
  await eu.getByRole('button', { name: 'Què diu el teorema?' }).click();
  await expect(eu.locator('[data-out="theory"]')).toContainText('Exactament dos vèrtexs');

  await page.goto('/logica/temari/gr5');
  const dj = page.locator('.gl[data-glab="g-dijkstra"]');
  for (let i = 0; i < 7; i++) await dj.locator('[data-act="step"]').click();
  await expect(dj.locator('[data-out="result"]')).toContainText('S → B → A → C → D → E → T, longitud 15');
  await expect(dj.locator('[data-out="table"] tbody tr')).toHaveCount(8);
  expect(errors).toEqual([]);
});

test('laboratoris: planaritat, isomorfisme, acoloriment, arbres i projectes', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/logica/temari/gr6');
  const pl = page.locator('.gl[data-glab="g-planar"]');
  await expect(pl.locator('[data-out="cross"]')).toHaveText('Encreuaments: 1');
  // arrossega D cap al mig del triangle ABC: K₄ queda sense encreuaments
  const svg = pl.locator('svg.gv');
  await svg.scrollIntoViewIfNeeded();
  const box = await svg.boundingBox();
  const dv = await pl.locator('.gv-v').nth(3).boundingBox();
  await page.mouse.move(dv.x + dv.width / 2, dv.y + dv.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.42, box.y + box.height * 0.35, { steps: 8 });
  await page.mouse.up();
  await expect(pl.locator('[data-out="cross"]')).toContainText('Dibuix pla!');

  const iso = page.locator('.gl[data-glab="g-iso"]');
  await iso.locator('select').selectOption('hexagon');
  await iso.getByRole('button', { name: 'Mostra\'n una' }).click();
  await iso.locator('[data-act="check"]').click();
  await expect(iso.locator('[data-out="res"]')).toContainText('És un isomorfisme');

  await page.goto('/logica/temari/gr7');
  const co = page.locator('.gl[data-glab="g-color"]');
  for (let i = 0; i < 3; i++) await co.locator('[data-act="wp"]').click();
  await expect(co.locator('[data-out="state"]')).toHaveText('Acoloriment correcte amb 3 colors.');

  await page.goto('/logica/temari/gr8');
  const kr = page.locator('.gl[data-glab="g-tree"]').first();
  await kr.getByRole('button', { name: 'Fins al final' }).click();
  await expect(kr).toContainText('Pes de l\'arbre: 15 ✓');

  await page.goto('/logica/temari/gr9');
  const pm = page.locator('.gl[data-glab="g-cpm"]');
  await expect(pm.locator('[data-out="dur"]')).toContainText('Durada del projecte: 17. Camí crític: B → E → G → H.');
  await pm.getByLabel('Durada de A').fill('9');
  const T9 = PROJECTE.map((t) => (t.id === 'A' ? { ...t, d: 9 } : t));
  await expect(pm.locator('[data-out="dur"]')).toContainText('Durada del projecte: ' + cpm(T9).duration + '.');
  await expectNoOverflow(page);
  expect(errors).toEqual([]);
});

test('exercicis: successió de vèrtexs, acoloriment i simulacre de grafs', async ({ page }) => {
  const errors = watchErrors(page);
  // el primer tipus examen del tema G4 és el circuit d'Euler de la família gr4-troba amb la llavor 4
  const ex = instance(GRAPH_FAMILIES.find((f) => f.id === 'gr4-troba'), 4);
  await page.goto('/logica/temari/gr4#kit-end');
  const art = page.locator('article[data-ex="gr4-troba@4"]');
  await art.locator('.gl-seq').fill(ex.answer.join(' '));
  await art.locator('.kit-check').click();
  await expect(art.locator('.kit-fb')).toHaveClass(/is-ok/);

  await page.goto('/logica/simulacre');
  await page.click('#kit-fmt [data-fmt="grafs"]');
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(5);
  await expect(page.getByRole('group', { name: 'Graf per acolorir' })).toBeVisible();
  expect(errors).toEqual([]);
});
