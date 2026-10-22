import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { useSlot } from '../store.js';
import { Html, Stepper } from '../ui.jsx';
import Lab from '../labs/index.jsx';

/** Targeta d'un exercici resolt: pista, solució pas a pas (amb el formulari) i laboratori amb les dades. */
function ExCard({ it }) {
  const { lang, L } = useLang();
  const C = getContent(lang);
  const [s, set] = useSlot('ex:' + it.id, () => ({ hint: false, sol: false, lab: false }));
  if (it.out) {
    return (
      <div className="exc" id={'exc-' + it.id}>
        <div className="exc-h"><Rich as="span" className="src" html={it.src} /><Rich className="q" html={it.q()} /><span className="pill out">{L('No entra', 'No entra')}</span></div>
      </div>
    );
  }
  let sol = null;
  if (s.sol) {
    if (it.solH) sol = <Html html={C.formBox(it) + it.solH()} />;
    else {
      const two = it.id === 'cp1e2';
      sol = (
        <>
          <Html html={C.formBox(it) + (it.sol2 ? '<div class="lbl-s">' + (two ? L('Mètode 1 · doble inclusió', 'Método 1 · doble inclusión') : L('Mètode 1 · cadena de lleis', 'Método 1 · cadena de leyes')) + '</div>' : '')} />
          <Stepper id={'sol-' + it.id} gen={it.sol} />
          {it.sol2 && <>
            <div className="lbl-s p-mt8">{two ? L('Mètode 2 · Complementari (7) del formulari', 'Método 2 · Complementari (7) del formulario') : L('Mètode 2 · element a element (doble inclusió)', 'Método 2 · elemento a elemento (doble inclusión)')}</div>
            <Stepper id={'sol2-' + it.id} gen={it.sol2} all />
          </>}
        </>
      );
    }
  }
  return (
    <div className="exc" id={'exc-' + it.id}>
      <div className="exc-h"><Rich as="span" className="src" html={it.src} /><Rich className="q" html={it.q()} /></div>
      <div className="exc-b">
        <div className="row">
          <button type="button" className={'btn' + (s.hint ? ' primary' : '')} data-ex={it.id} data-t="hint" onClick={() => set({ hint: !s.hint })}>{L('Pista', 'Pista')}</button>
          <button type="button" className={'btn' + (s.sol ? ' primary' : '')} data-ex={it.id} data-t="sol" onClick={() => set({ sol: !s.sol })}>{L('Solució', 'Solución')}</button>
          {it.lab && <button type="button" className={'btn' + (s.lab ? ' primary' : '')} data-ex={it.id} data-t="lab" onClick={() => set({ lab: !s.lab })}>{L('Laboratori', 'Laboratorio')}</button>}
        </div>
        {s.hint && <Html html={C.fb('info', C.smart(it.hint()))} />}
        {sol && <div className="stack p-g6">{sol}</div>}
        {s.lab && it.lab && <>
          {it.labNote && <Rich as="p" className="small" html={it.labNote()} />}
          <Lab w={it.lab[0]} id={'exl-' + it.id} cfg={it.lab[1]} />
        </>}
      </div>
    </div>
  );
}

/** Exercicis resolts: fulls 1 i 2, CP1-2025 i CP2-2025. */
export default function Exercicis() {
  const { lang, L } = useLang();
  const C = getContent(lang);
  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Exercicis resolts', 'Ejercicios resueltos')}</div>
        <h2>{L('Fulls, CP1-2025 i CP2-2025', 'Hojas, CP1-2025 y CP2-2025')}</h2>
        <p className="lead">{L('Intenta\'ls primer. Després demana una pista, la solució pas a pas o obre el laboratori amb les dades de l\'exercici.', 'Inténtalos primero. Después pide una pista, la solución paso a paso o abre el laboratorio con los datos del ejercicio.')}</p>
      </div>
      <div className="stack">
        <Html html={C.BX('warn', L('A l\'examen tindreu el formulari', 'En el examen tendréis el formulario'), C.P(L('El que és al formulari es pot fer servir citant-lo («per §2 Diferència (7)»), sense demostrar-ho. El que <b>no</b> hi és s\'ha d\'enunciar i demostrar: si no es justifica, el pas no compta. Cada solució comença amb un quadre <b>Com fer servir el formulari</b> (on mirar, quin és el pla i què hi falta) i cada pas porta l\'entrada del formulari que el justifica, o un avís si no hi és.', 'Lo que está en el formulario se puede usar citándolo («por §2 Diferència (7)»), sin demostrarlo. Lo que <b>no</b> está se tiene que enunciar y demostrar: si no se justifica, el paso no cuenta. Cada solución empieza con un cuadro <b>Cómo usar el formulario</b> (dónde mirar, cuál es el plan y qué falta) y cada paso lleva la entrada del formulario que lo justifica, o un aviso si no está.'))) + C.formViewer()} />
        {C.EXG.map((g, i) => (
          <section key={i} className="exgroup">
            <h3>{g.g()}</h3>
            {g.note && <Rich as="p" className="small muted" html={g.note()} />}
            {g.items.map((it) => <ExCard key={it.id} it={it} />)}
          </section>
        ))}
      </div>
    </>
  );
}
