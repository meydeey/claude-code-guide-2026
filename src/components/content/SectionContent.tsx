"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";
import type { Components } from "react-markdown";

interface SectionContentProps {
  content: string;
}

const components: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const isBlock = String(children).includes("\n") || match;

    if (isBlock) {
      return (
        <CodeBlock language={match?.[1]}>
          {String(children).replace(/\n$/, "")}
        </CodeBlock>
      );
    }

    return (
      <code
        className="bg-[var(--surface)] text-[var(--primary)] px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre({ children }) {
    return <>{children}</>;
  },
  table({ children }) {
    return (
      <div className="overflow-x-auto my-4 rounded-lg border border-border">
        <table className="w-full text-sm">{children}</table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="bg-[var(--surface)]">{children}</thead>;
  },
  th({ children }) {
    return (
      <th className="text-left p-3 font-semibold border-b-2 border-border text-sm">
        {children}
      </th>
    );
  },
  td({ children }) {
    return <td className="p-3 border-b border-border">{children}</td>;
  },
  blockquote({ children }) {
    return (
      <blockquote className="border-l-4 border-[var(--primary)] bg-[var(--surface)] px-4 py-3 rounded-r-lg my-4 [&>p]:m-0">
        {children}
      </blockquote>
    );
  },
  h3({ children, ...props }) {
    const id =
      typeof children === "string"
        ? children
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
        : undefined;
    return (
      <h3
        id={id}
        className="text-xl font-semibold mt-8 mb-4 scroll-mt-20"
        {...props}
      >
        {children}
      </h3>
    );
  },
  h4({ children, ...props }) {
    return (
      <h4 className="text-lg font-semibold mt-6 mb-3" {...props}>
        {children}
      </h4>
    );
  },
  a({ href, children }) {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-[var(--primary)] hover:underline"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  ul({ children }) {
    return <ul className="list-disc pl-6 space-y-1.5 my-3">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="list-decimal pl-6 space-y-1.5 my-3">{children}</ol>;
  },
  li({ children }) {
    return <li className="leading-relaxed">{children}</li>;
  },
  p({ children }) {
    return <p className="leading-relaxed my-3">{children}</p>;
  },
  strong({ children }) {
    return <strong className="font-semibold">{children}</strong>;
  },
  hr() {
    return <hr className="my-8 border-border" />;
  },
};

export function SectionContent({ content }: SectionContentProps) {
  return (
    <div className="prose-custom max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
