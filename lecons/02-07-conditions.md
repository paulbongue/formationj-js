
# 02-07 · Conditions

**45 min · après 02-06**

## if / else if / else

```js
if (note >= 16) {
  return "très bien";
} else if (note >= 14) {
  return "bien";
} else {
  return "à revoir";
}
```

L'ordre compte : le premier bloc vrai gagne, les suivants ne sont même pas évalués. Écrire les conditions de la plus restrictive à la plus large évite les bugs.

## Early return : le réflexe pro

Le code imbriqué devient vite illisible. Plutôt que d'emboîter, sors dès que possible :

```js
// à éviter
function traiter(u) {
  if (u) {
    if (u.actif) {
      if (u.age >= 18) {
        return "ok";
      } else { return "trop jeune"; }
    } else { return "inactif"; }
  } else { return "aucun utilisateur"; }
}

// à préférer
function traiter(u) {
  if (!u) return "aucun utilisateur";
  if (!u.actif) return "inactif";
  if (u.age < 18) return "trop jeune";
  return "ok";
}
```

Même logique, moitié moins de charge mentale. Les cas d'exclusion en haut, le cas normal en bas. Prends cette habitude tout de suite : c'est un des marqueurs les plus visibles d'un code de niveau junior confirmé.

## Le ternaire

Pour choisir **une valeur**, pas pour exécuter des actions.

```js
const etiquette = age >= 18 ? "majeur" : "mineur";
```

Lisible sur une ligne. Dès qu'il est imbriqué, repasse à `if`.

```js
// illisible, à ne pas faire
const r = a ? b ? "x" : "y" : c ? "z" : "w";
```

## switch

Utile quand on compare **une même valeur** à une liste de cas précis.

```js
switch (role) {
  case "admin":
    return "tous les droits";
  case "editeur":
  case "auteur":            // deux cas, même traitement
    return "peut publier";
  default:
    return "lecture seule";
}
```

Sans `return`, il faut un `break` à la fin de chaque cas, sinon l'exécution continue dans le cas suivant. Ce comportement, l'*fallthrough*, est la source de bugs classique du `switch`. `switch` compare avec `===`.

## Opérateurs logiques dans les conditions

```js
if (age >= 18 && aPermis) { }        // les deux
if (estAdmin || estProprietaire) { } // au moins un
if (!estBloque) { }                  // négation
```

Combine avec des parenthèses dès que tu mélanges `&&` et `||` :

```js
if ((a || b) && c) { }    // sans ambiguïté
```

## Nommer ses conditions

Une condition longue devient lisible en la nommant :

```js
// avant
if (u.age >= 18 && u.actif && !u.banni && u.emailVerifie) { }

// après
const peutCommander = u.age >= 18 && u.actif && !u.banni && u.emailVerifie;
if (peutCommander) { }
```

## À retenir

- Early return plutôt qu'imbrication : les cas d'exclusion d'abord.
- Le ternaire choisit une valeur, il n'orchestre pas des actions.
- `switch` compare en `===` et « tombe » dans le cas suivant sans `break`.
- Une condition complexe mérite un nom.
