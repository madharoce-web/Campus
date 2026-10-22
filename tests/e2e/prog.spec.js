import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

const PAGES = ['t1', 't21', 's2', 't22', 's3', 't23', 's4', 's5', 's6', 's7'];

test('programació: totes les vistes es carreguen en català i castellà', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/programacio');
  await expect(page.locator('h1')).toHaveText('Iniciació a la Programació');
  await expect(page.locator('.ip-sec')).toHaveCount(7);
  await expectNoOverflow(page);
  await page.goto('/programacio/progres');
  await expect(page.locator('.ip-gt tr.wk')).toHaveCount(6);
  for (const id of PAGES) {
    await page.goto('/programacio/' + id);
    await expect(page.locator('.ip-doc > h2').first()).toBeVisible();
    await expect(page.locator('#ip-toc li').first()).toBeVisible();
    await expectNoOverflow(page);
  }
  await setLang(page, 'es');
  await expect(page.locator('h1')).toHaveText('Práctica: Funciones y procedimientos en C++');
  for (const v of ['', '/progres', ...PAGES.map((p) => '/' + p)]) {
    await page.goto('/programacio' + v);
    await expect(page.locator('#ip-ci')).toContainText('Índice del curso');
    if (PAGES.includes(v.slice(1))) await expect(page.locator('.ip-doc > h2').first()).toBeVisible();
    await expectNoOverflow(page);
  }
  await setLang(page, 'ca');
  expect(errors).toEqual([]);
});

test('programació: pseudocodi, traça, qüestionari i laboratori d\'expressions', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/programacio/s3');
  // executar pseudocodi i provocar un error d'entrada
  const ps = page.locator('.ip-cb[data-lang="ps"]').first();
  await ps.locator('[data-a="run"]').click();
  await expect(ps.locator('.ip-con')).toHaveText('Frena');
  await ps.locator('.ip-stdin').fill('');
  await ps.locator('[data-a="go"]').click();
  await expect(ps.locator('.ip-con .err')).toContainText('no queden dades');
  await expect(ps.locator('.ip-code .l.err')).toHaveCount(1);
  // traça pas a pas d'un bloc de C++ (MiniCpp)
  const tb = page.locator('.ip-cb[data-lang="cpp"]:has([data-a="trace"])').first();
  await tb.locator('[data-a="trace"]').click();
  await expect(tb.locator('.ip-trn')).toHaveText('Pas 1 / 6');
  await tb.locator('[data-t="next"]').click();
  await tb.locator('[data-t="next"]').click();
  await expect(tb.locator('.ip-trnote')).toContainText('llegeix 12 4');
  await page.keyboard.press('ArrowRight');
  await expect(tb.locator('.ip-trn')).toHaveText('Pas 4 / 6');
  await tb.locator('[data-t="last"]').click();
  await expect(tb.locator('.ip-trnote')).toContainText('Fi del programa.');
  await tb.locator('.ip-trbar input').fill('7 0');
  await tb.locator('[data-t="re"]').click();
  await expect(tb.locator('.ip-trn')).toHaveText(/^Pas 1 \//);
  await tb.locator('[data-a="trace"]').click();
  await expect(tb.locator('.ip-tr')).toHaveCount(0);
  // qüestionari: sense resposta, malament i bé
  const q = page.locator('.ip-q').first();
  await q.getByRole('button', { name: 'Comprova' }).click();
  await expect(q.locator('.st')).toHaveText('Tria una resposta');
  await q.locator('input[value="a"]').check();
  await q.getByRole('button', { name: 'Comprova' }).click();
  await expect(q.locator('.ip-qfb .res')).toHaveText('No és correcte. La bona és la b.');
  await expect(q.locator('label.wrong input')).toHaveValue('a');
  await q.locator('input[value="b"]').check();
  await q.getByRole('button', { name: 'Comprova' }).click();
  await expect(q.locator('.st')).toHaveText('Correcta');
  // laboratori d'expressions amb les prioritats del curs
  await page.goto('/programacio/t22');
  const xp = page.locator('.ip-xp');
  await expect(xp.locator('.ip-xpst.fin')).toContainText('Resultat: 8');
  await xp.locator('input.ex').fill('a < b I c = d');
  await xp.locator('input.ex').press('Enter');
  await expect(xp.locator('.ip-xpst.err')).toContainText("L'operador I necessita valors lògics");
  await xp.locator('input.ex').fill('(a < b)');
  await xp.locator('input.ex').press('End');
  await xp.locator('.ip-xpkeys button[data-k="O"]').click();
  await page.keyboard.type('(c < d)');
  await xp.getByRole('button', { name: 'Avalua' }).click();
  await expect(xp.locator('.ip-xpst.fin')).toContainText('Resultat: V');
  expect(errors).toEqual([]);
});

test('programació: fet, seccions plegades i índex es desen', async ({ page }) => {
  await page.goto('/programacio/s4');
  await page.locator('[data-done="s4"]').click();
  await expect(page.locator('.ip-compl .ip-btn.ok')).toHaveText('Fet');
  await expect(page.locator('#ip-ci a[aria-current="page"] .ip-cidone')).not.toHaveClass(/no/);
  if (await page.locator('.ip-ciopen').isVisible()) await page.locator('.ip-ciopen').click();
  await page.locator('.ip-cisech', { hasText: 'Setmana 2' }).click();
  await page.goto('/programacio');
  // a les pantalles estretes els botons de la llista d'activitats s'amaguen (com a l'original)
  if (await page.locator('[data-done="t1"]').isVisible()) await page.locator('[data-done="t1"]').click();
  else { await page.goto('/programacio/t1'); await page.locator('[data-done="t1"]').click(); await page.goto('/programacio'); }
  await page.locator('[data-coll="0"]').click();
  await expect(page.locator('.ip-progress')).toContainText('2 / 81');
  await page.reload();
  await expect(page.locator('.ip-progress')).toContainText('2 / 81');
  await expect(page.locator('[data-coll="0"]')).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#sec0 .ip-act')).toHaveCount(0);
  await expect(page.locator('.ip-cisech', { hasText: 'Setmana 2' })).toHaveAttribute('aria-expanded', 'false');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('ip-curs-v1')));
  expect(saved).toEqual({ done: { s4: true, t1: true }, coll: { 0: true }, ci: { 2: false } });
  await page.goto('/programacio/progres');
  await expect(page.locator('.ip-gt tr', { hasText: 'Tema 1. Evolució' })).toContainText('Fet');
  await page.goto('/programacio/s4');
  await page.locator('[data-undone="s4"]').click();
  await expect(page.locator('[data-done="s4"]')).toBeVisible();
});

test('programació: enllaços directes, enllaços antics i exercicis del C++', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('cpp-contrarellotge-v1', JSON.stringify({ prog: { 'model-parking': { solved: true } } })));
  await page.goto('/programacio/s4/s4-5');
  await expect(page.locator('#s4-5')).toBeInViewport();
  await page.goto('/programacio#s5');
  await expect(page).toHaveURL(/\/programacio\/s5$/);
  await page.goto('/programacio.html#s6');
  await expect(page).toHaveURL(/\/programacio\/s6$/);
  await page.goto('/programacio/no-existeix');
  await expect(page).toHaveURL(/\/programacio$/);
  await page.goto('/programacio/s3');
  await expect(page.locator('.ip-exs .ip-exsh .ip-badge')).toHaveText('1 / 14 resolts');
  await expect(page.locator('.ip-exs a', { hasText: 'El pàrking' })).toHaveAttribute('href', '/cpp/model-parking');
  await page.locator('#ip-toc a').nth(4).click();
  await expect(page.locator('#s3-5')).toBeInViewport();
  await page.locator('.ip-pn a.nx').click();
  await expect(page).toHaveURL(/\/programacio\/t23$/);
});

test('programació: canvi d\'idioma enmig d\'una activitat', async ({ page }) => {
  await page.goto('/programacio/s3');
  const q = page.locator('.ip-q').nth(1);
  await q.locator('input[value="c"]').check();
  await q.getByRole('button', { name: 'Comprova' }).click();
  const cb = page.locator('.ip-cb[data-lang="cpp"]').nth(2);
  await cb.locator('[data-a="edit"]').click();
  await cb.locator('textarea').fill('// editat\nint main() { return 0; }');
  await cb.locator('[data-a="edit"]').click();
  await setLang(page, 'es');
  await expect(page).toHaveURL(/\/programacio\/s3$/);
  await expect(page.locator('h1')).toHaveText('Práctica: Condicionales en C++ (if / else / switch)');
  await expect(q.locator('.ip-qfb .res')).toHaveText('¡Correcto!');
  await expect(cb.locator('.ip-code')).toContainText('// editat');
  await expect(cb.locator('[data-a="run"]')).toHaveText('Ejecuta');
  await setLang(page, 'ca');
});

test('programació: índex del curs a pantalles estretes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/programacio/s3');
  const ci = page.locator('#ip-ci');
  await expect(ci).not.toBeInViewport();
  await page.locator('.ip-ciopen').click();
  await expect(ci).toHaveClass(/open/);
  await page.keyboard.press('Escape');
  await expect(ci).not.toHaveClass(/open/);
  await page.locator('.ip-ciopen').click();
  await ci.getByRole('link', { name: /Tema 2\.3/ }).click();
  await expect(page).toHaveURL(/\/programacio\/t23$/);
  await expect(ci).not.toHaveClass(/open/);
  await expectNoOverflow(page);
});

test('programació: executa C++ amb Clang', async ({ page }, info) => {
  test.skip(info.project.name === 'mobil', 'el compilador (29 MB) es prova una sola vegada');
  test.setTimeout(180_000);
  await page.goto('/programacio/s3');
  const cb = page.locator('.ip-cb[data-lang="cpp"]').first();
  await cb.locator('[data-a="run"]').click();
  await expect(cb.locator('.ip-con')).toHaveText('x no val zero\nAra x val 0\n', { timeout: 150_000 });
  await expect(cb.locator('.ip-eng')).toContainText('Clang');
  const src = await cb.locator('[data-a="edit"]').click().then(() => cb.locator('textarea.ip-ed').inputValue());
  await cb.locator('textarea.ip-ed').fill(src.replace('cin >> x;', 'cin >> x'));
  await cb.locator('[data-a="edit"]').click();
  await cb.locator('[data-a="go"]').click();
  await expect(cb.locator('.ip-con .err')).toContainText('Error de compilació');
  await expect(cb.locator('.ip-code .l.err')).toHaveAttribute('data-n', '6');
  await cb.locator('[data-a="pati"]').click();
  await expect(page).toHaveURL(/\/cpp\/pati$/);
  expect(await page.evaluate(() => localStorage.getItem('ip-pati-code'))).toContain('cin >> x\n');
});
