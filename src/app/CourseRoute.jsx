import { Component, lazy, Suspense } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { T } from './strings.js';

const cache = new Map();
function lazyCourse(c) {
  if (!cache.has(c.k)) cache.set(c.k, lazy(c.load));
  return cache.get(c.k);
}

function Loading() {
  const { lang } = useLang();
  return <div className="app-loading" role="status"><span className="app-spin" aria-hidden="true" />{T[lang].loading}</div>;
}

function LoadError({ onRetry }) {
  const { lang } = useLang();
  return (
    <div className="app-page app-err" role="alert">
      <p>{T[lang].loadErr}</p>
      <button type="button" className="app-btn" onClick={onRetry}>{T[lang].retry}</button>
    </div>
  );
}

class Boundary extends Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err) { console.error(err); }
  render() {
    if (this.state.err) return <LoadError onRetry={() => window.location.reload()} />;
    return this.props.children;
  }
}

/** Carrega el curs sota demanda (cada curs és un fragment de codi separat). */
export default function CourseRoute({ course }) {
  const Comp = lazyCourse(course);
  return (
    <Boundary key={course.k}>
      <Suspense fallback={<Loading />}>
        <Comp />
      </Suspense>
    </Boundary>
  );
}
