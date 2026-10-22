import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { legacyHref } from '../../lib/useInternalLinks.js';
import CourseHeader from '../../app/CourseHeader.jsx';
import SectionTabs from '../../app/SectionTabs.jsx';
import { PAGES, TOOLS, WEEKS, WEEK_NUMS, pagesOf, tx } from './data.js';
import { exStats } from './state.js';
import { I } from './icons.jsx';

/** Botó que obre l'índex del curs a les pantalles estretes. */
export function CiOpen({ onOpen }) {
  const { L } = useLang();
  return <button type="button" className="ip-ciopen" data-ci aria-label={L("Obre l'índex del curs", 'Abre el índice del curso')} onClick={onOpen}>{I.idx}</button>;
}

/** Capçalera del curs i navegació secundària (pàgina del curs i progrés). */
export function CourseHead({ cur, onOpenCI }) {
  const { L } = useLang();
  const tabs = [
    { k: 'curs', label: L('Curs', 'Curso'), to: '/programacio' },
    { k: 'progres', label: L('Progrés', 'Progreso'), to: '/programacio/progres' },
    { k: 'pseudo', label: L('Pseudocodi', 'Pseudocódigo'), to: '/pseudocodi' },
    { k: 'cpp', label: L('C++ a contrarellotge', 'C++ a contrarreloj'), to: '/cpp' },
    { k: 'pati', label: L('Pati de proves', 'Patio de pruebas'), to: '/cpp/pati' },
  ];
  return (
    <>
      <CourseHeader k="prog" before={<CiOpen onOpen={onOpenCI} />}
        sub={<p className="m-sub">{L('Pseudocodi i C++ · BInfo1 · M1 · Setmanes 2–7', 'Pseudocódigo y C++ · BInfo1 · M1 · Semanas 2–7')}</p>} />
      <SectionTabs items={tabs} current={cur} id="ip-snav" aria-label={L('Navegació del curs', 'Navegación del curso')} />
    </>
  );
}

function ActRow({ a, done, onDone }) {
  const { L } = useLang();
  let right = a.badge || null;
  if (a.id) right = done
    ? <span className="ip-badge done">{I.check}{L('Fet', 'Hecho')}</span>
    : <button type="button" className="ip-btn out sm" data-done={a.id} onClick={() => onDone(a.id)}>{L('Marca com a fet', 'Marcar como hecho')}</button>;
  return (
    <div className="ip-act">
      <span className={'ip-actico ' + a.kind}>{I[a.kind]}</span>
      <div className="ip-actb">
        <div className="ip-actt">{a.type}</div>
        <Link className="ip-actn" to={a.href}>{a.name}</Link>
        {a.desc ? <div className="ip-actd">{a.desc}</div> : null}
      </div>
      <div className="ip-actr">{right}</div>
    </div>
  );
}

/** Pàgina del curs: resum, progrés i activitats de cada setmana (seccions plegables). */
export default function CoursePage({ st, cpp, onDone, onToggle, onOpenCI }) {
  const { lang, L } = useLang();
  const all = exStats(cpp, 0);
  const tot = PAGES.length + all.n, got = PAGES.filter((p) => st.done[p.id]).length + all.done;
  const tool = (t) => ({ kind: t.k || 'tool', type: tx(t.type, lang), name: tx(t.name, lang), desc: tx(t.desc, lang), href: legacyHref(t.href) });
  const weekActs = (w) => {
    const acts = pagesOf(w).map((p) => ({
      kind: p.kind === 'lab' ? 'lab' : 'page', id: p.id, href: '/programacio/' + p.id, name: tx(p.t, lang), desc: tx(p.d, lang),
      type: p.kind === 'lab' ? L('Pàgina · pràctica de laboratori', 'Página · práctica de laboratorio') : L('Pàgina · teoria', 'Página · teoría'),
    }));
    const ex = exStats(cpp, w);
    if (ex.n) acts.push({
      kind: 'quiz', href: '/cpp/s' + w,
      type: L('Qüestionari · exercicis amb compilador', 'Cuestionario · ejercicios con compilador'),
      name: L('Exercicis de C++ · setmana ', 'Ejercicios de C++ · semana ') + w,
      desc: L(ex.n + ' exercicis amb rellotge de 15 minuts, proves visibles i ocultes.', ex.n + ' ejercicios con reloj de 15 minutos, pruebas visibles y ocultas.'),
      badge: <span className={'ip-badge' + (ex.done === ex.n ? ' done' : '')}>{ex.done + ' / ' + ex.n + L(' resolts', ' resueltos')}</span>,
    });
    (TOOLS[w] || []).forEach((t) => acts.push(tool(t)));
    return acts;
  };
  return (
    <>
      <CourseHead cur="curs" onOpenCI={onOpenCI} />
      <div className="ip-summary">
        <p>{L('Teoria (temes 1 i 2) i pràctiques de laboratori de C++ (setmanes 2 a 7) reescrites pas a pas, amb diagrames, traces i exemples que podeu executar i seguir línia a línia. Cada setmana enllaça amb els seus exercicis amb compilador real i amb les eines de pseudocodi.', 'Teoría (temas 1 y 2) y prácticas de laboratorio de C++ (semanas 2 a 7) reescritas paso a paso, con diagramas, trazas y ejemplos que podéis ejecutar y seguir línea a línea. Cada semana enlaza con sus ejercicios con compilador real y con las herramientas de pseudocódigo.')}</p>
        <p className="m-muted ip-book">{L('Llibre de suport: Fonaments de programació (Marco, J. i altres, Editorial UOC).', 'Libro de apoyo: Fonaments de programació (Marco, J. y otros, Editorial UOC).')}</p>
      </div>
      <div className="ip-progress">
        <span>{L('Progrés: ', 'Progreso: ') + got + ' / ' + tot + L(' activitats', ' actividades')}</span>
        <span className="ip-pbar"><i style={{ width: (tot ? (got / tot) * 100 : 0) + '%' }} /></span>
      </div>
      {[0, ...WEEK_NUMS].map((w) => {
        const open = !st.coll[w], W = WEEKS[w];
        const title = w === 0 ? L('General', 'General') : L('Setmana ', 'Semana ') + w + ' · ' + tx(W.topic, lang);
        const acts = w === 0 ? (TOOLS[0] || []).map(tool) : weekActs(w);
        return (
          <section className="ip-sec" id={'sec' + w} key={w}>
            <button type="button" className="ip-sech" data-coll={w} aria-expanded={open} onClick={() => onToggle(w)}>
              <span className="ip-chev">{I.chev}</span><h2>{title}</h2><span className="ip-secsub">{w === 0 ? '' : tx(W.dates, lang)}</span>
            </button>
            {open ? (
              <>
                {W && W.desc ? <p className="ip-secdesc">{tx(W.desc, lang)}</p> : null}
                <div className="ip-acts">{acts.map((a, i) => <ActRow key={i} a={a} done={a.id && !!st.done[a.id]} onDone={onDone} />)}</div>
              </>
            ) : null}
          </section>
        );
      })}
    </>
  );
}
