export const section = {
  slug: "mcp",
  title: "MCP (Model Context Protocol)",
  content: `
### Configuration

MCP permet à Claude Code de se connecter à des outils et services externes.

**Emplacements des configs MCP :**

| Fichier | Scope |
|---------|-------|
| \`~/.mcp.json\` | Global (toutes sessions) |
| \`.mcp.json\` | Projet (versionné en git) |
| \`.claude/settings.local.json\` | Local (pas versionné) |

### Format .mcp.json

\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "\${DATABASE_URL}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
    }
  }
}
\`\`\`

### Sécurité MCP

\`\`\`json
// Dans settings.json — ne PAS activer l'auto-enable des MCP projets
{ "enableAllProjectMcpServers": false }
\`\`\`

Pourquoi : les fichiers \`.mcp.json\` dans git peuvent être compromis. Un repo malveillant pourrait injecter des serveurs MCP malicieux.

### Toggle MCP en session

Utiliser \`@mention\` pour activer/désactiver un serveur MCP en cours de session, ou \`/mcp\` pour le menu.

### Timeouts MCP

Pour les serveurs lourds (DB, browser automation) :

\`\`\`bash
export MCP_TIMEOUT=60000                  # Timeout requête (ms)
export MCP_SERVER_STARTUP_TIMEOUT=30000   # Timeout démarrage (ms)
\`\`\`
`,
};
