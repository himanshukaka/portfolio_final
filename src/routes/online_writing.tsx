import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/online_writing")({
  head: () => ({
    meta: [
      { title: "Online Writing — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "Essays from Tenets of 21st Century on Substack — EdTech, hiring, agriculture, economy, and rural India.",
      },
      { property: "og:title", content: "Online Writing — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Tenets of 21st Century — essays on economics, EdTech, hiring, agriculture and rural India.",
      },
    ],
  }),
  component: WritingPage,
});

type Interest =
  | "EdTech & Education"
  | "Hiring & Work"
  | "Economy & Inequality"
  | "Agriculture & Rural"
  | "Society & Institutions"
  | "Tech & Product";

export interface Post {
  title: string;
  url: string;
  interests: Interest[];
  relevance: number;
}

export const posts: Post[] = [
  {
    title: "The paradox of Surplus Supply and Increasing Challenges in Hiring!",
    url: "https://moderntenets.substack.com/p/the-paradox-of-surplus-supply-and",
    interests: ["Hiring & Work", "Economy & Inequality"],
    relevance: 100,
  },
  {
    title: "Understanding EdTech",
    url: "https://moderntenets.substack.com/p/understanding-edtech",
    interests: ["EdTech & Education"],
    relevance: 95,
  },
  {
    title: "EdTech companies playing by OTT's playbook?",
    url: "https://moderntenets.substack.com/p/edtech-companies-playing-by-otts",
    interests: ["EdTech & Education", "Tech & Product"],
    relevance: 92,
  },
  {
    title: "Creator Economy: The EdTech Version (Part 1)",
    url: "https://moderntenets.substack.com/p/creator-economy-the-edtech-version",
    interests: ["EdTech & Education", "Tech & Product"],
    relevance: 88,
  },
  {
    title: "Temporary Staffing: the Overlooked Remainder?",
    url: "https://moderntenets.substack.com/p/temporary-staffing-the-overlooked",
    interests: ["Hiring & Work"],
    relevance: 86,
  },
  {
    title: "Entrepreneurship and Empowering Educators!",
    url: "https://moderntenets.substack.com/p/entrepreneurship-and-empowering-educators",
    interests: ["EdTech & Education"],
    relevance: 84,
  },
  {
    title: "Reimagining Education with Sharing Economy!",
    url: "https://moderntenets.substack.com/p/reimagining-education-with-sharing",
    interests: ["EdTech & Education", "Society & Institutions"],
    relevance: 82,
  },
  {
    title: "Online Exams & Missing Infrastructure!",
    url: "https://moderntenets.substack.com/p/online-exams-and-missing-infrastructure",
    interests: ["EdTech & Education", "Society & Institutions"],
    relevance: 80,
  },
  {
    title: "School Resource Sharing",
    url: "https://moderntenets.substack.com/p/school-resource-sharing",
    interests: ["EdTech & Education", "Society & Institutions"],
    relevance: 74,
  },
  {
    title: "Skilling India via Sharing",
    url: "https://moderntenets.substack.com/p/skilling-india-via-sharing",
    interests: ["EdTech & Education", "Hiring & Work"],
    relevance: 76,
  },
  {
    title: "Risk Management in Agriculture!",
    url: "https://moderntenets.substack.com/p/risk-management-in-agriculture",
    interests: ["Agriculture & Rural"],
    relevance: 78,
  },
  {
    title: "Agriculture, Tenancy, and Scalability!",
    url: "https://moderntenets.substack.com/p/agriculture-tenancy-and-scalability",
    interests: ["Agriculture & Rural", "Economy & Inequality"],
    relevance: 77,
  },
  {
    title: "Reverse Migration: The Fabric of our Future Society!",
    url: "https://moderntenets.substack.com/p/reverse-migration-the-fabric-of-our",
    interests: ["Agriculture & Rural", "Society & Institutions"],
    relevance: 72,
  },
  {
    title: "Life Insurance, Banking, and Rural India!",
    url: "https://moderntenets.substack.com/p/life-insurance-banking-and-rural",
    interests: ["Agriculture & Rural", "Economy & Inequality"],
    relevance: 70,
  },
  {
    title: "Co-operative Banks: A filthy rural monster",
    url: "https://moderntenets.substack.com/p/co-operative-banks-a-filthy-rural",
    interests: ["Agriculture & Rural", "Economy & Inequality"],
    relevance: 68,
  },
  {
    title: "Damaged Safety Valves of Wealth Inequality!",
    url: "https://moderntenets.substack.com/p/damaged-safety-valves-of-wealth-inequality",
    interests: ["Economy & Inequality", "Society & Institutions"],
    relevance: 75,
  },
  {
    title: "Force Majeure & Trust Deficit Economy",
    url: "https://moderntenets.substack.com/p/force-majeure-and-trust-deficit-economy",
    interests: ["Economy & Inequality", "Society & Institutions"],
    relevance: 66,
  },
  {
    title: "Knowledge Sharing Responsibility (KSR)",
    url: "https://moderntenets.substack.com/p/knowledge-sharing-responsibilityksr",
    interests: ["Society & Institutions", "EdTech & Education"],
    relevance: 60,
  },
  {
    title: "Echo Chambers",
    url: "https://moderntenets.substack.com/p/echo-chambers",
    interests: ["Society & Institutions"],
    relevance: 58,
  },
  {
    title: "'Possible' and 'Impossible' with the prism of Time Dimension!",
    url: "https://moderntenets.substack.com/p/possible-and-impossible-with-the",
    interests: ["Society & Institutions"],
    relevance: 40,
  },
  {
    title: "Prevention from SEO",
    url: "https://moderntenets.substack.com/p/prevention-from-seo",
    interests: ["Tech & Product"],
    relevance: 45,
  },
  {
    title: "Random Old thoughts",
    url: "https://moderntenets.substack.com/p/random-old-thoughts",
    interests: ["Society & Institutions"],
    relevance: 30,
  },
];

const INTERESTS: Interest[] = [
  "EdTech & Education",
  "Hiring & Work",
  "Economy & Inequality",
  "Agriculture & Rural",
  "Society & Institutions",
  "Tech & Product",
];

type SortKey = "relevance" | "title";

type Tweet = {
  text: ReactNode;
  url: string;
  date: string;
};

const tweets: Tweet[] = [
  {
    text: <>Humanity is God by iteration</>,
    url: "https://x.com/_kaalik/status/1876716913071439947?ref_src=twsrc%5Etfw",
    date: "January 7, 2025",
  },
  {
    text: (
      <>
        gradual changes aren't enough, india needs a full blown women revolution, long overdue!
        <br />
        <br />
        a revolution of the women, by the women, and for the women. it should not be hijacked by
        political parties or any other grp for that matter
      </>
    ),
    url: "https://x.com/_kaalik/status/1823874629942812982?ref_src=twsrc%5Etfw",
    date: "August 15, 2024",
  },
  {
    text: <>a great conversation is like a dream, it always starts in middle</>,
    url: "https://x.com/_kaalik/status/1664251562313789440?ref_src=twsrc%5Etfw",
    date: "June 1, 2023",
  },
  {
    text: (
      <>
        i m so invested in thinking in terms of percentage nd probabilities that i sometime miss
        the importance of absolute!
      </>
    ),
    url: "https://x.com/_kaalik/status/1657688222036811782?ref_src=twsrc%5Etfw",
    date: "May 14, 2023",
  },
];

function WritingPage() {
  const [filter, setFilter] = useState<Interest | "All">("All");
  const [sort, setSort] = useState<SortKey>("relevance");

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

  const visible = useMemo(() => {
    const filtered =
      filter === "All" ? [...posts] : posts.filter((p) => p.interests.includes(filter));
    if (sort === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => b.relevance - a.relevance);
    }
    return filtered;
  }, [filter, sort]);

  return (
    <>
      <PageHeader
        eyebrow="Online Writing"
        eyebrowColor="text-lavender"
        title={
          <>
            I write to{" "}
            <a
              href="#understand"
              className="underline decoration-lavender/50 underline-offset-4 hover:decoration-lavender"
            >
              understand
            </a>{" "}
            and{" "}
            <a
              href="#vent"
              className="underline decoration-lavender/50 underline-offset-4 hover:decoration-lavender"
            >
              vent
            </a>
            .
          </>
        }
        lede="Essays live on Tenets of 21st Century (Substack). Shorter thoughts live on X."
      />

      <section id="understand" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-lavender/20 pb-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-lavender">
              Tenets of 21st Century · Substack
            </h2>
            <p className="mt-2 font-serif text-lg italic text-charcoal/60">
              moderntenets.substack.com — essays on economies, education, hiring, and rural India.
            </p>
          </div>
          <a
            href="https://moderntenets.substack.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline decoration-lavender/50 underline-offset-4 hover:decoration-lavender"
          >
            Subscribe on Substack →
          </a>
        </div>

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {(["All", ...INTERESTS] as const).map((tag) => {
              const active = filter === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-lavender bg-lavender/15 text-charcoal"
                      : "border-charcoal/15 text-charcoal/60 hover:border-lavender/60 hover:text-charcoal"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/50">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-md border border-charcoal/15 bg-ivory px-2 py-1 text-xs font-medium text-charcoal focus:border-lavender focus:outline-none"
            >
              <option value="relevance">Most relevant first</option>
              <option value="title">Title (A–Z)</option>
            </select>
          </label>
        </div>

        <div className="mb-6 text-xs uppercase tracking-widest text-charcoal/40">
          Showing {visible.length} {visible.length === 1 ? "essay" : "essays"}
          {filter !== "All" ? ` · ${filter}` : ""}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.url}
              className="flex flex-col overflow-hidden rounded-lg border border-charcoal/10 bg-ivory transition-colors hover:border-lavender/60"
            >
              <div className="flex flex-wrap gap-1.5 px-5 pt-5">
                {p.interests.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-lavender/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-lavender"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <iframe
                src={substackEmbedUrl(p.url)}
                title={p.title}
                loading="lazy"
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                className="mt-4 h-[320px] w-full border-0"
              />
            </article>
          ))}
        </div>
      </section>

      <section id="vent" className="border-t border-charcoal/10 bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
                Vent
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-balance lg:text-4xl">
                Real tweets, same line of thought.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70 text-pretty">
                Shorter thoughts belong on X. I’m keeping the embeds here so the page still reads
                like a publication rather than a feed.
              </p>
            </div>
            <a
              href="https://x.com/_kaalik"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Visit @kaalik on X
            </a>
          </div>
          <div className="grid gap-4">
            {tweets.map((tweet) => (
              <article
                key={tweet.url}
                className="rounded-[24px] border border-charcoal/10 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    {tweet.text}
                  </p>
                  &mdash; himanshu (@_kaalik) <a href={tweet.url}>{tweet.date}</a>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
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
