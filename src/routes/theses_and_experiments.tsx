import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/theses_and_experiments")({
  head: () => ({
    meta: [
      { title: "Theses & Experiments — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Theses, prototypes, and startup attempts. Some became products. Some became lessons. Both mattered.",
      },
      { property: "og:title", content: "Theses & Experiments — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Theses, prototypes, and startup attempts — with honest reflections on what worked and what didn't.",
      },
      { property: "og:url", content: "/theses_and_experiments" },
    ],
    links: [{ rel: "canonical", href: "/theses_and_experiments" }],
  }),
  component: ThesesPage,
});

const experiments = [
  {
    name: "CohortUp",
    kind: "Consumer Learning · Prototype",
    hypothesis:
      "Learning is rarely an information problem. It's often a social commitment problem. If progress became visible to a small group instead of remaining private, more people would finish what they started.",
    story: [
      {
        h: "Observation",
        p: "People rarely quit online courses because the content is difficult. They quit because no one expects them to come back tomorrow. The internet optimized access to knowledge, but removed the accountability that classrooms naturally create.",
      },
      {
        h: "Exploration",
        p: "Instead of building another course platform, I explored whether small learning cohorts could become the product. The prototype centered around users trying to do an activity together and feeling being seen while sharing their progress toward shared goals.",
      },
      {
        h: "Friction",
        p: "People were comfortable consuming content together, but far less comfortable working in public. The hardest challenge isn't coordinating schedules; it was creating enough trust for vulnerability.",
      },
      {
        h: "Current Belief",
        p: "Social accountability engineered in product design can drive learning outcomes.",
      },
    ],
    cta: {
      label: "Explore CohortUp",
      to: "/cohortup",
    },
  },

  // {
  //   name: "Zunction.in",
  //   kind: "Marketplace · Founder-led Experiment",
  //   hypothesis:
  //     "Educational infrastructure remains idle for much of the day. If schools could temporarily lease unused classrooms to independent educators, existing assets could create value for both sides.",
  //   story: [
  //     {
  //       h: "Observation",
  //       p: "Schools have classrooms sitting empty every evening, while independent educators struggle to afford dedicated teaching spaces. The inefficiency existed on both sides of the market.",
  //     },
  //     {
  //       h: "Exploration",
  //       p: "I built a marketplace connecting schools with tutors and small educational businesses. Beyond the product, the experiment involved founder-led sales, partnerships, pricing, and validating whether both sides truly wanted the exchange.",
  //     },
  //     {
  //       h: "Friction",
  //       p: "Schools were easier to convince than expected. Finding educators consistently willing to book spaces at scale proved much harder. The bottleneck wasn't product quality—it was customer acquisition economics.",
  //     },
  //     {
  //       h: "Current Belief",
  //       p: "Marketplaces rarely fail because matching is difficult. They fail because one side is too expensive to acquire repeatedly. Distribution deserves validation before software.",
  //     },
  //   ],
  //   cta: {
  //     label: "Read the Story",
  //     to: "/zunction",
  //   },
  // },

  {
    name: "Phone a Friend",
    kind: "AI Copilot · Product Thesis",
    hypothesis:
      "Real-time conversations often fail because people cannot retrieve knowledge quickly enough. An AI copilot could reduce cognitive load without replacing human judgment.",
    story: [
      {
        h: "Observation",
        p: "Recruiters, salespeople, interview candidates, support agents, and negotiators all face moments where they think of the right response a few minutes too late. Conversation is often a memory problem disguised as a communication problem.",
      },
      {
        h: "Exploration",
        p: "The concept listens to conversations, understands context, retrieves relevant information, identifies missing questions, and quietly suggests what to ask or say next. The goal isn't to automate conversations, but to help people stay present during them.",
      },
      {
        h: "Friction",
        p: "Building the assistant is only half the challenge. Privacy, user consent, enterprise trust, operating system restrictions, and regulation may ultimately determine whether products like this become practical.",
      },
      {
        h: "Current Belief",
        p: "AI assistants will gradually shift from generating content after conversations to improving decisions during conversations. The biggest challenge won't be intelligence—it will be trust.",
      },
    ],
    cta: {
      label: "View Concept",
      to: "/phone_of_friend",
    },
  },

  {
    name: "Reimagining Indian Agriculture",
    kind: "Institutional Design · Long-term Thesis",
    hypothesis:
      "The biggest constraint in Indian agriculture isn't technology. It's institutional design. Farmers carry most of the operational risk while having limited access to scalable capital and professional management.",
    story: [
      {
        h: "Observation",
        p: "Most agricultural innovation focuses on improving farming itself—better seeds, machinery, drones, or marketplaces. Much less attention goes toward redesigning the financial and operational architecture surrounding farming.",
      },
      {
        h: "Exploration",
        p: "I'm exploring whether agriculture could benefit from new financial instruments and operational structures that better separate ownership, capital, management, and execution. Rather than treating farms as isolated units, the thesis imagines agriculture as an investable operating system.",
      },
      {
        h: "Open Questions",
        p: "Can capital participate without displacing ownership? Can farmers retain control while sharing upside differently? Can agricultural risk become diversified instead of remaining individual?",
      },
      {
        h: "Current Belief",
        p: "Some of the highest-impact products are not apps or platforms. They're new institutions that reshape incentives and coordination.",
      },
    ],
    cta: {
      label: "Read Thesis",
      to: "/reimagining_indian_agriculture",
    },
  },

  {
    name: "Employee's Skin in the Game",
    kind: "Organization Design · Long-term Thesis",
    hypothesis:
      "Employees contribute time to organizations but have limited ways to express conviction. Organizations may make better decisions if they could measure judgment alongside execution.",
    story: [
      {
        h: "Observation",
        p: "Every company contains people who correctly anticipate product failures, customer behavior, operational risks, or strategic opportunities. Most of those insights disappear in meetings because there is no mechanism to aggregate them.",
      },
      {
        h: "Exploration",
        p: "I'm exploring whether organizations could introduce systems that allow employees to allocate limited conviction toward outcomes they believe in—not as gambling or compensation, but as a structured way to surface dispersed knowledge.",
      },
      {
        h: "Friction",
        p: "Any incentive system changes behavior. A poorly designed mechanism could encourage politics, popularity contests, or short-term thinking instead of better judgment. The system matters more than the market.",
      },
      {
        h: "Current Belief",
        p: "Organizations improve when information flows upward. Markets aggregate belief through prices; companies may eventually invent their own mechanisms to aggregate internal conviction.",
      },
    ],
    cta: {
      label: "Read Thesis",
      to: "/employees_skin_in_the_game",
    },
  },
];

function ThesesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Theses & Experiments"
        eyebrowColor="text-marigold"
        title={<>Things That I am figuring Out.</>}
        lede="Every product starts as an observation. Some observations become prototypes. Others become companies. A few remain unfinished ideas because the question is still more valuable than the answer."
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
