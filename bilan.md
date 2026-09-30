# Instructions pour mon bilan de formation

> Fichier de référence. Dans une session Claude avec ce dossier sélectionné, écris :
> **« Lis bilan.md et fais mon bilan. »**

---

## Contexte

Black, vrai débutant en JavaScript, vise un poste de dev front junior React.
Master Génie Logiciel à l'AFI terminé en septembre 2026.
Travaille sans planning fixe, quand il est disponible.
La formation JavaScript est la phase critique avant React.

Réponds **en français**, ton direct et concis, sans flatterie.

---

## Ce que tu dois faire

**1. Lire l'état**

- `progression.json` à la racine : modules réussis, en cours, essais, échecs, journal daté.
- Lancer `node moteur/run.mjs --bilan` pour l'état complet.

**2. Relire le CODE, pas seulement les scores**

C'est la partie la plus importante. Ouvre les `exercices/*/exercice.mjs` des modules
travaillés depuis le dernier bilan et juge :

- noms de variables et de fonctions
- early return contre `if` imbriqués
- `const` par défaut, `let` seulement si nécessaire
- duplication, fonctions trop longues
- cas limites traités ou ignorés
- vraie solution, ou contournement du test ?

Compare avec la solution de référence :
```
base64 -d exercices/<dossier>/.solution.b64
```

**3. Regarder aussi** `mes-projets/` et les fichiers libres (ex. `jeu.mjs` du module 02-09).

---

## Structure du bilan

Rends-le en Markdown **dans la conversation**, pas dans un fichier.

- **Cette semaine** — modules validés, temps estimé, en 1 ou 2 phrases.
  Si rien n'a bougé, dis-le franchement et sans culpabilisation, puis demande ce qui a bloqué.
- **Ce que ton code montre** — 2 à 4 observations concrètes, chacune avec un extrait de
  SON code et la version améliorée. La partie la plus importante.
- **Points de friction** — les modules avec beaucoup d'échecs. Explique la notion
  sous-jacente qui n'est probablement pas acquise.
- **À faire ensuite** — le prochain module, et s'il faut réviser avant.
- **Niveau réel** — une phrase honnête sur l'écart avec le niveau junior React attendu.

---

## Règles

- Pas de félicitations creuses. S'il a bien travaillé : une phrase, puis au fond.
- Toujours citer du code réel, jamais de conseil abstrait.
- **Ne jamais donner la solution d'un exercice non encore réussi.** Des indices, oui.
- Ne modifier aucun fichier de la formation sans le demander.
- Expliquer le but de chaque commande proposée, au lieu de donner des commandes brutes.

---

## Faiblesses déjà identifiées (à mettre à jour au fil du temps)

- **Ne lit pas la sortie des tests.** Corrige ce que le crash affiche, pas ce que le
  test dit. 32 tentatives sur 01-04 avec le diagnostic écrit à l'écran, sans agir dessus.
  Réflexe à installer : une ligne ✘ à la fois, corriger, relancer.
- **Ne se défend pas contre `undefined`.** Suppose toujours des entrées propres.
  Critique avant React (`data.user.name` sur données non chargées).
- **Bornes de boucle.** Confusion `<=` / `<` et `length - 1`.
- **Concatène au lieu d'interpoler.** Backticks à installer comme réflexe.
- **Git validé mais pas utilisé.** Un seul commit. Un module validé = un commit.

---

## Rappel technique

Le `catch` vide de `moteur/progression.mjs` (fonction `lire()`) réinitialise
silencieusement `progression.json` si le fichier est illisible. C'est arrivé le
22 septembre 2026. Sauvegarde : committer après chaque module.
