import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/cafes_human_behaviour")({
  head: () => ({
    meta: [
      { title: "Cafes & Human Behaviour — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A short sociology-style product note on how cafés serve different jobs in different cities.",
      },
      { property: "og:title", content: "Cafes & Human Behaviour — Himanshu Tiwari" },
      {
        property: "og:description",
        content: "Same product. Different user needs.",
      },
      { property: "og:url", content: "/cafes_human_behaviour" },
    ],
    links: [{ rel: "canonical", href: "/cafes_human_behaviour" }],
  }),
  component: CafesAndHumanBehaviourPage,
});

function CafesAndHumanBehaviourPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Observation"
        eyebrowColor="text-coral"
        title={
          <>
            Cafes & Human Behaviour
            <br />
            Same product. Different user needs.
          </>
        }
        lede="A café never changes its menu just because the city changes. What changes is the job the space is hired to do."
      />

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-border bg-[#fbf8f4] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              Tier 1
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/72">
              <p>People seek comfort.</p>
              <p>Time together.</p>
              <p>Good ambience.</p>
              <p>Work-friendly spaces.</p>
              <p>Open layouts.</p>
            </div>
          </article>
          <article className="rounded-[28px] border border-border bg-[#f4efe9] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
              Tier 3
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/72">
              <p>People seek privacy.</p>
              <p>Not aesthetics.</p>
              <p>Not luxury.</p>
              <p>Not coffee.</p>
              <p>Privacy.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <h2 className="max-w-[8ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance">
            Users never buy products.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-charcoal/72">
            <p>They hire products to solve problems.</p>
            <p>The café never changed. The job it was hired for changed.</p>
            <p>That is product thinking.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Design principle
          </div>
          <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance">
            Design for intent.
            <br />
            Not demographics.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-charcoal/72">
          Segmentation based only on age, income, or geography misses the real user need. The same
          person can want different things in different moments. The work is to see the intent
          beneath the visit.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <blockquote className="rounded-[32px] border border-border bg-[#fbf9f5] px-8 py-10 text-center font-serif text-4xl leading-tight italic tracking-tight text-balance text-charcoal/82">
          UX begins where assumptions end.
        </blockquote>
      </section>
    </div>
  );
}
