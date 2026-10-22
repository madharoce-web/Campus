import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { T } from './strings.js';

/**
 * Navegació secundària del curs (pestanyes subratllades en oliva).
 * items: [{ k, label, to }]; current: k de la secció activa.
 */
export default function SectionTabs({ items, current, className = '', id = 'rail', ...rest }) {
  const { lang } = useLang();
  return (
    <nav className={'m-snav ' + className} id={id} aria-label={T[lang].secs} {...rest}>
      {items.map((it) => (
        <Link key={it.k} to={it.to} data-k={it.k} aria-current={it.k === current ? 'page' : undefined}
          onClick={it.onClick}>
          {it.label}
        </Link>
      ))}
    </nav>
  );
}
