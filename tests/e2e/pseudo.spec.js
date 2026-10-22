import { test, expect } from '@playwright/test';
import { expectNoOverflow, setLang, watchErrors } from './helpers.js';

const TABS = {
  xuleta: ['Xuleta de pseudocodi', 'Chuleta de pseudocódigo'],
  escriu: ['Escriu i prova', 'Escribe y prueba'],
  examen: ['CP1 · algorísmica en pseudocodi', 'CP1 · algorítmica en pseudocódigo'],
  notacio: ['De C++ i Python al pseudocodi', 'De C++ y Python al pseudocódigo'],
  prior: ['Prioritats dels operadors', 'Prioridades de los operadores'],
  esquemes: ['Recorregut o cerca', 'Recorrido o búsqueda'],
  teoria: ['Preguntes de teoria', 'Preguntas de teoría'],
};

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

test('totes les seccions es carreguen en català i en castellà', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/pseudocodi');
  await expect(page.locator('h1')).toHaveText('Pseudocodi CP1');
  await expect(page.locator('#rail a[aria-current="page"]')).toHaveText('Xuleta');
  await expect(page.locator('#score')).toHaveText('0/0 · ratxa 0');
  for (const [lang, li] of [['ca', 0], ['es', 1]]) {
    if (lang === 'es') await setLang(page, 'es');
    for (const [k, t] of Object.entries(TABS)) {
      await page.locator(`#rail a[data-k="${k}"]`).click();
      await expect(page).toHaveURL(new RegExp('/pseudocodi/' + k + '$'));
      await expect(page.locator('#main h2.sec-title')).toHaveText(t[li]);
      await expect(page.locator(`#rail a[data-k="${k}"]`)).toHaveAttribute('aria-current', 'page');
      await expectNoOverflow(page);
    }
  }
  await expect(page.locator('h1')).toHaveText('Pseudocódigo CP1');
  await expect(page.locator('#brandsub')).toHaveText('Iniciación a la Programación · CP1');
  expect(errors).toEqual([]);
});

test('enllaços directes i adreces antigues', async ({ page }) => {
  await page.goto('/pseudocodi/prior');
  await expect(page.locator('#main h2.sec-title')).toHaveText(TABS.prior[0]);
  await page.goto('/pseudocodi#examen');
  await expect(page).toHaveURL(/\/pseudocodi\/examen$/);
  await page.goto('/pseudocodi/no-existeix');
  await expect(page).toHaveURL(/\/pseudocodi$/);
  await expect(page.locator('#main h2.sec-title')).toHaveText(TABS.xuleta[0]);
  await page.goto('/pseudocodi.html#esquemes');
  await expect(page).toHaveURL(/\/pseudocodi\/esquemes$/);
});

test('escriu i prova: comprovar, executar, editor i persistència', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/pseudocodi/escriu');
  await page.click('.exi[data-id="temps"]');
  await expect(page.locator('.exi[data-id="temps"]')).toHaveAttribute('aria-current', 'true');

  // una solució amb errors de notació
  await page.fill('#ed', 'ENTORN\n  E  T  Natural\nINICI_SEQÜÈNCIA\n    Llegir T\n    H = T / 3600;\nFI_SEQÜÈNCIA');
  await page.click('#wr-check');
  await expect(page.locator('#wr-out .fb.bad').first()).toContainText('Error de sintaxi');
  await expect(page.locator('#wr-out .msg.E').first()).toContainText("Per assignar s'escriu ←, no =");
  await expect(page.locator('#score')).toHaveText('0/1 · ratxa 0');

  // la solució correcta
  await page.fill('#ed', SOL_TEMPS);
  await page.click('#wr-check');
  await expect(page.locator('#wr-out .fb.ok').first()).toContainText('Tot correcte.');
  await expect(page.locator('#wr-out tbody tr')).toHaveCount(3);
  await expect(page.locator('#score')).toHaveText('1/2 · ratxa 1');
  await expect(page.locator('.exi[data-id="temps"] .tg')).toHaveText('✓ S2');

  // entrada pròpia
  await page.fill('#wr-in', '3725');
  await page.click('#wr-run');
  await expect(page.locator('#wr-out .fb.info pre')).toHaveText('1 h 2 min 5 s');

  // canvi d'idioma enmig de l'activitat: es conserven el codi i el resultat
  await setLang(page, 'es');
  await expect(page.locator('#wr-out .fb.info b')).toHaveText('Salida');
  await expect(page.locator('#ed')).toHaveValue(SOL_TEMPS);
  await setLang(page, 'ca');

  // solució model
  await page.click('#wr-sol');
  await expect(page.locator('#wr-out .model pre.ps .kw').first()).toHaveText('ENTORN');

  // persistència: esborrany, exercici fet i progrés
  await page.waitForTimeout(500);
  await page.reload();
  await page.click('.exi[data-id="temps"]');
  await expect(page.locator('#ed')).toHaveValue(SOL_TEMPS);
  await expect(page.locator('.exi[data-id="temps"]')).toHaveClass(/done/);
  await expect(page.locator('#score')).toHaveText('1/2 · ratxa 0');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('uda-pseudo-v1')));
  expect(saved.done).toEqual({ temps: 1 });
  expect(saved.prog.escriu).toEqual([1, 2]);

  // plantilla buida, tecles de símbols, fragments i tabulador
  await page.click('#wr-reset');
  await expect(page.locator('#ed')).toHaveValue(/^ENTORN\n {2}E\/S {2}IDENTIFICADOR/);
  await page.fill('#ed', 'INICI_SEQÜÈNCIA\n    x\nFI_SEQÜÈNCIA');
  await page.evaluate(() => { const ta = document.querySelector('#ed'); ta.focus(); ta.selectionStart = ta.selectionEnd = ta.value.indexOf('x') + 1; });
  await page.click('.keys button[data-s="←"]');
  await page.click('.keys button[data-s="NO"]');
  await page.click('.snips button[data-i="0"]');
  await page.keyboard.press('Tab');
  await page.keyboard.type('y');
  await expect(page.locator('#ed')).toHaveValue('INICI_SEQÜÈNCIA\n    x← NO SI  LLAVORS\n        \n    FI_SI    y\nFI_SEQÜÈNCIA');

  // filtre de la llista
  await page.click('#wr-f button[data-k="cerca"]');
  await expect(page.locator('.exi')).toHaveCount(4);
  await expect(page.locator('.exi').first()).toHaveAttribute('aria-current', 'true');
  expect(errors).toEqual([]);
});

test('preguntes de tria i prioritats compten al marcador', async ({ page }) => {
  await page.goto('/pseudocodi/teoria');
  await page.click('#tq-q .opt[data-i="0"]');
  await expect(page.locator('#tq-fb .fb')).toBeVisible();
  await expect(page.locator('#tq-q .opt.ok')).toHaveCount(1);
  await expect(page.locator('#tq-q .opt[data-i="1"]')).toBeDisabled();
  await expect(page.locator('#score')).toHaveText(/^[01]\/1\s+·\s+ratxa [01]$/);

  await page.locator('#rail a[data-k="notacio"]').click();
  await page.click('#nt-q .opt[data-i="2"]');
  await expect(page.locator('#nt-fb .fb')).toContainText(/Resposta:/);
  await expect(page.locator('#score')).toHaveText(/\/2\s+·\s+ratxa/);
  // tornar a la secció conserva la pregunta contestada
  await page.locator('#rail a[data-k="teoria"]').click();
  await expect(page.locator('#tq-fb .fb')).toBeVisible();
  await page.click('#tq-next');
  await expect(page.locator('#tq-fb .fb')).toHaveCount(0);

  await page.locator('#rail a[data-k="esquemes"]').click();
  await page.click('#es-q .opt[data-i="0"]');
  await expect(page.locator('#es-fb .fb')).toBeVisible();

  await page.locator('#rail a[data-k="prior"]').click();
  for (let n = 0; n < 3; n++) {
    if (await page.locator('[data-a]').count()) await page.click('[data-a="cert"]');
    else { await page.fill('#pr-in', '7'); await page.press('#pr-in', 'Enter'); }
    await expect(page.locator('#pr-fb .fb')).toContainText(' = ');
    await page.click('#pr-next');
    await expect(page.locator('#pr-fb .fb')).toHaveCount(0);
  }
  await expect(page.locator('#score')).toHaveText(/\/6\s+·\s+ratxa/);
});

test('simulacre: rellotge, respostes, correcció i historial', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/pseudocodi/examen');
  await expect(page.locator('#xm-clock')).toHaveText(/^(90:00|89:5\d)$/);
  await expect(page.locator('#main .card textarea.code')).toHaveCount(3);
  await expect(page.locator('#main .opt.xq')).not.toHaveCount(0);
  await page.fill('#xe-0', 'ENTORN\nINICI_SEQÜÈNCIA\n    Escriure 1\nFI_SEQÜÈNCIA');
  await page.click('.opt.xq[data-j="0"][data-i="1"]');
  await expect(page.locator('.opt.xq[data-j="0"][data-i="1"]')).toHaveClass(/sel/);

  // l'examen continua igual després de canviar de secció i d'idioma
  await page.locator('#rail a[data-k="xuleta"]').click();
  await setLang(page, 'es');
  await page.locator('#rail a[data-k="examen"]').click();
  await expect(page.locator('#xe-0')).toHaveValue(/Escriure 1/);
  await expect(page.locator('.opt.xq[data-j="0"][data-i="1"]')).toHaveClass(/sel/);

  await page.click('#xm-grade');
  await expect(page.locator('#xm-res .fb')).toContainText('Nota orientativa');
  await expect(page.locator('#xm-grade')).toBeDisabled();
  await expect(page.locator('#xe-0')).toHaveJSProperty('readOnly', true);
  await expect(page.locator('#xs-0')).toHaveText(/\/ 2\.5$/);
  await expect(page.locator('#xr-0 details.acc summary')).toHaveText('Solución modelo');
  await expect(page.locator('.opt.xq.ok')).toHaveCount(8);
  await expect(page.locator('.opt.xq[data-j="0"]').first()).toBeDisabled();

  // l'historial es desa; un examen nou torna a començar
  await page.reload();
  await expect(page.locator('.ptsbar').first()).toContainText('Últimos:');
  await expect(page.locator('#xm-grade')).toBeEnabled();
  await page.click('#xm-new');
  await expect(page.locator('#xe-0')).toHaveValue(/^ENTORN\n/);
  expect(errors).toEqual([]);
});
