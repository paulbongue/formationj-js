
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("presentation", () => {
  test("est bien exportée comme fonction", () => {
    verifier(ex.presentation).estUneFonction();
  });
  test("renvoie la phrase exacte", () => {
    verifier(ex.presentation("Black", "JavaScript"))
      .vaut("Je suis Black et j'apprends JavaScript.");
  });
  test("s'adapte aux arguments reçus", () => {
    verifier(ex.presentation("Ada", "Python"))
      .vaut("Je suis Ada et j'apprends Python.");
  });
  test("renvoie et n'affiche pas seulement", () => {
    const r = ex.presentation("X", "Y");
    if (r === undefined) throw new Error("undefined : as-tu utilisé return, ou seulement console.log ?");
  });
});

groupe("doubler", () => {
  test("double un entier", () => {
    verifier(ex.doubler(21)).vaut(42);
  });
  test("gère zéro et les négatifs", () => {
    verifier(ex.doubler(0)).vaut(0);
    verifier(ex.doubler(-7)).vaut(-14);
  });
  test("renvoie un nombre, pas une chaîne", () => {
    verifier(ex.doubler(5)).estDuType("number", "5 doublé doit valoir 10 le nombre, pas \"10\" le texte");
  });
});
