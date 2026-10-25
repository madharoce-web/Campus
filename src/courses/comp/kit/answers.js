/**
 * Respostes dels exercicis de Computadors a la plantilla: es corregeixen amb el mateix codi
 * que abans (ansOK de content/core.js); els textos d'ajuda són en català, castellà i anglès.
 * Una resposta: { k: 'num'|'int'|'dig'|'bits'|'ieee'|'mc', v, bits, hex, show, ph, opts, alt }.
 */
import CE from '../engine/ce.js';
import { makeCore } from '../content/core.js';

const C = makeCore('ca'); // la correcció no depèn de l'idioma
export const OOR = C.OOR;
export const ansOK = (a, x) => C.ansOK(a, x);

const T3 = (ca, es, en) => [ca, es, en];

/** Text d'ajuda del camp de resposta. */
export function placeholder(a) {
  if (a.ph) return a.ph;
  return {
    num: T3('p. ex. 0,4768', 'p. ej. 0,4768', 'e.g. 0.4768'),
    int: T3('p. ex. −42', 'p. ej. −42', 'e.g. −42'),
    bits: T3('només 0 i 1', 'solo 0 y 1', 'only 0 and 1'),
    ieee: T3('32 bits o 8 hex', '32 bits u 8 hex', '32 bits or 8 hex'),
    dig: T3('dígits, p. ex. 1EB', 'dígitos, p. ej. 1EB', 'digits, e.g. 1EB'),
  }[a.k] || '';
}

/** Resultat correcte per mostrar. tr: tria l'idioma. */
export function showAnswer(a, tr) {
  if (a.show != null) return tr(a.show);
  if (a.k === 'ieee') return a.bits[0] + ' ' + a.bits.slice(1, 9) + ' ' + a.bits.slice(9) + ' = ' + a.hex + '₍₁₆₎';
  if (a.k === 'mc') return tr(a.opts[a.v]);
  if (a.k === 'int') return (a.v > 0 ? '+' : a.v < 0 ? '−' : '') + CE.fint(Math.abs(a.v));
  if (a.k === 'num') return CE.fnum(a.v, 4);
  return String(a.v);
}

/** Errors típics: per què una resposta no és correcta (o null). Torna un text [ca, es, en]. */
export function missHint(a, x) {
  if (a.alt) for (const { v, msg } of a.alt) { if (C.ansOK({ ...a, v, bits: v }, x)) return msg; }
  if (a.k === 'num' || a.k === 'int') {
    const y = C.readNum(x);
    if (y == null) return T3("No s'entén el nombre: fes servir la coma decimal (0,5) o el punt (0.5).", 'No se entiende el número: usa la coma decimal (0,5) o el punto (0.5).', 'The number cannot be read: use a decimal comma (0,5) or point (0.5).');
    if (!a.v || !y) return null;
    const q = y / a.v, near = (t) => Math.abs(q / t - 1) < 2e-3;
    if (near(8) || near(1 / 8)) return T3("T'has deixat (o has posat de més) el factor 8 entre bits i bytes.", 'Te has dejado (o has puesto de más) el factor 8 entre bits y bytes.', 'You left out (or added) the factor of 8 between bits and bytes.');
    for (const k of [1, 2, 3, 4]) { const t = 1.024 ** k; if (near(t) || near(1 / t)) return T3('Has barrejat prefix decimal (10³) i binari (2¹⁰): mira si la unitat porta «i».', 'Has mezclado prefijo decimal (10³) y binario (2¹⁰): mira si la unidad lleva «i».', 'You mixed a decimal prefix (10³) with a binary one (2¹⁰): check whether the unit has an «i».'); }
    for (const k of [1, 2, 3, 4]) { if (near(1000 ** k) || near(1000 ** -k) || near(1024 ** k) || near(1024 ** -k)) return T3("L'ordre de magnitud no quadra: revisa quants salts de prefix fas.", 'El orden de magnitud no cuadra: revisa cuántos saltos de prefijo haces.', 'The order of magnitude is off: check how many prefix steps you take.'); }
    if (near(60) || near(1 / 60)) return T3('Compte amb minuts i segons.', 'Cuidado con minutos y segundos.', 'Careful with minutes and seconds.');
    if (near(-1)) return T3('El valor absolut és bo, però el signe no.', 'El valor absoluto es bueno, pero el signo no.', 'The absolute value is right, but the sign is not.');
    if (Math.abs(q - 1) < 0.02) {
      return Number.isInteger(a.v)
        ? T3("Gairebé: aquest resultat és exacte, dona'l sencer (sense arrodonir).", 'Casi: este resultado es exacto, dalo entero (sin redondear).', 'Almost: this result is exact, give it in full (without rounding).')
        : T3("Gairebé: és un problema d'arrodoniment. Dona 3 o 4 xifres significatives correctes.", 'Casi: es un problema de redondeo. Da 3 o 4 cifras significativas correctas.', 'Almost: it is a rounding issue. Give 3 or 4 correct significant figures.');
    }
  }
  if (a.k === 'bits') {
    if (!/^[01\s]+$/.test(String(x).trim())) return T3('Escriu només zeros i uns.', 'Escribe solo ceros y unos.', 'Write only zeros and ones.');
    const n = String(x).replace(/[^01]/g, '').length, N = a.v.length;
    if (n !== N) return T3('La resposta ha de tenir exactament ' + N + ' bits (ara en té ' + n + ').', 'La respuesta tiene que tener exactamente ' + N + ' bits (ahora tiene ' + n + ').', 'The answer must have exactly ' + N + ' bits (it now has ' + n + ').');
  }
  if (a.k === 'dig') {
    const e = C.stripZ(C.cleanD(a.v)), y = C.stripZ(C.cleanD(x));
    if (!e.includes(',') && y === e.split('').reverse().join('')) return T3("Has llegit els residus al revés: es llegeixen de baix a dalt (l'últim residu és la xifra de més pes).", 'Has leído los restos al revés: se leen de abajo arriba (el último resto es la cifra de más peso).', 'You read the remainders the wrong way round: read them bottom to top (the last remainder is the most significant digit).');
  }
  if (a.k === 'ieee') {
    const s = String(x).replace(/\s/g, '');
    if (!/^[01]{32}$/.test(s) && !/^[0-9A-Fa-f]{8}$/.test(s.replace(/^0x/i, ''))) return T3('Dona els 32 bits o els 8 dígits hexadecimals.', 'Da los 32 bits o los 8 dígitos hexadecimales.', 'Give the 32 bits or the 8 hexadecimal digits.');
  }
  return null;
}
