
# Exercice 02-02

## 1. `typeReel(valeur)`

Renvoie le type de la valeur sous forme de chaîne, mais **en corrigeant les deux pièges** de `typeof` :

- un tableau doit renvoyer `"array"`
- `null` doit renvoyer `"null"`

Tout le reste se comporte comme `typeof`.

## 2. `decrire(valeur)`

Renvoie une phrase au format exact :

```
42 est de type number
"Black" est de type string
null est de type null
[1,2] est de type array
```

Les chaînes sont entourées de guillemets doubles, les tableaux affichés au format JSON compact.

## 3. `estVraimentUnNombre(valeur)`

Renvoie `true` seulement si la valeur est un nombre **utilisable** : type number, ni `NaN`, ni `Infinity`.

## 4. `PIEGES`

Exporte un objet avec les bonnes réponses :

```js
{
  typeofNull: "...",        // ce que renvoie typeof null
  typeofTableau: "...",     // ce que renvoie typeof []
  nanEstEgalANan: ...,      // NaN === NaN
  typeofNan: "..."          // typeof NaN
}
```

## Corriger

```
js 02-02
```
