import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';

/** Pregunta d'opció múltiple de final d'unitat: es respon un cop i es mostra el perquè. */
export default function Quiz({ id, q }) {
  const { L } = useLang();
  const [ans, setAns] = useSlot('lq-' + id, null);
  const ok = (q.ok || 'a').charCodeAt(0) - 97;
  const done = ans !== null;
  return (
    <div className="lq" data-ok={q.ok}>
      <p className="lq-k">{L('Pregunta', 'Pregunta', 'Question')}</p>
      <Rich as="p" html={q.q} />
      <ol className="lq-ops">
        {q.opts.map((o, i) => (
          <li key={i}>
            <button type="button" className={'lq-op' + (done ? (i === ok ? ' ok' : i === ans ? ' ko' : '') : '')} disabled={done} onClick={() => setAns(i)}>
              <span className="lq-l">{String.fromCharCode(97 + i)}</span><Rich as="span" html={o} />
            </button>
          </li>
        ))}
      </ol>
      <div className="why" hidden={!done}>
        {done && <p className={'lq-res ' + (ans === ok ? 'ok' : 'ko')}>{ans === ok ? L('Correcte.', 'Correcto.', 'Correct.') : L('No és correcte.', 'No es correcto.', 'Not correct.')}</p>}
        <Rich html={q.why} />
      </div>
    </div>
  );
}
