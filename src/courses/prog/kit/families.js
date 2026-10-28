/**
 * Preguntes curtes de pseudocodi (les de l'antiga web de Pseudocodi), com a famílies amb llavor:
 * notació (de C++ i Python al pseudocodi), teoria dels temes 2.1–2.3, esquemes (recorregut o cerca)
 * i prioritats dels operadors. I els dos models de simulacre: el C++ com el CodeRunner i el pseudocodi com el CP1.
 */
import { instance, rngOf } from '../../_kit/bank.js';
import { ESQ, NOTA, TEO } from '../../pseudo/data/quiz.js';
import { genPrio } from '../../pseudo/engine/quiz.js';

const L3 = (ca, es, en) => [ca, es, en];
const tr2 = (o) => (o == null || typeof o === 'string' ? o : [o.ca, o.es ?? o.ca, o.en ?? o.es ?? o.ca]);
const code = (s) => '`' + String(s).replace(/`/g, "'") + '`';

/** El generador de prioritats fa servir Math.random: s'executa amb la llavor. */
function seeded(seed, f) {
  const R = Math.random, r = rngOf(seed);
  Math.random = r;
  try { return f(); } finally { Math.random = R; }
}

export const families = [
  {
    id: 'pq-nota', unit: 't22', level: 'easy',
    gen: (r) => {
      const it = r.pick(NOTA), ord = r.shuffle([0, 1, 2, 3]);
      return { type: 'mcq', title: L3('De C++ i Python al pseudocodi', 'De C++ y Python al pseudocódigo', 'From C++ and Python to pseudocode'),
        q: L3("Com s'escriu al pseudocodi del curs?\n", '¿Cómo se escribe en el pseudocódigo del curso?\n', 'How is it written in the course pseudocode?\n').map((x) => x + code(it.c)),
        opts: ord.map((i) => code(it.o[i])), answer: ord.indexOf(0), min: 1 };
    },
  },
  {
    id: 'pq-teo', unit: 't21', level: 'easy',
    gen: (r) => {
      const it = r.pick(TEO), ord = r.shuffle([0, 1, 2, 3]);
      return { type: 'mcq', title: L3('Teoria dels temes 2.1–2.3', 'Teoría de los temas 2.1–2.3', 'Theory of units 2.1–2.3'), q: tr2(it.q), opts: ord.map((i) => tr2(it.o[i])), answer: ord.indexOf(0), min: 1 };
    },
  },
  {
    id: 'pq-esq', unit: 't23', level: 'easy',
    gen: (r) => {
      const it = r.pick(ESQ), ord = r.shuffle([...Array(it.o.length).keys()]);
      return { type: 'mcq', title: L3('Recorregut o cerca', 'Recorrido o búsqueda', 'Traversal or search'), q: tr2(it.q), opts: ord.map((i) => tr2(it.o[i])),
        answer: ord.indexOf(it.g), sol: it.w ? [{ t: 'p', x: tr2(it.w) }] : undefined, min: 1 };
    },
  },
  {
    id: 'pq-prio', unit: 't22', level: 'easy',
    gen: (r, seed) => {
      const g = seeded(seed, genPrio);
      const q = L3('Quant val aquesta expressió amb la taula de prioritats del curs?\n', '¿Cuánto vale esta expresión con la tabla de prioridades del curso?\n', 'What is the value of this expression with the course precedence table?\n').map((x) => x + code(g.e));
      const sol = [{ t: 'p', x: code(g.par + ' = ' + g.v) }];
      const title = L3('Prioritats dels operadors', 'Prioridades de los operadores', 'Operator precedence');
      return g.bool
        ? { type: 'mcq', title, q, opts: ['cert', 'fals'].map(code), answer: g.v === 'cert' ? 0 : 1, sol, min: 1 }
        : { type: 'num', title, q, answer: parseFloat(g.v), tol: 1e-6, sol, min: 2 };
    },
  },
];

/** Models de simulacre: { id, t, desc, units, min, build(seed, bank) → exercicis amb punts }. */
const byId = Object.fromEntries(families.map((f) => [f.id, f]));
export const formats = [
  {
    id: 'cpp', min: 60, units: ['s2', 's3', 's4', 's5'],
    t: L3('C++ com el CodeRunner', 'C++ como el CodeRunner', 'C++ like CodeRunner'),
    desc: L3('Quatre programes (un de fàcil, dos de mitjans i un de difícil) de les setmanes 2–5, amb proves ocultes: cada pregunta val 2,5 punts si passa totes les proves.',
      'Cuatro programas (uno fácil, dos medios y uno difícil) de las semanas 2–5, con pruebas ocultas: cada pregunta vale 2,5 puntos si pasa todas las pruebas.',
      'Four programs (one easy, two medium and one hard) from weeks 2–5, with hidden tests: each question is worth 2.5 points if it passes every test.'),
    build: (seed, bank) => {
      const r = rngOf(seed), used = new Set();
      return [1, 2, 2, 3].map((lv) => {
        const pool = (bank?.items || []).filter((x) => x.type === 'cpp' && x.lv === lv && ['s2', 's3', 's4', 's5'].includes(x.unit) && !used.has(x.id));
        const ex = r.pick(pool);
        used.add(ex.id);
        return { ...ex, pts: 2.5 };
      });
    },
  },
  {
    id: 'pseudo', min: 90, units: ['t21', 't22', 't23'],
    t: L3('Pseudocodi com el CP1', 'Pseudocódigo como el CP1', 'Pseudocode like CP1'),
    desc: L3('Tres algorismes (seqüencial o condicional, recorregut i cerca; 2,5 punts cadascun: 70 % proves i 30 % notació) i vuit preguntes curtes de teoria, notació, esquemes i prioritats (2,5 punts).',
      'Tres algoritmos (secuencial o condicional, recorrido y búsqueda; 2,5 puntos cada uno: 70 % pruebas y 30 % notación) y ocho preguntas cortas de teoría, notación, esquemas y prioridades (2,5 puntos).',
      'Three algorithms (sequential or conditional, traversal and search; 2.5 points each: 70 % tests and 30 % notation) and eight short questions on theory, notation, schemes and precedence (2.5 points).'),
    build: (seed, bank) => {
      const r = rngOf(seed);
      const ps = (bank?.items || []).filter((x) => x.type === 'pseudo');
      const alg = [['seq', 'cond'], ['rec'], ['cerca']].map((ks) => ({ ...r.pick(ps.filter((x) => ks.includes(x.kind))), pts: 2.5 }));
      const short = [['pq-teo', 3], ['pq-nota', 2], ['pq-esq', 2], ['pq-prio', 1]].flatMap(([id, n]) => {
        const seen = new Set(), out = [];
        for (let k = 0; out.length < n && k < 40; k++) {
          const s = (seed + k * 7919 + id.length * 104729) >>> 0;
          const ex = instance(byId[id], s);
          const key = JSON.stringify(ex.q);
          if (seen.has(key) && k < 39) continue;
          seen.add(key);
          out.push({ ...ex, id: id + '-' + out.length, pts: 2.5 / 8 });
        }
        return out;
      });
      return [...alg, ...short];
    },
  },
];
