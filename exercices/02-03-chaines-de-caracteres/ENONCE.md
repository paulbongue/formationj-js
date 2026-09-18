
# Exercice 02-03

## 1. `capitaliser(mot)`

`"black"` → `"Black"`. Une chaîne vide renvoie une chaîne vide. Le reste du mot passe en minuscules : `"bLACK"` → `"Black"`.

## 2. `formaterNom(nomComplet)`

`"jean dupont"` → `"Dupont, Jean"`. Le nom de famille en premier, capitalisé, puis le prénom.

## 3. `initiales(nomComplet)`

`"jean dupont"` → `"J.D."`. Fonctionne avec deux ou trois mots : `"jean paul dupont"` → `"J.P.D."`.

## 4. `tronquer(texte, longueurMax)`

Si le texte dépasse `longueurMax`, le couper et ajouter `"…"` — le total ne doit **pas** dépasser `longueurMax`. Sinon, renvoyer le texte tel quel.

```js
tronquer("Bonjour le monde", 10)  // "Bonjour l…"   (10 caractères)
tronquer("Salut", 10)             // "Salut"
```

## 5. `compterOccurrences(texte, lettre)`

Nombre d'apparitions de la lettre, **sans tenir compte de la casse**.

```js
compterOccurrences("Bonjour Bob", "b")  // 3
```

## Corriger

```
js 02-03
```
