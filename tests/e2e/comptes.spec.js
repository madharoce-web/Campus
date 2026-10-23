import { test, expect } from '@playwright/test';
import { expectNoOverflow, watchErrors } from './helpers.js';
import { mockSupabase, TEST_CODE } from './supabase-mock.js';

// Aquestes proves corren contra dist-comptes (compilat amb Supabase configurat) i un
// Supabase simulat (vegeu playwright.config.js i supabase-mock.js).

async function enterCode(page, email) {
  await page.fill('#ac-email', email);
  await page.click('[data-state="email"] button[type="submit"]');
  await expect(page.locator('[data-state="code"] h1')).toHaveText('Revisa el correu');
  await page.fill('#ac-code', TEST_CODE);
  await page.click('[data-state="code"] button[type="submit"]');
}

test('convidat: el progrés passa al compte en entrar amb el codi del correu', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context);
  await page.goto('/cursos');
  await expect(page.locator('#m-save')).toBeVisible();
  await page.click('[data-kebab="mates"] .m-kbtn');
  await page.click('[data-kebab="mates"] [data-act="star"]');

  await page.click('#m-login');
  await expect(page).toHaveURL(/\/entrar\?next=%2Fcursos$/);
  await expect(page.locator('h1')).toHaveText('Entra a Aula Mada');
  await expectNoOverflow(page);

  // correu no vàlid i codi incorrecte
  await page.fill('#ac-email', 'no-es-un-correu');
  await page.click('[data-state="email"] button[type="submit"]');
  await expect(page.locator('#ac-err')).toBeVisible();
  await page.fill('#ac-email', 'ana@example.com');
  await page.click('[data-state="email"] button[type="submit"]');
  await expect(page.locator('[data-state="code"]')).toBeVisible();
  expect(sb.db.otps).toEqual(['ana@example.com']);
  await page.fill('#ac-code', '000000');
  await page.click('[data-state="code"] button[type="submit"]');
  await expect(page.locator('#ac-err')).toBeVisible();

  await page.fill('#ac-code', TEST_CODE);
  await page.click('[data-state="code"] button[type="submit"]');
  await expect(page).toHaveURL(/\/cursos$/);
  await expect(page.locator('.m-av-on')).toHaveText('A');
  await expect(page.locator('#m-save')).toHaveCount(0);
  await expect(page.locator('#m-login')).toHaveCount(0);
  await expect.poll(() => sb.state('ana@example.com')['sem1-stars']).toBe('["mates"]');

  // els canvis següents també es pugen
  await page.click('[data-kebab="eco"] .m-kbtn');
  await page.click('[data-kebab="eco"] [data-act="hide"]');
  await expect.poll(() => sb.state('ana@example.com')['sem1-hidden'], { timeout: 10_000 }).toBe('["eco"]');
  // l'únic error és el 403 esperat del codi incorrecte
  expect(errors.filter((e) => !e.includes('status of 403'))).toEqual([]);
});

test('un navegador nou rep el progrés del compte, i en sortir s’esborra d’aquí', async ({ page, context }) => {
  const sb = await mockSupabase(context, {
    users: [{ email: 'bru@example.com', profile: { display_name: 'Bru Vila' }, state: [['sem1-stars', '["logica"]', '2026-10-01T10:00:00Z']] }],
  });
  await page.goto('/entrar?next=%2Fcursos');
  await enterCode(page, 'bru@example.com');
  await expect(page).toHaveURL(/\/cursos$/);
  await expect(page.locator('.m-av-on')).toHaveText('BV');
  await expect(page.locator('.m-card:has([data-kebab="logica"]) .m-starw')).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('sem1-stars'))).toBe('["logica"]');

  await page.click('#m-ubtn');
  await expect(page.locator('.m-uwho')).toContainText('bru@example.com');
  await page.click('#m-usignout');
  await expect(page.locator('#m-login')).toBeVisible();
  await expect(page.locator('.m-starw')).toHaveCount(0);
  expect(await page.evaluate(() => localStorage.getItem('sem1-stars'))).toBeNull();
  expect(sb.state('bru@example.com')['sem1-stars']).toBe('["logica"]');
});

test('entrar amb Google torna a la pàgina d’on venia', async ({ page, context }) => {
  const errors = watchErrors(page);
  await mockSupabase(context);
  await page.goto('/graus/informatica');
  await page.click('#m-login');
  await page.click('.ac-google');
  await expect(page).toHaveURL(/\/graus\/informatica$/);
  await expect(page.locator('.m-av-on')).toHaveText('G');
  expect(errors).toEqual([]);
});

test('el meu compte: perfil, descàrrega de dades i esborrat', async ({ page, context }) => {
  const sb = await mockSupabase(context, { users: [{ email: 'cai@example.com', state: [['eco-prac', '{"n":3}', '2026-10-01T10:00:00Z']] }] });
  await page.goto('/compte');
  await expect(page.locator('[data-state="guest"]')).toBeVisible();
  await page.click('[data-state="guest"] .am-btn');
  await enterCode(page, 'cai@example.com');
  await expect(page).toHaveURL(/\/compte$/);
  await expect(page.locator('.ac-email')).toHaveText('cai@example.com');
  await expect(page.locator('.ac-sync')).toContainText('Sincronitzat');
  await expectNoOverflow(page);

  await page.fill('#ac-name', 'Cai Ferrer');
  await page.selectOption('#ac-degree', 'informatica');
  await page.click('.ac-form button[type="submit"]');
  await expect(page.locator('.ac-ok')).toHaveText('Desat');
  expect(sb.profile('cai@example.com')).toMatchObject({ display_name: 'Cai Ferrer', degree: 'informatica' });
  await expect(page.locator('.m-av-on')).toHaveText('CF');

  const [download] = await Promise.all([page.waitForEvent('download'), page.click('text=Descarrega les meves dades')]);
  const data = JSON.parse(await (await download.createReadStream()).toArray().then((c) => Buffer.concat(c).toString()));
  expect(data.email).toBe('cai@example.com');
  expect(data.progress.map((r) => r.key)).toContain('eco-prac');

  await page.click('.ac-danger .ac-danger-btn');
  await expect(page.locator('.ac-danger-solid')).toBeDisabled();
  await page.fill('#ac-del', 'cai@example.com');
  await page.click('.ac-danger-solid');
  await expect(page.locator('[data-state="guest"]')).toBeVisible();
  expect(sb.db.users.map((u) => u.email)).not.toContain('cai@example.com');
  expect(await page.evaluate(() => localStorage.getItem('eco-prac'))).toBeNull();
});

test('llista d’espera d’un grau que encara no hi és', async ({ page, context }) => {
  const sb = await mockSupabase(context);
  await page.goto('/graus/infermeria');
  await page.fill('#gr-email', 'nou');
  await page.click('.gr-notify button');
  await expect(page.locator('.gr-err')).toBeVisible();
  await page.fill('#gr-email', ' Nou@Example.com ');
  await page.click('.gr-notify button');
  await expect(page.locator('.gr-notified')).toBeVisible();
  expect(sb.db.waitlist).toEqual([{ email: 'nou@example.com', degree: 'infermeria', lang: 'ca' }]);
});

test('un enllaç de tornada caducat mostra com tornar-ho a provar', async ({ page, context }) => {
  await mockSupabase(context);
  await page.goto('/auth/callback?code=caducat&next=%2Fcursos');
  await expect(page.locator('[data-state="error"] h1')).toHaveText('No s’ha pogut iniciar la sessió');
  await page.click('[data-state="error"] .am-btn');
  await expect(page).toHaveURL(/\/entrar\?next=%2Fcursos$/);
});
