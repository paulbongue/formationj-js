
# 02-06 · Comparaisons et égalité stricte

**15 min · après 02-05**

## Deux égalités, une seule à utiliser

`===` compare **la valeur et le type**, sans rien convertir.
`==` convertit avant de comparer, avec des règles tordues.

```js
5 === 5        // true
5 === "5"      // false   types différents
5 == "5"       // true    "5" est converti en 5
```

Les cas qui font la mauvaise réputation de `==` :

```js
0 == ""          // true
0 == false       // true
0 == "0"         // true
"" == false      // true
null == undefined// true
[] == false      // true    !
[] == ""         // true
"1" == true      // true
```

**Règle absolue : utilise toujours `===` et `!==`.** L'unique exception tolérée est `x == null`, qui teste `null` **et** `undefined` d'un coup — et même là, `x === null || x === undefined` reste plus clair.

## Le cas NaN

```js
NaN === NaN            // false
Number.isNaN(NaN)      // true    ← la bonne méthode
Object.is(NaN, NaN)    // true
```

## Objets et tableaux : comparaison de référence

```js
[1, 2] === [1, 2]      // false !
{ a: 1 } === { a: 1 }  // false !

const a = [1, 2];
const b = a;
a === b                // true    même référence
```

Deux objets ne sont égaux que s'ils sont **le même objet en mémoire**, pas s'ils se ressemblent. C'est le sujet du module 04-04, et une des causes les plus fréquentes de bugs en React.

Pour comparer les contenus, on compare une représentation :

```js
JSON.stringify(a) === JSON.stringify(b)   // suffisant pour des données simples
```

## Comparer des chaînes

L'ordre est celui des codes de caractères, donc les majuscules passent avant les minuscules.

```js
"a" < "b"        // true
"Z" < "a"        // true   ← surprenant
"10" < "9"       // true   ← comparaison texte, pas numérique !
```

Pour un tri correct en français, accents inclus : `"é".localeCompare("f")`.

## Opérateurs logiques et court-circuit

```js
true && false    // false
true || false    // true
!true            // false
```

Ils ne renvoient pas forcément un booléen, mais **une des deux valeurs** :

```js
"a" && "b"       // "b"     tout est vrai, on renvoie le dernier
0 && "b"         // 0       s'arrête au premier faux
null || "défaut" // "défaut"
"" || "défaut"   // "défaut"
0 || "défaut"    // "défaut"  ← attention si 0 est légitime !
0 ?? "défaut"    // 0         ← ?? ne réagit qu'à null/undefined
```

Le court-circuit est utile : dans `a && a.b`, si `a` est `null`, la deuxième partie n'est jamais évaluée, donc pas de TypeError.

## À retenir

- `===` toujours. `==` jamais.
- `NaN` n'est égal à rien, y compris lui-même : `Number.isNaN()`.
- Deux objets identiques en apparence ne sont pas `===`.
- `"10" < "9"` est vrai : les chaînes se comparent caractère par caractère.
- `||` réagit à tout ce qui est falsy, `??` seulement à `null` et `undefined`.
