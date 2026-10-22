import { Navigate } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useLangData } from './useLangData.js';

/**
 * Una clau desconeguda a la ruta (/curs/xxx) pot ser l'àncora d'una secció d'un enllaç antic
 * (curs.html#xxx): si és a l'índex de seccions, s'hi va; si no, a la vista per defecte.
 * where(e) dona la ruta de la pàgina de l'entrada e de l'índex.
 */
export default function ResolveAnchor({ id, loaders, base, where }) {
  const { lang } = useLang();
  const { data, err } = useLangData(loaders, lang);
  if (!data && !err) return null;
  const e = data && data.index.find((x) => x.a === id);
  return <Navigate replace to={e ? where(e) + '#' + id : base} />;
}
