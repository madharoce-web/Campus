import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { inline, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K } from './strings.js';
import { Blocks } from './blocks.jsx';
import Exercise from './exercise/Exercise.jsx';
import { markRead, recordPractice, setLast, useKit } from './state.js';
import { useModule } from './useAsync.js';
import { Adapting, ModeSwitch, useMode } from './Mode.jsx';
import { useEx } from './refs.js';

const ADAPT_MS = 650;
const reduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Índex del temari: temes i, del tema obert, els seus apartats (amb els llegits marcats). */
export function Toc({ unitId, current, onPick, onJump, hasEnd }) {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const st = useKit(course.k);
  return (
    <nav className="kit-toc" aria-label={S.index}>
      <p className="kit-toc-h">{S.index}</p>
      <ol>
        {course.units.map((u) => {
          const open = u.id === unitId;
          const nread = u.sections.filter((s) => st.read[s.id]).length;
          return (
            <li key={u.id} className={open ? 'is-open' : undefined}>
              <Link to={course.path + '/temari/' + u.id} className="kit-toc-u" aria-current={open ? 'page' : undefined} onClick={onPick}>
                <span className="kit-toc-n">{u.n}</span><span>{inline(tr(u.t))}</span>
                <small>{nread}/{u.sections.length}</small>
              </Link>
              {open && (
                <ol className="kit-toc-s">
                  {u.sections.map((s) => (
                    <li key={s.id}>
                      <a href={'#' + s.id} className={(current === s.id ? 'is-cur ' : '') + (st.read[s.id] ? 'is-read' : '')}
                        onClick={(e) => { e.preventDefault(); onJump(s.id); onPick?.(); }}>
                        {inline(tr(s.t))}
                      </a>
                    </li>
                  ))}
                  {hasEnd && <li><a href="#kit-end" className="kit-toc-end" onClick={(e) => { e.preventDefault(); onJump('kit-end'); onPick?.(); }}>{S.examEndH}</a></li>}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Exercici tipus examen del final del tema (pot venir del banc: { ref, seed? }). */
function EndEx({ ex: raw, n }) {
  const course = useCourse();
  const st = useKit(course.k);
  const ex = useEx(raw);
  if (!ex) return null;
  const pid = ex.ref || ex.id;
  return <Exercise ex={ex} variant="end" n={n} done={st.practice[pid]?.ok} onResult={(r) => recordPractice(course.k, pid, r)} />;
}

/** Temari: índex a l'esquerra i la lliçó (un tema) amb el selector de mode. */
export default function Lesson({ unitId }) {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const st = useKit(course.k);
  const idx = Math.max(0, course.units.findIndex((u) => u.id === unitId));
  const unit = course.units[idx];
  const data = useModule(course.k + ':' + unit.id, unit.load);
  const [mode, setMode] = useMode();
  const [adapting, setAdapting] = useState(null); // null | mode de destinació
  const [current, setCurrent] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);
  const root = useRef(null);
  const anchor = useRef(null);

  // apartat actual (el darrer títol que ha passat per dalt) i apartats llegits: el final de
  // l'apartat ha entrat a la pantalla després que l'alumne hagi fet desplaçament
  useEffect(() => {
    if (!data || !root.current) return undefined;
    const secs = [...root.current.querySelectorAll('section.kit-sec')];
    const ends = [...root.current.querySelectorAll('.kit-sec-end')];
    let moved = false;
    // la barra del mode queda fixa a dalt: un apartat és l'actual quan el seu títol hi arriba
    const bar = root.current.querySelector('.kit-lesson-bar');
    const onScroll = (e) => {
      const edge = (bar ? bar.getBoundingClientRect().bottom : 120) + 40;
      let cur = secs[0]?.id || null;
      for (const s of secs) if (s.getBoundingClientRect().top < edge) cur = s.id;
      setCurrent((c) => (c === cur ? c : cur));
      if (e) moved = true;
      if (!moved) return;
      // només si el final és a la vista (un salt des de l'índex no marca els apartats saltats)
      const h = window.innerHeight * 0.9;
      for (const el of ends) { const y = el.getBoundingClientRect().top; if (y > 0 && y < h) markRead(course.k, el.dataset.sec); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [data, mode, course.k]);
  useEffect(() => { if (current) setLast(course.k, unit.id, current); }, [current, unit.id, course.k]);
  // salt a un apartat: es manté a lloc uns instants mentre acaba de carregar el que hi ha a sobre
  // (laboratoris, fórmules), fins que l'alumne es desplaça pel seu compte
  const pin = useRef(null);
  const jump = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView();
    pin.current = { id, until: Date.now() + 2500 };
  }, []);
  useEffect(() => {
    if (!data || !root.current || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => {
      const p = pin.current;
      if (p && Date.now() < p.until) document.getElementById(p.id)?.scrollIntoView();
    });
    ro.observe(root.current);
    const stop = () => { pin.current = null; };
    const opts = { passive: true };
    window.addEventListener('wheel', stop, opts);
    window.addEventListener('touchstart', stop, opts);
    window.addEventListener('keydown', stop);
    return () => {
      ro.disconnect();
      window.removeEventListener('wheel', stop, opts);
      window.removeEventListener('touchstart', stop, opts);
      window.removeEventListener('keydown', stop);
    };
  }, [data]);
  // en obrir un tema amb #apartat, hi va
  useEffect(() => {
    if (!data) return;
    const id = hash ? decodeURIComponent(hash.slice(1)) : null;
    if (id) setTimeout(() => jump(id), 0);
    else window.scrollTo(0, 0);
  }, [data, unit.id, hash, jump]);
  // després de canviar de mode, torna a l'apartat que s'estava llegint
  useLayoutEffect(() => {
    if (anchor.current) { jump(anchor.current); anchor.current = null; }
  }, [mode, jump]);

  const switchMode = (m) => {
    anchor.current = current;
    if (reduced()) { setMode(m); return; }
    setAdapting(m);
    setTimeout(() => { setMode(m); setTimeout(() => setAdapting(null), 120); }, ADAPT_MS);
  };

  const prev = course.units[idx - 1], next = course.units[idx + 1];
  return (
    <div className={'kit-temari' + (tocOpen ? ' toc-open' : '')}>
      <aside className="kit-side">
        <button type="button" className="kit-toc-btn am-btn am-btn-outline" aria-expanded={tocOpen} onClick={() => setTocOpen(!tocOpen)}>{S.index}</button>
        <div className="kit-side-in"><Toc unitId={unit.id} current={current} onPick={() => setTocOpen(false)} onJump={jump} hasEnd={!!(data && data.examEnd && data.examEnd.length)} /></div>
      </aside>
      <div className="kit-lesson" ref={root} data-mode={mode}>
        <div className="kit-lesson-bar"><ModeSwitch mode={adapting || mode} onChange={switchMode} disabled={!!adapting} /></div>
        <header className="kit-unit-h">
          <p className="kit-kicker">{S.unit} {unit.n}</p>
          <h2>{inline(tr(unit.t))}</h2>
        </header>
        {!data ? <p className="kit-loading">{K[ui].loading}</p> : (
          <>
            {data.intro && <div className="kit-intro"><Blocks blocks={data.intro} mode={mode} /></div>}
            {unit.sections.map((s, i) => (
              <section key={s.id} id={s.id} className={'kit-sec' + (s.hard ? ' is-hard' : '')}>
                <h3 className="kit-sec-h">
                  <span className="kit-sec-n">{unit.n}.{i + 1}</span> {inline(tr(s.t))}
                  {s.hard && <span className="kit-hard">{S.hard}</span>}
                  {st.read[s.id] && <span className="kit-read" title={S.read}>✓</span>}
                </h3>
                <Blocks blocks={data.sections[s.id]} mode={mode} />
                <span className="kit-sec-end" data-sec={s.id} />
              </section>
            ))}
            {data.examEnd && data.examEnd.length > 0 && (
              <section id="kit-end" className="kit-end">
                <h3 className="kit-sec-h">{S.examEndH}</h3>
                <p className="kit-muted">{S.examEndP}</p>
                {data.examEnd.map((ex, i) => <EndEx key={ex.id || ex.ref + '@' + (ex.seed ?? '')} ex={ex} n={i + 1} />)}
              </section>
            )}
            <nav className="kit-pn">
              {prev ? <button type="button" className="am-btn am-btn-secondary" onClick={() => navigate(course.path + '/temari/' + prev.id)}>← {S.prev}: {tr(prev.t)}</button> : <span />}
              {next && <button type="button" className="am-btn am-btn-primary" onClick={() => navigate(course.path + '/temari/' + next.id)}>{S.next}: {tr(next.t)} →</button>}
            </nav>
          </>
        )}
        {adapting && <Adapting to={adapting} />}
      </div>
    </div>
  );
}
