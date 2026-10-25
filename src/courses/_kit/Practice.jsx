import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { inline, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K } from './strings.js';
import Exercise from './exercise/Exercise.jsx';
import { recordPractice, useKit } from './state.js';
import { useModule } from './useAsync.js';
import { instance, newSeed } from './bank.js';

const LEVELS = ['easy', 'exam', 'hard'];

function Chips({ value, options, onChange, label, id }) {
  return (
    <div className="kit-chips" role="radiogroup" aria-label={label} id={id}>
      {options.map(([v, l]) => (
        <button key={v} type="button" role="radio" aria-checked={value === v} data-v={v} className={'kit-chip' + (value === v ? ' is-on' : '')} onClick={() => onChange(v)}>{l}</button>
      ))}
    </div>
  );
}

/** Una família d'exercicis generats: mostra una instància i permet generar-ne una altra. */
function FamilyCard({ fam, n, done, k }) {
  const { ui } = useLang();
  const [seed, setSeed] = useState(1);
  const ex = useMemo(() => instance(fam, seed), [fam, seed]);
  return (
    <div className="kit-fam">
      <Exercise key={seed} ex={ex} n={n} done={done} onResult={(r) => recordPractice(k, fam.id, r)} />
      <button type="button" className="kit-link kit-another" onClick={() => setSeed(newSeed())}>↻ {K[ui].another}</button>
    </div>
  );
}

/** Pràctica: tots els exercicis de l'assignatura, amb filtres per tema, nivell, origen i estat. */
export default function Practice() {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const st = useKit(course.k);
  const bank = useModule(course.k + ':bank', course.bank);
  // enllaços directes: ?unit=<tema> (filtre) i ?ex=<exercici> (hi baixa)
  const [params] = useSearchParams();
  const goEx = params.get('ex');
  const [unit, setUnit] = useState(() => (course.units.some((u) => u.id === params.get('unit')) ? params.get('unit') : 'all'));
  const [level, setLevel] = useState('all');
  const [origin, setOrigin] = useState('all');
  const [state, setState] = useState('all');
  const [limit, setLimit] = useState(20);
  useEffect(() => { setLimit(20); }, [unit, level, origin, state]);
  // el filtre d'origen només té sentit si hi ha exercicis d'exàmens reals
  const hasExam = !!bank && (bank.items || []).some((ex) => ex.src === 'exam');

  const list = useMemo(() => {
    if (!bank) return [];
    const items = [...(bank.items || []).map((ex) => ({ ex })), ...(bank.families || []).map((f) => ({ fam: f, ex: { ...f, src: f.src || 'new' } }))];
    return items.filter(({ ex }) => (unit === 'all' || ex.unit === unit)
      && (level === 'all' || ex.level === level)
      && (origin === 'all' || (origin === 'exam' ? ex.src === 'exam' : ex.src !== 'exam'))
      && (state === 'all' || (state === 'done' ? st.practice[ex.id]?.ok : !st.practice[ex.id]?.ok)))
      .sort((a, b) => course.units.findIndex((u) => u.id === a.ex.unit) - course.units.findIndex((u) => u.id === b.ex.unit)
        || LEVELS.indexOf(a.ex.level) - LEVELS.indexOf(b.ex.level));
  }, [bank, unit, level, origin, state, st.practice, course.units]);

  // l'exercici de l'enllaç: es mostra (encara que sigui més avall del límit) i s'hi baixa
  const goAt = goEx ? list.findIndex(({ ex }) => ex.id === goEx) : -1;
  useEffect(() => { if (goAt >= limit) setLimit(goAt + 1); }, [goAt, limit]);
  useEffect(() => {
    if (goAt < 0 || goAt >= limit) return undefined;
    // els exercicis de sobre encara es poden fer més alts (editors, figures): s'hi torna fins que
    // la pàgina s'estabilitza o l'usuari es mou
    let stop = false, n = 0, raf = 0;
    const halt = () => { stop = true; };
    const go = () => {
      const el = document.querySelector(`article[data-ex="${CSS.escape(goEx)}"]`);
      if (el && !stop) el.scrollIntoView({ block: 'start' });
      if (!stop && n++ < 40) raf = setTimeout(go, 50);
    };
    go();
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((e) => window.addEventListener(e, halt, { passive: true }));
    return () => { stop = true; clearTimeout(raf); ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((e) => window.removeEventListener(e, halt)); };
  }, [goAt, goEx, limit]);

  return (
    <div className="kit-practice">
      <h2 className="kit-h2">{S.practiceH}</h2>
      <p className="kit-lead">{hasExam ? S.practiceP : S.practiceP0}</p>
      <div className="kit-filters">
        <label className="kit-filter">
          <span>{S.unit}</span>
          <select className="am-input" id="kit-f-unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="all">{S.allUnits}</option>
            {course.units.map((u) => <option key={u.id} value={u.id}>{u.n}. {tr(u.t).replace(/[*$`]/g, '')}</option>)}
          </select>
        </label>
        <Chips id="kit-f-level" label={S.levels.exam} value={level} onChange={setLevel}
          options={[['all', S.origin.all], ...LEVELS.map((l) => [l, S.levels[l]])]} />
        {hasExam && (
          <Chips id="kit-f-origin" label={S.origin.exam} value={origin} onChange={setOrigin}
            options={['all', 'exam', 'new'].map((o) => [o, S.origin[o]])} />
        )}
        <Chips id="kit-f-state" label={S.stateF.done} value={state} onChange={setState}
          options={['all', 'todo', 'done'].map((o) => [o, S.stateF[o]])} />
      </div>
      {!bank ? <p className="kit-loading">{S.loading}</p> : (
        <>
          <p className="kit-muted kit-count" id="kit-count">{S.count.replace('%d', list.length)}</p>
          {!list.length ? <p className="kit-empty">{S.none}</p> : list.slice(0, limit).map(({ ex, fam }, i) => (
            <div key={ex.id} className="kit-pitem">
              {(i === 0 || list[i - 1].ex.unit !== ex.unit) && unit === 'all' && (
                <h3 className="kit-unit-sep">{S.unit} {course.units.find((u) => u.id === ex.unit)?.n} · {inline(tr(course.units.find((u) => u.id === ex.unit)?.t))}</h3>
              )}
              {fam ? <FamilyCard fam={fam} n={i + 1} k={course.k} done={st.practice[fam.id]?.ok} />
                : <Exercise ex={ex} n={i + 1} done={st.practice[ex.id]?.ok} onResult={(r) => recordPractice(course.k, ex.id, r)} />}
            </div>
          ))}
          {list.length > limit && <button type="button" className="am-btn am-btn-secondary kit-more" onClick={() => setLimit(limit + 20)}>{S.more}</button>}
        </>
      )}
    </div>
  );
}
