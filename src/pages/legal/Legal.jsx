import { Link, useParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { useSettings } from '../../lib/settings.js';
import Page from '../../app/Page.jsx';
import NotFound from '../../app/NotFound.jsx';
import { DATE, DOCS, LEGAL_LINKS, UPDATED } from './docs.js';
import './legal.css';

/** /legal/:doc — avís legal, privacitat i condicions, amb les dades de l'empresa de /admin. */
export default function Legal() {
  const { doc } = useParams();
  const { ui } = useLang();
  const { values } = useSettings();
  const d = DOCS[ui]?.[doc];
  useDocumentTitle(d ? d.t : '');
  if (!d) return <NotFound />;
  const c = values.company;
  // un camp que encara no s'ha omplert a /admin es veu com a buit, no com a text inventat
  const fill = (s) => s.replace(/\{(\w+)\}/g, (_, k) => (c[k] ? c[k] : '[' + k + ']'));
  return (
    <Page name="legal">
      <nav className="lg-tabs" aria-label="Legal">
        {LEGAL_LINKS[ui].map(([k, label]) => <Link key={k} to={'/legal/' + k} aria-current={k === doc ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <article className="lg-doc">
        <h1 className="am-h1">{d.t}</h1>
        <p className="lg-date">{UPDATED[ui]}: {new Date(DATE).toLocaleDateString(ui === 'en' ? 'en-GB' : ui, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        {d.s.map(([h, ps]) => (
          <section key={h}>
            <h2>{h}</h2>
            {ps.map((p) => <p key={p}>{fill(p)}</p>)}
          </section>
        ))}
      </article>
    </Page>
  );
}
