
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("typeReel", () => {
  test("types simples", () => {
    verifier(ex.typeReel("a")).vaut("string");
    verifier(ex.typeReel(1)).vaut("number");
    verifier(ex.typeReel(true)).vaut("boolean");
    verifier(ex.typeReel(undefined)).vaut("undefined");
  });
  test("corrige le piège du tableau", () => {
    verifier(ex.typeReel([])).vaut("array");
    verifier(ex.typeReel([1, 2])).vaut("array");
  });
  test("corrige le piège de null", () => {
    verifier(ex.typeReel(null)).vaut("null");
  });
  test("un objet reste un objet", () => {
    verifier(ex.typeReel({})).vaut("object");
  });
  test("une fonction reste une fonction", () => {
    verifier(ex.typeReel(() => {})).vaut("function");
  });
});

groupe("decrire", () => {
  test("nombre", () => verifier(ex.decrire(42)).vaut("42 est de type number"));
  test("chaîne, avec guillemets", () => verifier(ex.decrire("Black")).vaut('"Black" est de type string'));
  test("null", () => verifier(ex.decrire(null)).vaut("null est de type null"));
  test("tableau en JSON compact", () => verifier(ex.decrire([1, 2])).vaut("[1,2] est de type array"));
  test("booléen", () => verifier(ex.decrire(false)).vaut("false est de type boolean"));
});

groupe("estVraimentUnNombre", () => {
  test("accepte les nombres normaux", () => {
    verifier(ex.estVraimentUnNombre(0)).estVrai();
    verifier(ex.estVraimentUnNombre(-3.5)).estVrai();
  });
  test("refuse NaN", () => verifier(ex.estVraimentUnNombre(NaN)).estFaux());
  test("refuse Infinity", () => verifier(ex.estVraimentUnNombre(Infinity)).estFaux());
  test("refuse une chaîne, même numérique", () => {
    verifier(ex.estVraimentUnNombre("42")).estFaux("\"42\" est une chaîne");
  });
  test("refuse null et undefined", () => {
    verifier(ex.estVraimentUnNombre(null)).estFaux();
    verifier(ex.estVraimentUnNombre(undefined)).estFaux();
  });
});

groupe("PIEGES", () => {
  test("typeof null", () => verifier(ex.PIEGES.typeofNull).vaut("object"));
  test("typeof []", () => verifier(ex.PIEGES.typeofTableau).vaut("object"));
  test("NaN === NaN", () => verifier(ex.PIEGES.nanEstEgalANan).estFaux());
  test("typeof NaN", () => verifier(ex.PIEGES.typeofNan).vaut("number"));
});
