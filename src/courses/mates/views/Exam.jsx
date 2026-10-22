import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { lsJSON, lsSetJSON } from '../../../lib/storage.js';
import { Z } from '../engine/z.js';
import { getContent } from '../content/index.js';
import { useSlot } from '../store.js';
import { Html } from '../ui.jsx';

/**
 * Simulacre d'examen. L'estat es desa a localStorage amb la clau i el format de l'original
 * ({ mode, seed, el, done, sc }); el rellotge (run, t0) només viu mentre la pàgina és oberta.
 * L'examen surt de la llavor: en canviar d'idioma es torna a generar igual.
 */
const EXKEY = 'teoria-mates-exam-v2';
const newExSeed = () => Math.floor(Math.random() * 2147483646) + 1;
function exLoad() {
  const d = lsJSON(EXKEY, null);
  const e = { mode: 'cp', seed: 0, el: 0, done: false, sc: {}, run: false, t0: 0 };
  if (d && d.seed) Object.assign(e, { mode: d.mode || 'cp', seed: d.seed, el: d.el || 0, done: !!d.done, sc: d.sc || {} });
  if (!e.seed) e.seed = newExSeed();
  return e;
}
const exElapsed = (e) => e.el + (e.run ? Date.now() - e.t0 : 0);
const exSave = (e) => lsSetJSON(EXKEY, { mode: e.mode, seed: e.seed, el: exElapsed(e), done: e.done, sc: e.sc });

/** Rellotge (compte enrere des de la durada del nivell; negatiu quan s'ha passat el temps). */
function Clock({ ex, min }) {
  const [, tick] = useState(0);
  useEffect(() => {
    if (!ex.run) return undefined;
    const t = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, [ex.run]);
  const dur = min * 60000, el = exElapsed(ex), left = dur - el, neg = left < 0, s = Math.floor(Math.abs(left) / 1000);
  return <span className={'extime' + (el > dur ? ' over' : '')} id="ex-time">{(neg ? '−' : '') + String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0')}</span>;
}

export default function Exam() {
  const { lang, L } = useLang();
  const C = getContent(lang);
  const { md, BX, UL, fmtP, bkFormBox, stepRow } = C;
  const [ex, , setEx] = useSlot('ex', exLoad);
  const data = useMemo(() => C.bkSeeded(ex.seed, () => C.exBuild(ex.mode)), [C, ex.seed, ex.mode]);
  const MD = C.EXM(), m = MD[ex.mode];
  const tot = data.reduce((a, e) => a + e.parts.reduce((b, p) => b + p.pts, 0), 0);
  const score = data.reduce((a, e, i) => a + e.parts.reduce((b, p, j) => b + (ex.sc[i + '-' + j] != null ? Math.min(ex.sc[i + '-' + j], p.pts) : 0), 0), 0);
  const graded = data.reduce((a, e, i) => a + e.parts.filter((p, j) => ex.sc[i + '-' + j] != null).length, 0);
  const nparts = data.reduce((a, e) => a + e.parts.length, 0);
  const el = exElapsed(ex);

  // cada canvi es desa com feia exSave() de l'original
  const change = (patch) => { const n = { ...ex, ...(typeof patch === 'function' ? patch(ex) : patch) }; setEx(n); exSave(n); };
  const exNew = (mode) => change((o) => ({ mode: mode || o.mode, seed: newExSeed(), run: false, el: 0, done: false, sc: {} }));
  const top = () => window.scrollTo(0, 0);
  const startStop = () => change((o) => (o.run ? { el: o.el + Date.now() - o.t0, run: false } : { t0: Date.now(), run: true }));
  // en entregar, es baixa fins a la correcció
  const sumRef = useRef(null), toSum = useRef(false);
  useLayoutEffect(() => { if (ex.done && toSum.current && sumRef.current) { toSum.current = false; sumRef.current.scrollIntoView(); } }, [ex.done]);
  const done = () => { toSum.current = true; change((o) => ({ ...(o.run ? { el: o.el + Date.now() - o.t0, run: false } : null), done: true })); };
  const grade = (key, v) => change((o) => ({ sc: { ...o.sc, [key]: v } }));

  const part = (p, i, j, letter) => {
    const key = i + '-' + j, cur = ex.sc[key];
    let sol = null;
    if (ex.done) {
      const S_ = p.sol();
      sol = (
        <div className="ex-sol">
          <Html html={(p.fx ? bkFormBox(p.fx()) : '') + (Array.isArray(S_) ? '<div class="steps">' + S_.map(stepRow).join('') + '</div>' : S_) +
            '<div class="bx rub"><div class="bh">' + L('Com es puntua', 'Cómo se puntúa') + ' (' + fmtP(p.pts) + ' ' + L('punts', 'puntos') + ')</div><ul>' + p.rub.map(([f, t]) => '<li><b>' + Math.round(f * 100) + ' %</b> · ' + md(t) + '</li>').join('') + '</ul></div>'} />
          <div className="row ex-grade">
            <span className="small"><b>{L('La teva nota en aquest apartat', 'Tu nota en este apartado') + ':'}</b></span>
            {Z.range(0, Math.round(p.pts * 4)).map((q) => q / 4).map((v) => <button key={v} type="button" className="chipbtn" data-exg={key + '|' + v} aria-pressed={cur === v} onClick={() => grade(key, v)}>{fmtP(v)}</button>)}
          </div>
        </div>
      );
    }
    return (
      <div className="ex-part" key={j}>
        <div className="ex-q">
          {letter && <div className="ex-qh"><b>{letter})</b><span className="pill">{fmtP(p.pts) + ' ' + (p.pts === 1 ? L('punt', 'punto') : L('punts', 'puntos'))}</span></div>}
          <Rich html={p.q()} />
        </div>
        {sol}
      </div>
    );
  };

  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Simulacre d\'examen', 'Simulacro de examen')}</div>
        <h2>{L('Examen de prova', 'Examen de prueba')}</h2>
        <p className="lead">{L('Fes-lo en paper, amb el formulari al costat i el rellotge en marxa. Quan acabis, entrega\'l: veuràs la solució de cada apartat, com es puntua, i et poses la nota tu mateix. Cada «Nou examen» canvia les dades.', 'Hazlo en papel, con el formulario al lado y el reloj en marcha. Cuando acabes, entrégalo: verás la solución de cada apartado, cómo se puntúa, y te pones la nota tú mismo. Cada «Nuevo examen» cambia los datos.')}</p>
      </div>
      <div className="card stack noprint p-g10">
        <div className="lbl-s">{L('Nivell', 'Nivel')}</div>
        <div className="tabs2" id="ex-modes">
          {Object.keys(MD).map((k) => <button key={k} type="button" data-exm={k} aria-pressed={ex.mode === k} onClick={() => { exNew(k); top(); }}>{MD[k].n}</button>)}
        </div>
        <Rich as="p" className="small muted" html={md(m.d)} />
        <div className="row">
          <button type="button" className="btn primary" id="ex-new" onClick={() => exNew()}>{L('Nou examen', 'Nuevo examen')}</button>
          <Clock ex={ex} min={m.min} />
          <button type="button" className="btn" id="ex-start" onClick={startStop}>{ex.run ? L('Pausa', 'Pausa') : (el > 0 ? L('Continua', 'Continúa') : L('Comença', 'Empieza'))}</button>
          <button type="button" className="btn ghost" id="ex-reset" onClick={() => change(() => ({ run: false, el: 0 }))}>{L('Reinicia el rellotge', 'Reinicia el reloj')}</button>
          <button type="button" className="btn ghost" id="ex-print" onClick={() => { try { window.print(); } catch { /* sense impressió */ } }}>{L('Imprimeix', 'Imprime')}</button>
        </div>
      </div>
      <div className="stack p-mt14">
        {ex.done && (
          <div className="card stack exsum p-g8" ref={sumRef}>
            <div className="lbl-s">{L('Correcció', 'Corrección')}</div>
            <div className="exnote"><span>{L('Nota', 'Nota')}</span><b>{fmtP(score)}</b><span>/ {fmtP(tot)}</span></div>
            <p className="small muted">{graded < nparts ? L(`Et queden ${nparts - graded} apartats per puntuar. Compara la teva resposta amb la solució i la rúbrica de cadascun i tria la nota amb els botons.`, `Te quedan ${nparts - graded} apartados por puntuar. Compara tu respuesta con la solución y la rúbrica de cada uno y elige la nota con los botones.`) : L('Ja has puntuat tots els apartats.', 'Ya has puntuado todos los apartados.')}</p>
            <div className="exbars">
              {data.map((e, i) => {
                const mx = e.parts.reduce((a, p) => a + p.pts, 0), got = e.parts.reduce((a, p, j) => a + Math.min(ex.sc[i + '-' + j] || 0, p.pts), 0);
                return <div key={i} className="exbar"><span>{L('Ex. ', 'Ej. ') + (i + 1)}</span><div className="track"><div style={{ width: Math.round(100 * got / mx) + '%' }}></div></div><span className="mono small">{fmtP(got) + '/' + fmtP(mx)}</span></div>;
              })}
            </div>
            <div className="row noprint">
              <button type="button" className="btn" id="ex-hide" onClick={() => { change(() => ({ done: false })); top(); }}>{L('Amaga les solucions i torna-hi', 'Oculta las soluciones y vuelve a intentarlo')}</button>
              <button type="button" className="btn primary" id="ex-new2" onClick={() => { exNew(); top(); }}>{L('Nou examen', 'Nuevo examen')}</button>
            </div>
          </div>
        )}
        <Html html={BX('warn', L('Instruccions (com al CP)', 'Instrucciones (como en el CP)'), UL([L(`Durada: ${m.min} minuts. Total: ${fmtP(tot)} punts.`, `Duración: ${m.min} minutos. Total: ${fmtP(tot)} puntos.`), L('Justifiqueu totes les respostes. Una resposta sense justificació no puntua.', 'Justificad todas las respuestas. Una respuesta sin justificación no puntúa.'), L('Podeu fer servir el formulari (el teniu aquí sota). Qualsevol resultat parcial que no hi sigui s\'ha d\'enunciar i demostrar.', 'Podéis usar el formulario (lo tenéis aquí debajo). Cualquier resultado parcial que no esté en él se tiene que enunciar y demostrar.')]))} />
        <Rich className="noprint" html={C.formViewer()} />
        {data.map((e, i) => (
          <section key={i} className="exc exq" id={'exq-' + i}>
            <div className="exc-h"><span className="src">{L('Exercici ', 'Ejercicio ') + (i + 1)}</span><span className="pill">{e.t()}</span><span className="pill">{fmtP(e.parts.reduce((a, p) => a + p.pts, 0)) + ' ' + L('punts', 'puntos')}</span></div>
            <div className="exc-b">{e.parts.map((p, j) => part(p, i, j, e.parts.length > 1 ? 'abcd'[j] : ''))}</div>
          </section>
        ))}
        {!ex.done && (
          <div className="card stack noprint p-g8">
            <p className="small">{L('Quan acabis (o quan s\'acabi el temps), entrega l\'examen per veure les solucions i puntuar-te.', 'Cuando acabes (o cuando se acabe el tiempo), entrega el examen para ver las soluciones y puntuarte.')}</p>
            <div><button type="button" className="btn primary" id="ex-done" onClick={done}>{L('Entrega i corregeix', 'Entrega y corrige')}</button></div>
          </div>
        )}
      </div>
    </>
  );
}
