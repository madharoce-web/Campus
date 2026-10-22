/** Il·lustració de la capçalera (la de l'original): fórmula de la portada o els ponts de Königsberg. */
export default function Art({ s, li }) {
  if (s === 'grafs') {
    return (
      <div className="head-art">
        <svg className="kb" viewBox="0 0 170 132" role="img" aria-label="Els set ponts de Königsberg">
          <path className="e" d="M85 20 Q34 30 48 66" /><path className="e" d="M85 20 Q66 38 48 66" />
          <path className="e" d="M48 66 Q34 102 85 112" /><path className="e" d="M48 66 Q66 94 85 112" />
          <path className="e" d="M85 20 L150 66" /><path className="e" d="M85 112 L150 66" /><path className="e" d="M48 66 L150 66" />
          <circle className="n" cx="85" cy="20" r="4.6" /><circle className="n" cx="48" cy="66" r="4.6" />
          <circle className="n" cx="85" cy="112" r="4.6" /><circle className="n" cx="150" cy="66" r="4.6" />
          <text className="t" x="85" y="11" textAnchor="middle">A</text><text className="t" x="34" y="70" textAnchor="middle">B</text>
          <text className="t" x="85" y="128" textAnchor="middle">C</text><text className="t" x="163" y="70" textAnchor="middle">D</text>
        </svg>
        <p className="artcap">{['Els set ponts de Königsberg · Euler, 1736', 'Los siete puentes de Königsberg · Euler, 1736'][li]}</p>
      </div>
    );
  }
  return (
    <div className="head-art">
      <div className="formula">∀x ∃y ∀z<br />{'  '}((¬P(x) ∨ ¬Q(x)) ∨<br />{'   '}(R(x,y) ∧ S(z,y,x)))</div>
      <p className="artcap">Fórmula de la portada del material</p>
    </div>
  );
}
