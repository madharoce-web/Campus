import CE from '../engine/ce.js';
import { VRES } from './consts.js';

/**
 * Generadors d'exercicis de la pràctica (11 tipus, nivell normal o dur), banc de conceptes
 * i generadors del simulacre de CP1. Codi original; l'aleatorietat (R) i la llista
 * de conceptes ja vistos (seen) arriben com a paràmetres perquè un exercici es pugui
 * tornar a construir igual en l'altre idioma.
 */
export function makeGenerators(C, R, seen = []) {
  const { L, ansOK, stepsE, plainRes, mono, lastM, afterEq, sgn, encAlt, hand, OOR, SYS, sysName, NICE, NICEF, decStr } = C;
  const { rnd, pick, shuffle } = R;
  const PR = { seen };
  const PRK = () => [['units', L('Unitats', 'Unidades')], ['transfer', L('Transferència', 'Transferencia')], ['base', L('Canvi de base', 'Cambio de base')], ['frac', L('Amb decimals', 'Con decimales')], ['ops', L('Operacions', 'Operaciones')], ['enc', L('Codificar', 'Codificar')], ['dec', L('Descodificar', 'Decodificar')], ['range', L('Rangs', 'Rangos')], ['ieee', 'IEEE 754'], ['media', L('Multimèdia', 'Multimedia')], ['teo', L('Conceptes', 'Conceptos')]];

  /* ---------- generadors ---------- */
  function gUnits(h) {
    for (;;) {
      let a, b, x;
      if (!h) { [a, b] = pick([['B', 'b'], ['b', 'B'], ['KB', 'B'], ['B', 'KB'], ['KiB', 'B'], ['B', 'KiB'], ['MB', 'KB'], ['MiB', 'KiB'], ['GB', 'MB'], ['GiB', 'MiB'], ['KB', 'b'], ['MiB', 'B'], ['KiB', 'KB'], ['MB', 'MiB']]); x = pick(NICE); }
      else { const dec = ['Kb', 'Mb', 'Gb', 'KB', 'MB', 'GB', 'TB'], bin = ['KiB', 'MiB', 'GiB', 'TiB']; if (rnd(2)) { a = pick(dec); b = pick(bin); } else { a = pick(bin); b = pick(dec.concat(['b', 'Kb'])); } x = pick(NICE.concat(NICEF)); }
      const r = CE.convUnits(x, a, b); if (r.r < 1e-3 || r.r > 1e13) continue;
      return { p: () => L('Converteix ', 'Convierte ') + '<b>' + CE.fnum(x, 6) + ' ' + a + '</b>' + L(' a ', ' a ') + '<b>' + b + '</b>.', a: { k: 'num', v: r.r, show: () => afterEq(lastM(r)) }, sol: () => stepsE(r.steps) };
    }
  }
  function gTransfer(h) {
    if (!h) {
      const size = pick([100, 250, 500, 700, 750, 1, 2, 4]), su = size < 10 ? 'GB' : 'MB', v = pick([10, 20, 50, 100, 200, 300, 600, 1000]);
      const r = CE.transfer(size, su, v, 'Mb');
      return { p: () => L('Quants segons es tarda a transferir un fitxer de <b>', '¿Cuántos segundos se tarda en transferir un fichero de <b>') + CE.fnum(size) + ' ' + su + L('</b> amb una connexió de <b>', '</b> con una conexión de <b>') + v + ' Mb/s</b>?', a: { k: 'num', v: r.t, show: () => CE.fnum(r.t, 3) + ' s' }, sol: () => stepsE(r.steps) };
    }
    const t = rnd(3);
    if (t === 0) {
      const size = pick([1.5, 2, 4, 4.7, 8, 25, 50]), su = pick(['GiB', 'GB', 'TB']), [v, vu] = pick([[12.5, 'MB'], [25, 'MB'], [40, 'MB'], [100, 'MB'], [1, 'Gb'], [2.5, 'Gb'], [10, 'Gb']]);
      const r = CE.transfer(size, su, v, vu);
      return { p: () => L('Un fitxer de <b>', 'Un fichero de <b>') + CE.fnum(size) + ' ' + su + L('</b> es copia a <b>', '</b> se copia a <b>') + CE.fnum(v) + ' ' + vu + '/s</b>. ' + L('Quants <b>minuts</b> tarda?', '¿Cuántos <b>minutos</b> tarda?'), a: { k: 'num', v: r.t / 60, show: () => CE.fnum(r.t, 2) + ' s = ' + CE.fnum(r.t / 60, 3) + ' min' }, sol: () => stepsE(r.steps) + hand([[L('A minuts', 'A minutos'), CE.fnum(r.t, 4) + ' s ÷ 60 = ' + CE.fnum(r.t / 60, 4) + ' min', '', 'done']]) };
    }
    if (t === 1) {
      const X = pick([1, 2, 4, 8, 10, 50]), su = pick(['GiB', 'GB']), T = pick([1, 2, 5, 10, 30]);
      const U = CE.unit(su), bits = X * U.f * 8, v = bits / (T * 60) / 1e6;
      return { p: () => L('Volem baixar <b>', 'Queremos bajar <b>') + X + ' ' + su + L('</b> en <b>', '</b> en <b>') + T + ' min</b>. ' + L('Quina velocitat mínima cal, en <b>Mb/s</b>?', '¿Qué velocidad mínima hace falta, en <b>Mb/s</b>?'), a: { k: 'num', v, show: () => CE.fnum(v, 4) + ' Mb/s' },
        sol: () => hand([[L('Mida en bits', 'Tamaño en bits'), X + ' ' + su + ' = ' + X + ' · ' + CE.PFT[U.p] + ' · 8 = ' + CE.fnum(bits, 0) + ' b'], [L('Temps en segons', 'Tiempo en segundos'), T + ' min = ' + T * 60 + ' s'], [L('Velocitat = mida ÷ temps', 'Velocidad = tamaño ÷ tiempo'), CE.fnum(bits, 0) + ' b ÷ ' + T * 60 + ' s = ' + CE.fnum(bits / (T * 60), 2) + ' b/s'], [L('A Mb/s (÷ 10⁶)', 'A Mb/s (÷ 10⁶)'), CE.fnum(v, 4) + ' Mb/s', L('La velocitat sempre amb prefix decimal, encara que la mida sigui en ', 'La velocidad siempre con prefijo decimal, aunque el tamaño sea en ') + su + '.', 'done']]) };
    }
    const v = pick([20, 50, 100, 300, 600, 1000]), T = pick([10, 30, 60, 90, 120]), u = pick(['MiB', 'MB', 'GiB']);
    const U = CE.unit(u), bits = v * 1e6 * T, r = bits / 8 / U.f;
    return { p: () => L('Amb una connexió de <b>', 'Con una conexión de <b>') + v + ' Mb/s</b>, ' + L('quants <b>', '¿cuántos <b>') + u + L('</b> es transfereixen en <b>', '</b> se transfieren en <b>') + T + ' s</b>?', a: { k: 'num', v: r, show: () => CE.fnum(r, 4) + ' ' + u },
      sol: () => hand([[L('Bits transferits = velocitat × temps', 'Bits transferidos = velocidad × tiempo'), v + ' · 10⁶ b/s × ' + T + ' s = ' + CE.fnum(bits, 0) + ' b'], [L('A bytes', 'A bytes'), CE.fnum(bits, 0) + ' ÷ 8 = ' + CE.fnum(bits / 8, 0) + ' B'], ['A ' + u, CE.fnum(bits / 8, 0) + ' B ÷ ' + CE.PFT[U.p] + ' = ' + CE.fnum(r, 4) + ' ' + u, '', 'done']]) };
  }
  function gBase(h) {
    let from, to, n;
    if (!h) { [from, to] = pick([[2, 16], [16, 2], [2, 8], [8, 2], [10, 2], [2, 10], [10, 16], [16, 10], [8, 16], [16, 8], [10, 8], [8, 10]]); n = 40 + rnd(2000); }
    else { const odd = [3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15]; from = pick(odd.concat([10, 16, 8])); do { to = pick(odd.concat([2, 8, 16, 10])); } while (to === from); n = 300 + rnd(30000); }
    const x = CE.intToBase(n, from).s, r = CE.convert(x, from, to);
    return { p: () => L('Passa ', 'Pasa ') + mono(CE.nb(x, from)) + L(' a base ', ' a base ') + to + '.', a: { k: 'dig', v: plainRes(r), show: () => r.res }, sol: () => stepsE(r.steps) };
  }
  function gFrac(h) {
    for (let t = 0; t < 200; t++) {
      let from, to, x;
      if (!h) {
        const ip = 1 + rnd(60), k = 1 + rnd(4), m = 1 + 2 * rnd(2 ** (k - 1)), val = ip + m / 2 ** k;
        [from, to] = pick([[10, 2], [2, 10], [2, 16], [16, 2], [2, 8], [8, 2], [10, 16], [10, 8], [16, 10], [8, 16]]);
        x = plainRes(CE.convert(decStr(val), 10, from));
      } else {
        from = pick([10, 10, 5, 3, 7, 6, 4]); to = pick([2, 3, 5, 8, 16].filter(b => b !== from));
        const ip = rnd(60), k = 1 + rnd(2), d = 1 + rnd(from ** k - 1);
        let fr = d.toString(from).toUpperCase().padStart(k, '0').replace(/0+$/, ''); if (!fr) continue;
        x = CE.intToBase(ip, from).s + ',' + fr;
      }
      let r; try { r = CE.convert(x, from, to); } catch { continue; }
      const pr = plainRes(r);
      if (/…/.test(pr)) continue;
      if (h && !/\(/.test(pr)) continue;
      if (h && (pr.split('(')[1] || '').length > 9) continue;
      if (!h && (pr.split(',')[1] || '').length > 8) continue;
      return { p: () => L('Passa ', 'Pasa ') + mono(CE.nb(x, from)) + L(' a base ', ' a base ') + to + (h ? L('. <span class="small muted">El resultat és periòdic: escriu el període entre parèntesis.</span>', '. <span class="small muted">El resultado es periódico: escribe el periodo entre paréntesis.</span>') : '.'), a: { k: 'dig', v: pr, show: () => r.res, ph: h ? () => L('p. ex. 12,1(021)', 'p. ej. 12,1(021)') : null }, sol: () => stepsE(r.steps) };
    }
    return gFrac(false);
  }
  function gOps(h) {
    const base = h ? pick([3, 4, 5, 6, 7, 9, 12, 16, 2]) : pick([2, 8, 16]);
    const op = h ? pick(['+', '-', '-']) : pick(['+', '-']);
    const top = Math.min(base ** (h ? 6 : 4), base === 2 ? 1024 : 200000), low = Math.min(base ** 2, 50);
    let A, B; do { A = low + rnd(top - low); B = low + rnd(top - low); } while (A === B);
    if (op === '-' && A < B) [A, B] = [B, A];
    const a = CE.intToBase(A, base).s, b = CE.intToBase(B, base).s, r = CE.addSub(a, b, base, op);
    return { p: () => L('Calcula en base ' + base + ', columna a columna: ', 'Calcula en base ' + base + ', columna a columna: ') + mono(CE.nb(a, base) + ' ' + (op === '+' ? '+' : '−') + ' ' + CE.nb(b, base)), a: { k: 'dig', v: r.res, show: () => CE.nb(r.res, base) }, sol: () => stepsE(r.steps) };
  }
  function gEnc(h) {
    const sys = pick(SYS), N = h ? pick([6, 7, 8, 9, 10, 12, 16]) : 8, [lo, hi] = CE.rangeOf(sys, N);
    let n;
    if (h && rnd(10) < 3) n = pick([lo, hi, lo - 1, hi + 1, -(2 ** (N - 1)), 2 ** (N - 1)]);
    else do { n = (rnd(2) ? -1 : 1) * (1 + rnd(h ? hi : 127)); } while (n < lo || n > hi);
    const r = CE.encode(sys, n, N);
    return { oor: true, p: () => L('Representa ', 'Representa ') + mono(sgn(n)) + L(' en <b>', ' en <b>') + sysName(sys) + '</b>' + L(' amb ', ' con ') + N + ' bits.', a: r.err ? { k: 'oor', show: () => L('No es pot representar: fora de rang', 'No se puede representar: fuera de rango') } : { k: 'bits', v: r.bits, alt: encAlt(sys, n, N), show: () => r.bits }, sol: () => stepsE(r.steps) };
  }
  function decAlt(sys, bits) { const v = CE.decode(sys, bits).v, out = []; SYS.forEach(o => { if (o === sys) return; const w = CE.decode(o, bits).v; if (w !== v && !out.some(x => x[0] === w)) out.push([w, () => L('Aquest valor és el de ' + o + ', no el de ' + sys + '.', 'Ese valor es el de ' + o + ', no el de ' + sys + '.')]); }); const u = parseInt(bits, 2); if (u !== v && !out.some(x => x[0] === u)) out.push([u, () => L('Això és llegir els bits com a natural, sense signe.', 'Eso es leer los bits como natural, sin signo.')]); return out; }
  function gDec(h) {
    const sys = pick(SYS), N = h ? pick([6, 7, 8, 9, 10, 12, 16]) : 8;
    let bits;
    if (h && rnd(10) < 3) bits = pick(['1' + '0'.repeat(N - 1), '1'.repeat(N), '0' + '1'.repeat(N - 1), '1' + '0'.repeat(N - 2) + '1']);
    else bits = Array.from({ length: N }, (_, i) => i === 0 ? (rnd(3) ? 1 : 0) : rnd(2)).join('');
    const r = CE.decode(sys, bits);
    return { p: () => L('Quin enter representa ', '¿Qué entero representa ') + mono(bits) + L(' en <b>', ' en <b>') + sysName(sys) + '</b>?', a: { k: 'int', v: r.v, alt: decAlt(sys, bits) }, sol: () => stepsE(r.steps) };
  }
  function gRange(h) {
    const sys = pick(SYS), N = h ? 3 + rnd(14) : pick([4, 8]), [lo, hi] = CE.rangeOf(sys, N), sym = sys === 'SM' || sys === 'C1';
    return { range: [lo, hi], p: () => L('Quin és el rang de valors de <b>', '¿Cuál es el rango de valores de <b>') + sysName(sys) + L('</b> amb <b>', '</b> con <b>') + N + ' bits</b>?',
      sol: () => hand([[L('Combinacions', 'Combinaciones'), '2' + CE.sup(N) + ' = ' + CE.fint(2 ** N)],
        sym ? [L('Dues representacions del zero', 'Dos representaciones del cero'), '+0 = 0' + '0'.repeat(N - 1) + ',  −0 = ' + (sys === 'SM' ? '1' + '0'.repeat(N - 1) : '1'.repeat(N)), L('Es perd una combinació: el rang és simètric.', 'Se pierde una combinación: el rango es simétrico.')]
          : [L('Un sol zero', 'Un solo cero'), sys === 'C2' ? '0 = ' + '0'.repeat(N) + ';  ' + '1' + '0'.repeat(N - 1) + ' = −2' + CE.sup(N - 1) : '0 = 1' + '0'.repeat(N - 1) + ' (= E);  ' + '0'.repeat(N) + ' = −E', L('La combinació que sobra va als negatius: hi ha un negatiu més que positius.', 'La combinación que sobra va a los negativos: hay un negativo más que positivos.')],
        [L('Rang', 'Rango'), sym ? '[−(2' + CE.sup(N - 1) + ' − 1), 2' + CE.sup(N - 1) + ' − 1] = [' + sgn(lo) + ', ' + sgn(hi) + ']' : '[−2' + CE.sup(N - 1) + ', 2' + CE.sup(N - 1) + ' − 1] = [' + sgn(lo) + ', ' + sgn(hi) + ']', '', 'done']]) };
  }
  const grpBits = b => b[0] + ' ' + b.slice(1, 9) + ' ' + b.slice(9);
  function gIeee(h) {
    const mode = h ? pick(['enc', 'dec', 'dec', 'enc']) : 'enc';
    if (mode === 'enc') {
      let val;
      if (!h) { const a = 1 + rnd(200), k = rnd(4), m = k ? 1 + 2 * rnd(2 ** (k - 1)) : 0; val = (rnd(2) ? -1 : 1) * (a + (k ? m / 2 ** k : 0)); }
      else { const k = 2 + rnd(5), m = 1 + 2 * rnd(2 ** (k - 1)); val = (rnd(2) ? -1 : 1) * (rnd(3) ? m / 2 ** k : 1 + rnd(1000) + m / 2 ** k); }
      const xs = decStr(val), r = CE.ieeeEncode(xs);
      return { p: () => L('Representa ', 'Representa ') + mono((val < 0 ? '−' : '+') + decStr(Math.abs(val))) + L(' en IEEE 754 de simple precisió (32 bits o 8 hex).', ' en IEEE 754 de simple precisión (32 bits u 8 hex).'), a: { k: 'ieee', bits: r.bits, hex: r.hex }, sol: () => stepsE(r.steps) };
    }
    const S = rnd(2), e = rnd(17) - 6, fb = Array.from({ length: 23 }, (_, i) => i < 6 ? rnd(2) : 0).join('');
    const bits = S + CE.binPad(e + 127, 8) + fb, hex = parseInt(bits, 2).toString(16).toUpperCase().padStart(8, '0'), r = CE.ieeeDecode(bits);
    return { p: () => L('Quin nombre decimal representa ', '¿Qué número decimal representa ') + mono(hex + '₍₁₆₎') + L(' en IEEE 754 de simple precisió?', ' en IEEE 754 de simple precisión?'), a: { k: 'num', v: r.v, show: () => CE.fnum(r.v, 10) },
      sol: () => hand([[L('Hexadecimal → binari (4 bits per dígit)', 'Hexadecimal → binario (4 bits por dígito)'), hex.split('').join(' ') + ' → ' + grpBits(bits)]]) + stepsE(r.steps) };
  }
  function gMedia(h) {
    const t = h ? rnd(6) : rnd(3);
    if (t === 0) { const [w, hh] = pick([[640, 480], [800, 600], [1024, 768], [1280, 720], [1920, 1080], [3000, 2000], [4000, 3000]]), b = pick([1, 8, 16, 24, 32]), u = pick(['KiB', 'MiB', 'KB', 'MB']); const r = CE.image(w, hh, b, u); return { p: () => L('Mida d\'una imatge de <b>', 'Tamaño de una imagen de <b>') + w + ' × ' + hh + '</b> px ' + L('a <b>', 'a <b>') + b + ' bits/px</b>, en <b>' + u + '</b>.', a: { k: 'num', v: r.r, show: () => afterEq(lastM(r)) }, sol: () => stepsE(r.steps) }; }
    if (t === 1) { const d = pick([30, 60, 90, 120, 180, 240, 300, 600]), f = pick([8000, 22050, 44100, 48000, 96000]), b = pick([8, 16, 24]), c = pick([1, 2, 6]), u = pick(['KiB', 'MiB', 'MB']); const r = CE.audio(d, f, b, c, u); const dq = d >= 60 && h ? (d / 60) + ' min' : d + ' s'; return { p: () => L('Àudio sense comprimir de <b>', 'Audio sin comprimir de <b>') + dq + '</b>, ' + CE.fint(f) + ' Hz, ' + b + ' bits, ' + c + ' ' + (c === 1 ? 'canal' : L('canals', 'canales')) + '. ' + L('Mida en <b>', 'Tamaño en <b>') + u + '</b>?', a: { k: 'num', v: r.r, show: () => afterEq(lastM(r)) }, sol: () => stepsE(r.steps) }; }
    if (t === 2) { const rn = pick(Object.keys(VRES)), [w, hh] = VRES[rn], fps = pick([24, 25, 30, 50, 60]), mn = pick([1, 2, 5, 10, 30]), u = pick(['GiB', 'GB', 'TiB']); const r = CE.video(w, hh, 24, fps, mn * 60, u); return { p: () => L('Vídeo sense comprimir ', 'Vídeo sin comprimir ') + rn + ' (' + w + ' × ' + hh + '), 24 bits/px, ' + fps + ' FPS, <b>' + mn + ' min</b>. ' + L('Mida en <b>', 'Tamaño en <b>') + u + '</b>?', a: { k: 'num', v: r.r, show: () => afterEq(lastM(r)) }, sol: () => stepsE(r.steps) }; }
    if (t === 3) {
      const X = pick([100, 650, 700, 1024]), cu = pick(['MiB', 'MB']), f = pick([44100, 48000, 22050]), b = pick([16, 24]), c = pick([1, 2]);
      const U = CE.unit(cu), bits = X * U.f * 8, br = f * b * c, s = bits / br;
      return { p: () => L('Quants <b>minuts</b> d\'àudio sense comprimir (', '¿Cuántos <b>minutos</b> de audio sin comprimir (') + CE.fint(f) + ' Hz, ' + b + ' bits, ' + c + ' ' + (c === 1 ? 'canal' : L('canals', 'canales')) + L(') caben en <b>', ') caben en <b>') + X + ' ' + cu + '</b>?', a: { k: 'num', v: s / 60, show: () => CE.fnum(s / 60, 3) + ' min' },
        sol: () => hand([[L('Bitrate = f × b × c', 'Bitrate = f × b × c'), CE.fint(f) + ' × ' + b + ' × ' + c + ' = ' + CE.fint(br) + ' b/s'], [L('Capacitat en bits', 'Capacidad en bits'), X + ' ' + cu + ' = ' + X + ' · ' + CE.PFT[U.p] + ' · 8 = ' + CE.fnum(bits, 0) + ' b'], [L('Durada = capacitat ÷ bitrate', 'Duración = capacidad ÷ bitrate'), CE.fnum(bits, 0) + ' ÷ ' + CE.fint(br) + ' = ' + CE.fnum(s, 2) + ' s'], [L('A minuts', 'A minutos'), CE.fnum(s, 2) + ' ÷ 60 = ' + CE.fnum(s / 60, 3) + ' min', '', 'done']]) };
    }
    if (t === 4) {
      const [w, hh] = pick([[1024, 768], [800, 600], [1920, 1080], [1280, 1024], [640, 480]]), b = pick([1, 4, 8, 16, 24, 32]), B = w * hh * b / 8, ki = B % 1024 === 0, sz = ki ? CE.fint(B / 1024) + ' KiB' : CE.fint(B) + ' B';
      return { p: () => L('Una imatge de <b>', 'Una imagen de <b>') + w + ' × ' + hh + L('</b> px sense comprimir ocupa <b>', '</b> px sin comprimir ocupa <b>') + sz + L('</b>. Quants bits per píxel fa servir? I quants colors pot mostrar?', '</b>. ¿Cuántos bits por píxel usa? ¿Y cuántos colores puede mostrar?') + ' <span class="small muted">' + L('(respon els bits/px)', '(responde los bits/px)') + '</span>', a: { k: 'int', v: b, show: () => b + ' bits/px → 2' + CE.sup(b) + ' = ' + CE.fint(2 ** b) + L(' colors', ' colores') },
        sol: () => hand([[L('Mida en bits', 'Tamaño en bits'), sz + ' = ' + CE.fint(B) + ' B = ' + CE.fint(B * 8) + ' b'], [L('Píxels', 'Píxeles'), w + ' × ' + hh + ' = ' + CE.fint(w * hh)], [L('Bits per píxel', 'Bits por píxel'), CE.fint(B * 8) + ' ÷ ' + CE.fint(w * hh) + ' = ' + b, ''], [L('Colors possibles', 'Colores posibles'), '2' + CE.sup(b) + ' = ' + CE.fint(2 ** b), '', 'done']]) };
    }
    const rn = pick(['HD 720p', 'Full HD', '4K UHD']), [w, hh] = VRES[rn], fps = pick([25, 30, 50, 60]), br = pick([4, 8, 15, 25, 50]), raw = w * hh * 24 * fps, ratio = raw / (br * 1e6);
    return { p: () => L('Un vídeo ', 'Un vídeo ') + rn + ' (' + w + ' × ' + hh + '), 24 bits/px, ' + fps + L(' FPS s\'emet a <b>', ' FPS se emite a <b>') + br + ' Mb/s</b>. ' + L('Quin és el factor de compressió (cops més petit que sense comprimir)?', '¿Cuál es el factor de compresión (veces más pequeño que sin comprimir)?'), a: { k: 'num', v: ratio, show: () => CE.fnum(ratio, 2) + ' : 1' },
      sol: () => hand([[L('Bitrate sense comprimir', 'Bitrate sin comprimir'), w + ' × ' + hh + ' × 24 × ' + fps + ' = ' + CE.fint(raw) + ' b/s ≈ ' + CE.fnum(raw / 1e6, 2) + ' Mb/s'], [L('Factor = sense comprimir ÷ comprimit', 'Factor = sin comprimir ÷ comprimido'), CE.fnum(raw / 1e6, 2) + ' ÷ ' + br + ' ≈ ' + CE.fnum(ratio, 2), L('Per això tot el vídeo real va comprimit: es treu la redundància entre fotogrames consecutius.', 'Por eso todo el vídeo real va comprimido: se quita la redundancia entre fotogramas consecutivos.'), 'done']]) };
  }

  /* ---------- banc de conceptes (la primera opció és la correcta) ---------- */
  const TEO = [
   { q: () => L('Per què es parla del «coll d\'ampolla de Von Neumann»?', '¿Por qué se habla del «cuello de botella de Von Neumann»?'), o: () => [L('Instruccions i dades comparteixen memòria i bus: no es poden llegir alhora i la CPU espera la memòria.', 'Instrucciones y datos comparten memoria y bus: no se pueden leer a la vez y la CPU espera a la memoria.'), L('La CPU només té una ALU.', 'La CPU solo tiene una ALU.'), L('La memòria principal és més petita que el disc.', 'La memoria principal es más pequeña que el disco.'), L('El programa s\'ha de recablejar per canviar-lo.', 'El programa se tiene que recablear para cambiarlo.')], w: () => L('El problema és el camí compartit: la CPU és molt més ràpida que la memòria i, a més, cada accés porta o una instrucció o una dada.', 'El problema es el camino compartido: la CPU es mucho más rápida que la memoria y, además, cada acceso trae o una instrucción o un dato.') },
   { q: () => L('Què distingeix l\'arquitectura Harvard?', '¿Qué distingue la arquitectura Harvard?'), o: () => [L('Memòries (i camins) separats per a instruccions i per a dades.', 'Memorias (y caminos) separados para instrucciones y para datos.'), L('No té memòria cau.', 'No tiene memoria caché.'), L('El programa no es guarda en memòria.', 'El programa no se guarda en memoria.'), L('Només pot executar una instrucció per segon.', 'Solo puede ejecutar una instrucción por segundo.')], w: () => L('Pot llegir la instrucció següent i una dada alhora. Es fa servir en microcontroladors i, internament, a les cau L1 dels processadors actuals.', 'Puede leer la instrucción siguiente y un dato a la vez. Se usa en microcontroladores e, internamente, en las caché L1 de los procesadores actuales.') },
   { q: () => L('Què aporta la idea del <b>programa emmagatzemat</b>?', '¿Qué aporta la idea del <b>programa almacenado</b>?'), o: () => [L('El programa es guarda a la memòria com una dada més: canviar de programa és carregar-ne un altre, no recablejar.', 'El programa se guarda en la memoria como un dato más: cambiar de programa es cargar otro, no recablear.'), L('Els programes es guarden en targetes perforades.', 'Los programas se guardan en tarjetas perforadas.'), L('El programa queda gravat al processador de fàbrica.', 'El programa queda grabado en el procesador de fábrica.'), L('Les dades es guarden al disc i el programa a la CPU.', 'Los datos se guardan en el disco y el programa en la CPU.')], w: () => L('Abans (ENIAC) programar volia dir canviar cables. Amb el programa a memòria, el mateix hardware fa qualsevol tasca.', 'Antes (ENIAC) programar quería decir cambiar cables. Con el programa en memoria, el mismo hardware hace cualquier tarea.') },
   { q: () => L('Per què una memòria cau petita accelera tant el sistema?', '¿Por qué una memoria caché pequeña acelera tanto el sistema?'), o: () => [L('Pel principi de localitat: els programes tornen a fer servir dades recents i properes.', 'Por el principio de localidad: los programas vuelven a usar datos recientes y cercanos.'), L('Perquè és no volàtil.', 'Porque es no volátil.'), L('Perquè hi cap tot el programa.', 'Porque cabe todo el programa.'), L('Perquè substitueix els registres.', 'Porque sustituye a los registros.')], w: () => L('Un bucle llegeix les mateixes instruccions moltes vegades (localitat temporal) i un vector es recorre en adreces seguides (localitat espacial): la majoria d\'accessos són encerts.', 'Un bucle lee las mismas instrucciones muchas veces (localidad temporal) y un vector se recorre en direcciones seguidas (localidad espacial): la mayoría de accesos son aciertos.') },
   { q: () => L('Ordre de la jerarquia de memòria, de més ràpida a més lenta:', 'Orden de la jerarquía de memoria, de más rápida a más lenta:'), o: () => [L('registres → cau → RAM → SSD/disc', 'registros → caché → RAM → SSD/disco'), L('cau → registres → RAM → disc', 'caché → registros → RAM → disco'), L('RAM → cau → registres → disc', 'RAM → caché → registros → disco'), L('registres → RAM → cau → disc', 'registros → RAM → caché → disco')], w: () => L('Com més a prop de la CPU, més ràpida, més petita i més cara per byte.', 'Cuanto más cerca de la CPU, más rápida, más pequeña y más cara por byte.') },
   { q: () => L('Què passa amb el contingut de la RAM en apagar l\'ordinador?', '¿Qué pasa con el contenido de la RAM al apagar el ordenador?'), o: () => [L('Es perd: és volàtil.', 'Se pierde: es volátil.'), L('Es copia automàticament a la cau.', 'Se copia automáticamente a la caché.'), L('Es manté, com el firmware.', 'Se mantiene, como el firmware.'), L('Es manté només si és DDR5.', 'Se mantiene solo si es DDR5.')], w: () => L('Per això cal emmagatzematge secundari (SSD, disc) per conservar fitxers.', 'Por eso hace falta almacenamiento secundario (SSD, disco) para conservar ficheros.') },
   { q: () => L('El <b>firmware</b> (BIOS/UEFI) és…', 'El <b>firmware</b> (BIOS/UEFI) es…'), o: () => [L('software gravat en memòria no volàtil que inicialitza el hardware en engegar.', 'software grabado en memoria no volátil que inicializa el hardware al arrancar.'), L('una part del sistema operatiu que es carrega des del disc.', 'una parte del sistema operativo que se carga desde el disco.'), L('el hardware de la placa base.', 'el hardware de la placa base.'), L('un tipus de memòria cau.', 'un tipo de memoria caché.')], w: () => L('Està a mig camí entre hardware i software: és codi, però va lligat a un dispositiu concret i no es perd en apagar.', 'Está a medio camino entre hardware y software: es código, pero va ligado a un dispositivo concreto y no se pierde al apagar.') },
   { q: () => L('Diferència entre compilador i intèrpret:', 'Diferencia entre compilador e intérprete:'), o: () => [L('El compilador tradueix tot el programa abans d\'executar-lo i genera un executable; l\'intèrpret tradueix i executa instrucció a instrucció cada vegada.', 'El compilador traduce todo el programa antes de ejecutarlo y genera un ejecutable; el intérprete traduce y ejecuta instrucción a instrucción cada vez.'), L('L\'intèrpret genera un executable i el compilador no.', 'El intérprete genera un ejecutable y el compilador no.'), L('Només els compiladors detecten errors.', 'Solo los compiladores detectan errores.'), L('El compilador tradueix assemblador i l\'intèrpret alt nivell.', 'El compilador traduce ensamblador y el intérprete alto nivel.')], w: () => L('Compilat: més ràpid en execució, els errors surten abans d\'executar. Interpretat: més portable i fàcil de provar, però més lent.', 'Compilado: más rápido en ejecución, los errores salen antes de ejecutar. Interpretado: más portable y fácil de probar, pero más lento.') },
   { q: () => L('Quin traductor passa de llenguatge assemblador a codi màquina?', '¿Qué traductor pasa de lenguaje ensamblador a código máquina?'), o: () => [L('Un assemblador (ensamblador).', 'Un ensamblador.'), L('Un compilador de C.', 'Un compilador de C.'), L('Un intèrpret.', 'Un intérprete.'), L('El sistema operatiu.', 'El sistema operativo.')], w: () => L('La correspondència és d\'una a una: cada mnemònic és una instrucció màquina.', 'La correspondencia es de una a una: cada mnemónico es una instrucción máquina.') },
   { q: () => L('Per què l\'assemblador és un llenguatge de <b>baix nivell</b>?', '¿Por qué el ensamblador es un lenguaje de <b>bajo nivel</b>?'), o: () => [L('Cada instrucció correspon a una instrucció màquina i depèn del processador.', 'Cada instrucción corresponde a una instrucción máquina y depende del procesador.'), L('Perquè és declaratiu.', 'Porque es declarativo.'), L('Perquè es fa servir poc.', 'Porque se usa poco.'), L('Perquè no té variables.', 'Porque no tiene variables.')], w: () => L('«Nivell» vol dir distància al hardware, no qualitat.', '«Nivel» quiere decir distancia al hardware, no calidad.') },
   { q: () => L('Quin d\'aquests llenguatges és <b>declaratiu</b>?', '¿Cuál de estos lenguajes es <b>declarativo</b>?'), o: () => ['SQL', 'C', 'Python', 'Assembly'], w: () => L('A SQL dius quines dades vols, no com trobar-les. També ho és Prolog.', 'En SQL dices qué datos quieres, no cómo encontrarlos. También lo es Prolog.') },
   { q: () => L('Una GPU aplica la mateixa operació a milers de píxels alhora. Segons Flynn és…', 'Una GPU aplica la misma operación a miles de píxeles a la vez. Según Flynn es…'), o: () => ['SIMD', 'SISD', 'MIMD', 'MISD'], w: () => L('Una sola instrucció (Single Instruction) sobre moltes dades (Multiple Data).', 'Una sola instrucción (Single Instruction) sobre muchos datos (Multiple Data).') },
   { q: () => L('Un processador de 8 nuclis executant programes diferents en cada nucli és…', 'Un procesador de 8 núcleos ejecutando programas distintos en cada núcleo es…'), o: () => ['MIMD', 'SIMD', 'SISD', 'MISD'], w: () => L('Cada nucli té el seu flux d\'instruccions i les seves dades.', 'Cada núcleo tiene su flujo de instrucciones y sus datos.') },
   { q: () => L('Diferència entre un multiprocessador i un clúster:', 'Diferencia entre un multiprocesador y un clúster:'), o: () => [L('El multiprocessador comparteix memòria; el clúster són ordinadors amb memòria pròpia units per una xarxa.', 'El multiprocesador comparte memoria; el clúster son ordenadores con memoria propia unidos por una red.'), L('El clúster és SIMD i el multiprocessador SISD.', 'El clúster es SIMD y el multiprocesador SISD.'), L('No n\'hi ha: són sinònims.', 'No hay: son sinónimos.'), L('El multiprocessador no pot executar programes en paral·lel.', 'El multiprocesador no puede ejecutar programas en paralelo.')], w: () => L('Tots dos són MIMD; la diferència és on viu la memòria.', 'Los dos son MIMD; la diferencia es dónde vive la memoria.') },
   { q: () => L('Quin component defineix la <b>2a generació</b> d\'ordinadors?', '¿Qué componente define la <b>2.ª generación</b> de ordenadores?'), o: () => [L('El transistor.', 'El transistor.'), L('La vàlvula de buit.', 'La válvula de vacío.'), L('El circuit integrat.', 'El circuito integrado.'), L('El microprocessador.', 'El microprocesador.')], w: () => L('1a vàlvules, 2a transistors, 3a circuits integrats, 4a microprocessador i PC.', '1.ª válvulas, 2.ª transistores, 3.ª circuitos integrados, 4.ª microprocesador y PC.') },
   { q: () => L('Què té de nou la màquina analítica de Babbage?', '¿Qué tiene de nuevo la máquina analítica de Babbage?'), o: () => [L('És el primer disseny de màquina programable de propòsit general, amb memòria i unitat de càlcul separades.', 'Es el primer diseño de máquina programable de propósito general, con memoria y unidad de cálculo separadas.'), L('Va ser el primer ordinador electrònic.', 'Fue el primer ordenador electrónico.'), L('Feia servir transistors.', 'Usaba transistores.'), L('Va introduir el sistema binari.', 'Introdujo el sistema binario.')], w: () => L('Mai es va acabar de construir; Ada Lovelace en va escriure el primer programa.', 'Nunca se llegó a construir; Ada Lovelace escribió el primer programa.') },
   { q: () => L('Un disc venut com a «1 TB». Quant hi veurà el sistema operatiu?', 'Un disco vendido como «1 TB». ¿Cuánto verá el sistema operativo?'), o: () => ['≈ 0,909 TiB', '≈ 1,1 TiB', '1 TiB', '≈ 0,977 TiB'], w: () => L('10¹² ÷ 2⁴⁰ ≈ 0,909. El fabricant fa servir T = 10¹²; el sistema operatiu, sovint, 2⁴⁰ (encara que ho escrigui «TB»).', '10¹² ÷ 2⁴⁰ ≈ 0,909. El fabricante usa T = 10¹²; el sistema operativo, a menudo, 2⁴⁰ (aunque lo escriba «TB»).') },
   { q: () => L('Quins sistemes tenen <b>dues representacions del zero</b>?', '¿Qué sistemas tienen <b>dos representaciones del cero</b>?'), o: () => [L('SM i C1', 'SM y C1'), L('C2 i CE', 'C2 y CE'), L('Només C2', 'Solo C2'), L('Tots quatre', 'Los cuatro')], w: () => L('SM: 000…0 i 100…0. C1: 000…0 i 111…1. Per això C2 i CE tenen un negatiu més.', 'SM: 000…0 y 100…0. C1: 000…0 y 111…1. Por eso C2 y CE tienen un negativo más.') },
   { q: () => L('Per què amb 8 bits C2 va de −128 a +127 i no de −127 a +127?', '¿Por qué con 8 bits C2 va de −128 a +127 y no de −127 a +127?'), o: () => [L('Només hi ha un zero, i la combinació que queda lliure (10000000) representa −128.', 'Solo hay un cero, y la combinación que queda libre (10000000) representa −128.'), L('Perquè el bit de signe compta doble.', 'Porque el bit de signo cuenta doble.'), L('És un error d\'arrodoniment.', 'Es un error de redondeo.'), L('Perquè 128 és parell.', 'Porque 128 es par.')], w: () => L('256 combinacions: 128 negatius, el zero i 127 positius.', '256 combinaciones: 128 negativos, el cero y 127 positivos.') },
   { q: () => L('En codi d\'excés amb 8 bits (E = 128), què val 10000000?', 'En código de exceso con 8 bits (E = 128), ¿qué vale 10000000?'), o: () => ['0', '−128', '+128', '−0'], w: () => L('128 − 128 = 0. En CE el primer bit a 1 indica ≥ 0, al revés que a SM, C1 i C2.', '128 − 128 = 0. En CE el primer bit a 1 indica ≥ 0, al revés que en SM, C1 y C2.') },
   { q: () => L('En C2 de 8 bits, 01111111 + 00000001 = 10000000. Què ha passat?', 'En C2 de 8 bits, 01111111 + 00000001 = 10000000. ¿Qué ha pasado?'), o: () => [L('Desbordament: +127 + 1 no hi cap i surt −128.', 'Desbordamiento: +127 + 1 no cabe y sale −128.'), L('Res: 10000000 és +128.', 'Nada: 10000000 es +128.'), L('És −0.', 'Es −0.'), L('El resultat és correcte però en SM.', 'El resultado es correcto pero en SM.')], w: () => L('Dos positius que donen un negatiu: és la marca del desbordament.', 'Dos positivos que dan un negativo: es la marca del desbordamiento.') },
   { q: () => L('Per què a IEEE 754 no es guarda l\'1 de davant de la coma?', '¿Por qué en IEEE 754 no se guarda el 1 de delante de la coma?'), o: () => [L('En un nombre normalitzat sempre hi és; no guardar-lo dona un bit més de precisió.', 'En un número normalizado siempre está; no guardarlo da un bit más de precisión.'), L('Perquè l\'exponent ja el porta.', 'Porque el exponente ya lo lleva.'), L('Perquè és el bit de signe.', 'Porque es el bit de signo.'), L('Només s\'omet en els negatius.', 'Solo se omite en los negativos.')], w: () => L('És l\'«1 implícit» o bit ocult: la mantissa real té 24 bits amb només 23 de guardats.', 'Es el «1 implícito» o bit oculto: la mantisa real tiene 24 bits con solo 23 guardados.') },
   { q: () => L('A IEEE 754 simple, quin exponent emmagatzemat correspon a e = −3?', 'En IEEE 754 simple, ¿qué exponente almacenado corresponde a e = −3?'), o: () => ['124 = 01111100', '125 = 01111101', '−3 = 11111101', '131 = 10000011'], w: () => L('E = e + 127 = 124. L\'exponent va en excés 127 (no 128): 0 i 255 queden reservats.', 'E = e + 127 = 124. El exponente va en exceso 127 (no 128): 0 y 255 quedan reservados.') },
   { q: () => L('Què passa en guardar 0,1 en IEEE 754?', '¿Qué pasa al guardar 0,1 en IEEE 754?'), o: () => [L('No es pot guardar exactament: en binari és periòdic (0,0(0011)) i es talla.', 'No se puede guardar exactamente: en binario es periódico (0,0(0011)) y se corta.'), L('Es guarda exacte perquè té una sola xifra decimal.', 'Se guarda exacto porque tiene una sola cifra decimal.'), L('Dona NaN.', 'Da NaN.'), L('Es guarda com a desnormalitzat.', 'Se guarda como desnormalizado.')], w: () => L('Per això 0,1 + 0,2 no dona exactament 0,3 en la majoria de llenguatges.', 'Por eso 0,1 + 0,2 no da exactamente 0,3 en la mayoría de lenguajes.') },
   { q: () => L('IEEE 754 amb tots els bits de l\'exponent a 1 i fracció 0 representa…', 'IEEE 754 con todos los bits del exponente a 1 y fracción 0 representa…'), o: () => ['±∞', 'NaN', L('el nombre més gran', 'el número más grande'), '±0'], w: () => L('E = 255: si F = 0, infinit (amb el signe de S); si F ≠ 0, NaN.', 'E = 255: si F = 0, infinito (con el signo de S); si F ≠ 0, NaN.') },
   { q: () => L('Quin tipus de compressió fa servir JPEG?', '¿Qué tipo de compresión usa JPEG?'), o: () => [L('Amb pèrdua: elimina detalls que l\'ull no nota.', 'Con pérdida: elimina detalles que el ojo no nota.'), L('Sense pèrdua, com PNG.', 'Sin pérdida, como PNG.'), L('No comprimeix.', 'No comprime.'), L('Vectorial.', 'Vectorial.')], w: () => L('Bo per a fotos; per a captures amb text, millor PNG (sense pèrdua).', 'Bueno para fotos; para capturas con texto, mejor PNG (sin pérdida).') },
   { q: () => L('Què passa en ampliar molt una imatge vectorial?', '¿Qué pasa al ampliar mucho una imagen vectorial?'), o: () => [L('Es manté nítida: són formes descrites matemàticament.', 'Se mantiene nítida: son formas descritas matemáticamente.'), L('Es pixela com un JPEG.', 'Se pixela como un JPEG.'), L('Perd colors.', 'Pierde colores.'), L('Augmenta la mida del fitxer proporcionalment.', 'Aumenta el tamaño del fichero proporcionalmente.')], w: () => L('Vectorial = formes; mapa de bits = píxels. Logotips i diagrames, vectorials.', 'Vectorial = formas; mapa de bits = píxeles. Logotipos y diagramas, vectoriales.') },
   { q: () => L('Què guarda un fitxer MIDI?', '¿Qué guarda un fichero MIDI?'), o: () => [L('Instruccions musicals (nota, instrument, volum, durada), no l\'ona sonora.', 'Instrucciones musicales (nota, instrumento, volumen, duración), no la onda sonora.'), L('L\'ona mostrejada a 44 100 Hz.', 'La onda muestreada a 44 100 Hz.'), L('Àudio comprimit amb pèrdua.', 'Audio comprimido con pérdida.'), L('La partitura en imatge.', 'La partitura en imagen.')], w: () => L('Per això ocupa molt poc i sona diferent segons el sintetitzador.', 'Por eso ocupa muy poco y suena distinto según el sintetizador.') },
   { q: () => L('Si dobles la freqüència de mostratge i passes de 16 a 24 bits per mostra, la mida de l\'àudio…', 'Si doblas la frecuencia de muestreo y pasas de 16 a 24 bits por muestra, el tamaño del audio…'), o: () => [L('es multiplica per 3.', 'se multiplica por 3.'), L('es multiplica per 2.', 'se multiplica por 2.'), L('es multiplica per 2,5.', 'se multiplica por 2,5.'), L('es multiplica per 4.', 'se multiplica por 4.')], w: () => L('Mida = d × f × b × c: × 2 per f i × 24/16 = 1,5 per b → × 3.', 'Tamaño = d × f × b × c: × 2 por f y × 24/16 = 1,5 por b → × 3.') },
   { q: () => L('Amb 3 bits per mostra, quants nivells de quantificació hi ha?', 'Con 3 bits por muestra, ¿cuántos niveles de cuantificación hay?'), o: () => ['8', '3', '6', '9'], w: () => L('2³ = 8 nivells; cada mostra s\'arrodoneix al nivell més proper (error de quantificació).', '2³ = 8 niveles; cada muestra se redondea al nivel más cercano (error de cuantificación).') },
   { q: () => L('Quin color és RGB(255, 255, 0)?', '¿Qué color es RGB(255, 255, 0)?'), o: () => [L('Groc', 'Amarillo'), L('Blanc', 'Blanco'), L('Cian', 'Cian'), L('Magenta', 'Magenta')], w: () => L('Síntesi additiva: vermell + verd = groc. Amb els tres a 255, blanc.', 'Síntesis aditiva: rojo + verde = amarillo. Con los tres a 255, blanco.') },
   { q: () => L('Quants colors es poden representar amb 24 bits per píxel?', '¿Cuántos colores se pueden representar con 24 bits por píxel?'), o: () => ['16 777 216', '24', '256', '65 536'], w: () => L('2²⁴ = 256³: 8 bits (256 nivells) per a cada canal R, G i B.', '2²⁴ = 256³: 8 bits (256 niveles) para cada canal R, G y B.') },
   { q: () => L('Per què el vídeo es comprimeix molt més que una imatge sola?', '¿Por qué el vídeo se comprime mucho más que una imagen sola?'), o: () => [L('Fotogrames consecutius s\'assemblen molt: es guarden les diferències.', 'Fotogramas consecutivos se parecen mucho: se guardan las diferencias.'), L('Perquè té menys colors.', 'Porque tiene menos colores.'), L('Perquè es reprodueix més ràpid.', 'Porque se reproduce más rápido.'), L('Perquè el so ocupa poc.', 'Porque el sonido ocupa poco.')], w: () => L('Redundància temporal (entre fotogrames) a més de l\'espacial (dins de cada fotograma).', 'Redundancia temporal (entre fotogramas) además de la espacial (dentro de cada fotograma).') }
  ];
  function gTeo() {
    let i; do { i = rnd(TEO.length); } while (PR.seen.includes(i) && PR.seen.length < TEO.length);
    PR.seen.push(i); if (PR.seen.length > Math.min(12, TEO.length - 1)) PR.seen.shift();
    const T = TEO[i]; return { mc: true, p: T.q, o: T.o, w: T.w, order: shuffle([0, 1, 2, 3]) };
  }
  const GEN = { units: gUnits, transfer: gTransfer, base: gBase, frac: gFrac, ops: gOps, enc: gEnc, dec: gDec, range: gRange, ieee: gIeee, media: gMedia, teo: gTeo };
  /* ---------- correcció i vista ---------- */
  function prIsOK(q, a) {
    if (q.mc) return a === 0;
    if (q.range) return !!a && ansOK({ k: 'int', v: q.range[0] }, a.min) && ansOK({ k: 'int', v: q.range[1] }, a.max);
    if (q.a.k === 'oor') return a === OOR;
    if (a === OOR) return false;
    return ansOK(q.a, a);
  }
  const EXBLK = () => ({ mida: L('Canvis de mida', 'Cambios de tamaño'), base: L('Canvis de base', 'Cambios de base'), op: L('Operació', 'Operación'), sm: L('Signe i magnitud', 'Signo y magnitud'), cx: L('C1 · C2 · Codi d\'excés', 'C1 · C2 · Código de exceso'), ieee: 'IEEE 754' });
  function exGenBaseA() {
    const ib = (1 << (4 + rnd(4))) + rnd(1 << 4), k = 2 + rnd(4), fb = (1 + 2 * rnd(1 << (k - 1))).toString(2).padStart(k, '0');
    const x = ib.toString(2) + ',' + fb, to = pick([16, 8, 16]);
    const r = CE.convert(x, 2, to);
    if (rnd(2)) { const y = plainRes(r); const r2 = CE.convert(y, to, 2); return { p: () => L('Passa ', 'Pasa ') + mono(CE.nb(y, to)) + L(' a base 2.', ' a base 2.'), a: { k: 'dig', v: plainRes(r2), show: () => r2.res }, sol: () => stepsE(r2.steps) }; }
    return { p: () => L('Passa ', 'Pasa ') + mono(CE.nb(x, 2)) + L(' a base ', ' a base ') + to + '.', a: { k: 'dig', v: plainRes(r), show: () => r.res }, sol: () => stepsE(r.steps) };
  }
  function exGenBaseB() {
    for (let t = 0; t < 300; t++) {
      const from = pick([11, 12, 7, 6, 9, 5, 13]), to = pick([3, 2, 5, 4, 7].filter(b => b !== from));
      const ip = from + rnd(from * from - from), d = 1 + rnd(from - 1), x = CE.intToBase(ip, from).s + ',' + CE.DIG[d];
      const r = CE.convert(x, from, to), pr = plainRes(r);
      if (/…/.test(pr)) continue;
      const per = (pr.split('(')[1] || '').replace(')', '');
      if (/\(/.test(pr) ? per.length > 8 || per.length < 2 : (pr.split(',')[1] || '').length > 6) continue;
      return { p: () => L('Passa ', 'Pasa ') + mono(CE.nb(x, from)) + L(' a base ', ' a base ') + to + L('. Si és periòdic, indica el període entre parèntesis.', '. Si es periódico, indica el periodo entre paréntesis.'), a: { k: 'dig', v: pr, show: () => r.res }, sol: () => stepsE(r.steps) };
    }
  }
  function exGenOp() {
    const base = pick([8, 16, 5, 7, 2, 6]), op = pick(['+', '-']);
    const top = Math.min(base ** 4, base === 2 ? 255 : 4000), low = base ** 2;
    let A, B; do { A = low + rnd(top - low); B = low + rnd(top - low); } while (A === B);
    if (op === '-' && A < B) [A, B] = [B, A];
    const a = CE.intToBase(A, base).s, b = CE.intToBase(B, base).s, r = CE.addSub(a, b, base, op);
    return { p: () => L('Calcula en base ' + base + ': ', 'Calcula en base ' + base + ': ') + mono(CE.nb(a, base) + ' ' + (op === '+' ? '+' : '−') + ' ' + CE.nb(b, base)), a: { k: 'dig', v: r.res, show: () => CE.nb(r.res, base) }, sol: () => stepsE(r.steps) };
  }
  function exGenSM(neg) {
    const b = pick([5, 7, 6, 3]); let n; do { n = 20 + rnd(108); } while (n > 127);
    const x = CE.intToBase(n, b).s, v = neg ? -n : n, r = CE.encode('SM', v, 8);
    return { p: () => L('Representa ', 'Representa ') + mono((neg ? '−' : '') + CE.nb(x, b)) + L(' en signe i magnitud amb 8 bits.', ' en signo y magnitud con 8 bits.'), a: { k: 'bits', v: r.bits, alt: encAlt('SM', v, 8), show: () => r.bits },
      sol: () => '<div class="lbl-s">' + L('Pas 1 · a base 10', 'Paso 1 · a base 10') + '</div>' + stepsE(CE.convert(x, b, 10).steps) + '<div class="lbl-s">' + L('Pas 2 · signe i magnitud', 'Paso 2 · signo y magnitud') + '</div>' + stepsE(r.steps) };
  }
  function exGenEnc(sys, v, N) { const r = CE.encode(sys, v, N); return { p: () => mono(sgn(v)) + L(' en ', ' en ') + sys + L(' amb ', ' con ') + N + ' bits', a: { k: 'bits', v: r.bits, alt: encAlt(sys, v, N), show: () => r.bits }, sol: () => stepsE(r.steps) }; }
  function exGenIeee(kind) {
    let val;
    if (kind === 0) { const a = 2 + rnd(60), k = 1 + rnd(3), m = 1 + 2 * rnd(2 ** (k - 1)); val = a + m / 2 ** k; }
    else if (kind === 1) { const a = 1 + rnd(20), k = 1 + rnd(3), m = 1 + 2 * rnd(2 ** (k - 1)); val = -(a + m / 2 ** k); }
    else { const k = 2 + rnd(4), m = 1 + 2 * rnd(2 ** (k - 1)); val = (rnd(2) ? -1 : 1) * m / 2 ** k; }
    const r = CE.ieeeEncode(decStr(val));
    return { p: () => L('Representa ', 'Representa ') + mono((val < 0 ? '−' : '+') + decStr(Math.abs(val))) + L(' en IEEE 754 de simple precisió (32 bits o 8 hex).', ' en IEEE 754 de simple precisión (32 bits u 8 hex).'), a: { k: 'ieee', bits: r.bits, hex: r.hex }, sol: () => stepsE(r.steps) };
  }
  function exBuild() {
    const qs = [], add = (blk, pts, q) => { q.blk = blk; q.pts = pts; qs.push(q); };
    add('mida', 0.5, gUnits(true)); add('mida', 0.5, gUnits(true)); add('mida', 0.5, gTransfer(true));
    add('base', 1, exGenBaseA()); add('base', 1, exGenBaseB());
    add('op', 1, exGenOp());
    add('sm', 0.5, exGenSM(true)); add('sm', 0.5, exGenSM(false));
    const two = (lo, hi, pred) => { let a, b; do { a = lo + rnd(hi - lo + 1); b = lo + rnd(hi - lo + 1); } while (a === b || (pred && !pred(a, b))); return [a, b]; };
    two(20, 127).forEach(n => { add('cx', 0.25, exGenEnc('C1', n, 8)); add('cx', 0.25, exGenEnc('C1', -n, 8)); });
    two(40, 255, (a, b) => a > 127 || b > 127).forEach(n => { add('cx', 0.25, exGenEnc('C2', n, 9)); add('cx', 0.25, exGenEnc('C2', -n, 9)); });
    two(50, 511).forEach(n => { add('cx', 0.25, exGenEnc('CE', n, 10)); add('cx', 0.25, exGenEnc('CE', -n, 10)); });
    add('ieee', 0.75, exGenIeee(rnd(2) ? 0 : 2)); add('ieee', 0.75, exGenIeee(1));
    return qs;
  }
  return { PRK, GEN, prIsOK, EXBLK, exBuild, seen: PR.seen };
}
