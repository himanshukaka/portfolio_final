import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/bulk_paste_filtering")({
  head: () => ({
    meta: [
      { title: "The Feature Nobody Planned To Love — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A case study on how bulk paste filtering became the shortcut people relied on every day.",
      },
      {
        property: "og:title",
        content: "The Feature Nobody Planned To Love — Himanshu Tiwari",
      },
      {
        property: "og:description",
        content:
          "How a tiny productivity shortcut quietly became the product's signature experience.",
      },
      { property: "og:url", content: "/bulk_paste_filtering" },
    ],
    links: [{ rel: "canonical", href: "/bulk_paste_filtering" }],
  }),
  component: BulkPasteFilteringPage,
});

const evolution = [
  "Intelligent parsing",
  "Validation",
  "Duplicate detection",
  "Inline errors",
  "Instant filtering",
  "No uploads",
];

function BulkPasteFilteringPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Startup case study"
        eyebrowColor="text-marigold"
        title={
          <>
            The Feature Nobody Planned To Love
            <br />
            Bulk paste filtering.
          </>
        }
        lede="How a tiny productivity shortcut quietly became the product's signature experience."
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[30px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Problem
            </div>
            <p className="mt-4 max-w-md font-serif text-3xl leading-[1.02] tracking-tight text-balance">
              Every bulk action started with unnecessary work.
            </p>
            <div className="mt-6 rounded-[24px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffdf9_0%,#f6efe4_100%)] p-5 text-sm leading-relaxed text-charcoal/76">
              <div className="grid gap-2 text-center font-medium text-charcoal/80">
                <span>Excel</span>
                <span>↓</span>
                <span>Export IDs</span>
                <span>↓</span>
                <span>Format CSV</span>
                <span>↓</span>
                <span>Upload</span>
                <span>↓</span>
                <span>Filter</span>
                <span>↓</span>
                <span>Repeat</span>
              </div>
            </div>
          </article>

          <article className="rounded-[30px] border border-border bg-[#fbf8f3] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              My observation
            </div>
            <p className="mt-4 max-w-2xl font-serif text-4xl leading-[1.02] tracking-tight text-balance">
              Operations teams think in batches. Not individuals.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/72">
              Their work begins in Excel, not inside HRMS. The interface only becomes interesting
              when it respects the way the work already happens.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Solution
            </div>
            <p className="mt-4 max-w-sm font-serif text-4xl leading-[1.02] tracking-tight text-balance">
              One interaction. Zero uploads.
            </p>
          </div>
          <div className="rounded-[30px] border border-border bg-[#fcfaf6] p-6">
            <div className="grid gap-3 md:grid-cols-6">
              {["Copy", "Paste", "Parse", "Validate", "Deduplicate", "Instant filter"].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-3 md:flex-col md:items-stretch">
                    <div className="flex h-20 flex-1 items-center justify-center rounded-[18px] border border-charcoal/10 bg-white text-center text-sm font-medium text-charcoal/80">
                      {step}
                    </div>
                    {index < 5 ? <div className="hidden h-px w-full bg-border md:block" /> : null}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article className="rounded-[30px] border border-border bg-[#fff8ef] p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Unexpected twist
            </div>
            <p className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] tracking-tight text-balance">
              When I returned to Avsar two years later, people were using Bulk Paste even for
              searching one employee.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/72">
              The feature had become muscle memory. It quietly replaced the default search. The best
              UX is not always the feature with the biggest roadmap. Sometimes it is the smallest
              friction removed.
            </p>
          </article>

          <article className="rounded-[30px] border border-border bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Evolution
            </div>
            <div className="mt-5 space-y-3">
              {evolution.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[18px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3 text-sm text-charcoal/80"
                >
                  <span>{item}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-border bg-[#fbf8f3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
                Future vision
              </div>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-[1.05] tracking-tight text-balance">
                One day enterprise software will not ask users to prepare files.
              </p>
            </div>
            <div className="rounded-[30px] border border-border bg-white p-6">
              <div className="flex items-center justify-between rounded-[20px] border border-charcoal/10 bg-[#faf8f3] px-5 py-4">
                <span className="text-sm font-medium text-charcoal/55 line-through">
                  Upload button
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
                  Paste anything
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/72">
                One day enterprise software will understand whatever people paste. That is the real
                promise behind the shortcut: fewer steps, fewer exports, fewer rituals before the
                work can begin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
