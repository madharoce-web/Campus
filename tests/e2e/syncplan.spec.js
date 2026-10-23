import { test, expect } from '@playwright/test';
import { mergePlan } from '../../src/lib/syncplan.js';

// Lògica pura de la fusió del progrés (no obre cap pàgina).
const T1 = '2026-10-01T10:00:00.000Z', T2 = '2026-10-02T10:00:00.000Z';
const ms = (iso) => Date.parse(iso);

test('fusió del progrés: guanya l’escriptura més recent de cada clau', () => {
  const plan = mergePlan(
    {
      nomes_local: { value: 'L', ts: ms(T1) },
      local_nou: { value: 'L2', ts: ms(T2) },
      remot_nou: { value: 'L1', ts: ms(T1) },
      igual: { value: 'X', ts: ms(T1) },
      sense_data: { value: 'antic', ts: 0 },
      esborrat_despres: { value: null, ts: ms(T2) },
      esborrat_abans: { value: null, ts: ms(T1) },
    },
    [
      { key: 'nomes_remot', value: 'R', updated_at: T1 },
      { key: 'local_nou', value: 'R1', updated_at: T1 },
      { key: 'remot_nou', value: 'R2', updated_at: T2 },
      { key: 'igual', value: 'X', updated_at: T2 },
      { key: 'sense_data', value: 'del núvol', updated_at: T1 },
      { key: 'esborrat_despres', value: 'R', updated_at: T1 },
      { key: 'esborrat_abans', value: 'R', updated_at: T2 },
    ],
  );
  expect(plan.toLocal.map((r) => [r.key, r.value])).toEqual([
    ['nomes_remot', 'R'], ['remot_nou', 'R2'], ['sense_data', 'del núvol'], ['esborrat_abans', 'R'],
  ]);
  expect(plan.toRemote.map((r) => [r.key, r.value])).toEqual([['local_nou', 'L2'], ['nomes_local', 'L']]);
  expect(plan.toDelete).toEqual(['esborrat_despres']);
});

test('fusió del progrés: un compte nou rep tot el que hi havia al navegador', () => {
  const plan = mergePlan({ a: { value: '1', ts: 0 }, b: { value: '2', ts: ms(T1) } }, []);
  expect(plan.toLocal).toEqual([]);
  expect(plan.toRemote.map((r) => r.key)).toEqual(['a', 'b']);
});
