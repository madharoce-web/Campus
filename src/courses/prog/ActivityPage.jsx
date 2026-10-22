import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { PAGES, PG, WEEKS, loadPage, tx } from './data.js';
import Nodes from './Content.jsx';
import { CiOpen } from './CoursePage.jsx';
import { I } from './icons.jsx';

/** Pàgina de teoria o de pràctica: capçalera, «marca com a fet», metadades, índex, contingut i navegació. */
export default function ActivityPage({ id, anchor, done, onDone, onOpenCI }) {
  const { lang, L } = useLang();
  const p = PG[id], idx = PAGES.indexOf(p), prev = PAGES[idx - 1], next = PAGES[idx + 1];
  const kind = p.kind === 'lab' ? 'lab' : 'page';
  const title = tx(p.t, lang), week = L('Setmana ', 'Semana ') + p.wk;
  const course = L('Iniciació a la Programació', 'Iniciación a la Programación');

  // contingut de la pàgina (fragment per idioma); en canviar d'idioma es manté l'anterior fins que arriba el nou
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    let alive = true;
    loadPage(lang, id).then(
      (data) => { if (alive) setDoc({ id, data }); },
      () => { if (alive) setDoc({ id, data: null }); },
    );
    return () => { alive = false; };
  }, [id, lang]);
  const cur = doc && doc.id === id ? doc : null;
  const ready = !!cur;

  // enllaç directe a un apartat: /programacio/<pàgina>/<apartat>
  useEffect(() => {
    if (!ready || !anchor) return;
    const t = document.getElementById(anchor);
    if (t) t.scrollIntoView(); else window.scrollTo(0, 0);
  }, [ready, id, anchor]);

  const toc = cur && cur.data ? cur.data.toc : [];
  const toTarget = (e, x) => { e.preventDefault(); document.getElementById(x)?.scrollIntoView(); };

  return (
    <>
      <header className="m-hd">
        <nav className="m-crumbs" aria-label={L('Molles de pa', 'Migas de pan')}>
          <Link to="/cursos">{L('Els meus cursos', 'Mis cursos')}</Link>
          <span className="m-sep">/</span><Link to="/programacio">{course}</Link>
          <span className="m-sep">/</span><Link to="/programacio">{week}</Link>
          <span className="m-sep">/</span><span>{title}</span>
        </nav>
        <div className="ip-ph">
          <CiOpen onOpen={onOpenCI} />
          <span className={'ip-actico ' + kind}>{I[kind]}</span>
          <h1>{title}</h1>
        </div>
      </header>
      <div className="ip-compl">
        {done
          ? <button type="button" className="ip-btn ok sm" data-undone={id} onClick={() => onDone(id, false)}>{I.check}{L('Fet', 'Hecho')}</button>
          : <button type="button" className="ip-btn out sm" data-done={id} onClick={() => onDone(id, true)}>{L('Marca com a fet', 'Marcar como hecho')}</button>}
        <span className="ip-badge">{week + ' · ' + tx(WEEKS[p.wk].dates, lang)}</span>
        <span className="ip-badge">{p.kind === 'lab' ? L('Pràctica de laboratori (C++)', 'Práctica de laboratorio (C++)') : L('Teoria', 'Teoría')}</span>
      </div>
      {p.meta ? (
        <dl className="ip-meta">
          {p.meta.map((m, i) => <Fragment key={i}><dt>{tx(m[0], lang)}</dt><dd>{tx(m[1], lang)}</dd></Fragment>)}
        </dl>
      ) : null}
      {toc.length > 2 ? (
        <div className="ip-toc" id="ip-toc">
          <b>{L('En aquesta pàgina', 'En esta página')}</b>
          <ol>{toc.map((x) => <li key={x.id}><Link to={'/programacio/' + id + '/' + x.id} onClick={(e) => toTarget(e, x.id)}>{x.text}</Link></li>)}</ol>
        </div>
      ) : null}
      <article className="ip-doc" id="ip-doc" key={id}>
        {cur ? (cur.data ? <Nodes nodes={cur.data.nodes} /> : <p>{L('Contingut no disponible.', 'Contenido no disponible.')}</p>) : null}
      </article>
      <nav className="ip-pn" aria-label={L('Activitats', 'Actividades')}>
        {prev ? <Link to={'/programacio/' + prev.id}><small>◀ {L('Activitat anterior', 'Actividad anterior')}</small>{tx(prev.t, lang)}</Link> : <span />}
        {next ? <Link className="nx" to={'/programacio/' + next.id}><small>{L('Activitat següent', 'Actividad siguiente')} ▶</small>{tx(next.t, lang)}</Link> : null}
      </nav>
    </>
  );
}
