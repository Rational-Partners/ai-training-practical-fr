# Guide de Démarrage Rapide

## En Bref (Après le Clonage)

1.  **Installer toutes les dépendances :**
    ```bash
    # Exécuter depuis la racine du projet
    npm install
    ```
2.  **Configurer la base de données :**
    ```bash
    # Exécuter depuis la racine du projet
    npm run db:migrate:dev -w backend
    ```
3.  **Démarrer les serveurs de développement :**
    ```bash
    # Exécuter depuis la racine du projet
    npm run dev
    ```

---

Bienvenue dans le modèle de monorepo pour le développement assisté par IA !
Ce guide vous aidera à mettre le projet en route rapidement.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

*   **Node.js :** (Vérifiez `.nvmrc` ou le champ `engines` du `package.json` racine si une version recommandée est spécifiée). Nous recommandons d'utiliser [nvm](https://github.com/nvm-sh/nvm) pour gérer les versions de Node.
*   **npm :** (Généralement inclus avec Node.js)

## Étapes de Configuration

1.  **Cloner le dépôt :**
    ```bash
    git clone <url-de-votre-depot>
    cd <repertoire-du-depot>
    ```

2.  **Installer les dépendances :**
    Installez toutes les dépendances pour la racine, le backend et le frontend.
    ```bash
    npm install
    ```

3.  **Vérifier l'environnement backend (`backend/.env`) :**
    *   Naviguez vers le répertoire `backend`.
    *   Vérifiez que le fichier `.env` existe.
    *   Assurez-vous qu'il contient les bonnes valeurs pour `DATABASE_URL` et `BACKEND_PORT`. Ajustez le port si nécessaire.
        ```dotenv
        # backend/.env
        DATABASE_URL="file:./dev.db"
        BACKEND_PORT=3001
        ```

4.  **Vérifier l'environnement frontend (`frontend/.env.development` & `frontend/.env.production`) :**
    *   Naviguez vers le répertoire `frontend`.
    *   Vérifiez que les fichiers `.env.development` et `.env.production` existent.
    *   Vérifiez les variables de développement dans `.env.development`. **Assurez-vous que toutes les variables sont préfixées par `VITE_`** pour les exposer au frontend Vite. Au minimum, vérifiez l'URL de base de l'API :
        ```dotenv
        # frontend/.env.development
        VITE_API_BASE_URL=http://localhost:3001/api

        # Vérifiez les autres variables VITE_ requises par le template frontend (par ex., clés Firebase, Auth0)
        # VITE_FIREBASE_API_KEY=...
        ```

5.  **Créer, Migrer et Peupler la Base de Données :**
    Exécutez la migration Prisma initiale et peuplez la base de données depuis le répertoire **racine**. Cela créera le fichier de base de données SQLite (`backend/dev.db`), configurera les tables selon le schéma (`backend/prisma/schema.prisma`) et le remplira avec des données d'exemple.
    ```bash
    # Appliquer les modifications du schéma
    npm run db:migrate:dev -w backend
    # Remplir avec des données d'exemple
    npm run db:seed -w backend
    ```
    Vous n'avez besoin d'exécuter `migrate dev` que la première fois ou lorsque le schéma de la base de données change. Vous pouvez relancer `db:seed` à tout moment pour réinitialiser les données d'exemple.

## Exécution de l'Application

*   **Mode Développement :**
    Pour démarrer simultanément les serveurs de développement backend et frontend (avec rechargement à chaud), exécutez la commande suivante depuis le répertoire **racine** :
    ```bash
    npm run dev
    ```
    *   Le backend sera généralement accessible sur `http://localhost:3001` (ou le `BACKEND_PORT` que vous avez défini).
    *   Le frontend sera généralement accessible sur `http://localhost:3000` (ou le port défini dans le script `dev` de `frontend/package.json`) et devrait s'ouvrir automatiquement dans votre navigateur.

*   **Linting et Formatage :**
    Pour vérifier les problèmes de style de code et formater le code dans l'ensemble du projet, exécutez ces commandes depuis le répertoire **racine** :
    ```bash
    npm run lint
    npm run format
    ```

*   **Build pour la Production :**
    Pour créer des builds prêts pour la production :
    ```bash
    # Build du backend (sortie dans backend/dist/)
    npm run build -w backend

    # Build du frontend (sortie dans frontend/dist/)
    npm run build -w frontend
    ```

*   **Exécution en Production (Exemple) :**
    Après le build, vous démarreriez typiquement le serveur backend comme ceci :
    ```bash
    npm run start -w backend
    ```
    Le frontend buildé (`frontend/dist`) serait alors servi par un serveur de fichiers statiques (comme Nginx ou Caddy) ou hébergé sur une plateforme comme Vercel ou Netlify, configuré pour rediriger les requêtes API vers votre backend en cours d'exécution.

## Prochaines Étapes

Explorez les répertoires `backend/src` et `frontend/src` pour comprendre la structure du projet et commencer à construire votre application !
