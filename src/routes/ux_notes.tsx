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
      title={<>Observations about how people experience products.</>}
      lede="An attempt to understand why certain product experiences feel intuitive, frustrating, or memorable."
    />

    <section className="mx-auto max-w-6xl space-y-6 px-6 pb-28">

      <div className="space-y-4">
        {notePages.map((note, index) => (
          <Link
            key={note.slug}
            to={note.route}
            className="group grid gap-6 rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)] transition-transform hover:-translate-y-1 md:grid-cols-[220px_1fr]"
          >
            <aside className="space-y-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} · {note.eyebrow}
              </div>

              <h2 className="max-w-[12ch] font-serif text-3xl leading-[0.98] tracking-tight text-balance">
                {note.title}
              </h2>
            </aside>

            <div className="flex flex-col justify-between border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm leading-relaxed text-charcoal/68">
                  {note.lede}
                </p>

                <p className="text-sm leading-relaxed text-charcoal/82">
                  {note.summary}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal/80">
                Read essay
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);
}
