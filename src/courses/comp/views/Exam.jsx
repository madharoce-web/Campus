import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import CE from '../engine/ce.js';
import { getContent, examQuestions } from '../content/index.js';
import { newSeed } from '../engine/rng.js';
import { useSlot } from '../store.js';
import { useCourse } from '../course.js';
import { Html } from '../ui.jsx';

/** Estat inicial del simulacre (EX de l'original). */
export const EX0 = { phase: 'start', dur: 60, t0: 0, end: 0, seed: 0, sol: {}, grade: null, per: {}, auto: false, used: 0, ok: [] };

/** Temps restant (o transcorregut, sense límit), actualitzat cada segon mentre l'examen corre. */
function Timer({ ex }) {
  const { C } = getContent(useLang().lang);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const left = ex.end ? (ex.end - now) / 1000 : 0;
  return <span className={'timer' + (ex.end && left < 300 ? ' low' : '')} id="ex-timer">{ex.end ? C.mmss(left) : C.mmss((now - ex.t0) / 1000)}</span>;
}

/** Simulacre de CP1: examen generat, cronometrat i corregit sobre 10. */
export default function Exam() {
  const { lang, L } = useLang();
  const { C, EXBLK } = getContent(lang);
  const { submitExam, hist } = useCourse();
  const [ex, setEx] = useSlot('ex', EX0);
  const [ans, setAns, resetAns] = useSlot('exans', {});
  const [sure, setSure] = useState({ sub: null, quit: false });
  const root = useRef(null), inputs = useRef([]);

  // la barra de l'examen queda just sota la barra superior (--hdr: la seva alçada)
  useLayoutEffect(() => {
    const nav = document.querySelector('.m-navbar'), scope = root.current && root.current.closest('[data-course]');
    if (nav && scope) scope.style.setProperty('--hdr', nav.offsetHeight + 'px');
  }, [ex.phase]);

  const head = (
    <div className="pagehead" ref={root}>
      <div className="eyebrow">{L('Simulacre', 'Simulacro')}</div><h2>{L('Examen tipus CP1', 'Examen tipo CP1')}</h2>
      <p className="lead">{L('Un examen nou cada vegada, amb la mateixa estructura que la pràctica del CP1 i números més dolents. No hi ha cap ajuda fins que l\'entregues: després tens la nota, què has fallat i la solució pas a pas de cada pregunta.', 'Un examen nuevo cada vez, con la misma estructura que la práctica del CP1 y números más malos. No hay ninguna ayuda hasta que lo entregas: después tienes la nota, qué has fallado y la solución paso a paso de cada pregunta.')}</p>
    </div>
  );
  const B = EXBLK();

  if (ex.phase === 'start') {
    const h = (hist || []).slice().reverse();
    const start = () => {
      const t0 = Date.now();
      resetAns({});
      setEx({ phase: 'run', seed: newSeed(), sol: {}, grade: null, t0, end: ex.dur ? t0 + ex.dur * 60000 : 0 });
      setSure({ sub: null, quit: false });
      window.scrollTo(0, 0);
    };
    return (
      <>
        {head}
        <div className="card stack">
          <Html html={C.TBL([L('Bloc', 'Bloque'), L('Preguntes', 'Preguntas'), L('Punts', 'Puntos')], [[B.mida, L('2 conversions + 1 transferència', '2 conversiones + 1 transferencia'), '1,5'], [B.base, L('binari ↔ hex/octal amb decimals + base estranya amb període', 'binario ↔ hex/octal con decimales + base rara con periodo'), '2'], [B.op, L('suma o resta en base b', 'suma o resta en base b'), '1'], [B.sm, L('dos nombres en base 5, 6 o 7, a SM de 8 bits', 'dos números en base 5, 6 o 7, a SM de 8 bits'), '1'], [B.cx, L('±a C1 (8 bits), ±b C2 (9 bits), ±c CE (10 bits)', '±a C1 (8 bits), ±b C2 (9 bits), ±c CE (10 bits)'), '3'], [B.ieee, L('dos nombres a simple precisió', 'dos números a simple precisión'), '1,5']])} />
          <div className="ctrl">
            <span className="small p-b600">{L('Temps', 'Tiempo')}</span>
            <div className="ctrl" role="group">
              {[[45, '45 min'], [60, '60 min'], [90, '90 min'], [0, L('sense límit', 'sin límite')]].map(([v, lab]) => (
                <button key={v} type="button" className="chipbtn" data-dur={v} aria-pressed={ex.dur === v} onClick={() => setEx({ dur: v })}>{lab}</button>
              ))}
            </div>
          </div>
          <p className="small muted">{L('Format de les respostes: dígits sense subíndex (periòdics amb parèntesis), bits sencers amb els zeros de l\'esquerra, IEEE en 32 bits o 8 hex, i decimals amb coma o punt. Pots fer servir calculadora per als canvis de mida.', 'Formato de las respuestas: dígitos sin subíndice (periódicos con paréntesis), bits enteros con los ceros de la izquierda, IEEE en 32 bits u 8 hex, y decimales con coma o punto. Puedes usar calculadora para los cambios de tamaño.')}</p>
          <div className="row"><button type="button" className="btn primary" id="ex-go" onClick={start}>{L('Comença l\'examen', 'Empieza el examen')}</button></div>
          {h.length > 0 && <div className="small muted">{L('Notes anteriors: ', 'Notas anteriores: ')}{h.map((x, i) => <Fragment key={i}>{i ? ' · ' : ''}<span className="mono">{CE.fnum(x.g, 2)}</span> ({x.d})</Fragment>)}</div>}
        </div>
      </>
    );
  }

  const qs = examQuestions(lang, ex.seed);
  const done = ex.phase === 'done';
  const nAns = qs.filter((q, i) => String(ans[i] || '').trim()).length;
  let bar;
  if (!done) {
    bar = (
      <div className="exam-bar">
        <Timer ex={ex} />
        <span className="small muted" id="ex-cnt">{nAns + '/' + qs.length + L(' respostes', ' respuestas')}</span>
        <span className="grow"></span>
        <button type="button" className="btn ghost" id="ex-quit" onClick={() => { if (!sure.quit) { setSure((s) => ({ ...s, quit: true })); return; } setEx({ phase: 'start' }); }}>{sure.quit ? L('Segur? Es perd tot', '¿Seguro? Se pierde todo') : L('Abandona', 'Abandona')}</button>
        <button type="button" className="btn primary" id="ex-sub" onClick={() => { if (nAns < qs.length && sure.sub == null) { setSure((s) => ({ ...s, sub: qs.length - nAns })); return; } submitExam(false); }}>{sure.sub != null ? L('Segur? Falten ' + sure.sub, '¿Seguro? Faltan ' + sure.sub) : L('Entrega', 'Entrega')}</button>
      </div>
    );
  } else {
    bar = (
      <div className="card stack">
        <div className="row p-grade"><span className="grade">{CE.fnum(ex.grade, 2)}</span><span className="muted">/ 10</span><span className="small muted">{(ex.auto ? L('S\'ha acabat el temps. ', 'Se ha acabado el tiempo. ') : '') + L('Temps fet servir: ', 'Tiempo usado: ') + C.mmss(ex.used)}</span></div>
        <div className="gradebar">{Object.keys(B).map((k) => (ex.per[k] ? <div key={k}>{B[k]}<br /><b>{CE.fnum(ex.per[k][0], 2)} / {CE.fnum(ex.per[k][1], 2)}</b></div> : null))}</div>
        <Html html={C.fb(ex.grade >= 5 ? 'ok' : 'bad', ex.grade >= 8 ? L('Molt bé. Repeteix-lo amb menys temps.', 'Muy bien. Repítelo con menos tiempo.') : ex.grade >= 5 ? L('Aprovat. Mira els blocs amb menys punts i practica\'ls a la pestanya Pràctica (nivell Dur).', 'Aprobado. Mira los bloques con menos puntos y practícalos en la pestaña Práctica (nivel Duro).') : L('Encara no. Obre la solució de cada pregunta fallada i després practica aquell bloc.', 'Todavía no. Abre la solución de cada pregunta fallada y después practica ese bloque.'))} />
        <div className="row">
          <button type="button" className="btn primary" id="ex-again" onClick={() => { setEx({ phase: 'start' }); window.scrollTo(0, 0); }}>{L('Un altre examen', 'Otro examen')}</button>
          <button type="button" className="btn ghost" id="ex-wrong" onClick={() => { const sol = { ...ex.sol }; qs.forEach((q, i) => { if (!ex.ok[i]) sol[i] = true; }); setEx({ sol }); }}>{L('Obre les solucions de les fallades', 'Abre las soluciones de las falladas')}</button>
        </div>
      </div>
    );
  }

  // preguntes agrupades per blocs
  const groups = [];
  qs.forEach((q, i) => { if (!groups.length || groups[groups.length - 1].blk !== q.blk) groups.push({ blk: q.blk, items: [] }); groups[groups.length - 1].items.push(i); });
  const next = (i) => { const el = inputs.current[i + 1]; if (el) el.focus(); };
  return (
    <>
      {head}
      {bar}
      <div className="stack p-g6mt6">
        {groups.map((g) => (
          <Fragment key={g.items[0]}>
            <h3 className="p-mt12">{B[g.blk]}</h3>
            <div className="stack p-g8">
              {g.items.map((i) => {
                const q = qs[i], v = ans[i] == null ? '' : ans[i], ok = ex.ok[i], num = i + 1;
                const m = done && !ok && String(v).trim() ? C.missHint(q.a, v) : null;
                return (
                  <div key={i} className={'qcard' + (done ? (ok ? ' ok' : ' bad') : '')} id={'exq-' + i}>
                    <div className="qh"><span className="qn">{num}.</span><Rich as="span" className="p-qt" html={q.p()} /><span className="pts">{CE.fnum(q.pts, 2)} p</span></div>
                    {done ? (
                      <>
                        <div className="small">
                          {L('La teva resposta: ', 'Tu respuesta: ')}<span className="res">{String(v).trim() ? v : '—'}</span>
                          {ok ? <> <span className="yes">✓</span></> : <><br />{L('Correcta: ', 'Correcta: ')}<span className="res">{C.ansShow(q.a)}</span>{m ? <><br /><span className="muted">{m}</span></> : null}</>}
                        </div>
                        <div className="row"><button type="button" className={'btn' + (ex.sol[i] ? ' primary' : ' ghost')} data-exsol={i} onClick={() => setEx((e) => ({ sol: { ...e.sol, [i]: !e.sol[i] } }))}>{L('Solució', 'Solución')}</button></div>
                        {ex.sol[i] && <Html html={q.sol()} />}
                      </>
                    ) : (
                      <input ref={(el) => { inputs.current[i] = el; }} type="text" data-exin={i} value={v} placeholder={C.ansPh(q.a)} spellCheck="false" autoComplete="off" aria-label={L('Resposta ', 'Respuesta ') + num}
                        onChange={(e) => setAns((a) => ({ ...a, [i]: e.target.value }))} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); next(i); } }} />
                    )}
                  </div>
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
