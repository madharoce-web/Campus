import { Component } from 'react';
import { LabContext, Stepper } from '../ui.jsx';
import { Caixes, Compr, Parts, Venn, Particio, Producte } from './conj.jsx';
import { Relacio, Congru, Hasse, Demorel } from './rel.jsx';
import { Nombres, Axiomes, Absval, Domino, Indprova, Recursiu, Quocient, Suprem, Reals, Interval } from './nomb.jsx';
import { Complex, Polinomi } from './cx.jsx';
import { Mxanat, Mxops, Mxprod, Mxtype, Mxsarrus, Mxminor, Mxinv, Mxrank } from './mat.jsx';

const LABS = {
  caixes: Caixes, compr: Compr, parts: Parts, venn: Venn, particio: Particio, producte: Producte,
  relacio: Relacio, congru: Congru, hasse: Hasse, demorel: Demorel,
  nombres: Nombres, axiomes: Axiomes, absval: Absval, domino: Domino, indprova: Indprova, recursiu: Recursiu,
  quocient: Quocient, suprem: Suprem, reals: Reals, interval: Interval,
  complex: Complex, polinomi: Polinomi,
  mxanat: Mxanat, mxops: Mxops, mxprod: Mxprod, mxtype: Mxtype, mxsarrus: Mxsarrus, mxminor: Mxminor, mxinv: Mxinv, mxrank: Mxrank,
};

/** Si un laboratori falla, es mostra l'error dins del seu marc (com feia l'original). */
class LabBoundary extends Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err) { console.error(err); }
  render() {
    if (this.state.err) return <div className="lab"><div className="lab-b"><div className="fb bad">{String((this.state.err && this.state.err.message) || this.state.err)}</div></div></div>;
    return this.props.children;
  }
}

/** Laboratori pel seu nom (w), amb identificador d'estat (id) i configuració inicial (cfg). */
export default function Lab({ w, id, cfg }) {
  const L = LABS[w];
  if (!L) return null;
  return (
    <LabBoundary>
      <LabContext.Provider value={{ w, id }}>
        <L id={id} cfg={cfg || {}} />
      </LabContext.Provider>
    </LabBoundary>
  );
}

/** Component de cada marca de l'HTML del contingut (per a RichParts). */
export function renderMark(m, key) {
  if (m[0] === 'lab') return <Lab key={key} w={m[1]} id={m[2]} cfg={m[3]} />;
  if (m[0] === 'stp') return <Stepper key={key} id={m[1]} bare />;
  return null;
}
