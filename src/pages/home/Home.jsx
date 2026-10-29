import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useStoredState } from '../../lib/useStoredState.js';
import { lsGet } from '../../lib/storage.js';
import { agoText, cardVisitOf, streakOf, studyDays } from '../../lib/visits.js';
import { fold } from '../../lib/html.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { ACTIVITIES, CARDS, CARD_BY_KEY } from '../../courses/registry.js';
import { progressOf } from '../../catalog/progress.js';
import { DEGREE_BY_KEY } from '../../catalog/degrees.js';
import { mySubjects, useCampus } from '../../lib/campus.js';
import { dueCounts, useReview } from '../../lib/review.js';
import Tour from '../../app/Tour.jsx';
import { useCurtain } from '../../app/Curtain.jsx';
import { TOUR_CURSOS } from '../../app/tours.js';
import Page from '../../app/Page.jsx';
import { CalendarBlock, LinksBlock } from '../../app/blocks.jsx';
import Dropdown from './Dropdown.jsx';
import Pattern from './Pattern.jsx';
import { S } from './strings.js';
import './home.css';

const KEBAB = <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="13" r="1.5" /></svg>;
const STAR = <svg className="m-star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.2l2 4.3 4.7.5-3.5 3.2 1 4.6L8 11.5l-4.2 2.3 1-4.6L1.3 6l4.7-.5z" /></svg>;
const visit = (k) => cardVisitOf(CARD_BY_KEY[k]);
const ago = agoText;
const oneOf = (list) => (v, d) => (list.includes(v) ? v : d);

export default function Home({ view }) {
  const { ui, t } = useLang();
  const Lx = S[ui];
  const [q, setQ] = useState('');
  const [filter, setFilter] = useStoredState('sem1-filter-v', () => oneOf(['all', 'star', 'hid'])(lsGet('sem1-filter'), 'all'), oneOf(['all', 'star', 'hid']));
  const [sort, setSort] = useStoredState('sem1-sort-v', () => (lsGet('sem1-sort') === 'last' ? 'last' : 'name'), oneOf(['name', 'last']));
  const [disp, setDisp] = useStoredState('sem1-disp-v', () => oneOf(['card', 'list', 'sum'])(lsGet('sem1-disp'), 'card'), oneOf(['card', 'list', 'sum']));
  const [stars, setStars] = useStoredState('sem1-stars', [], (v) => (Array.isArray(v) ? v : []));
  const [hid, setHid] = useStoredState('sem1-hidden', [], (v) => (Array.isArray(v) ? v : []));
  useDocumentTitle(view === 'tauler' ? Lx.dash : Lx.mycourses);
  // només les assignatures triades al registre guiat (totes, si encara no se n'ha triat cap)
  const campus = useCampus();
  const MINE = mySubjects(campus, CARDS);
  const review = useReview();
  // arribada des del registre guiat: entrada animada i el tutorial, quan el teló ja s'ha aixecat
  const welcome = !!useLocation().state?.welcome;
  const curtainOff = useCurtain().phase === 'off';
  // el tutorial espera que hagin acabat d'entrar les targetes
  const [settled, setSettled] = useState(!welcome);
  useEffect(() => {
    if (!welcome || !curtainOff) return undefined;
    const id = setTimeout(() => setSettled(true), 1300);
    return () => clearTimeout(id);
  }, [welcome, curtainOff]);

  const cname = (c) => t(c.name);
  const NameLink = ({ c }) => (
    <>
      {stars.includes(c.k) && <span className="m-starw" title={Lx.starred}>{STAR}<span className="m-sr">{Lx.starred}</span></span>}
      <Link className="m-cname" to={c.to}>{cname(c)}</Link>
    </>
  );
  const Actions = ({ c }) => {
    const starred = stars.includes(c.k), hidden = hid.includes(c.k);
    return (
      <Dropdown kebab={c.k} right button={KEBAB} ariaLabel={Lx.actions + cname(c)}
        items={[{ v: starred ? 'unstar' : 'star', label: starred ? Lx.unstar : Lx.star }, { v: hidden ? 'show' : 'hide', label: hidden ? Lx.show : Lx.hide }]}
        onSelect={(act) => {
          if (act === 'star') setStars([...stars, c.k]);
          if (act === 'unstar') setStars(stars.filter((x) => x !== c.k));
          if (act === 'hide') setHid([...hid, c.k]);
          if (act === 'show') setHid(hid.filter((x) => x !== c.k));
        }} />
    );
  };

  const list = useMemo(() => {
    const qq = fold(q.trim());
    const out = MINE.filter((c) => {
      const h = hid.includes(c.k);
      if (filter === 'all' && h) return false;
      if (filter === 'hid' && !h) return false;
      if (filter === 'star' && !stars.includes(c.k)) return false;
      if (qq && !fold(t(c.name) + ' ' + t(c.cat)).includes(qq)) return false;
      return true;
    });
    if (sort === 'last') out.sort((a, b) => visit(b.k) - visit(a.k) || t(a.name).localeCompare(t(b.name)));
    else out.sort((a, b) => t(a.name).localeCompare(t(b.name)));
    return out;
  }, [q, filter, sort, stars, hid, t, MINE]);

  const grid = () => {
    if (!list.length) return (
      <div className="m-empty">
        <svg viewBox="0 0 64 48" aria-hidden="true"><rect x="6" y="6" width="52" height="36" rx="4" /><path d="M6 18h52M18 30h28" /></svg>
        <p><b>{Lx.none}</b></p><p className="m-muted">{Lx.noneHint}</p>
      </div>
    );
    if (disp === 'card') return (
      <div className="m-cgrid">
        {list.map((c) => (
          <article key={c.k} className={'m-card' + (hid.includes(c.k) ? ' m-isHidden' : '')}>
            <Link className="m-cimgw" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} /></Link>
            <div className="m-cbody"><div className="m-cnm"><NameLink c={c} /></div><div className="m-ccat">{t(c.cat)}</div></div>
            <div className="m-cfoot"><Actions c={c} /></div>
          </article>
        ))}
      </div>
    );
    return (
      <ul className={'m-clist' + (disp === 'sum' ? ' m-sum' : '')}>
        {list.map((c) => {
          const last = visit(c.k);
          return (
            <li key={c.k} className="m-crow">
              <Link className="m-cthumb" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} className="m-timg" /></Link>
              <div className="m-crowb">
                <div className="m-ccat">{t(c.cat)}</div>
                <div className="m-cnm"><NameLink c={c} /></div>
                {disp === 'sum' && <><p className="m-cdesc">{t(c.desc)}</p><p className="m-clast">{last ? Lx.last + ago(last, Lx) : Lx.never}</p></>}
              </div>
              <Actions c={c} />
            </li>
          );
        })}
      </ul>
    );
  };

  const viewCursos = (
    <div className={welcome ? 'm-welcome' + (curtainOff ? ' is-go' : '') : undefined}>
      <h1 className="m-h1">{Lx.mycourses}</h1>
      <Tour id="cursos" steps={TOUR_CURSOS} when={!!campus.done && curtainOff && settled} />
      {campus.done ? (
        <p className="m-mine" id="m-mine">
          {campus.degrees.map((k) => DEGREE_BY_KEY[k] && <span key={k} className="m-badge">{t(DEGREE_BY_KEY[k].short)}</span>)}
          <span className="m-muted">{Lx.mineN.replace('%d', MINE.length)}</span>
          <Link to="/benvinguda?edit=1" id="m-edit">{Lx.mineEdit}</Link>
        </p>
      ) : (
        <div className="m-setup" id="m-setup">
          <div><b>{Lx.setupH}</b><p>{Lx.setupP}</p></div>
          <Link className="am-btn am-btn-primary" to="/benvinguda">{Lx.setupBtn}</Link>
        </div>
      )}
      <section className="m-ovw" aria-labelledby="m-ovh">
        <h2 className="m-h5" id="m-ovh">{Lx.overview}</h2><hr className="m-hr" />
        <div id="m-bar">
          <div className="m-filters" role="search">
            <Dropdown id="filter" label={filter === 'all' ? Lx.fAll : filter === 'star' ? Lx.fStar : Lx.fHid} ariaLabel={Lx.filt + ': ' + (filter === 'all' ? Lx.fAll : filter === 'star' ? Lx.fStar : Lx.fHid)}
              items={[{ v: 'all', label: Lx.fAllLong }, { v: 'star', label: Lx.fStar }, { v: 'hid', label: Lx.fHid }]} current={filter} onSelect={setFilter} />
            <input type="search" className="m-search" id="m-search" placeholder={Lx.search} aria-label={Lx.search} value={q} autoComplete="off" onChange={(e) => setQ(e.target.value)} />
            <Dropdown id="sort" label={sort === 'name' ? Lx.sName : Lx.sLast} ariaLabel={Lx.sortT + ': ' + (sort === 'name' ? Lx.sName : Lx.sLast)}
              items={[{ v: 'name', label: Lx.sName }, { v: 'last', label: Lx.sLast }]} current={sort} onSelect={setSort} />
            <Dropdown id="disp" label={disp === 'card' ? Lx.vCard : disp === 'list' ? Lx.vList : Lx.vSum} ariaLabel={Lx.viewT + ': ' + (disp === 'card' ? Lx.vCard : disp === 'list' ? Lx.vList : Lx.vSum)}
              items={[{ v: 'card', label: Lx.vCard }, { v: 'list', label: Lx.vList }, { v: 'sum', label: Lx.vSum }]} current={disp} onSelect={setDisp} />
          </div>
        </div>
        <div id="m-grid">{grid()}</div>
      </section>
    </div>
  );

  const recent = MINE.filter((c) => visit(c.k)).sort((a, b) => visit(b.k) - visit(a.k));
  const days = studyDays();
  const now = new Date();
  const month = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const progress = MINE.map((c) => [c, progressOf(c.k)]);
  const doneAll = progress.reduce((n, [, p]) => n + (p ? p.done : 0), 0);
  // repàs a mida: exercicis fallats que avui toca tornar a fer, per assignatura (lib/review.js)
  const due = dueCounts(review);
  const toReview = MINE.map((c) => [c, due[c.k] || 0]).filter(([, n]) => n);
  const viewTauler = (
    <>
      <h1 className="m-h1">{Lx.dash}</h1>
      <dl className="am-stats" id="m-stats">
        <div className="am-stat"><dt className="am-sr">{Lx.stStarted}</dt><dd><b>{recent.length}/{MINE.length}</b><span>{Lx.stStarted}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{Lx.stDone}</dt><dd><b>{doneAll}</b><span>{Lx.stDone}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{Lx.stDays}</dt><dd><b>{days.filter((d) => d.startsWith(month)).length}</b><span>{Lx.stDays}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{Lx.stStreak}</dt><dd><b>{streakOf(days)}</b><span>{Lx.stStreak}</span></dd></div>
      </dl>
      <section className="am-mblock" id="m-review" aria-labelledby="m-revh">
        <h2 className="am-bt" id="m-revh">{Lx.revT}</h2>
        {toReview.length ? (
          <ul className="am-prog">
            {toReview.map(([c, n]) => (
              <li key={c.k} data-review={c.k}>
                <span className="am-prog-name"><Link to={c.to}>{cname(c)}</Link><small>{t(c.cat)}</small></span>
                <span className="am-prog-num">{Lx.revN.replace('%d', n)}</span>
                <Link className="am-btn am-btn-primary m-revgo" to={c.to + '/repas'}>{Lx.revGo}</Link>
              </li>
            ))}
          </ul>
        ) : <p className="m-muted">{Lx.revNone}</p>}
      </section>
      <section className="am-mblock" id="m-progress" aria-labelledby="m-progh">
        <h2 className="am-bt" id="m-progh">{Lx.progT}</h2>
        <ul className="am-prog">
          {progress.map(([c, p]) => (
            <li key={c.k} data-progress={c.k}>
              <span className="am-prog-name"><Link to={c.to}>{cname(c)}</Link><small>{t(c.cat)}</small></span>
              {p ? <span className="am-bar" role="progressbar" aria-label={cname(c)} aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.pct}><span style={{ width: p.pct + '%' }} /></span>
                : <span className="am-muted am-prog-none">{Lx.progNone}</span>}
              <span className="am-prog-num">{p ? Lx.progOf.replace('%a', p.done).replace('%b', p.total) : '—'}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="am-mblock">
        <h2 className="am-bt">{Lx.recent}</h2>
        {recent.length ? (
          <div className="m-rgrid">
            {recent.map((c) => (
              <article key={c.k} className="m-card m-mini">
                <Link className="m-cimgw" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} /></Link>
                <div className="m-cbody"><div className="m-ccat">{t(c.cat)}</div><div className="m-cnm"><NameLink c={c} /></div><div className="m-clast">{ago(visit(c.k), Lx)}</div></div>
              </article>
            ))}
          </div>
        ) : <p className="m-muted">{Lx.norecent}</p>}
      </section>
      <section className="am-mblock">
        <h2 className="am-bt">{Lx.secsT}</h2>
        <ul className="m-seclist">
          {MINE.map((c) => (
            <li key={c.k}>
              <div className="m-sech"><span className="m-sdot" style={{ background: c.color }} /><NameLink c={c} /></div>
              <div className="m-csecs">
                {c.secs.map((sec) => <Link key={sec[0]} className="m-badge" to={c.to + '/' + sec[0]}>{t(sec.slice(1))}</Link>)}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

  const activities = (
    <LinksBlock id="m-extra" title={Lx.extra} items={ACTIVITIES.map((a) => (
      { to: a[1], label: t(a.slice(3)), sub: cname(CARD_BY_KEY[a[0]]), icon: a[2] }
    ))} />
  );

  return (
    <Page name="home" blocks={view === 'tauler' ? <><CalendarBlock />{activities}</> : activities}>
      {view === 'tauler' ? viewTauler : viewCursos}
    </Page>
  );
}
