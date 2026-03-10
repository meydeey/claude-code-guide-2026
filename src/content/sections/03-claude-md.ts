export const section = {
  slug: "claude-md",
  title: "CLAUDE.md",
  content: `
### Principe fondamental

CLAUDE.md est le fichier que Claude lit **au début de chaque session**. C'est la mémoire persistante qui donne le contexte que Claude ne peut pas inférer du code seul.

### Hiérarchie de chargement

\`\`\`
1. ~/.claude/CLAUDE.md           -> Chargé TOUJOURS (global)
2. /projet/CLAUDE.md             -> Chargé pour ce projet
3. /projet/sous-dossier/CLAUDE.md -> Chargé à la demande (quand Claude travaille dans ce dossier)
\`\`\`

Pour les monorepos, chaque sous-projet peut avoir son propre CLAUDE.md. Claude les merge automatiquement via le mécanisme ancêtre + descendant.

### Limites connues (Mars 2026)

- Les LLM frontier suivent ~150-200 instructions de manière fiable
- Le system prompt de Claude Code contient déjà ~50 instructions internes
- **Objectif : garder CLAUDE.md sous 200 lignes** (60 lignes = idéal selon HumanLayer)
- Plus le fichier est long, plus Claude ignore les instructions **uniformément** (pas juste les dernières)

### Structure optimale — Le framework WHAT/WHY/HOW

\`\`\`markdown
# Nom du Projet

## WHAT — Contexte Projet
Description courte du projet et de sa raison d'être.

## Stack technique
- TypeScript / Next.js 15 / App Router
- Supabase (Auth + DB + Edge Functions)
- Tailwind CSS + shadcn/ui

## Architecture
src/
+-- app/          # Routes Next.js
+-- components/   # Composants React
+-- lib/          # Utilitaires, clients API
+-- types/        # Types TypeScript

## HOW — Commandes essentielles
- Build: \\\`npm run build\\\`
- Test single: \\\`npm test -- path/to/test\\\`
- Lint: \\\`npm run lint\\\`
- Type-check: \\\`npx tsc --noEmit\\\`

## Règles de code
- Composants fonctionnels React uniquement
- Server components par défaut
- Tailwind utilities, jamais de CSS custom
- Destructuring des imports

## Workflow Git
- Jamais push sur main directement
- Commits conventionnels: feat:, fix:, chore:
- Un commit = un changement logique
\`\`\`

### Bonnes pratiques critiques

**Ce qui va dans CLAUDE.md :**
- Commandes build/test/lint (Claude ne peut pas les deviner)
- Conventions de code qui ne sont PAS dans un linter
- Architecture et structure du projet
- Workflow git spécifique
- Patterns custom du projet

**Ce qui NE va PAS dans CLAUDE.md :**
- Règles de style que le linter gère déjà -> utiliser un hook post-edit
- Documentation détaillée -> utiliser des Skills
- Snippets de code -> utiliser des références \`@file:line\`
- Workflows spécifiques occasionnels -> utiliser des Skills
- Instructions que Claude suivrait naturellement

**Syntaxe d'import** — Pour modulariser :
\`\`\`markdown
Voir @README.md pour le contexte projet
Voir @docs/api-guide.md pour les conventions API
Instructions perso : @~/.claude/my-project-instructions.md
\`\`\`

### Anti-patterns à éviter

\`\`\`markdown
# MAUVAIS — Trop vague
Écris du bon code propre et bien testé.

# BON — Spécifique et actionnable
Chaque fonction publique DOIT avoir un test unitaire.
Les erreurs API retournent { error: string, code: number }.
Timeout par défaut : 5000ms pour les appels externes.
\`\`\`

\`\`\`markdown
# MAUVAIS — Snippet de code dans CLAUDE.md
Voici comment on fait un composant :
\`\`\`

\`\`\`markdown
# BON — Référence au fichier
Pattern composant : voir @src/components/Button.tsx
\`\`\`

### Commande /init

\`\`\`bash
/init
\`\`\`

Analyse le codebase, détecte build systems, test frameworks, et génère un CLAUDE.md de base. **Toujours raffiner après génération.**

### Maintenance continue

Traiter CLAUDE.md comme du code :
- Review quand Claude fait des erreurs -> la règle manque ou est mal formulée
- Pruner régulièrement -> si retirer une ligne ne change pas le comportement de Claude, la supprimer
- Tester les changements en observant le comportement de Claude
- Ajouter emphase si nécessaire : \`IMPORTANT:\`, \`YOU MUST\`, \`NEVER\`
`,
};
