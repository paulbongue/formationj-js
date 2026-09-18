
# 01-04 · Lire une erreur

**15 min · après 01-02**

Un débutant voit une erreur et panique. Un dev la lit. C'est toute la différence, et elle s'apprend en un quart d'heure.

## Anatomie d'un message

```
C:\Javascript\test.mjs:4
console.log(prix * quantite);
                    ^

ReferenceError: quantite is not defined
    at file:///C:/Javascript/test.mjs:4:21
```

Quatre informations, toujours les mêmes :

1. **Le fichier et la ligne** — `test.mjs:4`. Va voir cette ligne.
2. **Le code fautif**, avec un `^` sous le point exact.
3. **Le type** — `ReferenceError`.
4. **La stack trace** — la chaîne des appels qui a mené là. Lis-la de haut en bas ; la première ligne qui parle de *ton* fichier est celle qui compte.

## Les trois types que tu verras 90 % du temps

### SyntaxError

Ton code n'est pas du JavaScript valide. Il ne s'exécute même pas. Presque toujours une parenthèse, une accolade ou un guillemet manquant.

```js
console.log("bonjour"   // SyntaxError: missing ) after argument list
```

### ReferenceError

Tu utilises un nom qui n'existe pas. Faute de frappe, variable jamais déclarée, ou déclarée après usage.

```js
console.log(pirx);      // ReferenceError: pirx is not defined
```

### TypeError

La valeur existe mais tu lui demandes l'impossible : appeler ce qui n'est pas une fonction, lire une propriété de `undefined` ou `null`.

```js
const utilisateur = undefined;
console.log(utilisateur.nom);   // TypeError: Cannot read properties of undefined (reading 'nom')
```

Ce dernier message est le plus fréquent de toute ta carrière. Il dit : *la chose à gauche du point n'existe pas*. Ne cherche pas `nom`, cherche pourquoi `utilisateur` est vide.

## La méthode, en trois questions

1. **Quel type ?** Il te dit la famille du problème.
2. **Quelle ligne ?** Va la lire, vraiment la lire.
3. **Que vaut chaque chose sur cette ligne ?** `console.log` chaque variable juste avant. Neuf fois sur dix, l'une ne vaut pas ce que tu croyais.

## À retenir

- Une erreur n'est pas un reproche, c'est une adresse : fichier, ligne, colonne.
- `SyntaxError` = mal écrit. `ReferenceError` = n'existe pas. `TypeError` = existe mais mauvais type.
- « Cannot read properties of undefined » → le problème est **avant** le point, pas après.
- Lire le message en entier prend 5 secondes et fait gagner 20 minutes.
