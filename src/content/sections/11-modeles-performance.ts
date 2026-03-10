export const section = {
  slug: "modeles-performance",
  title: "Modèles & Performance",
  content: `
### Gestion du contexte

La fenêtre de contexte de 1M tokens (beta) change la donne pour les gros projets, mais la gestion reste critique :

\`\`\`bash
/context          # Voir l'utilisation du contexte
/compact          # Compacter manuellement (faire à ~50% max)
/clear            # Reset complet du contexte (si changement de tâche)
/usage            # Vérifier les limites du plan
\`\`\`

### Quand compacter

- **Manuel** à 50% du contexte maximum (ne pas attendre l'auto-compact)
- \`/clear\` si changement complet de tâche
- **Ne pas laisser Claude dans la "dumb zone"** : entre 50% et 80% de contexte, la qualité se dégrade sensiblement

### Prompt Caching

Claude Code utilise automatiquement le prompt caching. Pour le désactiver :

\`\`\`bash
# Global
export DISABLE_PROMPT_CACHING=1

# Par modèle
export DISABLE_PROMPT_CACHING_SONNET=1
export DISABLE_PROMPT_CACHING_OPUS=1
\`\`\`

### Tool Search (MCP)

Si les outils MCP dépassent 10% du contexte, le Tool Search (lazy loading) se déclenche automatiquement, réduisant l'usage de contexte de jusqu'à 95%.

Pour le désactiver et précharger tous les outils MCP :
\`\`\`json
{ "toolSearch": { "enabled": false } }
\`\`\`
`,
};
