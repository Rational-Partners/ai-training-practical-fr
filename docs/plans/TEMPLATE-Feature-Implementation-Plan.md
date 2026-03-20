# MODÈLE : Plan d'Implémentation de [Nom de Votre Fonctionnalité]

<!--
Instructions :
1. Renommez ce fichier : Remplacez TEMPLATE par le nom spécifique de votre fonctionnalité (par ex., 02-Fonctionnalite-Preferences-Utilisateur.md).
2. Remplacez les espaces réservés : Recherchez et remplacez tous les espaces réservés entre crochets comme `[Nom de Votre Fonctionnalité]`, `[NomDuModele]`, `[NomDuService]`, `[CheminComposantUI]`, `[prefixe-route-api]`, `[modele-concerne]`, `[action-specifique]`, etc., par les noms réels correspondant à votre fonctionnalité.
3. Personnalisez la checklist : Ajoutez, supprimez ou modifiez les éléments de la checklist selon les exigences spécifiques de votre fonctionnalité. Toutes les phases ou étapes ne sont pas nécessairement applicables.
4. Complétez les détails : Ajoutez des détails plus spécifiques à chaque étape au fur et à mesure que vous comprenez mieux les exigences.
-->

## Vue d'Ensemble
Ce plan décrit les étapes pour implémenter la nouvelle fonctionnalité `[Nom de Votre Fonctionnalité]` dans l'application. Cette fonctionnalité permettra de `[brève description de ce que fait la fonctionnalité et son principal avantage]`.

## Objectifs
- [ ] `[Objectif Spécifique 1 - par ex., Définir et gérer [Type de Données] au niveau du [Contexte Pertinent]]`
- [ ] `[Objectif Spécifique 2 - par ex., Permettre aux utilisateurs de visualiser [Type de Données] dans la [Section UI Pertinente]]`
- [ ] `[Objectif Spécifique 3 - par ex., Permettre aux utilisateurs de saisir et sauvegarder [Données Spécifiques] pour [Contexte Pertinent]]`
- [ ] `[Objectif Spécifique 4 - par ex., Intégrer la capture de données de manière fluide dans le workflow [Nom du Workflow] existant]`
- [ ] `[Objectif Spécifique 5 - par ex., Assurer la persistance et la récupération des données]`
- [ ] *Ajoutez d'autres objectifs spécifiques selon les besoins*

## Checklist d'Implémentation

### Phase 1 : Schéma de Base de Données et Configuration (Si applicable)
- [ ] Définir le modèle `[NomDuModele1]` dans `prisma.schema` pour `[objectif du modèle]`.
- [ ] Définir le modèle `[NomDuModele2]` dans `prisma.schema` pour `[objectif du modèle]`.
- [ ] Ajouter les relations entre les nouveaux modèles et les modèles existants (`[ModeleExistant1]`, `[ModeleExistant2]`).
- [ ] Envisager l'ajout d'Enums pertinents (par ex., `[NomEnum]Status`, `[NomEnum]Type`).
```prisma
// Exemple d'extrait de schéma Prisma (optionnel)
// model [NomDuModele1] {
//   id        String   @id @default(cuid())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   name      String
//   // ... autres champs
//   [modeleExistant1]   [ModeleExistant1]? @relation(fields: [[modeleExistant1Id]], references: [id])
//   [modeleExistant1Id] String?
// }
```
- [ ] Exécuter `npx prisma migrate dev --name add_[nom_fonctionnalite]_models` pour appliquer les modifications.
- [ ] Exécuter `npx prisma generate` pour mettre à jour le client Prisma.
- [ ] Vérifier si une mise à jour du script de seed dans `backend/prisma/seed.ts` est nécessaire pour les données initiales.

### Phase 2 : API Backend - Logique Métier et Gestion des Données
- [ ] **Repository :** Créer/mettre à jour le repository (`[NomFonctionnalite].repository.ts` ou existant) avec les fonctions pour :
    - [ ] `find[NomDuModele]s` (ou fonction de requête pertinente).
    - [ ] `find[NomDuModele]ById`.
    - [ ] `create[NomDuModele]`.
    - [ ] `update[NomDuModele]`.
    - [ ] `delete[NomDuModele]`.
- [ ] **Service :** Créer/mettre à jour le service (`[NomFonctionnalite].service.ts` ou `[DomainePertinent]Service` existant) pour gérer la logique métier :
    - [ ] Fonction pour récupérer `[Type de Données]` (gérant potentiellement la création si inexistant).
    - [ ] Fonction pour créer/mettre à jour `[Type de Données]`.
    - [ ] Fonction pour supprimer `[Type de Données]`.
    - [ ] *Ajoutez d'autres fonctions de logique métier selon les besoins.*
```typescript
// Exemple d'extrait de Service (optionnel)
// async function get[TypeDeDonnees]ForUser(userId: string, resourceId: string): Promise<[NomDuModele] | null> {
//   // ... vérifier les permissions ...
//   const data = await db.[nomDuModele].findUnique({ where: { id: resourceId } });
//   // ... potentiellement enrichir les données ...
//   return data;
// }
```
- [ ] **Controller :** Créer/mettre à jour le controller (`[NomFonctionnalite].controller.ts` ou existant) pour gérer les requêtes API.
    - [ ] `handleGet[TypeDeDonnees]`.
    - [ ] `handleCreate[TypeDeDonnees]`.
    - [ ] `handleUpdate[TypeDeDonnees]`.
    - [ ] `handleDelete[TypeDeDonnees]`.
- [ ] **Routes :** Définir les routes API dans `[nomFonctionnalite].routes.ts` et les intégrer dans `backend/src/server.ts` (probablement sous `/api/[prefixe-route-api]`) :
    - [ ] `GET /api/[prefixe-route-api]/`
    - [ ] `GET /api/[prefixe-route-api]/:id`
    - [ ] `POST /api/[prefixe-route-api]/`
    - [ ] `PUT /api/[prefixe-route-api]/:id`
    - [ ] `DELETE /api/[prefixe-route-api]/:id`
    - *Ajustez les routes selon les besoins (par ex., ressources imbriquées).*
```typescript
// Exemple d'extrait de définition de Route (optionnel)
// import { Router } from 'express';
// import { handleGet[TypeDeDonnees], handleCreate[TypeDeDonnees] } from './[nomFonctionnalite].controller';
// import { validateCreate[TypeDeDonnees] } from './[nomFonctionnalite].validation';
// import { checkAuth } from '../middleware/auth'; // Exemple de middleware
//
// const router = Router();
//
// router.get('/', checkAuth, handleGet[TypeDeDonnees]);
// router.post('/', checkAuth, validateCreate[TypeDeDonnees], handleCreate[TypeDeDonnees]);
// // ... autres routes
//
// export default router;
```
- [ ] **Validation :** Ajouter la validation des entrées (par ex., avec `express-validator`) pour les requêtes `POST`/`PUT`.
```typescript
// Exemple d'extrait de Validation (optionnel)
// import { body } from 'express-validator';
//
// export const validateCreate[TypeDeDonnees] = [
//   body('name').notEmpty().withMessage('Le nom est requis').isString(),
//   body('score').optional().isInt({ min: 1, max: 10 }).withMessage('Le score doit être entre 1 et 10'),
//   // ... autres règles de validation
// ];
```
- [ ] **Permissions :** S'assurer que les vérifications d'autorisation appropriées sont implémentées (par ex., via middleware).
- [ ] **Tests :** Ajouter des tests unitaires/d'intégration de base pour les nouvelles méthodes de service et les endpoints API.

### Phase 3 : Interface Frontend - Affichage des Données et Interaction Utilisateur
- [ ] **Identifier le(s) composant(s) :** Localiser ou créer le(s) composant(s) React responsable(s) de `[l'affichage/la gestion de l'interface de la fonctionnalité]` (probablement dans `frontend/src/pages/[chemin-pertinent]/` ou `frontend/src/components/[chemin-pertinent]/`).
- [ ] **Récupérer les données :** Appeler le(s) endpoint(s) `GET` pertinent(s) de la Phase 2 lors du montage du composant ou quand les données sont nécessaires.
- [ ] **Afficher les données :** Rendre les données récupérées de manière appropriée.
```tsx
// Exemple d'extrait de Composant (optionnel)
// import React, { useState, useEffect } from 'react';
// import apiClient from '../utils/apiClient'; // Exemple de client API
//
// const [NomFonctionnalite]Component: React.FC<{ id: string }> = ({ id }) => {
//   const [data, setData] = useState<[TypeDeDonnees] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await apiClient.get(`/api/[prefixe-route-api]/${id}`);
//         setData(response.data);
//         setError(null);
//       } catch (err) {
//         setError('Échec du chargement des données.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]);
//
//   if (loading) return <div>Chargement...</div>;
//   if (error) return <div>Erreur : {error}</div>;
//   if (!data) return <div>Aucune donnée trouvée.</div>;
//
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       {/* ... rendre les autres champs de données ... */}
//       <button onClick={() => {/* Gérer la Modification */}}>Modifier</button>
//       <button onClick={() => {/* Gérer la Suppression */}}>Supprimer</button>
//     </div>
//   );
// };
//
// export default [NomFonctionnalite]Component;
```
- [ ] **Actions Utilisateur :** Implémenter les éléments d'interface (boutons, formulaires, modales) pour :
    - [ ] Créer de nouveaux `[Type de Données]`.
    - [ ] Modifier les `[Type de Données]` existants.
    - [ ] Supprimer les `[Type de Données]`.
    - [ ] Effectuer une `[action-specifique]` liée à la fonctionnalité.
- [ ] **Intégration API :** Connecter les actions de l'interface aux endpoints API backend correspondants (`POST`, `PUT`, `DELETE`) créés en Phase 2.
```typescript
// Exemple d'extrait d'intégration API (optionnel)
// const handleSave = async (updatedData: Partial<[TypeDeDonnees]>) => {
//   try {
//     const response = await apiClient.put(`/api/[prefixe-route-api]/${id}`, updatedData);
//     setData(response.data); // Mettre à jour l'état local
//     // Afficher un message de succès
//   } catch (err) {
//     // Afficher un message d'erreur
//     console.error(err);
//   }
// };
```
- [ ] **Gestion d'État :** Mettre à jour l'état local du composant ou le store Redux pour refléter la récupération et les mutations de données.
- [ ] **Gestion des Erreurs :** Afficher des messages appropriés si la récupération ou la sauvegarde des données échoue.
- [ ] **Routage :** Configurer les routes frontend nécessaires dans `frontend/src/routes.tsx` si de nouvelles pages sont impliquées.
- [ ] **Navigation :** Ajouter des liens/boutons aux endroits pertinents (par ex., barre latérale dans `frontend/src/components/sidebar/SidebarNav.tsx`, barres de navigation) pour accéder à la nouvelle fonctionnalité/interface.

### Phase 4 : Tests d'Intégration et Raffinement
- [ ] **Test de bout en bout 1 :**
    - `[Action 1 - par ex., Créer une nouvelle instance de [modele-concerne]]`
    - `[Action 2 - par ex., Naviguer vers la nouvelle interface de la fonctionnalité]`
    - `[Action 3 - par ex., Ajouter plusieurs éléments [Type de Données] via l'interface]`
    - `[Vérification 1 - par ex., Vérifier que les éléments sont correctement sauvegardés via des vérifications API ou un rafraîchissement de l'interface]`
    - `[Action 4 - par ex., Modifier/Supprimer des éléments et vérifier les changements]`
- [ ] **Test de bout en bout 2 (Si applicable) :**
    - `[Scénario impliquant une interaction avec d'autres fonctionnalités ou données]`
- [ ] **Cas limites :** Considérer les cas limites potentiels :
    - `[Cas limite 1 - par ex., Que se passe-t-il si des données liées sont supprimées ?]`
    - `[Cas limite 2 - par ex., Gestion des états vides ou de la configuration initiale]`
- [ ] **Revue UI/UX :** S'assurer que les nouveaux éléments d'interface sont intuitifs, accessibles et s'intègrent dans le design et le flux existants de l'application.

### Phase 5 : Documentation
- [ ] **Backend :** Mettre à jour/créer la documentation dans `backend/docs/` couvrant :
    - [ ] Modèles Prisma nouveaux/mis à jour.
    - [ ] Endpoints API nouveaux/mis à jour (routes, formats de requête/réponse, autorisation).
    - [ ] Logique de service ou algorithmes clés.
- [ ] **Frontend :** Mettre à jour/créer la documentation dans `frontend/docs/` couvrant :
    - [ ] Composants UI nouveaux/mis à jour (objectif, props, gestion d'état).
    - [ ] Flux d'interaction utilisateur.
    - [ ] Intégration avec la gestion d'état (slices/actions Redux si applicable).
- [ ] **Guide Utilisateur :** Ajouter une section au guide utilisateur principal (`README.md` ou guide dédié) expliquant comment utiliser la nouvelle fonctionnalité du point de vue de l'utilisateur final.
- [ ] **Document de Plan :** Référencer ce document de plan d'implémentation depuis les commentaires de code pertinents ou d'autres documentations.
