"use client";

import Link from "next/link";
import { sections } from "@/config/navigation";
import { Badge } from "@/components/ui/badge";
import { Youtube, Twitter, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
      <div className="mb-12">
        <Badge variant="secondary" className="mb-4">
          Mars 2026
        </Badge>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          Optimiser sa config <span className="text-primary">Claude Code</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Documentation complète pour maîtriser Claude Code : architecture,
          CLAUDE.md, Agents, Skills, Hooks, Settings, MCP et plus.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Par <strong>Meydeey</strong> &mdash; Le Labo IA
        </p>

        <div className="flex items-center gap-3 mt-6">
          <Link
            href="/architecture-configuration"
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex items-center gap-2",
            )}
          >
            Commencer la lecture
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://www.youtube.com/@meydeey"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2",
            )}
          >
            <Youtube className="h-4 w-4 text-red-600" />
            YouTube
          </a>
          <a
            href="https://x.com/meydeey"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2",
            )}
          >
            <Twitter className="h-4 w-4" />
            @meydeey
          </a>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-6">Table des matières</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.slug}
              href={`/${section.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border p-4 hover:border-primary/30 hover:bg-[var(--surface)] transition-all"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    {String(section.order).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {section.shortTitle}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {section.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
