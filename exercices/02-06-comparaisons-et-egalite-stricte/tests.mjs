
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("PREDICTIONS · tes réponses face à la réalité", () => {
  const reel = {
    "0 == ''": 0 == "",
    "0 === ''": 0 === "",
    "null == undefined": null == undefined,
    "null === undefined": null === undefined,
    "NaN === NaN": NaN === NaN,
    "[1,2] === [1,2]": [1, 2] === [1, 2],
    "'Z' < 'a'": "Z" < "a",
    "'10' < '9'": "10" < "9",
    "0 || 'defaut'": 0 || "defaut",
    "0 ?? 'defaut'": 0 ?? "defaut"
  };
  for (const [expr, attendu] of Object.entries(reel)) {
    test(expr, () => verifier(ex.PREDICTIONS[expr]).vaut(attendu));
  }
});

groupe("memeContenu", () => {
  test("primitifs", () => {
    verifier(ex.memeContenu(5, 5)).estVrai();
    verifier(ex.memeContenu(5, "5")).estFaux("types différents");
  });
  test("tableaux de même contenu", () => {
    verifier(ex.memeContenu([1, 2], [1, 2])).estVrai();
    verifier(ex.memeContenu([1, 2], [2, 1])).estFaux("l'ordre compte");
  });
  test("objets de même contenu", () => {
    verifier(ex.memeContenu({ a: 1 }, { a: 1 })).estVrai();
    verifier(ex.memeContenu({ a: 1 }, { a: 2 })).estFaux();
  });
  test("NaN vaut NaN ici", () => verifier(ex.memeContenu(NaN, NaN)).estVrai());
  test("imbrication", () => {
    verifier(ex.memeContenu({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).estVrai();
  });
});

groupe("valeurParDefaut", () => {
  test("remplace null et undefined", () => {
    verifier(ex.valeurParDefaut(null, "d")).vaut("d");
    verifier(ex.valeurParDefaut(undefined, "d")).vaut("d");
  });
  test("conserve 0, '' et false", () => {
    verifier(ex.valeurParDefaut(0, "d")).vaut(0, "0 est une valeur légitime");
    verifier(ex.valeurParDefaut("", "d")).vaut("");
    verifier(ex.valeurParDefaut(false, "d")).vaut(false);
  });
});

groupe("comparerNumerique", () => {
  test("compare des chaînes numériquement", () => {
    verifier(ex.comparerNumerique("10", "9")).vaut(1, "en texte '10' < '9' : convertis d'abord");
    verifier(ex.comparerNumerique("9", "10")).vaut(-1);
  });
  test("égalité entre types différents", () => verifier(ex.comparerNumerique(5, "5")).vaut(0));
  test("négatifs", () => verifier(ex.comparerNumerique("-5", "3")).vaut(-1));
});
