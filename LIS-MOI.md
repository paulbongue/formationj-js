# Formation JavaScript

Un écosystème local complet : 66 modules, des leçons écrites, des exercices corrigés automatiquement, et une progression qui se met à jour toute seule.

Pas de planning, pas de dates. Tu travailles quand tu es disponible.

---

## Démarrage en 30 secondes

Ouvre un terminal **dans ce dossier** (dans VS Code : `Ctrl+ù`), puis :

```
js
```

Cette commande unique t'affiche où tu en es et exactement quoi faire ensuite. C'est le seul point d'entrée dont tu as besoin.

> **PowerShell** exige un préfixe : `.\js` au lieu de `js`.
> Si `js` ne marche pas du tout : `node moteur/run.mjs` fait la même chose.

---

## Les commandes

| Commande | Ce que ça fait |
|---|---|
| `js` | Tableau de bord : progression + le module à faire maintenant |
| `js 02-04` | Corrige l'exercice 02-04 |
| `js 02-04 --lecon` | Affiche la leçon dans le terminal |
| `js 02-04 --fait` | Valide à la main (modules sans tests : installation, Git) |
| `js 02-04 --solution` | Affiche la solution — **seulement** si tes tests passent |
| `js --bilan` | Rapport complet, section par section, avec les points de friction |
| `js --temps 30` | « J'ai 30 minutes, est-ce que le prochain module rentre ? » |

---

## Le cycle de travail

1. `js` — je te dis quel module et où sont les fichiers
2. Lis la leçon dans `lecons/`
3. Code dans `exercices/<module>/exercice.mjs`
4. `js <code>` — les tests te disent ce qui va et ce qui ne va pas
5. Recommence l'étape 3 jusqu'au vert
6. `git add . && git commit -m "..."` — un commit par module réussi

Tu peux t'arrêter n'importe où. La progression est enregistrée dans `progression.json`, y compris tes échecs : c'est ce qui me permet de repérer où tu bloques.

---

## Ce que contient le dossier

```
Javascript/
├── js.cmd, js.ps1          le lanceur
├── LIS-MOI.md              ce fichier
├── progression.json         ton état — ne pas éditer à la main
├── lecons/                  une leçon Markdown par module
├── exercices/
│   └── 02-04-nombres-et-math/
│       ├── ENONCE.md        ce qu'il faut faire
│       ├── exercice.mjs     ← TU CODES ICI
│       ├── tests.mjs        les tests (ne pas modifier)
│       └── .solution.b64    verrouillée jusqu'à réussite
├── moteur/                  le système : lanceur, tests, catalogue
└── mes-projets/             tes projets libres
```

---

## Les règles

**L'ordre est strict.** Chaque module suppose le précédent acquis. Si le prochain est plus long que ta session, entame-le et reprends plus tard — ne le saute pas.

**70 % de code, 30 % de lecture.** Un module dont les tests ne passent pas n'est pas fait.

**Ne modifie jamais `tests.mjs`.** C'est ton juge. Le trafiquer, c'est te mentir.

**Les solutions sont verrouillées** jusqu'à ce que tes tests passent. Bloqué plus de 30 minutes ? Ouvre-moi une session, je te donne un indice — pas la réponse.

**Ne passe pas à React** avant la fin de la section 09. C'est le piège numéro un des autodidactes.

---

## Suivi

Un bilan automatique arrive chaque semaine : je lis ta progression et ton code, je te dis ce qui bloque, ce qu'il faut renforcer, et si ton niveau tient la route.

Entre-temps, ouvre-moi une session quand tu veux : un indice, une explication, une relecture de code, ou le déblocage des modules suivants.

---

## État du contenu

Les sections **01 et 02** sont entièrement rédigées : 13 modules, 191 tests. De quoi tenir plusieurs semaines.

Les sections 03 à 09 sont au catalogue mais pas encore écrites. Demande-les-moi quand tu approches de la fin de la section 02 — les écrire d'avance n'aurait aucun intérêt, je préfère les calibrer sur ce que j'aurai vu de ton code.
