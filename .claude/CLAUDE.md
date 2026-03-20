# Directives du Projet

## Workflow : Utiliser des Sous-Agents pour les Tâches Complexes

**Déléguez le travail à des agents spécialisés autant que possible.** Cela améliore la qualité et réduit l'épuisement du contexte.

### Quand Déléguer

| Type de Tâche | Agent/Commande | Quand Utiliser |
|---------------|----------------|----------------|
| Exploration du code | Agent `Explore` | Trouver des fichiers, comprendre des patterns, répondre à « comment fonctionne X ? » |
| Recherche approfondie | `/research-deep` | Comprendre un domaine avant de planifier (mode scientifique/détective) |
| Planification d'implémentation | `/spec` | Avant de commencer toute fonctionnalité non triviale |
| Exécution de plans approuvés | `/build` | Après approbation du plan, pour orchestrer l'implémentation |
| Revue de code | `principal-code-reviewer` | Après avoir implémenté du code significatif |
| Commits Git | `/commit` | Quand prêt à committer les modifications |
| Débogage en production | `/debug-production` | Investigation d'erreurs de production |
| Tâches de recherche | Agent `general-purpose` | Recherche multi-étapes nécessitant l'utilisation d'outils |
| Recherche web | `/research` | Recherche de sujets sur internet |

### Comment Déléguer

```
# Pour l'exploration
Outil Task avec subagent_type="Explore" - "Trouver tous les endpoints API qui gèrent l'authentification utilisateur"

# Pour la planification
/spec - démarre une session de planification interactive

# Pour l'implémentation
/build - exécute le plan approuvé avec des agents spécialisés
```

### Principe Clé

**Ne faites pas manuellement ce qu'un agent peut faire mieux.** Si vous vous retrouvez à :
- Chercher dans de nombreux fichiers → Utilisez l'agent Explore
- Planifier une implémentation multi-étapes → Utilisez /spec
- Écrire du code significatif → Faites suivre par principal-code-reviewer

## Système de Compétences

Les compétences fournissent des connaissances de domaine automatiquement appliquées selon le contexte. Compétences clés :

| Compétence | S'applique Quand |
|------------|------------------|
| `portal-tailwind` | Travail sur les composants portail (préfixe tw- requis) |
| `prisma-migrations` | Modification du schéma de base de données (migration requise) |
| `api-development` | Création/modification d'endpoints API |
| `tdd-workflow` | Écriture de tests |
| `git-commits` | Commits de code |
| `local-debugging` | Débogage de problèmes de développement local |
| `mcp-tools` | Utilisation de cclsp pour le refactoring, Playwright pour les tests, GitHub MCP |

Les compétences sont dans `.claude/skills/` - lisez-les pour des indications détaillées.

## Règles Fondamentales

### Gestion des Serveurs et Processus
- Ne jamais exécuter `npm run dev` ni démarrer de serveurs - l'utilisateur les lance séparément
- Ne jamais redémarrer de serveurs ni tuer de processus sans permission
- Ne jamais exécuter de commandes npm/npx sans permission (sauf `prisma generate`)

### Qualité du Code
- Concentrez-vous sur le problème spécifique - ne corrigez pas les problèmes tangentiels
- Faites uniquement des modifications minimales et ciblées
- Ne réécrivez jamais des fichiers entiers sans instruction explicite
- Utilisez le logging intégré (`debug`), jamais `console.log`
- Incluez le logging de débogage derrière des feature flags de développement

### Modifications de Base de Données
- **TOUJOURS** créer des migrations lors de la modification de schema.prisma
- Voir la compétence `prisma-migrations` pour le workflow complet
- Ne jamais faire de modifications pouvant perdre des données sans demander

### Gestion des Fichiers
- Ne jamais créer de fichiers d'analyse/recherche aléatoires dans les répertoires du code source
- Les documents de suivi de projet (checklists de test, notes d'implémentation) vont dans `documentation/planning/current/`
- Utilisez `/tmp/` UNIQUEMENT pour les fichiers véritablement éphémères (sortie de débogage, fichiers temporaires non nécessaires ultérieurement)
- Toute documentation permanente va dans `documentation/` uniquement sur demande

### Contrôle de Version
- Ne jamais pousser vers git sans permission explicite
- Ne jamais stager vers git sans permission explicite
- Utiliser la commande `/commit` pour le workflow de commit approprié

### Tests et Déploiement
- Ne pas exécuter les tests automatiquement - demander à l'utilisateur de les lancer
- Ne jamais déployer sans permission explicite

## Processus de Recherche

Avant d'implémenter quoi que ce soit de non trivial :

1. **Comprendre le domaine** - utiliser `/research-deep` pour un territoire inconnu
2. **Rechercher dans le code source de manière approfondie** - utiliser l'agent Explore pour les recherches complexes
3. **Créer un plan détaillé** - utiliser `/spec` pour les fonctionnalités significatives
4. **Évaluer le niveau de confiance** - doit être à 95%+ avant d'implémenter
5. **Si en dessous de 95%**, continuer la recherche et réévaluer
6. **Détailler votre raisonnement** étape par étape pendant l'implémentation

## Références Rapides

### Commandes Disponibles
- `/workflow` - Référence rapide pour toutes les commandes et le flux recommandé
- `/research-deep` - Investigation approfondie d'un sujet (mode scientifique/détective)
- `/spec` - Planification interactive pour de nouvelles fonctionnalités
- `/build` - Exécuter les plans d'implémentation approuvés
- `/commit` - Workflow de commit avec vérification du build
- `/debug` - Déboguer les problèmes locaux
- `/debug-production` - Investiguer les erreurs de production
- `/catch-up` - Reconstruire le contexte depuis l'historique git
- `/standup` - Générer des résumés de travail
- `/retro` - Capturer les apprentissages du travail terminé
- `/research` - Recherche web rapide sur un sujet

### Compétences Clés
- `portal-tailwind` - Style Tailwind avec préfixe tw-
- `prisma-migrations` - Modifications du schéma de base de données
- `api-development` - Patterns d'API backend
- `local-debugging` - Emplacements des logs et erreurs courantes
