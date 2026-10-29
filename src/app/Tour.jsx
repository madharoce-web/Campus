import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../lib/i18n.jsx';
import { markTour, useCampus } from '../lib/campus.js';

const T = {
  ca: { next: 'Següent', prev: 'Enrere', done: 'Comença', skip: 'Salta el tutorial', of: 'Pas %a de %b', go: 'Ves al pas %a' },
  es: { next: 'Siguiente', prev: 'Atrás', done: 'Empieza', skip: 'Saltar el tutorial', of: 'Paso %a de %b', go: 'Ir al paso %a' },
  en: { next: 'Next', prev: 'Back', done: 'Start', skip: 'Skip the tour', of: 'Step %a of %b', go: 'Go to step %a' },
};
const PAD = 8, GAP = 16, EDGE = 12;

/** Rectangle visible d'un element (o null si no hi és o està amagat). */
function rectOf(sel) {
  const el = sel && document.querySelector(sel);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return r.width && r.height ? r : null;
}

/**
 * On va la bombolla: a sota de l'element si hi cap, si no a sobre, i si tampoc (l'element és molt alt
 * o la pantalla molt baixa), arran de la part de baix de la pantalla. La fletxa apunta al centre de
 * l'element. Sense element, al centre.
 */
function placeBox(rect, w, h) {
  const vw = window.innerWidth, vh = window.innerHeight;
  if (!rect) return { left: (vw - w) / 2, top: Math.max(EDGE, (vh - h) / 2), side: null };
  const left = Math.max(EDGE, Math.min(rect.left + rect.width / 2 - w / 2, vw - w - EDGE));
  const arrow = Math.max(22, Math.min(rect.left + rect.width / 2 - left, w - 22));
  const bottom = Math.min(rect.bottom + PAD, vh), top = Math.max(rect.top - PAD, 0);
  if (vh - bottom - GAP >= h + EDGE) return { left, top: bottom + GAP, side: 'below', arrow };
  if (top - GAP >= h + EDGE) return { left, top: top - GAP - h, side: 'above', arrow };
  return { left, top: vh - h - EDGE, side: null };
}

/** Dibuix animat dels passos de benvinguda i de final (decoratiu). */
function Art({ kind }) {
  if (kind === 'done') {
    return (
      <svg className="am-tour-art is-done" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" />
        <path d="M20 33l8 8 16-17" />
      </svg>
    );
  }
  return (
    <svg className="am-tour-art" viewBox="0 0 120 64" aria-hidden="true">
      <path className="am-tour-art-l" d="M20 44 L50 18 L82 40 L104 16" />
      <circle cx="20" cy="44" r="7" /><circle cx="50" cy="18" r="7" /><circle cx="82" cy="40" r="7" /><circle cx="104" cy="16" r="7" />
    </svg>
  );
}

/**
 * Tutorial de primera visita: ressalta una part de la pantalla per pas, amb una explicació breu.
 * steps: [{ sel?, title: [ca, es, en], body: [ca, es, en], art?: 'hello' | 'done' }]. Un pas sense sel
 * (o sense element) surt centrat. %n als textos és el nom de qui mira. Es mostra una sola vegada per id
 * (lib/campus.js: tour) i només quan el campus ja està configurat (o when: true).
 * Esc o «Salta» el tanquen; les fletxes ← → canvien de pas.
 */
export default function Tour({ id, steps, when = true }) {
  const { ui, t } = useLang();
  const L = T[ui];
  const campus = useCampus();
  const show = when && !campus.tour[id];
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [rect, setRect] = useState(null);
  const [size, setSize] = useState({ h: 190 });
  const box = useRef(null);
  const step = steps[i];
  const last = i === steps.length - 1;

  const close = useCallback(() => markTour(id), [id]);
  const go = useCallback((n) => { if (n < 0 || n >= steps.length) return; setDir(n > i ? 1 : -1); setI(n); }, [i, steps.length]);
  const place = useCallback(() => setRect(rectOf(step && step.sel)), [step]);

  useLayoutEffect(() => {
    if (!show || !step) return undefined;
    const el = step.sel && document.querySelector(step.sel);
    // un element més alt que la pantalla es mostra des de dalt; la resta, centrat
    if (el) el.scrollIntoView({ block: el.getBoundingClientRect().height > window.innerHeight * 0.6 ? 'start' : 'center', behavior: 'instant' });
    place();
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [show, step, place]);

  // l'alçada real de la bombolla (depèn del text i de l'amplada) per col·locar-la sense tapar res
  useLayoutEffect(() => {
    if (!show || !box.current) return;
    const h = box.current.offsetHeight;
    if (Math.abs(h - size.h) > 1) setSize({ h });
  }, [show, i, rect, ui, size.h]);

  useEffect(() => { if (show) box.current?.focus({ preventScroll: true }); }, [show, i]);
  useEffect(() => {
    if (!show) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') { if (last) close(); else go(i + 1); }
      else if (e.key === 'ArrowLeft') go(i - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, close, go, i, last]);

  if (!show || !step) return null;
  const W = Math.min(360, window.innerWidth - EDGE * 2);
  const pos = placeBox(rect, W, size.h);
  // el forat del focus no surt de la pantalla (elements més alts que la finestra)
  const hole = rect
    ? { left: rect.left - PAD, top: Math.max(rect.top - PAD, 4), width: rect.width + PAD * 2, height: Math.min(rect.bottom + PAD, window.innerHeight - 4) - Math.max(rect.top - PAD, 4) }
    : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  const fill = (s) => t(s).replace('%n', campus.name ? ', ' + campus.name.split(' ')[0] : '');

  return createPortal(
    <div className="am-tour" role="presentation">
      <div className={'am-tour-hole' + (rect ? ' is-on' : '')} style={hole} />
      <div ref={box} className={'am-tour-box' + (pos.side ? ' is-' + pos.side : '')} role="dialog" aria-modal="true" aria-labelledby="am-tour-h" aria-describedby="am-tour-p" tabIndex={-1}
        style={{ left: pos.left, top: pos.top, width: W, '--arrow': (pos.arrow || 0) + 'px' }}>
        <div className="am-tour-bar" aria-hidden="true"><span style={{ width: ((i + 1) / steps.length) * 100 + '%' }} /></div>
        <div key={i} className={'am-tour-in ' + (dir > 0 ? 'from-r' : 'from-l')}>
          {step.art && <Art kind={step.art} />}
          <p className="am-tour-n">{L.of.replace('%a', i + 1).replace('%b', steps.length)}</p>
          <h2 id="am-tour-h">{fill(step.title)}</h2>
          <p id="am-tour-p">{fill(step.body)}</p>
        </div>
        <div className="am-tour-foot">
          <div className="am-tour-dots">
            {steps.map((_, k) => (
              <button key={k} type="button" className={'am-tour-dot' + (k === i ? ' is-on' : k < i ? ' is-past' : '')} aria-label={L.go.replace('%a', k + 1)} aria-current={k === i ? 'step' : undefined} onClick={() => go(k)} />
            ))}
          </div>
          <div className="am-tour-acts">
            {i > 0 && <button type="button" className="am-tour-btn" onClick={() => go(i - 1)}><span aria-hidden="true">←</span> {L.prev}</button>}
            <button type="button" className="am-tour-btn is-primary" id="am-tour-next" onClick={() => (last ? close() : go(i + 1))}>
              {last ? L.done : <>{L.next} <span aria-hidden="true">→</span></>}
            </button>
          </div>
        </div>
        {!last && <button type="button" className="am-tour-skip" onClick={close}>{L.skip}</button>}
      </div>
    </div>,
    document.body,
  );
}
