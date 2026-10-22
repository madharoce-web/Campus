import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { WEEKS, WEEK_NUMS, pagesOf, tx } from './data.js';
import { exStats } from './state.js';
import { CourseHead } from './CoursePage.jsx';
import { I } from './icons.jsx';

const Mini = ({ got, tot }) => <span className="ip-mini"><i style={{ width: (tot ? (got / tot) * 100 : 0) + '%' }} /></span>;

/** Progrés: pàgines fetes i exercicis de C++ resolts, per setmanes. */
export default function ProgressPage({ st, cpp, onOpenCI }) {
  const { lang, L } = useLang();
  return (
    <>
      <CourseHead cur="progres" onOpenCI={onOpenCI} />
      <p>{L('Resum de la feina feta en aquest navegador: pàgines marcades com a fetes i exercicis de C++ resolts (comprovats amb totes les proves).', 'Resumen del trabajo hecho en este navegador: páginas marcadas como hechas y ejercicios de C++ resueltos (comprobados con todas las pruebas).')}</p>
      <div className="ip-tw">
        <table className="ip-gt">
          <thead><tr><th>{L('Element', 'Elemento')}</th><th>{L('Tipus', 'Tipo')}</th><th className="r">{L('Estat', 'Estado')}</th></tr></thead>
          <tbody>
            {WEEK_NUMS.map((w) => {
              const ex = exStats(cpp, w), pg = pagesOf(w), pd = pg.filter((p) => st.done[p.id]).length;
              const tot = pg.length + ex.n, got = pd + ex.done;
              return (
                <Fragment key={w}>
                  <tr className="wk"><td colSpan={2}>{L('Setmana ', 'Semana ') + w + ' · ' + tx(WEEKS[w].topic, lang)}</td><td className="r">{got + ' / ' + tot}<Mini got={got} tot={tot} /></td></tr>
                  {pg.map((p) => (
                    <tr key={p.id}>
                      <td><Link to={'/programacio/' + p.id}>{tx(p.t, lang)}</Link></td>
                      <td>{p.kind === 'lab' ? L('Pràctica', 'Práctica') : L('Teoria', 'Teoría')}</td>
                      <td className="r">{st.done[p.id] ? <span className="ip-badge done">{I.check}{L('Fet', 'Hecho')}</span> : <span className="ip-badge">{L('Pendent', 'Pendiente')}</span>}</td>
                    </tr>
                  ))}
                  {ex.n ? (
                    <tr>
                      <td><Link to={'/cpp/s' + w}>{L('Exercicis de C++ · setmana ', 'Ejercicios de C++ · semana ') + w}</Link></td>
                      <td>{L('Qüestionari', 'Cuestionario')}</td>
                      <td className="r">{ex.done + ' / ' + ex.n}<Mini got={ex.done} tot={ex.n} /></td>
                    </tr>
                  ) : null}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
