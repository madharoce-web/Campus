import { useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { useSlot } from '../store.js';
import { Html } from '../ui.jsx';
import Lab from '../labs/index.jsx';

const EMPTY = { v: '', r: null, sol: false, lab: false, chk: null };
const pkey = (cid, i) => cid + ':' + i;

/** Un apartat: enunciat, resposta (text o opcions), correcció, solució i laboratori. */
function Part({ c, i, s, setPart }) {
  const { lang, L } = useLang();
  const { C } = getContent(lang);
  const p = c.parts[i], a = p.a, pid = 'xp-' + c.id + '-' + i;
  const inp = useRef(null);
  const set = (patch) => setPart(i, patch);
  const check = () => {
    const v = s.v; if (!String(v).trim()) return;
    const r = C.ansOK(a, v);
    set({ r, chk: v });
    if (!r && inp.current) inp.current.focus();
  };
  // la pista de l'error es torna a calcular en l'idioma actual amb la resposta comprovada
  const miss = s.r === false && s.chk != null && a.k !== 'mc' ? C.missHint(a, s.chk) : null;
  let res = null;
  if (s.r === true) res = C.fb('ok', '<b>' + L('Correcte', 'Correcto') + '.</b> ' + (a.k === 'mc' ? '' : '<span class="res">' + C.esc(C.ansShow(a)) + '</span>'));
  else if (s.r === false) res = C.fb('bad', '<b>' + L('Encara no', 'Todavía no') + '.</b> ' + (miss ? C.esc(miss) + ' ' : '') + L('Torna-ho a provar o obre la solució.', 'Vuelve a intentarlo o abre la solución.'));
  return (
    <div className={'part' + (s.r === true ? ' ok' : s.r === false ? ' bad' : '')} id={pid}>
      <div className="part-h">
        <span className="pl">{p.l}</span>
        <Rich className="pq" html={p.q()} />
        <div className="pa">
          {a && a.k !== 'mc' && (
            <>
              <input ref={inp} type="text" id={pid + '-in'} value={s.v} placeholder={C.ansPh(a)} spellCheck="false" autoComplete="off" aria-label={L('Resposta', 'Respuesta')}
                onChange={(e) => set({ v: e.target.value })} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); check(); } }} />
              <button type="button" className="btn" onClick={check}>{L('Comprova', 'Comprueba')}</button>
            </>
          )}
          <button type="button" className={'btn' + (s.sol ? ' primary' : ' ghost')} onClick={() => set({ sol: !s.sol })}>{L('Solució', 'Solución')}</button>
          {p.lab && <button type="button" className={'btn' + (s.lab ? ' primary' : ' ghost')} onClick={() => set({ lab: !s.lab })}>Lab</button>}
        </div>
      </div>
      {a && a.k === 'mc' && (
        <div className="mcrow">
          {a.opts().map((t, j) => (
            <button key={j} type="button" className={'pick' + (s.r != null && String(s.v) === String(j) ? (j === a.v ? ' ok' : ' bad') : '')} aria-pressed={String(s.v) === String(j)}
              onClick={() => set({ v: String(j), r: j === a.v, chk: null })}><Rich as="span" className="rc" html={t} /></button>
          ))}
        </div>
      )}
      <Html html={res} />
      {s.sol && (
        <div className="stack p-g6">
          {a && <div className="small"><b>{L('Resultat', 'Resultado')}:</b> <span className="res">{C.ansShow(a)}</span></div>}
          <Html html={p.sol()} />
        </div>
      )}
      {s.lab && p.lab && <Lab w={p.lab[0]} id={'exl-' + c.id + '-' + i} cfg={p.lab[1]} />}
    </div>
  );
}

/** Targeta d'un exercici amb els seus apartats. */
function Card({ c, xp, setXp }) {
  const { lang, L } = useLang();
  const { C } = getContent(lang);
  const [h, setH] = useSlot('ex:' + c.id, { hint: false });
  const st = (i) => xp[pkey(c.id, i)] || EMPTY;
  const n = c.parts.length, d = c.parts.filter((p, i) => st(i).r === true).length;
  const allOpen = c.parts.every((p, i) => st(i).sol);
  const setPart = (i, patch) => setXp((m) => ({ ...m, [pkey(c.id, i)]: { ...(m[pkey(c.id, i)] || EMPTY), ...patch } }));
  const toggleAll = () => setXp((m) => { const o = { ...m }; c.parts.forEach((p, i) => { o[pkey(c.id, i)] = { ...(o[pkey(c.id, i)] || EMPTY), sol: !allOpen }; }); return o; });
  return (
    <div className="exc" id={'exc-' + c.id}>
      <div className="exc-h">
        <Rich as="span" className="src" html={typeof c.src === 'function' ? c.src() : c.src} />
        <Rich className="q" html={c.q()} />
        <span className="pill">{d}/{n}</span>
      </div>
      <div className="exc-b">
        <div className="row">
          {c.hint && <button type="button" className={'btn' + (h.hint ? ' primary' : '')} onClick={() => setH({ hint: !h.hint })}>{L('Pista', 'Pista')}</button>}
          <button type="button" className="btn ghost" onClick={toggleAll}>{allOpen ? L('Amaga les solucions', 'Oculta las soluciones') : L('Mostra totes les solucions', 'Muestra todas las soluciones')}</button>
        </div>
        {h.hint && c.hint && <Html html={C.fb('info', c.hint())} />}
        <div className="parts">{c.parts.map((p, i) => <Part key={i} c={c} i={i} s={st(i)} setPart={setPart} />)}</div>
      </div>
    </div>
  );
}

/** Exercicis resolts: grups (T1, T2.1, T2.2, pràctica CP1) amb apartats comprovables. */
export default function Exercicis() {
  const { lang, L } = useLang();
  const { EXG } = getContent(lang);
  const [xf, setXF] = useSlot('xf', 'g1');
  const [xp, setXp] = useSlot('xp', {});
  const g = EXG.find((x) => x.id === xf) || EXG[0];
  const groupDone = (gr) => { let d = 0, n = 0; gr.items.forEach((c) => { c.parts.forEach((p, i) => { if ((xp[pkey(c.id, i)] || EMPTY).r === true) d++; }); n += c.parts.length; }); return [d, n]; };
  const setAll = (fn) => setXp(fn);
  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Exercicis resolts', 'Ejercicios resueltos')}</div>
        <h2>{L('Activitats, full d\'exercicis i pràctica CP1', 'Actividades, hoja de ejercicios y práctica CP1')}</h2>
        <p className="lead">{L('Cada apartat té una casella per escriure la teva resposta i comprovar-la. Si falles, la correcció intenta dir-te on és l\'error (bits/bytes, KB/KiB, sistema equivocat…). La solució pas a pas la genera el mateix motor que els laboratoris.', 'Cada apartado tiene una casilla para escribir tu respuesta y comprobarla. Si fallas, la corrección intenta decirte dónde está el error (bits/bytes, KB/KiB, sistema equivocado…). La solución paso a paso la genera el mismo motor que los laboratorios.')}</p>
      </div>
      <div className="tabs2" id="xg">
        {EXG.map((x) => { const [d, n] = groupDone(x); return <button key={x.id} type="button" data-g={x.id} aria-pressed={x.id === g.id} onClick={() => { setXF(x.id); window.scrollTo(0, 0); }}>{x.s()} <span className="muted">{d}/{n}</span></button>; })}
      </div>
      <section className="exgroup">
        <h3>{g.g()}</h3>
        {g.note && <Rich as="p" className="small muted" html={g.note()} />}
        {g.items.map((c) => <Card key={c.id} c={c} xp={xp} setXp={setAll} />)}
      </section>
    </>
  );
}
