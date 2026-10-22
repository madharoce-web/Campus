import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { search } from './search.js';

/**
 * Cercador de la capçalera: resultats destacats, navegació amb ↑ ↓ i Retorn, Escape per
 * tancar, «/» o Ctrl+K per enfocar-lo des de qualsevol lloc de la pàgina.
 * index: índex preparat (search.js); tag(e) → [classe, etiqueta]; href(e) → ruta;
 * onGo(e) obre el resultat. strictKbd: Ctrl+K no actua si el focus és en un camp (lògica).
 */
export default function Search({ index, tag, href, onGo, placeholder, none, strictKbd = false }) {
  const { L } = useLang();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [k, setK] = useState(0);
  const wrap = useRef(null), inp = useRef(null), res = useRef(null);
  const hits = useMemo(() => search(index, q), [index, q]);

  // un clic fora del cercador tanca els resultats
  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (!wrap.current || !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [open]);

  // «/» i Ctrl+K enfoquen el cercador
  useEffect(() => {
    const onKey = (e) => {
      const ae = document.activeElement, tagName = (ae && ae.tagName) || '';
      if (ae === inp.current) return;
      const slash = e.key === '/', ck = e.key === 'k' && (e.metaKey || e.ctrlKey);
      const ok = strictKbd ? (slash || ck) && !/INPUT|TEXTAREA/.test(tagName) : (slash && !/INPUT|TEXTAREA|SELECT/.test(tagName)) || ck;
      if (!ok) return;
      e.preventDefault();
      inp.current.focus();
      inp.current.select();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [strictKbd]);

  // el resultat actiu, visible dins de la llista
  useEffect(() => {
    if (!open || !res.current) return;
    const a = res.current.querySelector('a.k');
    if (a) a.scrollIntoView({ block: 'nearest' });
  }, [k, open]);

  const go = (i) => {
    const h = hits && hits[i];
    if (!h) return;
    setOpen(false);
    setQ('');
    inp.current.blur();
    onGo(h.e);
  };
  const onChange = (e) => {
    const v = e.target.value;
    setQ(v);
    setK(0);
    setOpen(search(index, v) !== null);
  };
  const onKeyDown = (e) => {
    if (e.key === 'Escape') { setQ(''); setOpen(false); inp.current.blur(); return; }
    if (!hits || !hits.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setK((x) => (x + (e.key === 'ArrowDown' ? 1 : -1) + hits.length) % hits.length);
    }
    if (e.key === 'Enter') { e.preventDefault(); go(k); }
  };

  return (
    <div className="searchwrap" ref={wrap}>
      <svg className="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /></svg>
      <input ref={inp} id="q" type="search" autoComplete="off" spellCheck="false" placeholder={placeholder}
        aria-label={L('Cerca', 'Buscar')} value={q} onChange={onChange} onKeyDown={onKeyDown} />
      <span className="kbd">/</span>
      <div ref={res} className={'res' + (open && hits ? ' on' : '')} id="res" role="listbox">
        {hits && !hits.length && <p className="none">{none}</p>}
        {hits && hits.map((h, i) => {
          const [cls, label] = tag(h.e);
          return (
            <a key={i} href={href(h.e)} data-i={i} className={i === k ? 'k' : undefined}
              onClick={(e) => { e.preventDefault(); go(i); }}>
              <span className="rh"><span className={'tag ' + cls}>{label}</span><span>{h.e.h}</span></span>
              {h.snip && <span className="rs">{h.snip.map((s, j) => (s.m ? <mark key={j}>{s.t}</mark> : s.t))}</span>}
            </a>
          );
        })}
      </div>
    </div>
  );
}
