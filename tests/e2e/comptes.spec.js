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

test('el campus demana compte; el progrés que ja hi havia al navegador passa al compte', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context);
  // progrés d'abans de tenir compte (per exemple, de quan la web no en tenia)
  await page.addInitScript(() => {
    if (localStorage.getItem('prova-sembrada')) return;
    localStorage.setItem('prova-sembrada', '1');
    localStorage.setItem('sem1-stars', '["mates"]');
  });
  await page.goto('/cursos');
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
  await expect(page.locator('#m-login')).toHaveCount(0);
  await expect(page.locator('.m-card:has([data-kebab="mates"]) .m-starw')).toBeVisible();
  await expect.poll(() => sb.state('ana@example.com')['sem1-stars']).toBe('["mates"]');

  // els canvis següents també es pugen
  await page.click('[data-kebab="eco"] .m-kbtn');
  await page.click('[data-kebab="eco"] [data-act="hide"]');
  await expect.poll(() => sb.state('ana@example.com')['sem1-hidden'], { timeout: 10_000 }).toBe('["eco"]');
  // l'únic error és el 403 esperat del codi incorrecte
  expect(errors.filter((e) => !e.includes('status of 403'))).toEqual([]);
});

test('des de la portada: crear un compte porta al tauler', async ({ page, context }) => {
  await mockSupabase(context);
  await page.goto('/');
  await page.click('.lp-acts .am-btn-primary');
  await expect(page).toHaveURL(/\/registre\?next=%2Ftauler$/);
  await expect(page.locator('h1')).toHaveText('Crea el teu compte');
  await page.fill('#ac-email', 'nou@example.com');
  await page.click('[data-state="email"] button[type="submit"]');
  await page.fill('#ac-code', TEST_CODE);
  await page.click('[data-state="code"] button[type="submit"]');
  await expect(page).toHaveURL(/\/tauler$/);
  await expect(page.locator('h1')).toHaveText('Tauler');
  // amb la sessió iniciada, la portada porta al campus
  await page.goto('/');
  await expect(page.locator('.lp-acts .am-btn-primary')).toHaveText('Ves al campus');
});

test('la portada té el registre a la capçalera: correu, codi i a l’aula', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context);
  await page.goto('/');
  const form = page.locator('.lp-signup');
  await expect(form.locator('h2')).toHaveText('Crea el teu compte gratuït');
  await expect(form.locator('.ac-google')).toBeVisible();
  await expect(page.locator('.lp-have a')).toHaveAttribute('href', '/entrar?next=%2Ftauler');
  await expectNoOverflow(page);
  await form.locator('#ac-email').fill('hero@example.com');
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[data-state="code"] h2')).toContainText('Revisa el correu');
  expect(sb.db.otps).toEqual(['hero@example.com']);
  await form.locator('#ac-code').fill(TEST_CODE);
  await form.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/\/tauler$/);
  await expect(page.locator('h1')).toHaveText('Tauler');
  expect(errors).toEqual([]);
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
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('.lp-signin')).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('sem1-stars'))).toBeNull();
  await page.goto('/cursos');
  await expect(page).toHaveURL(/\/entrar\?next=%2Fcursos$/);
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
  await expect(page).toHaveURL(/\/entrar\?next=%2Fcompte$/);
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
  await expect(page).toHaveURL(/\/$/);
  expect(sb.db.users.map((u) => u.email)).not.toContain('cai@example.com');
  expect(await page.evaluate(() => localStorage.getItem('eco-prac'))).toBeNull();
});

test('llista d’espera d’un grau que encara no hi és', async ({ page, context }) => {
  const sb = await mockSupabase(context);
  await page.goto('/graus/infermeria');
  await page.fill('#gr-email', 'nou');
  await page.click('.gr-notify button[type="submit"]');
  await expect(page.locator('.gr-err')).toBeVisible();
  await page.fill('#gr-email', ' Nou@Example.com ');
  await page.click('.gr-notify button[type="submit"]');
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

test('els intents dels exercicis es registren al compte (activity)', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context);
  await page.goto('/economia/temari/t1');
  await expect(page).toHaveURL(/\/entrar\?next=/);
  await enterCode(page, 'dani@example.com');
  await expect(page).toHaveURL(/\/economia\/temari\/t1$/);
  // una comprovació autoavaluada de la lliçó
  const chk = page.locator('.kit-ex-check').first();
  await chk.scrollIntoViewIfNeeded();
  const id = await chk.getAttribute('data-ex');
  await chk.locator('.kit-steps-open').first().click();
  await chk.locator('.kit-self-b').last().click();
  // s'envien en lots al cap d'uns segons
  await expect.poll(() => sb.db.activity.length, { timeout: 15_000 }).toBeGreaterThan(0);
  expect(sb.db.activity[0]).toMatchObject({ subject: 'eco', item: id, kind: 'quiz', correct: true });
  expect(errors).toEqual([]);
});

test('tauler d’administració: només per a administradors', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context, { users: [{ email: 'admin@example.com', profile: { role: 'admin', degree: 'informatica' } }, { email: 'eva@example.com' }] });
  sb.db.activity.push({ user_id: sb.db.users[1].id, subject: 'logica', item: 'xr-1', kind: 'exercise', correct: false, created_at: new Date().toISOString() });
  // una persona qualsevol no el veu
  await page.goto('/admin');
  await enterCode(page, 'eva@example.com');
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.locator('h1')).toContainText("No s'ha trobat");
  await page.evaluate(() => localStorage.clear());
  await context.clearCookies();

  const p2 = await context.newPage();
  await p2.goto('/admin');
  await enterCode(p2, 'admin@example.com');
  await expect(p2.locator('h1')).toHaveText('Administració');
  await expect(p2.locator('#ad-users')).toBeVisible();
  await expect(p2.locator('.ad-big b')).toHaveText('2');
  await p2.fill('.ad-filter input', '1');
  await expect(p2.locator('#ad-items ~ .ad-tw tbody tr')).toHaveCount(1);
  await expect(p2.locator('#ad-items ~ .ad-tw tbody tr')).toContainText('xr-1');
  await expect(p2.locator('#ad-cat ~ .ad-tw tbody tr')).toHaveCount(5);
  await expectNoOverflow(p2);
  expect(errors).toEqual([]);
});

test('compte nou: registre guiat obligatori, desat al perfil i llista d’espera dels graus que no hi són', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context, { fresh: true });
  await page.goto('/cursos');
  await enterCode(page, 'nora@example.com');
  await expect(page).toHaveURL(/\/benvinguda\?next=%2Fcursos$/);
  await page.click('#bv-start');
  await page.fill('#bv-name', 'Nora Vila');
  await page.click('.bv-chip >> nth=1');
  await page.click('#bv-next');
  await page.click('[data-degree="informatica"]');
  await page.click('[data-degree="ade"]');
  await page.click('#bv-next');
  await page.click('[data-subject="eco"]');
  await page.click('#bv-finish');
  await page.click('#bv-go');
  await expect(page).toHaveURL(/\/cursos$/);
  await expect.poll(() => sb.profile('nora@example.com').onboarded_at).toBeTruthy();
  expect(sb.profile('nora@example.com')).toMatchObject({ display_name: 'Nora Vila', study_year: 2, degrees: ['informatica', 'ade'], subjects: ['eco'] });
  await expect.poll(() => sb.db.waitlist.map((w) => w.degree)).toContain('ade');
  // un cop fet, ja no torna a demanar-lo
  await page.goto('/tauler');
  await expect(page).toHaveURL(/\/tauler$/);
  expect(errors).toEqual([]);
});

test('administració: preus, plans i textos editables; /preus i la portada els fan servir', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context, { users: [{ email: 'admin@example.com', profile: { role: 'admin' } }] });
  await page.goto('/admin');
  await enterCode(page, 'admin@example.com');
  await page.click('[data-tab="plans"]');
  await page.check('#ad-enabled');
  await page.fill('#ad-base', '6');
  await page.locator('.ad-sec').first().locator('.ad-save .am-btn-primary').click();
  await expect.poll(() => sb.db.settings.find((s) => s.key === 'billing')?.value.basePrice).toBe(6);
  await page.click('[data-tab="empresa"]');
  await page.fill('#ad-c-name', 'Aula Mada SL');
  await page.locator('.ad-sec').first().locator('.ad-save .am-btn-primary').click();
  await expect.poll(() => sb.db.settings.find((s) => s.key === 'company')?.value.name).toBe('Aula Mada SL');
  await expectNoOverflow(page);
  // amb els cobraments activats: /preus existeix i la portada mostra els plans
  await page.goto('/preus');
  await expect(page.locator('#pr-basic')).toBeVisible();
  await expect(page.locator('.pr-plan').nth(1)).toContainText('6');
  await page.goto('/legal/avis-legal');
  await expect(page.locator('.lg-doc')).toContainText('Aula Mada SL');
  await page.goto('/');
  await expect(page.locator('.lp-plan-pro')).toHaveCount(2);
  expect(errors).toEqual([]);
});

test('formulari de contacte de la portada', async ({ page, context }) => {
  const errors = watchErrors(page);
  const sb = await mockSupabase(context);
  await page.goto('/#contacte');
  await page.fill('#lp-cname', 'Pau Serra');
  await page.fill('#lp-cmail', 'pau@example.com');
  await page.selectOption('#lp-ctopic', 'content');
  await page.fill('#lp-cmsg', 'Hi ha una errada al tema 2.');
  await page.check('.lp-consent input');
  await page.click('#contacte button[type="submit"]');
  await expect(page.locator('.lp-ok')).toBeVisible();
  expect(sb.db.contact[0]).toMatchObject({ name: 'Pau Serra', email: 'pau@example.com', topic: 'content' });
  expect(errors).toEqual([]);
});
