import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  CircleDollarSign,
  CloudRain,
  Cog,
  Grid2x2,
} from "lucide-react";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/reimagining_indian_agriculture")({
  head: () => ({
    meta: [
      { title: "Reimagining Indian Agriculture — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A long-term thesis on redesigning the financial and operational architecture of Indian farming.",
      },
      {
        property: "og:title",
        content: "Reimagining Indian Agriculture — Himanshu Tiwari",
      },
      {
        property: "og:description",
        content:
          "A personal thesis on structural innovation in Indian agriculture.",
      },
      { property: "og:url", content: "/reimagining_indian_agriculture" },
    ],
    links: [{ rel: "canonical", href: "/reimagining_indian_agriculture" }],
  }),
  component: ReimaginingIndianAgriculturePage,
});

const structuralProblems = [
  {
    title: "Fragmented Land",
    icon: Grid2x2,
    body:
      "Average land holdings continue shrinking, preventing economies of scale and making modern farming economically difficult.",
  },
  {
    title: "No Equity Capital",
    icon: CircleDollarSign,
    body:
      "Agriculture is financed almost entirely through debt, subsidies, and seasonal credit. Unlike nearly every other industry, farms rarely receive long-term risk capital.",
  },
  {
    title: "Concentrated Risk",
    icon: CloudRain,
    body:
      "Weather, commodity prices, disease, and policy changes are borne almost entirely by individual farming households. There is little diversification.",
  },
  {
    title: "Operational Complexity",
    icon: Cog,
    body:
      "Modern farming requires expertise across agronomy, logistics, procurement, storage, compliance, and market timing. Most small farmers manage every function themselves.",
  },
];

const instruments = [
  {
    title: "Farm Revenue Units",
    body:
      "Investors finance productivity improvements in exchange for a defined share of future farm revenues over a fixed period.",
  },
  {
    title: "Farm Productivity Funds",
    body:
      "Capital pools investing in irrigation, mechanization, storage, and soil improvements across diversified farm portfolios.",
  },
  {
    title: "Crop Portfolio Investing",
    body:
      "Instead of exposure to one farm, investors participate in diversified regional crop portfolios to reduce risk.",
  },
  {
    title: "Soil Improvement Notes",
    body:
      "Capital dedicated to long-term land productivity, with returns linked to measurable improvements in output over multiple seasons.",
  },
];

const capitalExamples = [
  "Factories have shareholders.",
  "Infrastructure has InvITs.",
  "Commercial real estate has REITs.",
  "Startups have venture capital.",
];

const timeline = ["Mechanization", "Green Revolution", "Digital Agriculture", "Structural Capital"];

const todayRisk = ["Weather", "Market", "Input Costs", "Disease", "Policy"];

function ReimaginingIndianAgriculturePage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Thesis"
        eyebrowColor="text-leaf"
        title={<>Reimagining Indian Agriculture</>}
        lede="A long-term thesis on redesigning the financial and operational architecture of farming."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="rounded-[34px] border border-border bg-white p-7 shadow-[0_16px_40px_rgba(23,23,23,0.04)] lg:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
            Hero
          </div>
          <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] tracking-tight text-balance lg:text-[4.6rem]">
            Agriculture doesn't have a technology problem.
            <br />
            It has a structural capital problem.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/72">
            India has one of the world's largest agricultural workforces, yet farmers continue to
            operate under fragmented landholdings, volatile incomes, limited access to growth
            capital, and nearly complete exposure to operational risk. Innovation has mostly
            focused on seeds, fertilizers, drones, and marketplaces. I believe the next frontier
            lies in redesigning the underlying financial architecture of agriculture itself.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal/58">
            This page explores that thesis.
          </p>
        </article>

        <aside className="rounded-[34px] border border-border bg-[#faf8f4] p-6">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf">
            <span>Background loop</span>
            <span>Animated concept</span>
          </div>
          <div className="mt-6 rounded-[28px] border border-charcoal/10 bg-white p-5 shadow-[0_14px_40px_rgba(23,23,23,0.04)]">
            <div className="space-y-3 text-sm font-medium text-charcoal/78">
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Small Farms
              </div>
              <div className="flex justify-center text-charcoal/40">
                <ArrowDown className="size-4 animate-bounce" />
              </div>
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Fragmentation
              </div>
              <div className="flex justify-center text-charcoal/40">
                <ArrowDown className="size-4 animate-bounce" />
              </div>
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Low Productivity
              </div>
              <div className="flex justify-center text-charcoal/40">
                <ArrowDown className="size-4 animate-bounce" />
              </div>
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Low Income
              </div>
              <div className="flex justify-center text-charcoal/40">
                <ArrowDown className="size-4 animate-bounce" />
              </div>
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Low Investment
              </div>
              <div className="flex justify-center text-charcoal/40">
                <ArrowDown className="size-4 animate-bounce" />
              </div>
              <div className="rounded-[20px] border border-charcoal/10 bg-[#fbfaf7] px-4 py-3">
                Back to Small Farms
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              The structural problems
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/70">
              These are the constraints that keep repeating across the system. The problem is not
              one tool. It is the architecture beneath the tools.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {structuralProblems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-charcoal/10 bg-[#fbfaf7] p-6 shadow-[0_14px_40px_rgba(23,23,23,0.03)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-charcoal/10 bg-white text-charcoal/70">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-balance text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/72">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              My thesis
            </div>
            <blockquote className="mt-4 max-w-[12ch] font-serif text-5xl leading-[0.94] tracking-tight text-balance">
              What if farming was treated like an investable productive asset rather than an
              isolated livelihood?
            </blockquote>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-charcoal/72">
            <p>
              The future may require new institutional layers between capital and cultivation. That
              means looking beyond incremental farm tech and toward a new operating model where
              farmers keep land ownership while participating in shared economic upside.
            </p>
            <div className="rounded-[30px] border border-border bg-[#fbf8f3] p-6 shadow-[0_14px_40px_rgba(23,23,23,0.03)]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                Proposed structure
              </div>
              <div className="mt-5 space-y-3 text-sm font-medium text-charcoal/80">
                <div>Farmer</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Farmer Cooperative / FPO</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Professional Farm Management Platform</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Technology + Agronomy + Operations</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Institutional Capital</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Higher Productivity</div>
                <div className="pl-4 text-charcoal/35">
                  <ArrowDown className="size-4 animate-bounce" />
                </div>
                <div>Shared Economic Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#f8f6f1]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                Capital should flow differently
              </div>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-tight text-balance text-charcoal">
                Land ownership does not have to be the same thing as economic participation.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-charcoal/72">
              <p>
                Every major industry has mechanisms for equity investment. Agriculture, despite
                employing millions, largely lacks scalable equity-like structures. Rather than
                transferring land ownership, the opportunity lies in creating financial instruments
                that let investors participate in productivity while farmers retain ownership.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {capitalExamples.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-charcoal/10 bg-white px-5 py-4 text-sm font-medium text-charcoal/78 shadow-[0_10px_30px_rgba(23,23,23,0.03)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-[22px] border border-charcoal/10 bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/70">
                Land Ownership ≠ Economic Participation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
            Financial instruments worth exploring
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            These are exploratory concepts rather than finalized financial products.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {instruments.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-border bg-white p-6 shadow-[0_14px_40px_rgba(23,23,23,0.04)]"
            >
              <h3 className="font-serif text-3xl leading-tight text-balance text-charcoal">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/72">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                Risk should be distributed
              </div>
              <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[0.95] tracking-tight text-balance">
                Risk today is concentrated on one household.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-border bg-[#fbf8f3] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/55">
                  Today
                </div>
                <div className="mt-5 rounded-[24px] border border-charcoal/10 bg-white p-5">
                  <div className="font-serif text-2xl">Farmer</div>
                  <div className="mt-4 grid gap-2 text-sm text-charcoal/72">
                    {todayRisk.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-terracotta" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-[#fbf8f3] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/55">
                  Proposed
                </div>
                <div className="mt-5 space-y-3 rounded-[24px] border border-charcoal/10 bg-white p-5 text-sm font-medium text-charcoal/80">
                  <div>Weather</div>
                  <div>↓ Insurance</div>
                  <div>↓ Capital Pool</div>
                  <div>↓ Diversified Portfolio</div>
                  <div>↓ Professional Operations</div>
                  <div>↓ Farmer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              Technology alone isn't enough
            </div>
            <p className="mt-4 max-w-sm font-serif text-3xl leading-tight text-balance text-charcoal">
              The history of agriculture is a history of partial upgrades.
            </p>
          </div>
          <div className="rounded-[30px] border border-border bg-[#fbf8f3] p-6 shadow-[0_14px_40px_rgba(23,23,23,0.03)]">
            <div className="grid gap-3 md:grid-cols-4">
              {timeline.map((step, index) => (
                <div key={step} className="flex items-center gap-3 md:flex-col md:items-stretch">
                  <div className="flex h-20 flex-1 items-center justify-center rounded-[18px] border border-charcoal/10 bg-white px-3 text-center text-sm font-medium text-charcoal/80">
                    {step}
                  </div>
                  {index < timeline.length - 1 ? (
                    <div className="hidden h-px w-full bg-border md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <blockquote className="rounded-[32px] border border-border bg-[#f9f7f2] px-8 py-10 text-center font-serif text-4xl leading-tight italic tracking-tight text-balance text-charcoal/80">
          The goal is not to automate farming into a software problem.
          <br />
          It is to build institutions that make farming investable, resilient, and worth compounding.
        </blockquote>
      </section>
    </div>
  );
}
