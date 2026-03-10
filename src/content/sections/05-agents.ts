export const section = {
  slug: "agents",
  title: "Agents (Sub-agents)",
  content: `
### Concept

Un agent (sub-agent) est une instance Claude separee qui travaille dans son propre contexte window. Le principal agent peut deleguer des taches a un sub-agent sans polluer sa propre memoire de travail.

### Pourquoi utiliser des agents

- **Isolation du contexte** : le travail lourd (analyse de 50 fichiers) se fait dans un contexte separe
- **Specialisation** : chaque agent a ses propres instructions systeme
- **Parallelisation** : via Agent Teams, plusieurs agents travaillent simultanement
- **Protection** : le contexte du main session reste propre

### Creation d'un agent

\`\`\`bash
# Interactif
/agents

# Ou creer le fichier manuellement
\`\`\`

**Emplacement :**
- \`.claude/agents/\` — agents projet (versionnes)
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

1. Analyser les fichiers modifies recemment
2. Verifier la qualite du code (lisibilite, maintenabilite)
3. Identifier les problemes de securite potentiels
4. Verifier que les tests existent et sont pertinents
5. Suggerer des ameliorations concretes

## Standards
- Fonctions < 50 lignes
- Complexite cyclomatique < 10
- Pas de any en TypeScript
- Pas de console.log en production

## Output
Produire un rapport structure avec :
- Bloquants (a corriger avant merge)
- Warnings (a considerer)
- Suggestions (nice to have)
\`\`\`

### Frontmatter YAML — Champs disponibles

| Champ | Description |
|-------|-------------|
| \`name\` | Nom de l'agent (devient la commande slash) |
| \`description\` | Quand utiliser cet agent (crucial pour l'auto-detection) |
| \`model\` | Modele a utiliser (opus, sonnet, haiku) |
| \`tools\` | Liste des outils autorises |
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

Ne PAS donner \`Write\` ou \`Edit\` a un agent de review — il doit analyser, pas modifier.

### Agent Teams (experimental)

Activation via variable d'environnement :
\`\`\`bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
\`\`\`

Permet a une session de coordonner plusieurs agents travaillant en parallele, chacun avec son propre contexte independant.

### Erreur frequente

**Le contenu du fichier agent est un SYSTEM PROMPT, pas un user prompt.** C'est l'erreur n°1 quand on cree des agents. Le fichier definit le comportement et l'identite de l'agent, pas la tache a accomplir.
`,
};
