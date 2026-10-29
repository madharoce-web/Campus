import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { ProNote, useEntitlement } from '../../lib/plan.js';
import { dropCard, getReview, INTERVALS, pickSession, recordReview, reviewedToday, streak, useReview } from '../../lib/review.js';
import { logAttempt } from '../../lib/intents.js';
import { useCourse } from './context.js';
import { K } from './strings.js';
import Exercise from './exercise/Exercise.jsx';
import { recordPractice } from './state.js';
import { useModule } from './useAsync.js';
import { resolveRef } from './refs.js';

const MAX = 10;

/** Exercicis escrits dins dels temes (comprovacions i tipus examen que no són al banc), per id. */
function indexUnits(mods) {
  const out = new Map();
  const walk = (n) => {
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (!n || typeof n !== 'object') return;
    if (n.id && n.type && (n.q || n.qb) && !out.has(n.id)) out.set(n.id, n);
    Object.values(n).forEach(walk);
  };
  mods.forEach((m) => walk(m && 'default' in m ? m.default : m));
  return out;
}

/** L'exercici d'una targeta: del banc (o d'una família, amb la llavor) o escrit dins d'un tema. */
function exerciseOf(card, bank, units) {
  const fromBank = bank && resolveRef(bank, card.seed != null ? { ref: card.ref, seed: card.seed } : { ref: card.ref });
  if (fromBank) return { ex: fromBank, bank: true };
  const ex = units && units.get(card.ref);
  return ex ? { ex, bank: false } : null;
}

/**
 * Repàs a mida d'una assignatura: els exercicis que s'han fallat i que avui toca tornar a fer (repetició
 * espaciada, lib/review.js). La sessió es fixa en obrir la pestanya: el que es respon no desapareix.
 */
export default function Review() {
  const course = useCourse();
  const { ui, L } = useLang();
  const S = K[ui];
  const st = useReview();
  const ent = useEntitlement('adaptive-review');
  const bank = useModule(course.k + ':bank', course.bank);
  const loadUnits = useMemo(() => () => Promise.all(course.units.map((u) => u.load())).then(indexUnits), [course]);
  const units = useModule(course.k + ':review-units', loadUnits);
  const [session, setSession] = useState(null);
  const [done, setDone] = useState({});

  const cap = ent.limit && ent.limit.reviewPerDay > 0 ? Math.max(0, ent.limit.reviewPerDay - reviewedToday(st)) : MAX;
  useEffect(() => {
    if (session || !bank || !units) return;
    const now = Date.now();
    const list = [];
    for (const it of pickSession(getReview().cards, now, { max: MAX * 3, subjects: [course.k] })) {
      const found = exerciseOf(it.card, bank, units);
      // l'exercici ja no existeix (s'ha canviat el temari): fora del repàs
      if (!found) { dropCard(course.k, it.id); continue; }
      if (list.length < Math.min(MAX, cap)) list.push({ ...it, ...found });
    }
    setSession(list);
  }, [session, bank, units, course.k, cap]);

  const mine = st.cards[course.k] || {};
  const total = Object.keys(mine).length;
  const boxes = INTERVALS.map((_, i) => Object.values(mine).filter((c) => c.box === i + 1).length);
  const next = Object.values(mine).reduce((m, c) => Math.min(m, c.due), Infinity);
  const fmt = (ms) => new Date(ms).toLocaleDateString(ui === 'en' ? 'en-GB' : ui === 'es' ? 'es-ES' : 'ca-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const nDone = Object.keys(done).length;

  if (!ent.allowed) {
    return (
      <div className="kit-review">
        <h2 className="kit-h2">{S.reviewH}</h2>
        <ProNote feature="adaptive-review" />
      </div>
    );
  }
  return (
    <div className="kit-review">
      <h2 className="kit-h2">{S.reviewH}</h2>
      <p className="kit-muted">{L(
        'Els exercicis que falles a les lliçons, a la pràctica o als simulacres tornen aquí al cap d\'1, 3, 7, 16 i 35 dies. Si l\'encertes cada vegada, el domines i surt del repàs; si el falles, torna a començar.',
        'Los ejercicios que fallas en las lecciones, la práctica o los simulacros vuelven aquí al cabo de 1, 3, 7, 16 y 35 días. Si lo aciertas cada vez, lo dominas y sale del repaso; si lo fallas, vuelve a empezar.',
        'Exercises you get wrong in lessons, practice or mock exams come back here after 1, 3, 7, 16 and 35 days. Get one right every time and you master it and it leaves the review; get it wrong and it starts again.')}</p>
      <dl className="am-stats kit-stats" id="kit-review-stats">
        <div className="am-stat"><dt className="am-sr">{L('Per avui', 'Para hoy', 'Due today')}</dt><dd><b data-out="due">{session ? session.length : '…'}</b><span>{L('per avui', 'para hoy', 'due today')}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{L('Al repàs', 'En el repaso', 'In review')}</dt><dd><b data-out="total">{total}</b><span>{L('al repàs', 'en el repaso', 'in review')}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{L('Dominats', 'Dominados', 'Mastered')}</dt><dd><b>{st.stats.mastered}</b><span>{L('dominats', 'dominados', 'mastered')}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{L('Ratxa', 'Racha', 'Streak')}</dt><dd><b>{streak(st.stats.days, Date.now())}</b><span>{L('dies seguits', 'días seguidos', 'days in a row')}</span></dd></div>
      </dl>
      {total > 0 && (
        <p className="kit-review-boxes" aria-label={L('Exercicis per caixa', 'Ejercicios por caja', 'Exercises per box')}>
          {boxes.map((n, i) => <span key={i} className={'kit-rbox' + (n ? ' is-on' : '')} title={L(`Caixa ${i + 1}: torna al cap de ${INTERVALS[i]} dies`, `Caja ${i + 1}: vuelve al cabo de ${INTERVALS[i]} días`, `Box ${i + 1}: back after ${INTERVALS[i]} days`)}><b>{n}</b> · {INTERVALS[i]} d</span>)}
        </p>
      )}
      {!session ? <p className="kit-loading">{S.loading}</p> : session.length === 0 ? (
        <div className="kit-review-empty" id="kit-review-empty">
          <p><b>{cap === 0 && ent.limit ? L('Has arribat al límit de repàs d\'avui del pla gratuït.', 'Has llegado al límite de repaso de hoy del plan gratuito.', 'You have reached today\'s review limit on the free plan.') : L('Avui no tens res per repassar.', 'Hoy no tienes nada que repasar.', 'Nothing to review today.')}</b></p>
          {total > 0 && Number.isFinite(next) && <p className="kit-muted">{L(`El proper: ${fmt(next)}.`, `El próximo: ${fmt(next)}.`, `Next one: ${fmt(next)}.`)}</p>}
          {total === 0 && <p className="kit-muted">{L('Quan fallis algun exercici, el tornaràs a trobar aquí.', 'Cuando falles algún ejercicio, lo volverás a encontrar aquí.', 'When you get an exercise wrong, you will find it here again.')}</p>}
          <div className="am-btn-row"><Link className="am-btn am-btn-secondary" to={course.path + '/practica'}>{S.quick.practice}</Link></div>
        </div>
      ) : (
        <>
          <p className="kit-review-prog" data-out="prog">{L(`${nDone} de ${session.length} fets`, `${nDone} de ${session.length} hechos`, `${nDone} of ${session.length} done`)}</p>
          {session.map((it, i) => (
            <Exercise key={it.id} ex={it.ex} n={i + 1} done={done[it.id]}
              onResult={(r) => {
                // només compta el primer intent de cada exercici de la sessió
                if (it.id in done) return;
                const opts = { seed: it.card.seed, review: true };
                if (it.bank) recordPractice(course.k, it.card.ref, r, opts);
                else { logAttempt({ subject: course.k, item: it.id, correct: r.ok, kind: 'quiz' }); recordReview(course.k, it.id, r.ok, opts); }
                setDone((d) => ({ ...d, [it.id]: r.ok }));
              }} />
          ))}
          {nDone === session.length && <p className="kit-review-end" id="kit-review-end">{L('Repàs d\'avui fet. Torna demà!', 'Repaso de hoy hecho. ¡Vuelve mañana!', 'Today\'s review is done. Come back tomorrow!')}</p>}
        </>
      )}
    </div>
  );
}
