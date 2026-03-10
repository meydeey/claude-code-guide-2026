export const section = {
  slug: "skills",
  title: "Commands -> Skills",
  content: `
### Evolution (Mars 2026)

Les **Commands** ont été fusionnées dans les **Skills**. Un fichier dans \`.claude/commands/deploy.md\` et un skill dans \`.claude/skills/deploy/SKILL.md\` créent tous les deux la commande \`/deploy\` et fonctionnent de la même manière.

Les fichiers existants dans \`.claude/commands/\` continuent de fonctionner.

### Skills — Le système actuel

Les Skills sont des capacités modulaires et réutilisables qui étendent les connaissances de Claude. Elles suivent le standard ouvert **Agent Skills** (agentskills.io), compatible avec Claude Code, Cursor, Gemini CLI, Codex CLI, et d'autres.

### Emplacement

- \`.claude/skills/\` — skills projet
- \`~/.claude/skills/\` — skills personnels (toutes sessions)
- Via plugins — skills installés depuis des marketplaces

### Structure d'un skill

\`\`\`
.claude/skills/mon-skill/
+-- SKILL.md              # Instructions + frontmatter (obligatoire)
+-- templates/            # Templates optionnels
|   +-- component.tsx
+-- scripts/              # Scripts utilitaires optionnels
|   +-- validate.sh
+-- examples/             # Exemples optionnels
    +-- usage.md
\`\`\`

### Format SKILL.md

\`\`\`markdown
---
name: deploy-workflow
description: Handles deployment to staging and production. Use when deploying, releasing, or when CI/CD is mentioned.
invocation: user
---

# Deploy Workflow

## Étapes de déploiement

### Staging
1. Vérifier que tous les tests passent : \\\`npm run test\\\`
2. Build le projet : \\\`npm run build\\\`
3. Déployer sur staging : \\\`npm run deploy:staging\\\`
4. Vérifier les smoke tests

### Production
1. Confirmer avec l'utilisateur avant de déployer en production
2. Créer un tag git : \\\`git tag v$(date +%Y%m%d%H%M%S)\\\`
3. Déployer : \\\`npm run deploy:prod\\\`
4. Monitorer les métriques pendant 15 minutes
\`\`\`

### Frontmatter YAML — Champs

| Champ | Description | Valeurs |
|-------|-------------|---------|
| \`name\` | Nom du skill (commande \`/name\`) | String |
| \`description\` | Quand l'utiliser (crucial pour la détection auto) | String |
| \`invocation\` | Qui déclenche le skill | \`user\` (slash command) / \`auto\` (Claude decide) / \`both\` |

### Invocation

- **\`user\`** : uniquement via \`/skill-name\` — l'utilisateur décide
- **\`auto\`** : Claude charge le skill automatiquement quand il détecte une tâche pertinente
- **\`both\`** : les deux méthodes fonctionnent

### Skills bundled (natifs)

Claude Code inclut des skills pré-installés :

| Commande | Fonction |
|----------|----------|
| \`/simplify\` | Review des fichiers modifiés : code reuse, qualité, efficacité. Spawne 3 agents en parallèle |
| \`/batch <instruction>\` | Orchestration de changements à grande échelle en parallèle (5 à 30 unités) |
| \`/debug [description]\` | Troubleshoot de la session en cours via les logs de debug |
| \`/loop [interval] <prompt>\` | Exécute un prompt récurrent sur un intervalle (polling, monitoring) |
| \`/claude-api\` | Charge la documentation API Claude pour le langage du projet |

### Bonnes pratiques pour les Skills

1. **Description précise** : la description est ce que Claude utilise pour décider d'activer le skill
2. **Concision du SKILL.md** : une fois chargé, chaque token est en compétition avec l'historique de conversation
3. **Progressive disclosure** : mettre l'essentiel dans SKILL.md, les détails dans des fichiers séparés
4. **Tester sur plusieurs modèles** : ce qui marche sur Opus peut nécessiter plus de détails pour Haiku
5. **Observer l'usage réel** : itérer en fonction de comment Claude utilise réellement le skill
`,
};
