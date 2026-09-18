
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("enNombre", () => {
  test("chaînes numériques", () => {
    verifier(ex.enNombre("42")).vaut(42);
    verifier(ex.enNombre("3.5")).vaut(3.5);
    verifier(ex.enNombre("-7")).vaut(-7);
  });
  test("zéro est une valeur valide", () => verifier(ex.enNombre("0")).vaut(0));
  test("refuse les chaînes impures", () => verifier(ex.enNombre("42px")).vaut(null));
  test("refuse le vide et les espaces", () => {
    verifier(ex.enNombre("")).vaut(null, "Number('') vaut 0 : il faut l'exclure à la main");
    verifier(ex.enNombre("   ")).vaut(null);
  });
  test("refuse null, undefined, booléens", () => {
    verifier(ex.enNombre(null)).vaut(null, "Number(null) vaut 0 : à exclure aussi");
    verifier(ex.enNombre(undefined)).vaut(null);
    verifier(ex.enNombre(true)).vaut(null);
  });
  test("accepte un nombre déjà valide", () => verifier(ex.enNombre(12)).vaut(12));
});

groupe("PREDICTIONS · tes réponses face à la réalité", () => {
  const reel = {
    "'5' + 3": "5" + 3,
    "'5' - 3": "5" - 3,
    "1 + '1'": 1 + "1",
    "Boolean([])": Boolean([]),
    "Boolean('0')": Boolean("0"),
    "Number('')": Number("")
  };
  for (const [expr, attendu] of Object.entries(reel)) {
    test(expr, () => {
      verifier(ex.PREDICTIONS[expr]).vaut(attendu, "relis la règle sur l'opérateur + et les valeurs falsy");
    });
  }
});

groupe("estVide", () => {
  test("vrais vides", () => {
    verifier(ex.estVide(null)).estVrai();
    verifier(ex.estVide(undefined)).estVrai();
    verifier(ex.estVide("")).estVrai();
    verifier(ex.estVide("   ")).estVrai();
    verifier(ex.estVide([])).estVrai();
    verifier(ex.estVide({})).estVrai();
  });
  test("0 et false ne sont pas vides", () => {
    verifier(ex.estVide(0)).estFaux("0 est une valeur");
    verifier(ex.estVide(false)).estFaux("false est une valeur");
  });
  test("contenus non vides", () => {
    verifier(ex.estVide("a")).estFaux();
    verifier(ex.estVide([0])).estFaux();
    verifier(ex.estVide({ a: 1 })).estFaux();
  });
});

groupe("additionnerFormulaire", () => {
  test("additionne au lieu de concaténer", () => {
    verifier(ex.additionnerFormulaire("20", "1")).vaut(21, "'20' + '1' donnerait '201'");
  });
  test("gère les décimaux", () => verifier(ex.additionnerFormulaire("1.5", "2.5")).vaut(4));
  test("zéro reste valide", () => verifier(ex.additionnerFormulaire("0", "5")).vaut(5));
  test("refuse l'invalide", () => {
    verifier(ex.additionnerFormulaire("20", "px")).vaut(null);
    verifier(ex.additionnerFormulaire("", "1")).vaut(null);
  });
});
