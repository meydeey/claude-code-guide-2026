export const section = {
  slug: "architecture-configuration",
  title: "Architecture globale de configuration",
  content: `
### Hierarchie des fichiers (priorite decroissante)

\`\`\`
PRIORITE LA PLUS HAUTE
|
+-- Managed settings (entreprise)
|   +-- Serveur (console admin Claude.ai)
|   +-- MDM / registre Windows
|   +-- /etc/claude-code/managed-settings.json (Linux)
|       /Library/Application Support/ClaudeCode/managed-settings.json (Mac)
|
+-- User settings (personnel, global)
|   +-- ~/.claude/settings.json
|
+-- Project settings (partage en git)
|   +-- .claude/settings.json
|
+-- Local settings (personnel, pas en git)
|   +-- .claude/settings.local.json
|
+-- Legacy config
    +-- ~/.claude.json (preferences, OAuth, caches)
|
PRIORITE LA PLUS BASSE
\`\`\`

**Regle critique** : les settings de niveau superieur **ne peuvent pas** etre surchargees par les niveaux inferieurs. Si managed-settings.json bloque \`rm -rf\`, aucun fichier utilisateur ne peut l'autoriser.

### Structure de dossier projet optimisee

\`\`\`
mon-projet/
+-- CLAUDE.md                          # Memoire projet (charge a chaque session)
+-- .mcp.json                          # Configuration MCP (versionne)
+-- .claude/
    +-- settings.json                  # Hooks, permissions, env (versionne)
    +-- settings.local.json            # Overrides perso (gitignored)
    +-- agents/                        # Sub-agents personnalises
    |   +-- code-reviewer.md
    |   +-- researcher.md
    |   +-- qa-tester.md
    +-- skills/                        # Skills projet
    |   +-- testing-patterns/
    |   |   +-- SKILL.md
    |   +-- deploy-workflow/
    |       +-- SKILL.md
    +-- rules/                         # Regles modulaires
        +-- code-style.md
        +-- git-workflow.md
        +-- security.md
\`\`\`

### Structure personnelle globale

\`\`\`
~/.claude/
+-- CLAUDE.md                          # Instructions globales (toutes sessions)
+-- settings.json                      # Permissions, hooks globaux
+-- settings.local.json                # Overrides locaux
+-- agents/                            # Agents perso (disponibles partout)
+-- skills/                            # Skills perso (disponibles partout)
+-- rules/                             # Regles globales
+-- todos/                             # Fichiers TodoWrite
\`\`\`
`,
};
