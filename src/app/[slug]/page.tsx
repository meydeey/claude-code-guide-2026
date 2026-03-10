import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  sections,
  getSectionBySlug,
  getAdjacentSections,
} from "@/config/navigation";
import { getContentBySlug } from "@/content";
import { SectionContent } from "@/components/content/SectionContent";
import { SectionNav } from "@/components/content/SectionNav";
import { Footer } from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) return {};

  return {
    title: section.title,
    description: section.description,
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  const content = getContentBySlug(slug);

  if (!section || !content) {
    notFound();
  }

  const { prev, next } = getAdjacentSections(slug);
  const Icon = section.icon;

  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 py-10 lg:py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="font-mono text-xs">
              {String(section.order).padStart(2, "0")} / 16
            </Badge>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
              {section.title}
            </h1>
          </div>
          <p className="text-muted-foreground">{section.description}</p>
        </div>

        <SectionContent content={content.content} />

        <SectionNav
          prev={prev ? { slug: prev.slug, shortTitle: prev.shortTitle } : null}
          next={next ? { slug: next.slug, shortTitle: next.shortTitle } : null}
        />
      </div>
      <Footer />
    </div>
  );
}
