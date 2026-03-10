export const section = {
  slug: "securite-sandbox",
  title: "Sécurité & Sandbox",
  content: `
### Sandbox natif

\`\`\`bash
/sandbox          # Activer le sandbox
\`\`\`

Le sandbox utilise des primitives OS-level :
- **macOS** : Seatbelt
- **Linux** : bubblewrap

**Comportement par défaut :**
- Écritures restreintes au répertoire de travail et sous-répertoires
- Lectures non restreintes (peut lire ~/.ssh, ~/.aws, etc.)
- Réseau limité aux domaines explicitement autorisés

### Hardening recommandé

Combiner deny rules + sandbox :

\`\`\`json
{
  "permissions": {
    "deny": [
      "Read(~/.ssh/*)",
      "Read(~/.aws/*)",
      "Read(~/.config/gcloud/*)",
      "Read(**/.env*)",
      "Edit(~/.bashrc)",
      "Edit(~/.zshrc)",
      "Edit(~/.profile)",
      "Bash(curl * | bash)",
      "Bash(wget * -O - | *)",
      "Bash(rm -rf *)",
      "Bash(git remote add *)",
      "Bash(git push * main)",
      "Bash(git push * master)"
    ]
  },
  "sandbox": {
    "enabled": true
  }
}
\`\`\`

**Sans sandbox**, les deny rules ne bloquent que les outils built-in de Claude — les commandes Bash les contournent. **Avec sandbox**, les mêmes règles sont appliquées au niveau OS.

### DevContainers (isolation complète)

Pour une isolation totale du filesystem host :
- L'agent tourne dans un container
- Pas d'accès au filesystem host, SSH keys, cloud credentials
- Voir \`trailofbits/claude-code-devcontainer\` pour une config préconfigurée
`,
};
