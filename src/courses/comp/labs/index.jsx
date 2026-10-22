import { Component } from 'react';
import { Bits, Cache, Compila, Flynn, Transfer, Units, VonNeumann } from './t1.jsx';
import { Arith, Conv, Encode, Group, Ieee, Norm, Signed, Tfn } from './t21.jsx';
import { Audio, Image, Rgb, Video } from './t22.jsx';
import { LabContext } from '../ui.jsx';

const LABS = {
  bits: Bits, units: Units, transfer: Transfer, vonneumann: VonNeumann, cache: Cache, flynn: Flynn, compila: Compila,
  tfn: Tfn, conv: Conv, group: Group, arith: Arith, signed: Signed, encode: Encode, ieee: Ieee, norm: Norm,
  image: Image, rgb: Rgb, audio: Audio, video: Video,
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
