export const section = {
  slug: "architecture-configuration",
  title: "Architecture globale de configuration",
  content: `
### Hiérarchie des fichiers (priorité décroissante)

\`\`\`
PRIORITÉ LA PLUS HAUTE
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
+-- Project settings (partagé en git)
|   +-- .claude/settings.json
|
+-- Local settings (personnel, pas en git)
|   +-- .claude/settings.local.json
|
+-- Legacy config
    +-- ~/.claude.json (préférences, OAuth, caches)
|
PRIORITÉ LA PLUS BASSE
\`\`\`

**Règle critique** : les settings de niveau supérieur **ne peuvent pas** être surchargées par les niveaux inférieurs. Si managed-settings.json bloque \`rm -rf\`, aucun fichier utilisateur ne peut l'autoriser.

### Structure de dossier projet optimisée

\`\`\`
mon-projet/
+-- CLAUDE.md                          # Mémoire projet (chargé à chaque session)
+-- .mcp.json                          # Configuration MCP (versionné)
+-- .claude/
    +-- settings.json                  # Hooks, permissions, env (versionné)
    +-- settings.local.json            # Overrides perso (gitignored)
    +-- agents/                        # Sub-agents personnalisés
    |   +-- code-reviewer.md
    |   +-- researcher.md
    |   +-- qa-tester.md
    +-- skills/                        # Skills projet
    |   +-- testing-patterns/
    |   |   +-- SKILL.md
    |   +-- deploy-workflow/
    |       +-- SKILL.md
    +-- rules/                         # Règles modulaires
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
+-- rules/                             # Règles globales
+-- todos/                             # Fichiers TodoWrite
\`\`\`
`,
};
