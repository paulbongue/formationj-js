
# Exercice 01-04

Le fichier `exercice.mjs` contient quatre fonctions **cassées**. Chacune provoque une erreur d'un type différent.

Ton travail : **corriger** chaque fonction pour qu'elle renvoie ce qu'elle annonce, sans changer sa signature ni son intention.

| Fonction | Doit renvoyer | Erreur cachée |
|---|---|---|
| `aireRectangle(l, h)` | l × h | ReferenceError |
| `longueurNom(personne)` | la longueur de `personne.nom` | TypeError |
| `crier(mot)` | le mot en majuscules avec `!` | TypeError |
| `moyenne(notes)` | la moyenne du tableau | résultat faux, aucune erreur |

Le dernier est le plus important : **du code qui ne plante pas peut être faux**. C'est le bug le plus dangereux.

## Corriger

```
js 01-04
```

Lis chaque message d'erreur avant de toucher au code.
