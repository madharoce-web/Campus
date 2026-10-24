import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';
import toc from '../../src/courses/prog/kit/toc.js';
import exercises from '../../src/courses/prog/kit/exercises.js';

// Iniciació a la Programació a la plantilla, amb el pseudocodi i el C++ a contrarellotge d'abans:
// teoria i pràctiques amb codi executable, exercicis de C++ amb proves ocultes, exercicis de pseudocodi
// amb l'intèrpret, preguntes curtes, xuleta, pati de proves i els dos simulacres del CP1.
const ECO = '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << n << endl;\n    return 0;\n}\n';
const ECO_BAD = ECO.replace('cout << n << endl;', 'cout << n + 1 << endl;');
const SOL_TEMPS = `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    T              Natural  Segons totals
  S    H              Natural  Hores
  S    M              Natural  Minuts
  S    S              Natural  Segons
INICI_SEQÜÈNCIA
    Llegir T
    {T ≥ 0}
    H ← T ‖ 3600
    M ← (T |R 3600) ‖ 60
    S ← T |R 60
    Escriure H, " h ", M, " min ", S, " s"
FI_SEQÜÈNCIA`;

/** Fa servir l'intèrpret lleuger de C++ (no cal baixar Clang) llevat que es demani el contrari. */
async function useInterp(page) {
  await page.addInitScript(() => { try { if (!localStorage.getItem('prog-cpp-eng')) localStorage.setItem('prog-cpp-eng', '"interp"'); } catch { /* sense emmagatzematge */ } });
}
const setCode = (loc, code) => loc.locator('.CodeMirror').evaluate((el, c) => el.CodeMirror.setValue(c), code);

test('temari: les onze unitats en català i castellà', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lang of ['ca', 'es']) {
    if (lang === 'es') await setLang(page, 'es');
    for (const u of toc) {
      await page.goto('/programacio/temari/' + u.id);
      await expect(page.locator('.kit-unit-h h2')).toHaveText(typeof u.t === 'string' ? u.t : u.t[lang === 'ca' ? 0 : 1]);
      await expect(page.locator('section.kit-sec')).toHaveCount(u.sections.length);
      await expectNoOverflow(page);
    }
  }
  expect(errors).toEqual([]);
});

test('enllaços antics de les tres webs', async ({ page }) => {
  await page.goto('/programacio/s3');
  await expect(page).toHaveURL(/\/programacio\/temari\/s3$/);
  await page.goto('/programacio/s4/s4-5');
  await expect(page).toHaveURL(/\/programacio\/temari\/s4#s4-5$/);
  await expect(page.locator('#s4-5')).toBeInViewport();
  await page.goto('/programacio#s5');
  await expect(page).toHaveURL(/\/programacio\/temari\/s5$/);
  await page.goto('/programacio/progres');
  await expect(page).toHaveURL(/\/programacio$/);
  await page.goto('/pseudocodi/escriu');
  await expect(page).toHaveURL(/\/programacio\/practica\?unit=t21$/);
  await expect(page.locator('#kit-f-unit')).toHaveValue('t21');
  await page.goto('/pseudocodi');
  await expect(page).toHaveURL(/\/programacio\/temari\/xu$/);
  await page.goto('/pseudocodi/examen');
  await expect(page).toHaveURL(/\/programacio\/simulacre$/);
  await page.goto('/cpp/model-parking');
  await expect(page).toHaveURL(/\/programacio\/practica\?unit=s3&ex=cpp-model-parking$/);
  await expect(page.locator('article[data-ex="cpp-model-parking"]')).toBeInViewport();
  await page.goto('/cpp/pati');
  await expect(page).toHaveURL(/\/programacio\/temari\/s2#pati$/);
  await page.goto('/cpp');
  await expect(page).toHaveURL(/\/programacio\/practica$/);
});

test('teoria: pseudocodi executable, traça, qüestionari i laboratori d\'expressions', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/programacio/temari/s3');
  const ps = page.locator('.ip-cb[data-lang="ps"]').first();
  await ps.locator('[data-a="run"]').click();
  await expect(ps.locator('.ip-con')).toHaveText('Frena');
  await ps.locator('.ip-stdin').fill('');
  await ps.locator('[data-a="go"]').click();
  await expect(ps.locator('.ip-con .err')).toContainText('no queden dades');
  // traça pas a pas d'un bloc de C++
  const tb = page.locator('.ip-cb[data-lang="cpp"]:has([data-a="trace"])').first();
  await tb.locator('[data-a="trace"]').click();
  await expect(tb.locator('.ip-trn')).toHaveText('Pas 1 / 6');
  await tb.locator('[data-t="last"]').click();
  await expect(tb.locator('.ip-trnote')).toContainText('Fi del programa.');
  // qüestionari → comprovació de la plantilla
  const q = page.locator('.kit-ex-check').first();
  await q.locator('.kit-opt').first().click();
  await q.locator('.kit-check').click();
  await expect(q.locator('.kit-fb')).toBeVisible();
  // exercicis de la setmana: enllacen amb la pràctica
  const exs = page.locator('.ip-exs');
  await expect(exs.locator('.ip-exsh .ip-badge')).toHaveText('0 / ' + exercises.items.filter((x) => x.unit === 's3' && x.type === 'cpp').length + ' resolts');
  // laboratori d'expressions amb les prioritats del curs
  await page.goto('/programacio/temari/t22');
  const xp = page.locator('.ip-xp');
  await xp.scrollIntoViewIfNeeded();
  await expect(xp.locator('.ip-xpst.fin')).toContainText('Resultat: 8');
  await xp.locator('input.ex').fill('a < b I c = d');
  await xp.locator('input.ex').press('Enter');
  await expect(xp.locator('.ip-xpst.err')).toContainText("L'operador I necessita valors lògics");
  expect(errors).toEqual([]);
});

test('C++: executa, prova els exemples, comprova amb proves ocultes, esborrany i solució', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  await page.goto('/programacio/practica?unit=s2&ex=cpp-model-eco');
  const ex = page.locator('article[data-ex="cpp-model-eco"]');
  await expect(ex).toBeInViewport();
  await setCode(ex, ECO_BAD);
  await ex.locator('.pg-io summary').click();
  await ex.locator('.pg-run').click();
  await expect(ex.locator('.pg-console')).toContainText('codi de sortida 0', { timeout: 30_000 });
  await expect(ex.locator('.pg-console')).toContainText('8');
  await ex.locator('.pg-chk').click();
  await expect(ex.locator('.pg-res .kit-fb')).toContainText('0/7 proves superades', { timeout: 30_000 });
  await ex.locator('.pg-showhid').click();
  await expect(ex.locator('.coderunner-test-results tbody tr')).toHaveCount(7);
  await setCode(ex, ECO);
  await ex.locator('.pg-ex').click();
  await expect(ex.locator('.pg-res .kit-fb')).toContainText('Els exemples surten bé', { timeout: 30_000 });
  await ex.locator('.pg-chk').click();
  await expect(ex.locator('.pg-res .kit-fb')).toHaveText('Totes les proves superades.', { timeout: 30_000 });
  await expect(ex).toHaveClass(/is-done/);
  await ex.locator('.kit-link:has-text("Pista")').click();
  await expect(ex.locator('.kit-hint')).toContainText('cin');
  await ex.locator('.kit-steps-open').click();
  await expect(ex.locator('.kit-steps .ip-cb[data-lang="cpp"]')).toBeVisible();
  // l'esborrany i l'exercici fet es conserven
  await page.reload();
  await expect(page.locator('article[data-ex="cpp-model-eco"]')).toHaveClass(/is-done/);
  expect(await page.locator('article[data-ex="cpp-model-eco"] .CodeMirror').evaluate((el) => el.CodeMirror.getValue())).toBe(ECO);
  expect(errors).toEqual([]);
});

test('pseudocodi: notació, jocs de proves, entrada pròpia i editor', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/programacio/practica?unit=t21&ex=ps-temps');
  const ex = page.locator('article[data-ex="ps-temps"]');
  const ed = ex.locator('textarea.code');
  await ed.fill('ENTORN\n  E  T  Natural\nINICI_SEQÜÈNCIA\n    Llegir T\n    H = T / 3600;\nFI_SEQÜÈNCIA');
  await ex.locator('.pg-chk').click();
  await expect(ex.locator('.fb.bad').first()).toContainText('Error de sintaxi');
  await expect(ex.locator('.msg.E').first()).toContainText("Per assignar s'escriu ←, no =");
  await ed.fill(SOL_TEMPS);
  await ex.locator('.pg-chk').click();
  await expect(ex.locator('.fb.ok').first()).toContainText('Tot correcte');
  await expect(ex.locator('tbody tr')).toHaveCount(3);
  await expect(ex).toHaveClass(/is-done/);
  await ex.locator('.pg-in').fill('3725');
  await ex.locator('.pg-run').click();
  await expect(ex.locator('.fb.info pre')).toHaveText('1 h 2 min 5 s');
  // canvi d'idioma: es conserva el codi
  await setLang(page, 'es');
  await expect(ed).toHaveValue(SOL_TEMPS);
  await setLang(page, 'ca');
  // tecles de símbols i plantilla buida
  await ex.locator('.pg-reset').click();
  await expect(ed).toHaveValue(/^ENTORN\n {2}E\/S {2}IDENTIFICADOR/);
  await ex.locator('.keys button[data-s="←"]').click();
  await expect(ed).toHaveValue(/←/);
  expect(errors).toEqual([]);
});

test('preguntes curtes: notació, prioritats i esquemes', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/programacio/practica?unit=t22');
  const nota = page.locator('article[data-ex="pq-nota"]');
  await nota.locator('.kit-opt').first().click();
  await nota.locator('.kit-check').click();
  await expect(nota.locator('.kit-fb')).toBeVisible();
  const prio = page.locator('article[data-ex="pq-prio"]');
  await expect(prio.locator('.kit-ex-q code')).toBeVisible();
  await page.selectOption('#kit-f-unit', 't23');
  await expect(page.locator('article[data-ex="pq-esq"]')).toBeVisible();
  expect(errors).toEqual([]);
});

test('simulacres: pseudocodi com el CP1 (11 preguntes) i C++ com el CodeRunner (4 programes)', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  await page.goto('/programacio/simulacre');
  await expect(page.locator('#kit-fmt [data-fmt="cpp"]')).toHaveAttribute('aria-checked', 'true');
  await page.click('#kit-fmt [data-fmt="pseudo"]');
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(11);
  const pts = await page.locator('.kit-ex-exam .kit-ex-h .kit-pts').allTextContents();
  expect(pts.reduce((s, t) => s + parseFloat(t.replace(',', '.')), 0)).toBeCloseTo(10, 1);
  // el primer algorisme amb la solució model: 2,5 punts
  const first = page.locator('.kit-ex-exam').first();
  const id = (await first.getAttribute('data-ex')).replace(/^ps-/, '');
  const model = exercises.items.find((x) => x.id === 'ps-' + id).sol[0].src;
  await first.locator('textarea.code').fill(model);
  page.once('dialog', (d) => d.accept());
  await page.click('#kit-deliver');
  await page.click('#kit-finish');
  await expect(page.locator('#kit-mark')).toContainText('2,50');
  await page.click('text=Fes-ne un altre');
  await page.click('#kit-fmt [data-fmt="cpp"]');
  await page.click('#kit-start');
  await expect(page.locator('.kit-ex-exam')).toHaveCount(4);
  await expect(page.locator('.kit-ex-exam .pg-note').first()).toContainText('Comprova');
  expect(errors).toEqual([]);
});

test('el progrés de les webs anteriors passa a la plantilla', async ({ page }) => {
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('ip-curs-v1', JSON.stringify({ done: { t1: true }, coll: {}, ci: {} }));
    localStorage.setItem('cpp-contrarellotge-v1', JSON.stringify({ prog: { 'model-eco': { solved: true } } }));
    localStorage.setItem('uda-pseudo-v1', JSON.stringify({ done: { temps: 1 }, exams: [{ d: '01/10', n: 7.5 }] }));
  });
  await page.goto('/programacio/simulacre');
  await expect(page.locator('.kit-hist-t tbody tr')).toHaveCount(1);
  await page.goto('/programacio/practica');
  await page.click('#kit-f-state [data-v="done"]');
  await expect(page.locator('.kit-pitem')).toHaveCount(2);
  await page.goto('/programacio/temari/t1');
  await expect(page.locator('.kit-toc-u[aria-current="page"] small')).toHaveText(/^(\d+)\/\1$/);
});

test('C++ amb Clang real: un exemple de la teoria i el pati de proves', async ({ page }, info) => {
  test.skip(info.project.name !== 'escriptori', 'el compilador (29 MB) es prova una sola vegada');
  test.setTimeout(180_000);
  await page.goto('/programacio/temari/s3');
  const cb = page.locator('.ip-cb[data-lang="cpp"]:has([data-a="run"])').first();
  await cb.locator('[data-a="run"]').click();
  await expect(cb.locator('.ip-con')).toHaveText('x no val zero\nAra x val 0\n', { timeout: 150_000 });
  await expect(cb.locator('.ip-eng')).toContainText('Clang');
  await cb.locator('[data-a="pati"]').click();
  await expect(page).toHaveURL(/\/programacio\/temari\/s2#pati$/);
  const pati = page.locator('.pg-pati');
  await expect(pati.locator('.CodeMirror')).toBeVisible();
  await setCode(pati, '#include <iostream>\nusing namespace std;\nint main() { int x; cin >> x; cout << x * 2 << endl; return 0; }\n');
  await pati.locator('#pin').fill('21');
  await pati.locator('#p-run').click();
  await expect(pati.locator('#pcon')).toContainText('42', { timeout: 60_000 });
  await page.reload();
  await expect(page.locator('#pin')).toHaveValue('21');
});
