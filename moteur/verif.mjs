// Mini-framework de test, zéro dépendance.
// Les fichiers tests.mjs de chaque exercice l'utilisent.

const cas = [];
let groupeCourant = null;

/** Regroupe des tests sous un titre. */
export function groupe(titre, fn) {
  const prec = groupeCourant;
  groupeCourant = titre;
  fn();
  groupeCourant = prec;
}

/** Déclare un test. `fn` peut être asynchrone. */
export function test(titre, fn) {
  cas.push({ titre, fn, groupe: groupeCourant });
}

class EchecAssertion extends Error {
  constructor(message, attendu, obtenu) {
    super(message);
    this.name = "EchecAssertion";
    this.attendu = attendu;
    this.obtenu = obtenu;
    this.aDetail = arguments.length > 1;
  }
}

const rendre = v => {
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "function") return "[fonction " + (v.name || "anonyme") + "]";
  if (v === undefined) return "undefined";
  if (typeof v === "bigint") return v + "n";
  if (v instanceof Map) return "Map(" + JSON.stringify([...v.entries()]) + ")";
  if (v instanceof Set) return "Set(" + JSON.stringify([...v]) + ")";
  try { return JSON.stringify(v); } catch { return String(v); }
};

const memeValeur = (a, b) => {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ca = Object.keys(a), cb = Object.keys(b);
  if (ca.length !== cb.length) return false;
  return ca.every(k => cb.includes(k) && memeValeur(a[k], b[k]));
};

export function verifier(obtenu) {
  return {
    /** Égalité stricte, ou structurelle pour objets et tableaux. */
    vaut(attendu, note) {
      if (!memeValeur(obtenu, attendu))
        throw new EchecAssertion(note || "valeur incorrecte", rendre(attendu), rendre(obtenu));
      return this;
    },
    estVrai(note) {
      if (obtenu !== true) throw new EchecAssertion(note || "devrait valoir true", "true", rendre(obtenu));
      return this;
    },
    estFaux(note) {
      if (obtenu !== false) throw new EchecAssertion(note || "devrait valoir false", "false", rendre(obtenu));
      return this;
    },
    estDuType(t, note) {
      if (typeof obtenu !== t)
        throw new EchecAssertion(note || "mauvais type", "typeof === " + JSON.stringify(t), "typeof === " + JSON.stringify(typeof obtenu));
      return this;
    },
    estUneFonction(note) {
      if (typeof obtenu !== "function")
        throw new EchecAssertion(note || "une fonction est attendue ici", "une fonction", rendre(obtenu));
      return this;
    },
    contient(morceau, note) {
      const ok = typeof obtenu === "string"
        ? obtenu.includes(morceau)
        : Array.isArray(obtenu) && obtenu.some(x => memeValeur(x, morceau));
      if (!ok) throw new EchecAssertion(note || "élément absent", "contient " + rendre(morceau), rendre(obtenu));
      return this;
    },
    aPourLongueur(n, note) {
      const l = obtenu?.length;
      if (l !== n) throw new EchecAssertion(note || "mauvaise longueur", "longueur " + n, "longueur " + rendre(l));
      return this;
    },
    /** Vérifie qu'appeler la fonction lève une erreur. */
    leveUneErreur(note) {
      let leve = false;
      try { obtenu(); } catch { leve = true; }
      if (!leve) throw new EchecAssertion(note || "une erreur était attendue", "une erreur levée", "aucune erreur");
      return this;
    },
    /** Vérifie qu'appeler la fonction ne lève PAS d'erreur. */
    neLevePasDErreur(note) {
      try { obtenu(); } catch (e) {
        throw new EchecAssertion(note || "ne devrait pas planter", "aucune erreur", e.name + " : " + e.message);
      }
      return this;
    },
    /** Nombre à tolérance, pour les calculs flottants. */
    vautEnviron(attendu, tolerance = 0.001, note) {
      if (typeof obtenu !== "number" || Math.abs(obtenu - attendu) > tolerance)
        throw new EchecAssertion(note || "valeur numérique incorrecte", "≈ " + attendu, rendre(obtenu));
      return this;
    }
  };
}

/** Levée explicite depuis un test. */
export function echouer(message) {
  throw new EchecAssertion(message);
}

/** Exécute tous les tests déclarés. Renvoie { total, reussis, echecs: [...] } */
export async function executer() {
  const echecs = [];
  let reussis = 0;
  for (const c of cas) {
    try {
      await c.fn();
      reussis++;
      c.ok = true;
    } catch (e) {
      c.ok = false;
      c.erreur = e;
      echecs.push(c);
    }
  }
  return { total: cas.length, reussis, echecs, cas };
}

export { cas as _cas };
