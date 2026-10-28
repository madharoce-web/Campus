import { useEffect, useLayoutEffect, useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { Z, tx } from '../engine/z.js';
import { useSlot } from '../store.js';
import { Chips, Field, Html, LabShell, Tog, useContent } from '../ui.jsx';

/* ---------- el pla complex ---------- */
export function Complex({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, stepRow, CU, CO, cP, snapH, sqrtTx, angTxR, planeSVG, vec, arcPath, inPlane, zTx, argSteps, RTPRE, svgPoint } = C;
  const [s, set] = useSlot(id, () => ({ m: cfg.m || 'z', z: { re: 3, im: 4 }, w: { re: 1, im: 1 }, op: '·', n: cfg.n || 4, rw: { re: 81, im: 0 }, rp: cfg.m === 'arrels' ? 0 : -1, c: { re: 1, im: 1 }, r: 2, conj: true, opp: false, pw: 3 }));
  const wrap = useRef(null), drag = useRef(null), cur = useRef(s);
  useLayoutEffect(() => { cur.current = s; });
  // arrossegar un punt: el moviment es segueix a tota la finestra fins que es deixa anar
  useEffect(() => {
    const move = (e) => { if (drag.current) { e.preventDefault(); drag.current(e); } };
    const up = () => { drag.current = null; };
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up); };
  }, []);
  const start = (h, ev) => {
    ev.preventDefault();
    drag.current = (e2) => {
      const sv = wrap.current && wrap.current.querySelector('svg.cp'); if (!sv) return;
      const p = svgPoint(sv, e2), v = { re: snapH((p.x - CO) / CU), im: snapH((CO - p.y) / CU) }, o = cur.current[h];
      if (o.re !== v.re || o.im !== v.im) { cur.current = { ...cur.current, [h]: v }; set(h === 'rw' ? { [h]: v, rp: -1 } : { [h]: v }); }
    };
    drag.current(ev);
  };
  const onDown = (ev) => {
    const h = ev.target.dataset && ev.target.dataset.h;
    if (h) start(h, ev);
    else if (ev.target.closest && ev.target.closest('svg.cp') && (s.m === 'z' || s.m === 'pow')) start('z', ev);
  };
  const slider = (k, label, min, max, step) => <><label htmlFor={id + '-' + k}>{label}</label><input type="range" id={id + '-' + k} min={min} max={max} step={step} value={s[k]} onChange={(e) => set({ [k]: +e.target.value })} /></>;
  let inner = '', extra = '', panel;
  const z = s.z, w = s.w;
  if (s.m === 'z') {
    const A = argSteps(z);
    if (s.conj) inner += vec(Z.cconj(z), 'vg', 'z̄', 8, 16);
    if (s.opp) inner += vec(Z.Cx(-z.re, -z.im), 'vg', '−z', -24, 14);
    const [x, y] = cP(z);
    inner += '<line class="vg" x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + CO + '"/><line class="vg" x1="' + x + '" y1="' + y + '" x2="' + CO + '" y2="' + y + '"/>';
    if (isFinite(A.al) && A.mod > 0) inner += arcPath(Math.min(34, A.mod * CU * 0.6), 0, A.al);
    inner += vec(z, 'vz', 'z') + '<circle class="hz" data-h="z" cx="' + x + '" cy="' + y + '" r="9"/>';
    const al = A.al, nice = isFinite(al) ? angTxR(al) : '—', md_ = A.mt;
    const num = (k) => (t) => { const v = +t; if (isFinite(v)) { set({ z: { ...s.z, [k]: v } }); return true; } return false; };
    panel = (
      <>
        <div className="ctrl">
          <label htmlFor={id + '-a'}>a</label><Field sync={s} type="number" step="0.5" id={id + '-a'} value={z.re} onCommit={num('re')} />
          <label htmlFor={id + '-b'}>b</label><Field sync={s} type="number" step="0.5" id={id + '-b'} value={z.im} onCommit={num('im')} />
          <button type="button" className="chipbtn" data-t="conj" aria-pressed={s.conj} onClick={() => set({ conj: !s.conj })}>z̄</button>
          <button type="button" className="chipbtn" data-t="opp" aria-pressed={s.opp} onClick={() => set({ opp: !s.opp })}>−z</button>
        </div>
        <Html html={'<div class="steps">' + A.out.map(stepRow).join('') + '</div>' +
          (A.mod > 0 ? '<div class="kv"><span>' + L('binòmica', 'binómica', 'binomial') + '</span><span>' + M('z = ' + zTx(z)) + '</span><span>' + L('cartesiana', 'cartesiana', 'Cartesian') + '</span><span>' + M('(' + fmt(z.re, 2) + ', ' + fmt(z.im, 2) + ')') + '</span><span>' + L('trigonomètrica', 'trigonométrica', 'trigonometric') + '</span><span>' + M(md_ + '(cos ' + nice + ' + i · sin ' + nice + ')') + '</span><span>polar</span><span>' + M(md_ + '_{' + nice + '}') + '</span><span>' + L('exponencial', 'exponencial', 'exponential') + '</span><span>' + M(md_ + ' · e^{' + nice + 'i}') + '</span><span>' + L('conjugat', 'conjugado', 'conjugate') + '</span><span>' + M('z̄ = ' + zTx(Z.cconj(z)) + ' = ' + md_ + '_{' + (isFinite(al) ? angTxR(-al) : '') + '}') + '</span><span>' + L('oposat', 'opuesto', 'opposite') + '</span><span>' + M('−z = ' + zTx(Z.Cx(-z.re, -z.im))) + '</span></div>' +
            '<p class="small">' + L('Comprovació: ', 'Comprobación: ', 'Check: ') + M('cos α = \\fr{a}{|z|} = ' + fmt(z.re / A.mod, 4) + ', sin α = \\fr{b}{|z|} = ' + fmt(z.im / A.mod, 4)) + '.</p>' : '') +
          '<p class="tiny muted">' + L('Arrossega el punt o escriu a i b. El conjugat és la reflexió respecte de l\'eix real (mateix mòdul, angle canviat de signe).', 'Arrastra el punto o escribe a y b. El conjugado es la reflexión respecto del eje real (mismo módulo, ángulo cambiado de signo).', 'Drag the point or type a and b. The conjugate is the reflection in the real axis (same modulus, angle with the opposite sign).') + '</p>'} />
      </>
    );
  } else if (s.m === 'ops') {
    const r = s.op === '+' ? Z.cadd(z, w) : s.op === '·' ? Z.cmul(z, w) : (Z.cabs(w) ? Z.cdiv(z, w) : null);
    const az = Z.argMaterial(z), aw = Z.argMaterial(w), mz = Z.cabs(z), mw = Z.cabs(w);
    if (s.op === '+' && r) { const [rx, ry] = cP(r), [zx, zy] = cP(z), [wx, wy] = cP(w); inner += '<line class="vg" x1="' + zx + '" y1="' + zy + '" x2="' + rx + '" y2="' + ry + '"/><line class="vg" x1="' + wx + '" y1="' + wy + '" x2="' + rx + '" y2="' + ry + '"/>'; }
    if (s.op === '·' && isFinite(az) && isFinite(aw)) { inner += arcPath(26, 0, az) + arcPath(40, 0, aw); }
    if (r && inPlane(r)) inner += vec(r, 'vr', s.op === '+' ? 'z+w' : s.op === '·' ? 'z·w' : 'z/w');
    inner += vec(z, 'vz', 'z') + vec(w, 'vw', 'w');
    const [x, y] = cP(z), [x2, y2] = cP(w); inner += '<circle class="hz" data-h="z" cx="' + x + '" cy="' + y + '" r="9"/><circle class="hw" data-h="w" cx="' + x2 + '" cy="' + y2 + '" r="9"/>';
    const a = z.re, b = z.im, c = w.re, d = w.im;
    let steps = [];
    if (s.op === '+') steps = [{ h: L('Suma: part real amb part real, imaginària amb imaginària', 'Suma: parte real con parte real, imaginaria con imaginaria', 'Sum: real part with real part, imaginary with imaginary'), m: '(' + zTx(z) + ') + (' + zTx(w) + ') = (' + fmt(a, 2) + ' + ' + fmt(c, 2) + ') + (' + fmt(b, 2) + ' + ' + fmt(d, 2) + ')i = ' + zTx(r) }, { t: L('Geomètricament és la regla del paral·lelogram.', 'Geométricamente es la regla del paralelogramo.', 'Geometrically it is the parallelogram rule.') }];
    if (s.op === '·') steps = [{ h: L('Binòmica', 'Binómica', 'Binomial form'), m: '(a + bi)(c + di) = (ac − bd) + (ad + bc)i' }, { m: '= (' + fmt(a * c, 2) + ' − (' + fmt(b * d, 2) + ')) + (' + fmt(a * d, 2) + ' + ' + fmt(b * c, 2) + ')i = ' + zTx(r) }, { h: L('Polar: mòduls es multipliquen, angles se sumen', 'Polar: módulos se multiplican, ángulos se suman', 'Polar form: moduli multiply, angles add'), m: '|z| · |w| = ' + fmt(mz, 3) + ' · ' + fmt(mw, 3) + ' = ' + fmt(mz * mw, 3) + ',   α + β = ' + fmt(az, 3) + ' + ' + fmt(aw, 3) + ' = ' + fmt(az + aw, 3) + ' rad' }, { t: L('Comprova-ho al dibuix: l\'arc de z·w és la suma dels dos arcs.', 'Compruébalo en el dibujo: el arco de z·w es la suma de los dos arcos.', 'Check it on the drawing: the arc of z·w is the sum of the two arcs.') }];
    if (s.op === '/') steps = r ? [{ h: L('Multiplica dalt i baix pel conjugat del denominador', 'Multiplica arriba y abajo por el conjugado del denominador', 'Multiply top and bottom by the conjugate of the denominator'), m: '\\fr{a + bi}{c + di} = \\fr{(a + bi)(c − di)}{c^{2} + d^{2}} = \\fr{ac + bd}{c^{2} + d^{2}} + \\fr{bc − ad}{c^{2} + d^{2}} i' }, { m: '= \\fr{' + fmt(a * c + b * d, 2) + '}{' + fmt(c * c + d * d, 2) + '} + \\fr{' + fmt(b * c - a * d, 2) + '}{' + fmt(c * c + d * d, 2) + '} i = ' + zTx(r) }, { h: L('Polar: mòduls es divideixen, angles es resten', 'Polar: módulos se dividen, ángulos se restan', 'Polar form: moduli divide, angles subtract'), m: '\\fr{|z|}{|w|} = ' + fmt(mz / mw, 3) + ',   α − β = ' + fmt(az - aw, 3) + ' rad' }] : [{ t: L('w = 0: no es pot dividir.', 'w = 0: no se puede dividir.', 'w = 0: you cannot divide.') }];
    panel = (
      <>
        <Chips attr="op" items={['+', '·', '/'].map((o) => [o, 'z ' + o + ' w'])} value={s.op} onChange={(op) => set({ op })} />
        <Html html={'<div class="kv"><span>z</span><span>' + M(zTx(z)) + '</span><span>w</span><span>' + M(zTx(w)) + '</span></div><div class="steps">' + steps.map(stepRow).join('') + '</div>' +
          (r && !inPlane(r) ? '<p class="small muted">' + L('El resultat queda fora del dibuix.', 'El resultado queda fuera del dibujo.', 'The result is outside the drawing.') + '</p>' : '')} />
      </>
    );
  } else if (s.m === 'pow') {
    const A = Z.argMaterial(z), mz = Z.cabs(z); let pts = '';
    for (let k = 1; k <= s.pw; k++) { const p = Z.cpow(z, Z.Cx(k, 0)); if (inPlane(p)) { const [x, y] = cP(p); pts += '<circle class="pr" cx="' + x + '" cy="' + y + '" r="5"/><text class="lb" x="' + (x + 7) + '" y="' + (y + 14) + '" style="font-size:12px">z' + (k > 1 ? '<tspan dy="-5" font-size="9">' + k + '</tspan>' : '') + '</text>'; } }
    inner += vec(z, 'vz', '') + pts; const [x, y] = cP(z); inner += '<circle class="hz" data-h="z" cx="' + x + '" cy="' + y + '" r="9"/>';
    const zn = Z.cpow(z, Z.Cx(s.pw, 0));
    panel = (
      <>
        <div className="ctrl">{slider('pw', 'n = ' + s.pw, '1', '8')}</div>
        <Html html={'<div class="steps">' + stepRow({ h: L('En polar és immediat', 'En polar es inmediato', 'In polar form it is immediate'), m: 'z^{n} = (|z|_{α})^{n} = (|z|^{n})_{n·α}' }, 0) + stepRow({ m: 'z^{' + s.pw + '} = (' + fmt(mz, 3) + '^{' + s.pw + '})_{' + s.pw + ' · ' + fmt(A, 3) + '} = ' + fmt(mz ** s.pw, 3) + '_{' + fmt(s.pw * A, 3) + '}' }, 1) + stepRow({ m: '= ' + zTx(zn), c: 'done' }, 2) + '</div>' +
          '<p class="small">' + L('Cada potència gira l\'angle α una altra vegada i multiplica la distància per |z|: si |z| > 1 s\'allunya en espiral, si |z| < 1 s\'acosta, si |z| = 1 dona voltes al cercle.', 'Cada potencia gira el ángulo α otra vez y multiplica la distancia por |z|: si |z| > 1 se aleja en espiral, si |z| < 1 se acerca, si |z| = 1 da vueltas al círculo.', 'Each power rotates by the angle α again and multiplies the distance by |z|: if |z| > 1 it spirals outwards, if |z| < 1 it spirals inwards, if |z| = 1 it goes round the circle.') + '</p>'} />
      </>
    );
  } else if (s.m === 'arrels') {
    const W = s.rw, n = s.n, mw = Z.cabs(W), aw = Z.argMaterial(W), rr = Math.pow(mw, 1 / n);
    const roots = Z.range(0, n - 1).map((k) => ({ k, ang: (aw + 2 * Math.PI * k) / n }));
    const pts = roots.map((o) => Z.cpol(rr, o.ang));
    extra = '<circle class="circ" cx="' + CO + '" cy="' + CO + '" r="' + rr * CU + '"/>' + (n > 2 ? '<polygon class="poly" points="' + pts.map((p) => cP(p).join(',')).join(' ') + '"/>' : '');
    pts.forEach((p, i) => { const [x, y] = cP(p); inner += '<circle class="pr" cx="' + x + '" cy="' + y + '" r="6"/><text class="lb" x="' + (x + 8) + '" y="' + (y - 7) + '" style="font-size:12px">w' + i + '</text>'; });
    if (inPlane(W)) { const [x, y] = cP(W); inner += '<circle class="hz" data-h="rw" cx="' + x + '" cy="' + y + '" r="8"/><text class="lb" x="' + (x + 8) + '" y="' + (y + 16) + '">z</text>'; }
    const rInt = Math.abs(rr - Math.round(rr)) < 1e-9 ? Math.round(rr) : null;
    const rTx = rInt != null ? String(rInt) : '\\rt{' + n + '}{' + fmt(mw, 3) + '}';
    const rows = roots.map((o) => { const deg = o.ang * 180 / Math.PI, ex = rInt != null ? Z.binExact(rInt, Math.round(deg * 1e6) / 1e6) : null; return '<tr><td>' + o.k + '</td><td>' + M('\\fr{' + angTxR(aw) + ' + 2π·' + o.k + '}{' + n + '} = ' + angTxR(o.ang)) + '</td><td>' + M(rTx + '_{' + angTxR(o.ang) + '}') + '</td><td>' + M(ex || zTx(Z.cpol(rr, o.ang))) + '</td></tr>'; }).join('');
    panel = (
      <>
        <Chips attr="rp" items={RTPRE.map((p, i) => [i, M(p[2])])} value={s.rp} onChange={(i) => { const p = RTPRE[i]; set({ rp: i, rw: { re: p[0], im: p[1] }, n: p[3] }); }} />
        <div className="ctrl">{slider('n', 'n = ' + n, '2', '8')}<Html as="span" html={'<span class="small muted">z = ' + M(zTx(W)) + (inPlane(W) ? ' · ' + L('arrossega z', 'arrastra z', 'drag z') : ' · ' + L('fora del dibuix', 'fuera del dibujo', 'outside the drawing')) + '</span>'} /></div>
        <Html html={'<div class="steps">' + stepRow({ h: L('Escriu z en polar', 'Escribe z en polar', 'Write z in polar form'), m: 'z = ' + sqrtTx(mw * mw) + '_{' + angTxR(aw) + '}' }, 0) + stepRow({ h: L('Fórmula de les arrels', 'Fórmula de las raíces', 'Root formula'), m: '\\rt{n}{z} = (\\rt{n}{|z|})_{\\fr{α + 2πk}{n}},   k = 0, 1, …, n − 1', w: L('n arrels diferents, totes amb el mateix mòdul: formen un polígon regular de n costats.', 'n raíces distintas, todas con el mismo módulo: forman un polígono regular de n lados.', 'n distinct roots, all with the same modulus: they form a regular polygon with n sides.') }, 1) + '</div>' +
          '<div class="tbl"><table class="etab"><thead><tr><th>k</th><th>' + L('angle', 'ángulo', 'angle') + '</th><th>polar</th><th>' + L('binòmica', 'binómica', 'binomial') + '</th></tr></thead><tbody>' + rows + '</tbody></table></div>'} />
      </>
    );
  } else {
    const c = s.c, d = Z.cabs(Z.csub(z, c)), inside = d <= s.r + 1e-9, [cx, cy] = cP(c), [x, y] = cP(z);
    extra = '<circle class="disc" cx="' + cx + '" cy="' + cy + '" r="' + s.r * CU + '"/>';
    inner += '<line class="vg" x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '"/><circle class="hz" data-h="c" cx="' + cx + '" cy="' + cy + '" r="8"/><text class="lb" x="' + (cx + 9) + '" y="' + (cy - 9) + '">x</text><circle class="hw" data-h="z" cx="' + x + '" cy="' + y + '" r="8"/><text class="lb" x="' + (x + 9) + '" y="' + (y - 9) + '">z</text>';
    panel = (
      <>
        <div className="ctrl">{slider('r', L('radi', 'radio', 'radius') + ' y = ' + fmt(s.r, 1), '0.5', '4', '0.5')}</div>
        <Html html={'<div class="explain"><span>' + M('\\{z ∈ ℂ | |z − x| ≤ y\\}') + L(' és el disc de centre ', ' es el disco de centro ', ' is the disc with centre ') + M('x = ' + zTx(c)) + L(' i radi ', ' y radio ', ' and radius ') + M(fmt(s.r, 1)) + '.</span><span>' + M('|z − x| = |' + zTx(Z.csub(z, c)) + '| = ' + fmt(d, 3)) + ' ' + (inside ? '≤' : '>') + ' ' + fmt(s.r, 1) + ' → ' + (inside ? L('z és dins del disc', 'z está dentro del disco', 'z is inside the disc') : L('z és fora', 'z está fuera', 'z is outside')) + '.</span><span>' + L('És el mateix que l\'entorn de la recta real, però en el pla: |z − x| és la distància entre z i x.', 'Es lo mismo que el entorno de la recta real, pero en el plano: |z − x| es la distancia entre z y x.', 'It is the same as a neighbourhood on the real line, but in the plane: |z − x| is the distance between z and x.') + '</span></div>'} />
      </>
    );
  }
  return (
    <LabShell title={L('El pla complex', 'El plano complejo', 'The complex plane')}>
      <Tog attr="m" items={[['z', L('un nombre', 'un número', 'a number')], ['ops', L('operacions', 'operaciones', 'operations')], ['pow', L('potències', 'potencias', 'powers')], ['arrels', L('arrels', 'raíces', 'roots')], ['disc', L('discs', 'discos', 'discs')]]} value={s.m} onChange={(m) => set({ m })} />
      <div className="lab-split">
        <Rich ref={wrap} html={planeSVG(inner, extra)} onPointerDown={onDown} />
        <div className="stack p-g10">{panel}</div>
      </div>
    </LabShell>
  );
}

/* ---------- arrels d'un polinomi i factorització ---------- */
export function Polinomi({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, md, esc, cP, planeSVG, POLYS } = C;
  const [s, set] = useSlot(id, () => ({ i: cfg.i || 0 }));
  const P = POLYS[s.i]; let inner = '';
  P.roots.forEach(([re, im]) => { if (im > 0 && P.roots.some((r) => Math.abs(r[0] - re) < 1e-9 && Math.abs(r[1] + im) < 1e-9)) { const [x, y] = cP({ re, im }), [, y2] = cP({ re, im: -im }); inner += '<line class="vg" x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + y2 + '"/>'; } });
  P.roots.forEach(([re, im, mu, t]) => { const [x, y] = cP({ re, im }); inner += '<circle class="pr" cx="' + x + '" cy="' + y + '" r="' + (mu > 1 ? 9 : 6) + '"/><text class="lb" x="' + (x + 10) + '" y="' + (y - 8) + '" style="font-size:13px">' + esc(t.replace('\\sq{', '√').replace('}', '')) + (mu > 1 ? ' (×' + mu + ')' : '') + '</text>'; });
  const deg = P.roots.reduce((a, r) => a + r[2], 0);
  const setN = { N: 'ℕ', Z: 'ℤ', I: L('ℝ (irracional)', 'ℝ (irracional)', 'ℝ (irrational)'), C: L('ℂ, no real', 'ℂ, no real', 'ℂ, not real') };
  return (
    <LabShell title={L('Arrels d\'un polinomi i factorització', 'Raíces de un polinomio y factorización', 'Roots of a polynomial and factorisation')}>
      <Chips attr="i" items={POLYS.map((p, i) => [i, M(p.p)])} value={s.i} onChange={(i) => set({ i })} />
      <div className="lab-split">
        <Rich html={planeSVG(inner)} />
        <Html html={'<div class="stack" style="gap:10px">' +
          '<div class="disp">' + tx('p(x) = ' + P.p) + '</div>' + (P.src ? '<span class="pill">' + P.src + '</span>' : '') +
          '<p class="small">' + md(P.how()) + '</p>' +
          '<div class="tbl"><table class="etab"><thead><tr><th>' + L('arrel', 'raíz', 'root') + '</th><th>' + L('mult.', 'mult.', 'mult.') + '</th><th>' + L('conjunt més petit', 'conjunto más pequeño', 'smallest set') + '</th><th>polar</th></tr></thead><tbody>' +
          P.roots.map(([, , mu, t, k, pol]) => '<tr><td>' + M(t) + '</td><td>' + mu + '</td><td>' + setN[k] + '</td><td>' + M(pol) + '</td></tr>').join('') + '</tbody></table></div>' +
          '<div class="kv"><span>' + L('a ℂ', 'en ℂ', 'over ℂ') + '</span><span>' + M(P.p + ' = ' + P.fc) + '</span><span>' + L('a ℝ', 'en ℝ', 'over ℝ') + '</span><span>' + M(P.p + ' = ' + P.fr) + '</span></div>' +
          '<div class="explain"><span>' + L('Grau ', 'Grado ', 'Degree ') + deg + ' → ' + deg + L(' arrels comptant multiplicitat (teorema fonamental de l\'àlgebra).', ' raíces contando multiplicidad (teorema fundamental del álgebra).', ' roots counting multiplicity (fundamental theorem of algebra).') + '</span><span>' + L('Coeficients reals → les arrels no reals surten en parelles conjugades (línia discontínua): a ℝ cada parella es queda com un factor de grau 2.', 'Coeficientes reales → las raíces no reales salen en parejas conjugadas (línea discontinua): en ℝ cada pareja se queda como un factor de grado 2.', 'Real coefficients → the non-real roots come in conjugate pairs (dashed line): over ℝ each pair stays as a degree-2 factor.') + '</span></div></div>'} />
      </div>
    </LabShell>
  );
}
