import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/bilaspur_diaries")({
  head: () => ({
    meta: [
      { title: "Bilaspur Diaries — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A case study on compliance, onboarding friction, and building the compliant path so it is easier than the workaround.",
      },
      { property: "og:title", content: "Bilaspur Diaries — Himanshu Tiwari" },
      {
        property: "og:description",
        content: "Designing products where compliance meets operational reality.",
      },
      { property: "og:url", content: "/bilaspur_diaries" },
    ],
    links: [{ rel: "canonical", href: "/bilaspur_diaries" }],
  }),
  component: BilaspurDiariesPage,
});

const timeline = [
  "Employee",
  "Mobile signature",
  "IP tracking",
  "Geo location",
  "Selfie verification",
  "Immutable audit trail",
  "Signed document",
];

function BilaspurDiariesPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Case study"
        eyebrowColor="text-terracotta"
        title={
          <>
            Bilaspur Diaries
            <br />
            Designing products where compliance meets reality.
          </>
        }
        lede="Sometimes the biggest product insight does not come from dashboards. It comes from watching people improvise around friction."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <figure className="overflow-hidden rounded-[32px] border border-border bg-[linear-gradient(135deg,#f4efe6_0%,#e7ddd0_48%,#d7c8b5_100%)] p-5 shadow-[0_18px_50px_rgba(23,23,23,0.08)]">
          <div className="grid min-h-[420px] gap-4 rounded-[24px] border border-white/70 bg-white/55 p-5 backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[22px] border border-charcoal/10 bg-[linear-gradient(180deg,#fff7ef_0%,#efe4d6_100%)] p-4">
              <img
                src="/hiring_center.jpeg"
                alt="Hiring center in Bilaspur"
                className="h-72 w-full rounded-[18px] border border-charcoal/10 object-cover object-center"
              />
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-charcoal/55">
                Bilaspur, Haryana · Winter 2023
              </figcaption>
            </div>
            <div className="relative overflow-hidden rounded-[22px] border border-charcoal/10 bg-[#faf7f1] p-5">
              <div className="absolute right-4 top-4 h-40 w-40 rounded-full bg-terracotta/10 blur-2xl" />
              <div className="relative space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
                  The visit
                </div>
                <p className="max-w-[34ch] font-serif text-3xl leading-[1.02] tracking-tight text-balance">
                  A small office. Hundreds of workers. One very real bottleneck.
                </p>
                <p className="max-w-[40ch] text-sm leading-relaxed text-charcoal/72">
                  During the winter of 2023, I visited onboarding operations across warehouses near
                  Gurugram to understand how blue-collar hiring actually worked on the ground.
                </p>
                <p className="max-w-[40ch] text-sm leading-relaxed text-charcoal/72">
                  Interviews, document verification, and joining formalities all happened inside a
                  tiny office built for motion, not ceremony.
                </p>
              </div>
            </div>
          </div>
        </figure>

        <aside className="grid gap-4">
          <div className="rounded-[28px] border border-border bg-[#f7f5ef] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              The observation
            </div>
            <blockquote className="mt-5 max-w-lg font-serif text-3xl leading-[1.08] tracking-tight text-balance text-charcoal">
              "Compliance doesn't fail because people do not care. It fails because the system does
              not fit reality."
            </blockquote>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/72">
              One onboarding executive got an escalation that offer letters were unsigned before an
              audit. The response was operational improvisation, not defiance: a photographed
              signature, manually placed on the document, and a workflow that was technically
              compliant but operationally fragile.
            </p>
          </div>

          <div className="rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              Product insight
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <h2 className="font-serif text-4xl leading-[0.95] tracking-tight text-balance">
                Design for reality.
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-charcoal/72">
                <p>
                  People were not trying to bypass compliance. They were trying to finish onboarding
                  before workers left.
                </p>
                <p>The real problem was not signatures. It was friction.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-border bg-[#f7f4ee]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                What I built
              </div>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-tight text-balance">
                A digital signing workflow that made the compliant path easier than the workaround.
              </p>
            </div>
            <div className="rounded-[30px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
              <div className="grid gap-3 md:grid-cols-7">
                {timeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 md:flex-col md:items-stretch">
                    <div className="flex h-20 flex-1 items-center justify-center rounded-[18px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffdf9_0%,#f6efe5_100%)] px-3 text-center text-sm font-medium text-charcoal/80">
                      {step}
                    </div>
                    {index < timeline.length - 1 ? (
                      <div className="hidden h-px w-full bg-border md:block" />
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal/72">
                Built a digital signing workflow capable of processing over 1,000 documents every
                month while dramatically reducing onboarding turnaround time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Observation beats assumptions.",
            "Compliance products succeed only when they are faster than workarounds.",
            "People do not resist systems. They resist unnecessary friction.",
          ].map((lesson) => (
            <article
              key={lesson}
              className="rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                Lesson
              </div>
              <p className="mt-5 max-w-[18ch] font-serif text-2xl leading-[1.05] tracking-tight text-balance">
                {lesson}
              </p>
            </article>
          ))}
        </div>
        <blockquote className="mx-auto mt-16 max-w-4xl text-center font-serif text-4xl leading-tight italic tracking-tight text-balance text-charcoal/80">
          Great UX is not about making software beautiful.
          <br />
          It is about making the compliant path the easiest path.
        </blockquote>
      </section>
    </div>
  );
}
