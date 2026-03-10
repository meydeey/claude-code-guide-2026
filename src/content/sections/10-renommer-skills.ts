export const section = {
  slug: "renommer-skills",
  title: "Renommer explicitement ses Skills",
  content: `
### Pourquoi c'est critique

Le champ \`name\` du frontmatter YAML détermine :
1. La commande slash (\`/nom-du-skill\`)
2. La détection automatique par Claude
3. La lisibilité dans \`/plugin\` et les logs

### Règles de nommage

\`\`\`yaml
# MAUVAIS
name: skill1
name: mon-truc
name: a

# BON
name: deploy-staging
name: code-review
name: generate-api-tests
\`\`\`

**Conventions recommandées :**
- **Format gerund (verbe-ing)** pour décrire l'activité : \`testing-patterns\`, \`deploying-staging\`, \`reviewing-code\`
- **kebab-case** : tout en minuscules, tirets pour séparer
- **Descriptif** : le nom doit suffire à comprendre le skill sans lire la description
- **Unique** : pas de collision avec les commandes natives ou d'autres skills

### La description est aussi critique que le nom

Claude utilise la description pour décider d'activer automatiquement un skill. Une mauvaise description = le skill ne se déclenche jamais.

\`\`\`yaml
# MAUVAIS — Trop vague
description: Aide au déploiement

# BON — Spécifique avec triggers
description: Handles deployment to staging and production environments. Use when deploying, releasing, creating a release, or when CI/CD pipeline is mentioned.
\`\`\`

### Renommer un skill existant

1. Modifier le champ \`name\` dans le frontmatter de SKILL.md
2. Renommer le dossier pour correspondre
3. Vérifier que les références dans d'autres fichiers sont mises à jour
4. Tester avec \`/skill-name\` pour confirmer

### Organisation par domaine

\`\`\`
.claude/skills/
├── testing-patterns/        # Tests
├── deploy-workflow/         # Déploiement
├── api-design/              # Design d'API
├── db-migrations/           # Migrations DB
├── code-review-checklist/   # Review
└── monitoring-setup/        # Monitoring
\`\`\`
`,
};
