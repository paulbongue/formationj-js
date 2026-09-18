
# 02-01 · Variables : let et const

**30 min · après 01-04**

Une variable est une étiquette posée sur une valeur. Trois mots-clés existent pour en créer, tu n'en utiliseras que deux.

## const : par défaut, toujours

```js
const tauxTva = 0.2;
tauxTva = 0.1;        // TypeError: Assignment to constant variable.
```

`const` interdit de **réaffecter** l'étiquette. Commence toujours par `const`. Tu passeras à `let` seulement quand le compilateur — ou la logique — te forcera la main. Résultat : ton code devient plus facile à suivre, parce qu'on sait au premier regard ce qui ne changera pas.

## let : quand la valeur doit changer

```js
let compteur = 0;
compteur = compteur + 1;   // parfaitement valide
```

Cas typiques : un compteur, un accumulateur dans une boucle, une valeur qui dépend d'une condition.

## var : ne l'utilise pas

`var` existe encore pour des raisons historiques. Il ignore les blocs, autorise la redéclaration silencieuse et remonte en haut de la fonction. Tu le rencontreras dans du vieux code ; tu ne l'écriras jamais.

## Le piège : const ne rend pas immuable

C'est le malentendu le plus fréquent. `const` protège **l'étiquette**, pas le **contenu**.

```js
const panier = ["pain"];
panier.push("lait");     // autorisé, le tableau change
console.log(panier);     // ["pain", "lait"]

panier = ["autre"];      // TypeError, on change l'étiquette
```

Retiens la formule : *`const` empêche de changer de boîte, pas de remplir la boîte.*

## Portée de bloc

`let` et `const` n'existent qu'à l'intérieur des accolades où ils sont déclarés.

```js
if (true) {
  const secret = 42;
}
console.log(secret);   // ReferenceError: secret is not defined
```

C'est une bonne nouvelle : chaque variable a un territoire clair, tu ne pollues pas le reste du programme.

## Nommer correctement

Le nommage est 50 % de la lisibilité d'un code.

```js
✔ const prixTotalHt = 120;
✔ const utilisateurConnecte = true;
✔ const MAX_TENTATIVES = 3;      // constante de configuration : majuscules
✘ const x = 120;
✘ const données2 = true;
✘ const truc = 3;
```

Conventions JavaScript : **camelCase** pour les variables et fonctions, majuscules avec underscores pour les constantes de configuration. Les booléens gagnent à commencer par `est`, `a`, `peut`.

## À retenir

- `const` par défaut, `let` seulement si nécessaire, `var` jamais.
- `const` bloque la réaffectation, pas la mutation du contenu.
- `let` et `const` vivent dans leur bloc `{ }`.
- Un bon nom rend le commentaire inutile.
