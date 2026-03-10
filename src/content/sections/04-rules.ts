export const section = {
  slug: "rules",
  title: "Rules",
  content: `
### Concept

Les Rules sont des fichiers markdown dans \`.claude/rules/\` qui permettent de **decouper les instructions** au lieu de tout mettre dans CLAUDE.md.

### Pourquoi utiliser Rules plutot que CLAUDE.md

| CLAUDE.md | Rules |
|-----------|-------|
| Charge a chaque session | Charge a chaque session |
| Un seul fichier | Multiples fichiers thematiques |
| Risque de devenir trop long | Organisation modulaire |
| Versionne en git | Versionne en git |

Les rules sont chargees **en plus** de CLAUDE.md. Elles permettent une organisation thematique sans gonfler le fichier principal.

### Structure recommandee

\`\`\`
.claude/rules/
+-- code-style.md          # Conventions de code
+-- git-workflow.md         # Regles git et commits
+-- testing.md              # Standards de test
+-- security.md             # Regles de securite
+-- architecture.md         # Patterns d'architecture
\`\`\`

### Exemple de rule

\`\`\`markdown
<!-- .claude/rules/git-workflow.md -->
# Regles Git

- Commits conventionnels obligatoires : feat:, fix:, chore:, docs:, refactor:
- Un commit = un changement logique, jamais de commits fourre-tout
- Jamais de push direct sur main ou master
- Toujours creer une feature branch
- Message de commit en anglais, max 72 caracteres pour le titre
- Body du commit optionnel mais recommande pour les changements complexes
\`\`\`

### Difference avec Skills

| Rules | Skills |
|-------|--------|
| Chargees automatiquement a chaque session | Chargees a la demande ou auto-detectees |
| Instructions generales always-on | Workflows specifiques |
| Courtes et directives | Peuvent etre detaillees |
| Pas de frontmatter YAML | Frontmatter YAML obligatoire |

**Regle de base** : si l'instruction s'applique a quasi toutes les taches -> Rule. Si c'est un workflow specifique -> Skill.
`,
};
