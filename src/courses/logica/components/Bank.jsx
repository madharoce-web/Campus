import { useEffect, useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { useStoredState } from '../../../lib/useStoredState.js';
import { useSlot } from '../../_doc/store.js';
import { useLangData } from '../../_doc/useLangData.js';
import { kindName } from '../engine/sim.js';

// banc d'exercicis de cada idioma (≈ 265 kB): només es carrega a les pàgines que el fan servir
export const BANK = { ca: () => import('../data/bank.ca.json'), es: () => import('../data/bank.es.json') };
export const useBank = (lang) => useLangData(BANK, lang).data;

const asObj = (v, d) => (v && typeof v === 'object' && !Array.isArray(v) ? v : d);

function Badge({ x }) {
  const { L } = useLang();
  return x.src === 'exam'
    ? <span className="lx-badge ex">{x.srcname || L('Examen', 'Examen', 'Exam')}</span>
    : <span className="lx-badge nw">{L('Exercici nou', 'Ejercicio nuevo', 'New exercise')}</span>;
}

/**
 * Fitxa d'un exercici: enunciat i solució per passos. Al banc, els passos es mostren d'un
 * en un (o tots) i es pot marcar com a fet; al simulacre (sim), la solució surt en acabar.
 */
export function ExCard({ x, sim, st2, parts, shownAll, done, onDone, ref }) {
  const { L } = useLang();
  const sol = parts ? x.sol.filter((s) => parts.indexOf(s.p) >= 0) : x.sol;
  const st = st2 && x.st2 ? x.st2 : x.st;
  const [shown, setShown] = useSlot('lx-shown-' + x.id, 0);
  const n = sim ? (shownAll ? sol.length : 0) : Math.min(shown, sol.length);
  const card = useRef(null), secs = useRef([]), pending = useRef(null);

  // després de mostrar un pas, es fa visible; en amagar-los, es torna a l'inici de la fitxa
  useEffect(() => {
    const p = pending.current;
    pending.current = null;
    if (p === 'card' && card.current) card.current.scrollIntoView({ block: 'start' });
    else if (typeof p === 'number' && secs.current[p]) secs.current[p].scrollIntoView({ block: 'nearest' });
  }, [n]);

  const setRefs = (el) => { card.current = el; if (typeof ref === 'function') ref(el); else if (ref) ref.current = el; };
  return (
    <article className="lx" id={'lx-' + x.id} data-id={x.id} ref={setRefs}>
      <header className="lx-hd">
        <span className="lx-n">{x.kind + x.n}</span>
        <div className="lx-ht"><h3>{x.title || kindName(x.kind, L)}</h3><Badge x={x} /></div>
        {!sim && <label className="lx-done"><input type="checkbox" checked={!!done} onChange={(e) => onDone(x.id, e.target.checked)} />{' ' + L('Fet', 'Hecho', 'Done')}</label>}
      </header>
      <Rich className="lx-st" html={st} />
      <div className="lx-sol" data-n={sol.length}>
        {sol.map((s, i) => (
          <section key={i} className="lx-s" hidden={i >= n} ref={(el) => { secs.current[i] = el; }}>
            <h4><span>{i + 1}</span>{s.t}</h4>
            <Rich html={s.h} />
          </section>
        ))}
      </div>
      {!sim && (
        <div className="lx-bar">
          <button type="button" className="lx-b lx-next" disabled={n === sol.length} onClick={() => { pending.current = n; setShown(n + 1); }}>
            {L('Mostra el pas següent', 'Muestra el paso siguiente', 'Show the next step') + ' '}<span className="lx-c">{n + '/' + sol.length}</span>
          </button>
          <button type="button" className="lx-b lx-all" disabled={n === sol.length} onClick={() => setShown(sol.length)}>{L('Tota la solució', 'Toda la solución', 'The whole solution')}</button>
          <button type="button" className="lx-b lx-hide" hidden={n === 0} onClick={() => { pending.current = 'card'; setShown(0); }}>{L('Amaga', 'Oculta', 'Hide')}</button>
        </div>
      )}
    </article>
  );
}

/** Banc d'exercicis d'un tipus: filtre (tots, d'examen, nous), salts, progrés i fitxes. */
export default function Bank({ kind }) {
  const { lang, L } = useLang();
  const bank = useBank(lang);
  const [filt, setFilt] = useStoredState('lx-filt', 'all', (v, d) => (['all', 'exam', 'nou'].includes(v) ? v : d));
  const [done, setDone] = useStoredState('lx-done', {}, asObj);
  const cards = useRef({});
  if (!bank) return <div className="lx-bank" data-kind={kind} />;

  const items = bank.filter((x) => x.kind === kind);
  const list = items.filter((x) => filt === 'all' || (filt === 'exam' ? x.src === 'exam' : x.src !== 'exam'));
  const nd = items.filter((x) => done[x.id]).length;
  const nEx = items.filter((x) => x.src === 'exam').length;
  const onDone = (id, on) => setDone((d) => { const o = { ...d }; if (on) o[id] = Date.now(); else delete o[id]; return o; });
  const chips = [['all', L('Tots', 'Todos', 'All') + ' ' + items.length], ['exam', L("D'examen", 'De examen', 'Exam-style') + ' ' + nEx], ['nou', L('Nous', 'Nuevos', 'New') + ' ' + (items.length - nEx)]];

  return (
    <div className="lx-bank" data-kind={kind}>
      <div className="lx-filt">
        <div className="lx-chips" role="group" aria-label={L('Filtre', 'Filtro', 'Filter')}>
          {chips.map(([k, t]) => <button key={k} type="button" data-f={k} aria-pressed={filt === k} onClick={() => setFilt(k)}>{t}</button>)}
        </div>
        <span className="lx-prog">{nd + ' / ' + items.length + L(' fets', ' hechos', ' done')}</span>
      </div>
      <nav className="lx-jump">
        {list.map((x) => (
          <a key={x.id} href={'#lx-' + x.id} data-j={x.id} className={done[x.id] ? 'dn' : ''}
            onClick={(e) => { e.preventDefault(); const el = cards.current[x.id]; if (el) el.scrollIntoView({ block: 'start' }); }}>
            {x.kind + x.n}
          </a>
        ))}
      </nav>
      {list.map((x) => (
        <ExCard key={x.id} x={x} done={!!done[x.id]} onDone={onDone} ref={(el) => { cards.current[x.id] = el; }} />
      ))}
    </div>
  );
}
