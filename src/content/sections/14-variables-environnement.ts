export const section = {
  slug: "variables-environnement",
  title: "Variables d'environnement",
  content: `
### Variables essentielles

| Variable | Description |
|----------|-------------|
| \`ANTHROPIC_API_KEY\` | Clé API Anthropic |
| \`CLAUDE_CODE_EFFORT_LEVEL\` | low / medium / high |
| \`CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING\` | 1 = désactive le thinking adaptatif |
| \`MAX_THINKING_TOKENS\` | Budget tokens thinking (quand adaptatif désactivé) |
| \`DISABLE_PROMPT_CACHING\` | 1 = désactive le cache prompt |
| \`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC\` | 1 = désactive telemetry, autoupdater, error reporting |
| \`DISABLE_TELEMETRY\` | 1 = désactive la télémétrie |
| \`DISABLE_AUTOUPDATER\` | 1 = désactive les mises à jour auto |
| \`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS\` | 1 = active les Agent Teams |

### Définir dans settings.json

\`\`\`json
{
  "env": {
    "NODE_ENV": "development",
    "DISABLE_TELEMETRY": "1",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
\`\`\`
`,
};
