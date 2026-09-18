#!/usr/bin/env node
// Lanceur de la formation. Usage :
//   node moteur/run.mjs                 → où j'en suis, quoi faire maintenant
//   node moteur/run.mjs 02-04           → corrige l'exercice 02-04
//   node moteur/run.mjs 02-04 --lecon   → affiche le chemin de la leçon
//   node moteur/run.mjs 02-04 --fait    → valide à la main (modules sans tests)
//   node moteur/run.mjs 02-04 --solution→ affiche la solution (si déjà réussi)
//   node moteur/run.mjs --bilan         → rapport complet
//   node moteur/run.mjs --temps 30      → que faire avec 30 minutes

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { MODULES, SECTIONS, trouver, fmtDuree, slug } from "./catalogue.mjs";
import { RACINE, lire, etatDe, enregistrer, validerManuellement } from "./progression.mjs";

/* ---------- couleurs ---------- */
const couleursActives = process.stdout.isTTY && process.env.NO_COLOR === undefined;
const c = (code, s) => couleursActives ? `\x1b[${code}m${s}\x1b[0m` : s;
const gras = s => c("1", s), gris = s => c("90", s);
const vert = s => c("32", s), rouge = s => c("31", s);
const jaune = s => c("33", s), cyan = s => c("36", s);
const ligne = () => console.log(gris("─".repeat(58)));

/* ---------- chemins ---------- */
const dossierExo = m => join(RACINE, "exercices", slug(m));
const fichierLecon = m => join(RACINE, "lecons", slug(m) + ".md");

/* ---------- affichages ---------- */
function badge(etat) {
  if (etat === "reussi") return vert("✔ réussi");
  if (etat === "en-cours") return jaune("… en cours");
  return gris("· à faire");
}

function tableauDeBord() {
  const p = lire();
  const total = MODULES.length;
  const faits = MODULES.filter(m => etatDe(p, m.code).etat === "reussi");
  const pct = Math.round(faits.length / total * 100);
  const minTotal = MODULES.reduce((a, m) => a + m.min, 0);
  const minFaits = faits.reduce((a, m) => a + m.min, 0);

  console.log();
  console.log(gras("  FORMATION JAVASCRIPT"));
  const barre = Math.round(pct / 100 * 30);
  console.log("  " + vert("█".repeat(barre)) + gris("░".repeat(30 - barre)) + "  " + gras(pct + " %"));
  console.log(gris(`  ${faits.length}/${total} modules · ${Math.round(minFaits / 60)} h sur ${Math.round(minTotal / 60)} h`));
  console.log();

  const suivant = MODULES.find(m => etatDe(p, m.code).etat !== "reussi");
  if (!suivant) {
    console.log(vert(gras("  Parcours terminé. Tu as les prérequis de React.")));
    console.log();
    return;
  }

  const e = etatDe(p, suivant.code);
  ligne();
  console.log("  " + gras("À FAIRE MAINTENANT") + "   " + gris(fmtDuree(suivant.min)));
  console.log("  " + cyan(suivant.code) + "  " + gras(suivant.titre));
  console.log(gris("  Section " + suivant.sec + " · " + suivant.secTitre));
  if (e.essais) console.log(gris(`  ${e.essais} tentative(s), ${e.echecs} échec(s)`));
  ligne();

  if (!suivant.pret) {
    console.log(jaune("  Ce module n'est pas encore rédigé."));
    console.log(gris("  Demande-le-moi en session et je l'ajoute."));
    console.log();
    return;
  }

  const lec = fichierLecon(suivant);
  const exo = join(dossierExo(suivant), "exercice.mjs");
  console.log("  1. Lis la leçon   " + gris(lec.replace(RACINE, ".")));
  if (existsSync(exo)) {
    console.log("  2. Code dans      " + gris(exo.replace(RACINE, ".")));
    console.log("  3. Corrige avec   " + cyan("js " + suivant.code));
  } else {
    console.log("  2. Fais la checklist de la leçon");
    console.log("  3. Valide avec    " + cyan("js " + suivant.code + " --fait"));
  }
  console.log();
}

function quoiFaireEn(minutes) {
  const p = lire();
  const suivant = MODULES.find(m => etatDe(p, m.code).etat !== "reussi");
  console.log();
  if (!suivant) { console.log(vert("  Tout est fait.")); console.log(); return; }
  const rentre = suivant.min <= minutes;
  console.log("  " + gras(suivant.code + "  " + suivant.titre) + "  " + gris("(" + fmtDuree(suivant.min) + ")"));
  console.log();
  if (rentre) {
    console.log(vert("  Ça tient dans tes " + minutes + " min. Vas-y."));
  } else {
    console.log(jaune("  Plus long que tes " + minutes + " min."));
    console.log(gris("  Attaque-le quand même : tu t'arrêteras où tu voudras,"));
    console.log(gris("  la progression garde la trace et tu reprendras ici."));
  }
  console.log();
}

function bilan() {
  const p = lire();
  console.log();
  console.log(gras("  BILAN DÉTAILLÉ"));
  console.log();
  for (const s of SECTIONS) {
    const mods = MODULES.filter(m => m.sec === s.num);
    const faits = mods.filter(m => etatDe(p, m.code).etat === "reussi").length;
    const marque = faits === mods.length ? vert("✔") : faits ? jaune("◐") : gris("·");
    console.log("  " + marque + " " + gras(s.num + " " + s.titre) + gris("  " + faits + "/" + mods.length));
    for (const m of mods) {
      const e = etatDe(p, m.code);
      let suffixe = "";
      if (e.etat === "reussi" && e.essaisJusquAuSucces > 2) suffixe = rouge("  (" + e.essaisJusquAuSucces + " essais)");
      else if (e.etat === "en-cours") suffixe = jaune("  (" + e.echecs + " échec(s))");
      if (!m.pret && e.etat !== "reussi") suffixe += gris("  [à rédiger]");
      console.log("      " + gris(m.code) + " " + m.titre.padEnd(34).slice(0, 34) + " " + badge(e.etat) + suffixe);
    }
    console.log();
  }
  const durs = Object.entries(p.modules)
    .filter(([, v]) => (v.essaisJusquAuSucces || 0) > 2 || v.echecs > 2)
    .map(([k, v]) => k + " (" + (v.echecs || 0) + " échecs)");
  if (durs.length) {
    console.log("  " + gras("Points de friction : ") + durs.join(", "));
    console.log(gris("  À revoir en priorité."));
    console.log();
  }
}

/* ---------- correction d'un exercice ---------- */
async function corriger(code) {
  const m = trouver(code);
  if (!m) { console.log(rouge("  Code inconnu : " + code)); return 1; }

  const dossier = dossierExo(m);
  const fTests = join(dossier, "tests.mjs");
  const fExo = join(dossier, "exercice.mjs");

  console.log();
  console.log(gras("  " + m.code + "  " + m.titre));
  ligne();

  if (!existsSync(fTests)) {
    console.log(jaune("  Pas de tests automatiques pour ce module."));
    console.log(gris("  Fais la checklist de la leçon puis : ") + cyan("js " + code + " --fait"));
    console.log();
    return 0;
  }
  if (!existsSync(fExo)) {
    console.log(rouge("  Fichier exercice.mjs introuvable dans " + dossier.replace(RACINE, ".")));
    console.log();
    return 1;
  }

  // le fichier de l'élève se charge-t-il ?
  // on capture ce qu'il affiche pour ne pas mélanger sa sortie et le rapport de tests
  const vraiWrite = process.stdout.write.bind(process.stdout);
  let capture = "";
  process.stdout.write = chunk => { capture += chunk; return true; };
  try {
    await import(pathToFileURL(fExo).href);
    process.stdout.write = vraiWrite;
    if (capture.trim()) {
      console.log(gris("  ┌ sortie de ton fichier"));
      for (const l of capture.trimEnd().split("\n")) console.log(gris("  │ ") + l);
      console.log(gris("  └"));
      console.log();
    }
  } catch (e) {
    process.stdout.write = vraiWrite;
    console.log(rouge("  Ton fichier ne se charge même pas :"));
    console.log("  " + rouge(e.name + " : " + e.message));
    console.log();
    console.log(gris("  Corrige d'abord cette erreur. Relis le message : il indique"));
    console.log(gris("  presque toujours la ligne exacte du problème."));
    console.log();
    enregistrer(code, "echec", { type: "chargement", erreur: e.name + ": " + e.message });
    return 1;
  }

  const { executer } = await import(pathToFileURL(join(RACINE, "moteur", "verif.mjs")).href);
  try {
    await import(pathToFileURL(fTests).href);
  } catch (e) {
    console.log(rouge("  Les tests n'ont pas pu se charger : " + e.message));
    console.log();
    return 1;
  }

  const r = await executer();

  for (const t of r.cas) {
    if (t.ok) {
      console.log("  " + vert("✔") + " " + t.titre);
    } else {
      console.log("  " + rouge("✘") + " " + gras(t.titre));
      const e = t.erreur;
      if (e?.name === "EchecAssertion") {
        console.log("      " + gris(e.message));
        if (e.aDetail) {
          console.log("      " + gris("attendu :") + " " + vert(e.attendu));
          console.log("      " + gris("obtenu  :") + " " + rouge(e.obtenu));
        }
      } else {
        console.log("      " + rouge((e?.name || "Erreur") + " : " + (e?.message || e)));
      }
    }
  }

  ligne();
  const tout = r.echecs.length === 0;
  if (tout) {
    const etat = enregistrer(code, "reussi", { tests: r.total });
    console.log("  " + vert(gras("RÉUSSI")) + gris(`  ${r.reussis}/${r.total} tests`) +
      (etat.essaisJusquAuSucces > 1 ? gris("  · " + etat.essaisJusquAuSucces + " essais") : ""));
    console.log(gris("  Solution disponible : ") + cyan("js " + code + " --solution"));
    const suivant = MODULES[MODULES.findIndex(x => x.code === code) + 1];
    if (suivant) console.log(gris("  Suivant : ") + cyan(suivant.code) + " " + suivant.titre);
  } else {
    enregistrer(code, "echec", { tests: r.total, reussis: r.reussis });
    console.log("  " + rouge(gras("PAS ENCORE")) + gris(`  ${r.reussis}/${r.total} tests passent`));
    console.log(gris("  Relis la leçon, corrige, relance. Rien ne presse."));
  }
  console.log();
  return tout ? 0 : 1;
}

function montrerSolution(code) {
  const m = trouver(code);
  if (!m) { console.log(rouge("  Code inconnu.")); return; }
  const p = lire();
  if (etatDe(p, code).etat !== "reussi") {
    console.log();
    console.log(jaune("  Solution verrouillée."));
    console.log(gris("  Elle se débloque quand tes tests passent. C'est le but."));
    console.log(gris("  Bloqué ? Relis la leçon, puis demande-moi un indice en session."));
    console.log();
    return;
  }
  const f = join(dossierExo(m), ".solution.b64");
  if (!existsSync(f)) { console.log(gris("  Pas de solution enregistrée pour ce module.")); return; }
  console.log();
  console.log(gras("  SOLUTION — " + m.code + " " + m.titre));
  ligne();
  console.log(Buffer.from(readFileSync(f, "utf8"), "base64").toString("utf8"));
  ligne();
  console.log(gris("  Compare avec la tienne. Différent n'est pas faux."));
  console.log();
}

function montrerLecon(code) {
  const m = trouver(code);
  if (!m) { console.log(rouge("  Code inconnu.")); return; }
  const f = fichierLecon(m);
  if (!existsSync(f)) { console.log(jaune("  Leçon pas encore rédigée.")); return; }
  console.log();
  console.log(readFileSync(f, "utf8"));
}

/* ---------- entrée ---------- */
const args = process.argv.slice(2);
const codeArg = args.find(a => /^\d{2}-\d{2}$/.test(a));
const a = n => args.includes("--" + n);

if (a("bilan")) { bilan(); }
else if (a("temps")) {
  const i = args.indexOf("--temps");
  quoiFaireEn(Number(args[i + 1]) || 30);
}
else if (!codeArg) { tableauDeBord(); }
else if (a("solution")) { montrerSolution(codeArg); }
else if (a("lecon")) { montrerLecon(codeArg); }
else if (a("fait")) {
  validerManuellement(codeArg);
  console.log();
  console.log("  " + vert("✔ " + codeArg + " validé à la main."));
  const suivant = MODULES[MODULES.findIndex(x => x.code === codeArg) + 1];
  if (suivant) console.log(gris("  Suivant : ") + cyan(suivant.code) + " " + suivant.titre);
  console.log();
}
else {
  process.exitCode = await corriger(codeArg);
}
