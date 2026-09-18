
# Exercice 02-09 · Projet quiz

## Partie testée : `creerQuiz(questions)`

`questions` est un tableau d'objets :

```js
[
  { enonce: "Capitale de la France ?", reponse: "paris", points: 1 },
  { enonce: "2 + 2 ?", reponse: "4", points: 2 }
]
```

`creerQuiz` renvoie un objet avec exactement ces méthodes :

### `questionCourante()`
L'objet question en cours, ou `null` si le quiz est terminé.

### `repondre(saisie)`
Compare la saisie à la réponse attendue, **sans tenir compte de la casse ni des espaces autour**. Puis avance à la question suivante.

Renvoie `{ correct, attendu, points }` :
- `correct` : booléen
- `attendu` : la réponse attendue
- `points` : points gagnés sur cette question (0 si faux)

Si le quiz est déjà terminé, renvoie `null` sans rien modifier.

### `score()`
`{ points, maximum, bonnes, total }`.

### `termine()`
`true` quand toutes les questions ont été posées.

### `bilan()`
Une chaîne selon le pourcentage de points obtenus :

| Pourcentage | Bilan |
|---|---|
| 100 | `"parfait"` |
| ≥ 75 | `"très bien"` |
| ≥ 50 | `"correct"` |
| ≥ 25 | `"à revoir"` |
| < 25 | `"il faut relire la leçon"` |

Un quiz sans question renvoie `"il faut relire la leçon"` et un score de 0.

### `progression()`
Chaîne `"2/5"` : nombre de questions déjà posées sur le total.

## Partie libre : le jeu

Crée un fichier `jeu.mjs` **dans le même dossier**, qui importe `creerQuiz` et propose une vraie partie dans le terminal : affichage de la question, saisie, correction immédiate, score final et bilan.

```
node jeu.mjs
```

Cette partie n'est pas testée automatiquement — je la relirai au bilan hebdomadaire.

## Corriger

```
js 02-09
```
