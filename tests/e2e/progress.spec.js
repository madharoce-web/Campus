import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { TOTALS } from '../../src/catalog/progress.js';
import { EXS } from '../../src/courses/pseudo/data/exercises.js';

// Els totals del tauler (src/catalog/progress.js) han de coincidir amb les dades dels cursos.
const json = (p) => JSON.parse(readFileSync(new URL('../../src/courses/' + p, import.meta.url), 'utf8'));

test('totals del progrés del tauler', () => {
  expect(TOTALS.logica).toBe(json('logica/data/bank.ca.json').length);
  expect(TOTALS.cpp).toBe(json('cpp/data/exercises.json').length);
  expect(TOTALS.progPages).toBe(json('prog/data/meta.json').pages.length);
  expect(TOTALS.pseudo).toBe(EXS.length);
  const eco = JSON.stringify(json('eco/data/docs.ca.json')).match(/"ex":\{"id"/g) || [];
  expect(TOTALS.eco).toBe(eco.length);
});
