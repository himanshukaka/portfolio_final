import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  eyebrowColor?: string;
  title: ReactNode;
  lede?: ReactNode;
}

export function PageHeader({
  eyebrow,
  eyebrowColor = "text-terracotta",
  title,
  lede,
}: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
      <span
        className={`mb-6 block text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance lg:text-7xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty">
          {lede}
        </p>
      ) : null}
    </header>
  );
}