import { test, expect } from '@playwright/test';
import { expectNoOverflow, watchErrors } from './helpers.js';

// La plantilla d'assignatura (src/courses/_kit), igual per a totes les assignatures que la fan servir.
// [ruta, clau, primer tema, tema amb comprovacions]
const KIT = [
  ['/economia', 'eco', 't1', 't1'],
  ['/computadors', 'comp', 't1', 't3'],
  ['/logica', 'logica', 'u0', 'u2'],
  ['/mates', 'mates', 'conj', null],
  ['/programacio', 'prog', 't1', 't1'],
];
const kit = (page, k) => page.evaluate((key) => JSON.parse(localStorage.getItem(key) || 'null'), 'kit-' + k + '-v1');

for (const [path, k, u1, uc] of KIT) {
  test.describe(path, () => {
    test('inici: pestanyes, temes i accessos', async ({ page }) => {
      const errors = watchErrors(page);
      await page.goto(path);
      await expect(page.locator('#kit-tabs a')).toHaveCount(6);
      await expect(page.locator('.kit-units li').first()).toBeVisible();
      await page.click('#kit-continue');
      await expect(page).toHaveURL(new RegExp(path + '/temari/' + u1 + '$'));
      await expect(page.locator('section.kit-sec').first()).toBeVisible();
      await expectNoOverflow(page);
      expect(errors).toEqual([]);
    });

    test('mode directe / explicat: capa «Adaptant la lliçó» i es recorda', async ({ page }) => {
      const errors = watchErrors(page);
      await page.goto(path + '/temari/' + u1);
      await expect(page.locator('.kit-mode-sw [data-mode="explained"]')).toHaveAttribute('aria-checked', 'true');
      await page.click('.kit-mode-sw [data-mode="direct"]');
      await expect(page.locator('.kit-adapt')).toBeVisible();
      await expect(page.locator('.kit-adapt')).toHaveText(/Adaptant la lliçó/);
      await expect(page.locator('.kit-adapt')).toHaveCount(0);
      await expect(page.locator('.kit-lesson')).toHaveAttribute('data-mode', 'direct');
      await page.reload();
      await expect(page.locator('.kit-mode-sw [data-mode="direct"]')).toHaveAttribute('aria-checked', 'true');
      // amb «menys moviment» el canvi és immediat
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.click('.kit-mode-sw [data-mode="explained"]');
      await expect(page.locator('.kit-adapt')).toHaveCount(0);
      await expect(page.locator('.kit-lesson')).toHaveAttribute('data-mode', 'explained');
      expect(errors).toEqual([]);
    });

    test('comprovació dins la lliçó i apartats llegits', async ({ page }) => {
      test.skip(!uc, 'aquesta assignatura encara no té comprovacions dins les lliçons');
      const errors = watchErrors(page);
      await page.goto(path + '/temari/' + uc);
      const chk = page.locator('.kit-ex-check').first();
      await chk.scrollIntoViewIfNeeded();
      const id = await chk.getAttribute('data-ex');
      const auto = await chk.locator('.kit-check').count();
      if (!auto) {
        // pregunta oberta: es mostra la solució i s'autoavalua
        await chk.locator('.kit-steps-open').first().click();
        await chk.locator('.kit-self-b').last().click();
        await expect(chk.locator('.kit-self-b').last()).toHaveAttribute('aria-pressed', 'true');
      }
      await expect.poll(async () => (await kit(page, k))?.checks?.[id]).toBe(auto ? undefined : 1);
      // llegir: el final del primer apartat entra a la pantalla en desplaçar-se
      const sec = await page.locator('section.kit-sec').first().getAttribute('id');
      await page.locator('.kit-sec-end').first().scrollIntoViewIfNeeded();
      await expect.poll(async () => !!(await kit(page, k))?.read?.[sec]).toBe(true);
      expect(errors).toEqual([]);
    });

    test('simulacre de 45 min: rellotge, lliurament, nota i historial', async ({ page }) => {
      const errors = watchErrors(page);
      await page.goto(path + '/simulacre');
      await page.click('#kit-dur [data-min="45"]');
      await expect(page.locator('#kit-dur [data-min="45"]')).toHaveAttribute('aria-checked', 'true');
      await page.click('#kit-start');
      await expect(page.locator('#kit-clock')).toHaveText(/^4[45]:\d\d$/);
      const n = await page.locator('.kit-ex-exam').count();
      expect(n).toBeGreaterThan(0);
      // els punts sumen 10
      const pts = await page.locator('.kit-ex-exam .kit-pts').allTextContents();
      expect(pts.reduce((s, t) => s + parseFloat(t.replace(',', '.')), 0)).toBeCloseTo(10, 5);
      // el simulacre continua després de recarregar
      await page.reload();
      await expect(page.locator('#kit-clock')).toBeVisible();
      page.once('dialog', (d) => d.accept());
      await page.click('#kit-deliver');
      // els exercicis sense correcció automàtica s'autoavaluen
      for (const g of await page.locator('.kit-ex-exam .kit-self').all()) await g.locator('.kit-self-b').nth(2).click();
      await page.click('#kit-finish');
      await expect(page.locator('#kit-mark')).toContainText('Nota');
      await page.click('text=Fes-ne un altre');
      await expect(page.locator('.kit-hist-t tbody tr')).toHaveCount(1);
      expect((await kit(page, k)).exams).toHaveLength(1);
      expect(errors).toEqual([]);
    });

    test('PDF: cada exercici amb l\'enunciat i espai per respondre', async ({ page, browserName }) => {
      const errors = watchErrors(page);
      await page.goto(path + '/simulacre');
      await page.click('#kit-dur [data-min="60"]');
      await page.click('#kit-pdf');
      await page.click('#kit-topdf');
      await expect(page).toHaveURL(new RegExp(path + '/simulacre/pdf$'));
      const qs = page.locator('#kit-sheet .kp-q');
      await expect(qs.first()).toBeVisible();
      for (const q of await qs.all()) {
        await expect(q.locator('.kp-stem')).not.toBeEmpty();
        expect(await q.locator('.kp-space, .kp-opts, .kp-match, .kp-nums').count()).toBeGreaterThan(0);
      }
      await page.locator('.kp-tools input[type="checkbox"]').check();
      await expect(page.locator('.kp-sol')).toHaveCount(await qs.count());
      // cada solució té una clau de veritat (no «—»), també als tipus propis (mexam, cpp, pseudo)
      await expect(page.locator('.kp-key', { hasText: /^\s*—\s*$/ })).toHaveCount(0);
      for (const s of await page.locator('.kp-sol').all()) expect((await s.innerText()).split('\n').length).toBeGreaterThan(1);
      // impressió: només el full
      await page.emulateMedia({ media: 'print' });
      await expect(page.locator('#kit-tabs')).toBeHidden();
      await expect(page.locator('.kp-tools')).toBeHidden();
      if (browserName === 'chromium') {
        const pdf = await page.pdf({ format: 'A4' });
        expect(pdf.length).toBeGreaterThan(10_000);
      }
      expect(errors).toEqual([]);
    });

    test('formulari flotant: cerca, es mou i es queda obert en navegar', async ({ page, isMobile }) => {
      const errors = watchErrors(page);
      await page.goto(path + '/temari/' + u1);
      await page.click('#kit-dockbtn');
      const dock = page.locator('.kit-dock');
      await expect(dock).toBeVisible();
      await expect(dock.locator('.kit-f').first()).toBeVisible();
      const all = await dock.locator('.kit-f').count();
      await dock.locator('.kit-dock-q').fill('zzqx');
      await expect(dock.locator('.kit-f')).toHaveCount(0);
      await dock.locator('.kit-dock-q').fill('');
      await expect(dock.locator('.kit-f')).toHaveCount(all);
      await expect(dock.locator('.kit-texerr')).toHaveCount(0);
      if (!isMobile) {
        const h = dock.locator('.kit-dock-h');
        const b = await h.boundingBox();
        await page.mouse.move(b.x + 40, b.y + 10);
        await page.mouse.down();
        await page.mouse.move(b.x - 200, b.y + 150, { steps: 5 });
        await page.mouse.up();
        const b2 = await h.boundingBox();
        expect(Math.round(b2.x)).toBe(Math.round(b.x - 240));
      }
      // minimitza i continua obert en anar al tauler
      await dock.locator('.kit-dock-b').first().click();
      await expect(dock).toHaveClass(/is-min/);
      // l'estat de la finestra es desa: continua oberta en una altra pàgina
      await page.goto('/tauler');
      await expect(page.locator('.kit-dock')).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.locator('.kit-dock')).toHaveCount(0);
      await expectNoOverflow(page);
      expect(errors).toEqual([]);
    });
  });
}
