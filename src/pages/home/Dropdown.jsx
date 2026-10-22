import { useEffect, useRef, useState } from 'react';
import { Chevron } from '../../app/icons.jsx';

/**
 * Desplegable de l'aula virtual (filtre, ordenació, visualització i accions de curs).
 * Es tanca amb un clic a fora o amb Escape; les fletxes mouen el focus pel menú.
 */
export default function Dropdown({ id, kebab, label, ariaLabel, button, items, current, onSelect, right }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null), btn = useRef(null), menu = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (!wrap.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    const f = menu.current?.querySelector('[aria-checked="true"]') || menu.current?.querySelector('button');
    f?.focus();
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const onMenuKey = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const list = [...menu.current.querySelectorAll('button')];
    const i = list.indexOf(document.activeElement);
    list[(i + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length]?.focus();
  };

  return (
    <div ref={wrap} className={'m-dd' + (kebab ? ' m-kebab' : '')} data-dd={id} data-kebab={kebab}>
      <button ref={btn} type="button" className={kebab ? 'm-kbtn' : 'm-ddbtn'} aria-haspopup="menu" aria-expanded={open}
        aria-label={ariaLabel} onClick={() => setOpen((o) => !o)}>
        {button ?? <>{label}<Chevron /></>}
      </button>
      <div ref={menu} className={'m-ddmenu' + (right ? ' m-right' : '')} role="menu" hidden={!open} onKeyDown={onMenuKey}>
        {items.map((it) => (
          <button key={it.v} type="button" role={current !== undefined ? 'menuitemradio' : 'menuitem'}
            data-v={current !== undefined ? it.v : undefined} data-act={current === undefined ? it.v : undefined}
            aria-checked={current !== undefined ? it.v === current : undefined}
            onClick={() => { setOpen(false); onSelect(it.v); btn.current?.focus(); }}>
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}
