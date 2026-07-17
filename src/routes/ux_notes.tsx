import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/page-header";
import { notePages } from "../lib/questions-content";

export const Route = createFileRoute("/ux_notes")({
  head: () => ({
    meta: [
      { title: "UX Notes — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Observation-led notes turned into editorial case studies on Excel workflows, compliance, cafés, and enterprise UX.",
      },
      { property: "og:title", content: "UX Notes — Himanshu Tiwari" },
      {
        property: "og:description",
        content: "Four editorial notes, each expanded into its own page.",
      },
      { property: "og:url", content: "/ux_notes" },
    ],
    links: [{ rel: "canonical", href: "/ux_notes" }],
  }),
  component: QuestionsPage,
});

function QuestionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="UX Notes"
        eyebrowColor="text-leaf"
        title={<>Observation-led stories, not boilerplate notes.</>}
        lede="Each note now has its own page, built to read like a short editorial case study. Minimal text, strong structure, and one clear idea per page."
      />

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {notePages.map((note, index) => (
            <Link
              key={note.slug}
              to={note.route}
              className="group flex min-h-[320px] flex-col rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{note.eyebrow}</span>
              </div>
              <div className="mt-10 h-px w-full bg-border" />
              <h2 className="mt-6 max-w-[12ch] font-serif text-3xl leading-[0.98] tracking-tight text-balance">
                {note.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/68">
                {note.lede}
              </p>
              <p className="mt-auto pt-8 text-sm leading-relaxed text-charcoal/82">
                {note.summary}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal/80">
                Read page
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
