export const section = {
  slug: "hooks",
  title: "Hooks",
  content: `
### Concept fondamental

Les Hooks sont des **déclencheurs déterministes** qui s'exécutent à des points précis du cycle de vie de Claude Code. Contrairement aux instructions CLAUDE.md qui sont des suggestions que le modèle peut ignorer, les hooks **garantissent l'exécution** à chaque fois.

### Les 14 événements (Mars 2026)

| Événement | Quand il se déclenche | Usage typique |
|-----------|----------------------|---------------|
| **SessionStart** | Démarrage, reprise, clear, compact | Injection de contexte, variables d'environnement |
| **UserPromptSubmit** | Soumission du prompt utilisateur (avant traitement) | Validation, logging, enrichissement |
| **PreToolUse** | Avant l'exécution d'un outil | Blocage de commandes dangereuses, validation |
| **PostToolUse** | Après l'exécution réussie d'un outil | Formatting, linting, logging |
| **PostToolUseFailure** | Après l'échec d'un outil | Diagnostic, retry logic |
| **PermissionRequest** | Quand Claude demande une permission | Auto-approval conditionnelle |
| **Notification** | Quand Claude envoie une notification | Desktop/Slack notification |
| **Stop** | Quand Claude termine sa réponse | Vérification de complétude, forcer la continuation |
| **SubagentSpawn** | Quand un sub-agent est créé | Logging, annonce TTS |
| **PreCompact** | Avant la compaction du contexte | Sauvegarde de l'état |
| **PostCompact** | Après la compaction | Re-injection de contexte |
| **PreClearConversation** | Avant le clear de conversation | Sauvegarde |
| **SessionPause** | Quand la session est mise en pause | Sauvegarde de session |
| **SessionResume** | Quand la session reprend | Restauration de contexte |

### Les 4 types de handlers

#### 1. Command (déterministe)
\`\`\`json
{
  "type": "command",
  "command": "npx prettier --write \\"$CLAUDE_TOOL_INPUT_FILE_PATH\\"",
  "timeout": 10
}
\`\`\`

#### 2. HTTP (webhook)
\`\`\`json
{
  "type": "http",
  "url": "https://mon-api.com/hook",
  "timeout": 15
}
\`\`\`

#### 3. Prompt (décision LLM single-turn)
\`\`\`json
{
  "type": "prompt",
  "prompt": "Évalue si cette commande Bash pourrait affecter l'environnement de production : $ARGUMENTS. Réponds UNIQUEMENT avec du JSON brut : {\\"decision\\": \\"allow\\"} ou {\\"decision\\": \\"block\\", \\"reason\\": \\"...\\"}",
  "timeout": 30
}
\`\`\`

#### 4. Agent (sub-agent avec outils)
\`\`\`json
{
  "type": "agent",
  "prompt": "Vérifie que des tests existent pour tous les fichiers modifiés. Utilise Read, Grep et Glob.",
  "timeout": 60
}
\`\`\`

### Codes de sortie (command hooks)

| Code | Comportement |
|------|-------------|
| **0** | Succès. Parse JSON depuis stdout |
| **2** | Erreur bloquante. stderr renvoyé à Claude comme instruction |
| **Autre** | Erreur non-bloquante. stderr affiché en mode verbose |

### JSON output (exit code 0)

\`\`\`json
{
  "block": true,
  "message": "Cannot edit on main branch. Create a feature branch first.",
  "additionalContext": "Info supplémentaire injectée dans le contexte de Claude"
}
\`\`\`

### Configuration dans settings.json

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\\"tool_name\\":\\"'$CLAUDE_TOOL_NAME'\\"}' | jq -r '.tool_name' | grep -q 'rm -rf' && echo '{\\"block\\":true,\\"message\\":\\"Utilise trash au lieu de rm -rf\\"}' >&2 && exit 2 || exit 0",
            "timeout": 5
          }
        ]
      },
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "[ \\"$(git branch --show-current)\\" != \\"main\\" ] || { echo '{\\"block\\": true, \\"message\\": \\"Cannot edit on main. Create a feature branch.\\"}' >&2; exit 2; }",
            "timeout": 5
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \\"$CLAUDE_TOOL_INPUT_FILE_PATH\\" 2>/dev/null; exit 0",
            "timeout": 10
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "L'assistant a-t-il complété TOUTES les tâches demandées et exécuté les tests ? Réponds UNIQUEMENT en JSON brut sans code fences : {\\"decision\\": \\"allow\\"} si tout est fait, {\\"decision\\": \\"block\\", \\"reason\\": \\"...\\"}",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
\`\`\`

### Hooks async (Janvier 2026+)

\`\`\`json
{
  "type": "command",
  "command": "node backup-script.js",
  "async": true,
  "timeout": 30
}
\`\`\`

Les hooks async s'exécutent en arrière-plan sans bloquer Claude.

### Variables d'environnement dans les hooks

- \`$CLAUDE_PROJECT_DIR\` : racine du projet
- \`$CLAUDE_TOOL_NAME\` : nom de l'outil en cours
- \`$CLAUDE_TOOL_INPUT_FILE_PATH\` : chemin du fichier cible
- \`$CLAUDE_CODE_REMOTE\` : "true" en environnement web distant
- \`\${CLAUDE_PLUGIN_ROOT}\` : racine du plugin (pour les hooks de plugins)

### Hooks dans le frontmatter de Skills/Agents

Les skills et agents peuvent déclarer leurs propres hooks :

\`\`\`yaml
---
name: my-skill
description: ...
hooks:
  PostToolUse:
    - matcher: "Edit|Write"
      hooks:
        - type: command
          command: "npm run lint --fix"
---
\`\`\`

### Commande interactive

\`\`\`bash
/hooks
\`\`\`

Ouvre le gestionnaire interactif pour voir, ajouter, et supprimer des hooks sans éditer les JSON.

### Désactiver temporairement

\`\`\`json
{ "disableAllHooks": true }
\`\`\`

Ou via le toggle dans \`/hooks\`.

### Hook profiles (runtime)

\`\`\`bash
export ECC_HOOK_PROFILE=minimal    # minimal | standard | strict
export ECC_DISABLED_HOOKS="hook1,hook2"
\`\`\`
`,
};
