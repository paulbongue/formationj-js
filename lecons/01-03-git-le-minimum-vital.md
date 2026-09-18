
# 01-03 · Git : le minimum vital

**60 min · après 01-01**

Git enregistre l'histoire de ton code. GitHub la met en ligne. Pour un futur dev front, un GitHub actif vaut plus qu'un CV : c'est la preuve que tu codes vraiment.

Tu as déjà un GitHub avec des projets. Ce module sert à ancrer le réflexe : **une session de travail = un commit**.

## Installer et se présenter

Télécharge Git sur **git-scm.com**, puis une seule fois :

```
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"
```

## Le cycle de base

Git fonctionne en trois zones : ton dossier de travail, la zone de préparation (*staging*), l'historique.

```
git status              # que s'est-il passé depuis le dernier commit ?
git add .               # je prépare tous mes changements
git commit -m "message" # je fige un point dans l'histoire
git push                # j'envoie sur GitHub
```

`git status` est la commande que tu taperas le plus souvent. En cas de doute : `git status`.

## Créer un dépôt et le relier

```
git init
git add .
git commit -m "premier commit"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/formation-js.git
git push -u origin main
```

Après ce premier `push -u`, un simple `git push` suffira.

## Écrire un message de commit correct

Un message décrit **ce que fait** le changement, à l'impératif, en une ligne courte.

```
✔ ajoute la fonction doubler et ses tests
✔ corrige le calcul de TVA sur les prix négatifs
✘ modifs
✘ ça marche enfin ptn
```

Ton historique se lit. Des recruteurs le liront.

## .gitignore

Certains fichiers ne doivent jamais partir sur GitHub. Crée un fichier `.gitignore` :

```
node_modules/
.env
*.log
```

`node_modules` peut peser des centaines de mégaoctets et se reconstruit avec `npm install`. Il n'a rien à faire dans un dépôt.

## Quand quelque chose va mal

```
git log --oneline           # l'historique, une ligne par commit
git diff                    # ce que j'ai changé et pas encore préparé
git restore fichier.mjs     # j'abandonne mes changements sur ce fichier
```

## À retenir

- `status` → `add` → `commit` → `push`. Ce cycle, tu le feras des milliers de fois.
- Un commit par unité de sens, pas un par journée.
- Un message de commit est une phrase à l'impératif, pas un soupir.
- `node_modules` ne se commite jamais.

## Checklist

- [ ] `git --version` répond
- [ ] `user.name` et `user.email` sont configurés
- [ ] Le dossier de la formation est un dépôt Git avec au moins 3 commits distincts
- [ ] Il est poussé sur GitHub
- [ ] Un `.gitignore` existe
- [ ] Je sais lire `git status` et `git log --oneline`

```
js 01-03 --fait
```
