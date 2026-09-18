// Lecture / écriture de l'état de progression. Fichier unique : progression.json à la racine.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");
const FICHIER = join(RACINE, "progression.json");

const VIDE = {
  version: 1,
  creeLe: null,
  modules: {},   // code -> { etat, essais, echecs, premierEssai, reussiLe, tempsSessions }
  journal: []    // { date, code, action, detail }
};

export function lire() {
  if (!existsSync(FICHIER)) {
    const p = { ...VIDE, creeLe: new Date().toISOString(), modules: {}, journal: [] };
    ecrire(p);
    return p;
  }
  try {
    const p = JSON.parse(readFileSync(FICHIER, "utf8"));
    p.modules ||= {};
    p.journal ||= [];
    return p;
  } catch {
    return { ...VIDE, creeLe: new Date().toISOString(), modules: {}, journal: [] };
  }
}

export function ecrire(p) {
  writeFileSync(FICHIER, JSON.stringify(p, null, 2) + "\n", "utf8");
}

export function etatDe(p, code) {
  return p.modules[code] || { etat: "a-faire", essais: 0, echecs: 0 };
}

/** Enregistre une tentative. resultat = "reussi" | "echec" */
export function enregistrer(code, resultat, detail = {}) {
  const p = lire();
  const m = p.modules[code] || {
    etat: "a-faire", essais: 0, echecs: 0,
    premierEssai: null, reussiLe: null, dernierEssai: null
  };

  m.essais++;
  m.premierEssai ||= new Date().toISOString();
  m.dernierEssai = new Date().toISOString();

  if (resultat === "reussi") {
    if (m.etat !== "reussi") m.reussiLe = new Date().toISOString();
    m.etat = "reussi";
    m.essaisJusquAuSucces ??= m.essais;
  } else {
    m.echecs++;
    m.etat = "en-cours";
  }

  p.modules[code] = m;
  p.journal.push({
    date: new Date().toISOString(),
    code,
    action: resultat,
    ...detail
  });
  if (p.journal.length > 2000) p.journal = p.journal.slice(-2000);

  ecrire(p);
  return m;
}

/** Marque un module non testable (leçon pure) comme validé à la main. */
export function validerManuellement(code) {
  const p = lire();
  const m = p.modules[code] || { etat: "a-faire", essais: 0, echecs: 0 };
  m.etat = "reussi";
  m.reussiLe = new Date().toISOString();
  m.valideALaMain = true;
  p.modules[code] = m;
  p.journal.push({ date: new Date().toISOString(), code, action: "valide-main" });
  ecrire(p);
  return m;
}
