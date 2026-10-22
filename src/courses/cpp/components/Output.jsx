import { Fragment } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import { parseDiag, trapMsg } from '../lib/format.js';

/** Línia amb els espais com · i els tabuladors com →. */
function visLine(ln) {
  const out = []; let buf = '';
  for (const ch of ln) {
    if (ch === ' ' || ch === '\t') {
      if (buf) { out.push(buf); buf = ''; }
      out.push(<span key={out.length} className="ws">{ch === ' ' ? '·' : '→'}</span>);
    } else buf += ch;
  }
  if (buf) out.push(buf);
  return out;
}
/** Text amb els espais visibles i ↵ al final de cada línia. */
export function Vis({ s }) {
  const lines = String(s).split('\n');
  return lines.map((ln, i) => (
    <Fragment key={i}>{visLine(ln)}{i < lines.length - 1 ? <><span className="eol">↵</span>{'\n'}</> : null}</Fragment>
  ));
}
/** Sortida obtinguda, amb la diferència respecte de l'esperada ressaltada. */
export function DiffGot({ exp, got }) {
  const { L } = useLang();
  let k = 0;
  while (k < exp.length && k < got.length && exp[k] === got[k]) k++;
  if (k === got.length && k === exp.length) return <Vis s={got} />;
  return (
    <>
      <Vis s={got.slice(0, k)} />
      {k < got.length
        ? <span className="dx"><Vis s={got.slice(k)} /></span>
        : <span className="dx">⟂ {L('hi falta text', 'falta texto')}</span>}
    </>
  );
}

/** Diagnòstics del compilador; els que apunten a una línia porten a l'editor. */
export function Diags({ diags, onGoto }) {
  return diags.map((d, i) => {
    const p = parseDiag(d);
    return (
      <Fragment key={i}>
        {i > 0 && '\n'}
        {p.l
          ? <span className={'dl ' + p.cls} onClick={() => onGoto?.(p.l, p.c)}>{d}</span>
          : <span className={p.cls || undefined}>{d}</span>}
      </Fragment>
    );
  });
}

/**
 * Contingut de la consola, guardat com a peces perquè es torni a escriure en canviar l'idioma:
 * ['sys', clau] · ['diags', [...]] · ['nl'] · ['nocompile'] · ['compiled', ms] · ['txt', s]
 * · ['err', s] · ['trap', r] · ['exit', codi, ms]
 */
export function ConsoleParts({ parts, onGoto }) {
  const { L } = useLang();
  const eng = useCppEngine();
  const SYS = {
    compiling: L('Compilant…', 'Compilando…'),
    waitload: L('Esperant que el compilador acabi de carregar…', 'Esperando a que el compilador acabe de cargar…'),
    interp: L('Executant amb l\'intèrpret…', 'Ejecutando con el intérprete…'),
    executing: L('Executant…', 'Ejecutando…'),
    placeholder: L('Prem «Executa» per compilar i executar el programa amb aquesta entrada.', 'Pulsa «Ejecuta» para compilar y ejecutar el programa con esta entrada.'),
  };
  return parts.map((p, i) => {
    switch (p[0]) {
      case 'sys': return <span key={i} className="sys">{SYS[p[1]]}</span>;
      case 'diags': return <Diags key={i} diags={p[1]} onGoto={onGoto} />;
      case 'nl': return '\n';
      case 'nocompile': return <span key={i} className="err">{L('No compila.', 'No compila.')}</span>;
      case 'compiled': return <span key={i} className="sys">{L('Compilat en ', 'Compilado en ') + (p[1] / 1000).toFixed(1) + ' s.'}</span>;
      case 'txt': return <Fragment key={i}>{p[1]}</Fragment>;
      case 'err': return <span key={i} className="err">{p[1]}</span>;
      case 'trap': return <span key={i} className="err">{trapMsg(p[1], L, eng.mode)}</span>;
      case 'exit': return <span key={i} className="sys">{'— ' + L('codi de sortida ', 'código de salida ') + p[1] + ' · ' + p[2] + ' ms'}</span>;
      default: return null;
    }
  });
}

/** Peça d'espera abans de compilar, segons l'estat del motor. */
export function waitKey(snap) {
  if (snap.mode === 'interp') return 'interp';
  return snap.state === 'ready' ? 'compiling' : 'waitload';
}

/** Peces de la consola després d'executar (com doRun / patiRun de l'original). */
export function runParts(prefix, r) {
  if (r.kind === 'compile') return [['err', String(r.error)]];
  const out = [...prefix, ['txt', r.stdout || '']];
  if (r.stderr && !r.output) out.push(['err', r.stderr]);
  out.push(['nl'], r.kind !== 'ok' ? ['trap', r] : ['exit', r.exitCode, r.ms]);
  return out;
}
