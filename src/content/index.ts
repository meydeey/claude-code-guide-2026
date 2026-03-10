import { section as s01 } from "./sections/01-architecture-configuration";
import { section as s02 } from "./sections/02-configuration-generale";
import { section as s03 } from "./sections/03-claude-md";
import { section as s04 } from "./sections/04-rules";
import { section as s05 } from "./sections/05-agents";
import { section as s06 } from "./sections/06-skills";
import { section as s07 } from "./sections/07-hooks";
import { section as s08 } from "./sections/08-settings";
import { section as s09 } from "./sections/09-plugins-marketplaces";
import { section as s10 } from "./sections/10-renommer-skills";
import { section as s11 } from "./sections/11-modeles-performance";
import { section as s12 } from "./sections/12-securite-sandbox";
import { section as s13 } from "./sections/13-mcp";
import { section as s14 } from "./sections/14-variables-environnement";
import { section as s15 } from "./sections/15-commandes-slash";
import { section as s16 } from "./sections/16-checklist-optimisation";
import { section as s17 } from "./sections/17-sources";

export interface ContentSection {
  slug: string;
  title: string;
  content: string;
}

export const allSections: ContentSection[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
];

export function getContentBySlug(slug: string): ContentSection | undefined {
  return allSections.find((s) => s.slug === slug);
}
