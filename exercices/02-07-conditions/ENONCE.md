
# Exercice 02-07

## 1. `mention(note)`

Note sur 20 → mention.

| Note | Renvoie |
|---|---|
| ≥ 16 | `"très bien"` |
| ≥ 14 | `"bien"` |
| ≥ 12 | `"assez bien"` |
| ≥ 10 | `"passable"` |
| < 10 | `"insuffisant"` |

Une note hors de l'intervalle 0–20, ou pas un nombre, renvoie `"note invalide"`.

## 2. `droitsDe(role)`

Avec un `switch` :

- `"admin"` → `"tous les droits"`
- `"editeur"` et `"auteur"` → `"peut publier"`
- `"abonne"` → `"peut commenter"`
- tout le reste → `"lecture seule"`

## 3. `peutCommander(utilisateur)`

Renvoie un objet `{ autorise, raison }`. La **première** règle qui échoue donne la raison. Ordre imposé :

1. pas d'utilisateur → `"aucun utilisateur"`
2. `banni` vrai → `"compte banni"`
3. `actif` faux → `"compte inactif"`
4. `age` < 18 → `"mineur"`
5. `emailVerifie` faux → `"email non vérifié"`
6. tout va bien → `{ autorise: true, raison: null }`

Écris-la en **early return**, pas en if imbriqués.

## 4. `estBissextile(annee)`

Divisible par 4, sauf les multiples de 100 qui ne sont pas multiples de 400.
`2024` → `true`, `1900` → `false`, `2000` → `true`.

## 5. `categorieImc(poids, taille)`

IMC = poids / taille². Renvoie `"insuffisance"` (< 18,5), `"normal"` (< 25), `"surpoids"` (< 30), `"obésité"` (≥ 30). Taille nulle ou négative → `null`.

## Corriger

```
js 02-07
```
