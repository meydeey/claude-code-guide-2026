export const section = {
  slug: "agents",
  title: "Agents (Sub-agents)",
  content: `
### Concept

Un agent (sub-agent) est une instance Claude séparée qui travaille dans son propre contexte window. Le principal agent peut déléguer des tâches à un sub-agent sans polluer sa propre mémoire de travail.

### Pourquoi utiliser des agents

- **Isolation du contexte** : le travail lourd (analyse de 50 fichiers) se fait dans un contexte séparé
- **Spécialisation** : chaque agent a ses propres instructions système
- **Parallélisation** : via Agent Teams, plusieurs agents travaillent simultanément
- **Protection** : le contexte du main session reste propre

### Création d'un agent

\`\`\`bash
# Interactif
/agents

# Ou créer le fichier manuellement
\`\`\`

**Emplacement :**
- \`.claude/agents/\` — agents projet (versionnés)
- \`~/.claude/agents/\` — agents personnels (disponibles partout)

### Format du fichier agent

\`\`\`markdown
<!-- .claude/agents/code-reviewer.md -->
---
name: code-reviewer
description: Reviews code for quality, security, and performance. Use after implementing a feature or before creating a PR.
model: sonnet
tools:
  - Read
  - Grep
  - Glob
  - Bash(npm run lint *)
  - Bash(npm run test *)
---

# Code Reviewer

Tu es un code reviewer senior. Ton travail est de :

1. Analyser les fichiers modifiés récemment
2. Vérifier la qualité du code (lisibilité, maintenabilité)
3. Identifier les problèmes de sécurité potentiels
4. Vérifier que les tests existent et sont pertinents
5. Suggérer des améliorations concrètes

## Standards
- Fonctions < 50 lignes
- Complexité cyclomatique < 10
- Pas de any en TypeScript
- Pas de console.log en production

## Output
Produire un rapport structuré avec :
- Bloquants (à corriger avant merge)
- Warnings (à considérer)
- Suggestions (nice to have)
\`\`\`

### Frontmatter YAML — Champs disponibles

| Champ | Description |
|-------|-------------|
| \`name\` | Nom de l'agent (devient la commande slash) |
| \`description\` | Quand utiliser cet agent (crucial pour l'auto-detection) |
| \`model\` | Modèle à utiliser (opus, sonnet, haiku) |
| \`tools\` | Liste des outils autorisés |
| \`allowedMcpServers\` | Serveurs MCP accessibles |
| \`maxTurns\` | Nombre max d'interactions |

### Restreindre les outils d'un agent

\`\`\`yaml
tools:
  - Read           # Lecture de fichiers
  - Grep           # Recherche dans le code
  - Glob           # Pattern matching de fichiers
  - Bash(npm *)    # Uniquement les commandes npm
\`\`\`

Ne PAS donner \`Write\` ou \`Edit\` à un agent de review — il doit analyser, pas modifier.

### Agent Teams (expérimental)

Activation via variable d'environnement :
\`\`\`bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
\`\`\`

Permet à une session de coordonner plusieurs agents travaillant en parallèle, chacun avec son propre contexte indépendant.

### Erreur fréquente

**Le contenu du fichier agent est un SYSTEM PROMPT, pas un user prompt.** C'est l'erreur n°1 quand on crée des agents. Le fichier définit le comportement et l'identité de l'agent, pas la tâche à accomplir.
`,
};
