import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Biography, career journey, milestones, awards, education, and how to get in touch.",
      },
      { property: "og:title", content: "About — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Senior Product Manager building enterprise platforms and AI-assisted workflows. Also: economics, entrepreneurship, and systems.",
      },
    ],
  }),
  component: AboutPage,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/himanshu-tiwari-pm";
const EMAIL = "htatdot@gmail.com";

const journey = [
  {
    year: "01/2026",
    kind: "award" as const,
    role: "Standout Performer Award — Q3 FY2025–26",
    company: "Quess Corp Limited",
    location: "Recognition",
    note:
      "For driving high-impact product initiatives, cross-functional execution, and business-focused outcomes on the Hamara Suite.",
  },
  {
    year: "06/2025 — Now",
    kind: "role" as const,
    role: "Senior Product Manager",
    company: "Quess Corp Limited",
    location: "Bengaluru",
    note:
      "Productized Quess' internal payroll platform into the Hamara Suite — configurable payroll cycles, batching, reusable workflows, tenant-level configuration. Onboarded 26 enterprise SaaS customers within a year; introduced AI-assisted upload mapping across 7 workflows (~65% auto-mapped); rebuilt operational tooling for a Managed Service platform supporting payroll for 38K+ employees.",
  },
  {
    year: "12/2023 — 05/2025",
    kind: "role" as const,
    role: "Product Manager",
    company: "Avsar HR Services",
    location: "Bengaluru",
    note:
      "Productized the internal workforce platform into HR10X — a configurable SaaS product with 12 enterprise customers and 35K+ client employees in year one. Shipped a digital-signature platform (1,000+ signed letters/month) and a configurable Workforce Lifecycle Engine on an Assignment-ID architecture.",
  },
  {
    year: "05/2023 — 11/2023",
    kind: "role" as const,
    role: "Co-founder",
    company: "Zunction.in",
    location: "Indore",
    note:
      "Built a 0→1 EdTech ecosystem around shared infrastructure for edupreneurs. Closed 8 B2B subleasing partnerships through direct market outreach and founder-led sales.",
  },
  {
    year: "04/2022 — 04/2023",
    kind: "role" as const,
    role: "Python Developer",
    company: "Lokyata",
    location: "Bengaluru",
    note:
      "Integrated external credit-union APIs and built Python/SQL ETL pipelines for large-scale data processing and operational reporting.",
  },
  {
    year: "12/2021",
    kind: "award" as const,
    role: "Catalyst of Change — CY 2021",
    company: "Avsar HR Services",
    location: "Recognition",
    note:
      "For leading change management around the in-house HRMS rollout — cross-functional adoption and scalable workforce transformation.",
  },
  {
    year: "07/2019 — 04/2022",
    kind: "role" as const,
    role: "Product Manager",
    company: "Avsar HR Services",
    location: "Bengaluru",
    note:
      "Led migration from a third-party workforce platform to a proprietary enterprise platform — ₹26.4L in annual recurring savings and the foundation for later SaaS commercialization. Built a unified Hire-to-Retire platform (15K+ active employees, 3,000+ monthly hires) and a configurable ATS for high-volume blue-collar hiring (5,000+ candidates/month).",
  },
  {
    year: "2019",
    kind: "cert" as const,
    role: "Machine Learning A–Z",
    company: "Udemy",
    location: "Certification · in college",
    note:
      "Picked up in the final year at NIT, before joining Avsar. To build a working intuition for ML models, not just APIs — regression, classification, clustering, and where they break.",
  },
  {
    year: "2016",
    kind: "cert" as const,
    role: "Taking Forward — Trading Certificate",
    company: "Independent",
    location: "Certification",
    note:
      "I believe in skin in the game. Learning to trade taught me risk, position sizing, and the difference between opinion and conviction.",
  },
  {
    year: "2015 — 2019",
    kind: "role" as const,
    role: "B.Tech, Mechanical Engineering",
    company: "Maulana Azad NIT, Bhopal",
    location: "Bhopal",
    note:
      "Engineering opened the first door. JEE Advanced 2015 — AIR 7151. The years after turned into operations, code, product, and a taste for systems.",
  },
  {
    year: "2014",
    kind: "cert" as const,
    role: "Class XII — 86.6%",
    company: "MP Board",
    location: "Schooling",
    note:
      "Higher secondary, Madhya Pradesh Board. Physics, Chemistry, Mathematics — the runway into JEE and engineering.",
  },
  {
    year: "2012",
    kind: "cert" as const,
    role: "Class X — 85.6%",
    company: "MP Board",
    location: "Schooling",
    note:
      "Where the habit of showing up early and finishing the paper first started. Same board, same town, different problem sets.",
  },
];

const tools = [
  "Python", "SQL", "REST APIs", "Figma", "Jira", "Amplitude", "MySQL", "FastAPI", "Flutter", "React", "ETL Pipelines", "Prompt Engineering",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A short biography for a long, non-linear path.</>}
      />
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-5 text-lg leading-relaxed text-charcoal/85 text-pretty">
          <p>
            I'm Himanshu Tiwari. My path into product wasn't linear. Engineering taught me to
            decompose problems. Business operations showed me that real
            organizations rarely behave like process diagrams. Writing software
            taught me what technology can and cannot solve. Product management
            gave me a place to combine those perspectives.
          </p>
          <p>
            Along the way I tried building a company, built internal platforms,
            helped turn operational software into SaaS products, worked on
            enterprise systems, modernized business-critical platforms with
            AI-assisted workflows — and kept writing about questions far
            outside my job description.
          </p>
          <p>
            I'm interested in people and systems: incentives and interfaces,
            businesses and behaviour, economics and writing. I don't see those
            interests as contradictions.
          </p>
        </div>
      </section>

      {/* Why Kaka? */}
      <section className="border-y border-charcoal/10 bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Why Kaka?
          </span>
          <h2 className="font-serif text-4xl leading-tight text-balance lg:text-5xl">
            I have a theory that nicknames tell you more about people than names ever can.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/85 text-pretty">
            <p>
              Names are given before anyone knows us. Nicknames arrive later,
              after people have had enough time to notice our patterns.
            </p>
            <p>
              My friends started calling me{" "}
              <em className="not-italic text-terracotta">Kaka</em> — Hindi for
              uncle — because I had an annoying habit of having a theory,
              explanation, or obscure piece of information for almost
              everything.
            </p>
            <p>Often without being asked.</p>
            <p>Apparently, the name stuck.</p>
            <p className="text-charcoal/60">Unfortunately, so did the habit.</p>
          </div>
          <div className="mt-10 border-l-2 border-terracotta pl-6 font-serif text-lg italic text-charcoal/70">
            The domain is called kakaapparently.com for the same reason. The
            work is filed under Himanshu Tiwari because that is the name on the
            paperwork.
          </div>
        </div>
      </section>

      {/* Résumé pointer */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-charcoal/10">
        <div className="flex flex-col items-start gap-6 rounded-2xl border-2 border-terracotta/30 bg-terracotta/5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              The one-page version
            </span>
            <h3 className="font-serif text-2xl leading-tight text-balance">
              Prefer the résumé? Preview or download the PDF.
            </h3>
            <p className="mt-2 max-w-[52ch] text-sm text-charcoal/70">
              Same story, tighter format — roles, scope, outcomes, tools.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/Himanshu_Tiwari_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-charcoal/20 bg-ivory px-5 py-2.5 text-sm font-medium hover:bg-charcoal/5"
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
      </section>

      {/* Career roadmap */}
      <section className="mx-auto max-w-4xl border-t border-charcoal/10 px-6 py-12 lg:py-14">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          The roadmap
        </span>
        <h2 className="mb-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
          Roles, companies, awards, and certifications — in one thread.
        </h2>
        <div className="mb-10 flex flex-wrap gap-3 text-[11px] uppercase tracking-widest text-charcoal/60">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-terracotta" /> Role
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-amber-500" /> Award
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-charcoal/70" /> Certification
          </span>
        </div>
        <ol className="relative border-l-2 border-terracotta/30 pl-8">
          {journey.map((j, i) => (
            <li key={j.year} className="relative pb-8 last:pb-0">
              <span
                className={
                  "absolute -left-[41px] mt-2 flex size-5 items-center justify-center rounded-full border-2 bg-ivory " +
                  (j.kind === "award"
                    ? "border-amber-500"
                    : j.kind === "cert"
                    ? "border-charcoal/60"
                    : "border-terracotta")
                }
              >
                <span
                  className={
                    "size-1.5 rounded-full " +
                    (j.kind === "award"
                      ? "bg-amber-500"
                      : j.kind === "cert"
                      ? "bg-charcoal/70"
                      : "bg-terracotta")
                  }
                />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-terracotta">
                  {j.year}
                </span>
                {j.kind !== "role" ? (
                  <span
                    className={
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest " +
                      (j.kind === "award"
                        ? "bg-amber-500/15 text-amber-700"
                        : "bg-charcoal/10 text-charcoal/70")
                    }
                  >
                    {j.kind === "award" ? "Award" : "Certification"}
                  </span>
                ) : null}
                {j.location ? (
                  <span className="text-[11px] uppercase tracking-widest text-charcoal/40">
                    · {j.location}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 font-serif text-xl leading-snug text-balance lg:text-2xl">
                {j.role}
              </h3>
              {j.company ? (
                <p className="mt-1 text-sm font-medium text-terracotta">
                  {j.company}
                </p>
              ) : null}
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-charcoal/75">
                {j.note}
              </p>
              {i === 0 && j.kind === "role" ? (
                <span className="mt-3 inline-block rounded-full bg-terracotta/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-terracotta">
                  Currently here
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-charcoal/10">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Tools & technical fluency
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="rounded-full border border-charcoal/15 px-4 py-1.5 text-sm text-charcoal/70">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-charcoal/10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Contact
        </h2>
        <p className="font-serif text-3xl leading-tight text-balance">
          The best way to reach me is a short, specific email.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-charcoal px-6 py-3 font-medium text-ivory hover:bg-charcoal/85"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-charcoal/15 px-6 py-3 font-medium hover:bg-charcoal/5"
          >
            LinkedIn ↗
          </a>
          <a
            href="/Himanshu_Tiwari_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-charcoal/15 px-6 py-3 font-medium hover:bg-charcoal/5"
          >
            Résumé (PDF)
          </a>
        </div>
        <p className="mt-4 text-xs text-charcoal/50">
          Based in Bengaluru, India.
        </p>
      </section>
    </>
  );
}
