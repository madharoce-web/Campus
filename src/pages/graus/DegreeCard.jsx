import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { subjectsOf } from '../../catalog/degrees.js';
import Pattern from '../home/Pattern.jsx';

/** Imatge de la targeta d'un grau: el seu patró; en gris si encara no està disponible. */
export function DegreeImage({ d, className = 'am-cimg' }) {
  return <Pattern card={{ k: d.k, pat: d.pat, color: d.status === 'live' ? d.img : '#ced4da' }} className={className} />;
}

/** Targeta d'un grau, com les dels cursos a «Els meus cursos». Lx: live, soon, liveCat, soonCat, subjects */
export default function DegreeCard({ d, Lx }) {
  const { t } = useLang();
  const live = d.status === 'live';
  const to = '/graus/' + d.k;
  return (
    <li className="am-card" data-degree={d.k}>
      <Link className="am-cimgw" to={to} tabIndex={-1} aria-hidden="true"><DegreeImage d={d} /></Link>
      <div className="am-cbody">
        <h3 className="am-cname"><Link to={to}>{t(d.name)}</Link></h3>
        <div className="am-ccat">{live ? Lx.liveCat : Lx.soonCat}</div>
        <div className="am-cmeta">
          <span className={'am-badge' + (live ? ' am-badge-live' : '')}>{live ? Lx.live : Lx.soon}</span>
          {live && <span className="am-muted">{Lx.subjects.replace('%d', subjectsOf(d).length)}</span>}
        </div>
      </div>
    </li>
  );
}
