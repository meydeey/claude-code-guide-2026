"use client";

import Link from "next/link";
import { Youtube, Twitter, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 lg:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden mr-2",
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="p-4 border-b border-border">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    IA
                  </span>
                </div>
                <span className="font-semibold text-sm">Le Labo IA</span>
              </Link>
            </div>
            <Sidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              IA
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-semibold text-sm leading-tight">
              Le Labo IA
            </span>
            <span className="text-[11px] text-muted-foreground leading-tight">
              Guide Claude Code 2026
            </span>
          </div>
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-1">
          <a
            href="https://www.youtube.com/@meydeey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-red-600 transition-colors" />
          </a>
          <a
            href="https://x.com/meydeey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </nav>
      </div>
    </header>
  );
}
