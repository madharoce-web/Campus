/* ============================================================
   MOTOR DE CÀLCUL — Iniciació als Computadors
   Bases, operacions, enters amb signe, IEEE 754, unitats i multimèdia.
   Cada funció retorna el resultat i els passos en català i castellà.
   ============================================================ */
const CE = (() => {
  const DIG = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const SUBD = '₀₁₂₃₄₅₆₇₈₉', SUPD = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const cfg = { sep: '\u202f' }; // separador de milers: espai fi (l'original el fixava després)
  const sub = b => '₍' + String(b).split('').map(c => SUBD[+c]).join('') + '₎';
  const sup = n => String(n).split('').map(c => c === '-' ? '⁻' : SUPD[+c]).join('');
  const nb = (s, b) => s + sub(b);
  const B2 = (ca, es, en) => ({ ca, es: es == null ? ca : es, en: en == null ? (es == null ? ca : es) : en });
  const big = x => BigInt(x);
  const absB = x => x < 0n ? -x : x;
  const gcdB = (a, b) => { a = absB(a); b = absB(b); while (b) [a, b] = [b, a % b]; return a; };
  function grp(s) { const neg = s[0] === '-'; if (neg) s = s.slice(1); let out = ''; while (s.length > 3) { out = cfg.sep + s.slice(-3) + out; s = s.slice(0, -3); } return (neg ? '−' : '') + s + out; }
  const fint = n => grp(String(n));
  /* nombre JS → text amb coma decimal i separador de milers */
  function fnum(x, d) {
    if (d == null) d = 4;
    if (!isFinite(x)) return String(x);
    if (Math.abs(x - Math.round(x)) < 1e-9 && Math.abs(x) < 1e15) return fint(Math.round(x));
    let s = x.toFixed(d).replace(/0+$/, '').replace(/\.$/, '');
    let [i, f] = s.split('.');
    return grp(i) + (f ? ',' + f : '');
  }
  const approxEq = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  /* ---------- nombres en base b ---------- */
  function clean(s) { return String(s).trim().toUpperCase().replace(/\s+/g, '').replace(/\./g, ','); }
  function parse(s, b) {
    s = clean(s); let neg = false; if (s[0] === '-' || s[0] === '−') { neg = true; s = s.slice(1); }
    const [ip, fp = ''] = s.split(',');
    const chk = d => { const v = DIG.indexOf(d); if (v < 0 || v >= b) throw new Error('digit'); return v; };
    const iD = (ip || '0').split('').map(chk), fD = fp.split('').filter(x => x).map(chk);
    let I = 0n; iD.forEach(v => { I = I * big(b) + big(v); });
    let p = 0n, q = 1n; fD.forEach(v => { p = p * big(b) + big(v); q *= big(b); });
    return { neg, iD, fD, I, p, q, ip: ip || '0', fp };
  }
  /* fracció p/q (0 ≤ p < q) a decimal, amb detecció de període */
  function ratDec(p, q, maxd) {
    maxd = maxd || 8; const g = gcdB(p, q); p /= g; q /= g;
    let r = p, digs = '', seen = new Map(), per = -1;
    for (let k = 0; k < 60 && r; k++) { if (seen.has(r)) { per = seen.get(r); break; } seen.set(r, k); r *= 10n; digs += String(r / q); r %= q; }
    const exact = !r && per < 0;
    return { exact, digs, per, txt: exact ? digs : (per >= 0 ? digs.slice(0, per) + '(' + digs.slice(per) + ')' : digs.slice(0, maxd) + '…'), approx: digs.slice(0, maxd) + (exact && digs.length <= maxd ? '' : '…') };
  }
  function decTxt(I, p, q, mode) {   // valor decimal I + p/q
    if (!p) return fint(I);
    const r = ratDec(p, q, 6);
    if (r.exact) return fint(I) + ',' + r.digs;
    if (mode === 'per' && r.per >= 0 && r.digs.length < 14) return fint(I) + ',' + r.digs.slice(0, r.per) + '(' + r.digs.slice(r.per) + ')';
    let rr = p % q, dd = ''; for (let k = 0; k < 6; k++) { rr *= 10n; dd += String(rr / q); rr %= q; }
    return fint(I) + ',' + dd + '…';
  }
  function intToBase(n, b) {
    n = big(n); const rows = []; if (n === 0n) return { s: '0', rows: [{ n: 0n, q: 0n, r: 0 }] };
    let s = ''; while (n > 0n) { const q = n / big(b), r = Number(n % big(b)); rows.push({ n, q, r }); s = DIG[r] + s; n = q; }
    return { s, rows };
  }
  function fracToBase(p, q, b, maxd) {
    maxd = maxd || 12; const g = gcdB(p, q); p /= g; q /= g;
    const rows = [], seen = new Map(); let s = '', per = -1, r = p;
    for (let k = 0; k < maxd && r; k++) {
      if (seen.has(r)) { per = seen.get(r); break; }
      seen.set(r, k); const prod = r * big(b), d = Number(prod / q), nr = prod % q;
      rows.push({ x: [r, q], d, prod: [prod, q], nr: [nr, q] }); s += DIG[d]; r = nr;
    }
    if (r && per < 0 && seen.has(r)) per = seen.get(r);
    return { s, rows, exact: !r, per };
  }
  const fracShow = (pq, mode) => { const [p, q] = pq; const I = p / q, rest = p % q; return decTxt(I, rest, q, mode); };
  /* expansió TFN */
  function tfn(P, b) {
    const terms = [], vals = []; const n = P.iD.length;
    P.iD.forEach((v, i) => { const e = n - 1 - i; terms.push(DIG[v] + (v > 9 ? '(' + v + ')' : '') + '·' + b + sup(e)); vals.push(String(big(v) * big(b) ** big(e))); });
    P.fD.forEach((v, i) => { terms.push(DIG[v] + (v > 9 ? '(' + v + ')' : '') + '·' + b + sup(-(i + 1))); });
    return { terms, vals };
  }
  const isPow2 = b => b === 2 || b === 8 || b === 16;
  const LOG = { 2: 1, 8: 3, 16: 4 };
  function convert(s, from, to, maxd, force10) {
    maxd = maxd || 12;
    const P = parse(s, from), steps = [], src = nb((P.neg ? '−' : '') + P.ip + (P.fp ? ',' + P.fp : ''), from);
    if (from === to) return { res: src, steps };
    if (isPow2(from) && isPow2(to) && !force10) {
      /* agrupació de bits; a més, el camí llarg (TFN + divisions) com a alternativa */
      const alt = convert(s, from, to, maxd, true);
      const k1 = LOG[from], k2 = LOG[to];
      let ib = P.iD.map(v => v.toString(2).padStart(k1, '0')).join(''), fb = P.fD.map(v => v.toString(2).padStart(k1, '0')).join('');
      if (from !== 2) steps.push({ h: B2(`Cada dígit es converteix en ${k1} bits`, `Cada dígito se convierte en ${k1} bits`, `Each digit becomes ${k1} bits`), m: P.iD.map(v => DIG[v] + '→' + v.toString(2).padStart(k1, '0')).join('  ') + (P.fD.length ? '  ,  ' + P.fD.map(v => DIG[v] + '→' + v.toString(2).padStart(k1, '0')).join('  ') : ''), t: B2(src + ' = ' + nb(ib + (fb ? ',' + fb : ''), 2)) });
      ib = ib.replace(/^0+(?=.)/, ''); fb = fb.replace(/0+$/, '');
      if (to === 2) { const res = nb((P.neg ? '−' : '') + ib + (fb ? ',' + fb : ''), 2); steps.push({ h: B2('Resultat (traient zeros que no compten)', 'Resultado (quitando ceros que no cuentan)', 'Result (removing zeros that do not count)'), m: res, c: 'done' }); return { res, steps, alt }; }
      const padI = ib.padStart(Math.ceil(ib.length / k2) * k2, '0'), padF = fb.padEnd(Math.ceil(fb.length / k2) * k2, '0');
      const gI = padI.match(new RegExp('.{' + k2 + '}', 'g')), gF = padF ? padF.match(new RegExp('.{' + k2 + '}', 'g')) : [];
      steps.push({ h: B2(`Agrupem de ${k2} en ${k2} a partir de la coma`, `Agrupamos de ${k2} en ${k2} a partir de la coma`, `We group in ${k2}s from the point`), w: B2('A l\'esquerra de la coma s\'omple amb zeros per l\'esquerra; a la dreta, per la dreta.', 'A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.', 'To the left of the point pad with zeros on the left; to the right, on the right.'), m: gI.join(' ') + (gF.length ? ' , ' + gF.join(' ') : '') });
      const dI = gI.map(g => DIG[parseInt(g, 2)]).join('').replace(/^0+(?=.)/, ''), dF = gF.map(g => DIG[parseInt(g, 2)]).join('');
      steps.push({ h: B2('Cada grup és un dígit', 'Cada grupo es un dígito', 'Each group is a digit'), m: gI.map(g => g + '→' + DIG[parseInt(g, 2)]).join('  ') + (gF.length ? '  ,  ' + gF.map(g => g + '→' + DIG[parseInt(g, 2)]).join('  ') : '') });
      const res = nb((P.neg ? '−' : '') + dI + (dF ? ',' + dF : ''), to);
      steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: src + ' = ' + res, c: 'done' });
      return { res, steps, alt };
    }
    /* via base 10 */
    let I = P.I, fp = P.p, fq = P.q;
    if (from !== 10) {
      const T = tfn(P, from);
      const valTxt = decTxt(I, fp, fq, 'per');
      steps.push({ h: B2(`Pas 1 · De base ${from} a base 10 (TFN)`, `Paso 1 · De base ${from} a base 10 (TFN)`, `Step 1 · From base ${from} to base 10 (PNT)`), m: src + ' = ' + T.terms.join(' + '), w: P.iD.some(v => v > 9) || P.fD.some(v => v > 9) ? B2(`Les lletres valen: ${'ABCDEFGHIJ'.split('').slice(0, Math.max(...P.iD, ...P.fD, 0) - 9).map((c, i) => c + ' = ' + (10 + i)).join(', ')}.`, `Las letras valen: ${'ABCDEFGHIJ'.split('').slice(0, Math.max(...P.iD, ...P.fD, 0) - 9).map((c, i) => c + ' = ' + (10 + i)).join(', ')}.`, `The letters are worth: ${'ABCDEFGHIJ'.split('').slice(0, Math.max(...P.iD, ...P.fD, 0) - 9).map((c, i) => c + ' = ' + (10 + i)).join(', ')}.`) : null });
      const intSum = T.vals.length ? T.vals.map(v => fint(v)).join(' + ') + ' = ' + fint(I) : '0';
      steps.push({ m: B2(`Part entera: ${intSum}`, `Parte entera: ${intSum}`, `Integer part: ${intSum}`) });
      if (fp) {
        const fr = P.fD.map((v, i) => v + '/' + from + sup(i + 1)).join(' + ');
        steps.push({ m: B2(`Part fraccionària: ${P.fD.length > 1 ? fr + ' = ' : ''}${fint(fp)}/${fint(fq)} = 0,${decTxt(0n, fp, fq, 'per').split(',')[1]}`, `Parte fraccionaria: ${P.fD.length > 1 ? fr + ' = ' : ''}${fint(fp)}/${fint(fq)} = 0,${decTxt(0n, fp, fq, 'per').split(',')[1]}`, `Fractional part: ${P.fD.length > 1 ? fr + ' = ' : ''}${fint(fp)}/${fint(fq)} = 0,${decTxt(0n, fp, fq, 'per').split(',')[1]}`) });
      }
      steps.push({ m: src + ' = ' + nb((P.neg ? '−' : '') + valTxt, 10), c: to === 10 ? 'done' : '' });
      if (to === 10) return { res: nb((P.neg ? '−' : '') + valTxt, 10), steps, dec: valTxt };
    }
    /* de base 10 a base to */
    const IR = intToBase(I, to);
    const decStr = nb(fint(I), 10);
    steps.push({ h: B2(`${from !== 10 ? 'Pas 2 · ' : ''}Part entera: divisions successives per ${to}`, `${from !== 10 ? 'Paso 2 · ' : ''}Parte entera: divisiones sucesivas por ${to}`, `${from !== 10 ? 'Step 2 · ' : ''}Integer part: successive divisions by ${to}`), table: { head: ['n', 'n ÷ ' + to, B2('residu', 'resto', 'remainder')], rows: IR.rows.map(r => [fint(r.n), fint(r.q), DIG[r.r] + (r.r > 9 ? ' (' + r.r + ')' : '')]) }, w: B2(`Es llegeixen els residus de baix cap amunt: ${decStr} = ${nb(IR.s, to)}.`, `Se leen los restos de abajo arriba: ${decStr} = ${nb(IR.s, to)}.`, `The remainders are read from bottom to top: ${decStr} = ${nb(IR.s, to)}.`) });
    let fs = '', per = -1, exact = true;
    if (fp) {
      const FR = fracToBase(fp, fq, to, maxd); fs = FR.s; per = FR.per; exact = FR.exact;
      steps.push({ h: B2(`Part fraccionària: multiplicacions successives per ${to}`, `Parte fraccionaria: multiplicaciones sucesivas por ${to}`, `Fractional part: successive multiplications by ${to}`), t: B2(`A cada fila: multiplica la fracció per ${to}. La part entera del resultat${to > 2 ? ' (de 0 a ' + (to - 1) + ')' : ' (0 o 1)'} és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.`, `En cada fila: multiplica la fracción por ${to}. La parte entera del resultado${to > 2 ? ' (de 0 a ' + (to - 1) + ')' : ' (0 o 1)'} es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.`, `In each row: multiply the fraction by ${to}. The integer part of the result${to > 2 ? ' (from 0 to ' + (to - 1) + ')' : ' (0 or 1)'} is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again.`), table: { head: [B2('fracció', 'fracción', 'fraction'), '× ' + to, B2('dígit', 'dígito', 'digit')], rows: FR.rows.map(r => [fracShow(r.x), fracShow(r.prod), DIG[r.d]]) },
        w: FR.exact ? B2('La part fraccionària arriba a 0: el resultat és exacte. Els dígits es llegeixen de dalt cap avall.', 'La parte fraccionaria llega a 0: el resultado es exacto. Los dígitos se leen de arriba abajo.', 'The fractional part reaches 0: the result is exact. The digits are read from top to bottom.') : per >= 0 ? B2(`Torna a aparèixer una fracció ja vista: a partir d'aquí els dígits es repeteixen (període ${fs.slice(per)}).`, `Vuelve a aparecer una fracción ya vista: a partir de aquí los dígitos se repiten (periodo ${fs.slice(per)}).`, `A fraction already seen appears again: from here on the digits repeat (period ${fs.slice(per)}).`) : B2(`No arriba a 0: el resultat és infinit i el truquem a ${maxd} dígits.`, `No llega a 0: el resultado es infinito y lo truncamos a ${maxd} dígitos.`, `It never reaches 0: the result is infinite and we truncate it to ${maxd} digits.`) });
    }
    const out = (P.neg ? '−' : '') + IR.s + (fs ? ',' + (per >= 0 ? fs.slice(0, per) + '(' + fs.slice(per) + ')' : fs + (exact ? '' : '…')) : '');
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: src + ' = ' + nb(out, to), c: 'done', w: per >= 0 ? B2('Els dígits entre parèntesis es repeteixen indefinidament.', 'Los dígitos entre paréntesis se repiten indefinidamente.', 'The digits in parentheses repeat indefinitely.') : null });
    return { res: nb(out, to), steps, digits: out };
  }
  /* ---------- suma i resta en base b ---------- */
  function addSub(a, b2, base, op) {
    const A = parse(a, base), Bn = parse(b2, base); const va = A.I, vb = Bn.I;
    const n = Math.max(A.iD.length, Bn.iD.length) + 1;
    const da = A.iD.slice().reverse(), db = Bn.iD.slice().reverse();
    const rows = []; let carry = 0, res = [];
    if (op === '+') {
      for (let i = 0; i < n; i++) {
        const x = da[i] || 0, y = db[i] || 0; if (i >= da.length && i >= db.length && !carry) break;
        const s = x + y + carry, d = s % base, c = Math.floor(s / base);
        rows.push({ i, x, y, cin: carry, s, d, c }); res.unshift(d); carry = c;
      }
    } else {
      if (va < vb) throw new Error('neg');
      for (let i = 0; i < da.length; i++) {
        let x = da[i], y = (db[i] || 0) + carry; let borrow = 0;
        if (x < y) { x += base; borrow = 1; }
        const d = x - y; rows.push({ i, x: da[i], y: db[i] || 0, cin: carry, d, c: borrow, xb: x }); res.unshift(d); carry = borrow;
      }
    }
    let r = res.map(v => DIG[v]).join('').replace(/^0+(?=.)/, '');
    const steps = [];
    steps.push({ h: B2(op === '+' ? 'Suma columna a columna, de dreta a esquerra' : 'Resta columna a columna, de dreta a esquerra', op === '+' ? 'Suma columna a columna, de derecha a izquierda' : 'Resta columna a columna, de derecha a izquierda'),
      table: op === '+' ? { head: [B2('columna', 'columna', 'column'), B2('càlcul (en decimal)', 'cálculo (en decimal)', 'calculation (in decimal)'), B2('escric', 'escribo', 'I write'), B2('em porto', 'me llevo', 'I carry')], rows: rows.map(o => [String(o.i + 1), DIG[o.x] + ' + ' + DIG[o.y] + (o.cin ? ' + ' + o.cin : '') + ' = ' + o.s + (o.s >= base ? ' = ' + o.c + '·' + base + ' + ' + o.d : ''), DIG[o.d], o.c ? String(o.c) : '—']) }
        : { head: [B2('columna', 'columna', 'column'), B2('càlcul (en decimal)', 'cálculo (en decimal)', 'calculation (in decimal)'), B2('escric', 'escribo', 'I write'), B2('préstec', 'préstamo', 'borrow')], rows: rows.map(o => [String(o.i + 1), (o.c ? '(' + DIG[o.x] + ' + ' + base + ')' : DIG[o.x]) + ' − ' + DIG[o.y] + (o.cin ? ' − 1' : '') + ' = ' + o.d, DIG[o.d], o.c ? '1' : '—']) },
      w: op === '+' ? B2(`Quan la suma d'una columna arriba a ${base}, escrivim el residu i ens en portem 1.`, `Cuando la suma de una columna llega a ${base}, escribimos el resto y nos llevamos 1.`, `When the sum of a column reaches ${base}, we write the remainder and carry 1.`) : B2(`Quan el dígit de dalt és més petit, en demanem ${base} a la columna següent (préstec) i allà restem 1 de més.`, `Cuando el dígito de arriba es menor, pedimos ${base} a la columna siguiente (préstamo) y allí restamos 1 de más.`, `When the top digit is smaller, we borrow ${base} from the next column (borrow) and subtract 1 more there.`) });
    const vr = op === '+' ? va + vb : va - vb;
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: nb(A.ip, base) + ' ' + (op === '+' ? '+' : '−') + ' ' + nb(Bn.ip, base) + ' = ' + nb(r, base), c: 'done', w: B2(`Comprovació en decimal: ${fint(va)} ${op === '+' ? '+' : '−'} ${fint(vb)} = ${fint(vr)} = ${nb(r, base)}.`, `Comprobación en decimal: ${fint(va)} ${op === '+' ? '+' : '−'} ${fint(vb)} = ${fint(vr)} = ${nb(r, base)}.`, `Check in decimal: ${fint(va)} ${op === '+' ? '+' : '−'} ${fint(vb)} = ${fint(vr)} = ${nb(r, base)}.`) });
    return { res: r, steps, rows, va, vb, vr };
  }
  /* ---------- enters amb signe ---------- */
  const binPad = (n, w) => n.toString(2).padStart(w, '0');
  const inv = s => s.split('').map(c => c === '0' ? '1' : '0').join('');
  function rangeOf(sys, N) {
    const h = 2 ** (N - 1);
    if (sys === 'SM' || sys === 'C1') return [-(h - 1), h - 1];
    return [-h, h - 1];
  }
  function encode(sys, n, N) {
    const [lo, hi] = rangeOf(sys, N), steps = [], a = Math.abs(n);
    if (n < lo || n > hi) return { err: true, steps: [{ h: B2('Fora de rang', 'Fuera de rango', 'Out of range'), t: B2(`Amb ${N} bits, ${sys} només representa de ${fint(lo)} a ${fint(hi)}.`, `Con ${N} bits, ${sys} solo representa de ${fint(lo)} a ${fint(hi)}.`, `With ${N} bits, ${sys} only represents from ${fint(lo)} to ${fint(hi)}.`), c: 'bad' }] };
    const IR = intToBase(a, 2);
    if (sys === 'CE') {
      const bias = 2 ** (N - 1), v = n + bias, r = binPad(v, N);
      steps.push({ h: B2(`Excés (biaix) amb ${N} bits`, `Exceso (sesgo) con ${N} bits`, `Excess (bias) with ${N} bits`), m: 'E = 2' + sup(N - 1) + ' = ' + fint(bias) });
      steps.push({ h: B2('Sumem l\'excés al valor', 'Sumamos el exceso al valor', 'We add the excess to the value'), m: (n < 0 ? '−' + fint(a) : fint(n)) + ' + ' + fint(bias) + ' = ' + fint(v) });
      steps.push({ h: B2(`Passem a binari amb ${N} bits`, `Pasamos a binario con ${N} bits`, `Convert to binary with ${N} bits`), m: nb(fint(v), 10) + ' = ' + nb(v.toString(2), 2) + (v.toString(2).length < N ? ' → ' + r : '') });
      steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: (n < 0 ? '−' : '+') + fint(a) + ' = ' + r + '_CE', c: 'done' });
      return { bits: r, steps };
    }
    steps.push({ h: B2('Valor absolut en binari', 'Valor absoluto en binario', 'Absolute value in binary'), m: nb(fint(a), 10) + ' = ' + nb(IR.s, 2), w: B2('Divisions successives per 2 (residus de baix cap amunt).', 'Divisiones sucesivas por 2 (restos de abajo arriba).', 'Successive divisions by 2 (remainders from bottom to top).') });
    if (sys === 'SM') {
      const mag = binPad(a, N - 1), r = (n < 0 ? '1' : '0') + mag;
      steps.push({ h: B2(`Magnitud amb ${N - 1} bits`, `Magnitud con ${N - 1} bits`, `Magnitude with ${N - 1} bits`), m: mag, w: B2('El primer bit queda reservat per al signe.', 'El primer bit queda reservado para el signo.', 'The first bit is reserved for the sign.') });
      steps.push({ h: B2('Bit de signe', 'Bit de signo', 'Sign bit'), m: n < 0 ? B2('1 (negatiu)', '1 (negativo)', '1 (negative)') : B2('0 (positiu)', '0 (positivo)', '0 (positive)') });
      steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: (n < 0 ? '−' : '+') + fint(a) + ' = ' + r[0] + ' ' + r.slice(1) + '  →  ' + r + '_SM', c: 'done' });
      return { bits: r, steps };
    }
    const pos = binPad(a, N);
    steps.push({ h: B2(`Positiu amb ${N} bits`, `Positivo con ${N} bits`, `Positive with ${N} bits`), m: '+' + fint(a) + ' = ' + pos, w: B2(`Els positius s'escriuen igual en ${sys}: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).`, `Los positivos se escriben igual en ${sys}: binario rellenado con ceros por la izquierda (el primer bit queda a 0).`, `Positives are written the same way in ${sys}: binary padded with zeros on the left (the first bit stays 0).`) });
    if (n >= 0) { steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: '+' + fint(a) + ' = ' + pos + '_' + sys, c: 'done' }); return { bits: pos, steps }; }
    const iv = inv(pos);
    steps.push({ h: B2('Invertim tots els bits', 'Invertimos todos los bits', 'We invert all the bits'), m: pos + ' → ' + iv });
    if (sys === 'C1') { steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: '−' + fint(a) + ' = ' + iv + '_C1', c: 'done' }); return { bits: iv, steps }; }
    const r = binPad((parseInt(iv, 2) + 1) % (2 ** N), N);
    steps.push({ h: B2('Sumem 1', 'Sumamos 1', 'We add 1'), m: iv + ' + 1 = ' + r });
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: '−' + fint(a) + ' = ' + r + '_C2', c: 'done', w: B2(`Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → ${r}.`, `Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → ${r}.`, `Quick check: copy from the right up to the first 1 included and invert the rest → ${r}.`) });
    return { bits: r, steps };
  }
  function decode(sys, bits) {
    bits = bits.replace(/\s+/g, ''); const N = bits.length, steps = [], neg = bits[0] === '1';
    if (sys === 'CE') {
      const bias = 2 ** (N - 1), u = parseInt(bits, 2), v = u - bias;
      steps.push({ h: B2('Llegim els bits com a natural', 'Leemos los bits como natural', 'We read the bits as a natural number'), m: nb(bits, 2) + ' = ' + fint(u) });
      steps.push({ h: B2(`Excés amb ${N} bits`, `Exceso con ${N} bits`, `Excess with ${N} bits`), m: 'E = 2' + sup(N - 1) + ' = ' + fint(bias) });
      steps.push({ h: B2('Restem l\'excés', 'Restamos el exceso', 'We subtract the excess'), m: fint(u) + ' − ' + fint(bias) + ' = ' + fint(v), c: 'done' });
      return { v, steps };
    }
    if (sys === 'SM') {
      const m = parseInt(bits.slice(1), 2), v = neg ? -m : m;
      steps.push({ h: B2('Bit de signe', 'Bit de signo', 'Sign bit'), m: neg ? B2(`${bits[0]} → negatiu`, `${bits[0]} → negativo`, `${bits[0]} → negative`) : B2(`${bits[0]} → positiu`, `${bits[0]} → positivo`, `${bits[0]} → positive`) });
      steps.push({ h: B2('Magnitud', 'Magnitud', 'Magnitude'), m: nb(bits.slice(1), 2) + ' = ' + fint(m) });
      steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: bits + '_SM = ' + fint(v), c: 'done' });
      return { v, steps };
    }
    if (!neg) { const v = parseInt(bits, 2); steps.push({ h: B2('Primer bit 0: positiu', 'Primer bit 0: positivo', 'First bit 0: positive'), m: nb(bits, 2) + ' = ' + fint(v), w: B2('Un positiu es llegeix directament en binari.', 'Un positivo se lee directamente en binario.', 'A positive number is read directly in binary.') }); steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: bits + '_' + sys + ' = +' + fint(v), c: 'done' }); return { v, steps }; }
    steps.push({ h: B2('Primer bit 1: negatiu', 'Primer bit 1: negativo', 'First bit 1: negative'), t: B2(sys === 'C1' ? 'Desfem el procés: invertim tots els bits per trobar el valor absolut.' : 'Desfem el procés: invertim tots els bits i sumem 1 (o restem 1 i invertim).', sys === 'C1' ? 'Deshacemos el proceso: invertimos todos los bits para encontrar el valor absoluto.' : 'Deshacemos el proceso: invertimos todos los bits y sumamos 1 (o restamos 1 e invertimos).') });
    const iv = inv(bits);
    if (sys === 'C1') { const m = parseInt(iv, 2); steps.push({ m: bits + ' → ' + iv + ' = ' + fint(m) }); steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: bits + '_C1 = −' + fint(m), c: 'done' }); return { v: -m, steps }; }
    const m = parseInt(iv, 2) + 1; steps.push({ m: bits + ' → ' + iv + ' ; ' + iv + ' + 1 = ' + binPad(m, N) + ' = ' + fint(m) });
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: bits + '_C2 = −' + fint(m), c: 'done', w: B2(`També es pot llegir directament: el primer bit val −2${sup(N - 1)} i la resta, positiu.`, `También se puede leer directamente: el primer bit vale −2${sup(N - 1)} y el resto, positivo.`, `It can also be read directly: the first bit is worth −2${sup(N - 1)} and the rest, positive.`) });
    return { v: -m, steps };
  }
  /* ---------- IEEE 754 simple precisió ---------- */
  function ieeeEncode(xs) {
    const P = parse(String(xs).replace(/^\+/, ''), 10), steps = [], S = P.neg ? 1 : 0;
    const val = Number(P.I) + Number(P.p) / Number(P.q);
    if (val === 0) return { bits: (S ? '1' : '0') + '0'.repeat(31), steps: [{ h: B2('Cas especial', 'Caso especial', 'Special case'), t: B2('El zero té exponent i fracció tot a 0.', 'El cero tiene exponente y fracción todo a 0.', 'Zero has exponent and fraction all 0.'), c: 'done' }] };
    const IR = intToBase(P.I, 2), FR = fracToBase(P.p, P.q, 2, 40);
    const ib = P.I ? IR.s : '0'; let fb = FR.s;
    if (FR.per >= 0) { const pd = fb.slice(FR.per); while (fb.length < 64) fb += pd; }
    steps.push({ h: B2('Signe', 'Signo', 'Sign'), m: S ? B2('S = 1  (negatiu)', 'S = 1  (negativo)', 'S = 1  (negative)') : B2('S = 0  (positiu)', 'S = 0  (positivo)', 'S = 0  (positive)') });
    steps.push({ h: B2('Valor absolut en binari', 'Valor absoluto en binario', 'Absolute value in binary'), m: nb(P.ip + (P.fp ? ',' + P.fp : ''), 10) + ' = ' + nb(ib + (fb ? ',' + (FR.exact ? fb : fb.slice(0, 30) + '…') : ''), 2), w: B2(`Part entera per divisions, part fraccionària per multiplicacions per 2${fb ? ' (' + FR.rows.slice(0, 6).map(r => fracShow(r.x) + '·2 = ' + fracShow(r.prod)).join('; ') + (FR.rows.length > 6 ? '; …' : '') + ')' : ''}.`, `Parte entera por divisiones, parte fraccionaria por multiplicaciones por 2${fb ? ' (' + FR.rows.slice(0, 6).map(r => fracShow(r.x) + '·2 = ' + fracShow(r.prod)).join('; ') + (FR.rows.length > 6 ? '; …' : '') + ')' : ''}.`, `Integer part by divisions, fractional part by multiplications by 2${fb ? ' (' + FR.rows.slice(0, 6).map(r => fracShow(r.x) + '·2 = ' + fracShow(r.prod)).join('; ') + (FR.rows.length > 6 ? '; …' : '') + ')' : ''}.`) });
    let e, mant;
    if (P.I > 0n) { e = ib.length - 1; mant = ib.slice(1) + fb; }
    else { const k = fb.indexOf('1'); e = -(k + 1); mant = fb.slice(k + 1); }
    steps.push({ h: B2('Normalitzem: 1,F · 2^e', 'Normalizamos: 1,F · 2^e', 'We normalise: 1.F · 2^e'), m: nb(ib + (fb ? ',' + (FR.exact ? fb : fb.slice(0, 30) + '…') : ''), 2) + ' = ' + nb('1,' + ((FR.exact ? mant.replace(/0+$/, '') : mant.slice(0, 30) + '…') || '0'), 2) + ' · 2' + sup(e), w: B2(e >= 0 ? 'La coma es mou ' + e + ' posicions a l\'esquerra, per tant l\'exponent és +' + e + '.' : 'La coma es mou ' + (-e) + ' posicions a la dreta, per tant l\'exponent és ' + e + '.', e >= 0 ? 'La coma se mueve ' + e + ' posiciones a la izquierda, por tanto el exponente es +' + e + '.' : 'La coma se mueve ' + (-e) + ' posiciones a la derecha, por tanto el exponente es ' + e + '.') });
    const E = e + 127;
    if (E <= 0 || E >= 255) return { err: true, steps: steps.concat([{ h: B2('Fora del rang normalitzat', 'Fuera del rango normalizado', 'Outside the normalised range'), t: B2('L\'exponent no cap en 8 bits en excés 127.', 'El exponente no cabe en 8 bits en exceso 127.', 'The exponent does not fit in 8 bits in excess 127.'), c: 'bad' }]) };
    const Eb = binPad(E, 8);
    steps.push({ h: B2('Exponent en excés 127', 'Exponente en exceso 127', 'Exponent in excess 127'), m: 'E = ' + String(e).replace('-', '−') + ' + 127 = ' + E + ' = ' + nb(Eb, 2) });
    const F = (mant + '0'.repeat(23)).slice(0, 23), lost = mant.length > 23 && /1/.test(mant.slice(23));
    steps.push({ h: B2('Fracció (23 bits)', 'Fracción (23 bits)', 'Fraction (23 bits)'), m: 'F = ' + F, w: B2(`Són els bits de després de la coma, sense l'1 implícit, omplerts amb zeros per la dreta${lost || !FR.exact ? ' i truncats a 23 bits (el nombre no és exacte en binari)' : ''}.`, `Son los bits de después de la coma, sin el 1 implícito, rellenados con ceros por la derecha${lost || !FR.exact ? ' y truncados a 23 bits (el número no es exacto en binario)' : ''}.`, `They are the bits after the point, without the implicit 1, padded with zeros on the right${lost || !FR.exact ? ' and truncated to 23 bits (the number is not exact in binary)' : ''}.`) });
    const all = S + Eb + F, hex = parseInt(all, 2).toString(16).toUpperCase().padStart(8, '0');
    steps.push({ h: B2('Resultat (32 bits)', 'Resultado (32 bits)', 'Result (32 bits)'), m: S + ' ' + Eb + ' ' + F, c: 'done', w: B2(`En hexadecimal: ${nb(hex, 16)}.`, `En hexadecimal: ${nb(hex, 16)}.`, `In hexadecimal: ${nb(hex, 16)}.`) });
    if (lost || !FR.exact) {
      const dv = new DataView(new ArrayBuffer(4)); dv.setFloat32(0, S ? -val : val); const rh = dv.getUint32(0).toString(16).toUpperCase().padStart(8, '0');
      if (rh !== hex) steps.push({ h: B2('Nota: truncar o arrodonir', 'Nota: truncar o redondear', 'Note: truncating or rounding'), t: B2(`Aquí s'ha truncat als 23 bits, que és el que es fa a mà. L'estàndard IEEE 754, per defecte, arrodoneix al valor més proper: el bit 24 i següents valen més de la meitat, així que la fracció puja 1 i el resultat real és ${nb(rh, 16)}. Si l'enunciat no diu res, indica quin criteri fas servir.`, `Aquí se ha truncado a los 23 bits, que es lo que se hace a mano. El estándar IEEE 754, por defecto, redondea al valor más cercano: el bit 24 y siguientes valen más de la mitad, así que la fracción sube 1 y el resultado real es ${nb(rh, 16)}. Si el enunciado no dice nada, indica qué criterio usas.`, `Here it has been truncated to 23 bits, which is what is done by hand. The IEEE 754 standard rounds to the nearest value by default: bit 24 and the following ones are worth more than half, so the fraction goes up by 1 and the actual result is ${nb(rh, 16)}. If the statement says nothing, state which criterion you use.`) });
    }
    return { bits: all, S, E: Eb, F, hex, steps, e };
  }
  function ieeeDecode(bits) {
    bits = bits.replace(/\s+/g, ''); const S = +bits[0], Eb = bits.slice(1, 9), F = bits.slice(9), E = parseInt(Eb, 2), steps = [];
    steps.push({ h: B2('Separem els camps', 'Separamos los campos', 'We separate the fields'), m: 'S = ' + S + '   E = ' + Eb + '   F = ' + F });
    if (E === 255) { const r = /1/.test(F) ? 'NaN' : (S ? '−∞' : '+∞'); steps.push({ h: B2('Cas especial', 'Caso especial', 'Special case'), m: 'E = 11111111 → ' + r, c: 'done' }); return { v: r, steps }; }
    if (E === 0) { if (!/1/.test(F)) { steps.push({ h: B2('Cas especial', 'Caso especial', 'Special case'), m: (S ? '−' : '+') + '0', c: 'done' }); return { v: 0, steps }; } const fv = parseInt(F, 2) / 2 ** 23, v = (S ? -1 : 1) * fv * 2 ** -126; steps.push({ h: B2('Desnormalitzat', 'Desnormalizado', 'Denormalised'), m: '(−1)' + sup(S) + ' · 0,F · 2' + sup(-126) + ' ≈ ' + v.toExponential(4).replace('.', ','), c: 'done' }); return { v, steps }; }
    const e = E - 127, f = F.replace(/0+$/, '');
    steps.push({ h: B2('Exponent real', 'Exponente real', 'Actual exponent'), m: nb(Eb, 2) + ' = ' + E + ' ;  e = ' + E + ' − 127 = ' + e });
    steps.push({ h: B2('Mantissa amb l\'1 implícit', 'Mantisa con el 1 implícito', 'Mantissa with the implicit 1'), m: nb('1,' + (f || '0'), 2) + ' · 2' + sup(e) });
    let ip, fp;
    const mant = '1' + f;
    if (e >= 0) { ip = mant.slice(0, e + 1).padEnd(e + 1, '0'); fp = mant.slice(e + 1); } else { ip = '0'; fp = '0'.repeat(-e - 1) + mant; }
    const fpT = fp.replace(/0+$/, '');
    steps.push({ h: B2(`Desplacem la coma ${Math.abs(e)} posicions`, `Desplazamos la coma ${Math.abs(e)} posiciones`, `We move the point ${Math.abs(e)} places`), m: nb(ip + (fpT ? ',' + fpT : ''), 2) });
    let v = parseInt(ip, 2); fpT.split('').forEach((c, i) => { if (c === '1') v += 2 ** -(i + 1); });
    const parts = [ip ? parseInt(ip, 2) : 0].concat(fpT.split('').map((c, i) => c === '1' ? '2' + sup(-(i + 1)) : null).filter(Boolean));
    steps.push({ h: B2('A decimal', 'A decimal', 'To decimal'), m: nb(ip + (fpT ? ',' + fpT : ''), 2) + ' = ' + parts.join(' + ') + ' = ' + fnum(v, 10) });
    const vs = (S ? -1 : 1) * v;
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: (S ? '−' : '+') + fnum(v, 10), c: 'done' });
    return { v: vs, steps };
  }
  /* ---------- unitats ---------- */
  const PF = { '': 1, K: 1e3, M: 1e6, G: 1e9, T: 1e12, Ki: 2 ** 10, Mi: 2 ** 20, Gi: 2 ** 30, Ti: 2 ** 40 };
  const PFT = { '': '1', K: '10³', M: '10⁶', G: '10⁹', T: '10¹²', Ki: '2¹⁰', Mi: '2²⁰', Gi: '2³⁰', Ti: '2⁴⁰' };
  function unit(u) { const m = /^(Ki|Mi|Gi|Ti|K|k|M|G|T|)(b|B)$/.exec(u); if (!m) throw new Error('unit ' + u); const p = m[1] === 'k' ? 'K' : m[1]; return { p, t: m[2], f: PF[p], name: u }; }
  function convUnits(x, from, to) {
    const A = unit(from), Bu = unit(to), steps = [];
    const base = A.t, baseName = base === 'b' ? 'b' : 'B';
    let v = x * A.f; const L = s => s;
    if (A.p) steps.push({ h: B2(`Passem a ${base === 'b' ? 'bits' : 'bytes'}`, `Pasamos a ${base === 'b' ? 'bits' : 'bytes'}`, `Convert to ${base === 'b' ? 'bits' : 'bytes'}`), m: fnum(x, 6) + ' ' + from + ' = ' + fnum(x, 6) + ' · ' + PFT[A.p] + ' ' + baseName + ' = ' + fnum(v, 6) + ' ' + baseName, w: B2(A.p.endsWith('i') ? 'Prefix binari (IEC): potències de 2.' : 'Prefix decimal (SI): potències de 10.', A.p.endsWith('i') ? 'Prefijo binario (IEC): potencias de 2.' : 'Prefijo decimal (SI): potencias de 10.') });
    let cur = base;
    if (A.t !== Bu.t) {
      const nv = A.t === 'b' ? v / 8 : v * 8;
      steps.push({ h: B2(A.t === 'b' ? 'De bits a bytes (÷ 8)' : 'De bytes a bits (× 8)', A.t === 'b' ? 'De bits a bytes (÷ 8)' : 'De bytes a bits (× 8)'), m: fnum(v, 6) + ' ' + A.t + (A.t === 'b' ? ' ÷ 8 = ' : ' · 8 = ') + fnum(nv, 6) + ' ' + Bu.t }); v = nv; cur = Bu.t;
    }
    let r = v / Bu.f;
    const ex6 = approxEq(r, Math.round(r * 1e6) / 1e6);
    if (Bu.p) {
      const bin = Bu.p.endsWith('i'), K = bin ? 1024 : 1000, ord = bin ? ['Ki', 'Mi', 'Gi', 'Ti'] : ['K', 'M', 'G', 'T'], n = ord.indexOf(Bu.p) + 1;
      let table = null;
      if (n >= 2) {
        const rows = []; let cv = v, cu = cur;
        for (let k = 0; k < n; k++) { const nv = cv / K, d = k === n - 1 ? 4 : 2, eq = approxEq(nv, Math.round(nv * 10 ** d) / 10 ** d) ? '= ' : '≈ '; rows.push([String(k + 1), fnum(cv, 6) + ' ' + cu + ' ÷ ' + K, eq + fnum(nv, d) + ' ' + ord[k] + cur]); cv = nv; cu = ord[k] + cur; }
        table = { head: [B2('Divisió', 'División', 'Division'), B2('Compte', 'Cuenta', 'Calculation'), B2('Resultat', 'Resultado', 'Result')], rows };
      }
      const lt1 = r < 1, nCa = ['', 'una', 'dues', 'tres', 'quatre'][n], nEs = ['', 'una', 'dos', 'tres', 'cuatro'][n];
      steps.push({ h: B2(`Passem a ${to}`, `Pasamos a ${to}`, `Convert to ${to}`), m: fnum(v, 6) + ' ' + cur + ' ÷ ' + PFT[Bu.p] + (ex6 ? ' = ' : ' ≈ ') + fnum(r, 6) + ' ' + to,
        t: B2(`Per què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 ${to}?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.${lt1 ? ' Surt menys d\'1 perquè no n\'arribes a omplir ni una.' : ''}${table ? ' Dividir per ' + PFT[Bu.p] + ' és el mateix que dividir per ' + K + ' ' + nCa + ' vegades, una per prefix:' : ''}`,
          `Por qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 ${to}?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.${lt1 ? ' Sale menos de 1 porque no llegas a llenar ni una.' : ''}${table ? ' Dividir por ' + PFT[Bu.p] + ' es lo mismo que dividir por ' + K + ' ' + nEs + ' veces, una por prefijo:' : ''}`, `Why we divide: you are moving to a larger unit, and the question is “how many times does 1 ${to} fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h.${lt1 ? ' It comes out below 1 because you do not even fill one.' : ''}${table ? ' Dividing by ' + PFT[Bu.p] + ' is the same as dividing by ' + K + ' ' + ['', 'once', 'twice', 'three times', 'four times'][n] + ', once per prefix:' : ''}`),
        table, w: B2(`1 ${to} = ${PFT[Bu.p]} ${cur} = ${fint(Bu.f)} ${cur}.`, `1 ${to} = ${PFT[Bu.p]} ${cur} = ${fint(Bu.f)} ${cur}.`, `1 ${to} = ${PFT[Bu.p]} ${cur} = ${fint(Bu.f)} ${cur}.`) });
    }
    steps.push({ h: B2('Resultat', 'Resultado', 'Result'), m: fnum(x, 6) + ' ' + from + (ex6 ? ' = ' : ' ≈ ') + fnum(r, ex6 ? 6 : 4) + ' ' + to, c: 'done', w: ex6 ? null : B2('El mateix número del pas anterior, arrodonit a 4 decimals.', 'El mismo número del paso anterior, redondeado a 4 decimales.', 'The same number as in the previous step, rounded to 4 decimals.') });
    return { r, steps };
  }
  function transfer(size, su, speed, vu) {   // vu: unitat de la velocitat sense /s (p. ex. 'Mb')
    const steps = [], S = unit(su), V = unit(vu);
    const bits = size * S.f * (S.t === 'B' ? 8 : 1), bps = speed * V.f * (V.t === 'B' ? 8 : 1);
    steps.push({ h: B2('Mida en bits', 'Tamaño en bits', 'Size in bits'), m: fnum(size, 6) + ' ' + su + ' = ' + fnum(size, 6) + (S.p ? ' · ' + PFT[S.p] : '') + (S.t === 'B' ? ' · 8' : '') + ' b = ' + fnum(bits, 4) + ' b' });
    steps.push({ h: B2('Velocitat en b/s', 'Velocidad en b/s', 'Rate in b/s'), m: fnum(speed, 6) + ' ' + vu + '/s = ' + fnum(speed, 6) + (V.p ? ' · ' + PFT[V.p] : '') + (V.t === 'B' ? ' · 8' : '') + ' b/s = ' + fnum(bps, 4) + ' b/s', w: B2('La velocitat de transferència sempre fa servir prefixos decimals.', 'La velocidad de transferencia siempre usa prefijos decimales.', 'Transfer rates always use decimal prefixes.') });
    const t = bits / bps;
    steps.push({ h: B2('Temps = mida ÷ velocitat', 'Tiempo = tamaño ÷ velocidad', 'Time = size ÷ rate'), m: 't = ' + fnum(bits, 4) + ' b ÷ ' + fnum(bps, 4) + ' b/s = ' + fnum(t, 4) + ' s' + (t >= 60 ? ' ≈ ' + fnum(t / 60, 3) + ' min' : ''), c: 'done' });
    return { t, steps };
  }
  /* ---------- multimèdia ---------- */
  function toUnitSteps(bits, to) {
    const B = bits / 8, U = unit(to), steps = [];
    steps.push({ h: B2('A bytes', 'A bytes', 'To bytes'), m: fnum(bits, 4) + ' b ÷ 8 = ' + fnum(B, 4) + ' B' });
    let r = U.t === 'b' ? bits / U.f : B / U.f;
    const ex6 = approxEq(r, Math.round(r * 1e6) / 1e6);
    if (U.p) steps.push({ h: B2(`A ${to}`, `A ${to}`, `To ${to}`), m: fnum(U.t === 'b' ? bits : B, 4) + ' ' + U.t + ' ÷ ' + PFT[U.p] + ' ' + (ex6 ? '= ' : '≈ ') + fnum(r, ex6 ? 6 : 4) + ' ' + to, c: 'done' });
    return { r, steps };
  }
  function image(w, h, bpp, to) {
    const px = w * h, bits = px * bpp, steps = [];
    steps.push({ h: B2('Píxels totals', 'Píxeles totales', 'Total pixels'), m: fint(w) + ' × ' + fint(h) + ' = ' + fint(px) + ' px' });
    steps.push({ h: B2('Bits', 'Bits', 'Bits'), m: fint(px) + ' × ' + bpp + ' b/px = ' + fint(bits) + ' b' });
    const T = toUnitSteps(bits, to); return { r: T.r, bits, steps: steps.concat(T.steps) };
  }
  function audio(sec, fs, b, ch, to) {
    const bits = sec * fs * b * ch, steps = [];
    steps.push({ h: B2('Mida = d × f × b × c', 'Tamaño = d × f × b × c', 'Size = d × f × b × c'), m: fint(sec) + ' s × ' + fint(fs) + ' Hz × ' + b + ' b × ' + ch + ' = ' + fint(bits) + ' b' });
    const T = toUnitSteps(bits, to); return { r: T.r, bits, steps: steps.concat(T.steps), bitrate: fs * b * ch };
  }
  function video(w, h, bpp, fps, sec, to) {
    const frame = w * h * bpp, bits = frame * fps * sec, steps = [];
    steps.push({ h: B2('Mida d\'un fotograma', 'Tamaño de un fotograma', 'Size of one frame'), m: fint(w) + ' × ' + fint(h) + ' × ' + bpp + ' = ' + fint(frame) + ' b' });
    steps.push({ h: B2('Fotogrames totals', 'Fotogramas totales', 'Total frames'), m: fps + ' FPS × ' + fint(sec) + ' s = ' + fint(fps * sec) });
    steps.push({ h: B2('Bits totals', 'Bits totales', 'Total bits'), m: fint(frame) + ' × ' + fint(fps * sec) + ' = ' + fint(bits) + ' b' });
    const T = toUnitSteps(bits, to); return { r: T.r, bits, steps: steps.concat(T.steps) };
  }
  return { DIG, cfg, sub, sup, nb, fint, fnum, parse, ratDec, decTxt, intToBase, fracToBase, convert, addSub, encode, decode, rangeOf, binPad, inv, ieeeEncode, ieeeDecode, unit, convUnits, transfer, image, audio, video, PF, PFT };
})();
export default CE;
