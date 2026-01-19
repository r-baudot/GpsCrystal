# GPS Manager

Application web de gestion de points GPS permettant d'enregistrer, modifier et calculer les distances entre différentes coordonnées géographiques.

## Fonctionnalités

- **Ajout de points GPS** : Enregistrez vos positions avec un nom, latitude et longitude via un formulaire en 3 étapes
- **Gestion des points** : Modifiez ou supprimez vos points enregistrés
- **Calcul de distance** : Calculez la distance entre deux points GPS (en km ou m)
- **Persistance locale** : Vos données sont sauvegardées dans le localStorage du navigateur

## Technologies

- [Next.js 16](https://nextjs.org/) - Framework React avec App Router
- [Material UI 7](https://mui.com/) - Bibliothèque de composants UI
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Storybook](https://storybook.js.org/) - Documentation et tests visuels des composants
- [Vitest](https://vitest.dev/) - Framework de tests unitaires

## Prérequis

- Node.js 18+
- npm, yarn, pnpm ou bun

## Installation

```bash
# Cloner le repository
git clone <url-du-repo>
cd gps

# Installer les dépendances
npm install
```

## Lancement

### Mode développement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

### Mode production

```bash
# Build de l'application
npm run build

# Lancement du serveur de production
npm run start
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run test` | Lance les tests unitaires avec Vitest |
| `npm run storybook` | Lance Storybook pour visualiser les composants |

## Structure du projet

```
src/
├── app/              # Pages Next.js (App Router)
├── components/       # Composants réutilisables
├── features/         # Fonctionnalités métier (GPS)
├── hooks/            # Hooks personnalisés
├── theme/            # Configuration du thème MUI
├── types/            # Types TypeScript
└── utils/            # Fonctions utilitaires
```
