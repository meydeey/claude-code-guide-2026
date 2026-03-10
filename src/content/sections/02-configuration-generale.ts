export const section = {
  slug: "configuration-generale",
  title: "Configuration générale",
  content: `
### Modèle et Effort

Claude Code supporte plusieurs modèles avec des niveaux d'effort adaptatifs :

| Modèle | Usage optimal | Contexte |
|--------|--------------|----------|
| **Opus 4.6** | Raisonnement complexe, architecture, planning | 1M tokens (beta) |
| **Sonnet 4.6** | Coding quotidien, implementation, refactoring | 1M tokens (beta) |
| **Haiku 4.5** | Tâches rapides, hooks prompt, évaluations | Standard |
| **opusplan** | Hybrid : Opus pour plan, Sonnet pour exécution | Auto-switch |

**Effort levels** (Opus 4.6 & Sonnet 4.6) :
- \`low\` : tâches simples, rapide et économique
- \`medium\` : défaut pour Max/Team sur Opus
- \`high\` : raisonnement profond, tâches complexes

\`\`\`bash
# Changer le modèle en session
/model

# Ajuster l'effort via variable d'env
export CLAUDE_CODE_EFFORT_LEVEL=high

# Ou dans settings.json
{ "effortLevel": "high" }
\`\`\`

### Thinking Mode

Le mode thinking (raisonnement étendu) est critique pour la qualité :

\`\`\`json
// Dans settings.json
{ "alwaysThinkingEnabled": true }
\`\`\`

Raccourci en session : \`Option+T\` (Mac) pour toggle.

### Status Line personnalisée

Affiche des infos utiles en bas du terminal :

\`\`\`json
{
  "statusLine": {
    "command": "echo '{\\\"text\\\": \\\"'$(basename $(pwd))' | ctx: '$(echo $CLAUDE_CONTEXT_PERCENT)'%\\\"}'"
  }
}
\`\`\`
`,
};
