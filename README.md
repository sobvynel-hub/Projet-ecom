# Projet-ecom

Implémentation front-end React d'une page blog inspirée de la maquette MetaBlog.

## Structure

- `src/pages/MetaBlogPage.jsx` : page principale et orchestration des sections.
- `src/components/*` : composants réutilisables (`Header`, `HeroPost`, `PostCard`, `Footer`).
- `src/data/posts.js` : données simulées des articles (compatibles avec une API/back-end).
- `src/styles/blog.css` : styles globaux de la page.
- `src/App.jsx` : point d'entrée React.

## Intégration back-end

La structure est prête pour brancher une API Node/Express + PostgreSQL :
- remplacer les données mockées dans `src/data/posts.js` par des appels API ;
- conserver les mêmes clés (`title`, `category`, `author`, `date`, `image`) pour une intégration simple.
