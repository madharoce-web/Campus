import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { LABM } from '../content/core.js';
import Lab from '../labs/index.jsx';
import { BASE } from '../routes.js';

/** Cos d'una secció: HTML de la teoria amb els laboratoris intercalats com a components. */
export const RichWithLabs = memo(function RichWithLabs({ html }) {
  const parts = useMemo(() => html.split(LABM), [html]);
  return parts.map((p, i) => {
    if (i % 2) { const [w, id, cfg] = JSON.parse(p); return <Lab key={id} w={w} id={id} cfg={cfg} />; }
    return p ? <Rich key={'h' + i} className="rc" html={p} /> : null;
  });
});

/** Pàgina de teoria (T1, T2.1, T2.2): índex lateral amb seguiment de la lectura i seccions. */
export default function Doc({ k }) {
  const { lang, L } = useLang();
  const navigate = useNavigate();
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
    navigate(BASE + '/' + id, { replace: true, state: { toc: true } });
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
        <div className="content">
          {secs.map((s) => (
            <section key={s.id} className="sec" id={s.id} ref={(el) => { secEls.current[s.id] = el; }}>
              <h2>{s.t()}</h2>
              <RichWithLabs html={s.b()} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
