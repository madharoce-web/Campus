import { useLang } from '../../lib/i18n.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREES } from '../../catalog/degrees.js';
import Page from '../../app/Page.jsx';
import { CalendarBlock, NavBlock } from '../../app/blocks.jsx';
import DegreeCard from '../graus/DegreeCard.jsx';
import { S } from './strings.js';

/** Inici del campus (/inici): resum del lloc, graus i notícies, com la pàgina principal de l'aula. */
export default function Inici() {
  const { ui } = useLang();
  const L = S[ui];
  useDocumentTitle(L.title);
  return (
    <Page name="inici" blocks={<><NavBlock /><CalendarBlock /></>}>
      <h1 className="am-h1">Aula Mada</h1>
      <section className="am-section" aria-labelledby="in-sum">
        <h2 className="am-h2" id="in-sum">{L.summaryH}</h2>
        <hr className="am-hr" />
        <p>{L.summary}</p>
      </section>
      <section className="am-section" id="in-graus" aria-labelledby="in-deg">
        <h2 className="am-h2" id="in-deg">{L.degH}</h2>
        <hr className="am-hr" />
        <ul className="am-cgrid">{DEGREES.map((d) => <DegreeCard key={d.k} d={d} Lx={L} />)}</ul>
      </section>
      <section className="am-section" id="in-news" aria-labelledby="in-newsh">
        <h2 className="am-h2" id="in-newsh">{L.newsH}</h2>
        <hr className="am-hr" />
        <div className="am-posts">
          {L.news.map((n) => (
            <article key={n.h} className="am-post">
              <header className="am-post-head">
                <span className="am-post-av" aria-hidden="true">AM</span>
                <div><h3>{n.h}</h3><small>{L.by} · {n.date}</small></div>
              </header>
              {n.p.map((x) => <p key={x}>{x}</p>)}
              {n.list && <ul>{n.list.map((x) => <li key={x}>{x}</li>)}</ul>}
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
