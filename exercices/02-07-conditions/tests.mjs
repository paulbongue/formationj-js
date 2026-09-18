
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("mention", () => {
  test("chaque palier", () => {
    verifier(ex.mention(18)).vaut("très bien");
    verifier(ex.mention(16)).vaut("très bien");
    verifier(ex.mention(15)).vaut("bien");
    verifier(ex.mention(14)).vaut("bien");
    verifier(ex.mention(12)).vaut("assez bien");
    verifier(ex.mention(10)).vaut("passable");
    verifier(ex.mention(9.5)).vaut("insuffisant");
    verifier(ex.mention(0)).vaut("insuffisant");
  });
  test("bornes exactes", () => {
    verifier(ex.mention(20)).vaut("très bien");
    verifier(ex.mention(13.99)).vaut("assez bien");
  });
  test("entrées invalides", () => {
    verifier(ex.mention(21)).vaut("note invalide");
    verifier(ex.mention(-1)).vaut("note invalide");
    verifier(ex.mention("12")).vaut("note invalide");
    verifier(ex.mention(NaN)).vaut("note invalide");
  });
});

groupe("droitsDe", () => {
  test("admin", () => verifier(ex.droitsDe("admin")).vaut("tous les droits"));
  test("editeur et auteur partagent le même cas", () => {
    verifier(ex.droitsDe("editeur")).vaut("peut publier");
    verifier(ex.droitsDe("auteur")).vaut("peut publier");
  });
  test("abonne", () => verifier(ex.droitsDe("abonne")).vaut("peut commenter"));
  test("inconnu et vide", () => {
    verifier(ex.droitsDe("bidule")).vaut("lecture seule");
    verifier(ex.droitsDe(undefined)).vaut("lecture seule");
  });
  test("switch compare en === : pas de tolérance de casse", () => {
    verifier(ex.droitsDe("ADMIN")).vaut("lecture seule");
  });
});

groupe("peutCommander", () => {
  const valide = { actif: true, banni: false, age: 25, emailVerifie: true };
  test("cas valide", () => {
    verifier(ex.peutCommander(valide)).vaut({ autorise: true, raison: null });
  });
  test("aucun utilisateur", () => {
    verifier(ex.peutCommander(undefined)).vaut({ autorise: false, raison: "aucun utilisateur" });
    verifier(ex.peutCommander(null)).vaut({ autorise: false, raison: "aucun utilisateur" });
  });
  test("banni prime sur tout le reste", () => {
    verifier(ex.peutCommander({ ...valide, banni: true, actif: false, age: 10 }))
      .vaut({ autorise: false, raison: "compte banni" }, "l'ordre des règles est imposé");
  });
  test("inactif", () => {
    verifier(ex.peutCommander({ ...valide, actif: false }))
      .vaut({ autorise: false, raison: "compte inactif" });
  });
  test("mineur", () => {
    verifier(ex.peutCommander({ ...valide, age: 17 }))
      .vaut({ autorise: false, raison: "mineur" });
  });
  test("email non vérifié", () => {
    verifier(ex.peutCommander({ ...valide, emailVerifie: false }))
      .vaut({ autorise: false, raison: "email non vérifié" });
  });
  test("18 ans pile passe", () => {
    verifier(ex.peutCommander({ ...valide, age: 18 }).autorise).estVrai();
  });
});

groupe("estBissextile", () => {
  test("multiples de 4", () => {
    verifier(ex.estBissextile(2024)).estVrai();
    verifier(ex.estBissextile(2023)).estFaux();
  });
  test("siècles non bissextiles", () => {
    verifier(ex.estBissextile(1900)).estFaux("multiple de 100 sans être multiple de 400");
    verifier(ex.estBissextile(2100)).estFaux();
  });
  test("multiples de 400", () => {
    verifier(ex.estBissextile(2000)).estVrai();
    verifier(ex.estBissextile(1600)).estVrai();
  });
});

groupe("categorieImc", () => {
  test("catégories", () => {
    verifier(ex.categorieImc(50, 1.75)).vaut("insuffisance");
    verifier(ex.categorieImc(70, 1.75)).vaut("normal");
    verifier(ex.categorieImc(85, 1.75)).vaut("surpoids");
    verifier(ex.categorieImc(100, 1.75)).vaut("obésité");
  });
  test("taille invalide", () => {
    verifier(ex.categorieImc(70, 0)).vaut(null, "évite la division par zéro");
    verifier(ex.categorieImc(70, -1)).vaut(null);
  });
});
