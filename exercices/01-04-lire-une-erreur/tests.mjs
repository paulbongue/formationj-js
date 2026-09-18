
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("aireRectangle · ReferenceError", () => {
  test("ne plante plus", () => {
    verifier(() => ex.aireRectangle(3, 4)).neLevePasDErreur("une variable est mal orthographiée");
  });
  test("calcule juste", () => {
    verifier(ex.aireRectangle(3, 4)).vaut(12);
    verifier(ex.aireRectangle(2.5, 4)).vaut(10);
  });
});

groupe("longueurNom · TypeError", () => {
  test("fonctionne avec un objet complet", () => {
    verifier(ex.longueurNom({ nom: "Black" })).vaut(5);
  });
  test("ne plante pas si l'objet est vide ou absent", () => {
    verifier(() => ex.longueurNom({})).neLevePasDErreur("propriété absente : protège l'accès");
    verifier(() => ex.longueurNom(undefined)).neLevePasDErreur("aucun objet reçu : protège l'accès");
  });
  test("renvoie 0 quand il n'y a pas de nom", () => {
    verifier(ex.longueurNom({})).vaut(0);
    verifier(ex.longueurNom(undefined)).vaut(0);
  });
});

groupe("crier · TypeError", () => {
  test("crie correctement", () => {
    verifier(ex.crier("bonjour")).vaut("BONJOUR!");
  });
  test("ne plante pas sur un nombre", () => {
    verifier(() => ex.crier(42)).neLevePasDErreur("toUpperCase n'existe pas sur un nombre");
  });
  test("gère le nombre en le convertissant", () => {
    verifier(ex.crier(42)).vaut("42!");
  });
});

groupe("moyenne · le bug silencieux", () => {
  test("calcule la bonne moyenne", () => {
    verifier(ex.moyenne([10, 20, 30])).vaut(20, "la boucle dépasse d'un cran : i <= length");
    verifier(ex.moyenne([5])).vaut(5);
  });
  test("ne renvoie pas NaN", () => {
    const r = ex.moyenne([1, 2, 3, 4]);
    if (Number.isNaN(r)) throw new Error("NaN : tu additionnes un élément qui n'existe pas");
    verifier(r).vaut(2.5);
  });
  test("tableau vide : renvoie 0 plutôt que NaN", () => {
    verifier(ex.moyenne([])).vaut(0);
  });
});
