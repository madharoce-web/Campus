import { useLang } from '../../../lib/i18n.jsx';
import { TARGET } from '../lib/data.js';
import { elapsed, sessOf, useS } from '../lib/store.js';
import { hms, mmss } from '../lib/format.js';
import { useNow } from '../lib/hooks.js';

/** Estat del rellotge d'una sessió: classe de color, etiqueta i temps restant. */
function clockState(ss, now, L) {
  const rem = ss.lim - elapsed(ss, now);
  const cls = ss.fin ? 'done' : rem <= 0 ? 'over' : rem <= 60 ? 'crit' : rem <= 300 ? 'warn' : '';
  const lab = ss.fin ? L('Resolt en', 'Resuelto en') : rem <= 0 ? L('Temps esgotat', 'Tiempo agotado') : L('Temps restant', 'Tiempo restante');
  return { rem, cls, lab };
}

/** Rellotge de la barra superior (només amb un exercici començat). */
export function HClock({ id }) {
  const { L } = useLang();
  const S = useS();
  const now = useNow();
  const ss = S.sess[id];
  if (!ss || !ss.started) return null;
  const { rem, cls, lab } = clockState(ss, now, L);
  const txt = ss.fin ? mmss(ss.solvedAt) : rem <= 0 ? '−' + mmss(-rem).replace('+', '') : mmss(rem);
  return <span className={'hclock ' + cls} id="hclock" aria-live="off" title={lab}>{txt}</span>;
}

/** Rellotge del calaix «Navegació pel qüestionari». */
export function DrawerTimer({ id, lv }) {
  const { L } = useLang();
  const S = useS();
  const now = useNow();
  const ss = sessOf(S, id);
  const { rem, cls, lab } = clockState(ss, now, L);
  const face = ss.fin ? hms(ss.solvedAt) : rem <= 0 ? '−' + hms(-rem) : hms(rem);
  return (
    <div className={'timer ' + cls} id="qtimer">
      <span><span id="clocklab">{lab}</span><span className="sub" id="clocksub">{L('Límit ', 'Límite ') + mmss(ss.lim) + ' · ' + L('objectiu ', 'objetivo ') + TARGET[lv] + ' min'}</span></span>
      <b id="clock">{face}</b>
    </div>
  );
}

/** Avís de temps esgotat sobre la pregunta. */
export function OverBanner({ id, exam }) {
  const { L } = useLang();
  const S = useS();
  const now = useNow();
  const ss = sessOf(S, id);
  const over = !ss.fin && ss.started && elapsed(ss, now) >= ss.lim;
  return (
    <div id="overb">
      {over && (
        <div className="alert alert-danger"><b>{L('S\'ha acabat el temps.', 'Se ha acabado el tiempo.')}</b>{' '}
          {exam ? L('Es lliura el que tinguis.', 'Se entrega lo que tengas.') : L('A l\'examen ara es lliuraria el que tinguis. Pots continuar per acabar-lo, però comptarà com a fora de temps.', 'En el examen ahora se entregaría lo que tengas. Puedes continuar para acabarlo, pero contará como fuera de tiempo.')}
        </div>
      )}
    </div>
  );
}
