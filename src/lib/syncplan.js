/**
 * Fusió del progrés local (localStorage) amb el del compte (taula user_state).
 * Lògica pura, sense navegador, perquè es pugui provar a part (tests/e2e/syncplan.spec.js).
 *
 * Per a cada clau guanya l'escriptura més recent:
 *   local:  { [clau]: { value: string | null, ts: number } }   value null = esborrada aquí
 *   remote: [{ key, value, updated_at }]                        updated_at en ISO
 * ts = 0 vol dir «no sabem quan es va escriure» (dades d'abans de tenir compte): perd
 * davant de qualsevol versió del núvol, però es puja si al núvol no n'hi ha cap.
 *
 * Torna què cal fer:
 *   toLocal:  [{ key, value, ts }]  escriure al navegador (ve del núvol)
 *   toRemote: [{ key, value, ts }]  pujar al núvol
 *   toDelete: [key]                 esborrar del núvol (s'ha esborrat aquí després)
 */
export function mergePlan(local, remote) {
  const toLocal = [], toRemote = [], toDelete = [];
  const seen = new Set();
  for (const r of remote) {
    seen.add(r.key);
    const rts = Date.parse(r.updated_at) || 0;
    const l = local[r.key];
    if (!l) { toLocal.push({ key: r.key, value: r.value, ts: rts }); continue; }
    if (l.value === null) {
      if (l.ts > rts) toDelete.push(r.key);
      else toLocal.push({ key: r.key, value: r.value, ts: rts });
      continue;
    }
    if (l.value === r.value) continue;
    if (l.ts > rts) toRemote.push({ key: r.key, value: l.value, ts: l.ts });
    else toLocal.push({ key: r.key, value: r.value, ts: rts });
  }
  for (const [key, l] of Object.entries(local)) {
    if (!seen.has(key) && l.value !== null) toRemote.push({ key, value: l.value, ts: l.ts });
  }
  return { toLocal, toRemote, toDelete };
}
