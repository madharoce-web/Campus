import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../lib/i18n.jsx';
import { markTour, useCampus } from '../lib/campus.js';

const T = {
  ca: { next: 'Següent', prev: 'Enrere', done: 'Entesos', skip: 'Salta el tutorial', of: '%a de %b' },
  es: { next: 'Siguiente', prev: 'Atrás', done: 'Entendido', skip: 'Saltar el tutorial', of: '%a de %b' },
  en: { next: 'Next', prev: 'Back', done: 'Got it', skip: 'Skip the tour', of: '%a of %b' },
};

/** Rectangle visible d'un element (o null si no hi és o està amagat). */
function rectOf(sel) {
  const el = sel && document.querySelector(sel);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return r.width && r.height ? r : null;
}

/**
 * Tutorial de primera visita: ressalta una part de la pantalla per pas, amb una explicació breu.
 * steps: [{ sel?, title: [ca, es, en], body: [ca, es, en] }]. Un pas sense sel (o sense element)
 * surt centrat. Es mostra una sola vegada per id (lib/campus.js: tour) i només quan el campus ja
 * està configurat (o when: true). Esc o «Salta» el tanquen; amb el teclat es pot fer tot.
 */
export default function Tour({ id, steps, when = true }) {
  const { ui, t } = useLang();
  const L = T[ui];
  const campus = useCampus();
  const show = when && !campus.tour[id];
  const [i, setI] = useState(0);
  const [rect, setRect] = useState(null);
  const box = useRef(null);
  const step = steps[i];

  const close = useCallback(() => markTour(id), [id]);
  const place = useCallback(() => setRect(rectOf(step && step.sel)), [step]);

  useLayoutEffect(() => {
    if (!show || !step) return undefined;
    const el = step.sel && document.querySelector(step.sel);
    if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
    place();
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [show, step, place]);

  useEffect(() => { if (show) box.current?.focus(); }, [show, i]);
  useEffect(() => {
    if (!show) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, close]);

  if (!show || !step) return null;
  const last = i === steps.length - 1;
  const pad = 6;
  // la bombolla, a sota de l'element si hi cap; si no, a sobre; sense element, al centre
  const W = Math.min(340, window.innerWidth - 24);
  let pos = { left: (window.innerWidth - W) / 2, top: window.innerHeight / 2 - 90 };
  if (rect) {
    const below = rect.bottom + 14 + 170 < window.innerHeight;
    pos = {
      left: Math.max(12, Math.min(rect.left, window.innerWidth - W - 12)),
      top: below ? rect.bottom + pad + 10 : Math.max(12, rect.top - pad - 10 - 170),
    };
  }
  return createPortal(
    <div className="am-tour" role="presentation">
      {rect
        ? <div className="am-tour-hole" style={{ left: rect.left - pad, top: rect.top - pad, width: rect.width + pad * 2, height: rect.height + pad * 2 }} />
        : <div className="am-tour-dim" />}
      <div ref={box} className="am-tour-box" role="dialog" aria-modal="true" aria-labelledby="am-tour-h" tabIndex={-1} key={i} style={{ ...pos, width: W }}>
        <p className="am-tour-n">{L.of.replace('%a', i + 1).replace('%b', steps.length)}</p>
        <h2 id="am-tour-h">{t(step.title)}</h2>
        <p>{t(step.body)}</p>
        <div className="am-tour-acts">
          <button type="button" className="am-tour-skip" onClick={close}>{L.skip}</button>
          {i > 0 && <button type="button" className="am-btn am-btn-outline" onClick={() => setI(i - 1)}>{L.prev}</button>}
          <button type="button" className="am-btn am-btn-primary" id="am-tour-next" onClick={() => (last ? close() : setI(i + 1))}>{last ? L.done : L.next}</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
