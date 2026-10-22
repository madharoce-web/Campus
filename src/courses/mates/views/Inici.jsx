import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { getContent } from '../content/index.js';
import { Html } from '../ui.jsx';
import { pathOf } from '../routes.js';

/** Inici del curs: presentació, temari amb enllaços a cada secció i accés al simulacre, exercicis, banc i pràctica. */
export default function Inici() {
  const { lang, L } = useLang();
  const navigate = useNavigate();
  const { TH, PAGE, EXG, BX, P, BKORD, BKT } = getContent(lang);
  const card = (k) => {
    const [eb, h] = PAGE[k]();
    return (
      <div className="tcard" key={k}>
        <div className="eyebrow">{eb}</div><h3>{h}</h3>
        <ul>{TH[k].map((s) => <li key={s.id}><Link to={pathOf(s.id)} data-go={k} data-sec={s.id}>{s.lab ? <span className="dot"></span> : <span className="nod"></span>}<span>{s.t()}</span></Link></li>)}</ul>
      </div>
    );
  };
  const nLabs = Object.values(TH).reduce((a, arr) => a + arr.filter((s) => s.lab).length, 0);
  const nTypes = BKORD.reduce((a, t) => a + [1, 2, 3].reduce((b, l) => b + BKT[t].lv[l].length, 0), 0);
  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Matemàtica Computacional · Ferran Dachs-Cadefau', 'Matemática Computacional · Ferran Dachs-Cadefau')}</div>
        <h2>{L('Teoria per al CP1, explicada i per tocar', 'Teoría para el CP1, explicada y para tocar')}</h2>
        <p className="lead">{L('Tot el temari dels apunts de mates (conjunts, relacions, nombres, inducció, complexos, matrius i determinants), amb el mateix contingut però més explicat. Els conceptes que costen d\'entendre tenen un laboratori interactiu al costat. Al final, els exercicis dels fulls i dels exàmens anteriors, resolts pas a pas.', 'Todo el temario de los apuntes de mates (conjuntos, relaciones, números, inducción, complejos, matrices y determinantes), con el mismo contenido pero más explicado. Los conceptos que cuestan de entender tienen un laboratorio interactivo al lado. Al final, los ejercicios de las hojas y de los exámenes anteriores, resueltos paso a paso.')}</p>
        <div className="legend"><span className="dot"></span>{L('secció amb laboratori', 'sección con laboratorio') + ' · ' + nLabs + L(' laboratoris', ' laboratorios')}</div>
      </div>
      <div className="stack">
        <Html html={BX('warn', L('Què entra al CP1', 'Qué entra en el CP1'), P(L('Segons el curs de suport, dels exàmens de l\'any passat corresponen al temari actual els exercicis <b>1, 2, 4 i 5.1 del CP1-2025</b> (tema 1) i <b>l\'1 i el 2 del CP2-2025</b> (tema 2). A l\'examen <b>cal justificar totes les respostes</b>, i qualsevol resultat parcial que no sigui al formulari s\'ha d\'enunciar i demostrar.', 'Según el curso de apoyo, de los exámenes del año pasado corresponden al temario actual los ejercicios <b>1, 2, 4 y 5.1 del CP1-2025</b> (tema 1) y <b>el 1 y el 2 del CP2-2025</b> (tema 2). En el examen <b>hay que justificar todas las respuestas</b>, y cualquier resultado parcial que no esté en el formulario se tiene que enunciar y demostrar.')))} />
        <div className="tcards">{card('conj')}{card('rel')}{card('nomb')}{card('cx')}{card('mat')}{card('det')}</div>
        <div className="tcards">
          <div className="tcard">
            <div className="eyebrow">{L('Simulacre d\'examen', 'Simulacro de examen')}</div><h3>{L('Examen de prova amb rellotge', 'Examen de prueba con reloj')}</h3>
            <p className="small">{L('Tres nivells: com el CP de l\'any passat, difícil i extrem. Es fa en paper, amb el formulari; després veus les solucions, la rúbrica de cada apartat i et poses la nota.', 'Tres niveles: como el CP del año pasado, difícil y extremo. Se hace en papel, con el formulario; después ves las soluciones, la rúbrica de cada apartado y te pones la nota.')}</p>
            <div><button type="button" className="btn primary" data-go="exam" onClick={() => navigate(pathOf('exam'))}>{L('Fes un examen', 'Haz un examen')}</button></div>
          </div>
          <div className="tcard">
            <div className="eyebrow">{L('Exercicis resolts', 'Ejercicios resueltos')}</div><h3>{L('Fulls i exàmens', 'Hojas y exámenes')}</h3>
            <ul>{EXG.map((g, i) => <li key={i}><Link to={pathOf('exer')} data-go="exer"><span className="nod"></span><span>{g.g()}</span></Link></li>)}</ul>
          </div>
          <div className="tcard">
            <div className="eyebrow">{L('Banc d\'exercicis', 'Banco de ejercicios')}</div><h3>{L('Per tema i per nivell', 'Por tema y por nivel')}</h3>
            <p className="small">{L('Conjunts, relacions, ordres i diagrames de Hasse, nombres reals, inducció, complexos, arrels amb k, matrius i determinants. Tres nivells (fàcil, mitjà i extrem) i ' + nTypes + ' tipus d\'exercici, cadascun amb dades noves cada vegada.', 'Conjuntos, relaciones, órdenes y diagramas de Hasse, números reales, inducción, complejos, raíces con k, matrices y determinantes. Tres niveles (fácil, medio y extremo) y ' + nTypes + ' tipos de ejercicio, cada uno con datos nuevos cada vez.')}</p>
            <div><button type="button" className="btn primary" data-go="banc" onClick={() => navigate(pathOf('banc'))}>{L('Obre el banc', 'Abre el banco')}</button></div>
          </div>
          <div className="tcard">
            <div className="eyebrow">{L('Pràctica', 'Práctica')}</div><h3>{L('Exercicis generats', 'Ejercicios generados')}</h3>
            <p className="small">{L('Deu tipus d\'exercici curt amb correcció automàtica: comprensió, ∅, Venn, identitats, propietats de relacions, classes, Hasse, nombres, complexos i inducció.', 'Diez tipos de ejercicio corto con corrección automática: comprensión, ∅, Venn, identidades, propiedades de relaciones, clases, Hasse, números, complejos e inducción.')}</p>
            <div><button type="button" className="btn primary" data-go="prac" onClick={() => navigate(pathOf('prac'))}>{L('Comença a practicar', 'Empieza a practicar')}</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
