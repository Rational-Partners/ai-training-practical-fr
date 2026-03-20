# Standards de Développement API et Processus de Sûreté de Typage

## Objectif

Ce processus garantit que tous les nouveaux endpoints API maintiennent les standards de sûreté de typage, de validation et de documentation établis lors de l'implémentation complète de la validation API (Phase 1-6 terminées, atteignant 35% de couverture avec 68/193 endpoints validés).

## Quand Utiliser ce Processus

**Utilisez TOUJOURS ce processus lorsque vous :**
- Créez de nouveaux endpoints API
- Modifiez des endpoints API existants (modifications de la structure requête/réponse)
- Ajoutez de nouveaux gestionnaires de routes ou contrôleurs
- Mettez à jour la documentation API

**Ce processus s'applique à :**
- Le développement d'API backend
- Les mises à jour du client API frontend
- Les modifications de contrat API
- Les mises à jour de documentation

## Standards Requis pour Tous les Endpoints API

### 1. Exigences de Sûreté de Typage

**REQUIS :** Chaque nouvel endpoint DOIT inclure :
- **Des schémas de validation Zod** pour les paramètres de requête, le corps et les réponses
- **Des interfaces TypeScript** dérivées des schémas Zod
- **Une validation à l'exécution** utilisant un middleware de validation
- **Un format de réponse standardisé** : `{ success: boolean, data?: any, message?: string }`

**Exemple de pattern de schéma :**
```typescript
// Dans src/schemas/api.schemas.ts
export const CreateItemParamsSchema = z.object({
  id: UUIDSchema
});

export const CreateItemRequestSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(1000).optional()
});

export const CreateItemResponseSchema = z.object({
  success: z.boolean().default(true),
  data: ItemSchema,
  message: z.string().optional()
});
```

### 2. Exigences du Middleware de Validation

**REQUIS :** Appliquez le middleware de validation à toutes les routes :
```typescript
router.post('/:id/items',
  authenticateToken,
  validateRequest({
    params: APISchemas.CreateItemParams,
    body: APISchemas.CreateItemRequest
  }),
  validateResponse(APISchemas.CreateItemResponse),
  controller.createItem
);
```

### 3. Standards des Contrôleurs

**REQUIS :** Les contrôleurs doivent retourner un format standardisé :
```typescript
// Réponse de succès
return res.status(200).json({
  success: true,
  data: result
});

// Réponse d'erreur
return res.status(400).json({
  success: false,
  error: "Échec de la validation",
  message: "La validation de la requête a échoué"
});
```

### 4. Exigences de Tests

**REQUIS :** Chaque endpoint doit avoir :
- **Des tests de validation des paramètres** (UUID invalides, champs requis manquants)
- **Des tests de validation du corps de requête** (longueur des champs, types de données, contraintes)
- **Des tests de validation du schéma de réponse** utilisant les schémas Zod
- **Des tests d'authentification/autorisation** le cas échéant
- **Des tests de scénarios d'erreur** (codes de statut 404, 400, 401, 403, 500)

## Processus d'Implémentation Étape par Étape

### Étape 1 : Concevoir le Contrat API
1. Définir la structure requête/réponse
2. Identifier les exigences de validation
3. Considérer les implications de sécurité
4. Planifier les scénarios d'erreur

### Étape 2 : Créer les Schémas Zod
1. Ajouter les schémas dans `/backend/src/schemas/api.schemas.ts`
2. Suivre les conventions de nommage existantes : `[Action][Ressource][Type]Schema`
3. Inclure des règles de validation complètes
4. Ajouter les schémas à l'objet d'export `APISchemas`

### Étape 3 : Implémenter le Gestionnaire de Route
1. Ajouter la route au fichier routeur approprié
2. Appliquer le middleware d'authentification
3. Appliquer le middleware de validation avec les schémas requête/réponse
4. Implémenter le contrôleur en suivant le format de réponse standardisé

### Étape 4 : Écrire des Tests Complets
1. Créer un fichier de test suivant le pattern : `/backend/src/__tests__/[domaine]-[fonctionnalite].test.ts`
2. Inclure tous les scénarios de validation
3. Tester l'authentification et l'autorisation
4. Vérifier la gestion des erreurs

### Étape 5 : Mettre à Jour la Documentation
1. Exécuter la génération de documentation : `npm run generate:docs`
2. Vérifier que l'endpoint apparaît dans la documentation générée
3. Mettre à jour toute documentation evergreen pertinente

## Outils d'Automatisation Disponibles

### Pour la Création de Nouveaux Endpoints
```bash
npm run add:endpoint  # Générateur interactif d'endpoint avec boilerplate de validation
```

### Pour la Validation et le Suivi
```bash
npm run validate:schemas      # Valider tous les schémas Zod
npm run analyze:api-coverage  # Vérifier la couverture de validation
npm run generate:docs         # Mettre à jour la documentation API
```

### Pour les Tests
```bash
npm test                      # Exécuter tous les tests incluant les tests des nouveaux endpoints
npm run type-check           # Vérifier la compilation TypeScript
```

## Portes de Qualité et Processus de Revue

### Avant la Revue de Code
**Checklist Développeur :**
- [ ] Schémas Zod créés et exportés
- [ ] Middleware de validation appliqué à la route
- [ ] Contrôleur retournant le format de réponse standardisé
- [ ] Tests complets écrits et passants
- [ ] Documentation générée et mise à jour
- [ ] Aucune erreur de compilation TypeScript

### Pendant la Revue de Code
**Checklist Réviseur :**
- [ ] Les schémas de validation suivent les patterns établis
- [ ] Les considérations de sécurité sont traitées (assainissement des entrées, autorisation)
- [ ] La gestion des erreurs est complète et conviviale
- [ ] Les tests couvrent les cas limites et les scénarios de sécurité
- [ ] La documentation est précise et complète

### Avant le Déploiement
**Vérification Finale :**
- [ ] Tous les tests passent incluant les tests des nouveaux endpoints
- [ ] L'analyse de couverture API montre une couverture de validation accrue
- [ ] L'impact sur les performances évalué (surcharge de validation <5ms)
- [ ] Revue de sécurité complétée pour les endpoints exposés à l'extérieur

## Patterns Courants et Exemples

### Opérations CRUD Standard
Référez-vous aux implémentations existantes :
- **Endpoints GET** : `/api/audits` (liste) et `/api/audits/:id` (unitaire)
- **Endpoints POST** : `/api/audits` (création)
- **Endpoints PUT** : `/api/audits/:id` (mise à jour)
- **Endpoints DELETE** : Suivre le pattern de la gestion d'accès externe

### Endpoints Critiques pour la Sécurité
Référencez les endpoints du portail externe pour :
- Les patterns d'assainissement des entrées
- La validation du contrôle d'accès
- La gestion d'erreurs qui ne divulgue pas d'informations sensibles

### Opérations sur les Fichiers
Référencez les endpoints de génération PDF pour :
- La validation des fichiers (nom de fichier, type, taille)
- La prévention du path traversal
- La manipulation sécurisée des fichiers

## Migration des Endpoints Existants

Pour mettre à jour les endpoints existants sans validation :

1. **Consultez le Guide de Migration** : `/documentation/reference/API_ENDPOINT_MIGRATION_GUIDE.md`
2. **Suivez l'Approche par Niveaux** : Utilisez la feuille de route dans `/documentation/planning/future/API_VALIDATION_ROADMAP.md`
3. **Utilisez l'Analyse de Couverture** : `npm run analyze:api-coverage` pour prioriser les endpoints

## Suivi et Maintenance

### Tâches Mensuelles
- [ ] Exécuter `npm run analyze:api-coverage` pour suivre les progrès
- [ ] Revoir l'impact de la validation sur les performances
- [ ] Mettre à jour la documentation avec tout nouveau pattern

### Tâches Trimestrielles
- [ ] Revoir et mettre à jour ce document de processus
- [ ] Évaluer le besoin de nouveaux outils d'automatisation
- [ ] Évaluer les patterns de schéma pour des améliorations

## Voir Aussi

- `/documentation/reference/API_ENDPOINT_MIGRATION_GUIDE.md` - Procédures de migration détaillées
- `/documentation/reference/TYPE_SAFETY_IMPLEMENTATION_SUMMARY.md` - Vue d'ensemble du projet et réalisations
- `/documentation/planning/future/API_VALIDATION_ROADMAP.md` - Feuille de route pour les endpoints restants
- `/documentation/technical/backend/api/api-documentation.md` - Documentation API générée

## Métriques de Succès

**Objectifs Cibles :**
- **100% de couverture de validation** pour tous les nouveaux endpoints
- **<5ms de surcharge de validation** par requête
- **Zéro erreur de type à l'exécution** en production
- **Documentation toujours à jour** grâce à l'automatisation

**État Actuel :**
- 68/193 endpoints validés (35% de couverture)
- Tous les workflows critiques et endpoints exposés à l'extérieur sécurisés
- Outils d'automatisation en place pour la maintenance continue
- Feuille de route claire pour atteindre 100% de couverture

En suivant ce processus, nous nous assurons que tout développement API futur maintient les standards élevés de sûreté de typage, de sécurité et de documentation établis lors de l'implémentation complète de la validation.
