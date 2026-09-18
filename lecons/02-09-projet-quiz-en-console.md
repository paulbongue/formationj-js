
# 02-09 · Projet : quiz en console

**2 h · après 02-08 · premier vrai projet**

Ce module ne t'apprend pas de nouvelle notion. Il te fait assembler tout le chapitre 2 dans un programme complet : variables, chaînes, nombres, conditions, boucles.

## Ce que tu construis

Un moteur de quiz. Deux parties :

1. **La logique** (testée automatiquement) : une fonction `creerQuiz` qui gère les questions, les réponses, le score.
2. **L'interface console** (libre) : un vrai jeu jouable dans le terminal, qui utilise ta logique.

Cette séparation entre **logique** et **interface** est un des principes les plus importants du métier. La logique ne sait pas qu'elle est affichée dans un terminal ; demain tu brancheras la même logique sur une page web sans y toucher une ligne.

## Le motif « objet avec état »

Tu n'as pas encore vu les classes. Pas besoin : une fonction qui renvoie un objet de fonctions suffit, et c'est même le style le plus courant en JavaScript moderne.

```js
function creerCompteur() {
  let valeur = 0;                       // l'état, invisible de l'extérieur

  return {
    incrementer() { valeur++; return valeur; },
    valeur() { return valeur; }
  };
}

const c = creerCompteur();
c.incrementer();      // 1
c.valeur();           // 1
c.valeur = 999;       // ne casse rien : l'état interne est protégé
```

L'état vit dans la fonction, les méthodes renvoyées y accèdent. C'est une **closure**, que tu étudieras formellement en 03-06. Tu l'utilises déjà.

## Lire une saisie dans le terminal

Node fournit un module intégré. Pour la partie interface :

```js
import readline from "node:readline/promises";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const reponse = await rl.question("Ta réponse ? ");
console.log("Tu as répondu :", reponse);
rl.close();
```

Le `await` fonctionne directement au niveau supérieur d'un fichier `.mjs`. Tu comprendras pourquoi en section 08 ; pour l'instant, retiens la formule.

## Conseils de méthode

- **Écris la logique d'abord**, fais passer les tests, et seulement ensuite l'interface. C'est l'ordre naturel : on ne décore pas une maison sans murs.
- Une fonction = une responsabilité. Si une fonction fait plus de 15 lignes, elle en fait probablement deux.
- Commite après chaque fonction qui passe ses tests.

## À retenir

- Une fonction qui renvoie un objet de méthodes = de l'état encapsulé, sans classe.
- Sépare toujours la logique de l'affichage.
- La logique se teste, l'interface se voit. Les deux se développent séparément.
