import CE from '../engine/ce.js';
import { escH, tx, tryEval } from '../engine/z.js';

/** Marca d'un laboratori dins de l'HTML de la teoria: la vista la substitueix pel component. */
export const LABM = '\u0001';

/**
 * Nucli del contingut en un idioma: caixes de teoria, taules, passos del motor CE,
 * lectura i correcció de respostes. Tot és HTML en text (es pinta amb <Rich>).
 * Codi original; l'únic canvi és que l'idioma arriba com a paràmetre.
 */
export function makeCore(lang) {
  const L = (ca, es, en) => lang === 'ca' ? ca : lang === 'en' && en != null ? en : es;
  const esc = escH;
  /* $…$ en línia, $$…$$ destacat; la resta és HTML escrit a mà */
  function md(s) {
    return String(s).replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (m, d, i) => d != null ? '<span class="disp m">' + tx(d) + '</span>' : '<span class="m">' + tx(i) + '</span>');
  }
  const M = s => '<span class="m">' + tx(s) + '</span>';
  const P = s => '<p>' + md(s) + '</p>';
  const UL = arr => '<ul>' + arr.map(x => '<li>' + md(x) + '</li>').join('') + '</ul>';
  const OL = arr => '<ol>' + arr.map(x => '<li>' + md(x) + '</li>').join('') + '</ol>';
  function BX(kind, head, body) { return '<div class="bx ' + kind + '"><div class="bh">' + head + '</div>' + body + '</div>'; }
  const bodyH = b => Array.isArray(b) ? b.join('') : (/^\s*<(div|ul|ol|p|table|section)[\s>]/.test(b) ? b : P(b));
  const DEF = (name, body) => BX('def', L('Definició', 'Definición', 'Definition') + (name ? ' · ' + name : ''), bodyH(body));
  const THM = (label, body) => BX('thm', md(label), bodyH(body));
  const TIP = body => BX('tip', L('Per entendre-ho', 'Para entenderlo', 'To understand it'), bodyH(body));
  const WARN = body => BX('warn', L('Compte', 'Cuidado', 'Careful'), bodyH(body));
  const EXB = (head, body) => BX('ex', head ? md(head) : L('Exemple', 'Ejemplo', 'Example'), bodyH(body));
  function TBL(head, rows, cls) {
    return '<div class="tbl"><table class="' + (cls || '') + '"><thead><tr>' + head.map(h => '<th>' + md(h) + '</th>').join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map(c => '<td>' + md(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  }
  const yes = () => '<span class="yes">' + L('Sí', 'Sí', 'Yes') + '</span>';
  const no = () => '<span class="no">No</span>';
  const fb = (k, h) => '<div class="fb ' + k + '">' + h + '</div>';
  const okTxt = ok => '<b>' + (ok ? L('Correcte', 'Correcto', 'Correct') : L('Incorrecte', 'Incorrecto', 'Incorrect')) + '.</b> ';
  const TT = x => x == null ? '' : (typeof x === 'string' ? x : (x[lang] != null ? x[lang] : x.es != null ? x.es : x.ca));
  function stepE(s, i) {
    const h = TT(s.h), m = TT(s.m), t = TT(s.t), w = TT(s.w);
    let tb = '';
    if (s.table) tb = '<div class="tblw"><table class="etab"><thead><tr>' + s.table.head.map(x => '<th>' + esc(TT(x)) + '</th>').join('') + '</tr></thead><tbody>' + s.table.rows.map(r => '<tr>' + r.map(c => '<td>' + esc(TT(c)) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
    return '<div class="st ' + (s.c === 'done' ? 'done' : s.c === 'bad' ? 'hi' : '') + '"><span class="n">' + (i + 1) + '</span><div class="body">' +
      (h ? '<div class="small" style="font-weight:600">' + esc(h) + '</div>' : '') + (m ? '<div class="mm">' + esc(m) + '</div>' : '') +
      (t ? '<div>' + esc(t) + '</div>' : '') + tb + (w ? '<div class="why">' + esc(w) + '</div>' : '') + '</div></div>';
  }
  const stepsE = arr => '<div class="steps stepsE">' + arr.map(stepE).join('') + '</div>';
  /* canvi de base entre 2, 8 i 16: el mateix resultat pel camí del TFN */
  const altConv = r => !r || !r.alt ? '' : '<details class="acc"><summary>' + L('Una altra manera: amb el TFN, passant per base 10', 'Otra manera: con el TFN, pasando por base 10', 'Another way: with the PNT, going through base 10') + '</summary><div class="inner"><p class="small">' + L('Aquest camí <b>funciona sempre</b>, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una <b>drecera</b> que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.', 'Este camino <b>funciona siempre</b>, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un <b>atajo</b> que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.', 'This route <b>always works</b>, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a <b>shortcut</b> that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result.') + '</p>' + stepsE(r.alt.steps) + '</div></details>';
  function readNum(s) {
    s = String(s == null ? '' : s).trim().replace(/[\s\u202f\u00a0]/g, '').replace(/−/g, '-').replace(/×/g, '*').replace(/·/g, '*');
    if (!s) return null;
    if (s.includes(',')) s = s.replace(/\./g, '').replace(/,/g, '.');
    const r = tryEval(s); return r && Math.abs(r.im) < 1e-9 ? r.re : null;
  }
  const normD = s => String(s == null ? '' : s).toUpperCase().replace(/[\s\u202f₍₎₀₁₂₃₄₅₆₇₈₉()]/g, '').replace(/\./g, ',').replace(/^\+/, '').replace(/−/g, '-');
  const normBits = s => String(s == null ? '' : s).replace(/[^01]/g, '');
  const plainRes = r => (r.digits != null ? r.digits : r.res.replace(/₍[^₎]*₎$/, ''));
  const closeTo = (a, b, rel) => a != null && Math.abs(a - b) <= (rel || 1e-3) * Math.max(Math.abs(b), 1e-9) + 1e-9;
  const mono = s => '<span class="mono">' + esc(s) + '</span>';
  const nmU = u => u === 'b' ? 'bits' : u === 'B' ? 'bytes' : u;
  const lastM = r => TT(r.steps[r.steps.length - 1].m);
  const afterEq = s => { s = String(s); const i = Math.max(s.lastIndexOf('= '), s.lastIndexOf('≈ ')); return i < 0 ? s : (s[i] === '≈' ? '≈ ' : '') + s.slice(i + 2); };
  const sgn = n => (n > 0 ? '+' : n < 0 ? '−' : '') + CE.fint(Math.abs(n));

  /* ---------- correcció de respostes ---------- */
  function numOK(x, v) {
    const y = readNum(x); if (y == null) return false;
    const err = Math.abs(y - v), rel = err / Math.max(Math.abs(v), 1e-12);
    if (rel < 1e-9) return true;
    return !Number.isInteger(v) && rel <= 2e-3;
  }
  const cleanD = s => String(s == null ? '' : s).toUpperCase().replace(/\s/g, '').replace(/₍[^₎]*₎/g, '').replace(/[₀-₉]/g, '').replace(/\./g, ',').replace(/…/g, '').replace(/^\+/, '').replace(/−/g, '-');
  function stripZ(s) {
    const neg = s[0] === '-'; if (neg) s = s.slice(1);
    let [i, f] = s.split(','); i = (i || '').replace(/^0+(?=.)/, '');
    if (f != null && !f.includes('(')) f = f.replace(/0+$/, '');
    return (neg ? '-' : '') + (i || '0') + (f ? ',' + f : '');
  }
  function digOK(x, v) {
    let a = cleanD(x), e = cleanD(v);
    if (!e.includes('(')) a = a.replace(/\(\d+\)$/, '');
    if (!a || /[^0-9A-Z,()-]/.test(a)) return false;
    a = stripZ(a); e = stripZ(e);
    if (a === e) return true;
    if (e.includes('(')) {
      const [ei, ef] = e.split(','), m = /^([^()]*)\((.*)\)$/.exec(ef || ''); if (!m) return false;
      const [ai, af] = a.replace(/[()]/g, '').split(',');
      if (ai !== ei || !af) return false;
      let exp = m[1]; while (exp.length < af.length + 1) exp += m[2];
      return af.length >= m[1].length + 2 * m[2].length && exp.startsWith(af);
    }
    return false;
  }
  function ansOK(a, x) {
    if (x == null || String(x).trim() === '') return false;
    if (a.k === 'num') return numOK(x, a.v);
    if (a.k === 'int') { const v = readNum(x); return v != null && Math.abs(v - a.v) < 1e-9; }
    if (a.k === 'dig') return digOK(x, a.v);
    if (a.k === 'bits') return /^[01\s]+$/.test(String(x).trim()) && normBits(x) === a.v;
    if (a.k === 'ieee') { const s = String(x).replace(/\s/g, '').toUpperCase().replace(/^0X/, '').replace(/₁₆|\(16\)$/, ''); return /^[01]{32}$/.test(s) ? s === a.bits : s === a.hex; }
    if (a.k === 'mc') return +x === a.v;
    return false;
  }
  const ansShow = a => a.show != null ? TT(typeof a.show === 'function' ? a.show() : a.show) :
    a.k === 'ieee' ? a.bits[0] + ' ' + a.bits.slice(1, 9) + ' ' + a.bits.slice(9) + ' = ' + a.hex + '₍₁₆₎' :
    a.k === 'mc' ? a.opts()[a.v] : a.k === 'int' ? sgn(a.v) : a.k === 'num' ? CE.fnum(a.v, 4) : String(a.v);
  const ansPh = a => a.ph ? TT(a.ph()) : a.k === 'num' ? L('p. ex. 0,4768', 'p. ej. 0,4768', 'e.g. 0.4768') : a.k === 'int' ? L('p. ex. −42', 'p. ej. −42', 'e.g. −42') : a.k === 'bits' ? L('només 0 i 1', 'solo 0 y 1', 'only 0 and 1') : a.k === 'ieee' ? L('32 bits o 8 hex', '32 bits u 8 hex', '32 bits or 8 hex') : a.k === 'dig' ? L('dígits, p. ex. 1EB', 'dígitos, p. ej. 1EB', 'digits, e.g. 1EB') : '';
  /* errors típics: quan una resposta no és correcta, intentem dir per què */
  function missHint(a, x) {
    if (a.alt) for (const [v, msg] of a.alt) { if (ansOK(Object.assign({}, a, { v, bits: v }), x)) return msg(); }
    if (a.k === 'num' || a.k === 'int') {
      const y = readNum(x); if (y == null) return L('No s\'entén el nombre: fes servir la coma decimal (0,5) o el punt (0.5).', 'No se entiende el número: usa la coma decimal (0,5) o el punto (0.5).', 'The number cannot be read: use a decimal comma (0,5) or point (0.5).');
      if (!a.v || !y) return null;
      const q = y / a.v, near = (t) => Math.abs(q / t - 1) < 2e-3;
      if (near(8) || near(1 / 8)) return L('T\'has deixat (o has posat de més) el factor 8 entre bits i bytes.', 'Te has dejado (o has puesto de más) el factor 8 entre bits y bytes.', 'You have left out (or added) the factor of 8 between bits and bytes.');
      for (const k of [1, 2, 3, 4]) { const t = (1.024) ** k; if (near(t) || near(1 / t)) return L('Has barrejat prefix decimal (10³) i binari (2¹⁰): mira si la unitat porta «i».', 'Has mezclado prefijo decimal (10³) y binario (2¹⁰): mira si la unidad lleva «i».', 'You have mixed a decimal prefix (10³) and a binary one (2¹⁰): check whether the unit has an “i”.'); }
      for (const k of [1, 2, 3, 4]) { if (near(1000 ** k) || near(1000 ** -k) || near(1024 ** k) || near(1024 ** -k)) return L('L\'ordre de magnitud no quadra: revisa quants salts de prefix fas.', 'El orden de magnitud no cuadra: revisa cuántos saltos de prefijo haces.', 'The order of magnitude does not fit: check how many prefix steps you make.'); }
      if (near(60) || near(1 / 60)) return L('Compte amb minuts i segons.', 'Cuidado con minutos y segundos.', 'Careful with minutes and seconds.');
      if (near(-1)) return L('El valor absolut és bo, però el signe no.', 'El valor absoluto es bueno, pero el signo no.', 'The absolute value is right, but the sign is not.');
      if (Math.abs(q - 1) < 0.02) return Number.isInteger(a.v) ? L('Gairebé: aquest resultat és exacte, dona\'l sencer (sense arrodonir).', 'Casi: este resultado es exacto, dalo entero (sin redondear).', 'Almost: this result is exact, give it in full (without rounding).') : L('Gairebé: és un problema d\'arrodoniment. Dona 3 o 4 xifres significatives correctes.', 'Casi: es un problema de redondeo. Da 3 o 4 cifras significativas correctas.', 'Almost: it is a rounding problem. Give 3 or 4 correct significant figures.');
    }
    if (a.k === 'bits') {
      const b = normBits(x); if (!/^[01\s]+$/.test(String(x).trim())) return L('Escriu només zeros i uns.', 'Escribe solo ceros y unos.', 'Write only zeros and ones.');
      if (b.length !== a.v.length) return L(`La resposta ha de tenir exactament ${a.v.length} bits (ara en té ${b.length}).`, `La respuesta tiene que tener exactamente ${a.v.length} bits (ahora tiene ${b.length}).`, `The answer must have exactly ${a.v.length} bits (it now has ${b.length}).`);
    }
    if (a.k === 'dig') {
      const e = stripZ(cleanD(a.v)), y = stripZ(cleanD(x));
      if (!e.includes(',') && y === e.split('').reverse().join('')) return L('Has llegit els residus al revés: es llegeixen de baix a dalt (l\'últim residu és la xifra de més pes).', 'Has leído los restos al revés: se leen de abajo arriba (el último resto es la cifra de más peso).', 'You have read the remainders the wrong way round: they are read from bottom to top (the last remainder is the most significant digit).');
    }
    if (a.k === 'ieee') { const s = String(x).replace(/\s/g, ''); if (!/^[01]{32}$/.test(s) && !/^[0-9A-Fa-f]{8}$/.test(s.replace(/^0x/i, ''))) return L('Dona els 32 bits o els 8 dígits hexadecimals.', 'Da los 32 bits o los 8 dígitos hexadecimales.', 'Give the 32 bits or the 8 hexadecimal digits.'); }
    return null;
  }
  /* alternatives errònies habituals per a les codificacions amb signe */
  function encAlt(sys, n, N) {
    const out = [];
    ['SM', 'C1', 'C2', 'CE'].forEach(o => { if (o === sys) return; const r = CE.encode(o, n, N); if (r.bits && r.bits !== CE.encode(sys, n, N).bits) out.push([r.bits, () => L(`Això és la representació en ${o}, no en ${sys}.`, `Eso es la representación en ${o}, no en ${sys}.`, `That is the ${o} representation, not ${sys}.`)]); });
    if (n < 0) { const pos = CE.binPad(-n, N); out.push([pos, () => L(`Aquest és +${-n}. Falta codificar el signe negatiu.`, `Este es +${-n}. Falta codificar el signo negativo.`, `This is +${-n}. The negative sign still has to be encoded.`)]); }
    if (sys === 'CE') { const r = CE.binPad(n + 2 ** (N - 1) - 1 < 0 ? 0 : n + 2 ** (N - 1) - 1, N); out.push([r, () => L(`Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = ${2 ** (N - 1)}.`, `Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = ${2 ** (N - 1)}.`, `You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = ${2 ** (N - 1)}.`)]); }
    return out;
  }
  /* apartat amb solució escrita a mà: rows = [[h, m, w, c]] */
  const hand = rows => stepsE(rows.map(([h, m, w, c]) => ({ h, m, w, c })));
  const MB = s => '<span class="mono">' + s + '</span>';
  const OOR = '__oor__';
  const SYS = ['SM', 'C1', 'C2', 'CE'];
  const sysName = s => ({ SM: L('signe i magnitud', 'signo y magnitud', 'sign and magnitude'), C1: L('complement a 1', 'complemento a 1', 'ones\' complement'), C2: L('complement a 2', 'complemento a 2', 'two\'s complement'), CE: L('codi d\'excés', 'código de exceso', 'excess code') })[s] + ' (' + s + ')';
  const NICE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 25, 32, 40, 48, 50, 64, 75, 100, 125, 128, 200, 250, 256, 300, 500, 512, 600, 750, 800, 1000, 1024, 1500, 2048, 2500, 4096, 5000, 8192];
  const NICEF = [0.5, 0.75, 1.25, 1.5, 2.5, 3.5, 4.7, 12.8, 1.44, 650, 700, 4.2, 0.25, 7.5];
  const decStr = v => String(v).replace('.', ',');
  const mmss = s => { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  /* laboratori: marca que la vista substitueix pel component de React */
  const LAB = (w, id, cfg) => LABM + JSON.stringify([w, id, cfg || {}]) + LABM;

  return {
    lang, L, esc, md, M, P, UL, OL, BX, DEF, THM, TIP, WARN, EXB, TBL, yes, no, LAB, fb, okTxt,
    TT, stepE, stepsE, altConv, readNum, normD, normBits, plainRes, closeTo,
    mono, nmU, lastM, afterEq, sgn, numOK, cleanD, stripZ, digOK, ansOK, ansShow, ansPh, missHint, encAlt, hand, MB,
    OOR, SYS, sysName, NICE, NICEF, decStr, mmss,
  };
}
