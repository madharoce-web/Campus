import { Navigate, useLocation, useParams } from 'react-router-dom';

/**
 * Pseudocodi CP1 ara és part d'Iniciació a la Programació (src/courses/prog, plantilla de l'aula):
 * les adreces d'abans porten al lloc nou. Aquesta carpeta conserva l'intèrpret, les dades i els
 * components de l'editor, que fan servir els exercicis de pseudocodi de la plantilla.
 */
const TO = {
  xuleta: '/programacio/temari/xu',
  escriu: '/programacio/practica?unit=t21',
  examen: '/programacio/simulacre',
  notacio: '/programacio/practica?unit=t22',
  prior: '/programacio/practica?unit=t22',
  esquemes: '/programacio/practica?unit=t23',
  teoria: '/programacio/practica?unit=t21',
};

export default function Course() {
  const sub = (useParams()['*'] || '').split('/')[0];
  const h = useLocation().hash.replace(/^#/, '');
  return <Navigate replace to={TO[sub] || TO[h] || '/programacio/temari/xu'} />;
}
