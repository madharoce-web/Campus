import { useEffect, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { money } from '../../lib/plan.js';
import { FEATURE_NAMES, priceOf, saveSetting, useSettings } from '../../lib/settings.js';

const S = {
  ca: {
    save: 'Desa', saved: 'Desat', saveErr: 'No s’ha pogut desar.', reset: 'Desfés els canvis',
    billingH: 'Cobraments', enabled: 'Cobraments activats', enabledHint: 'Mentre estigui desactivat, tot és gratuït i no es veuen preus. Activa’l només quan la pasarel·la de pagament estigui a punt.',
    pricesH: 'Preus (euros al mes, impostos inclosos)', basePrice: 'Tarifa bàsica', baseSubjects: 'Assignatures incloses a la tarifa bàsica', extraSubject: 'Cada assignatura de més', degreeMultiplier: 'Multiplicador per cada grau de més', proPrice: 'Pla Pro (per grau)',
    trialDays: 'Dies de prova gratuïta (0 = sense prova)', semester: 'Descompte semestral (%)', year: 'Descompte anual (%)',
    example: 'Exemple', exampleT: (s, d, p) => `${s} assignatures en ${d} grau(s): ${p} al mes`,
    freeH: 'Límits del pla gratuït (0 = sense límit)', freeDegrees: 'Graus', freeSubjects: 'Assignatures', freeExams: 'Simulacres per setmana', freeReview: 'Repàs per dia',
    featH: 'Funcions de cada plan', feat: 'Funció', free: 'Gratuït', basic: 'Bàsic', pro: 'Pro',
    companyH: 'Dades de l’empresa', companyHint: 'Surten a l’avís legal, a la política de privacitat, al contacte i a les factures.',
    cname: 'Raó social', nrt: 'NRT', address: 'Adreça', city: 'Parròquia o ciutat', country: 'País', email: 'Correu de contacte', phone: 'Telèfon',
    aboutH: 'Text de «Sobre nosaltres»', aboutHint: 'Un paràgraf per línia en blanc. Un text per idioma.',
    msgsH: 'Missatges de contacte', noMsgs: 'Encara no n’hi ha cap.', handled: 'Atès', from: 'De', when: 'Data', topic: 'Motiu', msg: 'Missatge', reply: 'Respon',
  },
  es: {
    save: 'Guardar', saved: 'Guardado', saveErr: 'No se ha podido guardar.', reset: 'Deshacer los cambios',
    billingH: 'Cobros', enabled: 'Cobros activados', enabledHint: 'Mientras esté desactivado, todo es gratuito y no se ven precios. Actívalo solo cuando la pasarela de pago esté lista.',
    pricesH: 'Precios (euros al mes, impuestos incluidos)', basePrice: 'Tarifa básica', baseSubjects: 'Asignaturas incluidas en la tarifa básica', extraSubject: 'Cada asignatura adicional', degreeMultiplier: 'Multiplicador por cada grado adicional', proPrice: 'Plan Pro (por grado)',
    trialDays: 'Días de prueba gratuita (0 = sin prueba)', semester: 'Descuento semestral (%)', year: 'Descuento anual (%)',
    example: 'Ejemplo', exampleT: (s, d, p) => `${s} asignaturas en ${d} grado(s): ${p} al mes`,
    freeH: 'Límites del plan gratuito (0 = sin límite)', freeDegrees: 'Grados', freeSubjects: 'Asignaturas', freeExams: 'Simulacros por semana', freeReview: 'Repaso por día',
    featH: 'Funciones de cada plan', feat: 'Función', free: 'Gratuito', basic: 'Básico', pro: 'Pro',
    companyH: 'Datos de la empresa', companyHint: 'Salen en el aviso legal, la política de privacidad, el contacto y las facturas.',
    cname: 'Razón social', nrt: 'NRT', address: 'Dirección', city: 'Parroquia o ciudad', country: 'País', email: 'Correo de contacto', phone: 'Teléfono',
    aboutH: 'Texto de «Sobre nosotros»', aboutHint: 'Un párrafo por línea en blanco. Un texto por idioma.',
    msgsH: 'Mensajes de contacto', noMsgs: 'Todavía no hay ninguno.', handled: 'Atendido', from: 'De', when: 'Fecha', topic: 'Motivo', msg: 'Mensaje', reply: 'Responder',
  },
  en: {
    save: 'Save', saved: 'Saved', saveErr: 'Could not save.', reset: 'Undo changes',
    billingH: 'Billing', enabled: 'Payments enabled', enabledHint: 'While disabled, everything is free and no prices are shown. Enable it only once the payment gateway is ready.',
    pricesH: 'Prices (euros per month, taxes included)', basePrice: 'Basic fee', baseSubjects: 'Subjects included in the basic fee', extraSubject: 'Each extra subject', degreeMultiplier: 'Multiplier for each extra degree', proPrice: 'Pro plan (per degree)',
    trialDays: 'Free trial days (0 = no trial)', semester: 'Semester discount (%)', year: 'Yearly discount (%)',
    example: 'Example', exampleT: (s, d, p) => `${s} subjects in ${d} degree(s): ${p} per month`,
    freeH: 'Free plan limits (0 = unlimited)', freeDegrees: 'Degrees', freeSubjects: 'Subjects', freeExams: 'Mock exams per week', freeReview: 'Review per day',
    featH: 'Features of each plan', feat: 'Feature', free: 'Free', basic: 'Basic', pro: 'Pro',
    companyH: 'Company details', companyHint: 'Shown in the legal notice, privacy policy, contact section and invoices.',
    cname: 'Company name', nrt: 'NRT', address: 'Address', city: 'Parish or city', country: 'Country', email: 'Contact email', phone: 'Phone',
    aboutH: '“About us” text', aboutHint: 'Separate paragraphs with a blank line. One text per language.',
    msgsH: 'Contact messages', noMsgs: 'None yet.', handled: 'Handled', from: 'From', when: 'Date', topic: 'Topic', msg: 'Message', reply: 'Reply',
  },
};

/** Una secció d'ajustos editable: còpia local, «Desa» i estat. */
function useSection(key) {
  const { values } = useSettings();
  const [v, setV] = useState(values[key]);
  const [state, setState] = useState(null); // null | saving | saved | error
  useEffect(() => { setV(values[key]); }, [values, key]);
  const { ensureClient } = useAuth();
  const save = async () => {
    setState('saving');
    try { await saveSetting(await ensureClient(), key, v); setState('saved'); } catch { setState('error'); }
  };
  return { v, setV: (x) => { setV(x); setState(null); }, save, state, dirty: JSON.stringify(v) !== JSON.stringify(values[key]), reset: () => setV(values[key]) };
}

function SaveBar({ sec, L }) {
  return (
    <div className="ad-save">
      <button type="button" className="am-btn am-btn-primary" disabled={!sec.dirty || sec.state === 'saving'} onClick={sec.save}>{L.save}</button>
      {sec.dirty && <button type="button" className="kit-link" onClick={sec.reset}>{L.reset}</button>}
      {sec.state === 'saved' && <span className="ad-ok" role="status">{L.saved}</span>}
      {sec.state === 'error' && <span className="ad-err" role="alert">{L.saveErr}</span>}
    </div>
  );
}

const Num = ({ id, label, value, onChange, step = 1, min = 0 }) => (
  <div className="am-field ad-num">
    <label className="am-label" htmlFor={id}>{label}</label>
    <input id={id} className="am-input" type="number" min={min} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
  </div>
);

/** Plans i preus: cobraments, preus, prova, descomptes i límits del pla gratuït. */
export function PlansSettings() {
  const { ui } = useLang();
  const L = S[ui];
  const b = useSection('billing');
  const f = useSection('free');
  const B = b.v;
  const set = (k) => (x) => b.setV({ ...B, [k]: x });
  const ex = [[2, 1], [4, 1], [3, 2]].map(([s, d]) => L.exampleT(s, d, money(priceOf(B, { subjects: s, degrees: d }).total, ui)));
  return (
    <>
      <section className="ad-sec">
        <h2 className="am-h2">{L.billingH}</h2>
        <label className="ad-switch"><input type="checkbox" id="ad-enabled" checked={B.enabled} onChange={(e) => set('enabled')(e.target.checked)} /><span>{L.enabled}</span></label>
        <p className="ad-muted">{L.enabledHint}</p>
        <h3>{L.pricesH}</h3>
        <div className="ad-grid">
          <Num id="ad-base" label={L.basePrice} value={B.basePrice} step={0.5} onChange={set('basePrice')} />
          <Num id="ad-bsub" label={L.baseSubjects} value={B.baseSubjects} min={1} onChange={set('baseSubjects')} />
          <Num id="ad-extra" label={L.extraSubject} value={B.extraSubject} step={0.5} onChange={set('extraSubject')} />
          <Num id="ad-mult" label={L.degreeMultiplier} value={B.degreeMultiplier} step={0.5} min={1} onChange={set('degreeMultiplier')} />
          <Num id="ad-pro" label={L.proPrice} value={B.proPrice} step={0.5} onChange={set('proPrice')} />
          <Num id="ad-trial" label={L.trialDays} value={B.trialDays} onChange={set('trialDays')} />
          <Num id="ad-sem" label={L.semester} value={B.discounts.semester} onChange={(x) => b.setV({ ...B, discounts: { ...B.discounts, semester: x } })} />
          <Num id="ad-year" label={L.year} value={B.discounts.year} onChange={(x) => b.setV({ ...B, discounts: { ...B.discounts, year: x } })} />
        </div>
        <p className="ad-muted"><b>{L.example}:</b> {ex.join(' · ')}</p>
        <SaveBar sec={b} L={L} />
      </section>
      <section className="ad-sec">
        <h2 className="am-h2">{L.freeH}</h2>
        <div className="ad-grid">
          <Num id="ad-fdeg" label={L.freeDegrees} value={f.v.degrees} onChange={(x) => f.setV({ ...f.v, degrees: x })} />
          <Num id="ad-fsub" label={L.freeSubjects} value={f.v.subjects} onChange={(x) => f.setV({ ...f.v, subjects: x })} />
          <Num id="ad-fex" label={L.freeExams} value={f.v.examsPerWeek} onChange={(x) => f.setV({ ...f.v, examsPerWeek: x })} />
          <Num id="ad-frev" label={L.freeReview} value={f.v.reviewPerDay ?? 0} onChange={(x) => f.setV({ ...f.v, reviewPerDay: x })} />
        </div>
        <SaveBar sec={f} L={L} />
      </section>
    </>
  );
}

/** Quines funcions té cada pla. */
export function FeaturesSettings() {
  const { ui, t } = useLang();
  const L = S[ui];
  const s = useSection('features');
  const toggle = (id, p) => s.setV({ ...s.v, [id]: { ...s.v[id], [p]: !s.v[id][p] } });
  return (
    <section className="ad-sec">
      <h2 className="am-h2">{L.featH}</h2>
      <div className="ad-tw">
        <table className="ad-table" id="ad-features">
          <thead><tr><th>{L.feat}</th>{['free', 'basic', 'pro'].map((p) => <th key={p} className="ad-c">{L[p]}</th>)}</tr></thead>
          <tbody>{Object.keys(s.v).map((id) => (
            <tr key={id}>
              <td>{t(FEATURE_NAMES[id] || [id, id, id])}</td>
              {['free', 'basic', 'pro'].map((p) => (
                <td key={p} className="ad-c"><input type="checkbox" aria-label={L[p]} checked={!!s.v[id][p]} onChange={() => toggle(id, p)} /></td>
              ))}
            </tr>
          ))}</tbody>
        </table>
      </div>
      <SaveBar sec={s} L={L} />
    </section>
  );
}

/** Dades de l'empresa i text de «Sobre nosaltres». */
export function CompanySettings() {
  const { ui } = useLang();
  const L = S[ui];
  const c = useSection('company');
  const a = useSection('about');
  const field = (k, label, type = 'text') => (
    <div className="am-field" key={k}><label className="am-label" htmlFor={'ad-c-' + k}>{label}</label>
      <input id={'ad-c-' + k} className="am-input" type={type} value={c.v[k] || ''} onChange={(e) => c.setV({ ...c.v, [k]: e.target.value })} /></div>
  );
  return (
    <>
      <section className="ad-sec">
        <h2 className="am-h2">{L.companyH}</h2>
        <p className="ad-muted">{L.companyHint}</p>
        <div className="ad-grid ad-grid-2">
          {field('name', L.cname)}{field('nrt', L.nrt)}{field('address', L.address)}{field('city', L.city)}{field('country', L.country)}{field('email', L.email, 'email')}{field('phone', L.phone, 'tel')}
        </div>
        <SaveBar sec={c} L={L} />
      </section>
      <section className="ad-sec">
        <h2 className="am-h2">{L.aboutH}</h2>
        <p className="ad-muted">{L.aboutHint}</p>
        {['ca', 'es', 'en'].map((l) => (
          <div className="am-field" key={l}><label className="am-label" htmlFor={'ad-about-' + l}>{l.toUpperCase()}</label>
            <textarea id={'ad-about-' + l} className="am-input" rows={4} value={a.v[l] || ''} onChange={(e) => a.setV({ ...a.v, [l]: e.target.value })} /></div>
        ))}
        <SaveBar sec={a} L={L} />
      </section>
    </>
  );
}

/** Missatges del formulari de contacte. */
export function Messages() {
  const { ui } = useLang();
  const L = S[ui];
  const { ensureClient } = useAuth();
  const [rows, setRows] = useState(null);
  useEffect(() => {
    let on = true;
    (async () => {
      const sb = await ensureClient();
      const { data } = await sb.from('contact_messages').select('id,name,email,topic,body,lang,handled,created_at').order('created_at', { ascending: false }).limit(200);
      if (on) setRows(data || []);
    })().catch(() => on && setRows([]));
    return () => { on = false; };
  }, [ensureClient]);
  const mark = async (r) => {
    const sb = await ensureClient();
    const { error } = await sb.from('contact_messages').update({ handled: !r.handled }).eq('id', r.id);
    if (!error) setRows((rs) => rs.map((x) => (x.id === r.id ? { ...x, handled: !r.handled } : x)));
  };
  return (
    <section className="ad-sec">
      <h2 className="am-h2">{L.msgsH}</h2>
      {!rows ? null : !rows.length ? <p className="ad-muted">{L.noMsgs}</p> : (
        <ul className="ad-msgs">
          {rows.map((r) => (
            <li key={r.id} className={r.handled ? 'is-done' : ''}>
              <div className="ad-msg-h">
                <b>{r.name}</b> · <a href={'mailto:' + r.email + '?subject=' + encodeURIComponent('Aula Mada')}>{r.email}</a>
                <span className="ad-muted"> · {r.topic} · {new Date(r.created_at).toLocaleString(ui)}</span>
                <label className="ad-switch ad-msg-done"><input type="checkbox" checked={r.handled} onChange={() => mark(r)} /><span>{L.handled}</span></label>
              </div>
              <p>{r.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
