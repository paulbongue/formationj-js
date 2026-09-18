
// Exercice 02-09 · Projet quiz — la logique
// L'interface va dans un fichier jeu.mjs séparé.

export function creerQuiz(questions) {
  // TODO : déclare ici l'état (index courant, points, bonnes réponses)

  return {
    questionCourante() {
      // TODO
    },
    repondre(saisie) {
      // TODO : { correct, attendu, points } ou null si terminé
    },
    score() {
      // TODO : { points, maximum, bonnes, total }
    },
    termine() {
      // TODO
    },
    bilan() {
      // TODO
    },
    progression() {
      // TODO : "2/5"
    }
  };
}
