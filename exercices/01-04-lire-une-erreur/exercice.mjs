// Exercice 01-04 · Lire une erreur
// Quatre fonctions cassées. Répare-les.
// Lance `node exercice.mjs` pour voir les erreurs une par une.

export function aireRectangle(largeur, hauteur) {
  return largeur * hauteur;
}

export function longueurNom(personne) {
  return personne?.nom?.length ?? 0;
}

export function crier(mot) {
  return mot.toString().toUpperCase() + "!";
}

export function moyenne(notes) {
  if (notes.length === 0) return 0;

  let total = 0;
  for (let i = 0; i < notes.length; i++) {
    total += notes[i];
  }
  return total / notes.length;
}
