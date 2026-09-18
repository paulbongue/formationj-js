// Catalogue complet de la formation.
// Chaque module a un code stable : SS-MM (section-module).
// "pret: true" = leçon + exercice + tests écrits. Les autres arrivent au fil de ta progression.

export const SECTIONS = [
  {
    num: "01",
    titre: "Mise en route",
    intro:
      "Installer, exécuter, lire une erreur. Avant d'apprendre le langage, on apprend à s'en servir.",
    modules: [
      { num: "01", titre: "Installer l'environnement", min: 30, pret: true },
      { num: "02", titre: "Console et premier script", min: 15, pret: true },
      { num: "03", titre: "Git : le minimum vital", min: 60, pret: true },
      { num: "04", titre: "Lire une erreur", min: 15, pret: true },
    ],
  },
  {
    num: "02",
    titre: "Bases du langage",
    intro:
      "Variables, types, conditions, boucles. Le socle sur lequel tout le reste repose.",
    modules: [
      { num: "01", titre: "Variables : let et const", min: 30, pret: true },
      { num: "02", titre: "Les types primitifs", min: 30, pret: true },
      { num: "03", titre: "Chaînes de caractères", min: 45, pret: true },
      { num: "04", titre: "Nombres et Math", min: 30, pret: true },
      { num: "05", titre: "Conversion de types", min: 30, pret: true },
      {
        num: "06",
        titre: "Comparaisons et égalité stricte",
        min: 15,
        pret: true,
      },
      { num: "07", titre: "Conditions", min: 45, pret: true },
      { num: "08", titre: "Boucles", min: 60, pret: true },
      { num: "09", titre: "Projet : quiz en console", min: 120, pret: true },
    ],
  },
  {
    num: "03",
    titre: "Fonctions",
    intro:
      "Découper, nommer, réutiliser. Et les concepts qui font la différence en entretien.",
    modules: [
      { num: "01", titre: "Déclarer et appeler", min: 30 },
      { num: "02", titre: "Fonctions fléchées", min: 30 },
      { num: "03", titre: "Portée et hoisting", min: 45 },
      { num: "04", titre: "Paramètres avancés", min: 30 },
      { num: "05", titre: "Fonctions d'ordre supérieur", min: 45 },
      { num: "06", titre: "Closures", min: 60 },
      { num: "07", titre: "Récursivité", min: 45 },
    ],
  },
  {
    num: "04",
    titre: "Tableaux et objets",
    intro:
      "Les deux structures que tu manipuleras 100 fois par jour. Et le piège de la référence.",
    modules: [
      { num: "01", titre: "Tableaux : les bases", min: 45 },
      { num: "02", titre: "Objets : les bases", min: 45 },
      { num: "03", titre: "Parcourir un objet", min: 30 },
      { num: "04", titre: "Référence contre copie", min: 45 },
      { num: "05", titre: "Destructuring", min: 45 },
      { num: "06", titre: "Spread et rest", min: 30 },
      { num: "07", titre: "this et méthodes d'objet", min: 45 },
      { num: "08", titre: "Map et Set", min: 30 },
      { num: "09", titre: "JSON", min: 30 },
    ],
  },
  {
    num: "05",
    titre: "Méthodes de tableaux modernes",
    intro:
      "map, filter, reduce. C'est ici que ton code commence à ressembler à du JS professionnel.",
    modules: [
      { num: "01", titre: "forEach", min: 15 },
      { num: "02", titre: "map", min: 45 },
      { num: "03", titre: "filter", min: 30 },
      { num: "04", titre: "reduce", min: 60 },
      { num: "05", titre: "find, some, every", min: 30 },
      { num: "06", titre: "sort", min: 45 },
      { num: "07", titre: "Chaîner les méthodes", min: 45 },
      { num: "08", titre: "Projet : tableau de bord de données", min: 120 },
    ],
  },
  {
    num: "06",
    titre: "Le DOM",
    intro:
      "Faire bouger une page. Le premier moment où ton code devient visible.",
    modules: [
      { num: "01", titre: "Comprendre le DOM", min: 30 },
      { num: "02", titre: "Sélectionner des éléments", min: 30 },
      { num: "03", titre: "Modifier contenu et style", min: 45 },
      { num: "04", titre: "Créer et supprimer des éléments", min: 45 },
      { num: "05", titre: "Événements", min: 60 },
      { num: "06", titre: "Formulaires", min: 60 },
      { num: "07", titre: "Projet : liste de tâches", min: 240 },
    ],
  },
  {
    num: "07",
    titre: "JavaScript moderne",
    intro: "Les briques que React suppose déjà acquises.",
    modules: [
      { num: "01", titre: "Modules ES", min: 45 },
      { num: "02", titre: "Chaînage optionnel et nullish", min: 30 },
      { num: "03", titre: "Classes", min: 60 },
      { num: "04", titre: "Prototypes", min: 45 },
      { num: "05", titre: "Immutabilité en pratique", min: 45 },
      { num: "06", titre: "npm et package.json", min: 45 },
      { num: "07", titre: "Vite", min: 45 },
    ],
  },
  {
    num: "08",
    titre: "Asynchrone",
    intro:
      "Attendre sans bloquer. Le chapitre qui sépare les débutants des juniors.",
    modules: [
      { num: "01", titre: "Synchrone contre asynchrone", min: 30 },
      { num: "02", titre: "Callbacks", min: 30 },
      { num: "03", titre: "Promesses", min: 60 },
      { num: "04", titre: "async / await", min: 60 },
      { num: "05", titre: "fetch et les API", min: 60 },
      { num: "06", titre: "Chargement et erreurs", min: 60 },
      { num: "07", titre: "Promise.all et compagnie", min: 45 },
      { num: "08", titre: "POST, PUT, DELETE", min: 45 },
      { num: "09", titre: "Projet : app connectée à une API", min: 240 },
    ],
  },
  {
    num: "09",
    titre: "Qualité et derniers réflexes",
    intro: "Déboguer, tester, écrire lisible. Puis le feu vert pour React.",
    modules: [
      { num: "01", titre: "Débogage au debugger", min: 45 },
      { num: "02", titre: "Gestion des erreurs", min: 30 },
      { num: "03", titre: "Écrire du code lisible", min: 45 },
      { num: "04", titre: "Premiers tests", min: 60 },
      { num: "05", titre: "Relecture générale", min: 120 },
      { num: "06", titre: "Feu vert pour React", min: 15 },
    ],
  },
];

/** Liste plate ordonnée : [{ code, sec, secTitre, titre, min, pret }] */
export const MODULES = SECTIONS.flatMap((s) =>
  s.modules.map((m) => ({
    code: s.num + "-" + m.num,
    sec: s.num,
    secTitre: s.titre,
    titre: m.titre,
    min: m.min,
    pret: !!m.pret,
  })),
);

export const trouver = (code) => MODULES.find((m) => m.code === code);

export const fmtDuree = (min) => {
  if (min < 60) return min + " min";
  const h = min / 60;
  return (Number.isInteger(h) ? h : h.toFixed(1).replace(".", ",")) + " h";
};

/** Slug de dossier : "02-03-chaines-de-caracteres" */
export const slug = (m) =>
  m.code +
  "-" +
  m.titre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
