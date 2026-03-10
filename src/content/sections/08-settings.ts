export const section = {
  slug: "settings",
  title: "Settings.json + Settings.local.json",
  content: `
### Différence fondamentale

| settings.json | settings.local.json |
|---------------|---------------------|
| Versionné en git | Gitignoré automatiquement |
| Partagé avec l'équipe | Personnel uniquement |
| Permissions communes | API keys, overrides locaux |
| Hooks projet | Hooks expérimentaux |

### Référence complète settings.json

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
| \`default\` | Demande permission à la première utilisation de chaque outil |
| \`acceptEdits\` | Auto-accepte les éditions de fichiers |
| \`bypassPermissions\` | Bypass total (nécessite \`--dangerously-skip-permissions\`) |
| \`plan\` | Mode plan uniquement, pas d'exécution |

### Syntaxe des règles de permission

\`\`\`
Tool                    # Autorise l'outil globalement
Tool(pattern)           # Autorise avec un pattern spécifique
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
    "Write(src/**/*.ts)",        // Écriture des .ts dans src/
    "WebFetch(api.example.com)", // Fetch depuis un domaine
    "MCP(github)",               // Serveur MCP github
    "Agent(code-reviewer)"       // Agent spécifique
  ],
  "deny": [
    "Read(.env*)",               // Bloquer les fichiers .env
    "Edit(package-lock.json)",   // Bloquer l'édition du lock
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

Ajouter la première ligne dans settings.json :
\`\`\`json
{
  "$schema": "https://json-schema.org/claude-code-settings.json"
}
\`\`\`

Active l'autocomplétion et la validation inline dans VS Code, Cursor, et tout éditeur supportant les JSON schemas.

### Backups automatiques

Claude Code crée automatiquement des backups horodatés des fichiers de configuration et conserve les 5 plus récents.
`,
};
