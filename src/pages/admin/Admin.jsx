import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREE_BY_KEY } from '../../catalog/degrees.js';
import { COURSES } from '../../courses/registry.js';
import Page from '../../app/Page.jsx';
import NotFound from '../../app/NotFound.jsx';
import './admin.css';

const S = {
  ca: {
    title: 'Administració', lead: 'Només lectura. Les dades venen de funcions del servidor que comproven el rol d’administrador.',
    off: 'La web no té comptes configurats: no hi ha dades per mostrar.', loading: 'Carregant…', err: 'No s’han pogut carregar les dades.',
    users: 'Altes', days: 'darrers 90 dies', total: 'Total', perDay: 'Per dia', perDegree: 'Per grau', perPlan: 'Per pla', none: 'Cap', noDegree: 'Sense grau',
    items: 'Exercicis', itemsLead: 'Intents i encerts per exercici. Els que tenen un percentatge molt baix poden estar mal plantejats.',
    minAtt: 'Mínim d’intents', subject: 'Assignatura', item: 'Exercici', kind: 'Tipus', attempts: 'Intents', pct: 'Encerts', people: 'Persones', last: 'Darrer',
    kinds: { exercise: 'pràctica', quiz: 'comprovació', exam: 'simulacre', lab: 'laboratori', code: 'codi' },
    wait: 'Llista d’espera', degree: 'Grau', n: 'Persones',
    cat: 'Catàleg', units: 'Temes', en: 'Amb anglès', ex: 'Exercicis', fam: 'Famílies', methods: 'Mètodes', day: 'Dia',
  },
  es: {
    title: 'Administración', lead: 'Solo lectura. Los datos vienen de funciones del servidor que comprueban el rol de administrador.',
    off: 'La web no tiene cuentas configuradas: no hay datos que mostrar.', loading: 'Cargando…', err: 'No se han podido cargar los datos.',
    users: 'Altas', days: 'últimos 90 días', total: 'Total', perDay: 'Por día', perDegree: 'Por grado', perPlan: 'Por plan', none: 'Ninguna', noDegree: 'Sin grado',
    items: 'Ejercicios', itemsLead: 'Intentos y aciertos por ejercicio. Los que tienen un porcentaje muy bajo pueden estar mal planteados.',
    minAtt: 'Mínimo de intentos', subject: 'Asignatura', item: 'Ejercicio', kind: 'Tipo', attempts: 'Intentos', pct: 'Aciertos', people: 'Personas', last: 'Último',
    kinds: { exercise: 'práctica', quiz: 'comprobación', exam: 'simulacro', lab: 'laboratorio', code: 'código' },
    wait: 'Lista de espera', degree: 'Grado', n: 'Personas',
    cat: 'Catálogo', units: 'Temas', en: 'Con inglés', ex: 'Ejercicios', fam: 'Familias', methods: 'Métodos', day: 'Día',
  },
  en: {
    title: 'Administration', lead: 'Read only. The data comes from server functions that check the administrator role.',
    off: 'This site has no accounts configured: there is no data to show.', loading: 'Loading…', err: 'The data could not be loaded.',
    users: 'Sign-ups', days: 'last 90 days', total: 'Total', perDay: 'By day', perDegree: 'By degree', perPlan: 'By plan', none: 'None', noDegree: 'No degree',
    items: 'Exercises', itemsLead: 'Attempts and correct answers per exercise. Very low percentages may point to badly worded exercises.',
    minAtt: 'Minimum attempts', subject: 'Subject', item: 'Exercise', kind: 'Type', attempts: 'Attempts', pct: 'Correct', people: 'People', last: 'Last',
    kinds: { exercise: 'practice', quiz: 'check', exam: 'mock exam', lab: 'lab', code: 'code' },
    wait: 'Waiting list', degree: 'Degree', n: 'People',
    cat: 'Catalogue', units: 'Units', en: 'With English', ex: 'Exercises', fam: 'Families', methods: 'Methods', day: 'Day',
  },
};

const KITS = import.meta.glob('../../courses/*/kit/course.js');

/** Suma n agrupant per la clau k. */
const groupBy = (rows, k) => {
  const m = new Map();
  for (const r of rows) m.set(r[k], (m.get(r[k]) || 0) + Number(r.n));
  return [...m].sort((a, b) => b[1] - a[1]);
};

/** Estat del catàleg: temes, anglès, exercicis i mètodes de cada assignatura de la plantilla. */
function useCatalog() {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    let on = true;
    // les assignatures de la plantilla (les altres del registre encara no hi són)
    const kits = COURSES.filter((c) => KITS['../../courses/' + c.k + '/kit/course.js']);
    Promise.all(kits.map(async (c) => {
      const load = KITS['../../courses/' + c.k + '/kit/course.js'];
      const course = (await load()).default;
      const [bank, methods] = await Promise.all([course.bank?.(), course.methods?.()]);
      const b = bank?.default || {}, m = methods?.default || {};
      return {
        c, units: course.units.length, en: course.units.filter((u) => (u.langs || []).includes('en')).length,
        ex: (b.items || []).length, fam: (b.families || []).length, methods: course.units.filter((u) => m[u.id]).length,
      };
    })).then((r) => { if (on) setRows(r); }, () => { if (on) setRows([]); });
    return () => { on = false; };
  }, []);
  return rows;
}

function Table({ head, rows, empty }) {
  if (!rows.length) return <p className="ad-muted">{empty}</p>;
  return (
    <div className="ad-tw">
      <table className="ad-table">
        <thead><tr>{head.map((x) => <th key={x}>{x}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((x, j) => <td key={j}>{x}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/** /admin: tauler de només lectura (role='admin'; la seguretat és a les funcions del servidor). */
export default function Admin() {
  const { ui, t } = useLang();
  const { status, profile, ensureClient } = useAuth();
  const L = S[ui] || S.es;
  useDocumentTitle(L.title);
  const isAdmin = profile?.role === 'admin';
  const [data, setData] = useState(null); // null | { signups, items, wait } | 'error'
  const [minAtt, setMinAtt] = useState(5);
  const catalog = useCatalog();

  useEffect(() => {
    if (!isAdmin) return undefined;
    let on = true;
    (async () => {
      try {
        const sb = await ensureClient();
        const [a, b, c] = await Promise.all([sb.rpc('admin_signups', { p_days: 90 }), sb.rpc('admin_item_stats', { p_min_attempts: 1 }), sb.rpc('admin_waitlist')]);
        if (a.error || b.error || c.error) throw a.error || b.error || c.error;
        if (on) setData({ signups: a.data, items: b.data, wait: c.data });
      } catch { if (on) setData('error'); }
    })();
    return () => { on = false; };
  }, [isAdmin, ensureClient]);

  const items = useMemo(() => (data && data !== 'error'
    ? data.items.filter((r) => r.attempts >= minAtt)
      .map((r) => ({ ...r, pct: r.graded ? r.correct / r.graded : null }))
      .sort((x, y) => (x.pct ?? 2) - (y.pct ?? 2) || y.attempts - x.attempts)
    : []), [data, minAtt]);

  if (status === 'disabled') return <Page name="admin"><h1 className="am-h1">{L.title}</h1><p className="ad-muted">{L.off}</p></Page>;
  if (status === 'loading' || (status === 'user' && !profile)) return <Page name="admin"><p className="ad-muted">{L.loading}</p></Page>;
  if (!isAdmin) return <NotFound />;

  const fmt = (d) => new Date(d).toLocaleDateString(ui);
  const deg = (k) => (k && DEGREE_BY_KEY[k] ? t(DEGREE_BY_KEY[k].name) : k || L.noDegree);
  const course = (k) => { const c = COURSES.find((x) => x.k === k); return c ? t(c.title) : k; };
  const pct = (x) => (x == null ? '—' : Math.round(x * 100) + ' %');

  return (
    <Page name="admin">
      <h1 className="am-h1">{L.title}</h1>
      <p className="ad-muted">{L.lead}</p>
      {data === null && <p className="ad-muted">{L.loading}</p>}
      {data === 'error' && <p className="ad-err" role="alert">{L.err}</p>}
      {data && data !== 'error' && <>
        <section className="ad-sec" aria-labelledby="ad-users">
          <h2 className="am-h2" id="ad-users">{L.users} <small>({L.days})</small></h2>
          <p className="ad-big">{L.total}: <b>{data.signups.reduce((n, r) => n + Number(r.n), 0)}</b></p>
          <div className="ad-cols">
            <div><h3>{L.perDegree}</h3><Table head={[L.degree, L.n]} rows={groupBy(data.signups, 'degree').map(([k, n]) => [deg(k), n])} empty={L.none} /></div>
            <div><h3>{L.perPlan}</h3><Table head={[L.perPlan, L.n]} rows={groupBy(data.signups, 'plan')} empty={L.none} /></div>
            <div><h3>{L.perDay}</h3><Table head={[L.day, L.n]} rows={groupBy(data.signups, 'day').slice(0, 30).sort((a, b) => (a[0] < b[0] ? 1 : -1)).map(([d, n]) => [fmt(d), n])} empty={L.none} /></div>
          </div>
        </section>
        <section className="ad-sec" aria-labelledby="ad-items">
          <h2 className="am-h2" id="ad-items">{L.items}</h2>
          <p className="ad-muted">{L.itemsLead}</p>
          <label className="ad-filter">{L.minAtt} <input type="number" min="1" className="am-input" value={minAtt} onChange={(e) => setMinAtt(Math.max(1, Number(e.target.value) || 1))} /></label>
          <Table head={[L.subject, L.item, L.kind, L.attempts, L.pct, L.people, L.last]} empty={L.none}
            rows={items.slice(0, 200).map((r) => [course(r.subject), <code key="i">{r.item}</code>, L.kinds[r.kind] || r.kind, r.attempts, pct(r.pct), r.users, fmt(r.last_at)])} />
        </section>
        <section className="ad-sec" aria-labelledby="ad-wait">
          <h2 className="am-h2" id="ad-wait">{L.wait}</h2>
          <Table head={[L.degree, L.n, L.last]} rows={data.wait.map((r) => [deg(r.degree), r.n, fmt(r.last_at)])} empty={L.none} />
        </section>
      </>}
      <section className="ad-sec" aria-labelledby="ad-cat">
        <h2 className="am-h2" id="ad-cat">{L.cat}</h2>
        {!catalog ? <p className="ad-muted">{L.loading}</p> : (
          <Table head={[L.subject, L.units, L.en, L.ex, L.fam, L.methods]} empty={L.none}
            rows={catalog.map((r) => [t(r.c.title), r.units, r.en + ' / ' + r.units, r.ex, r.fam, r.methods + ' / ' + r.units])} />
        )}
      </section>
    </Page>
  );
}
