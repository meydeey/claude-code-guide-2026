export const section = {
  slug: "skills",
  title: "Commands -> Skills",
  content: `
### Evolution (Mars 2026)

Les **Commands** ont ete fusionnees dans les **Skills**. Un fichier dans \`.claude/commands/deploy.md\` et un skill dans \`.claude/skills/deploy/SKILL.md\` creent tous les deux la commande \`/deploy\` et fonctionnent de la meme maniere.

Les fichiers existants dans \`.claude/commands/\` continuent de fonctionner.

### Skills — Le systeme actuel

Les Skills sont des capacites modulaires et reutilisables qui etendent les connaissances de Claude. Elles suivent le standard ouvert **Agent Skills** (agentskills.io), compatible avec Claude Code, Cursor, Gemini CLI, Codex CLI, et d'autres.

### Emplacement

- \`.claude/skills/\` — skills projet
- \`~/.claude/skills/\` — skills personnels (toutes sessions)
- Via plugins — skills installes depuis des marketplaces

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

## Etapes de deploiement

### Staging
1. Verifier que tous les tests passent : \\\`npm run test\\\`
2. Build le projet : \\\`npm run build\\\`
3. Deployer sur staging : \\\`npm run deploy:staging\\\`
4. Verifier les smoke tests

### Production
1. Confirmer avec l'utilisateur avant de deployer en production
2. Creer un tag git : \\\`git tag v$(date +%Y%m%d%H%M%S)\\\`
3. Deployer : \\\`npm run deploy:prod\\\`
4. Monitorer les metriques pendant 15 minutes
\`\`\`

### Frontmatter YAML — Champs

| Champ | Description | Valeurs |
|-------|-------------|---------|
| \`name\` | Nom du skill (commande \`/name\`) | String |
| \`description\` | Quand l'utiliser (crucial pour la detection auto) | String |
| \`invocation\` | Qui declenche le skill | \`user\` (slash command) / \`auto\` (Claude decide) / \`both\` |

### Invocation

- **\`user\`** : uniquement via \`/skill-name\` — l'utilisateur decide
- **\`auto\`** : Claude charge le skill automatiquement quand il detecte une tache pertinente
- **\`both\`** : les deux methodes fonctionnent

### Skills bundled (natifs)

Claude Code inclut des skills pre-installes :

| Commande | Fonction |
|----------|----------|
| \`/simplify\` | Review des fichiers modifies : code reuse, qualite, efficacite. Spawne 3 agents en parallele |
| \`/batch <instruction>\` | Orchestration de changements a grande echelle en parallele (5 a 30 unites) |
| \`/debug [description]\` | Troubleshoot de la session en cours via les logs de debug |
| \`/loop [interval] <prompt>\` | Execute un prompt recurrent sur un intervalle (polling, monitoring) |
| \`/claude-api\` | Charge la documentation API Claude pour le langage du projet |

### Bonnes pratiques pour les Skills

1. **Description precise** : la description est ce que Claude utilise pour decider d'activer le skill
2. **Concision du SKILL.md** : une fois charge, chaque token est en competition avec l'historique de conversation
3. **Progressive disclosure** : mettre l'essentiel dans SKILL.md, les details dans des fichiers separes
4. **Tester sur plusieurs modeles** : ce qui marche sur Opus peut necessiter plus de details pour Haiku
5. **Observer l'usage reel** : iterer en fonction de comment Claude utilise reellement le skill
`,
};
