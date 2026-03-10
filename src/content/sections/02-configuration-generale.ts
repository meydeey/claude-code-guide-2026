export const section = {
  slug: "configuration-generale",
  title: "Configuration generale",
  content: `
### Modele et Effort

Claude Code supporte plusieurs modeles avec des niveaux d'effort adaptatifs :

| Modele | Usage optimal | Contexte |
|--------|--------------|----------|
| **Opus 4.6** | Raisonnement complexe, architecture, planning | 1M tokens (beta) |
| **Sonnet 4.6** | Coding quotidien, implementation, refactoring | 1M tokens (beta) |
| **Haiku 4.5** | Taches rapides, hooks prompt, evaluations | Standard |
| **opusplan** | Hybrid : Opus pour plan, Sonnet pour execution | Auto-switch |

**Effort levels** (Opus 4.6 & Sonnet 4.6) :
- \`low\` : taches simples, rapide et economique
- \`medium\` : defaut pour Max/Team sur Opus
- \`high\` : raisonnement profond, taches complexes

\`\`\`bash
# Changer le modele en session
/model

# Ajuster l'effort via variable d'env
export CLAUDE_CODE_EFFORT_LEVEL=high

# Ou dans settings.json
{ "effortLevel": "high" }
\`\`\`

### Thinking Mode

Le mode thinking (raisonnement etendu) est critique pour la qualite :

\`\`\`json
// Dans settings.json
{ "alwaysThinkingEnabled": true }
\`\`\`

Raccourci en session : \`Option+T\` (Mac) pour toggle.

### Status Line personnalisee

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
