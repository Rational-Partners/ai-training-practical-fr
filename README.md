# Monorepo de Développement Assisté par IA

Ce projet est un monorepo contenant une application backend et frontend, configuré pour le développement assisté par IA.

## Démarrage Rapide

1.  **Installer les dépendances :**
    Naviguez vers le répertoire racine du projet et exécutez :
    ```bash
    npm install
    ```

2.  **Configurer la base de données :**
    Naviguez vers le répertoire backend et exécutez la migration initiale :
    ```bash
    cd backend
    # Appliquer les modifications du schéma à la base de données
    npx prisma migrate dev --name init
    # Remplir la base de données avec des données d'exemple
    npx prisma db seed
    cd ..
    ```
    *Remarque : Si vous rencontrez des problèmes, assurez-vous que SQLite est installé ou ajustez le schéma Prisma (`backend/prisma/schema.prisma`) pour votre base de données préférée.*

3.  **Lancer les serveurs de développement :**
    Dans le répertoire racine, démarrez les serveurs frontend et backend avec :
    ```bash
    npm run dev
    ```
    Cette commande lancera les deux serveurs simultanément. Le backend sera généralement accessible sur `http://localhost:5001` et le frontend sur `http://localhost:5000` (ou les prochains ports disponibles, selon la configuration).

Vous devriez maintenant pouvoir accéder à l'application frontend dans votre navigateur et interagir avec l'API backend.
