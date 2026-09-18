
# Exercice 02-04

## 1. `aleatoireEntre(min, max)`

Un entier aléatoire entre `min` et `max`, **bornes incluses**.

## 2. `arrondirAu(nombre, pas)`

`arrondirAu(12.37, 0.05)` → `12.35`. `arrondirAu(127, 10)` → `130`.

Attention : à cause des flottants, `Math.round(n / pas) * pas` peut produire `12.350000000000001`. Nettoie le résultat.

## 3. `tva(prixHt, taux)`

Renvoie le montant de TVA arrondi à 2 décimales, sous forme de **nombre**.

```js
tva(100, 0.2)     // 20
tva(19.99, 0.2)   // 4
```

## 4. `moyenne(...nombres)`

Accepte un nombre libre d'arguments. Renvoie la moyenne, ou `0` si aucun argument.

```js
moyenne(10, 20, 30)  // 20
moyenne()            // 0
```

## 5. `estPair(n)` et `estDivisiblePar(n, d)`

Deux booléens, en utilisant le modulo.

## 6. `secondesEnDuree(secondes)`

`3725` → `"1h 02m 05s"`. Minutes et secondes sur deux chiffres, heures sans zéro devant.

## Corriger

```
js 02-04
```
