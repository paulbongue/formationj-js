// Exercice 01-02 · Console et premier script
// Complète les fonctions, garde les `export`.

export function presentation(prenom, langage) {
  // TODO : renvoie "Je suis <prenom> et j'apprends <langage>."
  return "Je suis " + prenom + " et j'apprends " + langage + ".";
}

export function doubler(n) {
  // TODO : renvoie le double de n
  return n * 2;
}

// Pour tester à la main :  node exercice.mjs
console.log(presentation("Black", "JavaScript"));
console.log(doubler(21));
