# Rédiger de la Documentation Evergreen

voir aussi :
- `documentation/processes/WRITE_PLANNING_DOC.md` - pour rédiger des documents de décision/planification éphémères
- `documentation/processes/UPDATE_HOUSEKEEPING_DOCUMENTATION.md` - pour maintenir la documentation à jour périodiquement


# Qu'est-ce qu'une documentation evergreen ?

Ceci concerne la rédaction de documentation evergreen et générale sur le fonctionnement du système.

Ces documents doivent être une description concise, claire, bien structurée, suffisamment complète et à jour des choses. Par « suffisamment complète », ils doivent couvrir la plupart des sujets importants, ne serait-ce que pour indiquer où trouver plus d'informations, ou le code lui-même.

Ils doivent se référer les uns aux autres, et éviter trop de chevauchement de contenu, de sorte que si une information change, nous n'ayons idéalement qu'un seul endroit à modifier dans la documentation.


# Format

Ils doivent être rédigés en Markdown, stockés dans `documentation/reference/NOM_DU_SUJET.md`.


## Structure du Document

Ils pourraient être organisés en sections similaires à celles ci-dessous. Utilisez votre jugement. Probablement seules quelques-unes seront pertinentes pour chaque document, n'hésitez pas à les renommer, etc.


### Introduction

Résumé de 2 phrases du sujet et de ce que le document couvre.

### Voir aussi

Liste à puces d'autres documents, fichiers de code, URLs ou autres ressources pertinentes qui fournissent des informations connexes ou plus de détails. Fournissez un résumé d'une phrase ou une explication de la pertinence de chacun.

Exemples de bonnes références croisées :
- `documentation/processes/WRITE_PLANNING_DOC.md` - pour des informations sur la rédaction de documents de décision/planification éphémères
- `components/blah.tsx` - implémentation des fonctionnalités décrites ici
- `documentation/planning/250526a_blah_detailed_planning.md` - contexte historique de décision sur le projet de construction de cette fonctionnalité

- URLs externes quand pertinent (par ex., documentation de bibliothèque)

Ajoutez des références vers et depuis ce nouveau document (par ex., dans le code pertinent, les documents de planification dans `documentation/planning/*.md`, etc) - utilisez un sous-agent pour cela

#### Bonnes Pratiques de Références Croisées

- **Mettez à jour `documentation/DOCUMENTATION_ORGANISATION.md`**
- **Liez vers la source canonique** (par ex., fonctions, fichiers, docs, urls, etc.) pour les informations détaillées plutôt que de dupliquer
- **Fournissez un contexte d'une phrase** avec chaque lien expliquant sa pertinence
- **Utilisez des chemins relatifs** pour les liens de documentation interne
- **Évitez la duplication de contenu** - si l'information existe ailleurs, liez-la


### Principes, Décisions Clés

- Incluez tous les principes/approches ou décisions spécifiques qui ont été explicitement convenus avec l'utilisateur (au-delà des règles du projet, exemples, bonnes pratiques existants, etc).
- Au fur et à mesure que vous recevez de nouvelles informations de l'utilisateur, mettez à jour ce document pour qu'il soit toujours à jour.

### [Fournissez quelques sections détaillées ici, selon le sujet]

Incluez selon le cas :
- vue d'ensemble de haut niveau, architecture
- patterns courants, guides pratiques
- exemples
- pièges à éviter
- limitations
- dépannage
- travaux futurs planifiés


### Documentation des Systèmes en Transition

Lors de la documentation de systèmes qui changent (par ex., migrations architecturales) :

1. **Distinguez clairement les états** :
   - **État Actuel** : Comment le système fonctionne aujourd'hui
   - **État Cible** : L'architecture future prévue
   - **État de la Migration** : Progrès et calendrier si connu

2. **Référencez les décisions** : Liez aux documents de planification ou ARCHITECTURE.md pour la justification

3. **Mettez à jour progressivement** : Au fur et à mesure que la migration progresse, mettez à jour la documentation

Exemple :
```markdown
## Architecture de la Base de Données

**État Actuel** : Utilise le stockage d'éléments décomposés (chaque élément HTML comme une ligne)
**État Cible** : Stockage de document en une seule ligne avec améliorations JSONB
**État de la Migration** : Schéma conçu, mises à jour du code en attente

voir `documentation/reference/ARCHITECTURE.md` pour la justification de la migration
```


### Indicateurs d'État

Utilisez des marqueurs cohérents dans toute la documentation :
- ✓ **Implémenté** - La fonctionnalité est terminée et fonctionnelle
- 🚧 **En Cours** - En cours de développement actif
- 📋 **Planifié** - Conçu mais pas encore commencé
- ⚠️ **Déprécié** - En cours de suppression progressive, à éviter

Exemple :
```markdown
## Fonctionnalités
- Authentification utilisateur ✓
- Téléversement de fichiers 🚧
- Recherche avancée 📋
- API héritée ⚠️ (voir la nouvelle architecture)
```


### Annexe

Ajoutez tout autre contexte important ici, par ex.
- données d'exemple
- autres informations qui devraient être capturées mais ne rentrent pas facilement dans les sections ci-dessus


# Maintenance

## Fréquence de Revue

La revue régulière de la documentation assure la précision :
- **Après les fonctionnalités majeures** - Mettre à jour immédiatement après l'implémentation
- **Pendant la maintenance** - Revue mensuelle recommandée
- **Quand obsolète** - Corriger immédiatement quand remarqué
- **Avant les jalons** - S'assurer que la documentation reflète l'état actuel

voir `documentation/processes/UPDATE_HOUSEKEEPING_DOCUMENTATION.md` pour le processus complet de maintenance

## Pièges Courants à Éviter

1. **Duplication d'information** - Crée une charge de maintenance quand les choses changent
2. **Descriptions de statut vagues** - Soyez spécifique sur l'état d'implémentation
3. **Références croisées manquantes** - Liez toujours vers la documentation connexe
4. **Exemples obsolètes** - Assurez-vous que les échantillons de code correspondent aux patterns actuels
5. **Transitions oubliées** - Mettez à jour la documentation au fur et à mesure des migrations

## Checklist de Qualité

Avant de committer la documentation :
- [ ] Les références croisées sont valides et utiles
- [ ] Les indicateurs de statut reflètent fidèlement l'implémentation
- [ ] Aucune contradiction avec d'autres documents
- [ ] Les exemples correspondent aux patterns de code actuels
- [ ] Les états de transition sont clairement marqués
- [ ] Les sections « Voir aussi » sont complètes
