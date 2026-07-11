import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Case Studies — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Himanshu Tiwari — product case studies across enterprise UX, zero-to-one platforms, SaaS commercialization, and AI-assisted workflows.",
      },
      { property: "og:title", content: "Work & Case Studies — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Product case studies across enterprise platforms, configurable SaaS, and AI-assisted workflows. Domains include HRTech, payroll, and workforce systems — the lessons are transferable.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const featured = [
  {
    n: "01",
    title: "Why Do Users Return to Excel?",
    question:
      "Why do users return to Excel even after their company buys specialized software?",
    tag: "ATS · Enterprise UX",
    themes: [
      "Information density for power users",
      "Bulk operations and inline error recovery",
      "Respecting the mental models of a legacy tool",
    ],
  },
  {
    n: "02",
    title: "How Do You Turn Seven Fragmented Journeys Into One Coherent System?",
    question:
      "How do you design lifecycle workflows around a shared Assignment ID architecture?",
    tag: "Zero to One · Systems",
    themes: [
      "Workflow architecture across many stakeholders",
      "Build-vs-buy at each layer of the stack",
      "Sequencing scope to earn the right to keep building",
    ],
  },
  {
    n: "03",
    title: "What Breaks When Internal Software Becomes SaaS?",
    question:
      "What breaks when software built for one organization has to serve many?",
    tag: "Platform · Commercialization",
    themes: [
      "Configuration vs customization",
      "Onboarding and implementation as product surface",
      "The transition from user to customer",
    ],
  },
  {
    n: "04",
    title: "Modernizing a System That Cannot Afford to Fail",
    question:
      "How do you modernize a rigid system without disrupting the operation it runs?",
    tag: "Payroll · AI Workflows",
    themes: [
      "Legacy modernization without operational risk",
      "AI-assisted validation and audit trails",
      "Change management inside enterprise implementations",
    ],
  },
];

const stories = [
  {
    title: "The Copy-Paste Filter",
    kicker: "Why a search box wasn't enough.",
    question:
      "What happens when enterprise users need to find 500 people, but the interface assumes they're looking for one?",
    sections: [
      { h: "The apparently small request", p: "Recruiters kept asking for a better search box. That was not the problem." },
      { h: "How users actually worked", p: "They lived in Excel. They pasted lists into the product. They wanted our software to meet them where they already were." },
      { h: "Why Excel remained part of the workflow", p: "Excel wasn't a competitor. It was evidence — of information density and speed that our product hadn't matched." },
      { h: "Copy-paste as a mental model", p: "The paste event was the actual product surface. We built parsing, delimiter handling, and validation around it." },
      { h: "Inline error recovery", p: "Valid records went in. Invalid ones stayed in place, editable, with reasons — instead of failing the whole batch." },
      { h: "The lesson", p: "Enterprise UX is not about hiding complexity. It is about respecting the complexity users already carry." },
    ],
  },
  {
    title: "The Bilaspur Trip",
    kicker: "What leaving the office taught me about signatures.",
    question:
      "What does a real signature workflow look like once you leave the office?",
    sections: [
      { h: "What I thought the problem was", p: "A slow e-signature flow. Users complained. The obvious fix was a redesigned form." },
      { h: "Why I went to Bilaspur", p: "Because the numbers weren't adding up, and the office diagrams didn't match the support tickets." },
      { h: "What I saw", p: "Documents printed, signed on paper, scanned back in, uploaded on unreliable connections, sometimes signed by the wrong person entirely." },
      { h: "Why the existing assumption was wrong", p: "It wasn't a signature workflow. It was a trust workflow. The roadmap had described the wrong problem." },
      { h: "The product decision", p: "An e-signature workflow that treated identity verification and offline capture as first-class — not a nicer button on the same broken loop." },
      { h: "Trust, verification, and auditability", p: "The design goal became provable identity, not just a signed PDF. Audit trails were the actual product." },
      { h: "The lesson", p: "Field observation isn't user research. It is roadmap-changing evidence." },
    ],
  },
];

const journey = [
  { step: "Operations", note: "Understanding business reality" },
  { step: "Software", note: "Learning how systems are built" },
  { step: "Product", note: "Connecting users, tech, and business" },
  { step: "Entrepreneurship", note: "Uncertainty, sales, distribution" },
  { step: "SaaS", note: "Configuration, customers, implementation" },
  { step: "Platform Leadership", note: "Modernization, AI, scale" },
];

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Products for complex systems — turning fragmented workflows into
            scalable software.
          </>
        }
        lede="Case studies pulled from enterprise SaaS, workforce platforms, payroll modernization, and internal-to-SaaS commercialization. Different domains; a shared way of thinking."
      />

      {/* Featured case studies */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Featured case studies
        </span>
        <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {featured.map((c) => (
            <article
              key={c.n}
              className="grid gap-8 py-10 md:grid-cols-[120px_1fr_260px]"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
                Case study {c.n}
              </span>
              <div>
                <h2 className="font-serif text-3xl leading-snug text-balance">
                  {c.title}
                </h2>
                <p className="mt-4 max-w-[60ch] font-serif text-xl italic text-charcoal/70 text-pretty">
                  &ldquo;{c.question}&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/50">
                  {c.tag}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                {c.themes.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-px w-3 shrink-0 bg-terracotta" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[32px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
                New case study
              </div>
              <h3 className="mt-3 font-serif text-3xl text-charcoal">
                CohortUp
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
                A product case study about one person starting an activity,
                another live person joining the same activity, and both
                turning that shared session into a split-screen timelapse post.
              </p>
            </div>
            <Link
              to="/cohortup"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
            >
              Read the case study
            </Link>
          </div>
        </div>
      </section>

      {/* Product stories */}
      <section className="border-t border-charcoal/5 bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
            More case studies · Stories from the field
          </span>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance lg:text-4xl">
            Shorter than case studies, closer to the ground.
          </h2>
          <p className="mt-4 max-w-[62ch] font-serif text-lg italic text-charcoal/60">
            What changed when I actually watched the work happen.
          </p>
          <div className="mt-16 space-y-20">
            {stories.map((s) => (
              <article
                key={s.title}
                className="grid gap-10 border-t border-charcoal/10 pt-10 md:grid-cols-[240px_1fr]"
              >
                <aside className="space-y-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-marigold">
                    Case study · From the field
                  </div>
                  <h3 className="font-serif text-3xl leading-tight text-balance">
                    {s.title}
                  </h3>
                  <p className="font-serif text-base italic text-charcoal/60">
                    {s.kicker}
                  </p>
                  <p className="font-serif text-base italic text-charcoal/70 text-pretty">
                    &ldquo;{s.question}&rdquo;
                  </p>
                </aside>
                <div className="space-y-6">
                  {s.sections.map((sec) => (
                    <div key={sec.h}>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                        {sec.h}
                      </h4>
                      <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-charcoal/75">
                        {sec.p}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career system map */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Career system map
        </span>
        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance lg:text-4xl">
          Not a résumé — a progression of capabilities.
        </h2>
        <ol className="mt-12 space-y-6">
          {journey.map((j, i) => (
            <li
              key={j.step}
              className="grid grid-cols-[60px_1fr] items-baseline gap-6 border-b border-charcoal/10 pb-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-2xl">{j.step}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{j.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href="#"
          className="mt-10 inline-block text-sm font-medium underline decoration-terracotta/50 underline-offset-4 hover:decoration-terracotta"
        >
          Download résumé (PDF)
        </a>
      </section>
    </>
  );
}
