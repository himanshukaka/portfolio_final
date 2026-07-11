import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/questions")({
  head: () => ({
    meta: [
      { title: "Questions — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Working theses, arguments, data notes, counterarguments, and unfinished thoughts on economics, work, technology, agriculture, and inequality.",
      },
      { property: "og:title", content: "Questions — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Questions I keep asking about economics, work, technology, agriculture, and inequality. Some have working theses. Some remain unfinished.",
      },
      { property: "og:url", content: "/questions" },
    ],
    links: [{ rel: "canonical", href: "/questions" }],
  }),
  component: QuestionsPage,
});

const categories = [
  "Economics",
  "Agriculture",
  "Work & Employment",
  "Technology & AI",
  "Inequality",
  "Cities & Infrastructure",
  "Education",
];

const items = [
  {
    kind: "Working thesis",
    category: "Agriculture",
    q: "Why doesn't higher agricultural productivity necessarily make farmers richer?",
    note: "A working model of the price-elasticity trap and the missing middle in Indian agri value chains. I may be wrong.",
  },
  {
    kind: "Argument",
    category: "Work & Employment",
    q: "Is India's employment problem actually a productivity problem?",
    note: "The formal-informal split, and why 'jobs' is the wrong unit of measurement.",
  },
  {
    kind: "Unfinished thought",
    category: "Technology & AI",
    q: "What happens to India's IT services model when software becomes dramatically cheaper to produce?",
    note: "An open inquiry — evidence still coming in, mind not yet made up.",
  },
  {
    kind: "Data note",
    category: "Technology & AI",
    q: "Why do enterprise products continue to underestimate Excel?",
    note: "A pattern from years of watching power users route around specialized software. Excel is not the enemy. It is evidence.",
  },
  {
    kind: "Counterargument",
    category: "Inequality",
    q: "Can technology reduce inequality without first understanding incentives?",
    note: "A gentle disagreement with the 'more tech = more opportunity' thesis.",
  },
  {
    kind: "Working thesis",
    category: "Cities & Infrastructure",
    q: "Are Indian cities under-built or under-governed?",
    note: "Testing which constraint actually binds — capital, land, or coordination.",
  },
  {
    kind: "Question",
    category: "Education",
    q: "What if the credential is the product, not the learning?",
    note: "An uncomfortable framing for a large part of the ed-tech market.",
  },
];

function QuestionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Questions"
        eyebrowColor="text-leaf"
        title={<>Problems worth thinking about.</>}
        lede="I'm interested in systems where technology, economics, incentives, institutions, and human behaviour collide. These are not conclusions — they're working notes. I reserve the right to change my mind."
      />
      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              className="rounded-full border border-charcoal/15 px-4 py-1.5 text-xs font-medium text-charcoal/70 transition-colors hover:border-leaf hover:text-leaf"
            >
              {c}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {items.map((it) => (
            <article key={it.q} className="grid gap-6 py-8 md:grid-cols-[160px_1fr]">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-leaf">
                  {it.kind}
                </div>
                <div className="mt-1 text-xs text-charcoal/50">{it.category}</div>
              </div>
              <div>
                <h2 className="font-serif text-2xl leading-snug text-balance">
                  {it.q}
                </h2>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-charcoal/70">
                  {it.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}