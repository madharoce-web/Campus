import { useLayoutEffect, useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import CE from '../engine/ce.js';
import { range } from '../engine/z.js';
import { getContent } from '../content/index.js';
import { BASES } from '../content/consts.js';
import { useSlot } from '../store.js';
import { Field, Html, LabShell } from '../ui.jsx';

/** Desplegable de bases (2…16). */
function BaseSel({ id, value, onChange }) {
  const { L } = useLang();
  return (
    <select id={id} value={value} onChange={(e) => onChange(+e.target.value)}>
      {BASES.map((b) => <option key={b} value={b}>{L('base ', 'base ', 'base ') + b}</option>)}
    </select>
  );
}
const supE = (n) => <sup>{String(n).replace('-', '−')}</sup>;

/* ---------- el valor depèn de la posició + comptador ---------- */
export function Tfn({ id }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, { x: '2A,4', b: 11, ob: 3, od: [0, 0, 0, 0] });
  let body;
  try {
    const P = CE.parse(s.x, s.b), n = P.iD.length;
    const rows = P.iD.map((v, i) => { const e = n - 1 - i; return [CE.DIG[v], <>{s.b}{supE(e)}</>, CE.fint(String(BigInt(s.b) ** BigInt(e))), CE.fint(String(BigInt(v) * BigInt(s.b) ** BigInt(e)))]; })
      .concat(P.fD.map((v, i) => { const e = -(i + 1); return [CE.DIG[v], <>{s.b}{supE(e)}</>, '1/' + CE.fint(s.b ** (i + 1)), v + '/' + CE.fint(s.b ** (i + 1)) + ' ≈ ' + CE.fnum(v / s.b ** (i + 1), 6)]; }));
    body = (
      <>
        <div className="tbl"><table className="etab">
          <thead><tr><th>{L('dígit', 'dígito', 'digit')}</th><th>{L('posició', 'posición', 'position')}</th><th>{L('pes', 'peso', 'weight')}</th><th>{L('aportació', 'aportación', 'contribution')}</th></tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
        </table></div>
        <div className="explain">
          <span>{CE.nb(s.x.toUpperCase(), s.b)} = <b>{CE.decTxt(P.I, P.p, P.q, 'per')}</b>{L(' en base 10. Els parèntesis indiquen el període.', ' en base 10. Los paréntesis indican el periodo.', ' in base 10. The parentheses mark the period.')}</span>
          <span>{L(`A l'esquerra de la coma les potències són 0, 1, 2… i a la dreta, −1, −2… Cada posició val ${s.b} vegades la de la seva dreta.`, `A la izquierda de la coma las potencias son 0, 1, 2… y a la derecha, −1, −2… Cada posición vale ${s.b} veces la de su derecha.`, `To the left of the point the powers are 0, 1, 2… and to the right, −1, −2… Each position is worth ${s.b} times the one on its right.`)}</span>
        </div>
      </>
    );
  } catch {
    body = <Html html={C.fb('warn', L('Aquest nombre té dígits que no existeixen en base ', 'Este número tiene dígitos que no existen en base ', 'This number has digits that do not exist in base ') + s.b + L(' (només de 0 a ', ' (solo de 0 a ', ' (only from 0 to ') + CE.DIG[s.b - 1] + ').')} />;
  }
  const ob = s.ob, od = s.od;
  const inc = () => { const d = od.slice(); for (let i = 3; i >= 0; i--) { d[i]++; if (d[i] < ob) break; d[i] = 0; } set({ od: d }); };
  return (
    <LabShell title={L('Valor posicional (TFN) i comptador en qualsevol base', 'Valor posicional (TFN) y contador en cualquier base', 'Place value (PNT) and a counter in any base')}>
      <div className="ctrl">
        <Field sync={s} id={id + '-x'} value={s.x} aria-label={L('nombre', 'número', 'number')} onCommit={(t) => { set({ x: t.trim() || '0' }); return true; }} />
        <BaseSel id={id + '-b'} value={s.b} onChange={(b) => set({ b })} />
      </div>
      {body}
      <hr className="sep" /><div className="lbl-s">{L('Comptador de 4 xifres', 'Contador de 4 cifras', '4-digit counter')}</div>
      <div className="ctrl">
        <BaseSel id={id + '-ob'} value={ob} onChange={(v) => set({ ob: v, od: [0, 0, 0, 0] })} />
        <button type="button" className="btn primary" onClick={inc}>+1</button>
        <button type="button" className="btn ghost" onClick={() => set({ od: [0, 0, 0, 0] })}>0</button>
      </div>
      <div className="bigmono p-fs30">{od.map((d) => CE.DIG[d]).join(' ')}<span className="small muted p-fs13"> {CE.sub(ob)} = {od[0] * ob ** 3 + od[1] * ob ** 2 + od[2] * ob + od[3]}₍₁₀₎</span></div>
      <Rich as="p" className="small" html={L(`Quan un dígit arriba a ${CE.DIG[ob - 1]} (el més gran de la base ${ob}) i en sumem 1, torna a 0 i el de l'esquerra puja 1: és el <b>transport</b>, el mateix que passa de 9 a 10 en decimal.`, `Cuando un dígito llega a ${CE.DIG[ob - 1]} (el mayor de la base ${ob}) y le sumamos 1, vuelve a 0 y el de la izquierda sube 1: es el <b>acarreo</b>, lo mismo que pasa de 9 a 10 en decimal.`, `When a digit reaches ${CE.DIG[ob - 1]} (the largest in base ${ob}) and we add 1, it goes back to 0 and the one on the left goes up by 1: it is the <b>carry</b>, the same as going from 9 to 10 in decimal.`)} />
    </LabShell>
  );
}

/* ---------- convertidor amb tots els passos ---------- */
export function Conv({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ x: cfg.x || '13,4', a: cfg.a || 5, b: cfg.b || 2 }));
  let out;
  try {
    const r = CE.convert(s.x, s.a, s.b, 12);
    out = <><div className="bigmono">{CE.nb(C.normD(s.x), s.a)} = {r.res}</div><Html html={C.stepsE(r.steps) + C.altConv(r)} /></>;
  } catch {
    out = <Html html={C.fb('warn', L('Revisa els dígits: en base ', 'Revisa los dígitos: en base ', 'Check the digits: in base ') + s.a + L(' només es pot fer servir de 0 a ', ' solo se puede usar de 0 a ', ' you can only use from 0 to ') + CE.DIG[s.a - 1] + '.')} />;
  }
  const swap = () => {
    let x = s.x;
    try { const r = CE.convert(s.x, s.a, s.b); const d = C.plainRes(r); if (!/[()…]/.test(d)) x = d; } catch { /* dígits no vàlids */ }
    set({ x, a: s.b, b: s.a });
  };
  return (
    <LabShell title={L('Canvi de base pas a pas', 'Cambio de base paso a paso', 'Base conversion step by step')}>
      <div className="ctrl">
        <Field sync={s} className="sm p-w160" id={id + '-x'} value={s.x} aria-label={L('nombre', 'número', 'number')} onCommit={(t) => { set({ x: t.trim() || '0' }); return true; }} />
        <BaseSel id={id + '-a'} value={s.a} onChange={(a) => set({ a })} /><span>→</span><BaseSel id={id + '-b'} value={s.b} onChange={(b) => set({ b })} />
        <button type="button" className="btn ghost" onClick={swap}>⇄</button>
      </div>
      <div className="ctrl">
        {[['10110110', 2, 16], ['2F4', 16, 8], ['A35', 12, 5], ['13,4', 5, 2], ['27,32', 8, 16], ['2A,4', 11, 3], ['0,1', 10, 2]].map(([x, a, b]) => (
          <button key={x} type="button" className="chipbtn" onClick={() => set({ x, a, b })}>{CE.nb(x, a)} → {b}</button>
        ))}
      </div>
      {out}
    </LabShell>
  );
}

/* ---------- agrupar bits: binari ↔ octal ↔ hexadecimal ---------- */
export function Group({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { x: '101101,101' });
  const inp = useRef(null);
  const caret = useRef(null);
  useLayoutEffect(() => {
    if (caret.current != null && inp.current) { inp.current.focus(); inp.current.selectionStart = inp.current.selectionEnd = caret.current; caret.current = null; }
  });
  const v = s.x.replace(/[^01,]/g, ''); const [ip = '0', fp = ''] = v.split(',');
  const one = (k) => {
    const I = ip.padStart(Math.ceil(ip.length / k) * k, '0'), F = fp.padEnd(Math.ceil(fp.length / k) * k, '0');
    const gI = I.match(new RegExp('.{' + k + '}', 'g')) || [], gF = F ? F.match(new RegExp('.{' + k + '}', 'g')) : [];
    const padL = I.length - ip.length, padR = F.length - fp.length;
    const bits = (g, isF) => g.map((grp, gi) => (
      <div key={(isF ? 'f' : 'i') + gi} className="stack p-col">
        <div className={'bitgrp ' + (gi % 2 ? 'e' : 'f')}>
          {grp.split('').map((c, ci) => { const pos = gi * k + ci; const pad = isF ? pos >= fp.length : pos < padL; return <span key={ci} className={'bit ro' + (pad ? ' padb' : '')} data-v={pad ? '' : c}>{c}</span>; })}
        </div>
        <div className="bitlab p-dig">{CE.DIG[parseInt(grp, 2)]}</div>
      </div>
    ));
    return (
      <>
        <div className="row p-grp">{bits(gI, false)}{gF.length ? <><span className="bigmono p-pt6">,</span>{bits(gF, true)}</> : null}</div>
        <div className="small">= {CE.nb(gI.map((g) => CE.DIG[parseInt(g, 2)]).join('').replace(/^0+(?=.)/, '') + (gF.length ? ',' + gF.map((g) => CE.DIG[parseInt(g, 2)]).join('') : ''), k === 3 ? 8 : 16)}{padL || padR ? L(' · els bits discontinus són zeros afegits', ' · los bits discontinuos son ceros añadidos', ' · the dashed bits are added zeros') : ''}</div>
      </>
    );
  };
  // teclat de símbols: escriu a la posició del cursor
  const key = (sym) => {
    const t = inp.current, val = t.value;
    const i = t.selectionStart == null ? val.length : t.selectionStart, j = t.selectionEnd == null ? i : t.selectionEnd;
    if (sym === '⌫') { const a = i || val.length; set({ x: val.slice(0, Math.max(0, a - 1)) + val.slice(j || a) }); caret.current = Math.max(0, a - 1); }
    else { set({ x: val.slice(0, i) + sym + val.slice(j) }); caret.current = i + sym.length; }
  };
  return (
    <LabShell title={L('Agrupar bits: octal de 3 en 3, hexadecimal de 4 en 4', 'Agrupar bits: octal de 3 en 3, hexadecimal de 4 en 4', 'Grouping bits: octal in threes, hexadecimal in fours')}>
      <div className="ctrl">
        <input ref={inp} className="sm p-w220" type="text" id={id + '-x'} value={s.x} aria-label={L('binari', 'binario', 'binary')} onChange={(e) => set({ x: e.target.value })} />
        <div className="keys" data-for={id + '-x'}>{['0', '1', ',', '⌫'].map((k) => <button key={k} type="button" onClick={() => key(k)}>{k}</button>)}</div>
      </div>
      <div className="lbl-s">{L('Octal (3 bits)', 'Octal (3 bits)', 'Octal (3 bits)')}</div>{one(3)}
      <div className="lbl-s">{L('Hexadecimal (4 bits)', 'Hexadecimal (4 bits)', 'Hexadecimal (4 bits)')}</div>{one(4)}
      <div className="explain"><Rich as="span" html={L('Sempre es compta <b>a partir de la coma</b>: cap a l\'esquerra a la part entera (omplint zeros a l\'esquerra) i cap a la dreta a la fraccionària (omplint zeros a la dreta). Funciona perquè 8 = 2³ i 16 = 2⁴: cada dígit equival exactament a 3 o 4 bits.', 'Siempre se cuenta <b>a partir de la coma</b>: hacia la izquierda en la parte entera (rellenando ceros a la izquierda) y hacia la derecha en la fraccionaria (rellenando ceros a la derecha). Funciona porque 8 = 2³ y 16 = 2⁴: cada dígito equivale exactamente a 3 o 4 bits.', 'You always count <b>from the radix point</b>: to the left in the integer part (padding zeros on the left) and to the right in the fractional part (padding zeros on the right). It works because 8 = 2³ and 16 = 2⁴: each digit is exactly 3 or 4 bits.')} /></div>
    </LabShell>
  );
}

/* ---------- suma i resta en columna ---------- */
export function Arith({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ a: cfg.a || '3A7', b: cfg.b || '1C9', base: cfg.base || 16, op: cfg.op || '-', k: 99 }));
  let body;
  try {
    const r = CE.addSub(s.a, s.b, s.base, s.op), rows = r.rows, n = Math.max(rows.length, C.normD(s.a).length, C.normD(s.b).length);
    const k = Math.min(s.k, rows.length);
    const A = C.normD(s.a).padStart(n, ' '), B = C.normD(s.b).padStart(n, ' ');
    const res = Array(n).fill(''), car = Array(n + 1).fill('');
    rows.slice(0, k).forEach((o) => { res[n - 1 - o.i] = CE.DIG[o.d]; if (o.c) car[n - 2 - o.i] = s.op === '+' ? '1' : '−1'; });
    const cur = k < rows.length ? n - 1 - rows[k].i : -1;
    const td = (c, i) => <td key={i} className={i === cur ? 'cur' : undefined}>{c.trim()}</td>;
    const o = k ? rows[k - 1] : null;
    const expl = o ? (s.op === '+' ? L(`Columna ${o.i + 1}: `, `Columna ${o.i + 1}: `, `Column ${o.i + 1}: `) + CE.DIG[o.x] + ' + ' + CE.DIG[o.y] + (o.cin ? ' + 1' : '') + ' = ' + o.s + (o.s >= s.base ? L(` ≥ ${s.base}: escric ${CE.DIG[o.d]} i me'n porto 1`, ` ≥ ${s.base}: escribo ${CE.DIG[o.d]} y me llevo 1`, ` ≥ ${s.base}: I write ${CE.DIG[o.d]} and carry 1`) : L(`: escric ${CE.DIG[o.d]}`, `: escribo ${CE.DIG[o.d]}`, `: I write ${CE.DIG[o.d]}`))
      : L(`Columna ${o.i + 1}: `, `Columna ${o.i + 1}: `, `Column ${o.i + 1}: `) + (o.c ? L(`com que ${CE.DIG[o.x]} és massa petit, en demano ${s.base} a l'esquerra: `, `como ${CE.DIG[o.x]} es demasiado pequeño, pido ${s.base} a la izquierda: `, `since ${CE.DIG[o.x]} is too small, I borrow ${s.base} from the left: `) + '(' + o.x + ' + ' + s.base + ')' : o.x) + ' − ' + o.y + (o.cin ? ' − 1' : '') + ' = ' + o.d)
      : L('Prem «Columna següent» per anar de dreta a esquerra.', 'Pulsa «Columna siguiente» para ir de derecha a izquierda.', 'Press “Next column” to go from right to left.');
    body = (
      <>
        <table className="colsum"><tbody>
          <tr className="carry"><td className="op"></td>{range(0, n - 1).map((i) => <td key={i}>{car[i] || ''}</td>)}</tr>
          <tr><td className="op"></td>{A.split('').map(td)}</tr>
          <tr><td className="op">{s.op === '+' ? '+' : '−'}</td>{B.split('').map(td)}</tr>
          <tr className="res"><td className="op"></td>{res.map((c, i) => td(c, i))}</tr>
        </tbody></table>
        <div className="row">
          <button type="button" className="btn primary" disabled={k >= rows.length} onClick={() => set({ k: k + 1 })}>{L('Columna següent', 'Columna siguiente', 'Next column')}</button>
          <button type="button" className="btn ghost" onClick={() => set({ k: 99 })}>{L('Tot', 'Todo', 'All')}</button>
          <button type="button" className="btn ghost" onClick={() => set({ k: 0 })}>{L('Reinicia', 'Reinicia', 'Restart')}</button>
        </div>
        <div className="explain">
          <span>{expl}</span>
          {k >= rows.length && <span><b>{CE.nb(C.normD(s.a), s.base) + ' ' + (s.op === '+' ? '+' : '−') + ' ' + CE.nb(C.normD(s.b), s.base) + ' = ' + CE.nb(r.res, s.base)}</b> · {L('en decimal: ', 'en decimal: ', 'in decimal: ')}{CE.fint(r.va)}{s.op === '+' ? ' + ' : ' − '}{CE.fint(r.vb)} = {CE.fint(r.vr)}</span>}
        </div>
      </>
    );
  } catch (e) {
    body = <Html html={C.fb('warn', e.message === 'neg' ? L('El segon nombre és més gran: la resta donaria negatiu. Canvia\'ls d\'ordre.', 'El segundo número es mayor: la resta daría negativo. Cámbialos de orden.', 'The second number is larger: the subtraction would be negative. Swap them.') : L('Revisa els dígits per a la base triada.', 'Revisa los dígitos para la base elegida.', 'Check the digits for the chosen base.'))} />;
  }
  return (
    <LabShell title={L('Sumes i restes en columna, en qualsevol base', 'Sumas y restas en columna, en cualquier base', 'Column addition and subtraction, in any base')}>
      <div className="ctrl">
        <Field sync={s} id={id + '-a'} value={s.a} onCommit={(t) => { set({ a: t, k: 0 }); return true; }} />
        <div className="tog" role="group">
          <button type="button" aria-pressed={s.op === '+'} onClick={() => set({ op: '+', k: 0 })}>+</button>
          <button type="button" aria-pressed={s.op === '-'} onClick={() => set({ op: '-', k: 0 })}>−</button>
        </div>
        <Field sync={s} id={id + '-b'} value={s.b} onCommit={(t) => { set({ b: t, k: 0 }); return true; }} />
        <BaseSel id={id + '-base'} value={s.base} onChange={(base) => set({ base, k: 0 })} />
      </div>
      <div className="ctrl">
        {[['101101', '11011', 2, '+'], ['1100101', '101101', 2, '-'], ['572', '346', 8, '+'], ['3A7', '1C9', 16, '-'], ['3241', '1432', 5, '+']].map(([a, b, base, op]) => (
          <button key={a} type="button" className="chipbtn" onClick={() => set({ a, b, base, op, k: 0 })}>{a + (op === '+' ? ' + ' : ' − ') + b + CE.sub(base)}</button>
        ))}
      </div>
      {body}
    </LabShell>
  );
}

/* ---------- registre de N bits: quatre lectures ---------- */
function interp(bits) {
  const N = bits.length, u = parseInt(bits, 2), neg = bits[0] === '1';
  const sm = neg ? -parseInt(bits.slice(1) || '0', 2) : u;
  const c1 = neg ? -parseInt(CE.inv(bits), 2) : u;
  const c2 = neg ? u - 2 ** N : u;
  const ce = u - 2 ** (N - 1);
  return { u, sm, c1, c2, ce, smZ: neg && /^10*$/.test(bits), c1Z: /^1+$/.test(bits) };
}
const fitBits = (bits, N) => (bits.length !== N ? bits.slice(-N).padStart(N, '0') : bits);
export function Signed({ id, cfg }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, () => ({ N: cfg.N || 8, bits: '11011011' }));
  const N = s.N, bits = fitBits(s.bits, N);
  const I = interp(bits);
  const row = (sys, v, note) => <div className="prow"><b>{sys}</b><span className="why"><span className="mono p-val">{v === 0 && note ? '−0' : CE.fint(v)}</span>{note ? ' · ' + note : ''}</span></div>;
  const rng = (sys) => { const [lo, hi] = CE.rangeOf(sys, N); return CE.fint(lo) + ' … +' + CE.fint(hi); };
  const step = (d) => { const u = (parseInt(bits, 2) + d + 2 ** N) % 2 ** N; set({ bits: u.toString(2).padStart(N, '0') }); };
  /* roda de C2 amb 4 bits */
  let wheel = null;
  if (N === 4) {
    const cx = 150, cy = 150, R = 112;
    wheel = (
      <svg className="bus p-wheel" viewBox="0 0 300 300" role="img" aria-label={L('Roda de complement a 2', 'Rueda de complemento a 2', 'Two\'s complement wheel')}>
        {range(0, 15).map((v) => {
          const a = -Math.PI / 2 + v * 2 * Math.PI / 16, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), b = v.toString(2).padStart(4, '0'), on = b === bits, c2 = v >= 8 ? v - 16 : v;
          return (
            <g key={v}>
              <circle cx={x} cy={y} r="19" className={'blk' + (on ? ' on' : '') + (v === 8 ? ' p-c8' : '')} />
              <text x={x} y={y - 5} className="p-wb">{b}</text><text x={x} y={y + 8} className="p-wv">{(c2 > 0 ? '+' : '') + c2}</text>
            </g>
          );
        })}
        <text x="150" y="140" className="sm">{L('+1 →', '+1 →', '+1 →')}</text><text x="150" y="160" className="sm">{L('gira en sentit horari', 'gira en sentido horario', 'turns clockwise')}</text>
      </svg>
    );
  }
  return (
    <LabShell title={L('Els mateixos bits, quatre significats', 'Los mismos bits, cuatro significados', 'The same bits, four meanings')}>
      <div className="ctrl">
        <span className="lbl-s">N</span>
        {[4, 5, 8, 10, 12, 16].map((n) => <button key={n} type="button" className="chipbtn" aria-pressed={N === n} onClick={() => set({ N: n, bits: fitBits(bits, n) })}>{n}</button>)}
        <button type="button" className="btn ghost" onClick={() => step(-1)}>−1</button><button type="button" className="btn ghost" onClick={() => step(1)}>+1</button>
      </div>
      <div className="bitrow">
        {bits.split('').map((c, i) => (
          <div key={i} className="stack p-col">
            <button type="button" className="bit" data-v={c} aria-label={'bit ' + (N - 1 - i)} onClick={() => set({ bits: bits.slice(0, i) + (bits[i] === '1' ? '0' : '1') + bits.slice(i + 1) })}>{c}</button>
            <span className="bitlab">{i === 0 ? L('signe', 'signo', 'sign') : N - 1 - i}</span>
          </div>
        ))}
      </div>
      <p className="small">{L('Toca els bits. El primer és el més significatiu.', 'Toca los bits. El primero es el más significativo.', 'Tap the bits. The first one is the most significant.')}</p>
      <div className="lab-split">
        <div className="props">
          {row(L('Natural (sense signe)', 'Natural (sin signo)', 'Natural (unsigned)'), I.u)}{row('SM', I.sm, I.smZ ? L('zero negatiu', 'cero negativo', 'negative zero') : '')}{row('C1', I.c1, I.c1Z ? L('zero negatiu', 'cero negativo', 'negative zero') : '')}{row('C2', I.c2)}{row('CE (' + L('excés', 'exceso', 'excess') + ' ' + CE.fint(2 ** (N - 1)) + ')', I.ce)}
        </div>
        <div>
          {wheel || (
            <>
              <div className="tbl"><table className="etab">
                <thead><tr><th>{L('Sistema', 'Sistema', 'System')}</th><th>{L('Rang amb ', 'Rango con ', 'Range with ')}{N} bits</th></tr></thead>
                <tbody>{['SM', 'C1', 'C2', 'CE'].map((x) => <tr key={x}><td>{x}</td><td>{rng(x)}</td></tr>)}</tbody>
              </table></div>
              <p className="small">{L('Tria N = 4 per veure la roda del complement a 2.', 'Elige N = 4 para ver la rueda del complemento a 2.', 'Choose N = 4 to see the two\'s complement wheel.')}</p>
            </>
          )}
        </div>
      </div>
      <div className="explain">
        <Rich as="span" html={L('<b>SM</b> i <b>C1</b> tenen dos zeros (00…0 i 10…0 o 11…1); per això el seu rang és un valor més curt. <b>C2</b> i <b>CE</b> només en tenen un.', '<b>SM</b> y <b>C1</b> tienen dos ceros (00…0 y 10…0 u 11…1); por eso su rango es un valor más corto. <b>C2</b> y <b>CE</b> solo tienen uno.', '<b>SM</b> and <b>1C</b> have two zeros (00…0 and 10…0 or 11…1); that is why their range is one value shorter. <b>2C</b> and <b>excess</b> have only one.')} />
        {N === 4 && <Rich as="span" html={L('A la roda, sumar 1 a 0111 (+7) dona 1000 (−8): és el <b>desbordament</b>. Les sumes en C2 «donen la volta».', 'En la rueda, sumar 1 a 0111 (+7) da 1000 (−8): es el <b>desbordamiento</b>. Las sumas en C2 «dan la vuelta».', 'On the wheel, adding 1 to 0111 (+7) gives 1000 (−8): it is <b>overflow</b>. Sums in 2C “wrap around”.')} />}
        <span>{L('Fixa\'t que CE i C2 només difereixen en el primer bit: CE = C2 amb el bit de signe invertit.', 'Fíjate en que CE y C2 solo difieren en el primer bit: CE = C2 con el bit de signo invertido.', 'Notice that excess and 2C only differ in the first bit: excess = 2C with the sign bit inverted.')}</span>
      </div>
    </LabShell>
  );
}

/* ---------- codificar i descodificar SM, C1, C2, CE ---------- */
export function Encode({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ mode: 'enc', sys: 'C2', n: -54, N: 10, bits: '11010110', ...cfg }));
  let out;
  if (s.mode === 'enc') {
    const r = CE.encode(s.sys, s.n, s.N);
    out = <>{r.bits && <div className="bigmono">{(s.n > 0 ? '+' : '') + CE.fint(s.n)} → {r.bits}<sub>{s.sys}</sub></div>}<Html html={C.stepsE(r.steps)} /></>;
  } else {
    const b = C.normBits(s.bits);
    if (b) { const r = CE.decode(s.sys, b); out = <><div className="bigmono">{b}<sub>{s.sys}</sub> = {CE.fint(r.v)}</div><Html html={C.stepsE(r.steps)} /></>; }
    else out = <Html html={C.fb('warn', L('Escriu només zeros i uns.', 'Escribe solo ceros y unos.', 'Write only zeros and ones.'))} />;
  }
  return (
    <LabShell title={L('Representar enters amb signe pas a pas', 'Representar enteros con signo paso a paso', 'Representing signed integers step by step')}>
      <div className="ctrl">
        <div className="tog" role="group">
          <button type="button" aria-pressed={s.mode === 'enc'} onClick={() => set({ mode: 'enc' })}>{L('decimal → bits', 'decimal → bits', 'decimal → bits')}</button>
          <button type="button" aria-pressed={s.mode === 'dec'} onClick={() => set({ mode: 'dec' })}>{L('bits → decimal', 'bits → decimal', 'bits → decimal')}</button>
        </div>
        {['SM', 'C1', 'C2', 'CE'].map((x) => <button key={x} type="button" className="chipbtn" aria-pressed={s.sys === x} onClick={() => set({ sys: x })}>{x}</button>)}
      </div>
      {s.mode === 'enc' ? (
        <div className="ctrl">
          <label htmlFor={id + '-n'}>n</label>
          <Field sync={s} type="number" id={id + '-n'} value={s.n} onCommit={(t) => { set({ n: Math.round(+t) || 0 }); return true; }} />
          <label htmlFor={id + '-N'}>N bits</label>
          <Field sync={s} type="number" id={id + '-N'} min="2" max="32" value={s.N} onCommit={(t) => { const v = Math.round(+t); if (v >= 2 && v <= 32) { set({ N: v }); return true; } return false; }} />
        </div>
      ) : (
        <div className="ctrl"><Field sync={s} className="sm p-w260" id={id + '-bits'} value={s.bits} aria-label="bits" onCommit={(t) => { set({ bits: t }); return true; }} /></div>
      )}
      {out}
    </LabShell>
  );
}

/* ---------- IEEE 754 ---------- */
export function Ieee({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ bits: '01000001010101000000000000000000', x: '13,25', mode: 'bits', ...cfg }));
  const b = s.bits, D = CE.ieeeDecode(b), E = parseInt(b.slice(1, 9), 2);
  const flip = (i) => set({ bits: b.slice(0, i) + (b[i] === '1' ? '0' : '1') + b.slice(i + 1) });
  const grp = (cls, from, to, lab) => (
    <div className="stack p-col">
      <div className={'bitgrp ' + cls}>{b.slice(from, to).split('').map((c, i) => <button key={i} type="button" className="bit" data-v={c} aria-label={'bit ' + (31 - from - i)} onClick={() => flip(from + i)}>{c}</button>)}</div>
      <span className="bitlab">{lab}</span>
    </div>
  );
  const setX = (v) => { const r = CE.ieeeEncode(v); set(r.bits ? { x: v, bits: r.bits } : { x: v }); };
  const val = typeof D.v === 'number' ? CE.fnum(D.v, 10) : D.v;
  return (
    <LabShell title={L('IEEE 754 de simple precisió, bit a bit', 'IEEE 754 de simple precisión, bit a bit', 'IEEE 754 single precision, bit by bit')}>
      <div className="tog" role="group">
        <button type="button" aria-pressed={s.mode === 'bits'} onClick={() => set({ mode: 'bits' })}>{L('bits → nombre', 'bits → número', 'bits → number')}</button>
        <button type="button" aria-pressed={s.mode === 'num'} onClick={() => set({ mode: 'num' })}>{L('nombre → bits', 'número → bits', 'number → bits')}</button>
      </div>
      {s.mode === 'num' && (
        <>
          <div className="ctrl">
            <Field sync={s} className="sm p-w180" id={id + '-x'} value={s.x} aria-label={L('nombre decimal', 'número decimal', 'decimal number')} onCommit={(t) => { try { setX(t.trim()); return true; } catch { return false; } }} />
            {['13,25', '-6,5', '15,25', '-18,5', '0,15625', '0,1', '-0,75'].map((x) => <button key={x} type="button" className="chipbtn" onClick={() => setX(x)}>{x}</button>)}
          </div>
          <Html html={C.stepsE(CE.ieeeEncode(s.x).steps)} />
        </>
      )}
      <div className="bitrow p-ox">{grp('s', 0, 1, 'S')}{grp('e', 1, 9, L('exponent (8)', 'exponente (8)', 'exponent (8)'))}{grp('f', 9, 32, L('fracció (23)', 'fracción (23)', 'fraction (23)'))}</div>
      <div className="ctrl">
        {[['0', '0'.repeat(32)], ['1', '0' + '01111111' + '0'.repeat(23)], ['−2', '1' + '10000000' + '0'.repeat(23)], ['+∞', '0' + '1'.repeat(8) + '0'.repeat(23)], ['NaN', '0' + '1'.repeat(8) + '1' + '0'.repeat(22)], [L('desnormal.', 'desnormal.', 'denormal.'), '0' + '0'.repeat(8) + '0'.repeat(22) + '1']].map(([t, v]) => (
          <button key={v} type="button" className="chipbtn" onClick={() => set({ bits: v })}>{t}</button>
        ))}
      </div>
      <div className="kv">
        <span>S</span><span>{b[0] + (b[0] === '1' ? L(' → negatiu', ' → negativo', ' → negative') : L(' → positiu', ' → positivo', ' → positive'))}</span>
        <span>E</span><span>{b.slice(1, 9) + ' = ' + E + (E > 0 && E < 255 ? ' → e = ' + E + ' − 127 = ' + (E - 127) : E === 0 ? L(' → cas especial (zero o desnormalitzat)', ' → caso especial (cero o desnormalizado)', ' → special case (zero or denormalised)') : L(' → cas especial (∞ o NaN)', ' → caso especial (∞ o NaN)', ' → special case (∞ or NaN)'))}</span>
        <span>F</span><span className="mono p-wrap">{b.slice(9)}</span>
        <span>{L('valor', 'valor', 'value')}</span><span className="bigmono">{val}</span>
        <span>hex</span><span className="mono">{parseInt(b, 2).toString(16).toUpperCase().padStart(8, '0')}</span>
      </div>
      <details className="acc"><summary>{L('Com s\'ha descodificat', 'Cómo se ha decodificado', 'How it was decoded')}</summary><div className="inner"><Html html={C.stepsE(D.steps)} /></div></details>
      <div className="explain"><Rich as="span" html={L('Valor = (−1)<sup>S</sup> · 1,F · 2<sup>E − 127</sup>. L\'exponent va en <b>excés 127</b> perquè així es poden comparar els nombres com si fossin naturals; l\'<b>1 implícit</b> no es guarda perquè sempre hi és.', 'Valor = (−1)<sup>S</sup> · 1,F · 2<sup>E − 127</sup>. El exponente va en <b>exceso 127</b> porque así se pueden comparar los números como si fueran naturales; el <b>1 implícito</b> no se guarda porque siempre está.', 'Value = (−1)<sup>S</sup> · 1.F · 2<sup>E − 127</sup>. The exponent is in <b>excess 127</b> so that numbers can be compared as if they were natural numbers; the <b>implicit 1</b> is not stored because it is always there.')} /></div>
    </LabShell>
  );
}

/* ---------- normalitzar: moure la coma ---------- */
export function Norm({ id }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, { m: '1101,01', sh: 0 });
  const digits = s.m.replace(',', ''), comma0 = s.m.indexOf(','), pos = comma0 - s.sh;
  let shown;
  if (pos <= 0) shown = '0,' + '0'.repeat(-pos) + digits; else if (pos >= digits.length) shown = digits + '0'.repeat(pos - digits.length); else shown = digits.slice(0, pos) + ',' + digits.slice(pos);
  shown = shown.replace(/^0+(?=\d)/, '');
  const isNorm = /^1,/.test(shown);
  return (
    <LabShell title={L('Punt flotant: moure la coma sense canviar el valor', 'Punto flotante: mover la coma sin cambiar el valor', 'Floating point: moving the point without changing the value')}>
      <div className="ctrl">{['1101,01', '110,1', '10010,1', '0,00101'].map((x) => <button key={x} type="button" className="chipbtn" aria-pressed={s.m === x} onClick={() => set({ m: x, sh: 0 })}>{x + CE.sub(2)}</button>)}</div>
      <div className="bigmono p-fs24">{shown + CE.sub(2)} · 2{supE(s.sh)}</div>
      <div className="row">
        <button type="button" className="btn" onClick={() => set({ sh: s.sh + 1 })}>{L('← coma a l\'esquerra', '← coma a la izquierda', '← point to the left')}</button>
        <button type="button" className="btn" onClick={() => set({ sh: s.sh - 1 })}>{L('coma a la dreta →', 'coma a la derecha →', 'point to the right →')}</button>
      </div>
      {isNorm && <Html html={C.fb('ok', L(`<b>Normalitzat:</b> un sol 1 a l'esquerra de la coma. Exponent e = ${s.sh}; a IEEE 754 es guarda E = e + 127 = ${s.sh + 127} i la fracció F = ${shown.slice(2)}.`, `<b>Normalizado:</b> un solo 1 a la izquierda de la coma. Exponente e = ${s.sh}; en IEEE 754 se guarda E = e + 127 = ${s.sh + 127} y la fracción F = ${shown.slice(2)}.`, `<b>Normalised:</b> a single 1 to the left of the point. Exponent e = ${s.sh}; in IEEE 754 E = e + 127 = ${s.sh + 127} is stored, and the fraction F = ${shown.slice(2)}.`))} />}
      <p className="small">{L('Moure la coma una posició a l\'esquerra divideix per 2, i per compensar l\'exponent puja 1. El valor no canvia mai: és el que vol dir «punt flotant».', 'Mover la coma una posición a la izquierda divide entre 2, y para compensar el exponente sube 1. El valor no cambia nunca: es lo que quiere decir «punto flotante».', 'Moving the point one place to the left divides by 2, and to compensate the exponent goes up by 1. The value never changes: that is what “floating point” means.')}</p>
    </LabShell>
  );
}
