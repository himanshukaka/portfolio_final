import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A compact career page with a timeline of roles, recognitions, and the work behind them.",
      },
      { property: "og:title", content: "Career — Himanshu Tiwari" },
      {
        property: "og:description",
        content: "A clean career timeline with roles, recognitions, and a short biography.",
      },
    ],
  }),
  component: CareerPage,
});

const career = [
  {
    year: "06/2025 — Now",
    kind: "role" as const,
    role: "Senior Product Manager",
    company: "Quess Corp Limited",
    location: "Bengaluru",
    awards: ["Standout Performer"],
    note: "Productized Quess' internal payroll platform into the Hamara Suite — configurable payroll cycles, batching, reusable workflows, tenant-level configuration. Onboarded 26 enterprise SaaS customers within a year; introduced AI-assisted upload mapping across 7 workflows; rebuilt operational tooling for a Managed Service platform supporting payroll for 38K+ employees.",
  },
  {
    year: "12/2023 — 05/2025",
    kind: "role" as const,
    role: "Product Manager",
    company: "Avsar HR Services",
    location: "Bengaluru",
    note: "Productized the internal workforce platform into HR10X — a configurable SaaS product with 12 enterprise customers and 35K+ client employees in year one. Shipped a digital-signature platform (1,000+ signed letters/month) and a configurable Workforce Lifecycle Engine on an Assignment-ID architecture.",
  },
  {
    year: "05/2023 — 11/2023",
    kind: "role" as const,
    role: "Co-founder",
    company: "Zunction.in",
    location: "Indore",
    note: "Built a 0→1 EdTech ecosystem around shared infrastructure for edupreneurs. Closed 8 B2B subleasing partnerships through direct market outreach and founder-led sales.",
  },
  {
    year: "04/2022 — 04/2023",
    kind: "role" as const,
    role: "Python Developer",
    company: "Lokyata",
    location: "Bengaluru",
    note: "Integrated external credit-union APIs and built Python/SQL ETL pipelines for large-scale data processing and operational reporting.",
  },
  {
    year: "07/2019 — 04/2022",
    kind: "role" as const,
    role: "Product Manager",
    company: "Avsar HR Services",
    location: "Bengaluru",
    awards: ["Catalyst of Change"],
    note: "Led migration from a third-party workforce platform to a proprietary enterprise platform — ₹26.4L in annual recurring savings and the foundation for later SaaS commercialization. Built a unified Hire-to-Retire platform (15K+ active employees, 3,000+ monthly hires) and a configurable ATS for high-volume blue-collar hiring (5,000+ candidates/month).",
  },
  {
    year: "2019",
    kind: "cert" as const,
    role: "Machine Learning A–Z",
    company: "Udemy",
    location: "Certificate",
    note: "Picked up in the final year at NIT, before joining Avsar. Built a working intuition for ML models: regression, classification, clustering, and where they break.",
  },
  {
    year: "2016",
    kind: "cert" as const,
    role: "Taking Forward — Trading Certificate",
    company: "Independent",
    location: "Certificate",
    note: "Learning to trade taught me risk, position sizing, and the difference between opinion and conviction.",
  },
];

function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        eyebrowColor="text-terracotta"
        title={<>The work, in sequence.</>}
        lede="A stripped-down career page with the timeline first and the quieter recognitions underneath."
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-charcoal/82 text-pretty">
            <p>
              I'm Himanshu Tiwari. My path into product wasn't linear. Engineering taught me to
              decompose problems. Business operations showed me that real organizations rarely
              behave like process diagrams. Writing software taught me what technology can and
              cannot solve. Product management gave me a place to combine those perspectives.
            </p>
            <p>
              Along the way I tried building a company, built internal platforms, helped turn
              operational software into SaaS products, worked on enterprise systems, modernized
              business-critical platforms with AI-assisted workflows, and kept writing about
              questions outside my job description.
            </p>
            <p>
              I care about people and systems: incentives and interfaces, businesses and
              behaviour, economics and writing.
            </p>
          </div>

          <div className="border-t border-border pt-5 text-sm leading-relaxed text-charcoal/68">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Quick details
            </div>
            <p className="mt-4">Based in Bengaluru, India.</p>
            <p className="mt-2">Senior PM across enterprise systems and SaaS.</p>
            <p className="mt-2">Founder-led marketplace experiment: Zunction.in.</p>
            <p className="mt-2">Writes under Tenets of 21st Century.</p>
            <a
              href="/Himanshu_Tiwari_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-medium text-charcoal underline decoration-terracotta/50 underline-offset-4 hover:decoration-terracotta"
            >
              Preview résumé →
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
              Timeline
            </span>
            <h2 className="font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Work history, with the timeline still visible.
            </h2>
          </div>

          <ol className="relative mx-auto max-w-4xl border-l-2 border-terracotta/25 pl-8">
            {career.map((item) => (
              <li key={`${item.year}-${item.role}`} className="relative pb-10 last:pb-0">
                <span
                  className={
                    "absolute -left-[41px] mt-2 flex size-5 items-center justify-center rounded-full border-2 bg-ivory " +
                    (item.kind === "award"
                      ? "border-marigold"
                      : item.kind === "cert"
                        ? "border-charcoal/55"
                        : "border-terracotta")
                  }
                >
                  <span
                    className={
                      "size-1.5 rounded-full " +
                      (item.kind === "award"
                        ? "bg-marigold"
                        : item.kind === "cert"
                          ? "bg-charcoal/70"
                          : "bg-terracotta")
                    }
                  />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-terracotta">
                    {item.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-charcoal/40">
                    · {item.location}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-balance text-charcoal">
                  {item.role}
                </h3>
                {item.company ? (
                  <p className="mt-1 text-sm font-medium text-terracotta">{item.company}</p>
                ) : null}
                {"awards" in item && item.awards?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.awards.map((award) => (
                      <span
                        key={award}
                        className="inline-flex items-center rounded-full border border-terracotta/20 bg-terracotta/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                ) : null}
                <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-charcoal/75">
                  {item.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
