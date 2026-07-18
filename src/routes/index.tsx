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
    title: "CohortUp",
    body: "A product experiment around creation of virtue based social media",
    to: "/cohortup",
  },
  {
    tag: "Experiment",
    title: "Phone a Friend",
    body: "An AI conversation copilot for high-stakes phone calls.",
    to: "/phone_of_friend",
  },
  {
    tag: "Thesis",
    title: "Reimagining Indian Agriculture",
    body: "A thesis on structural fix for Indian agriculture.",
    to: "/reimagining_indian_agriculture",
  },
  {
    tag: "Thesis",
    title: "Employee's Skin in the Game",
    body: "A thesis on organizational conviction and distributed information.",
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
    title: featuredPosts[1].title,
    href: featuredPosts[1].url,
  },
  {
    title: featuredPosts[2].title,
    href: featuredPosts[2].url,
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
    duration: "06/2025 — Present",
    role: "Senior Product Manager",
    company: "Quess Corp Limited",
    body: "Productized the payroll platform into a configurable enterprise suite.",
    to: "/career",
  },
  {
    duration: "12/2023 — 05/2025",
    role: "Product Manager",
    company: "Avsar HR Services",
    body: "Turned an internal workforce platform into HR10X",
    to: "/career",
  },
  {
    duration: "05/2023 — 11/2023",
    role: "Co-founder",
    company: "Zunction.in",
    body: "Attempted to build a marketplace for shared teaching spaces for educators.",
    to: "/zunction",
  },
  {
    duration: "04/2022 — 04/2023",
    role: "Python Developer",
    company: "Lokyata",
    body: "Worked on credit-union API integrations and ETL pipelines",
    to: "/career",
  },
  {
    duration: "07/2019 — 04/2022",
    role: "Product Manager",
    company: "Avsar HR Services",
    body: "Led the move from a third-party workforce platform to a proprietary enterprise platform",
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
            <h2 className="mt-5 max-w-xl font-serif text-xl leading-snug tracking-tight text-charcoal/82 text-balance lg:text-2xl">
              Too many theories. A few built products. Some writings on how things work.
            </h2>
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
                to="/theses_and_experiments"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-secondary"
              >
                Open Theses & Experiments
              </Link>
            </div>
          </div>

          <aside className="relative aspect-[4/5] w-full max-w-[440px] justify-self-center overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,#fffdf9_0%,#f5efe6_100%)] shadow-[0_12px_40px_rgba(23,23,23,0.05)] lg:justify-self-end">
            <img
              src="/profile_hero_pic.png"
              alt="Portrait of Himanshu Tiwari in a suit"
              className="absolute inset-0 h-full w-full object-contain p-4"
            />
          </aside>
        </div>
      </section>

      <SectionRail
        eyebrow="Where I worked"
        title="Career"
        lede="Roles, companies, and durations."
        ctaLabel="Open Career"
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
          eyebrow="Work In Progress"
          title="Theses & Experiments"
          lede="Product theses and experiments that keep my brain engaged."
        ctaLabel="Open Theses & Experiments"
        ctaTo="/theses_and_experiments"
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
        eyebrow="Online Writing"
        title="Online Writing"
        lede="Substack essays and Twitter vents"
        ctaLabel="Open Writing"
        ctaTo="/online_writing"
      >
        <HorizontalRail>
          {writingItems.map((item) =>
            item.kind === "substack" ? (
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

      <SectionRail
        eyebrow="Moccasin Walk"
        title="UX Notes"
        lede="Rooted in real-world observations."
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
              | "/theses_and_experiments"
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
