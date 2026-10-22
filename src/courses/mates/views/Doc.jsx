import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { RichParts } from '../richparts.jsx';
import { renderMark } from '../labs/index.jsx';
import { useStore } from '../store.js';
import { BASE, pathOf } from '../routes.js';
import { BK0, bkNew } from '../bankmodel.js';

/** Pàgina de teoria: índex lateral amb seguiment de la lectura i seccions amb laboratoris i passos. */
export default function Doc({ k }) {
  const { lang, L } = useLang();
  const navigate = useNavigate();
  const store = useStore();
  const { TH, PAGE } = getContent(lang);
  const [eb, h, lead] = PAGE[k]();
  const secs = TH[k];
  const [on, setOn] = useState(null);
  const secEls = useRef({});

  // índex: marca la secció que s'està llegint
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) setOn(e.target.id); }); }, { rootMargin: '-120px 0px -60% 0px' });
    Object.values(secEls.current).forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, [k]);

  const toc = (e, id) => {
    e.preventDefault();
    const t = secEls.current[id];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    navigate(BASE + '/' + id, { replace: true, state: { keep: true } });
  };

  // accés directe al banc des de la teoria (botons data-hzgo: tema «Ordres i Hasse» i nivell)
  const onClick = (e) => {
    const b = e.target.closest && e.target.closest('[data-hzgo]');
    if (!b) return;
    e.preventDefault();
    store.set('bk', (bk) => bkNew(getContent(lang), { ...(bk || BK0), t: 'hasse', lv: +b.dataset.hzgo || 1, items: [] }));
    navigate(pathOf('banc'));
  };

  return (
    <>
      <div className="pagehead"><div className="eyebrow">{eb}</div><h2>{h}</h2><p className="lead">{lead}</p></div>
      <div className="doc">
        <nav className="toc" aria-label={L('Índex de la pàgina', 'Índice de la página')}>
          <div className="tt">{L('En aquesta pàgina', 'En esta página')}</div>
          {secs.map((s) => (
            <Link key={s.id} to={BASE + '/' + s.id} data-sec={s.id} className={on === s.id ? 'on' : undefined} onClick={(e) => toc(e, s.id)}>
              {s.t()}{s.lab ? <span className="dot" title={L('Té laboratori', 'Tiene laboratorio')}></span> : null}
            </Link>
          ))}
        </nav>
        <div className="content" onClick={onClick}>
          {secs.map((s) => (
            <section key={s.id} className="sec" id={s.id} ref={(el) => { secEls.current[s.id] = el; }}>
              <h2>{s.t()}</h2>
              <RichParts html={s.b()} renderMark={renderMark} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
