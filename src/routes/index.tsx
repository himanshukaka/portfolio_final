import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { notePages } from "../lib/questions-content";
import { posts } from "./online_writing";

export const Route = createFileRoute("/")({
  component: Home,
});

const thesisCards = [
  {
    tag: "Experiment",
    title: "Zunction.in",
    body: "A startup attempt that became a durable lesson on recurring demand.",
    to: "/zunction",
  },
  {
    tag: "Case Study",
    title: "CohortUp",
    body: "A product case study about shared activity and split-screen timelapses.",
    to: "/cohortup",
  },
  {
    tag: "Product concept",
    title: "Phone a Friend",
    body: "An AI conversation copilot for high-stakes phone calls.",
    to: "/phone_of_friend",
  },
  {
    tag: "Thesis",
    title: "Reimagining Indian Agriculture",
    body: "A long-term thesis on structural capital for farming.",
    to: "/reimagining_indian_agriculture",
  },
  {
    tag: "Thesis",
    title: "Employee's Skin in the Game",
    body: "A thesis on organizational conviction and distributed judgment.",
    to: "/employees_skin_in_the_game",
  },
];

const featuredPosts = [...posts].sort((a, b) => b.relevance - a.relevance).slice(0, 4);

const substackWritingItems = [
  {
    title: featuredPosts[0].title,
    href: featuredPosts[0].url,
  },
  {
    title: featuredPosts[2].title,
    href: featuredPosts[2].url,
  },
  {
    title: featuredPosts[3].title,
    href: featuredPosts[3].url,
  },
];

const twitterWritingItems = [
  {
    title: "Humanity is God by iteration",
    href: "https://x.com/_kaalik/status/1876716913071439947",
    date: "January 7, 2025",
  },
];

const writingItems = [
  {
    kind: "substack" as const,
    title: substackWritingItems[0].title,
    href: substackWritingItems[0].href,
  },
  {
    kind: "twitter" as const,
    title: twitterWritingItems[0].title,
    href: twitterWritingItems[0].href,
    date: twitterWritingItems[0].date,
  },
  {
    kind: "substack" as const,
    title: substackWritingItems[1].title,
    href: substackWritingItems[1].href,
  },
  {
    kind: "substack" as const,
    title: substackWritingItems[2].title,
    href: substackWritingItems[2].href,
  },
];

const compactSubstackHref = substackWritingItems[0].href;

const careerCards = [
  {
    duration: "06/2025 — Now",
    role: "Senior Product Manager",
    company: "Quess Corp Limited",
    body: "Productized the payroll platform into a configurable enterprise suite and onboarded 26 SaaS customers within a year.",
    to: "/career",
  },
  {
    duration: "12/2023 — 05/2025",
    role: "Product Manager",
    company: "Avsar HR Services",
    body: "Turned an internal workforce platform into HR10X and shipped workflow, signing, and lifecycle infrastructure.",
    to: "/career",
  },
  {
    duration: "05/2023 — 11/2023",
    role: "Co-founder",
    company: "Zunction.in",
    body: "Built a marketplace for shared teaching spaces and learned how distribution can outlast the idea.",
    to: "/zunction",
  },
  {
    duration: "04/2022 — 04/2023",
    role: "Python Developer",
    company: "Lokyata",
    body: "Worked on credit-union integrations, ETL pipelines, and operational reporting.",
    to: "/career",
  },
  {
    duration: "07/2019 — 04/2022",
    role: "Product Manager",
    company: "Avsar HR Services",
    body: "Led the move from a third-party workforce platform to a proprietary enterprise platform and built the foundation for later SaaS commercialization.",
    to: "/career",
  },
];

function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.getElementById("x-embed-script") as HTMLScriptElement | null;
    if (existing) {
      window?.twttr?.widgets?.load();
      return;
    }

    const script = document.createElement("script");
    script.id = "x-embed-script";
    script.src = "https://platform.x.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = () => window?.twttr?.widgets?.load();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-[linear-gradient(180deg,#fbf7ef_0%,#f8f4eb_55%,#f7f1e7_100%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-8 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:pb-10 lg:pt-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-terracotta" />
              Himanshu Tiwari
            </div>
            <h1 className="mt-6 max-w-[11ch] font-serif text-5xl leading-[0.92] tracking-tight text-balance lg:text-[6.1rem]">
              I study systems.
              <br />
              Build products.
              <br />
              Write ideas.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/72 text-pretty lg:text-[1.04rem]">
              Product leader with a builder's bias. I write about products, markets, and the
              incentives around them.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/career"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
              >
                View Career
              </Link>
              <Link
                to="/online_writing"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-secondary"
              >
                Explore Writing
              </Link>
              <Link
                to="/cohortup"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-secondary"
              >
                Open CohortUp
              </Link>
            </div>
          </div>

          <aside className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,#fffdf9_0%,#fbf8f1_100%)] shadow-[0_12px_40px_rgba(23,23,23,0.05)]">
            <div className="border-b border-border px-5 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Current focus
              </div>
              <div className="mt-1 text-sm text-charcoal/65">
                Systems, products, and the long arc of compounding work.
              </div>
            </div>

            <div className="grid gap-4 p-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-border bg-white p-4">
                <div className="absolute left-4 top-4 h-18 w-14 rounded-xl border border-border bg-[#f7f2e9]" />
                <div className="absolute left-28 top-6 h-6 w-20 rounded-full border border-charcoal/12 bg-white" />
                <div className="absolute left-24 top-8 h-28 w-px origin-top rotate-[24deg] bg-charcoal/20" />
                <div className="absolute left-24 top-22 h-22 w-22 rounded-full border border-border bg-white/80" />

                <div className="absolute right-6 top-6 h-22 w-32 rounded-2xl border border-border bg-[#f6f3ed] shadow-[0_8px_24px_rgba(23,23,23,0.05)]" />
                <div className="absolute right-10 top-32 h-28 w-24 rounded-2xl border border-border bg-[#f7f5f0] shadow-[0_8px_24px_rgba(23,23,23,0.05)]" />
                <div className="absolute right-32 top-34 h-18 w-18 rounded-[20px] border border-border bg-[#fcfbf8] shadow-[0_8px_24px_rgba(23,23,23,0.04)]" />

                <div className="absolute bottom-8 left-7 h-26 w-38 rounded-[22px] border border-border bg-[#fcfbf8] p-4">
                  <div className="h-2 w-20 rounded-full bg-terracotta/80" />
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full rounded-full bg-charcoal/12" />
                    <div className="h-2 w-3/4 rounded-full bg-charcoal/12" />
                    <div className="h-2 w-2/3 rounded-full bg-charcoal/12" />
                  </div>
                </div>

                <div className="absolute right-8 top-14 space-y-1.5 text-right font-serif text-[clamp(1.05rem,1.8vw,1.5rem)] leading-none text-charcoal/82">
                  <div>I study systems.</div>
                  <div>Build products.</div>
                  <div>Write to think.</div>
                </div>

                <div className="absolute bottom-10 right-8 h-28 w-20 rounded-2xl border border-border bg-[#f7f2eb] p-3">
                  <div className="space-y-2">
                    <div className="h-2 w-10 rounded-full bg-terracotta/80" />
                    <div className="h-2 w-12 rounded-full bg-charcoal/12" />
                    <div className="h-2 w-8 rounded-full bg-charcoal/12" />
                  </div>
                  <div className="mt-6 h-12 rounded-xl border border-charcoal/10 bg-white/70" />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[24px] border border-border bg-white p-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
                    Notes
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-charcoal/75">
                    <li>Studying incentives before interfaces.</li>
                    <li>Keeping the homepage short and the thinking deep.</li>
                    <li>Designing products that survive complexity instead of hiding it.</li>
                  </ul>
                </div>
                <div className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                  Calm confidence. Editorial structure. Long memory.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SectionRail
        eyebrow="Career"
        title="Where I worked"
        lede="Roles, companies, and duration."
        ctaLabel="Open career"
        ctaTo="/career"
      >
        {careerCards.map((item) => (
          <Link
            key={`${item.role}-${item.duration}`}
            to={item.to}
            className="group flex h-[300px] w-[360px] shrink-0 flex-col rounded-[24px] border border-border bg-white p-5 transition-colors hover:border-terracotta/45 hover:shadow-[0_12px_40px_rgba(23,23,23,0.04)]"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              {item.duration}
            </div>
            <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-charcoal">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-charcoal/65">{item.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.body}</p>
            <div className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-charcoal/80">
              Open
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </SectionRail>

        <SectionRail
          eyebrow="Theses"
          title="Theses & Experiments"
          lede="Product theses and experiments that taught the sharpest lessons."
          ctaLabel="Open Experiments"
        ctaTo="/experiments"
      >
        {thesisCards.map((card) => (
          <Link
            key={card.title}
            to={card.to}
            className="group flex h-[300px] w-[360px] shrink-0 flex-col rounded-[24px] border border-border bg-white p-5 transition-colors hover:border-terracotta/45"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              {card.tag}
            </div>
            <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-charcoal">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{card.body}</p>
            <div className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-charcoal/80">
              Open
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </SectionRail>

      <SectionRail
        eyebrow="UX Notes"
        title="UX Notes"
        lede="Observation-led case studies, each expanded into its own page."
        ctaLabel="Open Notes"
        ctaTo="/ux_notes"
      >
        {notePages.map((item, index) => (
          <Link
            key={item.slug}
            to={item.route}
            className="group flex h-[300px] w-[360px] shrink-0 flex-col rounded-[24px] border border-border bg-white p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.eyebrow}</span>
            </div>
            <div className="mt-4 h-px w-full bg-border" />
            <h3 className="mt-4 font-serif text-[1.7rem] leading-tight text-charcoal">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.lede}</p>
            <div className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-charcoal/80">
              Open
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </SectionRail>

      <SectionRail
        eyebrow="Online Writing"
        title="Online Writing"
        lede="Substack essays and Twitter notes in one line."
        ctaLabel="Open Writing"
        ctaTo="/online_writing"
      >
        <HorizontalRail>
          {writingItems.map((item) =>
            item.kind === "substack" ? (
              item.href === compactSubstackHref ? (
                <article
                  key={`${item.kind}-${item.href}`}
                  className="flex h-[120px] w-[460px] shrink-0 flex-col justify-end overflow-hidden rounded-[24px] border border-border bg-white p-4"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/80"
                  >
                    Read on Substack
                    <ArrowUpRight className="size-4" />
                  </a>
                </article>
              ) : (
                <article
                  key={`${item.kind}-${item.href}`}
                  className="flex h-[460px] w-[460px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-border bg-white p-4"
                >
                  <iframe
                    src={substackEmbedUrl(item.href)}
                    title={item.title}
                    loading="lazy"
                    sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                    className="h-[380px] w-full border-0"
                  />
                </article>
              )
            ) : (
              <article
                key={`${item.kind}-${item.href}`}
                className="flex h-[460px] w-[460px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-border bg-white p-4"
              >
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Humanity is God by iteration
                  </p>
                  &mdash; himanshu (@_kaalik){" "}
                  <a href={item.href}>{item.date}</a>
                </blockquote>
              </article>
            ),
          )}
        </HorizontalRail>
      </SectionRail>
    </div>
  );
}

function SectionRail({
  eyebrow,
  title,
  lede,
  ctaLabel,
  ctaTo,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  ctaLabel: string;
  ctaTo: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 lg:py-10">
      <div className="mb-4 flex items-start justify-between gap-6">
        <div>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal/55">
            {eyebrow}
          </span>
          <h2 className="max-w-2xl font-serif text-[1.85rem] leading-tight text-balance lg:text-[2.2rem]">
            {title}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-charcoal/68 text-pretty lg:text-[0.95rem]">
            {lede}
          </p>
        </div>
      <Link
          to={
            ctaTo as
              | "/"
              | "/online_writing"
              | "/ux_notes"
              | "/career"
              | "/experiments"
              | "/zunction"
              | "/cohortup"
              | "/phone_of_friend"
          }
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 hover:decoration-charcoal/50"
        >
          {ctaLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <HorizontalRail>{children}</HorizontalRail>
    </section>
  );
}

function HorizontalRail({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex w-max gap-4">{children}</div>
    </div>
  );
}

function substackEmbedUrl(postUrl: string): string {
  try {
    const u = new URL(postUrl);
    return `${u.origin}/embed${u.pathname}`;
  } catch {
    return postUrl;
  }
}
