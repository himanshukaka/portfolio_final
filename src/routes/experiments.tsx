import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "Startups — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Ventures, prototypes, and startup attempts. Some became products. Some became lessons. Both mattered.",
      },
      { property: "og:title", content: "Startups — Himanshu Tiwari" },
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
    cta: { label: "Open CohortUp", to: "/cohortup" },
  },
  {
    name: "Zunction.in",
    year: "2023",
    kind: "Marketplace · Founder-led",
    hypothesis:
      "That underused educational infrastructure — empty classrooms in the evenings — could become shared teaching space for independent educators.",
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
        p: "The unit economics of physical space did not scale with a thin software layer. The supply side worked; the demand side needed a distribution motion we didn't have.",
      },
      {
        h: "What it taught me",
        p: "Verify distribution cost before building the technology. Real estate marketplaces are not software problems in disguise.",
      },
    ],
    cta: { label: "Read Zunction", to: "/zunction" },
  },
  {
    name: "Phone a Friend",
    year: "Concept · 2026",
    kind: "AI copilot · Product concept",
    hypothesis:
      "That important conversations can feel less fragile when an AI assistant listens, understands context, and quietly suggests the next best response.",
    story: [
      {
        h: "The opportunity",
        p: "Recruiting, sales, support, negotiations, and investor calls all share the same problem: people have to think, remember, and respond in real time under pressure.",
      },
      {
        h: "What the concept does",
        p: "It listens to the conversation, retrieves context, detects risk, and suggests what to ask or say next without turning the call into a chat interface.",
      },
      {
        h: "Why it is a concept",
        p: "The technical and regulatory constraints are real. Permission, consent, call recording policy, mobile OS restrictions, and enterprise trust all shape what is possible.",
      },
      {
        h: "What it taught me",
        p: "The product story is stronger when framed as a concept. Strategic ideas do not need fake shipped-product language to be credible.",
      },
    ],
    cta: { label: "View Concept", to: "/phone_of_friend" },
  },
  {
    name: "Reimagining Indian Agriculture",
    year: "Thesis · 2026",
    kind: "Long-term thesis",
    hypothesis:
      "That Indian agriculture is constrained less by inputs than by the lack of structural capital and institutional layers.",
    story: [
      {
        h: "The problem",
        p: "Farmers face fragmented landholdings, volatile incomes, concentrated risk, and nearly complete exposure to operational uncertainty.",
      },
      {
        h: "The core thesis",
        p: "The next frontier is not just better seeds, drones, or marketplaces. It is redesigning the financial and operational architecture around farming.",
      },
      {
        h: "What changes",
        p: "New layers between capital and cultivation can let farmers retain land ownership while still participating in higher productivity and economic upside.",
      },
      {
        h: "What it taught me",
        p: "Some of the most meaningful product ideas are really institutional design questions.",
      },
    ],
    cta: { label: "Open Thesis", to: "/reimagining_indian_agriculture" },
  },
  {
    name: "Employee's Skin in the Game",
    year: "Thesis · 2026",
    kind: "Long-term thesis",
    hypothesis:
      "That organizations may uncover better judgment if employees can allocate conviction, not just time.",
    story: [
      {
        h: "The observation",
        p: "Different people inside a company see different parts of the same problem, but their predictions rarely compound into something measurable.",
      },
      {
        h: "The premise",
        p: "A limited pool of organizational conviction could let people express belief in outcomes the way markets express belief in prices.",
      },
      {
        h: "The tension",
        p: "The idea is attractive because it prizes judgment. It is risky because organizations can turn anything into theater.",
      },
      {
        h: "What it taught me",
        p: "Some organization problems are really questions about incentives, information, and who gets to matter.",
      },
    ],
    cta: { label: "Open Thesis", to: "/employees_skin_in_the_game" },
  },
];

function ExperimentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Startups"
        eyebrowColor="text-marigold"
        title={<>Things That Didn't Work Out.</>}
        lede="Some became products. Some became lessons. The point isn't to rewrite failure as success, but to be honest about what was learned. The quality of the reflection matters more than the outcome."
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
              {e.cta ? (
                <Link
                  to={
                    e.cta.to as
                      | "/zunction"
                      | "/cohortup"
                      | "/phone_of_friend"
                      | "/employees_skin_in_the_game"
                  }
                  className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
                >
                  {e.cta.label}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
