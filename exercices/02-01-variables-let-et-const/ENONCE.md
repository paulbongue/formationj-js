
# Exercice 02-01

## 1. `TAUX_TVA`

Exporte une constante valant `0.2`.

## 2. `prixTtc(prixHt)`

Renvoie le prix TTC, calculé à partir de `TAUX_TVA`. Arrondi à **2 décimales** (un nombre, pas une chaîne).

## 3. `creerCompteur()`

Renvoie une fonction. Chaque appel de cette fonction renvoie le nombre d'appels effectués : 1, puis 2, puis 3…

```js
const compter = creerCompteur();
compter();  // 1
compter();  // 2
```

Deux compteurs créés séparément sont indépendants.

## 4. `ajouterArticle(panier, article)`

Ajoute l'article et renvoie le panier. Le paramètre `panier` est déclaré en `const` chez l'appelant : à toi de comprendre pourquoi ça fonctionne quand même.

## 5. `PREUVE`

Exporte un objet `{ constEmpecheReaffectation, constEmpecheMutation }` avec deux booléens : les bonnes réponses à « `const` empêche-t-il de réaffecter ? » et « `const` empêche-t-il de modifier le contenu ? ».

## Corriger

```
js 02-01
```
