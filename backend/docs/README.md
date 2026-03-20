# Configuration du Backend

Ce backend est une application Node.js/Express utilisant TypeScript et Prisma avec une base de données SQLite.

## Prérequis

- Node.js (vérifiez le `package.json` racine pour les exigences de moteur si spécifiées)
- npm

## Configuration Initiale

1.  Installez les dépendances depuis le répertoire racine : `npm install`
2.  Naviguez vers la racine du projet.
3.  Créez la base de données SQLite initiale et appliquez le schéma : `npm run db:migrate:dev -w backend`
    *   Cela créera un fichier `dev.db` dans le répertoire `backend` (qui est gitignored).
4.  Assurez-vous d'avoir un fichier `.env` dans le répertoire `backend` (consultez `.env.example` s'il existe, ou créez-le selon le contenu de `backend/.env` décrit lors de la configuration).

## Exécution de l'Application

-   **Développement :** Exécutez `npm run dev` depuis le répertoire *racine*. Cela utilise `concurrently` pour démarrer simultanément les serveurs de développement backend (avec `nodemon`) et frontend.
-   **Production :**
    1.  Compilez le backend : `npm run build -w backend`
    2.  Démarrez le backend : `npm run start -w backend`
