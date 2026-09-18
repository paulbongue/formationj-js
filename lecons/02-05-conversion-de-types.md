
# 02-05 · Conversion de types

**30 min · après 02-04**

JavaScript convertit les types tout seul, parfois contre ton intérêt. Ce module te fait passer du côté de celui qui contrôle.

## Conversion explicite : celle que tu écris

```js
Number("42")       // 42
Number("42abc")    // NaN
Number("")         // 0        ← surprenant
Number(true)       // 1
Number(null)       // 0        ← surprenant
Number(undefined)  // NaN

String(42)         // "42"
String(null)       // "null"
String([1, 2])     // "1,2"

Boolean(0)         // false
Boolean("")        // false
Boolean("0")       // true     ← une chaîne non vide est toujours vraie
```

`parseInt` et `parseFloat` sont plus tolérants — ils lisent le début et abandonnent au premier caractère invalide :

```js
parseInt("42px")      // 42
parseFloat("3.5em")   // 3.5
Number("42px")        // NaN
```

Utilise `Number()` quand tu veux une validation stricte, `parseInt` quand tu extrais d'un texte.

## Conversion implicite : celle que JavaScript décide

C'est la source des bizarreries qu'on cite pour se moquer du langage. Une seule règle à retenir :

> **`+` privilégie la concaténation dès qu'une chaîne est présente. Tous les autres opérateurs arithmétiques convertissent en nombre.**

```js
"5" + 3      // "53"    concaténation
"5" - 3      // 2       soustraction
"5" * "2"    // 10
"5" / 2      // 2.5
1 + "1"      // "11"
1 - "1"      // 0
```

C'est exactement le bug du formulaire : un champ HTML renvoie **toujours** une chaîne. `age + 1` donne `"201"` au lieu de `21`. D'où le réflexe : convertis dès l'entrée.

## Les valeurs falsy

Huit valeurs sont considérées comme fausses dans un contexte booléen. **Tout le reste est vrai.**

```js
false
0
-0
0n
""            // chaîne vide
null
undefined
NaN
```

Conséquences à connaître :

```js
Boolean([])        // true   ← un tableau vide est VRAI
Boolean({})        // true   ← un objet vide est VRAI
Boolean("0")       // true
Boolean(" ")       // true   ← un espace n'est pas une chaîne vide
```

Pour tester si un tableau est vide, c'est donc `if (tab.length === 0)`, jamais `if (!tab)`.

## Le piège du 0 et de la chaîne vide

```js
function saluer(nom) {
  if (!nom) return "Bonjour, inconnu";
  return `Bonjour, ${nom}`;
}
```

Ça marche… jusqu'à ce qu'on passe un nom légitime qui est falsy. Le cas typique est numérique :

```js
function afficherStock(n) {
  if (!n) return "stock indisponible";   // BUG : 0 est un stock valide !
  return `${n} en stock`;
}
```

Quand `0` ou `""` sont des valeurs valides, teste explicitement :

```js
if (n === undefined || n === null) ...
// ou, plus court, avec le nullish :
const valeur = n ?? "indisponible";      // ne déclenche que sur null/undefined
```

## À retenir

- `Number()` est strict, `parseInt()` est tolérant.
- `+` concatène si une chaîne est là ; `-`, `*`, `/` convertissent en nombre.
- Huit valeurs falsy, et `[]` comme `{}` n'en font pas partie.
- `!valeur` est dangereux quand `0` ou `""` sont légitimes : préfère `?? ` ou un test explicite.
