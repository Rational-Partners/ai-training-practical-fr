# Directives pour les Commits Git

## Évaluation Initiale
Examinez le diff Git. Réfléchissez à la façon de regrouper les modifications en commits :
- Si on vous a demandé de faire les commits, faites-le, un à la fois.
- Sinon, suggérez simplement quels seraient les regroupements.

## Bonnes Pratiques de Commit

### Ne faites jamais rien de destructif

PAR-DESSUS TOUT, ne faites rien qui pourrait entraîner une perte de travail ou perturber des modifications pas encore committées, sauf si l'utilisateur vous le demande EXPLICITEMENT après l'avoir averti.


### Regroupement des modifications en commits
- Chaque commit devrait représenter une petite/moyenne fonctionnalité, ou une étape, ou un ensemble de modifications liées (par ex., ajuster plusieurs fichiers de documentation).
- Le code source devrait (idéalement) être dans un état fonctionnel après chaque commit
- Essayez de ne pas mélanger des modifications non liées

### Format des Messages de Commit
```
<type>: <sujet> (50 caractères max)

<corps> (optionnel, retour à la ligne à 72 caractères)
- Explication plus détaillée
- Puces pour les changements multiples
```

Types : feat, fix, docs, style, refactor, test, chore

### Gestion des Modifications Concurrentes
Remarque : d'autres agents peuvent modifier le code pendant que vous travaillez.
- Pour minimiser les interférences, enchaînez les opérations unstage/add/commit :
  ```bash
  git reset HEAD fichier-non-voulu && git add fichier-voulu && git commit -m "fix: résolution du bug d'authentification"
  ```
- Cela réduit la fenêtre pendant laquelle les modifications d'un autre agent pourraient interférer

### Notes Importantes
- Si le code est dans un état partiel/cassé, privilégiez les commits qui laissent le code fonctionnel
- Si vous rencontrez des conflits de fusion ou TOUT problème inattendu, arrêtez-vous et demandez immédiatement à l'utilisateur
- En cas de doute, demandez à l'utilisateur avant de continuer
- Lors de l'ajout de fichiers avec des caractères spéciaux, mettez le chemin entre guillemets : `git add "chemin/avec des espaces/fichier.txt"`
- Si vous faites simplement des commits dans les regroupements que vous jugez judicieux et qu'il n'y a pas de suppressions, vous n'avez pas besoin de me demander la permission de staging pour chaque commit.

## Sous-Agent

Exécutez ceci dans un sous-agent sauf s'il y a une bonne raison de ne pas le faire. Fournissez-lui beaucoup de contexte sur ce que nous avons fait pour l'aider à prendre de bonnes décisions et écrire un bon message de commit.
