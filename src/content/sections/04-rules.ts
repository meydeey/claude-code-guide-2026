export const section = {
  slug: "rules",
  title: "Rules",
  content: `
### Concept

Les Rules sont des fichiers markdown dans \`.claude/rules/\` qui permettent de **découper les instructions** au lieu de tout mettre dans CLAUDE.md.

### Pourquoi utiliser Rules plutôt que CLAUDE.md

| CLAUDE.md | Rules |
|-----------|-------|
| Chargé à chaque session | Chargé à chaque session |
| Un seul fichier | Multiples fichiers thématiques |
| Risque de devenir trop long | Organisation modulaire |
| Versionné en git | Versionné en git |

Les rules sont chargées **en plus** de CLAUDE.md. Elles permettent une organisation thématique sans gonfler le fichier principal.

### Structure recommandée

\`\`\`
.claude/rules/
+-- code-style.md          # Conventions de code
+-- git-workflow.md         # Règles git et commits
+-- testing.md              # Standards de test
+-- security.md             # Règles de sécurité
+-- architecture.md         # Patterns d'architecture
\`\`\`

### Exemple de rule

\`\`\`markdown
<!-- .claude/rules/git-workflow.md -->
# Règles Git

- Commits conventionnels obligatoires : feat:, fix:, chore:, docs:, refactor:
- Un commit = un changement logique, jamais de commits fourre-tout
- Jamais de push direct sur main ou master
- Toujours créer une feature branch
- Message de commit en anglais, max 72 caractères pour le titre
- Body du commit optionnel mais recommandé pour les changements complexes
\`\`\`

### Différence avec Skills

| Rules | Skills |
|-------|--------|
| Chargées automatiquement à chaque session | Chargées à la demande ou auto-détectées |
| Instructions générales always-on | Workflows spécifiques |
| Courtes et directives | Peuvent être détaillées |
| Pas de frontmatter YAML | Frontmatter YAML obligatoire |

**Règle de base** : si l'instruction s'applique à quasi toutes les tâches -> Rule. Si c'est un workflow spécifique -> Skill.
`,
};
