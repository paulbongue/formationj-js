
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("capitaliser", () => {
  test("cas simple", () => verifier(ex.capitaliser("black")).vaut("Black"));
  test("met le reste en minuscules", () => verifier(ex.capitaliser("bLACK")).vaut("Black"));
  test("chaîne vide", () => verifier(ex.capitaliser("")).vaut("", "ne doit pas planter sur une chaîne vide"));
  test("une seule lettre", () => verifier(ex.capitaliser("a")).vaut("A"));
});

groupe("formaterNom", () => {
  test("inverse et capitalise", () => verifier(ex.formaterNom("jean dupont")).vaut("Dupont, Jean"));
  test("insensible à la casse d'entrée", () => verifier(ex.formaterNom("JEAN DUPONT")).vaut("Dupont, Jean"));
});

groupe("initiales", () => {
  test("deux mots", () => verifier(ex.initiales("jean dupont")).vaut("J.D."));
  test("trois mots", () => verifier(ex.initiales("jean paul dupont")).vaut("J.P.D."));
  test("un seul mot", () => verifier(ex.initiales("black")).vaut("B."));
});

groupe("tronquer", () => {
  test("coupe et ajoute les points de suspension", () => {
    verifier(ex.tronquer("Bonjour le monde", 10)).vaut("Bonjour l…");
  });
  test("le total ne dépasse jamais longueurMax", () => {
    verifier(ex.tronquer("Bonjour le monde", 10)).aPourLongueur(10);
    verifier(ex.tronquer("abcdefghij", 5)).aPourLongueur(5);
  });
  test("laisse le texte court intact", () => {
    verifier(ex.tronquer("Salut", 10)).vaut("Salut");
  });
  test("texte exactement à la limite : intact", () => {
    verifier(ex.tronquer("abcde", 5)).vaut("abcde");
  });
});

groupe("compterOccurrences", () => {
  test("compte sans tenir compte de la casse", () => {
    verifier(ex.compterOccurrences("Bonjour Bob", "b")).vaut(3);
    verifier(ex.compterOccurrences("Bonjour Bob", "B")).vaut(3);
  });
  test("renvoie 0 si absente", () => verifier(ex.compterOccurrences("abc", "z")).vaut(0));
  test("texte vide", () => verifier(ex.compterOccurrences("", "a")).vaut(0));
});
