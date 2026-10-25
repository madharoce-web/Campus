import { lazy, Suspense } from 'react';
import { useDock } from '../courses/_kit/dockStore.js';

// el formulari (i la biblioteca de fórmules) només es baixa quan s'obre
const FormulaDock = lazy(() => import('../courses/_kit/FormulaDock.jsx'));

/** Formulari flotant de les assignatures: es queda obert mentre es navega per tota la web. */
export default function DockHost() {
  const d = useDock();
  if (!d.open || !d.k) return null;
  return <Suspense fallback={null}><FormulaDock /></Suspense>;
}
