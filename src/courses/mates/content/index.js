import { makeCore } from './core.js';
import { makeLabsConj } from './labs-conj.js';
import { makeLabsRel } from './labs-rel.js';
import { makeLabsNomb } from './labs-nomb.js';
import { makeLabsCx } from './labs-cx.js';
import { makeLabsMat } from './labs-mat.js';
import { makeFormulari } from './formulari.js';
import { makePractice } from './practice.js';
import { makeBank } from './bank.js';
import { makeBankConj } from './bank-conj.js';
import { makeBankRel } from './bank-rel.js';
import { makeBankReals } from './bank-reals.js';
import { makeBankInd } from './bank-ind.js';
import { makeBankCx } from './bank-cx.js';
import { makeBankArr } from './bank-arr.js';
import { makeBankHasse } from './bank-hasse.js';
import { makeBankMat } from './bank-mat.js';
import { makeExam } from './exam.js';

/* en l'ordre de l'script original: cada part fa servir el que han definit les anteriors */
const PARTS = [makeCore, makeLabsConj, makeLabsRel, makeLabsNomb, makeLabsCx, makeLabsMat,
  makeFormulari, makePractice,
  makeBank, makeBankConj, makeBankRel, makeBankReals, makeBankInd, makeBankCx, makeBankArr, makeBankHasse, makeBankMat,
  makeExam];

/**
 * Tot el contingut en un idioma, en un sol contenidor $ (formulari, laboratoris, banc, simulacre i generadors).
 * Es construeix una sola vegada per idioma.
 */
const cache = {};
export function getContent(lang) {
  if (!cache[lang]) {
    const $ = { lang };
    PARTS.forEach((make) => Object.assign($, make($)));
    cache[lang] = $;
  }
  return cache[lang];
}
