// Formulari de Principis d'economia (finestra flotant). Una fórmula: { id, t, tex | x, note };
// tex pot ser una parella [ca, es] si porta text.
export default {
  groups: [
    {
      unit: 't1', t: ['Tema 1 · Conceptes bàsics', 'Tema 1 · Conceptos básicos'],
      items: [
        { id: 'co', t: ["Cost d'oportunitat (FPP)", 'Coste de oportunidad (FPP)'], tex: ['\\text{CO de } X=\\frac{\\Delta Y \\text{ que es deixa de produir}}{\\Delta X \\text{ que es guanya}}', '\\text{CO de } X=\\frac{\\Delta Y \\text{ que se deja de producir}}{\\Delta X \\text{ que se gana}}'],
          note: ['Entre dos punts de la FPP; si creix en avançar, la FPP és còncava (cost creixent).', 'Entre dos puntos de la FPP; si crece al avanzar, la FPP es cóncava (coste creciente).'] },
        { id: 'fpp-pt', t: ['Punt respecte de la FPP', 'Punto respecto a la FPP'], x: ['Sobre la corba: **eficient** · a dins: **ineficient** · a fora: **inassolible**', 'Sobre la curva: **eficiente** · dentro: **ineficiente** · fuera: **inalcanzable**'] },
      ],
    },
    {
      unit: 't2', t: ['Tema 2 · Demanda, oferta i mercat', 'Tema 2 · Demanda, oferta y mercado'],
      items: [
        { id: 'eq', t: ['Equilibri', 'Equilibrio'], tex: 'Q_d(P^*)=Q_o(P^*)', note: ['Iguala les dues funcions, aïlla $P^*$ i substitueix a qualsevol de les dues per trobar $Q^*$.', 'Iguala las dos funciones, despeja $P^*$ y sustituye en cualquiera de las dos para hallar $Q^*$.'] },
        { id: 'exc', t: ['Excés de demanda / oferta', 'Exceso de demanda / oferta'], tex: 'Q_d-Q_o>0 \\Rightarrow P\\uparrow \\qquad Q_o-Q_d>0 \\Rightarrow P\\downarrow' },
        { id: 'pmax', t: ['Preu màxim i preu mínim de la corba', 'Precio máximo y mínimo de la curva'], tex: 'Q_d=0 \\Rightarrow P_{\\max} \\qquad Q_o=0 \\Rightarrow P_{\\min}' },
        { id: 'ec', t: ['Excedent del consumidor', 'Excedente del consumidor'], tex: 'EC=\\frac{Q^*\\,(P_{\\max}-P^*)}{2}' },
        { id: 'ep', t: ['Excedent del productor', 'Excedente del productor'], tex: 'EP=\\frac{Q^*\\,(P^*-P_{\\min})}{2}' },
        { id: 'bs', t: ['Benestar social', 'Bienestar social'], tex: ['BS=EC+EP+\\text{recaptació}', 'BS=EC+EP+\\text{recaudación}'], note: ['Sense intervenció de l\'Estat, la recaptació és 0.', 'Sin intervención del Estado, la recaudación es 0.'] },
      ],
    },
    {
      unit: 't3', t: ['Tema 3 · Magnituds agregades', 'Tema 3 · Magnitudes agregadas'],
      items: [
        { id: 'ipc', t: ['IPC (mitjana ponderada)', 'IPC (media ponderada)'], tex: '\\mathrm{IPC}_t=\\sum_{i=1}^{n} g_i\\cdot\\frac{p_{it}}{p_{i0}}', note: ['$g_i$: pes del bé $i$ a la cistella (els pesos sumen 100).', '$g_i$: peso del bien $i$ en la cesta (los pesos suman 100).'] },
        { id: 'infl', t: ["Taxa d'inflació", 'Tasa de inflación'], tex: '\\pi=\\frac{\\mathrm{IPC}_t-\\mathrm{IPC}_{t-1}}{\\mathrm{IPC}_{t-1}}\\times 100' },
        { id: 'creix', t: ['Taxa de creixement', 'Tasa de crecimiento'], tex: '\\frac{X_t-X_{t-1}}{X_{t-1}}\\times 100' },
        { id: 'pibn', t: ['PIB nominal i real', 'PIB nominal y real'], tex: '\\mathrm{PIB}_{\\text{nom}}=\\sum P_t\\,Q_t \\qquad \\mathrm{PIB}_{\\text{real}}=\\sum P_0\\,Q_t' },
        { id: 'defl', t: ['Deflactor del PIB', 'Deflactor del PIB'], tex: 'D=\\frac{\\mathrm{PIB}_{\\text{nom}}}{\\mathrm{PIB}_{\\text{real}}}\\times 100' },
        { id: 'nomreal', t: ['Nominal, real i preus', 'Nominal, real y precios'], tex: '(1+g_{\\text{nom}})=(1+g_{\\text{real}})(1+\\pi)' },
        { id: 'pibd', t: ['PIB per la despesa', 'PIB por el gasto'], tex: '\\mathrm{PIB}_{pm}=C+I+D+X-M', note: ['$D$: despesa pública (en altres llibres, $G$).', '$D$: gasto público (en otros libros, $G$).'] },
        { id: 'pibr', t: ['PIB per les rendes', 'PIB por las rentas'], tex: ['\\mathrm{PIB}_{cf}=\\text{salaris}+\\mathrm{EBE}\\qquad \\mathrm{EBE}=\\text{lloguers}+\\text{interessos}+\\text{beneficis}', '\\mathrm{PIB}_{cf}=\\text{salarios}+\\mathrm{EBE}\\qquad \\mathrm{EBE}=\\text{alquileres}+\\text{intereses}+\\text{beneficios}'] },
        { id: 'va', t: ['Valor afegit', 'Valor añadido'], tex: ['\\mathrm{VA}=\\text{producció}-\\text{consums intermedis}', '\\mathrm{VA}=\\text{producción}-\\text{consumos intermedios}'] },
        { id: 'pmcf', t: ['Preus de mercat ↔ cost de factors', 'Precios de mercado ↔ coste de factores'], tex: ['pm=cf+\\text{imp. indirectes}-\\text{subvencions}', 'pm=cf+\\text{imp. indirectos}-\\text{subvenciones}'] },
        { id: 'net', t: ['Net = brut − amortitzacions', 'Neto = bruto − amortizaciones'], tex: ['\\mathrm{PIN}=\\mathrm{PIB}-\\text{amortitzacions}', '\\mathrm{PIN}=\\mathrm{PIB}-\\text{amortizaciones}'] },
        { id: 'pnb', t: ['PNB', 'PNB'], tex: '\\mathrm{PNB}=\\mathrm{PIB}+\\mathrm{rfne}-\\mathrm{rfen}', note: ['rfne: rendes dels factors nacionals a l\'estranger; rfen: dels estrangers al país.', 'rfne: rentas de los factores nacionales en el extranjero; rfen: de los extranjeros en el país.'] },
        { id: 'rn', t: ['Renda nacional', 'Renta nacional'], tex: ['\\mathrm{RN}=\\mathrm{PNN}_{cf}=\\mathrm{PNB}_{cf}-\\text{amortitzacions}', '\\mathrm{RN}=\\mathrm{PNN}_{cf}=\\mathrm{PNB}_{cf}-\\text{amortizaciones}'] },
        { id: 'rpc', t: ['Renda per càpita', 'Renta per cápita'], tex: ['\\frac{\\mathrm{RN}}{\\text{habitants}}', '\\frac{\\mathrm{RN}}{\\text{habitantes}}'] },
        { id: 'rpd', t: ['Renda personal disponible', 'Renta personal disponible'], tex: ['\\mathrm{RPD}=\\mathrm{RN}-\\text{imp. directes}-\\text{SS}+\\text{transferències}', '\\mathrm{RPD}=\\mathrm{RN}-\\text{imp. directos}-\\text{SS}+\\text{transferencias}'] },
        { id: 'estalvi', t: ['Estalvi i saldo públic', 'Ahorro y saldo público'], tex: 'S=\\mathrm{RPD}-C \\qquad \\mathrm{SP}=T-D-\\mathrm{Tr}-\\mathrm{Subv}' },
        { id: 'pob', t: ['Població', 'Población'], tex: '\\mathrm{PT}=\\mathrm{PA}+\\mathrm{PI}\\qquad \\mathrm{PA}=\\mathrm{PO}+\\mathrm{PD}' },
        { id: 'atur', t: ["Taxa d'atur", 'Tasa de paro'], tex: '\\frac{\\mathrm{PD}}{\\mathrm{PA}}\\times 100', note: ['Sobre la població **activa**, no sobre la total.', 'Sobre la población **activa**, no sobre la total.'] },
        { id: 'activ', t: ["Taxa d'activitat", 'Tasa de actividad'], tex: '\\frac{\\mathrm{PA}}{\\mathrm{PT}}\\times 100' },
        { id: 'dep', t: ['Taxa de dependència', 'Tasa de dependencia'], tex: '\\frac{\\mathrm{PO}}{\\mathrm{PT}}\\times 100' },
      ],
    },
  ],
};
