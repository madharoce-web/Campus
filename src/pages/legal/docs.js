/**
 * Textos legals de la web (aviso legal, privacitat, condicions). Base redactada per a una empresa
 * andorrana que presta un servei en línia a estudiants; s'omple amb les dades de l'empresa de /admin.
 * Abans d'activar els cobraments, cal que els revisi un assessor jurídic.
 * Cada document: { t: títol, s: [[apartat, [paràgrafs]]] }; {name}, {nrt}… es substitueixen.
 */
export const LEGAL_LINKS = {
  ca: [['avis-legal', 'Avís legal'], ['privacitat', 'Privacitat'], ['condicions', 'Condicions']],
  es: [['avis-legal', 'Aviso legal'], ['privacitat', 'Privacidad'], ['condicions', 'Condiciones']],
  en: [['avis-legal', 'Legal notice'], ['privacitat', 'Privacy'], ['condicions', 'Terms']],
};

export const UPDATED = { ca: 'Darrera actualització', es: 'Última actualización', en: 'Last updated' };
export const DATE = '2026-10-29';

export const DOCS = {
  ca: {
    'avis-legal': { t: 'Avís legal', s: [
      ['Titular', ['Aquesta web, aulamada.tech (en endavant, «Aula Mada»), és titularitat de {name}, amb número de registre tributari {nrt} i domicili a {address}, {city} ({country}). Contacte: {email}.']],
      ['Objecte', ['Aula Mada és una plataforma en línia de material d’estudi universitari: temari, exercicis resolts, pràctica, simulacres d’examen i eines interactives. És un projecte independent, sense cap vincle amb cap universitat.']],
      ['Propietat intel·lectual', ['Els textos, exercicis, laboratoris, dissenys i el codi de la web són propietat del titular o s’utilitzen amb llicència. No es poden reproduir, distribuir ni transformar sense autorització, excepte per a l’ús personal d’estudi de cada usuari.', 'Els noms d’assignatures i titulacions s’utilitzen només per indicar a quin temari correspon el material.']],
      ['Responsabilitat', ['El material es revisa amb cura, però pot contenir errors. No substitueix les classes ni els materials oficials de cada assignatura. Si en trobes algun, escriu-nos des del formulari de contacte.']],
      ['Llei aplicable', ['Aquest avís es regeix per la legislació del Principat d’Andorra. Per a qualsevol controvèrsia, les parts se sotmeten als tribunals d’Andorra, sens perjudici dels drets que la normativa de consum reconegui a l’usuari.']],
    ] },
    privacitat: { t: 'Política de privacitat', s: [
      ['Responsable del tractament', ['{name} (NRT {nrt}), {address}, {city} ({country}). Correu: {email}.']],
      ['Quines dades tractem', ['Dades del compte: correu electrònic, nom, idioma, curs, graus i assignatures triats.', 'Progrés d’estudi: apartats llegits, exercicis fets i resultats, simulacres i preferències de la web.', 'Missatges que ens envies pel formulari de contacte.', 'Quan s’activin els pagaments: dades de facturació. Les dades de la targeta les tracta directament l’entitat bancària; Aula Mada no les rep ni les desa.']],
      ['Finalitats i base legal', ['Prestar el servei i mantenir el teu compte i el teu progrés (execució del contracte).', 'Respondre les consultes (consentiment i interès legítim).', 'Millorar els exercicis a partir d’estadístiques agregades i anònimes (interès legítim).', 'Complir obligacions fiscals i comptables, quan hi hagi pagaments (obligació legal).']],
      ['Encarregats i ubicació de les dades', ['Les dades es desen a la Unió Europea (Supabase, centre de dades de París). La web es distribueix amb Cloudflare i els correus s’envien amb Resend. Les funcions d’intel·ligència artificial del pla Pro, quan estiguin disponibles, s’ofereixen amb Anthropic. Tots actuen com a encarregats del tractament amb les garanties que exigeix la normativa.']],
      ['Conservació', ['Mentre tinguis el compte actiu. Si l’esborres, les dades s’eliminen de seguida, excepte les que calgui conservar per obligació legal (per exemple, factures).']],
      ['Els teus drets', ['Pots accedir a les teves dades, rectificar-les, demanar-ne la supressió, la limitació o la portabilitat, i oposar-te al tractament. Des del teu compte pots descarregar totes les dades i esborrar el compte en qualsevol moment. Per a la resta, escriu a {email}.', 'També pots presentar una reclamació davant l’Agència Andorrana de Protecció de Dades (APDA).']],
      ['Emmagatzematge local', ['La web desa al teu navegador (localStorage) les preferències i el progrés, per funcionar també sense connexió. No utilitzem galetes publicitàries ni de seguiment de tercers.']],
      ['Estadístiques de visites', ['Fem servir Cloudflare Web Analytics per saber quantes visites rep la web i quines pàgines es consulten. No fa servir galetes ni identificadors personals, no segueix ningú d’un lloc a un altre i només ens dona dades agregades.']],
      ['Normativa', ['Aquesta política segueix la Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals, i, per als usuaris de la Unió Europea, el Reglament (UE) 2016/679 (RGPD).']],
    ] },
    condicions: { t: 'Condicions d’ús i de contractació', s: [
      ['El servei', ['Aula Mada ofereix accés en línia a material d’estudi universitari. Per fer-lo servir cal un compte personal i intransferible.']],
      ['Plans', ['Hi ha un pla gratuït i plans de pagament (Bàsic i Pro). Els preus vigents, el que inclou cada pla i, si n’hi ha, la durada de la prova gratuïta es mostren a la pàgina de plans abans de contractar. Els preus inclouen els impostos aplicables.']],
      ['Pagament i renovació', ['Les subscripcions es paguen per avançat (mensual, semestral o anual) i es renoven automàticament al final de cada període amb el mitjà de pagament registrat. T’avisarem per correu abans de cada renovació.', 'Si la prova gratuïta requereix registrar un mitjà de pagament, el primer cobrament es fa en acabar la prova, tret que la cancel·lis abans.']],
      ['Cancel·lació', ['Pots cancel·lar la renovació en qualsevol moment des del teu compte. Mantens l’accés fins al final del període ja pagat. Els períodes començats no es reemborsen, excepte quan ho exigeixi la llei.']],
      ['Factures', ['Cada pagament genera una factura que rebràs per correu electrònic i que també pots consultar al teu compte.']],
      ['Ús correcte', ['El material és per a l’estudi personal. No està permès compartir el compte, copiar el contingut de manera massiva ni redistribuir-lo. L’incompliment pot comportar la suspensió del compte.']],
      ['Canvis', ['Podem actualitzar aquestes condicions i els preus. Els canvis de preu s’apliquen a partir del període següent i t’avisarem amb antelació.']],
      ['Llei aplicable', ['Aquestes condicions es regeixen per la legislació del Principat d’Andorra.']],
    ] },
  },
  es: {
    'avis-legal': { t: 'Aviso legal', s: [
      ['Titular', ['Esta web, aulamada.tech (en adelante, «Aula Mada»), es titularidad de {name}, con número de registro tributario {nrt} y domicilio en {address}, {city} ({country}). Contacto: {email}.']],
      ['Objeto', ['Aula Mada es una plataforma en línea de material de estudio universitario: temario, ejercicios resueltos, práctica, simulacros de examen y herramientas interactivas. Es un proyecto independiente, sin ningún vínculo con ninguna universidad.']],
      ['Propiedad intelectual', ['Los textos, ejercicios, laboratorios, diseños y el código de la web son propiedad del titular o se utilizan con licencia. No se pueden reproducir, distribuir ni transformar sin autorización, salvo para el uso personal de estudio de cada usuario.', 'Los nombres de asignaturas y titulaciones se utilizan solo para indicar a qué temario corresponde el material.']],
      ['Responsabilidad', ['El material se revisa con cuidado, pero puede contener errores. No sustituye las clases ni los materiales oficiales de cada asignatura. Si encuentras alguno, escríbenos desde el formulario de contacto.']],
      ['Ley aplicable', ['Este aviso se rige por la legislación del Principado de Andorra. Para cualquier controversia, las partes se someten a los tribunales de Andorra, sin perjuicio de los derechos que la normativa de consumo reconozca al usuario.']],
    ] },
    privacitat: { t: 'Política de privacidad', s: [
      ['Responsable del tratamiento', ['{name} (NRT {nrt}), {address}, {city} ({country}). Correo: {email}.']],
      ['Qué datos tratamos', ['Datos de la cuenta: correo electrónico, nombre, idioma, curso, grados y asignaturas elegidos.', 'Progreso de estudio: apartados leídos, ejercicios hechos y resultados, simulacros y preferencias de la web.', 'Mensajes que nos envías por el formulario de contacto.', 'Cuando se activen los pagos: datos de facturación. Los datos de la tarjeta los trata directamente la entidad bancaria; Aula Mada no los recibe ni los guarda.']],
      ['Finalidades y base legal', ['Prestar el servicio y mantener tu cuenta y tu progreso (ejecución del contrato).', 'Responder a las consultas (consentimiento e interés legítimo).', 'Mejorar los ejercicios a partir de estadísticas agregadas y anónimas (interés legítimo).', 'Cumplir obligaciones fiscales y contables, cuando haya pagos (obligación legal).']],
      ['Encargados y ubicación de los datos', ['Los datos se guardan en la Unión Europea (Supabase, centro de datos de París). La web se distribuye con Cloudflare y los correos se envían con Resend. Las funciones de inteligencia artificial del plan Pro, cuando estén disponibles, se ofrecen con Anthropic. Todos actúan como encargados del tratamiento con las garantías que exige la normativa.']],
      ['Conservación', ['Mientras tengas la cuenta activa. Si la borras, los datos se eliminan de inmediato, salvo los que deban conservarse por obligación legal (por ejemplo, facturas).']],
      ['Tus derechos', ['Puedes acceder a tus datos, rectificarlos, solicitar su supresión, la limitación o la portabilidad, y oponerte al tratamiento. Desde tu cuenta puedes descargar todos los datos y borrar la cuenta en cualquier momento. Para lo demás, escribe a {email}.', 'También puedes presentar una reclamación ante la Agencia Andorrana de Protección de Datos (APDA).']],
      ['Almacenamiento local', ['La web guarda en tu navegador (localStorage) las preferencias y el progreso, para funcionar también sin conexión. No utilizamos cookies publicitarias ni de seguimiento de terceros.']],
      ['Estadísticas de visitas', ['Usamos Cloudflare Web Analytics para saber cuántas visitas recibe la web y qué páginas se consultan. No usa cookies ni identificadores personales, no sigue a nadie de un sitio a otro y solo nos da datos agregados.']],
      ['Normativa', ['Esta política sigue la Ley 29/2021, de 28 de octubre, cualificada de protección de datos personales, y, para los usuarios de la Unión Europea, el Reglamento (UE) 2016/679 (RGPD).']],
    ] },
    condicions: { t: 'Condiciones de uso y de contratación', s: [
      ['El servicio', ['Aula Mada ofrece acceso en línea a material de estudio universitario. Para usarlo hace falta una cuenta personal e intransferible.']],
      ['Planes', ['Hay un plan gratuito y planes de pago (Básico y Pro). Los precios vigentes, lo que incluye cada plan y, si la hay, la duración de la prueba gratuita se muestran en la página de planes antes de contratar. Los precios incluyen los impuestos aplicables.']],
      ['Pago y renovación', ['Las suscripciones se pagan por adelantado (mensual, semestral o anual) y se renuevan automáticamente al final de cada periodo con el medio de pago registrado. Te avisaremos por correo antes de cada renovación.', 'Si la prueba gratuita requiere registrar un medio de pago, el primer cobro se realiza al terminar la prueba, salvo que la canceles antes.']],
      ['Cancelación', ['Puedes cancelar la renovación en cualquier momento desde tu cuenta. Mantienes el acceso hasta el final del periodo ya pagado. Los periodos empezados no se reembolsan, salvo cuando lo exija la ley.']],
      ['Facturas', ['Cada pago genera una factura que recibirás por correo electrónico y que también puedes consultar en tu cuenta.']],
      ['Uso correcto', ['El material es para el estudio personal. No está permitido compartir la cuenta, copiar el contenido de forma masiva ni redistribuirlo. El incumplimiento puede conllevar la suspensión de la cuenta.']],
      ['Cambios', ['Podemos actualizar estas condiciones y los precios. Los cambios de precio se aplican a partir del periodo siguiente y te avisaremos con antelación.']],
      ['Ley aplicable', ['Estas condiciones se rigen por la legislación del Principado de Andorra.']],
    ] },
  },
  en: {
    'avis-legal': { t: 'Legal notice', s: [
      ['Owner', ['This website, aulamada.tech (“Aula Mada”), is owned by {name}, tax registration number (NRT) {nrt}, registered office at {address}, {city} ({country}). Contact: {email}.']],
      ['Purpose', ['Aula Mada is an online platform of university study material: syllabus, solved exercises, practice, mock exams and interactive tools. It is an independent project, not affiliated with any university.']],
      ['Intellectual property', ['The texts, exercises, labs, designs and code of the website belong to the owner or are used under licence. They may not be reproduced, distributed or transformed without permission, except for each user’s personal study.', 'Subject and degree names are used only to indicate which syllabus the material corresponds to.']],
      ['Liability', ['The material is carefully reviewed but may contain mistakes. It does not replace the classes or the official materials of each subject. If you find one, please write to us through the contact form.']],
      ['Governing law', ['This notice is governed by the laws of the Principality of Andorra. Any dispute is subject to the courts of Andorra, without prejudice to the rights consumer law grants the user.']],
    ] },
    privacitat: { t: 'Privacy policy', s: [
      ['Data controller', ['{name} (NRT {nrt}), {address}, {city} ({country}). Email: {email}.']],
      ['What data we process', ['Account data: email address, name, language, year, chosen degrees and subjects.', 'Study progress: sections read, exercises done and results, mock exams and website preferences.', 'Messages you send us through the contact form.', 'Once payments are enabled: billing data. Card details are handled directly by the bank; Aula Mada neither receives nor stores them.']],
      ['Purposes and legal basis', ['Providing the service and keeping your account and progress (performance of the contract).', 'Answering enquiries (consent and legitimate interest).', 'Improving exercises using aggregated, anonymous statistics (legitimate interest).', 'Meeting tax and accounting obligations when there are payments (legal obligation).']],
      ['Processors and data location', ['Data is stored in the European Union (Supabase, Paris data centre). The website is delivered with Cloudflare and emails are sent with Resend. The Pro plan’s artificial intelligence features, once available, are provided with Anthropic. All of them act as data processors with the safeguards the law requires.']],
      ['Retention', ['While your account is active. If you delete it, your data is erased immediately, except what must be kept by law (for example, invoices).']],
      ['Your rights', ['You can access, rectify and erase your data, request restriction or portability, and object to processing. From your account you can download all your data and delete the account at any time. For anything else, write to {email}.', 'You may also lodge a complaint with the Andorran Data Protection Agency (APDA).']],
      ['Local storage', ['The website stores your preferences and progress in your browser (localStorage) so it also works offline. We do not use advertising or third-party tracking cookies.']],
      ['Visitor statistics', ['We use Cloudflare Web Analytics to know how many visits the website receives and which pages are viewed. It uses no cookies or personal identifiers, does not track anyone across sites and only gives us aggregated data.']],
      ['Legislation', ['This policy follows Andorran Qualified Law 29/2021 of 28 October on personal data protection and, for users in the European Union, Regulation (EU) 2016/679 (GDPR).']],
    ] },
    condicions: { t: 'Terms of use and purchase', s: [
      ['The service', ['Aula Mada provides online access to university study material. Using it requires a personal, non-transferable account.']],
      ['Plans', ['There is a free plan and paid plans (Basic and Pro). Current prices, what each plan includes and the length of any free trial are shown on the plans page before purchase. Prices include applicable taxes.']],
      ['Payment and renewal', ['Subscriptions are paid in advance (monthly, per semester or yearly) and renew automatically at the end of each period with the registered payment method. We will email you before each renewal.', 'If the free trial requires registering a payment method, the first charge is made when the trial ends, unless you cancel before.']],
      ['Cancellation', ['You can cancel the renewal at any time from your account. You keep access until the end of the period already paid. Started periods are not refunded, except where the law requires it.']],
      ['Invoices', ['Each payment generates an invoice that you will receive by email and can also see in your account.']],
      ['Fair use', ['The material is for personal study. Sharing the account, copying the content in bulk or redistributing it is not allowed and may lead to the account being suspended.']],
      ['Changes', ['We may update these terms and prices. Price changes apply from the following period and we will notify you in advance.']],
      ['Governing law', ['These terms are governed by the laws of the Principality of Andorra.']],
    ] },
  },
};
