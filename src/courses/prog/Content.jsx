import { createElement, useRef } from 'react';
import Rich from '../../lib/Rich.jsx';
import { useInternalLinks } from '../../lib/useInternalLinks.js';
import CodeBlock from './CodeBlock.jsx';
import ExprLab from './ExprLab.jsx';
import ExList from './ExList.jsx';
import Quiz from './Quiz.jsx';

/* Pinta l'arbre de contingut d'una pàgina (vegeu el format a data/pages/*.json):
   els elements estàtics són HTML (<Rich>) i els blocs interactius, components. */

const camel = (k) => (k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
function styleObj(s) {
  const o = {};
  String(s).split(';').forEach((d) => {
    const i = d.indexOf(':');
    if (i > 0) o[camel(d.slice(0, i).trim())] = d.slice(i + 1).trim();
  });
  return o;
}
function toProps(a) {
  const p = {};
  for (const [k, v] of Object.entries(a || {})) {
    if (k === 'class') p.className = v;
    else if (k === 'style') p.style = styleObj(v);
    else p[k] = v;
  }
  return p;
}

/** Element estàtic amb enllaços interns: naveguen amb el router. */
function LinkedRich(props) {
  const ref = useRef(null);
  useInternalLinks(ref);
  return <Rich ref={ref} {...props} />;
}

function Node({ n }) {
  if (typeof n === 'string') return n;
  switch (n.k) {
    case 'code': return <CodeBlock {...n} />;
    case 'xp': return <ExprLab expr={n.expr} vars={n.vars} />;
    case 'ex': return <ExList wk={n.wk} />;
    case 'quiz': return <Quiz q={n} />;
    default: break;
  }
  const props = toProps(n.a);
  if (n.h !== undefined) return n.l ? <LinkedRich as={n.t} html={n.h} {...props} /> : <Rich as={n.t} html={n.h} {...props} />;
  return createElement(n.t, props, <Nodes nodes={n.c} />);
}

export default function Nodes({ nodes }) {
  return (nodes || []).map((n, i) => <Node key={i} n={n} />);
}
