import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "Experiments — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Ventures, prototypes, and startup attempts. Some became products. Some became lessons. Both mattered.",
      },
      { property: "og:title", content: "Experiments — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Ventures, prototypes, and startup attempts — with honest reflections on what worked and what didn't.",
      },
    ],
  }),
  component: ExperimentsPage,
});

const experiments = [
  {
    name: "Cohortup",
    year: "2021",
    kind: "Consumer social · Prototype",
    hypothesis:
      "That learning is fundamentally social, and that a product built around cohort dynamics could keep people finishing what they started.",
    story: [
      {
        h: "The user problem",
        p: "Self-paced online learning has a drop-off cliff. People start alone and stop alone.",
      },
      {
        h: "The mechanic we tried",
        p: "Weekly cohorts, structured check-ins, and public commitments — with a lightweight prototype in React and Firebase.",
      },
      {
        h: "What failed",
        p: "We could manufacture the ceremony but not the vulnerability. Sharing incomplete work is a trust problem, not an interface problem.",
      },
      {
        h: "What it taught me",
        p: "Social mechanics can amplify motivation that already exists. They cannot create it. Distribution and community pre-existed the product, not the other way around.",
      },
    ],
  },
  {
    name: "Zunction",
    year: "2019",
    kind: "Marketplace · Founder-led",
    hypothesis:
      "That underused educational infrastructure — empty classrooms in the evenings — could become shared studio space for independent educators.",
    story: [
      {
        h: "The market observation",
        p: "Independent tutors and small cohorts were priced out of dedicated real estate. Schools had empty rooms after 4pm.",
      },
      {
        h: "What we tried",
        p: "Founder-led B2B sales to schools, a lightweight booking product for educators, and a small pilot with paying users.",
      },
      {
        h: "Why it stopped",
        p: "Unit economics of physical space did not scale with a thin software layer. The supply side worked; the demand side needed a distribution motion we didn't have.",
      },
      {
        h: "What it taught me",
        p: "Verify distribution cost before building the technology. Real estate marketplaces are not software problems in disguise.",
      },
    ],
  },
];

function ExperimentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiments"
        eyebrowColor="text-marigold"
        title={<>Things I tried to build.</>}
        lede="Some became products. Some became lessons. I'm not going to rewrite failure as success — the quality of the thinking and the honesty of the reflection are the point."
      />
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-32">
        {experiments.map((e) => (
          <article
            key={e.name}
            className="grid gap-10 border-t border-charcoal/10 pt-12 md:grid-cols-[220px_1fr]"
          >
            <aside className="space-y-3">
              <h2 className="font-serif text-4xl">{e.name}</h2>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-marigold">
                {e.year} · {e.kind}
              </div>
              <p className="font-serif text-lg italic leading-snug text-charcoal/70 text-pretty">
                &ldquo;{e.hypothesis}&rdquo;
              </p>
            </aside>
            <div className="space-y-8">
              {e.story.map((s) => (
                <div key={s.h}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                    {s.h}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-charcoal/75">
                    {s.p}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}