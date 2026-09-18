
# 02-04 · Nombres et Math

**30 min · après 02-03**

## Les opérateurs

```js
7 + 2      // 9
7 - 2      // 5
7 * 2      // 14
7 / 2      // 3.5     ← pas de division entière automatique
7 % 2      // 1       ← reste de la division (modulo)
7 ** 2     // 49      ← puissance
```

Le **modulo** est plus utile qu'il n'y paraît :

```js
n % 2 === 0            // n est pair
n % 3 === 0            // n est divisible par 3
(i + 1) % longueur     // revenir à 0 après le dernier index (carrousel)
```

## Priorités

`*`, `/`, `%` avant `+`, `-`. En cas de doute, mets des parenthèses : personne n'a jamais perdu de temps à cause de parenthèses en trop.

```js
2 + 3 * 4        // 14
(2 + 3) * 4      // 20
```

## Raccourcis d'affectation

```js
let n = 10;
n += 5;    // 15   équivaut à n = n + 5
n -= 3;    // 12
n *= 2;    // 24
n /= 4;    // 6
n++;       // 7    incrémente de 1
n--;       // 6
```

## Math

```js
Math.round(4.5)      // 5     arrondi classique
Math.floor(4.9)      // 4     plancher, vers le bas
Math.ceil(4.1)       // 5     plafond, vers le haut
Math.trunc(-4.9)     // -4    coupe la partie décimale
Math.abs(-7)         // 7     valeur absolue
Math.min(3, 9, 1)    // 1
Math.max(3, 9, 1)    // 9
Math.sqrt(16)        // 4
Math.random()        // un décimal dans [0, 1[
```

Attention à `Math.floor` sur les négatifs : `Math.floor(-4.1)` vaut `-5`, pas `-4`. Pour couper vers zéro, c'est `Math.trunc`.

## Nombre aléatoire dans un intervalle

Le motif à mémoriser, entier entre `min` et `max` **inclus** :

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

`Math.random()` seul ne suffit jamais : il faut l'étirer sur la plage voulue, puis arrondir vers le bas.

## toFixed : attention au type

```js
const prix = 19.999;
prix.toFixed(2)            // "20.00"   ← une CHAÎNE
Number(prix.toFixed(2))    // 20        ← un nombre
```

`toFixed` sert à **afficher**. Dès que tu veux continuer à calculer, reconvertis avec `Number()`. Beaucoup de bugs de facturation viennent de là.

## Arrondir à un pas donné

Pour arrondir aux 5 centimes, aux 10, aux 0,25 :

```js
const arrondirAu = (n, pas) => Math.round(n / pas) * pas;
arrondirAu(12.37, 0.05)   // 12.35
arrondirAu(127, 10)       // 130
```

## À retenir

- `/` donne toujours un décimal ; `%` donne le reste et sert à tester la divisibilité.
- `Math.floor` descend même sur les négatifs ; `Math.trunc` coupe vers zéro.
- Aléatoire entier inclusif : `Math.floor(Math.random() * (max - min + 1)) + min`.
- `toFixed` renvoie du texte. Toujours `Number(...)` derrière si tu recalcules.
