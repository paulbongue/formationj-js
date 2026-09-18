
import { test, groupe, verifier } from "../../moteur/verif.mjs";
import * as ex from "./exercice.mjs";

groupe("aleatoireEntre", () => {
  test("reste dans l'intervalle sur 500 tirages", () => {
    for (let i = 0; i < 500; i++) {
      const n = ex.aleatoireEntre(10, 20);
      if (n < 10 || n > 20) throw new Error("valeur hors bornes : " + n);
      if (!Number.isInteger(n)) throw new Error("valeur non entière : " + n);
    }
  });
  test("atteint les deux bornes (inclusives)", () => {
    const vus = new Set();
    for (let i = 0; i < 3000; i++) vus.add(ex.aleatoireEntre(1, 3));
    verifier(vus.has(1)).estVrai("la borne min doit être atteignable");
    verifier(vus.has(3)).estVrai("la borne max doit être atteignable : (max - min + 1)");
    verifier(vus.size).vaut(3);
  });
  test("min égal à max", () => verifier(ex.aleatoireEntre(7, 7)).vaut(7));
});

groupe("arrondirAu", () => {
  test("au pas de 0.05", () => verifier(ex.arrondirAu(12.37, 0.05)).vaut(12.35));
  test("à la dizaine", () => verifier(ex.arrondirAu(127, 10)).vaut(130));
  test("au quart", () => verifier(ex.arrondirAu(3.6, 0.25)).vaut(3.5));
  test("pas de résidu flottant", () => {
    const r = ex.arrondirAu(12.37, 0.05);
    verifier(String(r)).vaut("12.35", "nettoie le résultat, on obtient sinon 12.350000000000001");
  });
});

groupe("tva", () => {
  test("cas simple", () => verifier(ex.tva(100, 0.2)).vaut(20));
  test("arrondi à 2 décimales", () => verifier(ex.tva(19.99, 0.2)).vaut(4));
  test("renvoie un nombre", () => verifier(ex.tva(10, 0.2)).estDuType("number"));
  test("taux différent", () => verifier(ex.tva(200, 0.055)).vaut(11));
});

groupe("moyenne", () => {
  test("trois valeurs", () => verifier(ex.moyenne(10, 20, 30)).vaut(20));
  test("une valeur", () => verifier(ex.moyenne(7)).vaut(7));
  test("aucun argument renvoie 0", () => verifier(ex.moyenne()).vaut(0, "évite la division par zéro"));
  test("décimaux", () => verifier(ex.moyenne(1, 2)).vautEnviron(1.5));
});

groupe("estPair / estDivisiblePar", () => {
  test("estPair", () => {
    verifier(ex.estPair(4)).estVrai();
    verifier(ex.estPair(7)).estFaux();
    verifier(ex.estPair(0)).estVrai();
  });
  test("estDivisiblePar", () => {
    verifier(ex.estDivisiblePar(9, 3)).estVrai();
    verifier(ex.estDivisiblePar(10, 3)).estFaux();
  });
});

groupe("secondesEnDuree", () => {
  test("cas de l'énoncé", () => verifier(ex.secondesEnDuree(3725)).vaut("1h 02m 05s"));
  test("moins d'une heure", () => verifier(ex.secondesEnDuree(65)).vaut("0h 01m 05s"));
  test("zéro", () => verifier(ex.secondesEnDuree(0)).vaut("0h 00m 00s"));
  test("plusieurs heures", () => verifier(ex.secondesEnDuree(36000)).vaut("10h 00m 00s"));
});
