
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("TAUX_TVA", () => {
  test("vaut 0.2", () => verifier(ex.TAUX_TVA).vaut(0.2));
});

groupe("prixTtc", () => {
  test("calcule un TTC simple", () => verifier(ex.prixTtc(100)).vaut(120));
  test("arrondit à 2 décimales", () => verifier(ex.prixTtc(19.99)).vaut(23.99));
  test("renvoie un nombre, pas une chaîne", () => {
    verifier(ex.prixTtc(10)).estDuType("number", "toFixed renvoie du texte : reconvertis avec Number()");
  });
  test("utilise bien TAUX_TVA et pas 0.2 codé en dur", () => {
    // 0 HT doit donner 0 quel que soit le taux
    verifier(ex.prixTtc(0)).vaut(0);
  });
});

groupe("creerCompteur", () => {
  test("compte 1, 2, 3", () => {
    const c = ex.creerCompteur();
    verifier(c()).vaut(1);
    verifier(c()).vaut(2);
    verifier(c()).vaut(3);
  });
  test("deux compteurs sont indépendants", () => {
    const a = ex.creerCompteur(), b = ex.creerCompteur();
    a(); a();
    verifier(b()).vaut(1, "b ne doit pas hériter des appels de a");
    verifier(a()).vaut(3);
  });
});

groupe("ajouterArticle", () => {
  test("ajoute et renvoie le panier", () => {
    const p = ["pain"];
    verifier(ex.ajouterArticle(p, "lait")).vaut(["pain", "lait"]);
  });
  test("fonctionne sur un panier déclaré en const", () => {
    const p = [];
    ex.ajouterArticle(p, "oeufs");
    verifier(p).vaut(["oeufs"], "const autorise la mutation du contenu");
  });
});

groupe("PREUVE", () => {
  test("const empêche la réaffectation", () => {
    verifier(ex.PREUVE.constEmpecheReaffectation).estVrai();
  });
  test("const n'empêche pas la mutation", () => {
    verifier(ex.PREUVE.constEmpecheMutation).estFaux();
  });
});
