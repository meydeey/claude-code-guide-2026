"use client";

import { Youtube, Twitter } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">
              Retrouve plus de contenu sur YouTube et X
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Meydeey &mdash; Le Labo IA &bull; Mars 2026
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@meydeey"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
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
                buttonVariants({ variant: "outline", size: "sm" }),
                "flex items-center gap-2",
              )}
            >
              <Twitter className="h-4 w-4" />
              @meydeey
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
