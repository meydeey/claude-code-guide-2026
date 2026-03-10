export const section = {
  slug: "checklist-optimisation",
  title: "Checklist d'optimisation",
  content: `
### Setup initial

- [ ] Créer \`~/.claude/CLAUDE.md\` avec les préférences globales
- [ ] Créer \`~/.claude/settings.json\` avec les permissions de base
- [ ] Activer le schema JSON pour l'autocomplétion
- [ ] Configurer \`alwaysThinkingEnabled: true\`
- [ ] Définir le \`cleanupPeriodDays\` (365 recommandé pour \`/insights\`)
- [ ] Configurer la status line

### Par projet

- [ ] Exécuter \`/init\` puis affiner le CLAUDE.md
- [ ] Créer \`.claude/settings.json\` avec les permissions projet
- [ ] Créer \`.claude/settings.local.json\` pour les secrets (gitignored)
- [ ] Définir les hooks PreToolUse critiques (bloquer rm -rf, push main)
- [ ] Créer les agents spécifiques au projet
- [ ] Créer les skills pour les workflows récurrents
- [ ] Configurer \`.mcp.json\` pour les intégrations

### Maintenance hebdomadaire

- [ ] Exécuter \`/insights\` pour analyser les patterns
- [ ] Pruner CLAUDE.md (supprimer ce qui ne change pas le comportement)
- [ ] Mettre à jour les skills basés sur l'observation de l'usage réel
- [ ] Ajouter des rules pour les erreurs récurrentes
- [ ] Mettre à jour les plugins

### Règles d'or

1. **CLAUDE.md < 200 lignes** — au-delà, Claude ignore uniformément
2. **Compact à 50%** — ne pas attendre l'auto-compact
3. **Skills > CLAUDE.md** pour les workflows spécifiques
4. **Hooks > CLAUDE.md** pour les règles qui DOIVENT être respectées
5. **Ne jamais envoyer un LLM faire le travail d'un linter** — hooks déterministes
6. **Références > Copies** — pointer vers les fichiers au lieu de copier le contenu
7. **Tester les changements** — observer si le comportement de Claude change réellement
8. **\`/clear\` entre les tâches** — ne pas polluer le contexte entre tâches différentes
`,
};
