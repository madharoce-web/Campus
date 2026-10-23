/**
 * Models dels laboratoris del CP1: ∀ i ∃ en un món de cinc persones i l'ordre dels
 * quantificadors amb la relació «x admira y». Els textos es retornen com a trossos
 * (cadenes i { b } en negreta) per pintar amb <Txt>.
 */

export function list(a, L) {
  if (a.length <= 1) return a.join('');
  return a.slice(0, -1).join(', ') + L(' i ', ' y ') + a[a.length - 1];
}

/* ===================== 1. Quantificadors ∀ i ∃ ===================== */
export const Q0 = () => ({
  people: [{ n: 'Anna', E: true, T: false }, { n: 'Biel', E: true, T: true }, { n: 'Carla', E: true, T: true }, { n: 'Dani', E: false, T: true }, { n: 'Eva', E: false, T: false }],
  notation: 'std', sel: 2,
});
export const QF = [
  { q: 'A', std: '∀x E(x)', col: '∀x : : E(x)', ca: 'Tothom és estudiant', es: 'Todo el mundo es estudiante', body: (p) => p.E, tag: null },
  { q: 'E', std: '∃x E(x)', col: '∃x : : E(x)', ca: 'Algú és estudiant', es: 'Alguien es estudiante', body: (p) => p.E, tag: null },
  { q: 'A', std: '∀x (E(x) → T(x))', col: '∀x : E(x) : T(x)', ca: 'Tots els estudiants treballen', es: 'Todos los estudiantes trabajan', body: (p) => !p.E || p.T, tag: null, rang: true },
  { q: 'E', std: '∃x (E(x) ∧ T(x))', col: '∃x : E(x) : T(x)', ca: 'Algun estudiant treballa', es: 'Algún estudiante trabaja', body: (p) => p.E && p.T, tag: null, rang: true },
  { q: 'A', std: '∀x (E(x) → ¬T(x))', col: '∀x : E(x) : ¬T(x)', ca: 'Cap estudiant treballa', es: 'Ningún estudiante trabaja', body: (p) => !p.E || !p.T, tag: null, rang: true },
  { q: 'E', std: '∃x (E(x) ∧ ¬T(x))', col: '∃x : E(x) : ¬T(x)', ca: 'Algun estudiant no treballa', es: 'Algún estudiante no trabaja', body: (p) => p.E && !p.T, tag: 'neg', rang: true },
  { q: 'A', std: '∀x (E(x) ∧ T(x))', col: '∀x : : E(x) ∧ T(x)', ca: 'Tothom és estudiant i treballa', es: 'Todo el mundo es estudiante y trabaja', body: (p) => p.E && p.T, tag: 'trap1' },
  { q: 'E', std: '∃x (E(x) → T(x))', col: '∃x : : E(x) → T(x)', ca: "Hi ha algú que, si és estudiant, treballa", es: 'Hay alguien que, si es estudiante, trabaja', body: (p) => !p.E || p.T, tag: 'trap2' },
];
/** Exemples: [E, T] de cada persona. */
export const Q_PRESETS = [[[1, 0], [1, 1], [1, 1], [0, 1], [0, 0]], [[0, 1], [0, 0], [0, 1], [0, 1], [0, 0]], [[1, 1], [1, 1], [1, 0], [1, 1], [1, 1]]];

export function qEval(people, f) {
  const vals = people.map((p) => f.body(p));
  return { v: f.q === 'A' ? vals.every(Boolean) : vals.some(Boolean), vals };
}

export function qWhy(people, f, r, L) {
  const ok = [], bad = [];
  r.vals.forEach((v, i) => (v ? ok : bad).push(people[i].n));
  const nE = people.filter((p) => p.E).length;
  if (f.q === 'A') {
    if (r.v) {
      if (f.rang && nE === 0) return [L('Cert, i sense cap estudiant: no hi ha ningú al rang, i un ∀ sobre un rang buit és cert (no hi ha cap contraexemple possible).', 'Cierto, y sin ningún estudiante: no hay nadie en el rango, y un ∀ sobre un rango vacío es cierto (no hay ningún contraejemplo posible).')];
      return [L('Cert: les cinc caselles són T. Un ∀ és una «i» gegant.', 'Cierto: las cinco casillas son T. Un ∀ es una «y» gigante.')];
    }
    return [L('Fals. Contraexemple: ', 'Falso. Contraejemplo: '), { b: list(bad, L) }, L(". N'hi ha prou amb un.", '. Basta con uno.')];
  }
  if (r.v) return [L('Cert. Testimoni: ', 'Cierto. Testigo: '), { b: list(ok, L) }, L(". Un ∃ és una «o» gegant: n'hi ha prou amb un.", '. Un ∃ es una «o» gigante: basta con uno.')];
  return [L('Fals: cap de les cinc caselles és T.', 'Falso: ninguna de las cinco casillas es T.')];
}

export function qTagNote(f, L) {
  if (f.tag === 'neg') return [L('És la negació de «Tots els estudiants treballen»: sempre té el valor contrari. Comprova-ho canviant les caselles.', 'Es la negación de «Todos los estudiantes trabajan»: siempre tiene el valor contrario. Compruébalo cambiando las casillas.')];
  if (f.tag === 'trap1') return L(['Trampa: amb ∀ i ∧ s\'afirma que ', { b: 'tothom' }, ' és estudiant. Per dir «tots els estudiants treballen» cal →.'], ['Trampa: con ∀ y ∧ se afirma que ', { b: 'todo el mundo' }, ' es estudiante. Para decir «todos los estudiantes trabajan» hace falta →.']);
  if (f.tag === 'trap2') return L(["Trampa: amb ∃ i → n'hi ha prou que algú ", { b: 'no' }, ' sigui estudiant perquè sigui certa. Per dir «algun estudiant treballa» cal ∧.'], ['Trampa: con ∃ y → basta con que alguien ', { b: 'no' }, ' sea estudiante para que sea cierta. Para decir «algún estudiante trabaja» hace falta ∧.']);
  return null;
}

/** Posició de cada persona al diagrama de Venn: [{ i, x, y }]. */
const SLOTS = {
  E: [[105, 70], [95, 110], [120, 150], [85, 90], [110, 130]], B: [[190, 80], [190, 120], [190, 160], [175, 100], [205, 140]],
  T: [[275, 70], [285, 110], [260, 150], [295, 90], [270, 130]], N: [[60, 205], [140, 205], [220, 205], [300, 205], [360, 205]],
};
export function vennPlaces(people) {
  const regions = { E: [], B: [], T: [], N: [] };
  people.forEach((p, i) => regions[p.E && p.T ? 'B' : p.E ? 'E' : p.T ? 'T' : 'N'].push(i));
  const out = [];
  ['E', 'B', 'T', 'N'].forEach((k) => regions[k].forEach((i, j) => out.push({ i, x: SLOTS[k][j][0], y: SLOTS[k][j][1] })));
  return out;
}

/* ===================== 2. Ordre dels quantificadors ===================== */
export const R_NAMES = ['Anna', 'Biel', 'Carla', 'Dani'];
const RP = [[[0, 1], [1, 2], [2, 3], [3, 0]], [[0, 2], [1, 2], [2, 2], [3, 2], [2, 0]], [[0, 1], [0, 2], [0, 3], [0, 0], [1, 0]]];
/** Matriu de la relació per a l'exemple k. */
export function rPreset(k) {
  const m = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  RP[k].forEach((e) => { m[e[0]][e[1]] = 1; });
  return m;
}
export const R0 = () => ({ m: rPreset(0), sel: 0 });
export const RF = [
  { f: '∀x ∃y A(x, y)', ca: 'Tothom admira algú', es: 'Todo el mundo admira a alguien', k: 'AE' },
  { f: '∃y ∀x A(x, y)', ca: 'Hi ha algú admirat per tothom', es: 'Hay alguien admirado por todo el mundo', k: 'EA' },
  { f: '∃x ∀y A(x, y)', ca: 'Hi ha algú que admira tothom', es: 'Hay alguien que admira a todo el mundo', k: 'EAr' },
  { f: '∀y ∃x A(x, y)', ca: 'Tothom és admirat per algú', es: 'Todo el mundo es admirado por alguien', k: 'AEr' },
  { f: '∀x ∀y A(x, y)', ca: 'Tothom admira tothom', es: 'Todo el mundo admira a todo el mundo', k: 'AA' },
  { f: '∃x ∃y A(x, y)', ca: 'Algú admira algú', es: 'Alguien admira a alguien', k: 'EE' },
];

/** Valor de la fórmula k a la matriu m, fletxes que la fan certa (hl) i explicació (txt). */
export function rEval(m, k, L) {
  const n = 4, N = R_NAMES, hl = [];
  let i, j, txt, v;
  const row = (a) => { const o = []; for (let b = 0; b < n; b++) if (m[a][b]) o.push(b); return o; };
  const col = (b) => { const o = []; for (let a = 0; a < n; a++) if (m[a][b]) o.push(a); return o; };
  if (k === 'AE') {
    const miss = [];
    for (i = 0; i < n; i++) { const r = row(i); if (r.length) hl.push([i, r[0]]); else miss.push(N[i]); }
    v = !miss.length;
    txt = v ? [L('Cert: cadascú té almenys una fletxa que surt (marcades). Cada x pot triar una y diferent.', 'Cierto: cada uno tiene al menos una flecha que sale (marcadas). Cada x puede elegir una y distinta.')]
      : [L('Fals: ', 'Falso: '), { b: list(miss, L) }, L(' no admira ningú.', ' no admira a nadie.')];
  } else if (k === 'EA') {
    let w = -1;
    for (j = 0; j < n; j++) if (col(j).length === n) { w = j; break; }
    v = w >= 0;
    if (v) {
      for (i = 0; i < n; i++) hl.push([i, w]);
      txt = [L('Cert: ', 'Cierto: '), { b: N[w] }, L(' rep una fletxa de tots quatre (ella mateixa inclosa). És la mateixa y per a totes les x.', ' recibe una flecha de los cuatro (incluida ella misma). Es la misma y para todas las x.')];
    } else {
      txt = L(['Fals: ningú no rep fletxa dels quatre. Compara-ho amb la primera: que cadascú admiri algú no vol dir que tots admirin ', { b: 'la mateixa' }, ' persona.'],
        ['Falso: nadie recibe flecha de los cuatro. Compáralo con la primera: que cada uno admire a alguien no significa que todos admiren a ', { b: 'la misma' }, ' persona.']);
    }
  } else if (k === 'EAr') {
    let w2 = -1;
    for (i = 0; i < n; i++) if (row(i).length === n) { w2 = i; break; }
    v = w2 >= 0;
    if (v) { for (j = 0; j < n; j++) hl.push([w2, j]); txt = [L('Cert: ', 'Cierto: '), { b: N[w2] }, L(' té fletxa cap a tots quatre.', ' tiene flecha hacia los cuatro.')]; }
    else txt = [L('Fals: ningú no té fletxes cap als quatre.', 'Falso: nadie tiene flechas hacia los cuatro.')];
  } else if (k === 'AEr') {
    const miss2 = [];
    for (j = 0; j < n; j++) { const c = col(j); if (c.length) hl.push([c[0], j]); else miss2.push(N[j]); }
    v = !miss2.length;
    txt = v ? [L('Cert: tothom rep almenys una fletxa.', 'Cierto: todo el mundo recibe al menos una flecha.')] : [L('Fals: ', 'Falso: '), { b: list(miss2, L) }, L(' no rep cap fletxa.', ' no recibe ninguna flecha.')];
  } else if (k === 'AA') {
    let cnt = 0;
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) cnt += m[i][j];
    v = cnt === n * n;
    txt = [v ? L('Cert: hi ha les 16 fletxes, també les de cadascú cap a si mateix.', 'Cierto: están las 16 flechas, también las de cada uno hacia sí mismo.') : L('Fals: hi ha ', 'Falso: hay ') + cnt + L(' fletxes de 16.', ' flechas de 16.')];
  } else {
    let e = null;
    for (i = 0; i < n && !e; i++) for (j = 0; j < n; j++) if (m[i][j]) { e = [i, j]; break; }
    v = !!e;
    if (e) hl.push(e);
    txt = [v ? L("Cert: n'hi ha prou amb una fletxa, per exemple ", 'Cierto: basta con una flecha, por ejemplo ') + N[e[0]] + ' → ' + N[e[1]] + '.' : L('Fals: no hi ha cap fletxa.', 'Falso: no hay ninguna flecha.')];
  }
  return { v, hl, txt };
}

/** Geometria del graf de la relació: camins de les fletxes i posició dels noms. */
const RPOS = [[80, 60], [260, 60], [260, 220], [80, 220]];
export function rGraph(m, hl) {
  const isH = (i, j) => hl.some((e) => e[0] === i && e[1] === j);
  const edges = [];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    if (!m[i][j]) continue;
    const h = isH(i, j);
    if (i === j) {
      const x = RPOS[i][0], y = RPOS[i][1], dy = y < 140 ? -1 : 1;
      edges.push({ i, j, h, d: 'M' + (x - 8) + ' ' + (y + dy * 14) + ' C' + (x - 34) + ' ' + (y + dy * 58) + ' ' + (x + 34) + ' ' + (y + dy * 58) + ' ' + (x + 8) + ' ' + (y + dy * 15) });
      continue;
    }
    const a = RPOS[i], b = RPOS[j], dx = b[0] - a[0], dy2 = b[1] - a[1], d = Math.sqrt(dx * dx + dy2 * dy2), ux = dx / d, uy = dy2 / d;
    const sx = a[0] + ux * 16, sy = a[1] + uy * 16, ex = b[0] - ux * 18, ey = b[1] - uy * 18, off = m[j][i] ? 14 : 0;
    const mx = (sx + ex) / 2 - uy * off, my = (sy + ey) / 2 + ux * off;
    edges.push({ i, j, h, d: 'M' + sx.toFixed(1) + ' ' + sy.toFixed(1) + ' Q' + mx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1) });
  }
  const nodes = RPOS.map((p, i) => ({ i, x: p[0], y: p[1], ty: p[1] < 140 ? p[1] - 18 : p[1] + 30 }));
  return { edges, nodes };
}
