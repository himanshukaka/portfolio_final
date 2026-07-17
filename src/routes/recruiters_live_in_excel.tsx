import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/recruiters_live_in_excel")({
  head: () => ({
    meta: [
      { title: "Recruiters Live in Excel — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A product note on why recruiters keep returning to Excel, and what ATS products can learn from that behavior.",
      },
      {
        property: "og:title",
        content: "Recruiters Live in Excel — Himanshu Tiwari",
      },
      {
        property: "og:description",
        content: "Excel isn't the competitor. It is the workflow.",
      },
      { property: "og:url", content: "/recruiters_live_in_excel" },
    ],
    links: [{ rel: "canonical", href: "/recruiters_live_in_excel" }],
  }),
  component: RecruitersLiveInExcelPage,
});

function RecruitersLiveInExcelPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Enterprise UX"
        eyebrowColor="text-leaf"
        title={<>Recruiters Live in Excel</>}
        lede="While building ATS products, I noticed that recruiters rarely spend their day inside the ATS. They source candidates, maintain follow-up lists, track conversations, prioritize work, and make bulk updates in Excel."
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[30px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              Observation
            </div>
            <p className="mt-4 max-w-2xl font-serif text-3xl leading-[1.08] tracking-tight text-balance text-charcoal">
              While building ATS products, I noticed that recruiters rarely spend their day inside
              the ATS.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/72">
              They source candidates, maintain follow-up lists, track conversations, prioritize
              work, and make bulk updates in Excel. The ATS often becomes the place where final
              statuses are recorded rather than where the work actually happens.
            </p>
          </article>

          <article className="rounded-[30px] border border-border bg-[#fbf8f3] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              Why this happens
            </div>
            <p className="mt-4 max-w-2xl font-serif text-4xl leading-[1.02] tracking-tight text-balance">
              Most ATS products are designed around a candidate journey.
            </p>
            <div className="mt-6 rounded-[24px] border border-charcoal/10 bg-white p-5 text-sm font-medium text-charcoal/80">
              Candidate → Open Profile → Edit → Save → Next Candidate
            </div>
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-charcoal/72">
              <p>
                Recruiters, however, work on hundreds of candidates simultaneously. Their mental
                model is a spreadsheet, where they can filter instantly, sort dynamically, copy &
                paste data, bulk update records, create temporary columns, scan hundreds of rows in
                seconds, and stay entirely on the keyboard.
              </p>
              <p>Excel optimizes for speed, while many ATS products optimize for process.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-[#f8f6f1]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <h2 className="max-w-[8ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance">
              The UX mistake
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-charcoal/72">
              <p>Many product teams treat spreadsheets as user behavior to eliminate.</p>
              <p>I think they're a behavior to learn from.</p>
              <p>
                If users repeatedly export data to Excel, it usually signals that the product
                isn't supporting their operational workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              My design principle
            </div>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance">
              Make the ATS feel like a spreadsheet.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-charcoal/72">
            <p>
              Instead of replacing spreadsheets, make the ATS feel like one. Products like
              Monday.com demonstrate that familiarity is a UX advantage. Users don't need to learn
              a new interaction model. They already understand rows, columns, inline editing,
              filters, and bulk actions.
            </p>
            <p>The system can remain structured underneath while feeling flexible on the surface.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                What I would design
              </div>
              <p className="mt-4 max-w-sm font-serif text-4xl leading-[1.02] tracking-tight text-balance">
                Spreadsheet-first recruiter workspace.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Inline editing without opening candidate profiles",
                "Keyboard-first navigation",
                "Bulk stage updates",
                "Copy/paste candidate operations",
                "Saved views (Today's Follow-ups, Hot Candidates, Interviews Today)",
                "Day-based workbench instead of only pipeline views",
              ].map((item) => (
                <article
                  key={item}
                  className="rounded-[22px] border border-charcoal/10 bg-[#fbfaf7] p-4 text-sm leading-relaxed text-charcoal/78"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <blockquote className="rounded-[32px] border border-border bg-[#f9f7f2] px-8 py-10 text-center font-serif text-4xl leading-tight italic tracking-tight text-balance text-charcoal/80">
          Adoption doesn't increase by forcing users to abandon spreadsheets.
          <br />
          It increases when the product becomes as efficient as the spreadsheet they're already using.
        </blockquote>
      </section>
    </div>
  );
}
