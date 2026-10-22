import { useId, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import Rich from '../../lib/Rich.jsx';
import Nodes from './Content.jsx';

/** Pregunta d'autocomprovació amb l'aspecte de pregunta de qüestionari. */
export default function Quiz({ q }) {
  const { L } = useLang();
  const name = useId();
  const [sel, setSel] = useState(null);
  const [res, setRes] = useState(null); // resposta comprovada
  const [pick, setPick] = useState(false); // s'ha comprovat sense triar
  const check = () => {
    if (!sel) { setPick(true); return; }
    setPick(false); setRes(sel);
  };
  const right = res === q.ok;
  const st = pick ? L('Tria una resposta', 'Elige una respuesta') : res ? (right ? L('Correcta', 'Correcta') : L('Incorrecta', 'Incorrecta')) : L('Sense respondre', 'Sin responder');
  return (
    <div className="ip-q">
      <div className="ip-qi"><span>{L('Pregunta', 'Pregunta')} <b>{q.n}</b></span><span className="st">{st}</span></div>
      <div className="ip-qc">
        <div className="ip-qf">
          <Nodes nodes={q.stem} />
          <div className="ip-qo" role="radiogroup">
            {q.opts.map((o, i) => {
              const k = 'abcdefg'[i];
              const ok = res && k === q.ok, bad = res && k === res && !ok;
              return (
                <label key={k} className={ok ? 'right' : bad ? 'wrong' : undefined}>
                  <input type="radio" name={name} value={k} checked={sel === k} onChange={() => setSel(k)} />
                  <Rich as="span" html={`<b>${k}.</b> ${o}`} />
                  <span className="mk">{ok ? '✓' : bad ? '✗' : ''}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div><button type="button" className="ip-btn sm" onClick={check}>{L('Comprova', 'Comprueba')}</button></div>
        {res ? (
          <div className="ip-qfb">
            <span className={'res ' + (right ? 'ok' : 'no')}>{right ? L('Correcte!', '¡Correcto!') : L('No és correcte. La bona és la ', 'No es correcto. La buena es la ') + q.ok + '.'}</span>
            <Nodes nodes={q.why} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
