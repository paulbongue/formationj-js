// Exercice 01-04 · Lire une erreur
// Quatre fonctions cassées. Répare-les.
// Lance `node exercice.mjs` pour voir les erreurs une par une.

export function aireRectangle(largeur, hauteur) {
  return largeur * hauteur;
}

export function longueurNom(personne) {
  return personne.nom.length;
}

export function crier(mot) {
  return mot.toString().toUpperCase() + "!";
}

export function moyenne(notes) {
  let total = 0;
  for (let i = 0; i < notes.length; i++) {
    total += notes[i];
  }
  return total / notes.length;
}
