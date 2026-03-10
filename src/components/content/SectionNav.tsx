"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionNavProps {
  prev?: { slug: string; shortTitle: string } | null;
  next?: { slug: string; shortTitle: string } | null;
}

export function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <nav className="flex items-center justify-between mt-12 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center gap-2",
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">{prev.shortTitle}</span>
          <span className="sm:hidden">Précédent</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/${next.slug}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center gap-2",
          )}
        >
          <span className="hidden sm:inline">{next.shortTitle}</span>
          <span className="sm:hidden">Suivant</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center gap-2",
          )}
        >
          Retour à l&apos;accueil
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
