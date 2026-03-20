# Plan : Implémentation de l'API Exemple de Tâches

Ce document décrit les phases et étapes impliquées dans la création de l'application exemple de gestion de tâches, incluant la configuration de l'interface frontend et le développement de l'API backend.

## Phase 1 : Configuration Frontend (Reproduction de l'interface de liste de tâches)

- [x] Analyser le composant original `TasksList` (`frontend/src/pages/apps/TasksList.tsx`)
- [x] Créer la nouvelle structure de répertoires (`frontend/src/pages/examples/tasks/`)
- [x] Créer le nouveau fichier de composant (`frontend/src/pages/examples/tasks/ExampleTaskList.tsx`)
- [x] Copier le contenu de `TasksList` vers `ExampleTaskList` et renommer le composant
- [x] Créer la nouvelle route `/examples/tasks/list` dans `frontend/src/routes.tsx`
- [x] Ajouter le lien initial dans la barre latérale (sous "Exemples" > menu déroulant "Fonctionnalités d'Exemple")
- [x] Simplifier le lien de la barre latérale (supprimer le menu déroulant, placer "Liste de Tâches" directement sous "Exemples")

## Phase 2 : Configuration de la Base de Données Backend

- [x] Définir le schéma Prisma pour le modèle `ExampleTask` et les enums `TaskStatus`/`TaskPriority`
- [x] Implémenter le schéma Prisma dans `backend/prisma/schema.prisma`
- [x] Créer le script de seed `backend/prisma/seed.ts` avec les données initiales
- [x] Configurer `backend/package.json` (entrée `prisma.seed`) pour le seeding
- [x] Exécuter la migration initiale de la base de données (`npx prisma migrate dev`)
- [x] Exécuter le script de seed de la base de données (`npx prisma db seed`)
- [x] Mettre à jour le `README.md` racine avec les étapes de migration et de seed
- [x] Mettre à jour `docs/QUICKSTART.md` avec les étapes de migration et de seed
- [x] Ajouter l'alias de script npm `db:seed` dans `backend/package.json`

## Phase 3 : Implémentation de l'API Backend (Opérations de Lecture)

- [x] Créer les fichiers placeholder pour Repository, Service, Controller et Routes
- [x] Implémenter les fonctions Repository (`findTasks`, `findTaskById`) dans `exampleTask.repository.ts`
- [x] Implémenter les fonctions Service (`getAllTasks`, `getTaskById`) dans `exampleTask.service.ts`
- [x] Implémenter les fonctions Controller (`handleGetAllTasks`, `handleGetTaskById`) dans `exampleTask.controller.ts`
- [x] Implémenter l'utilitaire `asyncHandler` dans `backend/src/utils/asyncHandler.ts`
- [x] Implémenter les Routes (`GET /`, `GET /:id`) avec `asyncHandler` dans `exampleTask.routes.ts`
- [x] Intégrer `exampleTaskRoutes` dans `backend/src/server.ts` sous `/api/examples/tasks`

## Phase 4 : Implémentation de l'API Backend (Opérations d'Écriture)

- [x] Implémenter les fonctions Repository (`createTask`, `updateTask`, `deleteTask`)
- [x] Implémenter les fonctions Service (`createTask`, `updateTask`, `deleteTask`)
- [x] Ajouter la validation des entrées pour les requêtes POST/PUT (par ex., avec `express-validator`)
- [x] Implémenter les fonctions Controller (`handleCreateTask`, `handleUpdateTask`, `handleDeleteTask`)
- [x] Implémenter les Routes (`POST /`, `PUT /:id`, `DELETE /:id`)

## Phase 5 : Intégration Frontend

- [x] Refactorer `ExampleTaskList.tsx` pour récupérer les données depuis le endpoint `/api/examples/tasks`
- [x] Implémenter la gestion d'état pour les tâches dans le composant frontend
- [ ] Connecter les actions de l'interface (par ex., bouton « Nouvelle Tâche ») au endpoint POST
- [ ] Implémenter la fonctionnalité de mise à jour du statut de tâche via le endpoint PUT (marquer comme terminée/non terminée)
- [ ] Implémenter la fonctionnalité de suppression de tâches via le endpoint DELETE
- [ ] Permettre la modification d'une tâche (en remplaçant le bouton voir)
