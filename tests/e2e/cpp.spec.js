import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

const KEY = 'cpp-contrarellotge-v1';
const ECO = '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << n << endl;\n    return 0;\n}\n';
const ECO_BAD = ECO.replace('cout << n << endl;', 'cout << n + 1 << endl;');

/** Fa servir l'intèrpret lleuger (no cal baixar Clang) llevat que es demani el contrari. */
async function useInterp(page) {
  await page.addInitScript(([k]) => {
    try {
      if (!localStorage.getItem(k)) localStorage.setItem(k, JSON.stringify({ set: { min: 15, strict: false, sound: false, tpl: true, eng: 'interp' } }));
    } catch { /* sense emmagatzematge */ }
  }, [KEY]);
}
const setCode = (page, sel, code) => page.evaluate(([s, c]) => document.querySelector(s + ' .CodeMirror').CodeMirror.setValue(c), [sel, code]);
const stored = (page) => page.evaluate((k) => JSON.parse(localStorage.getItem(k)), KEY);

test('totes les vistes es carreguen en català i en castellà', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  const views = [
    ['', 'Pràctica cronometrada de C++', 'Práctica cronometrada de C++'],
    ['s3', 'Pràctica cronometrada de C++', 'Práctica cronometrada de C++'],
    ['exam', "Simulacre d'examen", 'Simulacro de examen'],
    ['prog', 'El meu progrés', 'Mi progreso'],
    ['pati', 'Pati de proves', 'Patio de pruebas'],
    ['model-eco', 'Pràctica · Nivell fàcil', 'Práctica · Nivel fácil'],
  ];
  for (const [li, lang] of [[1, 'ca'], [2, 'es']]) {
    await page.goto('/cpp');
    if (lang === 'es') await setLang(page, 'es');
    for (const v of views) {
      await page.goto('/cpp' + (v[0] ? '/' + v[0] : ''));
      await expect(page.locator('.main-in h1')).toHaveText(v[li]);
      await expect(page.locator('#engpill')).toBeVisible();
      await expectNoOverflow(page);
    }
  }
  await expect(page).toHaveTitle(/C\+\+ a contrarreloj/);
  expect(errors).toEqual([]);
});

test('llista: filtres, setmana a l\'adreça i persistència', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  await page.goto('/cpp/s3');
  await expect(page.locator('#f-wk')).toHaveValue('3');
  await expect(page.locator('.activity')).toHaveCount(14);
  await page.click('[data-lv="2"]');
  await expect(page.locator('.section')).toHaveCount(1);
  await page.selectOption('#f-wk', '4');
  await expect(page).toHaveURL(/\/cpp\/s4$/);
  await page.selectOption('#f-src', 'nou');
  await page.click('[data-lv="0"]');
  await page.click('[data-coll="1"]');
  await expect(page.locator('[data-coll="1"]')).toHaveAttribute('aria-expanded', 'false');
  await page.reload();
  await expect(page.locator('#f-src')).toHaveValue('nou');
  await expect(page.locator('[data-coll="1"]')).toHaveAttribute('aria-expanded', 'false');
  await page.click('#wk-all');
  await expect(page).toHaveURL(/\/cpp$/);
  await expect(page.locator('#f-wk')).toHaveValue('0');
  // obrir un exercici des de la llista i tornar-hi
  await page.click('.activity .name >> nth=0');
  await expect(page.locator('#startbtn')).toBeVisible();
  await page.click('#back');
  await expect(page).toHaveURL(/\/cpp$/);
  expect(errors).toEqual([]);
});

test('pregunta: executa, comprova amb penalització, idioma al mig i persistència', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  await page.goto('/cpp/model-eco');
  await expect(page.locator('.gate h4')).toContainText('Pregunta 1');
  await expect(page.locator('#b-run')).toBeDisabled();
  await page.click('#startbtn');
  await expect(page.locator('.gate')).toHaveCount(0);
  await expect(page.locator('#hclock')).toBeVisible();

  await setCode(page, '#ed', ECO_BAD);
  await page.click('#b-run');
  await expect(page.locator('#console')).toContainText('codi de sortida 0', { timeout: 30_000 });
  await expect(page.locator('#console')).toContainText('8');
  await page.click('#b-chk');
  await expect(page.locator('#pane')).toContainText('Puntuació màxima a partir d\'ara: 0,90', { timeout: 30_000 });
  await expect(page.locator('#bdg-res')).toHaveText('0/7');
  await page.click('#showhid');
  await expect(page.locator('.coderunner-test-results tbody tr')).toHaveCount(7);

  // canvi d'idioma enmig de l'activitat: es manté el codi, la pestanya i el resultat
  await setLang(page, 'es');
  await expect(page.locator('.main-in h1')).toHaveText('Práctica · Nivel fácil');
  await expect(page.locator('#pane')).toContainText('Tu código tiene que superar todas las pruebas');
  expect(await page.evaluate(() => document.querySelector('#ed .CodeMirror').CodeMirror.getValue())).toBe(ECO_BAD);
  await setLang(page, 'ca');

  await setCode(page, '#ed', ECO);
  await page.click('#b-ex');
  await expect(page.locator('#pane')).toContainText('Els exemples surten bé.', { timeout: 30_000 });
  await page.click('#b-chk');
  await expect(page.locator('#pane')).toContainText('Totes les proves superades!', { timeout: 30_000 });
  await expect(page.locator('#ainfo')).toHaveText('Puntuació: 0,90/1,00');
  await expect(page.locator('#qinfo')).toContainText('Correcta');

  // revisió de l'enunciat i pista
  await page.click('[data-t="rev"]');
  await expect(page.locator('.checks .ok')).toHaveCount(2);
  await page.click('#h-hint');
  await expect(page.locator('#helpzone')).toContainText('Pista');
  await page.click('#h-sol');
  await expect(page.locator('#solcm .CodeMirror')).toBeVisible();

  // persistència en tornar a carregar
  await page.reload();
  await expect(page.locator('#qinfo')).toContainText('Correcta');
  expect(await page.evaluate(() => document.querySelector('#ed .CodeMirror').CodeMirror.getValue())).toBe(ECO);
  const s = await stored(page);
  expect(s.prog['model-eco']).toMatchObject({ solved: true, grade: 90 });
  expect(s.sess['model-eco']).toMatchObject({ fin: true, checks: 2, fails: 1 });

  await page.click('#tabs [data-v="prog"]');
  await expect(page).toHaveURL(/\/cpp\/prog$/);
  await expect(page.locator('.main-in > p').first()).toContainText('1 de 71 preguntes resoltes');
  expect(errors).toEqual([]);
});

test('rellotge: pausa, continua i torna a començar', async ({ page }) => {
  await useInterp(page);
  await page.goto('/cpp/model-suma2');
  await page.click('#startbtn');
  await page.click('#cpause');
  await expect(page.locator('.gate h4')).toHaveText('En pausa');
  await page.click('#startbtn');
  await expect(page.locator('.gate')).toHaveCount(0);
  await page.click('#qflag');
  await expect(page.locator('#qflag')).toHaveClass(/on/);
  await page.click('#creset');
  await page.click('#rs-y');
  await expect(page.locator('.gate h4')).toContainText('Pregunta 2');
  // en sortir de la pregunta el rellotge es posa en pausa
  await page.click('#startbtn');
  await page.click('#tabs [data-v="list"]');
  await expect(page.locator('.activity').nth(1).locator('.right')).toContainText('En curs');
  await expect.poll(async () => (await stored(page)).sess['model-suma2'].on).toBe(false);
});

test('simulacre: lliura, passa a la següent i resum de l\'intent', async ({ page }) => {
  const errors = watchErrors(page);
  await useInterp(page);
  await page.goto('/cpp/exam');
  await page.check('input[name="preset"][value="quick"]');
  await page.click('#goExam');
  await expect(page.locator('.main-in h1')).toHaveText("Simulacre d'examen");
  await expect(page.locator('#back')).toHaveCount(0);
  await expect(page.locator('.gate')).toHaveCount(0);
  await expect(page.locator('#helpzone')).toBeEmpty();
  await expect(page.locator('#tabs [aria-current="page"]')).toHaveAttribute('data-v', 'exam');
  // la primera, sense respondre
  await page.click('#deliver');
  await expect(page.locator('#qinfo h3')).toHaveText('Pregunta 2');
  // a mitges: es pot sortir i reprendre
  await page.click('#tabs [data-v="exam"]');
  await page.click('#resumeExam');
  await expect(page.locator('#qinfo h3')).toHaveText('Pregunta 2');
  await page.click('#finish');
  await page.click('#fin-y');
  await expect(page).toHaveURL(/\/cpp\/sum$/);
  await expect(page.locator('.summary-table')).toContainText('0,00 sobre 10,00');
  await expect(page.locator('.correctness.incorrect')).toHaveCount(2);
  const s = await stored(page);
  expect(s.exam.done).toBe(true);
  expect(s.exam.res).toHaveLength(2);
  // revisió d'una pregunta en mode pràctica
  await page.locator('[data-rev]').first().click();
  await expect(page.locator('#overb')).toContainText("S'ha acabat el temps.");
  await page.goto('/cpp/exam');
  await expect(page.locator('#lastSum')).toBeVisible();
  expect(errors).toEqual([]);
});

test('opcions i adreces antigues', async ({ page }) => {
  await useInterp(page);
  await page.goto('/cpp#exam');
  await expect(page).toHaveURL(/\/cpp\/exam$/);
  await page.goto('/cpp.html#model-eco');
  await expect(page).toHaveURL(/\/cpp\/model-eco$/);
  await page.goto('/cpp/no-existeix');
  await expect(page).toHaveURL(/\/cpp$/);
  await page.goto('/cpp/exam');
  await page.click('#setbtn');
  await page.selectOption('#o-min', '10');
  await expect(page.locator('.quizinfo')).toContainText('10 min per pregunta');
  await page.keyboard.press('Escape');
  await expect(page.locator('#settings')).toHaveCount(0);
  await page.reload();
  await expect(page.locator('.quizinfo')).toContainText('10 min per pregunta');
});

test('pati de proves amb Clang real', async ({ page }, info) => {
  test.skip(info.project.name !== 'escriptori', 'baixar Clang (29 MB) una sola vegada n\'hi ha prou');
  test.setTimeout(180_000);
  const errors = watchErrors(page);
  await page.goto('/cpp/pati');
  await expect(page.locator('#ped .CodeMirror')).toBeVisible();
  await setCode(page, '#ped', '#include <iostream>\nusing namespace std;\nint main() { int x; cin >> x; cout << x * 2 << endl; return 0; }\n');
  await page.fill('#pin', '21');
  await page.click('#p-run');
  await expect(page.locator('#pcon')).toContainText('codi de sortida 0', { timeout: 150_000 });
  await expect(page.locator('#pcon')).toContainText('42');
  await expect(page.locator('#engpill')).toHaveText('Clang 22 llest');
  await page.reload();
  await expect(page.locator('#pin')).toHaveValue('21');
  expect(await page.evaluate(() => document.querySelector('#ped .CodeMirror').CodeMirror.getValue())).toContain('x * 2');
  await page.click('#p-tpl');
  await expect(page.locator('#pin')).toHaveValue('');
  expect(errors).toEqual([]);
});
