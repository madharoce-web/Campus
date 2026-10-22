import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import Quiz from './components/Quiz.jsx';
import { TruthTool, UnifyTool } from './components/Tools.jsx';
import Bank from './components/Bank.jsx';
import Sim from './components/Sim.jsx';
import { OrderLab, QuantLab } from './components/Labs.jsx';
import './logica.css';
import './skin.css';

const BASE = '/logica';
const KEY = 'lig-state';
const SUBJ = ['logica', 'grafs'];
/** Unitats i pàgines del mòdul de lògica (les claus de l'original). */
const UNITS = ['u0', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9', 'fs', 'xr', 'xa', 'xb', 'xe', 'xf', 'sim'];
const WHERE = (e) => BASE + '/' + (e.u || e.s); // pàgina d'una entrada de l'índex
// lògica (unitats) i grafs de cada idioma (≈ 400 kB): es carreguen sota demanda
const LOADERS = { ca: () => import('./data/docs.ca.json'), es: () => import('./data/docs.es.json') };

const STR = {
  ca: { eyebrow: 'Seminari Lògica i grafs · Bàtxelor en Informàtica', ph: 'Cerca a tota la teoria…', none: 'Cap resultat', secs: 'seccions', units: 'apartats',
    prev: 'Anterior', next: 'Següent', gT: 'Teoria', gX: "Exercicis d'examen", logica: 'Lògica', grafs: 'Grafs' },
  es: { eyebrow: 'Seminario Lógica y grafos · Bachelor en Informática', ph: 'Busca en toda la teoría…', none: 'Sin resultados', secs: 'secciones', units: 'apartados',
    prev: 'Anterior', next: 'Siguiente', gT: 'Teoría', gX: 'Ejercicios de examen', logica: 'Lógica', grafs: 'Grafos' },
};

function savedState() {
  const o = lsJSON(KEY, null) || {};
  return { s: o.s === 'grafs' ? 'grafs' : 'logica', u: UNITS.includes(o.u) ? o.u : 'u0' };
}
const hrefOf = (e) => BASE + '/' + (e.u || e.s) + (e.a ? '#' + e.a : '');

/** Cos d'una unitat: HTML amb els qüestionaris, les calculadores, els laboratoris, el banc i el simulacre. */
const Body = memo(function Body({ u, segs }) {
  return segs.map((x, i) => {
    if (typeof x === 'string') return <Rich key={i} html={x} />;
    const id = u + '-' + i;
    let el = null;
    if (x.quiz) el = <Quiz id={id} q={x.quiz} />;
    else if (x.tool === 'tt') el = <TruthTool id={id} f={x.f} />;
    else if (x.tool === 'unif') el = <UnifyTool id={id} a={x.a} b={x.b} />;
    else if (x.bank) el = <Bank kind={x.bank} />;
    else if (x.sim) el = <Sim />;
    else if (x.lab === 'quant') el = <QuantLab />;
    else if (x.lab === 'order') el = <OrderLab />;
    return el && <Boundary key={i}>{el}</Boundary>;
  });
});

function LgCourse({ s, u }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { data, lang: dl, err, retry } = useLangData(LOADERS, lang);
  const T = STR[lang];

  // mateix format que l'original: { s: document, l: idioma, u: unitat }
  useEffect(() => { lsSetJSON(KEY, { s, l: lang, u }); }, [s, lang, u]);

  const d = data && data[s];
  const units = data && data.logica.units;
  const un = s === 'logica' && units ? (units.find((x) => x.u === u) || units[0]) : null;
  const index = useMemo(() => (data ? prepare(data.index) : []), [data]);

  const toc = useMemo(() => {
    if (!d) return [];
    const S = STR[dl], out = [];
    if (un) {
      let lastG = null;
      d.units.forEach((x) => {
        if (x.g !== lastG) { out.push({ part: x.g === 'x' ? S.gX : S.gT }); lastG = x.g; }
        const on = x.u === un.u;
        out.push({ li: 'lu' + (on ? ' cur' : ''), to: BASE + '/' + x.u, text: x.t, cls: 'xu', cur: on });
        if (on) x.toc.forEach((t) => { if (t.lvl === 2) out.push({ li: 'l3', to: BASE + '/' + x.u + '#' + t.anchor, text: t.text, a: t.anchor }); });
      });
    } else {
      const n1 = d.toc.filter((t) => t.lvl === 1).length;
      let parts = 0;
      d.toc.forEach((t) => {
        if (t.lvl === 1) { if (parts++ > 0 || n1 > 1) out.push({ part: t.text }); return; }
        out.push({ li: 'l' + t.lvl, to: BASE + '/grafs#' + t.anchor, text: t.text, a: t.anchor });
      });
    }
    return out;
  }, [d, un, dl]);
  const anchors = useMemo(() => toc.filter((t) => t.a).map((t) => t.a), [toc]);

  const picker = SUBJ.map((k) => {
    const doc = data && data[k];
    return {
      k, to: BASE + '/' + (k === 'logica' ? u : 'grafs'), name: T[k], c: 'var(--' + k + ')', b: 'var(--' + k + '-soft)',
      ct: !doc ? '' : doc.units ? doc.units.length + ' ' + T.units : doc.nsec + ' ' + T.secs,
    };
  });
  const onGo = useCallback((e) => navigate(hrefOf(e)), [navigate]);
  const tag = useCallback((e) => [e.s, STR[lang][e.s]], [lang]);

  let body;
  if (d) {
    const S = STR[dl], li = dl === 'es' ? 1 : 0;
    const showArt = !un || un.u === units[0].u;
    const h1 = un ? un.h1 : d.h1;
    let nav = null;
    if (un) {
      const i = units.indexOf(un), p = units[i - 1], n = units[i + 1];
      nav = (
        <nav className="lu-nav">
          {p ? <Link className="xu lu-prev" data-u={p.u} to={BASE + '/' + p.u}><span>{S.prev}</span>{p.t}</Link> : <span></span>}
          {n ? <Link className="xu lu-next" data-u={n.u} to={BASE + '/' + n.u}><span>{S.next}</span>{n.t}</Link> : <span></span>}
        </nav>
      );
    }
    body = (
      <>
        <div className="head">
          <div className="head-txt">
            <p className="eyebrow">{un ? (un.g === 'x' ? S.gX : S.gT) : S.eyebrow}</p>
            <Rich as="h1" id={h1.id || undefined} html={h1.html} />
          </div>
          {showArt && <Art s={s} li={li} />}
        </div>
        {un ? <Body key={un.u} u={un.u} segs={un.body} /> : <Body u="grafs" segs={d.body} />}
        {nav}
      </>
    );
  } else if (err) {
    body = (
      <div className="app-err" role="alert">
        <p>{SHELL_T[lang].loadErr}</p>
        <button type="button" className="lx-b" onClick={retry}>{SHELL_T[lang].retry}</button>
      </div>
    );
  } else {
    body = <div className="app-loading" role="status"><span className="app-spin" aria-hidden="true" />{SHELL_T[lang].loading}</div>;
  }

  return (
    <DocShell k="logica" page={un ? 'logica/' + un.u : s} lang={dl} ready={!!d} picker={picker} current={s} toc={toc} anchors={anchors}
      foot={d ? d.title : ''} tocScroll="nearest"
      search={<Search index={index} tag={tag} href={hrefOf} onGo={onGo} placeholder={T.ph} none={T.none} strictKbd />}>
      {body}
    </DocShell>
  );
}

/**
 * Lògica i grafs: /logica (darrera pàgina oberta), /logica/logica, /logica/grafs i les unitats
 * del mòdul de lògica per la seva clau (/logica/u5, /logica/xr, /logica/sim…), amb #secció.
 */
export default function Course() {
  const key = useParams()['*'] || '';
  const { hash } = useLocation();
  const [store] = useState(createStore); // estat de la visita (respostes, calculadores, laboratoris)
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  const valid = (k) => SUBJ.includes(k) || UNITS.includes(k);
  let redirect = null;
  if (!key && valid(h)) redirect = BASE + '/' + h; // enllaç antic: /logica#u5
  const sv = savedState();
  const s = key === 'grafs' ? 'grafs' : key ? 'logica' : sv.s;
  const u = UNITS.includes(key) ? key : sv.u;
  return (
    <CourseScope k="logica" data-subject={s}>
      <StoreContext.Provider value={store}>
        {redirect ? <Navigate replace to={redirect} />
          : key && !valid(key) ? <ResolveAnchor id={key} loaders={LOADERS} base={BASE} where={WHERE} />
            : <LgCourse s={s} u={u} />}
      </StoreContext.Provider>
    </CourseScope>
  );
}
