# Mise à Jour et Maintenance de la Documentation

Ce document décrit le processus pour maintenir la documentation du projet à jour au fur et à mesure que le code source évolue. La maintenance de la documentation doit être effectuée régulièrement pour garantir la précision et éviter la confusion.

## Voir aussi

- `documentation/DOCUMENTATION_ORGANISATION.md`
- `documentation/processes/WRITE_EVERGREEN_DOC.md` - Directives pour rédiger de la documentation evergreen
- `documentation/processes/WRITE_PLANNING_DOC.md` - Directives pour les documents de planification éphémères
- `documentation/processes/GIT_COMMITS.md` - Comment committer les mises à jour de documentation

## Quand Mettre à Jour la Documentation

Effectuez la maintenance de la documentation :
- Après l'implémentation de fonctionnalités majeures
- Lorsque les décisions architecturales changent
- Lorsque vous remarquez des informations obsolètes en travaillant
- Comme tâche de maintenance périodique (par ex., hebdomadaire/mensuelle)
- Avant les releases majeures ou les jalons importants

## Vue d'Ensemble du Processus

### Étape 1 : Revue Complète

Lisez toute la documentation clé pour comprendre l'état actuel :
1. `README.md` - Vue d'ensemble et objectifs du projet
2. `documentation/reference/*.md` - Toute la documentation evergreen
3. Fichiers récents dans `documentation/planning/*.md` - Dernières décisions et modifications
4. Fichiers de code clés et routes API
5. Fichiers de configuration et migrations

Utilisez des sous-agents si approprié pour maintenir l'efficacité de la fenêtre de contexte.

### Étape 2 : Identifier le Contenu Obsolète

Recherchez :
- **Décalages d'état des fonctionnalités** - La documentation dit « pas encore implémenté » mais le code existe
- **Dérive architecturale** - La documentation décrit d'anciennes approches remplacées par de nouvelles décisions
- **Fonctionnalités manquantes** - Nouvelles fonctionnalités non documentées
- **Références croisées cassées** - Liens vers des fichiers renommés/supprimés
- **Information dupliquée** - Même contenu à plusieurs endroits (consolider en un seul emplacement)
- **Sections incomplètes** - Documentation placeholder ou ébauche

### Étape 3 : Mettre à Jour la Documentation

Suivez ces principes :
1. **Source unique de vérité** - L'information ne doit exister qu'à un seul emplacement canonique
2. **Références croisées** - Liez vers la documentation canonique plutôt que de dupliquer le contenu
3. **États de transition** - Documentez à la fois l'état actuel et l'état cible pendant les migrations
4. **Statut clair** - Marquez les fonctionnalités/approches comme actuelles, dépréciées ou planifiées

#### Maintenance de la Documentation API

Lorsque les endpoints backend changent, assurez-vous que la documentation API reste à jour :

**Après l'ajout/modification d'endpoints :**
1. Mettre à jour les définitions de schéma (par ex., schémas Zod, modèles de base de données)
2. Ajouter le middleware de validation aux nouveaux endpoints
3. Régénérer la documentation à l'aide d'outils automatisés
4. Mettre à jour le contexte API optimisé pour les LLM si de nouveaux patterns émergent
5. Tester l'intégration LLM avec la documentation mise à jour (voir `documentation/processes/LLM_INTEGRATION.md`)

**Après l'intégration frontend :**
1. Mettre à jour la documentation des patterns frontend avec les nouvelles approches
2. Ajouter des exemples à la documentation d'intégration LLM spécifique au projet
3. Documenter tout nouveau pattern TypeScript ou framework

### Étape 4 : Suggérer tout document potentiellement manquant/obsolète à l'utilisateur

(Si l'utilisateur est d'accord, ajoutez/supprimez en conséquence).

### Étape 5 : Mettre à jour la documentation de configuration du projet si nécessaire

Vérifiez si les modifications affectent la configuration essentielle du projet ou le contexte des agents IA :
- Nouvelles commandes de build ou outils de débogage
- Modifications architecturales affectant la structure du projet
- Nouvelle documentation nécessitant des signalisations

#### Patterns de Mise à Jour Courants

**État d'Implémentation des Fonctionnalités**
```markdown
# Avant
**Fonctionnalités Manquantes**
- Intégration API pas encore implémentée
- Traitement des données non construit

# Après
**Fonctionnalités Implémentées**
- Intégration API avec service externe ✓
- Traitement des données avec filtrage avancé ✓

**Fonctionnalités Planifiées**
- Téléversement de fichiers
- Gestion des utilisateurs
```

**Modifications Architecturales**
```markdown
# Ajouter la documentation de transition
**État Actuel** : Le code utilise une architecture basée sur les composants
**État Cible** : Architecture modulaire de services (voir ARCHITECTURE.md)
**État de la Migration** : Le schéma existe, le code doit être mis à jour
```

**Références Croisées**
```markdown
# Au lieu de dupliquer les informations de configuration
voir `documentation/reference/CONFIGURATION.md` pour l'architecture de configuration
```

### Étape 6 : Suggérer un commit à l'utilisateur (en suivant `docs/GIT_COMMITS.md`)

1. **Auto-revue** - Relire toutes les modifications pour la cohérence
2. **Tester les liens** - Vérifier que les références croisées fonctionnent
3. **Vérifier les exemples** - S'assurer que les exemples de code correspondent à l'implémentation actuelle
4. **Message de commit** - Suivre les directives de `documentation/processes/GIT_COMMITS.md`

Exemple de message de commit :
```
docs: mise à jour de la documentation pour refléter l'implémentation actuelle

- Mise à jour de PROJECT_STATUS.md avec les fonctionnalités implémentées
- Reflet de la transition architecturale dans les documents pertinents
- Ajout de références croisées entre documentations liées
- Mise à jour de la documentation des composants avec la fonctionnalité actuelle
```

## Checklist de Qualité de la Documentation

Avant de committer, assurez-vous que :
- [ ] Aucune contradiction entre les documents
- [ ] Le statut reflète fidèlement l'implémentation
- [ ] Les références croisées sont valides
- [ ] Les états de transition sont clairement marqués
- [ ] Les sections « Voir aussi » sont complètes
- [ ] Les exemples correspondent aux patterns de code actuels
- [ ] Les détails techniques sont précis

## Pièges Courants

1. **Mise à jour excessive** - Ne modifiez pas les enregistrements historiques précis dans les documents de planification
2. **Manque de références** - Ajoutez toujours des liens « voir aussi » pour les sujets connexes
3. **Duplication** - Résistez à la copie de contenu ; liez vers la source canonique
4. **Statut vague** - Soyez spécifique sur ce qui est implémenté vs planifié
5. **Contexte manquant** - Expliquez pourquoi les modifications architecturales ont été faites
