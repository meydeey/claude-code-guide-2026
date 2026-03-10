import {
  FolderTree,
  Settings,
  FileText,
  Scale,
  Bot,
  Wand2,
  Webhook,
  SlidersHorizontal,
  Puzzle,
  Tag,
  Gauge,
  Shield,
  Plug,
  Variable,
  Terminal,
  CheckSquare,
  type LucideIcon,
} from "lucide-react";

export interface Section {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  order: number;
  icon: LucideIcon;
}

export const sections: Section[] = [
  {
    slug: "architecture-configuration",
    title: "Architecture globale de configuration",
    shortTitle: "Architecture",
    description:
      "Hiérarchie des fichiers de configuration et structure de projet optimisée",
    order: 1,
    icon: FolderTree,
  },
  {
    slug: "configuration-generale",
    title: "Configuration générale",
    shortTitle: "Configuration",
    description: "Modèles, effort levels, thinking mode et status line",
    order: 2,
    icon: Settings,
  },
  {
    slug: "claude-md",
    title: "CLAUDE.md",
    shortTitle: "CLAUDE.md",
    description:
      "Mémoire persistante du projet : structure, bonnes pratiques et anti-patterns",
    order: 3,
    icon: FileText,
  },
  {
    slug: "rules",
    title: "Rules",
    shortTitle: "Rules",
    description: "Fichiers d'instructions modulaires dans .claude/rules/",
    order: 4,
    icon: Scale,
  },
  {
    slug: "agents",
    title: "Agents (Sub-agents)",
    shortTitle: "Agents",
    description:
      "Instances Claude séparées avec contexte isolé et spécialisation",
    order: 5,
    icon: Bot,
  },
  {
    slug: "skills",
    title: "Commands → Skills",
    shortTitle: "Skills",
    description:
      "Capacités modulaires et réutilisables suivant le standard Agent Skills",
    order: 6,
    icon: Wand2,
  },
  {
    slug: "hooks",
    title: "Hooks",
    shortTitle: "Hooks",
    description:
      "Déclencheurs déterministes sur les 14 événements du cycle de vie",
    order: 7,
    icon: Webhook,
  },
  {
    slug: "settings",
    title: "Settings.json + Settings.local.json",
    shortTitle: "Settings",
    description: "Référence complète des fichiers de configuration",
    order: 8,
    icon: SlidersHorizontal,
  },
  {
    slug: "plugins-marketplaces",
    title: "Plugins & Marketplaces",
    shortTitle: "Plugins",
    description:
      "Packages de skills, agents et hooks installables depuis des catalogues",
    order: 9,
    icon: Puzzle,
  },
  {
    slug: "renommer-skills",
    title: "Renommer explicitement ses Skills",
    shortTitle: "Nommer ses Skills",
    description:
      "Conventions de nommage et descriptions pour une détection optimale",
    order: 10,
    icon: Tag,
  },
  {
    slug: "modeles-performance",
    title: "Modèles & Performance",
    shortTitle: "Performance",
    description:
      "Gestion du contexte, compaction, prompt caching et Tool Search",
    order: 11,
    icon: Gauge,
  },
  {
    slug: "securite-sandbox",
    title: "Sécurité & Sandbox",
    shortTitle: "Sécurité",
    description: "Sandbox natif, hardening et isolation par DevContainers",
    order: 12,
    icon: Shield,
  },
  {
    slug: "mcp",
    title: "MCP (Model Context Protocol)",
    shortTitle: "MCP",
    description: "Connexion à des outils et services externes via MCP",
    order: 13,
    icon: Plug,
  },
  {
    slug: "variables-environnement",
    title: "Variables d'environnement",
    shortTitle: "Variables d'env",
    description: "Variables essentielles pour configurer Claude Code",
    order: 14,
    icon: Variable,
  },
  {
    slug: "commandes-slash",
    title: "Commandes slash essentielles",
    shortTitle: "Commandes",
    description: "Commandes natives, skills bundled et CLI flags",
    order: 15,
    icon: Terminal,
  },
  {
    slug: "checklist-optimisation",
    title: "Checklist d'optimisation",
    shortTitle: "Checklist",
    description:
      "Setup initial, par projet, maintenance hebdomadaire et règles d'or",
    order: 16,
    icon: CheckSquare,
  },
];

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function getAdjacentSections(slug: string): {
  prev: Section | undefined;
  next: Section | undefined;
} {
  const index = sections.findIndex((s) => s.slug === slug);
  return {
    prev: index > 0 ? sections[index - 1] : undefined,
    next: index < sections.length - 1 ? sections[index + 1] : undefined,
  };
}
