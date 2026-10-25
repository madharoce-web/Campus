import { Navigate, useParams } from 'react-router-dom';
import EX from './data/exercises.json';

/**
 * El C++ a contrarellotge ara és part d'Iniciació a la Programació (src/courses/prog, plantilla de
 * l'aula): els exercicis són a la Pràctica, el simulacre al Simulacre i el pati de proves a la
 * pràctica S2. Aquesta carpeta conserva les dades i els components de l'editor i de la consola.
 */
const BY = Object.fromEntries(EX.map((x) => [x.id, x]));

export default function Course() {
  const v = (useParams()['*'] || '').split('/')[0];
  let to = '/programacio/practica';
  if (v === 'pati') to = '/programacio/temari/s2#pati';
  else if (v === 'exam' || v === 'examen') to = '/programacio/simulacre';
  else if (v === 'prog' || v === 'progres') to = '/programacio';
  else if (/^s[2-7]$/.test(v)) to = '/programacio/practica?unit=' + v;
  else if (BY[v]) to = '/programacio/practica?unit=s' + BY[v].wk + '&ex=cpp-' + v;
  return <Navigate replace to={to} />;
}
