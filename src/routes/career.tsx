import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Himanshu Tiwari" },
      {
        name: "description",
        content: "A compact career page with a simple timeline of education, employment, and entrepreneurship.",
      },
      { property: "og:title", content: "Career — Himanshu Tiwari" },
      {
        property: "og:description",
        content: "A simple vertical map of education, employment, and entrepreneurship.",
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
    year: "2015 — 2019",
    kind: "education" as const,
    role: "NIT Bhopal",
    company: "B.Tech",
    location: "Bhopal",
    awards: ["Taking Forward — Trading Certificate", "Machine Learning A–Z"],
    note: "Gave me time to reflect and understand myself and the world.",
  },
  {
    year: "2015",
    kind: "education" as const,
    role: "JEE Advanced",
    company: "All India Rank 7151",
    location: "India",
    note: "The exam that opened the path to engineering.",
  },
];

function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        eyebrowColor="text-terracotta"
        title={
          <>
            Three E's of My Careeer
          </>
        }
        lede="Education, Employment, and Entreprenuership"
      />

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <a
          href="/Himanshu_Tiwari_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-charcoal px-5 py-3 text-sm font-medium text-ivory shadow-[0_12px_30px_rgba(23,23,23,0.12)] transition-transform hover:-translate-y-0.5 hover:bg-charcoal/90"
        >
          Preview résumé
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ol className="relative mx-auto max-w-4xl border-l-2 border-terracotta/25 pl-8">
            {career.map((item) => (
              <li key={`${item.year}-${item.role}`} className="relative pb-10 last:pb-0">
                <span
                  className={
                    "absolute -left-[41px] mt-2 flex size-5 items-center justify-center rounded-full border-2 bg-ivory " +
                    (item.kind === "education"
                      ? "border-sky-600"
                      : item.kind === "award"
                      ? "border-marigold"
                      : item.kind === "cert"
                        ? "border-charcoal/55"
                        : "border-terracotta")
                  }
                >
                  <span
                    className={
                      "size-1.5 rounded-full " +
                      (item.kind === "education"
                        ? "bg-sky-600"
                        : item.kind === "award"
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
                        className="inline-flex items-center rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta"
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
