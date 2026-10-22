/* Traça pas a pas: passos del pseudocodi (PS) i del C++ (MiniCpp), i descripció dels canvis. */
import PS from './ps.js';
import MiniCpp from './minicpp.js';

export function psTrace(src, input) {
  const steps = []; let P = null;
  try { P = PS.parseProgram(src); } catch (e) { return { ok: false, err: { msg: e.message, line: e.line }, steps: [] }; }
  const order = Object.keys(P.decl);
  const name = (k) => (P.decl[k] ? P.decl[k].name : k);
  const type = (k) => (P.decl[k] ? P.decl[k].type : '');
  const total = String(input || '').split(/[\s,;]+/).filter((x) => x !== '');
  let last = null, cnt = 0;
  const snap = (env) => {
    const keys = order.filter((k) => k in env).concat(Object.keys(env).filter((k) => !order.includes(k)));
    return [{ fn: 'algorisme', vars: keys.map((k) => ({ n: name(k), t: type(k), v: PS.fmt(env[k]), raw: env[k] })) }];
  };
  const r = PS.run(P, input, {
    limit: 3000, onStep: (n, env, out, q) => {
      last = { env, out, q }; if (++cnt > 3000) return;
      steps.push({ line: n, frames: snap(env), out: out.join('\n') + (out.length ? '\n' : ''), used: total.length - q.length });
    },
  });
  const fe = last ? last.env : {};
  steps.push({ line: r.ok ? null : r.line, frames: snap(fe), out: r.out.join('\n') + (r.out.length ? '\n' : ''), used: last ? total.length - last.q.length : 0, end: true, error: !r.ok });
  return { ok: r.ok, err: r.ok ? null : { msg: r.err, line: r.line }, steps, tokens: total };
}

export function cppTrace(src, input) {
  const r = MiniCpp.run(src, input, { trace: true, limit: 3000 });
  const toks = []; const re = /\S+/g; let m; const s = String(input || '');
  while ((m = re.exec(s))) toks.push({ t: m[0], end: m.index + m[0].length });
  r.steps.forEach((st) => { st.used = toks.filter((t) => t.end <= st.ip).length; });
  return { ok: r.ok, err: r.err, steps: r.steps, tokens: toks.map((t) => t.t) };
}

export const traceOf = (lang, src, input) => (lang === 'cpp' ? cppTrace(src, input) : psTrace(src, input));

/** Què ha canviat entre dos passos (variables, crides, sortida i entrada llegida). */
export function diffText(a, b, tokens, L) {
  if (!a) return '';
  const out = [];
  const map = (fr) => { const m = {}; fr.forEach((f) => f.vars.forEach((v) => { m[f.fn + '/' + v.n] = v; })); return m; };
  const A = map(a.frames), B = map(b.frames);
  Object.keys(B).forEach((key) => {
    const v = B[key], o = A[key];
    if (!o) { if (v.v !== '?') out.push(v.n + ' = ' + v.v); else out.push(L('es crea ', 'se crea ') + v.n + L(' (sense valor)', ' (sin valor)')); }
    else if (o.v !== v.v) out.push(v.n + ': ' + o.v + ' → ' + v.v);
  });
  const fa = a.frames.map((f) => f.fn), fb = b.frames.map((f) => f.fn);
  if (fb.length > fa.length) out.unshift(L('crida a ', 'llamada a ') + fb[fb.length - 1] + '()');
  if (fb.length < fa.length) out.unshift(L('torna de ', 'vuelve de ') + fa[fa.length - 1] + '()');
  if (b.out.length > a.out.length) out.push(L('escriu «', 'escribe «') + b.out.slice(a.out.length).replace(/\n/g, '↵') + '»');
  if (b.used > a.used) out.push(L('llegeix ', 'lee ') + tokens.slice(a.used, b.used).join(' '));
  return out.length ? out.join(' · ') : L("cap canvi visible (s'ha avaluat una condició o s'ha saltat)", 'ningún cambio visible (se ha evaluado una condición o se ha saltado)');
}

/** Tira de la seqüència amb el capçal (data-strip="var,inici,final"). null si no s'ha de mostrar. */
export function stripCells(strip, step) {
  if (!strip) return null;
  const [vn, a, b] = strip.split(',').map((x) => x.trim());
  const vals = {}; step.frames.forEach((f) => f.vars.forEach((v) => { vals[v.n] = v.raw; }));
  const num = (x) => (/^-?\d+$/.test(x) ? +x : (typeof vals[x] === 'number' ? vals[x] : (typeof vals[x] === 'bigint' ? Number(vals[x]) : null)));
  const from = num(a), to = num(b), cur = num(vn);
  if (from == null || to == null || to - from > 60) return null;
  const cells = [];
  for (let x = from; x <= to; x++) cells.push({ x, cls: cur === x ? 'head' : cur != null && x < cur ? 'used' : '' });
  return { vn, cells };
}
