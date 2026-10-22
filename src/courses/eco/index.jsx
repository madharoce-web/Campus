import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import { T as SHELL_T } from '../../app/strings.js';
import Rich from '../../lib/Rich.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';
import Boundary from '../_doc/Boundary.jsx';
import DocShell from '../_doc/DocShell.jsx';
import Search from '../_doc/Search.jsx';
import { prepare } from '../_doc/search.js';
import { createStore, StoreContext } from '../_doc/store.js';
import { useLangData } from '../_doc/useLangData.js';
import ResolveAnchor from '../_doc/ResolveAnchor.jsx';
import Art from './art.jsx';
import Practice from './Practice.jsx';
import Fpp from './labs/Fpp.jsx';
import Market from './labs/Market.jsx';
import Chain from './labs/Chain.jsx';
import { NAMES, STR, SUBJ, TAGS } from './strings.js';
import './eco.css';
import './skin.css';

const BASE = '/economia';
const KEY = 'eco-state';
const WHERE = (e) => BASE + '/' + e.s; // pàgina d'una entrada de l'índex
// teoria i pràctica de cada idioma (≈ 750 kB): es carreguen sota demanda
const LOADERS = { ca: () => import('./data/docs.ca.json'), es: () => import('./data/docs.es.json') };
const LABS = { fpp: Fpp, mercat: Market, cadena: Chain };

const savedSubject = () => { const o = lsJSON(KEY, null); return o && SUBJ.includes(o.s) ? o.s : 't1'; };
const hrefOf = (e) => BASE + '/' + e.s + (e.a ? '#' + e.a : '');

/** Cos d'un tema: HTML de la teoria amb els laboratoris intercalats com a components. */
const Body = memo(function Body({ segs }) {
  return segs.map((x, i) => {
    if (typeof x === 'string') return <Rich key={i} html={x} />;
    const Lab = LABS[x.lab];
    return Lab ? <Boundary key={i}><Lab /></Boundary> : null;
  });
});

function EcoCourse({ s }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { data, lang: dl, err, retry } = useLangData(LOADERS, lang);

  // mateix format que l'original: { s: tema, l: idioma }
  useEffect(() => { lsSetJSON(KEY, { s, l: lang }); }, [s, lang]);

  const d = data && data.docs[s];
  const index = useMemo(() => (data ? prepare(data.index) : []), [data]);
  const toc = useMemo(() => (d ? d.toc.filter((t) => t.lvl > 1).map((t) => ({ li: 'l' + t.lvl, to: BASE + '/' + s + '#' + t.anchor, text: t.text, a: t.anchor })) : []), [d, s]);
  const anchors = useMemo(() => toc.map((t) => t.a), [toc]);
  const T = STR[lang];
  const picker = SUBJ.map((k) => {
    const doc = data && data.docs[k];
    return {
      k, to: BASE + '/' + k, name: NAMES[lang][k], c: 'var(--' + k + ')', b: 'var(--' + k + '-soft)',
      ct: !doc ? '' : k === 'prac' ? doc.nex + ' ' + T.ex : 'T' + k.slice(1) + ' · ' + doc.nsec + ' ' + T.secs,
    };
  });
  const onGo = useCallback((e) => navigate(hrefOf(e)), [navigate]);
  const tag = useCallback((e) => [e.s, TAGS[lang][e.s]], [lang]);

  let body;
  if (d) {
    const S = STR[dl];
    body = (
      <>
        <div className="head">
          <div className="head-txt"><p className="eyebrow">{S.eyebrow}</p><Rich as="h1" id={d.h1.id} html={d.h1.html} /></div>
          <Art s={s} li={dl === 'es' ? 1 : 0} lv={S.lv} />
        </div>
        {s === 'prac' ? <Boundary><Practice doc={d} /></Boundary> : <Body segs={d.body} />}
      </>
    );
  } else if (err) {
    body = (
      <div className="app-err" role="alert">
        <p>{SHELL_T[lang].loadErr}</p>
        <button type="button" className="btn pri" onClick={retry}>{SHELL_T[lang].retry}</button>
      </div>
    );
  } else {
    body = <div className="app-loading" role="status"><span className="app-spin" aria-hidden="true" />{SHELL_T[lang].loading}</div>;
  }

  return (
    <DocShell k="eco" page={s} lang={dl} ready={!!d} picker={picker} current={s} toc={toc} anchors={anchors} foot={d ? d.title : ''}
      search={<Search index={index} tag={tag} href={hrefOf} onGo={onGo} placeholder={T.ph} none={T.none} />}>
      {body}
    </DocShell>
  );
}

/** Principis d'economia: /economia (darrer tema obert) i /economia/t1, t2, t3, prac (+ #secció). */
export default function Course() {
  const key = useParams()['*'] || '';
  const { hash } = useLocation();
  const [store] = useState(createStore); // estat de la visita (laboratoris, respostes, filtres)
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  let redirect = null;
  if (!key && SUBJ.includes(h)) redirect = BASE + '/' + h; // enllaç antic: /economia#t2
  const s = SUBJ.includes(key) ? key : savedSubject();
  return (
    <CourseScope k="eco" data-subject={s}>
      <StoreContext.Provider value={store}>
        {redirect ? <Navigate replace to={redirect} />
          : key && !SUBJ.includes(key) ? <ResolveAnchor id={key} loaders={LOADERS} base={BASE} where={WHERE} />
            : <EcoCourse s={s} />}
      </StoreContext.Provider>
    </CourseScope>
  );
}
