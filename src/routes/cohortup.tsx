import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cohortup")({
  head: () => ({
    meta: [
      { title: "CohortUp - Product Case Study" },
      {
        name: "description",
        content:
          "CohortUp is a social media concept for accountability, focus sessions, and virtue-based social proof.",
      },
      { property: "og:title", content: "CohortUp - Product Case Study" },
      {
        property: "og:description",
        content:
          "A short PM case study about social accountability, retention loops, and making productivity feel social.",
      },
      { property: "og:url", content: "/cohortup" },
    ],
    links: [{ rel: "canonical", href: "/cohortup" }],
  }),
  component: CohortUpPage,
});

const metadata = [
  { label: "Vision", value: "Turn shared effort into social proof" },
  { label: "Duration", value: "Alpha" },
  { label: "Status", value: "Building as alpha" },
];

const decisions = [
  {
    title: "15 minute default sessions",
    body: "Short enough to start. Long enough to matter. The goal is lowering activation friction.",
  },
  {
    title: "Two post CTAs after completion",
    body: "Users can post it alone or post it together. The choice makes the trust game explicit.",
  },
  {
    title: "Category-based matching",
    body: "Shared intent improves accountability. The tradeoff is liquidity, so matching speed matters.",
  },
];

function CohortUpPage() {
  return (
    <div className="bg-white text-charcoal">
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.08),transparent_25%),radial-gradient(circle_at_top_right,rgba(132,204,22,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fffaf4_55%,#ffffff_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-20 lg:pt-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-charcoal/50">
              <span className="h-px w-10 bg-terracotta" />
              Product case study
              <span className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-charcoal/70">
                Social media
              </span>
            </div>
            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight text-balance lg:text-[7rem]">
              CohortUp
            </h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-tight text-charcoal/75 text-pretty lg:text-3xl">
              The social network that turns focus into collaborative content.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/72 text-pretty">
              General social media often rewards vice like jealousy and anger:
              comparison, performance, and passive consumption. CohortUp is an
              attempt to make social media virtue-based, where presence,
              effort, and consistency become the thing people share.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/60 text-pretty">
              I am attempting to launch it as an alpha.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-charcoal/10 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                    {item.label}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-charcoal/10 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Core idea
            </div>
            <p className="mt-4 font-serif text-3xl leading-tight text-balance text-charcoal">
              People do not need more reminders.
              <br />
              They need social accountability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Body doubling", "Social proof", "Focus sessions", "Streaks"].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-charcoal/10 bg-[linear-gradient(180deg,#ffffff,#fff8ef)] px-4 py-3 text-sm font-medium text-charcoal/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-14 lg:pb-28">
        <section className="py-10">
          <div className="rounded-[36px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-4 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:p-6">
            <img
              src="/cohortup/wireframe-sheet.png"
              alt="CohortUp wireframe sheet showing feed, profile, work screen, waiting screen, and consent screen."
              className="w-full rounded-[28px] border border-charcoal/10 object-cover"
            />
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
              Product loop
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
              The loop is simple: choose an activity, join one live person, record 15 minutes, and decide whether to post.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/72 text-pretty">
              One person starts an activity. One live person doing the same
              activity joins. The work screen feels like recording, not a call.
              The buddy stays small in the time row. After 15 minutes, the app
              creates a split-screen timelapse. Then the two people choose
              whether to publish it together, or let one person post it alone.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
            Minimum tabs
          </div>
          <div className="mb-10 flex flex-wrap gap-2">
            {["Feed", "Start", "Profile"].map((tab) => (
              <span
                key={tab}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/65"
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-5">
            {[
              "Feed shows split-screen timelapse posts.",
              "Profile shows streaks and focus history.",
              "Work screen shows full recording and the buddy in the time row.",
              "Waiting screen shows one live person may join.",
              "Consent screen uses post it alone / post it together CTAs.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-charcoal/10 bg-white p-4 text-sm leading-relaxed text-charcoal/72 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {[
              "Feed: stacked video posts with split-screen timelapses.",
              "Consent: two CTAs, post it alone or post it together.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-charcoal/10 bg-white p-4 text-sm leading-relaxed text-charcoal/72 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {decisions.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-charcoal/10 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                <h3 className="font-serif text-3xl leading-tight text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/72">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-[34px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffaf4_0%,#ffffff_100%)] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
              Final reflection
            </div>
            <p className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-balance text-charcoal lg:text-[2.4rem]">
              CohortUp explores whether social media can reward discipline instead
              of distraction, and whether virtue can be designed into the feed.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/72 text-pretty">
              The real product question is not whether people can be reminded to
              work. It is whether a social system can make showing up together
              feel satisfying enough to repeat, while keeping the feed honest.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
