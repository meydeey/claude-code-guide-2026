export const section = {
  slug: "settings",
  title: "Settings.json + Settings.local.json",
  content: `
### Difference fondamentale

| settings.json | settings.local.json |
|---------------|---------------------|
| Versionne en git | Gitignored automatiquement |
| Partage avec l'equipe | Personnel uniquement |
| Permissions communes | API keys, overrides locaux |
| Hooks projet | Hooks experimentaux |

### Reference complete settings.json

\`\`\`json
{
  "$schema": "https://json-schema.org/claude-code-settings.json",

  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(npx prettier *)",
      "Bash(npx tsc *)",
      "Read(*)",
      "Edit(*)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(**/.env)",
      "Read(**/.env.*)",
      "Read(~/.ssh/*)",
      "Read(~/.aws/*)",
      "Read(~/.config/gcloud/*)",
      "Bash(rm -rf *)",
      "Bash(git push * main)",
      "Bash(git push * master)"
    ],
    "ask": [
      "Bash(git push *)",
      "Bash(npm publish *)"
    ],
    "defaultMode": "default",
    "additionalDirectories": []
  },

  "sandbox": {
    "enabled": true,
    "allowNetworkAccess": ["api.anthropic.com", "registry.npmjs.org"]
  },

  "hooks": {
    "PreToolUse": [],
    "PostToolUse": [],
    "Stop": [],
    "SessionStart": []
  },

  "model": "claude-sonnet-4-6",
  "effortLevel": "medium",
  "alwaysThinkingEnabled": true,

  "attribution": {
    "commits": true,
    "pullRequests": true
  },

  "env": {
    "NODE_ENV": "development"
  },

  "spinnerTipsEnabled": false,
  "cleanupPeriodDays": 365,

  "statusLine": {
    "command": "echo '{\\"text\\": \\"'$(basename $(pwd))'\\"}'"
  },

  "availableModels": ["claude-sonnet-4-6", "claude-opus-4-6"]
}
\`\`\`

### Modes de permission

| Mode | Comportement |
|------|-------------|
| \`default\` | Demande permission a la premiere utilisation de chaque outil |
| \`acceptEdits\` | Auto-accepte les editions de fichiers |
| \`bypassPermissions\` | Bypass total (necessite \`--dangerously-skip-permissions\`) |
| \`plan\` | Mode plan uniquement, pas d'execution |

### Syntaxe des regles de permission

\`\`\`
Tool                    # Autorise l'outil globalement
Tool(pattern)           # Autorise avec un pattern specifique
Tool(pattern/*)         # Wildcard
\`\`\`

**Exemples par outil :**

\`\`\`json
{
  "allow": [
    "Bash(npm run *)",           // Toute commande npm run
    "Bash(git *)",               // Toute commande git
    "Read(src/**)",              // Lecture dans src/
    "Edit(src/**/*.ts)",         // Edition des .ts dans src/
    "Write(src/**/*.ts)",        // Ecriture des .ts dans src/
    "WebFetch(api.example.com)", // Fetch depuis un domaine
    "MCP(github)",               // Serveur MCP github
    "Agent(code-reviewer)"       // Agent specifique
  ],
  "deny": [
    "Read(.env*)",               // Bloquer les fichiers .env
    "Edit(package-lock.json)",   // Bloquer l'edition du lock
    "Bash(curl * | bash)"        // Bloquer pipe vers bash
  ]
}
\`\`\`

### settings.local.json — Usage

\`\`\`json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-...",
    "GITHUB_TOKEN": "ghp_..."
  },
  "permissions": {
    "allow": [
      "Bash(docker *)"
    ]
  },
  "alwaysThinkingEnabled": true,
  "effortLevel": "high"
}
\`\`\`

**Ne jamais commiter de secrets dans settings.json.** Utiliser settings.local.json ou le keychain OS.

### Schema JSON pour autocompletion

Ajouter la premiere ligne dans settings.json :
\`\`\`json
{
  "$schema": "https://json-schema.org/claude-code-settings.json"
}
\`\`\`

Active l'autocompletion et la validation inline dans VS Code, Cursor, et tout editeur supportant les JSON schemas.

### Backups automatiques

Claude Code cree automatiquement des backups horodates des fichiers de configuration et conserve les 5 plus recents.
`,
};
