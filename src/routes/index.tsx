import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "./writing";

function substackHomeEmbedUrl(postUrl: string): string {
  try {
    const u = new URL(postUrl);
    return `${u.origin}/embed${u.pathname}`;
  } catch {
    return postUrl;
  }
}

export const Route = createFileRoute("/")({
  component: Home,
});

const capabilities = [
  {
    label: "Platform Thinking",
    body: "Configurable products, reusable workflows, multi-tenant systems designed to scale across customers.",
  },
  {
    label: "Zero to One",
    body: "Internal platforms, new products, and startup experiments taken from a blank page to first users.",
  },
  {
    label: "Enterprise UX",
    body: "High-volume bulk operations, error recovery, and implementation realities for power users.",
  },
  {
    label: "AI + Automation",
    body: "AI-assisted mapping, validation, and workflow intelligence woven into daily operations.",
  },
  {
    label: "Technical Depth",
    body: "Python, SQL, APIs, ETL, prototypes — conversations with engineering that go past the wireframe.",
  },
  {
    label: "Commercialization",
    body: "Turning internal operational software into SaaS: onboarding, configuration, adoption, pricing.",
  },
];

const caseStudies = [
  {
    n: "01",
    title: "Why Do Users Return to Excel?",
    subtitle: "Designing an ATS for high-volume hiring.",
    question:
      "What happens when enterprise users need to find 500 people, but the interface assumes they're looking for one?",
    summary:
      "Information density, bulk operations, and respecting the mental models of enterprise power users — instead of pretending Excel is the enemy.",
    tag: "Enterprise UX",
  },
  {
    n: "02",
    title: "How Do You Turn Seven Fragmented Journeys Into One Coherent System?",
    subtitle: "Designing lifecycle workflows around a shared Assignment ID architecture.",
    question: "How do you turn fragmented business operations into one coherent product system?",
    summary:
      "Zero-to-one workforce platform — workflow architecture, platform boundaries, and sequencing scope to earn the right to keep building.",
    tag: "Zero to One",
  },
  {
    n: "03",
    title: "What Breaks When Internal Software Becomes SaaS?",
    subtitle: "Turning an operational platform into a configurable multi-customer product.",
    question: "What breaks when software built for one organization has to serve many?",
    summary:
      "Configuration over customization, tenant differences, and the shift from users to customers when your platform stops being yours alone.",
    tag: "Platform",
  },
  {
    n: "04",
    title: "Modernizing a System That Cannot Afford to Fail",
    subtitle: "Rebuilding configurability into a business-critical enterprise platform.",
    question: "How do you modernize a rigid system without disrupting the operation it runs?",
    summary:
      "AI-assisted validation and audit trails, legacy modernization without breaking operational trust — the domain was payroll; the lesson was risk.",
    tag: "Modernization",
  },
];

const fieldNotes = [
  {
    n: "05",
    title: "The Copy-Paste Filter",
    subtitle: "Why a search box wasn't enough.",
    tag: "Field study · Enterprise UX",
    body: "Recruiters weren't searching for one name at a time — they were pasting blocks of data out of Excel. Excel was not the enemy; it was evidence. A parsing multi-filter with inline dedup and error recovery cut task time by ~40% without adding a single new screen.",
  },
  {
    n: "06",
    title: "The Bilaspur Trip",
    subtitle:
      "What leaving the office taught me about documents, signatures, and operational reality.",
    tag: "Field study · Trust workflows",
    body: "I thought the problem was a signature workflow. It wasn't. It was a trust workflow the office diagrams didn't capture. The product decision came from the field, not the roadmap.",
  },
];

const experiments = [
  {
    name: "Cohortup",
    question:
      "Can a social product help people learn together instead of merely consuming together?",
    reflection:
      "We could build cohort mechanics, but we couldn't manufacture the vulnerability required to learn in public. The lesson: platform mechanics cannot force human trust.",
    tag: "Consumer social · 2021",
  },
  {
    name: "Zunction.in",
    question:
      "Can unused educational infrastructure become shared space for independent educators?",
    reflection:
      "The B2B partnership motion worked; the unit economics of physical space did not. Verifying distribution costs before building the tech would have saved a year.",
    tag: "Marketplace · 2023",
  },
];

const questions = [
  {
    kind: "Working thesis",
    q: "Why doesn't higher agricultural productivity necessarily make farmers richer?",
  },
  {
    kind: "Argument",
    q: "Is India's employment problem actually a productivity problem?",
  },
  {
    kind: "Unfinished thought",
    q: "What happens to India's IT services model when software becomes dramatically cheaper to produce?",
  },
  {
    kind: "Data note",
    q: "Why do enterprise products continue to underestimate Excel?",
  },
  {
    kind: "Counterargument",
    q: "Can technology reduce inequality without first understanding incentives?",
  },
];

type MilestoneKind = "role" | "award" | "cert" | "edu";
const milestones: {
  year: string;
  kind: MilestoneKind;
  title: string;
  company?: string;
  body: string;
}[] = [
  {
    year: "2012",
    kind: "edu",
    title: "Class X — 85.6%",
    company: "MP Board",
    body: "Where showing up early and finishing the paper first became a habit.",
  },
  {
    year: "2014",
    kind: "edu",
    title: "Class XII — 86.6%",
    company: "MP Board",
    body: "PCM. The runway into JEE Advanced and engineering.",
  },
  {
    year: "2015",
    kind: "cert",
    title: "JEE Advanced · AIR 7151",
    body: "The entrance exam that opened the first door to NIT, Bhopal.",
  },
  {
    year: "2015 — 2019",
    kind: "edu",
    title: "B.Tech, Mechanical",
    company: "Maulana Azad NIT, Bhopal",
    body: "Engineering opened the first door. The years after turned into operations, code, product, and a taste for systems.",
  },
  {
    year: "2016",
    kind: "cert",
    title: "Trading Certificate · Taking Forward",
    body: "Skin in the game. Risk, position sizing, and the difference between opinion and conviction.",
  },
  {
    year: "2019",
    kind: "cert",
    title: "Machine Learning A–Z · Udemy",
    body: "Picked up in college, before Avsar. Intuition for regression, classification, clustering — and where they break.",
  },
  {
    year: "07/2019",
    kind: "role",
    title: "Product Manager",
    company: "Avsar HR Services",
    body: "Migration to a proprietary platform (₹26.4L annual savings), unified Hire-to-Retire, and a configurable ATS for high-volume hiring.",
  },
  {
    year: "12/2021",
    kind: "award",
    title: "Catalyst of Change · CY 2021",
    company: "Avsar HR Services",
    body: "For leading the in-house HRMS rollout and the cross-functional adoption that made it stick.",
  },
  {
    year: "04/2022",
    kind: "role",
    title: "Python Developer",
    company: "Lokyata",
    body: "Credit-union API integrations and Python/SQL ETL pipelines for large-scale data processing.",
  },
  {
    year: "05/2023",
    kind: "role",
    title: "Co-founder",
    company: "Zunction.in",
    body: "A 0→1 EdTech ecosystem around shared infrastructure for edupreneurs. 8 B2B subleasing partnerships.",
  },
  {
    year: "12/2023",
    kind: "role",
    title: "Product Manager",
    company: "Avsar HR Services",
    body: "Productized the internal platform into HR10X — 12 enterprise customers and 35K+ client employees in year one.",
  },
  {
    year: "06/2025",
    kind: "role",
    title: "Senior Product Manager",
    company: "Quess Corp Limited",
    body: "Productized payroll into the Hamara Suite — configurable cycles, AI-assisted upload mapping across 7 workflows, 26 enterprise SaaS customers in a year.",
  },
  {
    year: "01/2026",
    kind: "award",
    title: "Standout Performer · Q3 FY2025–26",
    company: "Quess Corp Limited",
    body: "For driving high-impact product initiatives and business-focused outcomes on the Hamara Suite.",
  },
];

const kindStyles: Record<
  MilestoneKind,
  { dot: string; border: string; label: string; chip: string }
> = {
  role: {
    dot: "bg-terracotta",
    border: "border-terracotta",
    label: "Role",
    chip: "bg-terracotta/15 text-terracotta",
  },
  award: {
    dot: "bg-amber-400",
    border: "border-amber-400",
    label: "Award",
    chip: "bg-amber-400/15 text-amber-300",
  },
  cert: {
    dot: "bg-ivory/70",
    border: "border-ivory/60",
    label: "Certification",
    chip: "bg-ivory/10 text-ivory/80",
  },
  edu: { dot: "bg-leaf", border: "border-leaf", label: "Education", chip: "bg-leaf/15 text-leaf" },
};

function Home() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/50">
          <span className="h-px w-8 bg-terracotta" />
          Himanshu Tiwari · Senior Product Manager
        </div>
        <h1 className="max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-balance lg:text-[6.5rem]">
          I build products around <em className="not-italic text-terracotta">messy real-world</em>{" "}
          problems.
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-[52ch]">
            <p className="text-lg leading-relaxed text-charcoal/80 text-pretty lg:text-xl">
              Senior Product Manager working across enterprise platforms, SaaS, complex workflow
              products, product modernization, and AI-assisted workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
              >
                View my work
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
              >
                <span className="size-2 rounded-full bg-leaf" />
                Know me beyond work
              </Link>
            </div>
          </div>
          <div className="max-w-[52ch] border-t border-charcoal/15 pt-6 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-10">
            <p className="font-serif text-lg italic leading-relaxed text-charcoal/70 text-pretty lg:text-xl">
              I also spend an unreasonable amount of time thinking about economics, technology,
              work, agriculture, incentives, and other systems. Occasionally I write about them.
              Apparently, my friends started calling me Kaka for a reason.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden whitespace-nowrap border-y border-charcoal/10 py-4">
          <div className="animate-marquee gap-16">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="pr-16 text-xs font-medium uppercase tracking-[0.25em] text-charcoal/45"
              >
                Currently thinking about &nbsp;·&nbsp; AI and work &nbsp;·&nbsp; Indian agriculture
                &nbsp;·&nbsp; enterprise UX &nbsp;·&nbsp; incentives &nbsp;·&nbsp; inequality
                &nbsp;·&nbsp; social products &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-charcoal/5 bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Professional snapshot
          </span>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance lg:text-4xl">
            Building across systems, scale, and ambiguity.
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.label}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest">{c.label}</h3>
                <p className="max-w-[38ch] text-sm leading-relaxed text-charcoal/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section id="work" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
                Selected work
              </span>
              <h2 className="font-serif text-4xl leading-tight text-balance lg:text-5xl">
                Problems where software had to understand the real world.
              </h2>
            </div>
            <Link
              to="/work"
              className="text-sm font-medium underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
            >
              All case studies →
            </Link>
          </div>
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <article key={c.n} className={`group ${i % 2 === 1 ? "md:pt-16" : ""}`}>
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-terracotta">
                    Case study · {c.n}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-charcoal/40">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-snug text-balance transition-colors group-hover:text-terracotta lg:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-2 font-serif text-base italic text-charcoal/60">{c.subtitle}</p>
                <p className="mt-4 font-serif text-lg italic text-charcoal/75 text-pretty">
                  &ldquo;{c.question}&rdquo;
                </p>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-charcoal/70">
                  {c.summary}
                </p>
                <div className="mt-6 h-px w-full bg-charcoal/10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies (from the field) — inverted band */}
      <section className="bg-charcoal py-24 text-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
                More case studies · From the field
              </span>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-balance">
                Small problems, serious product lessons.
              </h2>
            </div>
            <Link
              to="/work"
              className="text-sm font-medium text-ivory/80 underline decoration-marigold/50 underline-offset-4 hover:decoration-marigold"
            >
              Read the case studies →
            </Link>
          </div>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {fieldNotes.map((s) => (
              <div key={s.title} className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-marigold">
                    Case study · {s.n}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-ivory/50">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-serif text-3xl leading-tight text-balance">{s.title}</h3>
                <p className="font-serif text-lg italic text-ivory/70">{s.subtitle}</p>
                <p className="max-w-[52ch] text-base leading-relaxed text-ivory/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section id="experiments" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
                Things I tried to build
              </span>
              <h2 className="font-serif text-4xl leading-tight text-balance">
                Some became products. Some became lessons. Both matter.
              </h2>
            </div>
            <Link
              to="/experiments"
              className="text-sm font-medium underline decoration-marigold/50 underline-offset-4 hover:decoration-marigold"
            >
              All experiments →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {experiments.map((e) => (
              <article
                key={e.name}
                className="flex flex-col justify-between rounded-lg border border-charcoal/10 bg-card p-8 transition-colors hover:border-marigold/60"
              >
                <div>
                  <h3 className="mb-3 font-serif text-3xl">{e.name}</h3>
                  <p className="mb-6 font-serif text-lg italic text-charcoal/70 text-pretty">
                    &ldquo;{e.question}&rdquo;
                  </p>
                  <p className="text-sm leading-relaxed text-charcoal/70">{e.reflection}</p>
                </div>
                {e.name === "Zunction.in" ? (
                  <Link
                    to="/zunction"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-charcoal underline decoration-marigold/60 underline-offset-4 hover:decoration-marigold"
                  >
                    Read the full case study
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : null}
                <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-marigold">
                  {e.tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="questions" className="border-t border-charcoal/5 bg-leaf/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-leaf">
                Questions that won't leave me alone
              </span>
              <h2 className="font-serif text-4xl leading-tight text-balance">
                Working theses & open inquiries.
              </h2>
            </div>
            <Link
              to="/questions"
              className="text-sm font-medium underline decoration-leaf/50 underline-offset-4 hover:decoration-leaf"
            >
              All questions →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {questions.map((idea) => (
              <article
                key={idea.q}
                className="flex flex-col justify-between rounded-lg border border-charcoal/10 bg-ivory p-6 transition-colors hover:border-leaf"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-leaf">
                  {idea.kind}
                </span>
                <h4 className="mt-4 font-serif text-xl leading-snug text-pretty">{idea.q}</h4>
                <span className="mt-6 text-xs font-medium text-charcoal/50">Read →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Writing — Tenets of 21st Century, horizontal embed strip */}
      <section id="writing" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-lavender">
                I write to understand
              </span>
              <h2 className="font-serif text-4xl leading-tight text-balance">
                Tenets of 21st Century.
              </h2>
              <p className="mt-3 max-w-[52ch] font-serif text-lg italic text-charcoal/60">
                Essays on economies, education, hiring, agriculture, and rural India.
              </p>
            </div>
            <Link
              to="/writing"
              className="text-sm font-medium underline decoration-lavender/60 underline-offset-4 hover:decoration-lavender"
            >
              The writing desk →
            </Link>
          </div>
        </div>

        {/* Horizontal Substack embed strip */}
        <div className="relative">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))]">
            {[...posts]
              .sort((a, b) => b.relevance - a.relevance)
              .slice(0, 8)
              .map((p) => (
                <article
                  key={p.url}
                  className="group relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-charcoal/10 bg-ivory shadow-sm transition-colors hover:border-lavender/60 md:w-[360px]"
                >
                  <div className="flex flex-wrap gap-1.5 px-4 pt-4">
                    {p.interests.slice(0, 2).map((i) => (
                      <span
                        key={i}
                        className="rounded-full bg-lavender/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-lavender"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                  <iframe
                    src={substackHomeEmbedUrl(p.url)}
                    title={p.title}
                    loading="lazy"
                    sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                    className="mt-3 h-[300px] w-full border-0"
                  />
                  <Link
                    to="/writing"
                    aria-label={`Open the writing desk — ${p.title}`}
                    className="absolute inset-0"
                  />
                </article>
              ))}
          </div>
          <div className="mx-auto mt-4 max-w-6xl px-6 text-[11px] uppercase tracking-widest text-charcoal/40">
            Scroll → · Click a card to open the writing desk
          </div>
        </div>
      </section>

      {/* Life & Beliefs */}
      <section id="life" className="border-t border-charcoal/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-coral">
                Beyond the job title
              </span>
              <h2 className="font-serif text-4xl leading-tight text-balance">
                What I care about when no one's watching.
              </h2>
            </div>
            <Link
              to="/life"
              className="text-sm font-medium underline decoration-coral/50 underline-offset-4 hover:decoration-coral"
            >
              A life outside the résumé →
            </Link>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <article className="border-l-2 border-coral pl-6">
              <h3 className="font-serif text-2xl">The weight-loss journey</h3>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-charcoal/75">
                A slow, unglamorous story about failed attempts, environment design, and the
                difference between motivation and consistency. The change wasn't the goal —
                maintenance was.
              </p>
            </article>
            <article className="border-l-2 border-coral pl-6">
              <h3 className="font-serif text-2xl">Equality begins at home</h3>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-charcoal/75">
                A story about advocating for my sister's equal property rights. Beliefs are cheap
                until they require a difficult conversation with the people you love.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-charcoal py-24 text-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
                The roadmap so far
              </span>
              <h2 className="font-serif text-4xl leading-tight">
                School, college, companies, awards, and certifications — one thread.
              </h2>
            </div>
            <Link
              to="/about"
              className="text-sm font-medium text-ivory/70 underline decoration-terracotta/60 underline-offset-4 hover:text-ivory"
            >
              Full journey →
            </Link>
          </div>

          {/* Résumé highlight */}
          <div className="mb-12 flex flex-col items-start gap-6 rounded-2xl border border-terracotta/40 bg-terracotta/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
                Résumé
              </span>
              <h3 className="font-serif text-2xl leading-tight text-ivory">
                The one-page version — preview or download.
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm text-ivory/70">
                Roles, scope, outcomes, tools — tight enough to skim, complete enough to trust.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Himanshu_Tiwari_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ivory/30 px-5 py-2.5 text-sm font-medium text-ivory hover:bg-ivory/10"
              >
                Preview
              </a>
              <a
                href="/Himanshu_Tiwari_CV.pdf"
                download
                className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-ivory hover:bg-terracotta/90"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Roadmap timeline */}
          {/* Legend */}
          <div className="mb-8 flex flex-wrap gap-4 text-[11px] uppercase tracking-widest text-ivory/60">
            {(["role", "award", "cert", "edu"] as MilestoneKind[]).map((k) => (
              <span key={k} className="inline-flex items-center gap-2">
                <span className={`inline-block size-2 rounded-full ${kindStyles[k].dot}`} />
                {kindStyles[k].label}
              </span>
            ))}
          </div>

          {/* Zig-zag "S-shape" roadmap */}
          <ol className="relative mx-auto max-w-4xl md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:-translate-x-1/2 md:before:bg-terracotta/30 md:before:content-['']">
            {milestones.map((m, i) => {
              const style = kindStyles[m.kind];
              const isRight = i % 2 === 1;
              return (
                <li
                  key={`${m.year}-${m.title}`}
                  className={`relative mb-8 flex flex-col md:mb-10 md:w-1/2 ${
                    isRight ? "md:ml-auto md:pl-12" : "md:pr-12"
                  }`}
                >
                  {/* Node on the center line (desktop) / left rail (mobile) */}
                  <span
                    className={`absolute left-0 top-1 flex size-5 items-center justify-center rounded-full border-2 bg-charcoal ${style.border} md:top-2 ${
                      isRight ? "md:-left-[10px]" : "md:left-auto md:-right-[10px]"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full ${style.dot}`} />
                  </span>
                  <div className={`pl-8 md:pl-0 ${isRight ? "" : "md:text-right"}`}>
                    <div
                      className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${
                        isRight ? "" : "md:justify-end"
                      }`}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
                        {m.year}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${style.chip}`}
                      >
                        {style.label}
                      </span>
                    </div>
                    <h4 className="mt-2 font-serif text-xl leading-snug text-ivory">{m.title}</h4>
                    {m.company ? (
                      <p className="mt-1 text-sm font-medium text-terracotta">{m.company}</p>
                    ) : null}
                    <p
                      className={`mt-2 text-sm leading-relaxed text-ivory/65 $