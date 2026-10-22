import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { useSlot } from '../store.js';
import { Html } from '../ui.jsx';
import { pathOf } from '../routes.js';

/** Inici del curs: presentació, temari amb enllaços a cada secció i accés a exercicis, pràctica i simulacre. */
export default function Inici() {
  const { lang, L } = useLang();
  const navigate = useNavigate();
  const { C, TH, PAGE, EXG } = getContent(lang);
  const [, setXF] = useSlot('xf', 'g1');
  const nLabs = Object.values(TH).reduce((a, arr) => a + arr.filter((s) => s.lab).length, 0);
  const nParts = EXG.reduce((a, g) => a + g.items.reduce((b, c) => b + c.parts.length, 0), 0);
  const card = (k) => {
    const [eb, h] = PAGE[k]();
    return (
      <div className="tcard" key={k}>
        <div className="eyebrow">{eb}</div><h3>{h}</h3>
        <ul>{TH[k].map((s) => <li key={s.id}><Link to={pathOf(s.id)} data-sec={s.id}>{s.lab ? <span className="dot"></span> : <span className="nod"></span>}<span>{s.t()}</span></Link></li>)}</ul>
      </div>
    );
  };
  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Iniciació als Computadors · Bàtxelor en Informàtica', 'Iniciación a los Computadores · Bàtxelor en Informática')}</div>
        <h2>{L('Teoria, activitats i simulacres per al CP1', 'Teoría, actividades y simulacros para el CP1')}</h2>
        <p className="lead">{L('El temari dels temes 1, 2.1 i 2.2 explicat amb més detall que a les diapositives, amb laboratoris interactius per als conceptes difícils. Després, totes les activitats resoltes amb correcció de la teva resposta, una pràctica infinita amb nivell dur i un simulacre cronometrat del CP1.', 'El temario de los temas 1, 2.1 y 2.2 explicado con más detalle que en las diapositivas, con laboratorios interactivos para los conceptos difíciles. Después, todas las actividades resueltas con corrección de tu respuesta, una práctica infinita con nivel duro y un simulacro cronometrado del CP1.')}</p>
        <div className="legend"><span className="dot"></span>{L('secció amb laboratori', 'sección con laboratorio') + ' · ' + nLabs + L(' laboratoris · ', ' laboratorios · ') + nParts + L(' apartats resolts', ' apartados resueltos')}</div>
      </div>
      <div className="stack">
        <Html html={C.BX('warn', L('Què treballa la pràctica del CP1', 'Qué trabaja la práctica del CP1'), C.UL([
          L('<b>Canvis de mida</b>: bits ↔ bytes amb prefixos decimals (K, M, G = 10³, 10⁶, 10⁹) i binaris (Ki, Mi, Gi = 2¹⁰, 2²⁰, 2³⁰).', '<b>Cambios de tamaño</b>: bits ↔ bytes con prefijos decimales (K, M, G = 10³, 10⁶, 10⁹) y binarios (Ki, Mi, Gi = 2¹⁰, 2²⁰, 2³⁰).'),
          L('<b>Canvis de base i operacions</b>: amb part fraccionària i resultats periòdics; sumes i restes en base b.', '<b>Cambios de base y operaciones</b>: con parte fraccionaria y resultados periódicos; sumas y restas en base b.'),
          L('<b>Signe i magnitud</b>, <b>complement a 1</b>, <b>complement a 2</b> i <b>codi d\'excés</b> (E = 2<sup>N−1</sup>), amb el nombre de bits indicat.', '<b>Signo y magnitud</b>, <b>complemento a 1</b>, <b>complemento a 2</b> y <b>código de exceso</b> (E = 2<sup>N−1</sup>), con el número de bits indicado.'),
          L('<b>IEEE 754</b> de simple precisió: signe, exponent en excés 127 i 23 bits de fracció.', '<b>IEEE 754</b> de simple precisión: signo, exponente en exceso 127 y 23 bits de fracción.')]))} />
        <div className="tcards">{card('t1')}{card('t21')}{card('t22')}</div>
        <div className="tcards">
          <div className="tcard">
            <div className="eyebrow">{L('Exercicis resolts', 'Ejercicios resueltos')}</div><h3>{L('Activitats i pràctica CP1', 'Actividades y práctica CP1')}</h3>
            <ul>{EXG.map((g) => <li key={g.id}><Link to={pathOf('exer')} data-xg={g.id} onClick={() => setXF(g.id)}><span className="nod"></span><span>{g.g()}</span></Link></li>)}</ul>
          </div>
          <div className="tcard">
            <div className="eyebrow">{L('Entrenament', 'Entrenamiento')}</div><h3>{L('Pràctica i simulacre', 'Práctica y simulacro')}</h3>
            <p className="small">{L('Onze tipus d\'exercici generat (unitats, transferència, bases, periòdics, operacions, codificar, descodificar, rangs, IEEE, multimèdia i conceptes) amb nivell normal o dur. El simulacre genera un CP1 complet, el cronometra i el corregeix sobre 10.', 'Once tipos de ejercicio generado (unidades, transferencia, bases, periódicos, operaciones, codificar, decodificar, rangos, IEEE, multimedia y conceptos) con nivel normal o duro. El simulacro genera un CP1 completo, lo cronometra y lo corrige sobre 10.')}</p>
            <div className="row">
              <button type="button" className="btn primary" onClick={() => navigate(pathOf('prac'))}>{L('Practica', 'Practica')}</button>
              <button type="button" className="btn" onClick={() => navigate(pathOf('exam'))}>{L('Fes un simulacre', 'Haz un simulacro')}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
