"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/config/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <nav className="p-3 space-y-1" aria-label="Sections de documentation">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive =
            pathname === `/${section.slug}` || pathname === `/${section.slug}/`;

          return (
            <Link
              key={section.slug}
              href={`/${section.slug}`}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{section.shortTitle}</span>
              <span className="ml-auto text-xs text-muted-foreground/60">
                {section.order}
              </span>
            </Link>
          );
        })}
      </nav>
    </ScrollArea>
  );
}
