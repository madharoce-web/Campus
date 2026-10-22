import { memo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Rich from '../../lib/Rich.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { useStoredState } from '../../lib/useStoredState.js';
import { useSlot } from '../_doc/store.js';
import { anchorsOf, emptyAnswer, grade, visible } from './engine/practice.js';
import { TP } from './strings.js';

const fresh = (card) => ({ v: emptyAnswer(card), marks: null, fb: null });

/** Un exercici amb correcció automàtica (numèric, d'opció múltiple o de classificació). */
const Card = memo(function Card({ card, done, hidden, onSolved }) {
  const { lang } = useLang();
  const T = TP[lang];
  const [st, setSt] = useSlot('px-' + card.id, () => fresh(card));
  const { v, marks, fb } = st;
  const setV = (nv, patch) => setSt((o) => ({ ...o, v: nv, ...patch }));
  const check = () => {
    const r = grade(card, v);
    setSt((o) => ({ ...o, marks: r.marks, fb: r.fb }));
    if (r.solved) onSolved(card.id);
  };
  const id = card.id;

  let inputs;
  if (card.tipus === 'num') {
    inputs = card.num.map((lab, i) => {
      const mk = marks && marks[i];
      return (
        <div key={i} className="ex-num">
          <Rich as="label" htmlFor={'in-' + id + '-' + i} html={lab} />
          <input type="text" id={'in-' + id + '-' + i} inputMode="decimal" autoComplete="off" spellCheck="false"
            value={v[i]} onChange={(e) => setV(v.map((x, j) => (j === i ? e.target.value : x)))} />
          <span className={'okm' + (mk ? ' ' + mk : '')} aria-live="polite">{mk === 'y' ? '✓' : mk === 'n' ? '✗' : ''}</span>
        </div>
      );
    });
  } else if (card.tipus === 'mc') {
    inputs = (
      <div className="ex-opts" role="radiogroup">
        {card.opts.map((o, i) => (
          <label key={i} className={'opt' + (marks && marks.i === i ? (marks.ok ? ' y' : ' n') : '')}>
            <input type="radio" name={'r-' + id} value={i} checked={v === i} onChange={() => setV(i)} />
            <Rich as="span" html={o} />
          </label>
        ))}
      </div>
    );
  } else {
    inputs = (
      <div className="ex-items">
        {card.items.map((it, i) => (
          <div key={i} className={'it' + (marks && marks[i] ? ' ' + marks[i] : '')}>
            <Rich className="it-q" html={it.q} />
            <div className="it-o">
              {it.o.map((o, j) => (
                <button key={j} type="button" data-o={j} aria-pressed={v[i] === j}
                  onClick={() => setV(v.map((x, k) => (k === i ? j : x)), { marks: marks && marks.map((m, k) => (k === i ? null : m)) })}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <article className={'ex' + (done ? ' done' : '')} id={'ex-' + id} data-id={id} data-tema={card.tema} data-nivell={card.nivell} data-tipus={card.tipus} hidden={hidden}>
      <div className="ex-h">
        <Rich as="h4" id={id} html={card.title} />
        <span className="ex-id"><span className="ex-st ex-ok">{done ? '✓ ' + T.solved : ''}</span> <span className={'lvl ' + card.nivell}>{card.lvl}</span>{' ' + card.code}</span>
      </div>
      <Rich className="ex-q" html={card.q} />
      <div className="ex-in">{inputs}</div>
      <div className="ex-act">
        <button type="button" className="btn pri ex-check" onClick={check}>{T.check}</button>
        <button type="button" className="btn ex-clear" onClick={() => setSt(fresh(card))}>{T.clear}</button>
      </div>
      <p className={'ex-fb' + (fb ? ' ' + fb.c : '')} hidden={!fb}>{fb ? T[fb.m] : ''}</p>
      {card.det.map((d, i) => (
        <details key={i}><summary>{d.s}</summary><Rich html={d.h} /></details>
      ))}
    </article>
  );
});

/** Pràctica: 43 exercicis per tema i nivell, amb filtres, progrés desat i correcció. */
export default function Practice({ doc }) {
  const { lang } = useLang();
  const T = TP[lang];
  const loc = useLocation();
  const [f, setF] = useSlot('px-filt', { tema: 'all', niv: 'all' });
  const [saved, setSaved] = useStoredState('eco-prac', { done: {} }, (v, d) => (v && v.done && typeof v.done === 'object' ? { done: v.done } : d));
  const done = saved.done;
  const cards = doc.items.filter((x) => x.ex);
  const n = cards.filter((x) => done[x.ex.id]).length;
  const anyVisible = cards.some((x) => visible(x, f.tema, f.niv));

  // una àncora amagada pels filtres (des de l'índex o el cercador): es treuen els filtres
  useEffect(() => {
    const a = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!a) return;
    const it = doc.items.find((x) => anchorsOf(x).includes(a));
    if (it && !visible(it, f.tema, f.niv)) setF({ tema: 'all', niv: 'all' });
  }, [loc.key]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSolved = useCallback((id) => setSaved((s) => ({ done: { ...s.done, [id]: 1 } })), [setSaved]);

  return (
    <>
      <Rich html={doc.intro} />
      <div className="px-bar" aria-label={T.filt}>
        <div className="px-row">
          <span className="px-lbl">{T.tema}</span>
          {['all', '1', '2', '3'].map((t) => (
            <button key={t} type="button" className="chip" data-ft={t} aria-pressed={f.tema === t} onClick={() => setF({ ...f, tema: t })}>{t === 'all' ? T.all : t}</button>
          ))}
        </div>
        <div className="px-row">
          <span className="px-lbl">{T.niv}</span>
          {[['all', T.all], ['facil', T.f], ['mitja', T.m], ['dificil', T.d]].map(([k, t]) => (
            <button key={k} type="button" className="chip" data-fn={k} aria-pressed={f.niv === k} onClick={() => setF({ ...f, niv: k })}>{t}</button>
          ))}
        </div>
        <div className="px-prog">
          <div className="px-meter"><i id="px-m" style={{ width: (n / cards.length * 100) + '%' }} /></div>
          <span className="px-count" id="px-c">{n + ' / ' + cards.length + ' ' + T.prog}</span>
          <button type="button" className="px-reset" id="px-r" onClick={() => setSaved({ done: {} })}>{T.reset}</button>
        </div>
      </div>
      <p className="px-empty" hidden={anyVisible}>{T.none}</p>
      {doc.items.map((it) => {
        const hid = !visible(it, f.tema, f.niv);
        if (it.ex) return <Card key={it.ex.id} card={it.ex} done={!!done[it.ex.id]} hidden={hid} onSolved={onSolved} />;
        return it.h === 2
          ? <Rich key={it.id} as="h2" id={it.id} className="px-tema" data-tema={it.tema} hidden={hid} html={it.html} />
          : <Rich key={it.id} as="h3" id={it.id} className="px-lvl" data-tema={it.tema} data-nivell={it.nivell} hidden={hid} html={it.html} />;
      })}
    </>
  );
}
