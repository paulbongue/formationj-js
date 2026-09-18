
# 01-01 · Installer l'environnement

**30 min · aucun prérequis**

Avant d'écrire du JavaScript, il faut trois choses : un moteur pour l'exécuter, un éditeur pour l'écrire, un navigateur pour le voir tourner.

## 1. Node.js

JavaScript est né dans le navigateur. Node.js est le programme qui lui permet de tourner aussi **en dehors** du navigateur, directement sur ta machine. C'est lui qui fera fonctionner toute cette formation.

- Va sur **nodejs.org**
- Télécharge la version **LTS** (Long Term Support). Pas la « Current » : la LTS est celle utilisée en entreprise.
- Installe en laissant toutes les options par défaut.
- **Ferme et rouvre ton terminal** après l'installation (sinon il ne connaît pas encore la commande).

Vérifie :

```
node -v
npm -v
```

Tu dois voir deux numéros de version, par exemple `v22.11.0` et `10.9.0`. Si le terminal répond « commande introuvable », l'installation ne s'est pas terminée ou le terminal n'a pas été rouvert.

## 2. VS Code

L'éditeur standard du métier, gratuit. Sur **code.visualstudio.com**.

Une fois installé, ouvre le panneau Extensions (`Ctrl+Maj+X`) et installe :

| Extension | À quoi ça sert |
|---|---|
| **Prettier** | Reformate ton code proprement à chaque sauvegarde. Tu arrêtes de penser à l'indentation. |
| **ESLint** | Souligne les erreurs et les mauvaises habitudes pendant que tu écris. |
| **Error Lens** | Affiche le message d'erreur directement sur la ligne concernée. |

Active le formatage automatique : `Ctrl+Maj+P` → tape « Format On Save » → coche l'option.

## 3. Le terminal intégré

Dans VS Code : `Ctrl+ù` (ou menu Terminal → Nouveau terminal). C'est là que tu taperas toutes les commandes de la formation. Tu ne quitteras plus l'éditeur.

## 4. Un navigateur avec de bons outils

Chrome, Edge ou Firefox. `F12` ouvre les **DevTools**. Onglet **Console** : tu peux y taper du JavaScript directement. Essaie `2 + 2` puis Entrée.

## À retenir

- **Node** exécute ton JS hors navigateur, **le navigateur** exécute celui des pages web. Même langage, deux environnements.
- `node -v` est le premier réflexe quand quelque chose ne marche pas.
- Un terminal doit être rouvert après l'installation d'un outil pour le connaître.

## Checklist

Coche mentalement, puis valide :

- [ ] `node -v` affiche une version ≥ 18
- [ ] `npm -v` affiche une version
- [ ] VS Code est installé, avec Prettier et ESLint
- [ ] Le format-on-save est actif
- [ ] Je sais ouvrir le terminal intégré de VS Code
- [ ] Je sais ouvrir la console du navigateur avec F12

Quand tout est coché :

```
js 01-01 --fait
```
