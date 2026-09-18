
# 01-02 · Console et premier script

**15 min · après 01-01**

## Trois façons d'exécuter du JavaScript

**1. La console du navigateur** (`F12` → Console). Pour tester une idée en deux secondes. Rien n'est sauvegardé.

**2. Un fichier lancé par Node.** C'est ce que tu feras dans toute la formation.

```js
// bonjour.mjs
console.log("Bonjour !");
```

```
node bonjour.mjs
```

**3. Un fichier chargé par une page HTML.** À partir de la section 06 (le DOM).

```html
<script src="script.js"></script>
```

## console.log

C'est ta fenêtre sur ce que fait ton code. Elle accepte plusieurs arguments :

```js
console.log("Résultat :", 42, true);   // Résultat : 42 true
```

Variantes utiles : `console.error()` (en rouge), `console.warn()`, `console.table()` (magnifique sur un tableau d'objets).

## L'extension .mjs

Tu verras `.mjs` partout dans cette formation. C'est du JavaScript « moderne » : il autorise `import` et `export`, que tu utiliseras dès le premier exercice. Un fichier `.js` classique ne les accepte pas sans configuration.

## export : partager du code entre fichiers

Un fichier JavaScript garde tout pour lui par défaut. Pour qu'un autre fichier puisse utiliser ta fonction, tu dois l'**exporter** :

```js
// maths.mjs
export function doubler(n) {
  return n * 2;
}
```

```js
// autre.mjs
import { doubler } from "./maths.mjs";
console.log(doubler(21));   // 42
```

C'est exactement le mécanisme utilisé par les tests de la formation : ils importent les fonctions que tu exportes et vérifient ce qu'elles renvoient.

## return n'est pas console.log

Erreur numéro un des débuts. `console.log` **affiche**. `return` **renvoie une valeur** utilisable par le reste du programme.

```js
function mauvais(n) { console.log(n * 2); }   // affiche, renvoie undefined
function bon(n)     { return n * 2; }         // renvoie une valeur
```

Les tests vérifient ce que tu **renvoies**. Une fonction qui se contente d'afficher échouera toujours.

## À retenir

- `node fichier.mjs` exécute un fichier.
- `console.log` sert à observer, pas à produire un résultat.
- `export` rend une fonction visible de l'extérieur ; `import` la récupère.
- Les tests lisent tes `return`.
