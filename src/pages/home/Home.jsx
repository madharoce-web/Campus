import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useStoredState } from '../../lib/useStoredState.js';
import { lsGet, lsSet } from '../../lib/storage.js';
import { visitOf } from '../../lib/visits.js';
import { fold } from '../../lib/html.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { ACTIVITIES, CARDS, CARD_BY_KEY } from '../../courses/registry.js';
import Dropdown from './Dropdown.jsx';
import Pattern from './Pattern.jsx';
import { S } from './strings.js';
import './home.css';

const KEBAB = <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="13" r="1.5" /></svg>;
const STAR = <svg className="m-star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.2l2 4.3 4.7.5-3.5 3.2 1 4.6L8 11.5l-4.2 2.3 1-4.6L1.3 6l4.7-.5z" /></svg>;
const XICO = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>;
const DRAWERICO = <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="1.5" /><path d="M12.5 3.5v13M8.5 8l-2 2 2 2" /></svg>;
const AICO = {
  quiz: ['#c4307b', <><path d="M6 4.5h12v15H6z" /><path d="M9 9h6M9 12.5h6M9 16h3.5" /></>],
  assign: ['#836fff', <><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4M10 13l2 2 3.5-4" /></>],
  code: ['#0d8ba1', <path d="M9 7.5l-4.5 4.5L9 16.5M15 7.5l4.5 4.5-4.5 4.5" />],
  page: ['#0d8ba1', <><path d="M7 3.5h10v17H7z" /><path d="M10 8h4M10 11.5h4M10 15h4" /></>],
};

/** Darrer accés d'una targeta (el curs i les pàgines que agrupa). */
function visit(k) {
  const c = CARD_BY_KEY[k];
  return Math.max(visitOf(k), ...((c && c.also) || []).map(visitOf));
}
function ago(t, Lx) {
  if (!t) return null;
  const s = (Date.now() - t) / 1000, m = Math.floor(s / 60), h = Math.floor(m / 60), d = Math.floor(h / 24);
  if (m < 1) return Lx.now;
  if (m < 60) return Lx.min.replace('%d', m);
  if (h < 24) return Lx.h.replace('%d', h);
  if (d === 1) return Lx.d1;
  return Lx.d.replace('%d', d);
}
const oneOf = (list) => (v, d) => (list.includes(v) ? v : d);

export default function Home({ view }) {
  const { lang, li } = useLang();
  const Lx = S[lang];
  const [q, setQ] = useState('');
  const [filter, setFilter] = useStoredState('sem1-filter-v', () => oneOf(['all', 'star', 'hid'])(lsGet('sem1-filter'), 'all'), oneOf(['all', 'star', 'hid']));
  const [sort, setSort] = useStoredState('sem1-sort-v', () => (lsGet('sem1-sort') === 'last' ? 'last' : 'name'), oneOf(['name', 'last']));
  const [disp, setDisp] = useStoredState('sem1-disp-v', () => oneOf(['card', 'list', 'sum'])(lsGet('sem1-disp'), 'card'), oneOf(['card', 'list', 'sum']));
  const [stars, setStars] = useStoredState('sem1-stars', [], (v) => (Array.isArray(v) ? v : []));
  const [hid, setHid] = useStoredState('sem1-hidden', [], (v) => (Array.isArray(v) ? v : []));
  const [drawer, setDrawerState] = useState(() => {
    const v = lsGet('sem1-drawer');
    return v ? v === 'open' : window.innerWidth >= 1000;
  });
  const setDrawer = (open) => { setDrawerState(open); lsSet('sem1-drawer', open ? 'open' : 'closed'); };
  useDocumentTitle(view === 'tauler' ? Lx.dash : view === 'inici' ? null : Lx.mycourses);

  const cname = (c) => c.name[li];
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
    const out = CARDS.filter((c) => {
      const h = hid.includes(c.k);
      if (filter === 'all' && h) return false;
      if (filter === 'hid' && !h) return false;
      if (filter === 'star' && !stars.includes(c.k)) return false;
      if (qq && !fold(c.name[li] + ' ' + c.cat[li]).includes(qq)) return false;
      return true;
    });
    if (sort === 'last') out.sort((a, b) => visit(b.k) - visit(a.k) || a.name[li].localeCompare(b.name[li]));
    else out.sort((a, b) => a.name[li].localeCompare(b.name[li]));
    return out;
  }, [q, filter, sort, stars, hid, li]);

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
            <div className="m-cbody"><div className="m-cnm"><NameLink c={c} /></div><div className="m-ccat">{c.cat[li]}</div></div>
            <div className="m-cfoot"><Actions c={c} /></div>
          </article>
        ))}
      </div>
    );
    return (
      <ul className={'m-clist' + (disp === 'sum' ? ' m-sum' : '')}>
        {list.map((c) => {
          const t = visit(c.k);
          return (
            <li key={c.k} className="m-crow">
              <Link className="m-cthumb" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} className="m-timg" /></Link>
              <div className="m-crowb">
                <div className="m-ccat">{c.cat[li]}</div>
                <div className="m-cnm"><NameLink c={c} /></div>
                {disp === 'sum' && <><p className="m-cdesc">{c.desc[li]}</p><p className="m-clast">{t ? Lx.last + ago(t, Lx) : Lx.never}</p></>}
              </div>
              <Actions c={c} />
            </li>
          );
        })}
      </ul>
    );
  };

  const viewCursos = (
    <>
      <h1 className="m-h1">{Lx.mycourses}</h1>
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
    </>
  );

  const recent = CARDS.filter((c) => visit(c.k)).sort((a, b) => visit(b.k) - visit(a.k));
  const viewTauler = (
    <>
      <h1 className="m-h1">{Lx.dash}</h1>
      <section className="m-mblock">
        <h2 className="m-bt">{Lx.recent}</h2>
        {recent.length ? (
          <div className="m-rgrid">
            {recent.map((c) => (
              <article key={c.k} className="m-card m-mini">
                <Link className="m-cimgw" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} /></Link>
                <div className="m-cbody"><div className="m-ccat">{c.cat[li]}</div><div className="m-cnm"><NameLink c={c} /></div><div className="m-clast">{ago(visit(c.k), Lx)}</div></div>
              </article>
            ))}
          </div>
        ) : <p className="m-muted">{Lx.norecent}</p>}
      </section>
      <section className="m-mblock">
        <h2 className="m-bt">{Lx.secsT}</h2>
        <ul className="m-seclist">
          {CARDS.map((c) => (
            <li key={c.k}>
              <div className="m-sech"><span className="m-sdot" style={{ background: c.color }} /><NameLink c={c} /></div>
              <div className="m-csecs">
                {c.secs.map((s) => <Link key={s[0]} className="m-badge" to={c.to + '/' + s[0]}>{s[1 + li]}</Link>)}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

  const viewInici = (
    <>
      <h1 className="m-h1">{Lx.site}</h1>
      <p className="m-intro">{Lx.intro}</p>
      <section aria-labelledby="m-avh">
        <h2 className="m-h5" id="m-avh">{Lx.avail}</h2><hr className="m-hr" />
        <div className="m-cboxes">
          {CARDS.map((c) => {
            const t = visit(c.k);
            return (
              <article key={c.k} className="m-cbox">
                <Link className="m-cthumb" to={c.to} tabIndex={-1} aria-hidden="true"><Pattern card={c} className="m-timg" /></Link>
                <div className="m-crowb">
                  <h3 className="m-cbh"><NameLink c={c} /></h3>
                  <div className="m-ccat">{c.cat[li]}</div>
                  <p className="m-cdesc">{c.desc[li]}</p>
                  <div className="m-cboxf"><Link className="m-btn m-btn-primary" to={c.to}>{Lx.enter}</Link><span className="m-clast">{t ? Lx.last + ago(t, Lx) : Lx.never}</span></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );

  return (
    <div data-page="home">
    <div id="m-home" className={'m-layout' + (drawer ? ' m-dopen' : '')}>
      <div className="m-main"><main className="m-main-in">{view === 'tauler' ? viewTauler : view === 'inici' ? viewInici : viewCursos}</main></div>
      <aside className="m-drawer" id="m-drawer" aria-label={Lx.extra}>
        <div className="m-dhead">
          <button type="button" className="m-dclose" id="m-dclose" aria-label={Lx.close} title={Lx.close} onClick={() => setDrawer(false)}>{XICO}</button>
        </div>
        <section className="m-block">
          <h2 className="m-bt">{Lx.extra}</h2>
          <ul className="m-acts">
            {ACTIVITIES.map((a) => {
              const c = CARD_BY_KEY[a[0]], ic = AICO[a[2]];
              return (
                <li key={a[1]}>
                  <Link to={a[1]}>
                    <span className="m-aico" style={{ color: ic[0] }}><svg viewBox="0 0 24 24" aria-hidden="true">{ic[1]}</svg></span>
                    <span className="m-atx"><span>{a[3 + li]}</span><small>{cname(c)}</small></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
      <button type="button" className="m-dopenbtn" id="m-dopen" aria-label={Lx.open} title={Lx.open} aria-controls="m-drawer" aria-expanded={drawer} onClick={() => setDrawer(true)}>{DRAWERICO}</button>
      <div className="m-dscrim" id="m-dscrim" onClick={() => setDrawer(false)} />
    </div>
    </div>
  );
}
