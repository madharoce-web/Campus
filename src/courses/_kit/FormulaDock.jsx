import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { fold } from '../../lib/html.js';
import { COURSE_BY_KEY } from '../registry.js';
import { inline, plain, TeX, useTr } from './text.jsx';
import { closeDock, moveDock, useDock } from './dockStore.js';
import { K } from './strings.js';
import './kit.css';

const cache = new Map();
function useFormulas(k) {
  const [data, setData] = useState(() => cache.get(k) || null);
  useEffect(() => {
    if (!k || cache.has(k)) { setData(cache.get(k) || null); return undefined; }
    let alive = true;
    const load = COURSE_BY_KEY[k] && COURSE_BY_KEY[k].formulas;
    if (load) load().then((m) => { cache.set(k, m.default); if (alive) setData(m.default); });
    return () => { alive = false; };
  }, [k]);
  return data;
}

/**
 * Formulari flotant: una finestra que es pot moure, redimensionar i minimitzar, i que es
 * queda oberta mentre es navega per la web. A pantalles estretes és un full a la part de baix.
 */
export default function FormulaDock() {
  const d = useDock();
  const { ui } = useLang();
  const S = K[ui].dock;
  const tr = useTr();
  const data = useFormulas(d.k);
  const [q, setQ] = useState('');
  const box = useRef(null);
  const drag = useRef(null);

  // posició inicial: a la dreta, a sota de la barra
  const x = d.x ?? Math.max(8, window.innerWidth - d.w - 24);
  const y = d.y ?? 76;

  const onDown = (e) => {
    // els botons de la capçalera no arrosseguen (la captura del punter els prendria el clic)
    if (e.button !== 0 || window.innerWidth < 640 || e.target.closest('button')) return;
    // des de la posició real (la mida desada pot haver mogut la finestra des de l'últim render)
    drag.current = { sx: e.clientX, sy: e.clientY, x: box.current.offsetLeft, y: box.current.offsetTop };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const nx = Math.min(Math.max(0, drag.current.x + e.clientX - drag.current.sx), window.innerWidth - 120);
    const ny = Math.min(Math.max(60, drag.current.y + e.clientY - drag.current.sy), window.innerHeight - 40);
    box.current.style.left = nx + 'px';
    box.current.style.top = ny + 'px';
  };
  const onUp = () => {
    if (!drag.current) return;
    drag.current = null;
    moveDock({ x: parseInt(box.current.style.left, 10), y: parseInt(box.current.style.top, 10) });
  };
  // desa la mida quan es redimensiona (resize: both)
  useEffect(() => {
    const el = box.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    let t = 0;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(() => {
        // només si l'alumne l'ha redimensionat de debò (si no, cada desada tornaria a avisar)
        if (d.min || window.innerWidth < 640 || drag.current) return;
        if (Math.abs(el.offsetWidth - d.w) > 2 || Math.abs(el.offsetHeight - d.h) > 2) moveDock({ w: el.offsetWidth, h: el.offsetHeight });
      }, 300);
    });
    ro.observe(el);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, [d.min, d.w, d.h]);
  // Escape tanca
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && !e.defaultPrevented) closeDock(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const groups = useMemo(() => {
    if (!data) return [];
    const qq = fold(q.trim());
    return data.groups.map((g) => ({
      ...g,
      items: g.items.filter((f) => !qq || fold(plain(tr(f.t)) + ' ' + (tr(f.tex) || '') + ' ' + plain(tr(f.x || '')) + ' ' + plain(tr(f.note || ''))).includes(qq)),
    })).filter((g) => g.items.length);
  }, [data, q, tr]);

  const focus = new Set(d.focus || []);
  const course = COURSE_BY_KEY[d.k];
  return (
    <section ref={box} className={'kit-dock' + (d.min ? ' is-min' : '')} role="dialog" aria-label={S.title}
      style={{ left: x, top: y, width: d.min ? undefined : d.w, height: d.min ? undefined : d.h }}>
      <header className="kit-dock-h" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} title={S.drag}>
        <span className="kit-dock-t">{S.title}{course ? ' · ' + tr(course.title) : ''}</span>
        <button type="button" className="kit-dock-b" aria-label={d.min ? S.max : S.min} title={d.min ? S.max : S.min} onClick={() => moveDock({ min: !d.min })}>{d.min ? '▢' : '–'}</button>
        <button type="button" className="kit-dock-b" aria-label={S.close} title={S.close} onClick={closeDock}>×</button>
      </header>
      {!d.min && (
        <div className="kit-dock-body">
          <input type="search" className="am-input kit-dock-q" placeholder={S.search} aria-label={S.search} value={q} onChange={(e) => setQ(e.target.value)} />
          {!data ? <p className="kit-loading">{K[ui].loading}</p> : !groups.length ? <p className="kit-muted">{S.none}</p> : groups.map((g) => (
            <div key={(g.unit || '') + '·' + plain(tr(g.t))} className="kit-fg">
              <h3>{inline(tr(g.t))}</h3>
              <dl>
                {g.items.map((f) => (
                  <div key={f.id} className={'kit-f' + (focus.has(f.id) ? ' is-focus' : '')} data-f={f.id}>
                    <dt>{inline(tr(f.t))}</dt>
                    <dd>{f.tex ? <TeX tex={tr(f.tex)} display /> : inline(tr(f.x))}{f.note && <small>{inline(tr(f.note))}</small>}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
