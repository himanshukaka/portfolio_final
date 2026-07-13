import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { posts, Post } from "./writing";

export const Route = createFileRoute("/zunction")({
  head: () => ({
    meta: [
      { title: "Zunction.in Case Study — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A founder-led experiment in building a marketplace for underused educational infrastructure. A story of what worked, what didn't, and what I learned.",
      },
      { property: "og:title", content: "Zunction.in Case Study — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "A founder-led experiment in building a marketplace for underused educational infrastructure. A story of what worked, what didn't, and what I learned.",
      },
    ],
  }),
  component: ZunctionPage,
});

const zunctionRelatedPosts: Post[] = posts
  .filter(
    (p) =>
      p.interests.includes("EdTech & Education") ||
      p.url.includes("school-resource-sharing") ||
      p.url.includes("skilling-india-via-sharing"),
  )
  .sort((a, b) => b.relevance - a.relevance)
  .slice(0, 4);

const story = [
  {
    h: "The market observation",
    p: "Independent tutors and small cohorts were priced out of dedicated real estate. Meanwhile, schools had empty classrooms after 4pm. This seemed like a classic marketplace opportunity waiting to happen.",
  },
  {
    h: "What we tried",
    p: "We pursued a founder-led B2B sales motion to partner with schools, creating a supply of rentable classrooms. On the demand side, we built a lightweight booking product for educators and ran a small pilot with paying users.",
  },
  {
    h: "Why it stopped",
    p: "The unit economics of physical space are brutal. A thin software layer couldn't overcome the high operational costs and low margins. While we successfully created supply, we couldn't build a sustainable distribution motion for demand. The business just wasn't scalable in its current form.",
  },
  {
    h: "What it taught me",
    p: "Verify your distribution model and cost structure before writing a line of code. Real estate marketplaces are fundamentally about real estate, not just software. It was a costly, but valuable, lesson in the difference between a good idea and a viable business.",
  },
];

function substackEmbedUrl(postUrl: string): string {
  try {
    const u = new URL(postUrl);
    return `${u.origin}/embed${u.pathname}`;
  } catch {
    return postUrl;
  }
}

function ZunctionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Study · Failed Startup"
        eyebrowColor="text-marigold"
        title={<>Zunction.in</>}
        lede="An experiment in building a marketplace for shared educational infrastructure. This is an honest look at what it takes to try, and what it feels like to stop."
      />
      <div className="mx-auto max-w-4xl space-y-16 px-6 pb-24">
        <div className="space-y-8">
          {story.map((s) => (
            <div key={s.h}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                {s.h}
              </h3>
              <p className="mt-3 max-w-[70ch] text-lg leading-relaxed text-charcoal/80 text-pretty">
                {s.p}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal/10 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
            The Live Site (Archived)
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-charcoal/75">
            The original site is still live. While modern web security prevents it from being embedded here reliably, you can see it below or open it in a new tab.
          </p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-charcoal/10 bg-charcoal/5">
            <iframe
              src="https://www.zunction.in/"
              title="Live preview of Zunction.in"
              className="h-full w-full"
            />
          </div>
          <a
            href="https://www.zunction.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium underline decoration-marigold/50 underline-offset-4 hover:decoration-marigold"
          >
            Open zunction.in in a new tab →
          </a>
        </div>

        <div className="border-t border-charcoal/10 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
            Related Writing
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-charcoal/75">
            The ideas behind Zunction were connected to broader themes I was exploring in my writing around the sharing economy and education.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {zunctionRelatedPosts.map((p) => (
              <iframe
                key={p.url}
                src={substackEmbedUrl(p.url)}
                title={p.title}
                loading="lazy"
                className="h-[320px] w-full rounded-lg border border-charcoal/10"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}