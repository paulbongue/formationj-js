
# Exercice 02-06

## 1. `PREDICTIONS`

Sans lancer le code, remplis le résultat de chaque expression. Les tests confrontent tes réponses à la réalité.

## 2. `memeContenu(a, b)`

`true` si les deux valeurs ont le **même contenu**, même si ce sont deux objets ou tableaux distincts.

```js
memeContenu([1, 2], [1, 2])       // true
memeContenu({a: 1}, {a: 1})       // true
memeContenu([1, 2], [2, 1])       // false
memeContenu(NaN, NaN)             // true   (même contenu, logiquement)
```

## 3. `valeurParDefaut(valeur, defaut)`

Renvoie `defaut` **uniquement** si `valeur` est `null` ou `undefined`. `0`, `""` et `false` doivent être conservés tels quels.

## 4. `comparerNumerique(a, b)`

Compare deux valeurs qui peuvent arriver en chaînes, **numériquement** : renvoie `-1`, `0` ou `1`.

```js
comparerNumerique("10", "9")   // 1    car 10 > 9
comparerNumerique(5, "5")      // 0
```

## Corriger

```
js 02-06
```
