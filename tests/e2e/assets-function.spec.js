import { test, expect } from '@playwright/test';
import { onRequest } from '../../functions/assets/[[path]].js';

const fake = (type) => ({ next: async () => new Response('x', { status: 200, headers: { 'Content-Type': type } }) });

test('un fitxer de /assets/ absent és un 404 que no es guarda', async () => {
  const res = await onRequest(fake('text/html; charset=utf-8'));
  expect(res.status).toBe(404);
  expect(res.headers.get('cache-control')).toBe('no-store');
});

test('un fitxer de /assets/ existent conserva el tipus i la memòria cau llarga', async () => {
  const res = await onRequest(fake('application/javascript'));
  expect(res.status).toBe(200);
  expect(res.headers.get('content-type')).toBe('application/javascript');
  expect(res.headers.get('cache-control')).toContain('immutable');
  expect(await res.text()).toBe('x');
});
