import { useEffect, useRef, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent, practiceQuestion } from '../content/index.js';
import { newSeed } from '../engine/rng.js';
import { useSlot } from '../store.js';
import { useCourse } from '../course.js';
import { Html } from '../ui.jsx';

/** Estat inicial de la pràctica (PR de l'original). */
const PR0 = { k: 'units', lvl: 'dur', spec: null, a: '', done: false, ok: false, streak: 0, seen: [] };

/** Exercici nou del tipus k i nivell lvl: llavor nova i llista de conceptes vistos actualitzada. */
function fresh(lang, pr, k, lvl) {
  const spec = { k, lvl, seed: newSeed(), seen: pr.seen.slice() };
  const { seen } = practiceQuestion(lang, spec);
  return { k, lvl, spec, seen, a: k === 'range' ? { min: '', max: '' } : '', done: false };
}

/** Pràctica: exercicis generats de 11 tipus, nivell normal o dur, ratxa i correcció. */
export default function Practica() {
  const { lang, L } = useLang();
  const { C, PRK, prIsOK } = getContent(lang);
  const { record } = useCourse();
  const [pr, setPr] = useSlot('pr', () => ({ ...PR0, ...fresh(lang, PR0, PR0.k, PR0.lvl) }));
  const [focusReq, setFocusReq] = useState(0);
  const inp = useRef(null), minRef = useRef(null);
  useEffect(() => { if (focusReq) (inp.current || minRef.current)?.focus(); }, [focusReq]);

  const { q } = practiceQuestion(lang, pr.spec);
  const a = pr.a;
  const check = () => {
    if (a === '' || a == null || (q.range && (!a.min || !a.max))) return;
    const ok = prIsOK(q, a);
    setPr((p) => ({ done: true, ok, streak: ok ? p.streak + 1 : 0 }));
    record(ok);
  };
  const enter = (e) => { if (e.key === 'Enter' && !pr.done) { e.preventDefault(); check(); } };

  let ui;
  if (q.mc) {
    ui = (
      <div className="opts">
        {q.order.map((i, j) => (
          <button key={i} type="button" className={'opt' + (pr.done ? (i === 0 ? ' ok' : (a === i ? ' bad' : '')) : (a === i ? ' sel' : ''))} disabled={pr.done}
            onClick={() => { if (!pr.done) setPr({ a: i }); }}>
            <span className="k">{'abcd'[j]})</span><Rich as="span" className="body" html={q.o()[i]} />
          </button>
        ))}
      </div>
    );
  } else if (q.range) {
    ui = (
      <div className="ctrl">
        <label htmlFor="pr-min">{L('mínim', 'mínimo')}</label>
        <input ref={minRef} className="sm" type="text" id="pr-min" value={a.min} autoComplete="off" onChange={(e) => setPr((p) => ({ a: { ...p.a, min: e.target.value } }))} onKeyDown={enter} />
        <label htmlFor="pr-max">{L('màxim', 'máximo')}</label>
        <input className="sm" type="text" id="pr-max" value={a.max} autoComplete="off" onChange={(e) => setPr((p) => ({ a: { ...p.a, max: e.target.value } }))} onKeyDown={enter} />
      </div>
    );
  } else {
    ui = (
      <div className="row">
        <input ref={inp} type="text" id="pr-in" className="p-w340" value={a === C.OOR ? '' : a} placeholder={C.ansPh(q.a.k === 'oor' ? { k: 'bits' } : q.a)} spellCheck="false" autoComplete="off" aria-label={L('Resposta', 'Respuesta')}
          onChange={(e) => setPr({ a: e.target.value })} onKeyDown={enter} />
        {q.oor && <button type="button" className={'btn' + (a === C.OOR ? ' primary' : ' ghost')} id="pr-oor" disabled={pr.done} onClick={() => { if (!pr.done) setPr({ a: a === C.OOR ? '' : C.OOR }); }}>{L('No es pot representar', 'No se puede representar')}</button>}
      </div>
    );
  }

  let res = '';
  if (pr.done) {
    const ok = pr.ok;
    if (q.mc) res = C.fb(ok ? 'ok' : 'bad', C.okTxt(ok) + q.w());
    else if (q.range) res = C.fb(ok ? 'ok' : 'bad', C.okTxt(ok) + L('Rang: ', 'Rango: ') + '<span class="res">[' + C.esc(C.sgn(q.range[0])) + ', ' + C.esc(C.sgn(q.range[1])) + ']</span>') + q.sol();
    else {
      const miss = ok || a === C.OOR || q.a.k === 'oor' ? null : C.missHint(q.a, a);
      res = C.fb(ok ? 'ok' : 'bad', C.okTxt(ok) + L('Resultat: ', 'Resultado: ') + '<span class="res">' + C.esc(C.ansShow(q.a)) + '</span>' + (miss ? '<br>' + C.esc(miss) : '') + (!ok && a === C.OOR ? '<br>' + L('Sí que es pot: mira el rang del sistema.', 'Sí que se puede: mira el rango del sistema.') : '')) + q.sol();
    }
  }

  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Pràctica', 'Práctica')}</div><h2>{L('Exercicis generats', 'Ejercicios generados')}</h2>
        <Rich as="p" className="lead" html={L('Cada «Un altre» en genera un de nou. El nivell <b>Dur</b> barreja unitats binàries i decimals, bases poc habituals, periòdics, casos límit de rang, IEEE amb exponents negatius i problemes inversos. Si falles, la correcció t\'intenta dir quin error has fet.', 'Cada «Otro» genera uno nuevo. El nivel <b>Duro</b> mezcla unidades binarias y decimales, bases poco habituales, periódicos, casos límite de rango, IEEE con exponentes negativos y problemas inversos. Si fallas, la corrección intenta decirte qué error has cometido.')} />
      </div>
      <div className="tabs2" id="prk">
        {PRK().map(([k, n]) => <button key={k} type="button" data-k={k} aria-pressed={pr.k === k} onClick={() => setPr((p) => fresh(lang, p, k, p.lvl))}>{n}</button>)}
      </div>
      <div className="lvl p-mt10">
        <span>{L('Nivell', 'Nivel')}</span>
        <div className="tog" role="group">
          <button type="button" data-lvl="normal" aria-pressed={pr.lvl === 'normal'} onClick={() => setPr((p) => fresh(lang, p, p.k, 'normal'))}>Normal</button>
          <button type="button" data-lvl="dur" aria-pressed={pr.lvl === 'dur'} onClick={() => setPr((p) => fresh(lang, p, p.k, 'dur'))}>{L('Dur', 'Duro')}</button>
        </div>
        <span>{L('Ratxa', 'Racha')}: <b className="mono">{pr.streak}</b></span>
      </div>
      <div className="card stack p-mt12">
        <Rich html={q.p()} />
        {ui}
        <div className="row">
          {!pr.done && <button type="button" className="btn primary" id="pr-check" onClick={check}>{L('Comprova', 'Comprueba')}</button>}
          <button type="button" className="btn ghost" id="pr-new" onClick={() => { setPr((p) => fresh(lang, p, p.k, p.lvl)); setFocusReq((n) => n + 1); }}>{L('Un altre', 'Otro')}</button>
        </div>
        <Html html={res} />
      </div>
    </>
  );
}
