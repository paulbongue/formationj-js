
# 02-03 · Chaînes de caractères

**45 min · après 02-02**

Le texte est partout : noms d'utilisateurs, messages d'erreur, contenu de page. Ce module te donne la boîte à outils complète.

## Trois façons d'écrire une chaîne

```js
const a = 'simple';
const b = "double";
const c = `gravé`;     // backtick : AltGr + 7 sur un clavier français
```

Les deux premières sont équivalentes. **Utilise systématiquement la troisième** dès qu'il y a une variable à insérer.

## Template literals

```js
const prenom = "Black";
const age = 20;

// à éviter
const v1 = "Je suis " + prenom + " et j'ai " + age + " ans.";

// à préférer
const v2 = `Je suis ${prenom} et j'ai ${age} ans.`;
```

Dans `${ }` tu peux mettre n'importe quelle expression : `${age * 2}`, `${prenom.toUpperCase()}`, un ternaire. Les backticks gèrent aussi le multiligne sans `\n`.

## Les chaînes sont immuables

Aucune méthode ne modifie la chaîne d'origine. Elles **renvoient une nouvelle chaîne**.

```js
const mot = "bonjour";
mot.toUpperCase();          // "BONJOUR"
console.log(mot);           // "bonjour"  ← inchangé !

const crie = mot.toUpperCase();   // il faut récupérer le résultat
```

C'est l'erreur silencieuse classique : appeler une méthode et oublier de garder son retour.

## Les méthodes à connaître par cœur

```js
const s = "  Bonjour le monde  ";

s.length                 // 21  (une propriété, pas une méthode : sans parenthèses)
s.trim()                 // "Bonjour le monde"
s.toUpperCase()          // "  BONJOUR LE MONDE  "
s.toLowerCase()
s.includes("monde")      // true
s.startsWith("  Bon")    // true
s.endsWith("  ")         // true
s.indexOf("le")          // 10   (-1 si absent)
s.replace("monde", "JS") // remplace la PREMIÈRE occurrence
s.replaceAll("o", "0")   // remplace toutes les occurrences
s.split(" ")             // découpe en tableau
s.at(0)                  // "​ " premier caractère ; .at(-1) = le dernier
s.padStart(3, "0")       // complète à gauche
s.repeat(2)
```

## slice : extraire un morceau

```js
const mot = "JavaScript";
mot.slice(0, 4)      // "Java"      de l'index 0 jusqu'à 4 non inclus
mot.slice(4)         // "Script"    de 4 jusqu'à la fin
mot.slice(-6)        // "Script"    les 6 derniers
```

L'index de fin est toujours **exclu**. C'est vrai pour `slice` sur les chaînes comme sur les tableaux.

## Majuscule sur la première lettre

Il n'existe pas de méthode `capitalize` en JavaScript. Le motif à connaître :

```js
const mot = "black";
const cap = mot.at(0).toUpperCase() + mot.slice(1);   // "Black"
```

## À retenir

- Backticks + `${}` par défaut pour tout ce qui contient une variable.
- Une chaîne ne se modifie jamais : récupère toujours le retour de la méthode.
- `length` est une propriété (sans parenthèses), tout le reste sont des méthodes.
- Dans `slice(a, b)`, `b` est exclu.
- Pas de `capitalize` : `at(0).toUpperCase() + slice(1)`.
