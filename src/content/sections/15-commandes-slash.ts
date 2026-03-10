export const section = {
  slug: "commandes-slash",
  title: "Commandes slash essentielles",
  content: `
### Commandes natives

| Commande | Action |
|----------|--------|
| \`/help\` | Aide générale |
| \`/model\` | Sélection modèle + effort (flèches gauche/droite) |
| \`/context\` | Voir l'utilisation du contexte |
| \`/usage\` | Vérifier les limites du plan |
| \`/extra-usage\` | Configurer la facturation overflow |
| \`/config\` | Configurer les settings |
| \`/compact\` | Compacter le contexte manuellement |
| \`/clear\` | Reset complet du contexte |
| \`/hooks\` | Gestionnaire interactif de hooks |
| \`/agents\` | Créer/gérer les agents |
| \`/plugin\` | Gestionnaire de plugins |
| \`/mcp\` | Gérer les serveurs MCP |
| \`/permissions\` | Gérer les permissions |
| \`/sandbox\` | Activer/configurer le sandbox |
| \`/add-dir\` | Ajouter un répertoire au contexte |
| \`/insights\` | Analyse des sessions récentes (patterns, recommandations) |
| \`/debug\` | Troubleshoot la session en cours |
| \`/init\` | Générer un CLAUDE.md de base |
| \`/resume\` | Reprendre une session précédente |

### Commandes bundled (skills natifs)

| Commande | Action |
|----------|--------|
| \`/simplify\` | Review qualité en 3 agents parallèles |
| \`/batch <instruction>\` | Changements à grande échelle en parallèle |
| \`/loop [interval] <prompt>\` | Tâche récurrente programmée |
| \`/claude-api\` | Documentation API Claude |

### CLI flags utiles

\`\`\`bash
claude --resume              # Reprendre la session précédente
claude --new                 # Nouvelle session
claude --model claude-opus-4-6   # Forcer un modèle
claude --add-dir /path       # Ajouter un répertoire
claude -p "prompt"           # Mode non-interactif (print)
claude --output-format json  # Output JSON
claude --mcp-debug           # Debug des serveurs MCP
claude --from-pr 42          # Session liée à une PR
\`\`\`
`,
};
