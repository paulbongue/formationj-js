
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("fizzbuzz", () => {
  test("cas de l'énoncé", () => {
    verifier(ex.fizzbuzz(5)).vaut([1, 2, "Fizz", 4, "Buzz"]);
  });
  test("le multiple de 15 donne FizzBuzz", () => {
    verifier(ex.fizzbuzz(15).at(-1)).vaut("FizzBuzz", "teste 15 AVANT 3 et 5");
  });
  test("longueur correcte", () => verifier(ex.fizzbuzz(20)).aPourLongueur(20));
  test("les non-multiples restent des nombres", () => {
    verifier(ex.fizzbuzz(4).at(0)).estDuType("number", "1 doit rester le nombre 1, pas \"1\"");
  });
  test("n = 0 donne un tableau vide", () => verifier(ex.fizzbuzz(0)).aPourLongueur(0));
});

groupe("sommePairs", () => {
  test("jusqu'à 10", () => verifier(ex.sommePairs(10)).vaut(30));
  test("borne impaire", () => verifier(ex.sommePairs(9)).vaut(20));
  test("petites valeurs", () => {
    verifier(ex.sommePairs(1)).vaut(0);
    verifier(ex.sommePairs(2)).vaut(2);
  });
});

groupe("tableMultiplication", () => {
  test("10 lignes", () => verifier(ex.tableMultiplication(3)).aPourLongueur(10));
  test("format exact", () => {
    const t = ex.tableMultiplication(3);
    verifier(t.at(0)).vaut("3 x 1 = 3");
    verifier(t.at(9)).vaut("3 x 10 = 30");
  });
});

groupe("inverser", () => {
  test("mot simple", () => verifier(ex.inverser("bonjour")).vaut("ruojnob"));
  test("chaîne vide", () => verifier(ex.inverser("")).vaut(""));
  test("un caractère", () => verifier(ex.inverser("a")).vaut("a"));
  test("palindrome", () => verifier(ex.inverser("kayak")).vaut("kayak"));
});

groupe("estPremier", () => {
  test("premiers", () => {
    for (const n of [2, 3, 5, 7, 11, 13, 97]) {
      if (!ex.estPremier(n)) throw new Error(n + " est premier");
    }
  });
  test("non premiers", () => {
    for (const n of [4, 9, 15, 100]) {
      if (ex.estPremier(n)) throw new Error(n + " n'est pas premier");
    }
  });
  test("cas limites", () => {
    verifier(ex.estPremier(1)).estFaux("1 n'est pas premier");
    verifier(ex.estPremier(0)).estFaux();
    verifier(ex.estPremier(-7)).estFaux();
    verifier(ex.estPremier(2)).estVrai("2 est le premier nombre premier");
  });
});

groupe("chercherPremierNegatif", () => {
  test("trouve le premier", () => {
    verifier(ex.chercherPremierNegatif([3, 7, -2, -9])).vaut(-2);
  });
  test("aucun négatif", () => verifier(ex.chercherPremierNegatif([1, 2])).vaut(null));
  test("tableau vide", () => verifier(ex.chercherPremierNegatif([])).vaut(null));
  test("zéro n'est pas négatif", () => verifier(ex.chercherPremierNegatif([0, -1])).vaut(-1));
});

groupe("pyramide", () => {
  test("hauteur 3", () => {
    verifier(ex.pyramide(3)).vaut(["  *  ", " *** ", "*****"]);
  });
  test("hauteur 1", () => verifier(ex.pyramide(1)).vaut(["*"]));
  test("toutes les lignes ont la même longueur", () => {
    const p = ex.pyramide(5);
    for (const l of p) verifier(l).aPourLongueur(9);
  });
});
