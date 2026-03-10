export const section = {
  slug: "plugins-marketplaces",
  title: "Plugins & Marketplaces",
  content: `
### Concept

Les plugins sont des packages qui regroupent skills, agents, hooks, et serveurs MCP en unités installables. Les marketplaces sont des catalogues qui hébergent ces plugins.

### Architecture d'un plugin

\`\`\`
mon-plugin/
├── .claude-plugin/
│   └── plugin.json          # Manifeste (obligatoire)
├── .mcp.json                # Config MCP (optionnel)
├── commands/                # Slash commands
├── agents/                  # Agents
├── skills/                  # Skills
│   └── mon-skill/
│       └── SKILL.md
├── hooks/                   # Scripts de hooks
└── README.md
\`\`\`

### plugin.json

\`\`\`json
{
  "name": "mon-plugin",
  "version": "1.0.0",
  "description": "Description du plugin",
  "author": "Meydeey",
  "homepage": "https://github.com/...",
  "skills": ["skills/mon-skill"],
  "agents": ["agents/reviewer.md"],
  "commands": ["commands/deploy.md"]
}
\`\`\`

### Marketplace officielle

La marketplace **claude-plugins-official** d'Anthropic est automatiquement disponible. Elle inclut :
- **LSP plugins** : TypeScript, Python, Rust, Go — active le Language Server Protocol pour jump-to-definition, find references, type errors
- **Plugins communautaires** vérifiés

### Commandes de gestion

\`\`\`bash
# Ajouter une marketplace
/plugin marketplace add anthropics/claude-code
/plugin marketplace add trailofbits/skills
/plugin marketplace add owner/repo

# Lister les marketplaces
/plugin marketplace list

# Supprimer une marketplace
/plugin marketplace remove nom

# Ouvrir le gestionnaire de plugins (interface tabulée)
/plugin

# Installer un plugin
/plugin install nom-plugin@marketplace

# Installer via npx skills
npx skills add owner/repo

# Valider un plugin
/plugin validate
\`\`\`

### Marketplaces notables (Mars 2026)

| Marketplace | Focus | Commande |
|-------------|-------|----------|
| **anthropics/claude-plugins-official** | Officiel Anthropic | Auto-disponible |
| **anthropics/claude-code** | Démos et exemples | \`add anthropics/claude-code\` |
| **anthropics/skills** | Skills officiels | \`add anthropics/skills\` |
| **trailofbits/skills** | Sécurité, audit, review | \`add trailofbits/skills\` |
| **VoltAgent/awesome-agent-skills** | 500+ skills communautaires | \`add VoltAgent/awesome-agent-skills\` |

### Scopes d'installation

- **User scope** : disponible dans tous tes projets
- **Local scope** : uniquement dans le repo actuel

### Diagnostics

\`\`\`bash
/plugin          # Onglet Errors pour voir les problèmes
/doctor          # Diagnostic complet
\`\`\`
`,
};
