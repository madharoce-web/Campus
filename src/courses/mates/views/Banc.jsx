import { useEffect, useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { useSlot } from '../store.js';
import { useCourse } from '../course.js';
import { BK0, bkCheck, bkCount, bkInst, bkMake, bkNew } from '../bankmodel.js';
import { Html, Keys, useKeys } from '../ui.jsx';

/** Camp de resposta d'una targeta (bkInput): camp, vista prèvia de la matriu (si n'és una) i teclat de símbols. */
function BkInput({ it, j, k, ph, keys, onV, onEnter }) {
  const C = getContent(useLang().lang);
  const s = it.s, id = 'bkin-' + it.uid + '-' + j, v = s.v[j] || '';
  const ref = useRef(null);
  const insert = useKeys(ref, v, (t) => onV(j, t));
  return (
    <>
      <input ref={ref} type="text" className="bkin" id={id} data-u={it.uid} data-j={j} data-k={k || ''} value={v} spellCheck="false" autoComplete="off" disabled={!!s.done}
        placeholder={ph || (k === 'mat' ? '1 2; 3 4' : undefined)} onChange={(e) => onV(j, e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onEnter(); }} />
      {k === 'mat' && <Rich className="bkprev" id={'bkpv-' + it.uid + '-' + j} html={C.bkMatPrev(v)} />}
      {!s.done && <Keys syms={keys} onKey={insert} htmlFor={id} />}
    </>
  );
}

/** Targeta d'un exercici del banc (bkCard). */
function BkCard({ it, idx, upd, renew }) {
  const { lang, L } = useLang();
  const C = getContent(lang);
  const { record } = useCourse();
  const I = bkInst(C, it);
  const s = it.s, u = it.uid;
  if (!I) return <div className="exc" id={'bk-' + u}><div className="exc-b"><Html html={C.fb('bad', L('No s\'ha pogut generar aquest exercici.', 'No se ha podido generar este ejercicio.'))} /></div></div>;
  const a = I.a, H = C.BKHELP();
  const set = (patch) => upd(u, (o) => ({ ...o, ...(typeof patch === 'function' ? patch(o) : patch) }));
  const onV = (j, t) => set((o) => ({ v: { ...o.v, [j]: t } }));
  const check = () => { const n = bkCheck(C, I, s); upd(u, () => n); if (n.done && !s.done) record(n.ok); };
  const enter = () => { if (!s.done) check(); };
  const keys = (k) => C.BKKEYS[k] || C.BKKEYS.num;
  let ans = null;
  if (['num', 'ang', 'cx', 'list', 'set', 'hset', 'nset', 'rel', 'mat'].includes(a.k)) {
    ans = (
      <div className="stack p-g6">
        <BkInput it={it} j={0} k={a.k} ph={a.ph} keys={keys(a.k)} onV={onV} onEnter={enter} />
        <Rich as="span" className="tiny muted" html={a.help ? a.help() : H[a.k]} />
      </div>
    );
  } else if (a.k === 'multi') {
    ans = (
      <div className="stack p-g8">
        {a.f.map((f, j) => {
          if (f.k === 'tf') {
            const cur = s.v[j];
            return (
              <div key={j} className="prow"><Rich as="b" html={f.lab()} />
                <div className={'tog' + (s.done ? (s.res && s.res[j] ? ' ok' : ' bad') : '')} role="group">
                  <button type="button" data-bkt={u + '|' + j + '|1'} aria-pressed={cur === true} disabled={!!s.done} onClick={() => set((o) => ({ v: { ...o.v, [j]: true }, warn: false }))}>{L('Sí', 'Sí')}</button>
                  <button type="button" data-bkt={u + '|' + j + '|0'} aria-pressed={cur === false} disabled={!!s.done} onClick={() => set((o) => ({ v: { ...o.v, [j]: false }, warn: false }))}>No</button>
                </div>
              </div>
            );
          }
          return (
            <div key={j} className="stack p-g4">
              <label className="small" htmlFor={'bkin-' + u + '-' + j}><Rich as="b" html={f.lab()} />{s.done && s.res ? (s.res[j] ? <> <span className="yes">✓</span></> : <> <span className="no">✗</span></>) : null}</label>
              <BkInput it={it} j={j} k={f.k} keys={keys(f.k)} onV={onV} onEnter={enter} />
              <Rich as="span" className="tiny muted" html={f.help ? f.help() : H[f.k]} />
            </div>
          );
        })}
      </div>
    );
  } else if (a.k === 'tf') {
    ans = (
      <div className="props">
        {a.items.map((x, j) => {
          const cur = s.v[j];
          return (
            <div key={j} className="prow"><Rich as="span" html={x.t()} />
              <div className={'tog' + (s.done ? (cur === x.v ? ' ok' : ' bad') : '')} role="group">
                <button type="button" data-bkt={u + '|' + j + '|1'} aria-pressed={cur === true} disabled={!!s.done} onClick={() => set((o) => ({ v: { ...o.v, [j]: true }, warn: false }))}>{a.yes ? a.yes() : L('Cert', 'Cierto')}</button>
                <button type="button" data-bkt={u + '|' + j + '|0'} aria-pressed={cur === false} disabled={!!s.done} onClick={() => set((o) => ({ v: { ...o.v, [j]: false }, warn: false }))}>{a.no ? a.no() : L('Fals', 'Falso')}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (a.k === 'mc') {
    const ord = s.ord || a.o.map((_, j) => j);
    const pick = (j) => { if (s.done) return; const ok = j === a.c; upd(u, (o) => ({ ...o, v: { ...o.v, 0: j }, done: true, ok, sol: ok ? o.sol : true })); record(ok); };
    ans = (
      <div className="opts">
        {ord.map((j) => (
          <button key={j} type="button" className={'opt' + (s.done ? (j === a.c ? ' ok' : (s.v[0] === j ? ' bad' : '')) : '')} data-bkm={u + '|' + j} disabled={!!s.done} onClick={() => pick(j)}>
            <Rich as="span" className="body" html={a.o[j]()} />
          </button>
        ))}
      </div>
    );
  }
  const showAns = a.show ? '<b>' + L('Resposta', 'Respuesta') + ':</b> ' + a.show() : '';
  let chk = '';
  if (s.warn && !s.done) chk = C.fb('warn', L('Escriu una resposta (o tria les opcions) abans de comprovar-la.', 'Escribe una respuesta (o elige las opciones) antes de comprobarla.'));
  if (s.done && a.k !== 'self') chk = C.fb(s.ok ? 'ok' : 'bad', C.okTxt(s.ok) + (s.ok ? '' : showAns) + (s.ok && a.k !== 'mc' && a.k !== 'tf' && a.show ? showAns : ''));
  if (a.k === 'self' && s.done) chk = C.fb(s.ok ? 'ok' : 'info', s.ok ? L('Perfecte. Compara igualment la redacció amb la solució model.', 'Perfecto. Compara igualmente la redacción con la solución modelo.') : L('Torna-hi d\'aquí a una estona sense mirar la solució. Les demostracions s\'aprenen refent-les.', 'Vuelve a intentarlo dentro de un rato sin mirar la solución. Las demostraciones se aprenden rehaciéndolas.'));
  const self = (ok) => { if (s.done) return; upd(u, (o) => ({ ...o, done: true, ok })); record(ok); };
  let sol = '';
  if (s.sol) { const S_ = I.sol(); sol = (I.fx ? C.bkFormBox(I.fx()) : '') + (Array.isArray(S_) ? '<div class="steps">' + S_.map(C.stepRow).join('') + '</div>' : S_); }
  const hint = s.hint && I.hint ? '<div class="bx tip"><div class="bh">' + L('Pista', 'Pista') + '</div>' + C.bodyH(I.hint()) + '</div>' : '';
  const tname = C.BKT[it.t].n(), tpn = C.BKT[it.t].lv[it.lv][it.i].n();
  return (
    <div className="exc" id={'bk-' + u}>
      <div className="exc-h"><span className="src">{idx + 1}</span><span className="pill">{tname + ' · ' + tpn}</span><span className={'pill' + (it.lv === 3 ? ' out' : '')}>{C.LVN()[it.lv]}</span></div>
      <div className="exc-b">
        <Rich html={I.q()} />
        {ans}
        <Html html={chk} />
        <div className="row">
          {a.k === 'self'
            ? (s.sol && !s.done ? <>
              <span className="small">{L('L\'havies fet bé?', '¿La habías hecho bien?')}</span>
              <button type="button" className="btn" data-bka={u + '|ok'} onClick={() => self(true)}>{L('Sí', 'Sí')}</button>
              <button type="button" className="btn" data-bka={u + '|ko'} onClick={() => self(false)}>{L('No del tot', 'No del todo')}</button>
            </> : null)
            : (s.done || a.k === 'mc' ? null : <button type="button" className="btn primary" data-bka={u + '|check'} onClick={check}>{L('Comprova', 'Comprueba')}</button>)}
          {I.hint && <button type="button" className="btn ghost" data-bka={u + '|hint'} onClick={() => set((o) => ({ hint: !o.hint }))}>{s.hint ? L('Amaga la pista', 'Oculta la pista') : L('Pista', 'Pista')}</button>}
          <button type="button" className="btn ghost" data-bka={u + '|sol'} onClick={() => set((o) => ({ sol: !o.sol }))}>{s.sol ? L('Amaga la solució', 'Oculta la solución') : (a.k === 'self' ? L('Mostra la solució model', 'Muestra la solución modelo') : L('Solució pas a pas', 'Solución paso a paso'))}</button>
          <button type="button" className="btn ghost" data-bka={u + '|re'} title={L('Mateix tipus, dades noves', 'Mismo tipo, datos nuevos')} onClick={() => renew(it)}>{L('Un altre d\'aquest tipus', 'Otro de este tipo')}</button>
        </div>
        <Html html={hint + sol} />
      </div>
    </div>
  );
}

/** Banc d'exercicis per tema i nivell. */
export default function Banc() {
  const { lang, L } = useLang();
  const C = getContent(lang);
  const [bk, , setBk] = useSlot('bk', () => bkNew(C, BK0));
  // tanda nova si s'hi arriba sense exercicis (accés directe des de la teoria)
  useEffect(() => { if (!bk.items.length) setBk((o) => (o.items.length ? o : bkNew(getContent(lang), o))); }, [bk.items.length, lang, setBk]);
  const regen = (patch) => setBk((o) => bkNew(C, { ...o, ...patch }));
  const upd = (u, f) => setBk((o) => ({ ...o, items: o.items.map((x) => (x.uid === u ? { ...x, s: f(x.s) } : x)) }));
  const renew = (it) => setBk((o) => { const nw = bkMake(C, it.t, it.lv, it.i, o.uid + 1); return nw ? { ...o, uid: o.uid + 1, items: o.items.map((x) => (x.uid === it.uid ? nw : x)) } : o; });
  const LVN = C.LVN();
  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Banc d\'exercicis', 'Banco de ejercicios')}</div>
        <h2>{L('Exercicis per tema i nivell', 'Ejercicios por tema y nivel')}</h2>
        <p className="lead">{L('Tria el tema i la dificultat. Cada exercici es genera amb dades noves: «Un altre d\'aquest tipus» en dona un altre igual amb números diferents, i «Nova tanda» canvia tota la llista. Els que tenen resposta concreta es corregeixen sols; les demostracions tenen una solució model per comparar.', 'Elige el tema y la dificultad. Cada ejercicio se genera con datos nuevos: «Otro de este tipo» da otro igual con números distintos, y «Nueva tanda» cambia toda la lista. Los que tienen respuesta concreta se corrigen solos; las demostraciones tienen una solución modelo para comparar.')}</p>
      </div>
      <div className="card stack p-g10">
        <div className="lbl-s">{L('Tema', 'Tema')}</div>
        <div className="tabs2" id="bk-t">
          {C.BKORD.map((t) => <button key={t} type="button" data-bkk={t} aria-pressed={bk.t === t} onClick={() => regen({ t })}>{C.BKT[t].n()}</button>)}
          <button type="button" data-bkk="mix" aria-pressed={bk.t === 'mix'} onClick={() => regen({ t: 'mix' })}>{L('Tot barrejat', 'Todo mezclado')}</button>
        </div>
        <div className="lbl-s">{L('Nivell', 'Nivel')}</div>
        <div className="tabs2" id="bk-l">
          {[1, 2, 3].map((l) => <button key={l} type="button" data-bkl={l} aria-pressed={bk.lv === l} onClick={() => regen({ lv: l })}>{LVN[l]}</button>)}
        </div>
        <p className="small muted">{C.LVD()[bk.lv] + ' ' + L('Tipus d\'exercici en aquesta selecció: ', 'Tipos de ejercicio en esta selección: ')}<b>{bkCount(C, bk)}</b>{L(', cadascun amb dades aleatòries.', ', cada uno con datos aleatorios.')}</p>
        <div className="row">
          <button type="button" className="btn primary" id="bk-new" onClick={() => regen({})}>{L('Nova tanda', 'Nueva tanda')}</button>
          <span className="small muted">{L('Exercicis per tanda:', 'Ejercicios por tanda:')}</span>
          {[4, 6, 10].map((n) => <button key={n} type="button" className="chipbtn" data-bkn={n} aria-pressed={bk.n === n} onClick={() => regen({ n })}>{n}</button>)}
        </div>
      </div>
      <Rich className="p-mt12" html={C.formViewer()} />
      <div className="stack p-mt14" id="bk-list">
        {bk.items.map((it, idx) => <BkCard key={it.uid} it={it} idx={idx} upd={upd} renew={renew} />)}
      </div>
    </>
  );
}
