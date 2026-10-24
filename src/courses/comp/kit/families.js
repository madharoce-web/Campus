/**
 * Pràctica generada de Computadors (els 11 generadors de content/generators.js) com a famílies
 * de la plantilla, i el simulacre amb el format del CP1. L'exercici concret es torna a construir
 * a partir de la llavor en l'idioma que toqui (tipus «cgen» de types.jsx).
 */
const L3 = (ca, es, en) => [ca, es, en];

/** [clau, tema, nivell normal, títol] (el nivell «dur» del generador és el difícil) */
const GEN = [
  ['units', 't1', 'easy', L3('Canvis d\'unitats', 'Cambios de unidades', 'Unit conversions')],
  ['transfer', 't1', 'easy', L3('Velocitat de transferència', 'Velocidad de transferencia', 'Transfer speed')],
  ['teo', 't1', 'easy', L3('Conceptes de teoria', 'Conceptos de teoría', 'Theory concepts')],
  ['base', 't21', 'easy', L3('Canvi de base', 'Cambio de base', 'Base conversion')],
  ['frac', 't21', 'exam', L3('Canvi de base amb decimals', 'Cambio de base con decimales', 'Base conversion with fractions')],
  ['ops', 't21', 'exam', L3('Sumes i restes en base b', 'Sumas y restas en base b', 'Addition and subtraction in base b')],
  ['enc', 't21', 'exam', L3('Codificar amb signe', 'Codificar con signo', 'Signed encoding')],
  ['dec', 't21', 'easy', L3('Descodificar amb signe', 'Decodificar con signo', 'Signed decoding')],
  ['range', 't21', 'exam', L3('Rang d\'un sistema', 'Rango de un sistema', 'Range of a system')],
  ['ieee', 't21', 'exam', L3('IEEE 754', 'IEEE 754', 'IEEE 754')],
  ['media', 't22', 'easy', L3('Mida de fitxers multimèdia', 'Tamaño de ficheros multimedia', 'Multimedia file size')],
];
const MIN = { easy: 3, exam: 5, hard: 8 };

export const families = GEN.flatMap(([k, unit, level, title]) => [false, true]
  .filter((hard) => !(hard && k === 'teo'))
  .map((hard) => {
    const lv = hard ? 'hard' : level;
    return { id: 'g-' + k + (hard ? '-dur' : ''), unit, level: lv, gen: (_r, seed) => ({ type: 'cgen', k, hard, seed, title, min: MIN[lv] }) };
  }));

/** Blocs del CP1 (com a l'original): canvis de mida, de base, operació, SM, C1/C2/CE i IEEE 754. */
const BLK = {
  mida: [L3('Canvis de mida', 'Cambios de tamaño', 'Size conversions'), 't1'],
  base: [L3('Canvis de base', 'Cambios de base', 'Base conversions'), 't21'],
  op: [L3('Operació', 'Operación', 'Operation'), 't21'],
  sm: [L3('Signe i magnitud', 'Signo y magnitud', 'Sign and magnitude'), 't21'],
  cx: [L3("C1 · C2 · Codi d'excés", 'C1 · C2 · Código de exceso', 'C1 · C2 · Excess code'), 't21'],
  ieee: [L3('IEEE 754', 'IEEE 754', 'IEEE 754'), 't21'],
};

export const formats = (examQuestions) => [{
  id: 'cp1',
  t: L3('Format del CP1', 'Formato del CP1', 'CP1 format'),
  desc: L3(
    'Els blocs del CP1: canvis de mida (1,5), de base (2), una operació (1), signe i magnitud (1), C1 · C2 · excés (3) i IEEE 754 (1,5). Números nous cada vegada.',
    'Los bloques del CP1: cambios de tamaño (1,5), de base (2), una operación (1), signo y magnitud (1), C1 · C2 · exceso (3) e IEEE 754 (1,5). Números nuevos cada vez.',
    'The CP1 blocks: size conversions (1.5), base conversions (2), one operation (1), sign and magnitude (1), C1 · C2 · excess (3) and IEEE 754 (1.5). New numbers every time.'),
  units: ['t1', 't21'],
  min: 90,
  build: (seed) => examQuestions('ca', seed).map((q, i) => ({
    id: 'cp1-' + i, type: 'cgen', exq: i, seed, pts: q.pts, unit: BLK[q.blk][1], level: 'exam', title: BLK[q.blk][0],
  })),
}];
