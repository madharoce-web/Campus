import { memo } from 'react';

/** Imatge de capçalera de cada targeta: patró geomètric determinista sobre el color del curs. */
function rand(seed) {
  let x = seed;
  return () => { x = (x * 9301 + 49297) % 233280; return x / 233280; };
}

function shapes(c) {
  const r = rand(c.k.length * 977 + c.k.charCodeAt(0) * 31);
  const sh = () => { const v = r(); return v < 0.5 ? ['#222', (v * 0.26 + 0.02).toFixed(3)] : ['#fff', ((v - 0.5) * 0.34 + 0.03).toFixed(3)]; };
  const out = [];
  if (c.pat === 'plus') for (let i = 0; i < 12; i++) for (let j = 0; j < 6; j++) {
    const [f, o] = sh(), x = i * 28 + (j % 2) * 14, y = j * 26;
    out.push(<path key={out.length} fill={f} fillOpacity={o} d={`M${x - 4} ${y - 12}h8v8h8v8h-8v8h-8v-8h-8v-8h8z`} />);
  }
  if (c.pat === 'rings') for (let i = 0; i < 9; i++) for (let j = 0; j < 4; j++) {
    const [f, o] = sh();
    out.push(<circle key={out.length} fill="none" stroke={f} strokeOpacity={o} strokeWidth="7" cx={i * 40 + 6} cy={j * 40 + 6} r="15" />);
  }
  if (c.pat === 'hex') for (let i = 0; i < 9; i++) for (let j = 0; j < 5; j++) {
    const [f, o] = sh(), cx = i * 39 + (j % 2) * 19.5, cy = j * 34;
    let d = '';
    for (let a = 0; a < 6; a++) { const t = Math.PI / 3 * a + Math.PI / 6; d += (a ? 'L' : 'M') + (cx + 21 * Math.cos(t)).toFixed(1) + ' ' + (cy + 21 * Math.sin(t)).toFixed(1); }
    out.push(<path key={out.length} fill={f} fillOpacity={o} stroke="#000" strokeOpacity=".03" d={d + 'z'} />);
  }
  if (c.pat === 'squares') for (let i = 0; i < 12; i++) for (let j = 0; j < 6; j++) {
    const [f, o] = sh();
    out.push(<rect key={out.length} fill={f} fillOpacity={o} stroke="#000" strokeOpacity=".03" x={i * 27} y={j * 27} width="27" height="27" />);
  }
  if (c.pat === 'diamonds') for (let i = 0; i < 9; i++) for (let j = 0; j < 7; j++) {
    const [f, o] = sh(), dx = i * 40 + (j % 2) * 20, dy = j * 22;
    out.push(<path key={out.length} fill={f} fillOpacity={o} d={`M${dx} ${dy - 22}l20 22-20 22-20-22z`} />);
  }
  return out;
}

function Pattern({ card, className = 'm-cimg' }) {
  return (
    <svg className={className} viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="140" fill={card.color} />
      {shapes(card)}
    </svg>
  );
}
export default memo(Pattern);
