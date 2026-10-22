/** Il·lustració de la capçalera de cada tema (la de l'original). */
const CAP = {
  t1: ['Frontera de possibilitats de producció', 'Frontera de posibilidades de producción'],
  t2: ['Equilibri: Qd = Qo', 'Equilibrio: Qd = Qo'],
  t3: ['La cadena de les macromagnituds', 'La cadena de las macromagnitudes'],
  prac: ['Correcció automàtica i solució pas a pas', 'Corrección automática y solución paso a paso'],
};
const ink3 = { color: 'var(--ink-3)' };

export default function Art({ s, li, lv }) {
  let fig;
  if (s === 't1') {
    fig = (
      <svg className="mini" viewBox="0 0 180 130" role="img" aria-label="FPP">
        <path className="m-ax" d="M18 8V112H172" /><path className="m-a" d="M18 22 C70 24 122 50 150 112" />
        <circle className="m-p" cx="68" cy="30" r="4" /><circle className="m-p" cx="128" cy="68" r="4" />
        <circle cx="70" cy="80" r="4" fill="none" stroke="currentColor" style={ink3} />
        <text className="m-t" x="150" y="40">FPP</text><text className="m-t" x="78" y="94">C</text>
      </svg>
    );
  } else if (s === 't2') {
    fig = (
      <svg className="mini" viewBox="0 0 180 130" role="img" aria-label="Oferta i demanda">
        <path className="m-ax" d="M18 8V112H172" /><path className="m-d" d="M28 18 L160 104" /><path className="m-o" d="M28 104 L160 18" />
        <circle className="m-p" cx="94" cy="61" r="4.4" /><path d="M94 61V112M94 61H18" stroke="currentColor" style={ink3} strokeDasharray="3 3" fill="none" />
        <text className="m-t" x="102" y="58">E</text><text className="m-t" x="150" y="122">q</text><text className="m-t" x="4" y="14">P</text>
      </svg>
    );
  } else if (s === 't3') {
    fig = <div className="formula">PIB<sub>cf</sub> = salaris + EBE<br />PNB = PIB + rfne − rfen<br />RN = PNN<sub>cf</sub><br />RPD = RN − T<sub>d</sub> − SS + Tr</div>;
  } else {
    fig = <div className="formula" id="pracart">{lv}</div>;
  }
  return <div className="head-art">{fig}<p className="artcap">{CAP[s][li]}</p></div>;
}
