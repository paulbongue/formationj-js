
# 02-08 · Boucles

**60 min · après 02-07**

## for classique

```js
for (let i = 0; i < 5; i++) {
  console.log(i);      // 0 1 2 3 4
}
```

Trois parties : initialisation, condition de continuation, incrément. Utile quand tu as besoin de l'**index**.

Le piège universel : `<=` au lieu de `<`.

```js
const tab = ["a", "b", "c"];
for (let i = 0; i <= tab.length; i++) {
  console.log(tab[i]);    // a, b, c, undefined   ← un tour de trop
}
```

Un tableau de longueur 3 a les index 0, 1, 2. La condition est donc `i < tab.length`.

## for…of : le plus lisible

Quand l'index ne t'intéresse pas :

```js
for (const fruit of ["pomme", "poire"]) {
  console.log(fruit);
}
```

Fonctionne sur les tableaux, les chaînes, les Map, les Set. À préférer par défaut.

## for…in : pour les objets, et seulement eux

```js
const u = { nom: "Black", age: 20 };
for (const cle in u) {
  console.log(cle, u[cle]);
}
```

Ne l'utilise pas sur un tableau : il itère les **clés** sous forme de chaînes et peut inclure des propriétés héritées.

## while

Quand tu ne sais pas d'avance combien de tours :

```js
let n = 100;
let etapes = 0;
while (n > 1) {
  n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  etapes++;
}
```

Assure-toi que la condition finira par devenir fausse. Une boucle infinie gèle le programme — `Ctrl+C` dans le terminal pour en sortir.

`do…while` exécute au moins une fois avant de tester : rare, mais utile pour redemander une saisie.

## break et continue

```js
for (const n of nombres) {
  if (n < 0) continue;    // passe au tour suivant
  if (n > 100) break;     // sort de la boucle
  total += n;
}
```

## Boucles imbriquées

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

Deux boucles imbriquées sur *n* éléments font *n²* tours. Sur 1 000 éléments, c'est un million d'opérations : réfléchis avant d'imbriquer.

## Accumuler un résultat

Le motif de base, que les méthodes du chapitre 05 remplaceront élégamment :

```js
const nombres = [3, 7, 2];
let total = 0;                       // l'accumulateur
for (const n of nombres) total += n;
// total === 12
```

Pour construire un tableau :

```js
const resultat = [];
for (const n of nombres) resultat.push(n * 2);
// [6, 14, 4]
```

## À retenir

- `i < longueur`, jamais `<=`.
- `for…of` par défaut, `for` classique quand tu as besoin de l'index, `for…in` uniquement sur les objets.
- `while` quand le nombre de tours est inconnu ; vérifie la condition de sortie.
- `continue` saute un tour, `break` quitte la boucle.
- Accumulateur déclaré **avant** la boucle, rempli **dedans**.
