
# Exercice 02-05

## 1. `enNombre(valeur)`

Convertit en nombre. Renvoie `null` si la conversion est impossible ou donne `NaN`. La chaîne vide et les espaces seuls sont considérés comme impossibles.

```js
enNombre("42")    // 42
enNombre("3.5")   // 3.5
enNombre("42px")  // null
enNombre("")      // null
enNombre("   ")   // null
enNombre(null)    // null
enNombre(true)    // null   (un booléen n'est pas un nombre saisi)
```

## 2. `PREDICTIONS`

Sans exécuter le code, remplis les résultats attendus. Le test comparera **tes prédictions au comportement réel** de JavaScript : si tu te trompes, c'est ta compréhension qui est corrigée, pas ton code.

```js
{
  "'5' + 3": ...,
  "'5' - 3": ...,
  "1 + '1'": ...,
  "Boolean([])": ...,
  "Boolean('0')": ...,
  "Number('')": ...
}
```

## 3. `estVide(valeur)`

`true` pour : `null`, `undefined`, chaîne vide ou composée uniquement d'espaces, tableau vide, objet sans propriété.
`false` pour tout le reste — **y compris `0` et `false`**, qui sont des valeurs, pas du vide.

## 4. `additionnerFormulaire(a, b)`

Simule un formulaire : les deux arguments arrivent en chaînes. Renvoie leur **somme numérique**, ou `null` si l'un des deux n'est pas convertible.

```js
additionnerFormulaire("20", "1")   // 21   et pas "201"
additionnerFormulaire("20", "px")  // null
```

## Corriger

```
js 02-05
```
