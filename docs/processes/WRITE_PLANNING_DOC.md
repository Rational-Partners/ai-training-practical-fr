# Pratiques de Gestion de Projet

Ceci est un guide pour rédiger des fichiers `.md` de plans/gestion de projet, par ex. `documentation/planning/yyMMdda_projet_complexe.md`. Ils servent à réfléchir et documenter les décisions, décomposer les projets complexes en plusieurs étapes, et suivre les progrès.

Essayez de les garder concis, mais mettez l'accent et capturez clairement toutes les décisions, réponses et exigences de l'utilisateur.

Si vous commencez le document de zéro, stockez-le dans `documentation/planning/upcoming/`, et commencez par poser des questions à l'utilisateur sur les exigences de son projet pour clarifier les décisions clés. (Utilisez MCP ou exécutez `date +"%y%m%d"` d'abord pour obtenir la date actuelle pour nommer le fichier)

**Cycle de Vie du Document de Planification :**
- **Les nouveaux documents commencent dans `/upcoming/`** - pour la planification initiale et la collecte des exigences
- **Déplacez vers `/current/`** quand le développement actif commence
- **Déplacez vers `/completed/`** quand l'implémentation est terminée et livrée

voir aussi : `documentation/processes/WRITE_EVERGREEN_DOC.md` pour les instructions de rédaction de documentation evergreen


## Conventions de Nommage des Fichiers

Les documents de planification doivent suivre ce format de nommage : `yyMMdd[lettre]_description_en_minuscules.md`

- Préfixe de date : format `yyMMdd` (par ex., `250526` pour le 26 mai 2025)
- Lettre auto-incrémentée : ajoutez une lettre (a, b, c...) basée sur l'ordre de création dans la même journée
  - Le premier document créé un jour donné reçoit `a`
  - Le deuxième document reçoit `b`, et ainsi de suite
  - Cela assure que les fichiers se trient alphanuméquement par date de création
  - Parfois nous pouvons nous retrouver avec plusieurs documents avec le même jour et la même lettre (par ex. `250526a`, par ex. si plusieurs agents travaillaient simultanément dans des worktrees Git séparés) - ne vous inquiétez pas si cela arrive
- Description : Utilisez des mots en minuscules séparés par des underscores
  - Exception : Conservez la capitalisation correcte pour les acronymes comme `ToC` (Table des Matières)
  - Exemple : `250526a_ToC_resume_hierarchique_infobulles.md`

Mettez à jour ce document régulièrement pour garder les actions à jour. Quand vous le modifiez, faites des changements minimaux et ciblés, basés sur les nouvelles informations de l'utilisateur.

**Gestion de l'État du Document :**
- Mettez à jour l'emplacement du document au fur et à mesure que le travail progresse dans le cycle de vie
- Lors du déplacement de `/upcoming/` vers `/current/`, ajoutez la date actuelle et une mise à jour de statut
- Lors du déplacement de `/current/` vers `/completed/`, marquez la date de complétion et le statut final
- Mettez à jour les références croisées dans d'autres documents lors des déplacements


## Structure du Document

N'incluez pas une section `Date` en haut puisqu'elle est implicite dans le nom du fichier.


### Objectif, Contexte

- Énoncé(s) clair(s) du problème/objectif en haut, plus suffisamment de contexte/historique pour reprendre là où nous en étions
- Si l'objectif est complexe, détaillez en profondeur le comportement souhaité.


### Références

- Mentionnez les documents evergreen pertinents (dans `documentation/reference/`), d'autres documents de planification (dans `documentation/planning/current/`, `/upcoming/` ou `/completed/`), fichiers/fonctions de code, liens, ou tout autre chose qui pourrait fournir du contexte, avec un résumé d'une phrase pour chacun expliquant de quoi il s'agit/pourquoi c'est pertinent


### Principes, Décisions Clés

- Incluez tous les principes/approches ou décisions spécifiques qui ont été explicitement convenus avec l'utilisateur (au-delà des règles du projet, exemples, bonnes pratiques existants, etc).
- Au fur et à mesure que vous recevez de nouvelles informations de l'utilisateur, mettez à jour ce document pour qu'il soit toujours à jour.


### Architecture Technique

Pour les fonctionnalités complexes impliquant de nouveaux modèles de données, API ou intégrations :
- Incluez le schéma de base de données avec les décisions de conception clés documentées
- Définissez les endpoints API avec des exemples de format requête/réponse
- Documentez les points d'intégration avec les systèmes existants (auth, permissions, etc.)
- Décrivez l'architecture des composants et le flux de données pour les fonctionnalités frontend
- Documentez les alternatives techniques considérées et la justification de l'approche choisie
- Incluez les stratégies de gestion d'erreurs pour les scénarios d'échec clés

### Intégrations Externes

Si la fonctionnalité s'intègre avec des services externes, API ou fournisseurs tiers :
- Documentez les capacités et limitations du fournisseur
- Planifiez la configuration spécifique au fournisseur
- Incluez les stratégies de repli en cas d'indisponibilité du service
- Considérez la limitation de débit, les coûts et le suivi de l'utilisation
- Documentez les considérations d'authentification et de sécurité

### Gestion de Configuration

Pour les fonctionnalités nécessitant une nouvelle configuration :
- Documentez les variables d'environnement requises
- Planifiez les feature flags ou toggles si nécessaire
- Considérez les options de configuration par entreprise ou par utilisateur
- Incluez les considérations de déploiement et de staging

### Planification de l'Expérience Utilisateur

Pour les fonctionnalités destinées aux utilisateurs :
- Planifiez les états de chargement et les mécanismes de retour utilisateur
- Concevez les stratégies de messages d'erreur et l'accompagnement utilisateur
- Considérez les exigences d'accessibilité et de design responsive
- Planifiez les infobulles, textes d'aide et parcours d'onboarding
- Documentez les patterns d'interaction et le retour visuel

### Actions

- Décomposez en phases numérotées. Commencez par une v1 fonctionnelle très simple, et ajoutez progressivement de la complexité, en terminant chaque phase avec des tests passants et du code fonctionnel.
- Listez les actions dans l'ordre dans lequel elles doivent être traitées
- Utilisez le format : `### Phase 1 : Description de cette phase`
- Ne renumérotez pas les phases quand vous les déplacez - ajoutez de nouvelles phases selon les besoins
- Utilisez `[ ]` et `[x]` pour les cases à cocher indicant à faire/fait.
- Incluez des sous-tâches avec des critères d'acceptation clairs
- Référencez des documents spécifiques, fichiers/fonctions, exemples, liens, etc., pour qu'il soit clair exactement ce qui doit être fait
- Ajoutez explicitement des tâches pour écrire des tests automatisés, généralement avant d'écrire le code. (Peut-être un ou deux tests de bout en bout d'abord, puis ajoutez progressivement des tests plus détaillés au fur et à mesure de la complexité). Ajoutez explicitement des tâches pour exécuter les tests automatisés avant de terminer chaque étape.
- S'il y a des actions que l'utilisateur doit faire, ajoutez-les aussi, pour que nous puissions suivre les progrès et rappeler l'utilisateur.
- Si c'est un travail majeur, demandez à l'utilisateur si nous devrions avoir une action précoce pour créer une branche Git `yyMMdd[lettre]_projet_complexe` (et migrer les modifications). Si oui, ajoutez une action finale pour fusionner vers `main`.
- Ajoutez des actions pour mettre à jour le document de planification avec les progrès jusqu'ici à la fin de chaque phase
- Ajoutez des actions pour committer dans Git (peut-être à la fin de chaque phase, peut-être avec un sous-agent) - suivez les instructions dans `documentation/processes/GIT_COMMITS.md`
- Ajoutez des actions pour s'arrêter et revoir avec l'utilisateur quand approprié, par ex. quand nous arrivons à un bon point d'arrêt, pour vérifier manuellement les changements de l'interface, etc.
- Ajoutez des actions pour chercher sur le web quand approprié, par ex. lors du débogage, de la détermination des bonnes pratiques, de l'utilisation de bibliothèques tierces, etc.
- Ajoutez des actions pour mettre à jour les documents evergreen pertinents dans `documentation/reference/*.md` (voir `documentation/processes/WRITE_EVERGREEN_DOC.md`).
- Si vous pensez qu'un nouveau document evergreen est nécessaire, demandez à l'utilisateur
- Dites explicitement d'utiliser des sous-agents pour les tâches encapsulées ou lorsque la tâche produira beaucoup de contenu verbeux, par ex. vérification d'erreurs ou sortie de console de navigateur avec Playwright MCP, recherche
- Ajoutez une action finale pour déplacer le document vers `documentation/planning/completed/` et committer.
- Posez-moi trois questions de clarification qui ne sont pas mentalement exigeantes pour vous aider à comprendre les hypothèses et ma réflexion.

Exemple d'action (pas besoin d'inclure les mots `TODO` ou `FAIT` explicitement, puisque les cases à cocher `[ ]` capturent cela) :

```
### Phase 1 : Description de haut niveau de cette phase
- [ ] Ceci est une ligne de description d'action de premier niveau
  - [ ] Elle peut avoir des sous-points qui sont cochés
    - Vous pouvez ajouter des notes à puces avec des détails/contexte supplémentaires pour aider à planifier et façonner les actions futures

### Phase 2 : Une autre phase majeure
- ✅ Cette phase a déjà été terminée
  - ✅ Cette étape a déjà été terminée
    - 📔 Vous pourriez journaliser les découvertes utiles/inattendues quand vous mettez à jour les progrès des tâches terminées
  - ❌ Cette étape a été ignorée
```

# Annexe

Ajoutez tout autre contexte important ici, incluant :

**Détails Techniques :**
- Schémas de base de données complets avec explications des champs
- Exemples de format de requête/réponse API
- Exemples de configuration et configuration d'environnement
- Extraits de code d'intégration et patterns

**Contexte d'Implémentation :**
- Résumé de recherches web
- Données d'exemple et scénarios de test
- Tests pertinents et approches de validation
- Contexte riche, citations et contexte des conversations avec l'utilisateur

**Documentation des Décisions :**
- Approches alternatives considérées mais écartées
- Compromis techniques et justification des solutions choisies
- Comparaisons de fournisseurs ou choix technologiques
- Considérations de performance, sécurité ou scalabilité

**Exigences Utilisateur :**
- User stories ou scénarios détaillés
- Diagrammes de workflow ou parcours utilisateur
- Règles métier et exigences de validation
