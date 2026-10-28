import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { AUTH_ENABLED, getSupabase } from '../../lib/supabase.js';
import { useSettings } from '../../lib/settings.js';

const S = {
  ca: {
    aboutH: 'Sobre nosaltres', navAbout: 'Nosaltres', navContact: 'Contacte',
    values: [['Fet per estudiants', 'Sabem què costa preparar una assignatura perquè també la preparem.'], ['Contingut propi', 'Tot el material està redactat de nou, revisat i alineat amb el temari.'], ['Sense distraccions', 'Sense anuncis i amb les teves dades a la Unió Europea.']],
    contactH: 'Contacte', contactP: 'Dubtes, suggeriments, errades al material o propostes de col·laboració: escriu-nos i et respondrem per correu.',
    name: 'Nom', email: 'Correu electrònic', topic: 'Motiu', msg: 'Missatge',
    topics: [['general', 'Consulta general'], ['support', 'Ajuda amb el compte'], ['content', 'Errada al contingut'], ['billing', 'Plans i pagaments'], ['press', 'Col·laboracions i premsa']],
    privacy: 'He llegit la <a>política de privacitat</a>.', send: 'Envia el missatge', sending: 'Enviant…',
    ok: 'Missatge enviat. Et respondrem al teu correu tan aviat com puguem.', err: 'No s’ha pogut enviar. Torna-ho a provar o escriu-nos directament.', limit: 'Has enviat molts missatges avui. Torna-ho a provar demà.',
    direct: 'També ens pots escriure a', where: 'Andorra',
  },
  es: {
    aboutH: 'Sobre nosotros', navAbout: 'Nosotros', navContact: 'Contacto',
    values: [['Hecho por estudiantes', 'Sabemos lo que cuesta preparar una asignatura porque también la preparamos.'], ['Contenido propio', 'Todo el material está redactado de nuevo, revisado y alineado con el temario.'], ['Sin distracciones', 'Sin anuncios y con tus datos en la Unión Europea.']],
    contactH: 'Contacto', contactP: 'Dudas, sugerencias, erratas en el material o propuestas de colaboración: escríbenos y te responderemos por correo.',
    name: 'Nombre', email: 'Correo electrónico', topic: 'Motivo', msg: 'Mensaje',
    topics: [['general', 'Consulta general'], ['support', 'Ayuda con la cuenta'], ['content', 'Errata en el contenido'], ['billing', 'Planes y pagos'], ['press', 'Colaboraciones y prensa']],
    privacy: 'He leído la <a>política de privacidad</a>.', send: 'Enviar el mensaje', sending: 'Enviando…',
    ok: 'Mensaje enviado. Te responderemos a tu correo lo antes posible.', err: 'No se ha podido enviar. Vuelve a intentarlo o escríbenos directamente.', limit: 'Has enviado muchos mensajes hoy. Vuelve a intentarlo mañana.',
    direct: 'También puedes escribirnos a', where: 'Andorra',
  },
  en: {
    aboutH: 'About us', navAbout: 'About', navContact: 'Contact',
    values: [['Made by students', 'We know what it takes to prepare a subject because we prepare it too.'], ['Original content', 'All the material is written from scratch, reviewed and aligned with the syllabus.'], ['No distractions', 'No ads, and your data stays in the European Union.']],
    contactH: 'Contact', contactP: 'Questions, suggestions, mistakes in the material or collaboration proposals: write to us and we will reply by email.',
    name: 'Name', email: 'Email', topic: 'Subject', msg: 'Message',
    topics: [['general', 'General enquiry'], ['support', 'Help with my account'], ['content', 'Mistake in the content'], ['billing', 'Plans and payments'], ['press', 'Partnerships and press']],
    privacy: 'I have read the <a>privacy policy</a>.', send: 'Send message', sending: 'Sending…',
    ok: 'Message sent. We will reply to your email as soon as we can.', err: 'The message could not be sent. Try again or write to us directly.', limit: 'You have sent many messages today. Try again tomorrow.',
    direct: 'You can also write to us at', where: 'Andorra',
  },
};

export const aboutNav = (ui) => [['#nosaltres', S[ui].navAbout], ['#contacte', S[ui].navContact]];

/** «Sobre nosaltres»: el text es canvia a /admin (ajust about). */
export function About() {
  const { ui } = useLang();
  const L = S[ui];
  const { values } = useSettings();
  const text = values.about[ui] || values.about.es;
  return (
    <section className="lp-sec" id="nosaltres" aria-labelledby="lp-about">
      <div className="lp-wrap lp-about">
        <div>
          <h2 className="lp-h2" id="lp-about">{L.aboutH}</h2>
          {text.split(/\n{2,}/).map((p) => <p key={p} className="lp-sub">{p}</p>)}
        </div>
        <ul className="lp-values">
          {L.values.map(([h, p]) => <li key={h}><b>{h}</b><span>{p}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

/** Formulari de contacte: amb comptes configurats, es desa amb send_contact(); si no, el correu. */
export function Contact() {
  const { ui } = useLang();
  const L = S[ui];
  const { user } = useAuth();
  const { values } = useSettings();
  const mail = values.company.email;
  const [f, setF] = useState({ name: '', email: user?.email || '', topic: 'general', body: '', ok: false });
  const [state, setState] = useState(null); // null | sending | sent | error | limit
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }); if (state !== 'sending') setState(null); };
  const send = async (e) => {
    e.preventDefault();
    if (!AUTH_ENABLED) { if (mail) window.location.href = 'mailto:' + mail + '?subject=' + encodeURIComponent('Aula Mada · ' + f.topic) + '&body=' + encodeURIComponent(f.body); return; }
    setState('sending');
    try {
      const sb = await getSupabase();
      const { error } = await sb.rpc('send_contact', { p_name: f.name, p_email: f.email, p_body: f.body, p_topic: f.topic, p_lang: ui });
      if (error) throw error;
      setState('sent');
      setF({ ...f, body: '' });
    } catch (err) {
      setState(String(err?.message || '').includes('massa') ? 'limit' : 'error');
    }
  };
  const [pre, post] = L.privacy.split(/<a>.*<\/a>/);
  const linkText = L.privacy.match(/<a>(.*)<\/a>/)[1];
  return (
    <section className="lp-sec lp-sec-gray" id="contacte" aria-labelledby="lp-contact">
      <div className="lp-wrap lp-contact">
        <div>
          <h2 className="lp-h2" id="lp-contact">{L.contactH}</h2>
          <p className="lp-sub">{L.contactP}</p>
          {mail && <p className="lp-sub">{L.direct} <a href={'mailto:' + mail}>{mail}</a>.</p>}
          <p className="lp-sub lp-muted">{[values.company.name, values.company.city || L.where].filter(Boolean).join(' · ')}</p>
        </div>
        <form className="lp-form" onSubmit={send} noValidate={false}>
          <div className="lp-form-2">
            <div className="am-field"><label className="am-label" htmlFor="lp-cname">{L.name}</label>
              <input id="lp-cname" className="am-input" required maxLength={120} autoComplete="name" value={f.name} onChange={set('name')} /></div>
            <div className="am-field"><label className="am-label" htmlFor="lp-cmail">{L.email}</label>
              <input id="lp-cmail" className="am-input" type="email" required maxLength={254} autoComplete="email" value={f.email} onChange={set('email')} /></div>
          </div>
          <div className="am-field"><label className="am-label" htmlFor="lp-ctopic">{L.topic}</label>
            <select id="lp-ctopic" className="am-input" value={f.topic} onChange={set('topic')}>{L.topics.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
          <div className="am-field"><label className="am-label" htmlFor="lp-cmsg">{L.msg}</label>
            <textarea id="lp-cmsg" className="am-input" required rows={5} maxLength={5000} value={f.body} onChange={set('body')} /></div>
          <label className="lp-consent"><input type="checkbox" required checked={f.ok} onChange={set('ok')} /><span>{pre}<Link to="/legal/privacitat">{linkText}</Link>{post}</span></label>
          <div className="lp-form-end">
            <button type="submit" className="am-btn am-btn-primary" disabled={state === 'sending'}>{state === 'sending' ? L.sending : L.send}</button>
            {state === 'sent' && <p className="lp-ok" role="status">{L.ok}</p>}
            {(state === 'error' || state === 'limit') && <p className="lp-err" role="alert">{state === 'limit' ? L.limit : L.err}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
