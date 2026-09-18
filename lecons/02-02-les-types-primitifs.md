
# 02-02 · Les types primitifs

**30 min · après 02-01**

JavaScript a sept types primitifs. Tu en utiliseras cinq tous les jours, deux presque jamais.

| Type | Exemple | À quoi ça sert |
|---|---|---|
| `string` | `"Black"` | du texte |
| `number` | `42`, `3.14`, `-0.5` | tous les nombres, entiers ou non |
| `boolean` | `true`, `false` | vrai / faux |
| `undefined` | `undefined` | « pas encore de valeur » |
| `null` | `null` | « volontairement vide » |
| `bigint` | `9007199254740993n` | entiers gigantesques (rare) |
| `symbol` | `Symbol("id")` | clés uniques (rare) |

Tout le reste — tableaux, objets, fonctions, dates — n'est pas primitif. C'est de la famille `object`.

## typeof

L'opérateur qui interroge le type d'une valeur :

```js
typeof "Black"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof {}          // "object"
typeof []          // "object"     ← un tableau EST un objet
typeof function(){}// "function"
typeof null        // "object"     ← bug historique, jamais corrigé
```

Retiens les deux dernières lignes : `typeof []` vaut `"object"` et `typeof null` vaut `"object"`. Ce sont des questions d'entretien classiques.

Pour détecter un tableau, il existe une fonction dédiée :

```js
Array.isArray([]);    // true
Array.isArray({});    // false
```

## Un seul type de nombre

Pas d'`int`, pas de `float`. `42` et `42.0` sont la même chose. Conséquence connue :

```js
0.1 + 0.2            // 0.30000000000000004
0.1 + 0.2 === 0.3    // false
```

Ce n'est pas un bug de JavaScript mais du format binaire des décimaux, commun à presque tous les langages. En pratique : ne compare jamais deux flottants avec `===`, et pour de l'argent, travaille en centimes (nombres entiers).

## NaN

`NaN` — *Not a Number* — est le résultat d'un calcul numérique impossible.

```js
Number("abc")      // NaN
0 / 0              // NaN
typeof NaN         // "number"   ← oui, NaN est de type number
NaN === NaN        // false      ← il n'est même pas égal à lui-même
Number.isNaN(NaN)  // true       ← la seule façon fiable de le détecter
```

## null contre undefined

- `undefined` : la variable existe mais personne ne lui a donné de valeur. C'est JavaScript qui le met.
- `null` : quelqu'un a **décidé** que c'était vide. C'est le développeur qui le met.

```js
let a;                    // undefined
const b = null;           // null, choix explicite
function f() {}
f();                      // undefined (aucun return)
```

## À retenir

- Sept primitifs, cinq utiles : string, number, boolean, undefined, null.
- `typeof null === "object"` et `typeof [] === "object"` : deux pièges célèbres.
- `Array.isArray()` pour les tableaux, `Number.isNaN()` pour NaN.
- Un seul type numérique, donc des surprises sur les décimaux.
- `undefined` = pas rempli ; `null` = vidé exprès.
