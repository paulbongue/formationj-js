
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import { creerQuiz } from "./exercice.mjs";

const QUESTIONS = [
  { enonce: "Capitale de la France ?", reponse: "paris", points: 1 },
  { enonce: "2 + 2 ?", reponse: "4", points: 2 },
  { enonce: "Type de []", reponse: "object", points: 1 }
];
const neuf = () => creerQuiz(QUESTIONS.map(q => ({ ...q })));

groupe("structure", () => {
  test("creerQuiz est exportée", () => verifier(creerQuiz).estUneFonction());
  test("toutes les méthodes existent", () => {
    const q = neuf();
    for (const m of ["questionCourante", "repondre", "score", "termine", "bilan", "progression"]) {
      verifier(q[m]).estUneFonction("méthode manquante : " + m);
    }
  });
});

groupe("questionCourante", () => {
  test("commence à la première", () => {
    verifier(neuf().questionCourante().enonce).vaut("Capitale de la France ?");
  });
  test("avance après une réponse", () => {
    const q = neuf();
    q.repondre("paris");
    verifier(q.questionCourante().enonce).vaut("2 + 2 ?");
  });
  test("null à la fin", () => {
    const q = neuf();
    q.repondre("a"); q.repondre("b"); q.repondre("c");
    verifier(q.questionCourante()).vaut(null);
  });
});

groupe("repondre", () => {
  test("bonne réponse", () => {
    verifier(neuf().repondre("paris")).vaut({ correct: true, attendu: "paris", points: 1 });
  });
  test("mauvaise réponse : 0 point", () => {
    verifier(neuf().repondre("lyon")).vaut({ correct: false, attendu: "paris", points: 0 });
  });
  test("insensible à la casse", () => {
    verifier(neuf().repondre("PARIS").correct).estVrai();
    verifier(neuf().repondre("Paris").correct).estVrai();
  });
  test("ignore les espaces autour", () => {
    verifier(neuf().repondre("  paris  ").correct).estVrai();
  });
  test("renvoie les points de la question", () => {
    const q = neuf();
    q.repondre("paris");
    verifier(q.repondre("4").points).vaut(2);
  });
  test("null quand le quiz est terminé", () => {
    const q = neuf();
    q.repondre("a"); q.repondre("b"); q.repondre("c");
    verifier(q.repondre("d")).vaut(null, "ne doit rien modifier après la fin");
  });
});

groupe("score", () => {
  test("score initial", () => {
    verifier(neuf().score()).vaut({ points: 0, maximum: 4, bonnes: 0, total: 3 });
  });
  test("cumule les points", () => {
    const q = neuf();
    q.repondre("paris");   // +1
    q.repondre("4");       // +2
    q.repondre("faux");    // +0
    verifier(q.score()).vaut({ points: 3, maximum: 4, bonnes: 2, total: 3 });
  });
  test("sans faute", () => {
    const q = neuf();
    q.repondre("paris"); q.repondre("4"); q.repondre("object");
    verifier(q.score().points).vaut(4);
    verifier(q.score().bonnes).vaut(3);
  });
});

groupe("termine et progression", () => {
  test("termine passe à true à la fin", () => {
    const q = neuf();
    verifier(q.termine()).estFaux();
    q.repondre("a"); q.repondre("b");
    verifier(q.termine()).estFaux();
    q.repondre("c");
    verifier(q.termine()).estVrai();
  });
  test("progression", () => {
    const q = neuf();
    verifier(q.progression()).vaut("0/3");
    q.repondre("paris");
    verifier(q.progression()).vaut("1/3");
    q.repondre("x"); q.repondre("y");
    verifier(q.progression()).vaut("3/3");
  });
});

groupe("bilan", () => {
  const jouer = reponses => {
    const q = neuf();
    for (const r of reponses) q.repondre(r);
    return q.bilan();
  };
  test("parfait", () => verifier(jouer(["paris", "4", "object"])).vaut("parfait"));
  test("très bien : 3 points sur 4", () => verifier(jouer(["paris", "4", "faux"])).vaut("très bien"));
  test("correct : 2 points sur 4", () => verifier(jouer(["faux", "4", "faux"])).vaut("correct"));
  test("à revoir : 1 point sur 4", () => verifier(jouer(["paris", "faux", "faux"])).vaut("à revoir"));
  test("zéro", () => verifier(jouer(["a", "b", "c"])).vaut("il faut relire la leçon"));
});

groupe("cas limite : quiz vide", () => {
  test("ne plante pas", () => {
    const q = creerQuiz([]);
    verifier(() => q.bilan()).neLevePasDErreur("attention à la division par zéro");
    verifier(q.termine()).estVrai();
    verifier(q.questionCourante()).vaut(null);
    verifier(q.score()).vaut({ points: 0, maximum: 0, bonnes: 0, total: 0 });
    verifier(q.bilan()).vaut("il faut relire la leçon");
  });
});

groupe("isolement", () => {
  test("deux quiz sont indépendants", () => {
    const a = neuf(), b = neuf();
    a.repondre("paris"); a.repondre("4");
    verifier(b.score().points).vaut(0, "chaque quiz doit avoir son propre état");
    verifier(b.progression()).vaut("0/3");
  });
});
