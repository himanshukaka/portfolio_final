import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/life")({
  head: () => ({
    meta: [
      { title: "Life — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A life outside the résumé. Journeys, beliefs in practice, travel, and things worth loving.",
      },
      { property: "og:title", content: "Life — Himanshu Tiwari" },
      {
        property: "og:description",
        content:
          "Personal essays about change, belief, travel, and the things worth caring about beyond a job title.",
      },
    ],
  }),
  component: LifePage,
});

function LifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Life"
        eyebrowColor="text-coral"
        title={<>A life outside the résumé.</>}
        lede="Not a hobbies page. A record of the journeys, beliefs, and small obsessions that shape the person doing the work."
      />

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-coral">
          Journeys
        </h2>
        <article className="border-l-2 border-coral pl-8">
          <h3 className="font-serif text-3xl leading-tight">
            The weight-loss journey
          </h3>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/80 text-pretty">
            <p>
              For most of my twenties, I thought weight was a willpower problem.
              It isn't. It's a systems problem — kitchens, calendars, sleep,
              stress, the people you eat with, the food that is easiest to
              reach at 9pm.
            </p>
            <p>
              What worked was not intensity. It was designing an environment
              where the healthy choice was also the default choice, and
              accepting that maintenance is not less important than change —
              it's the whole thing.
            </p>
            <p>
              There were setbacks. There will be more. The frame that made it
              sustainable was consistency without drama, and the willingness
              to show up on days when the transformation wasn't visible yet.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-charcoal/10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-coral">
          Beliefs in practice
        </h2>
        <article className="border-l-2 border-coral pl-8">
          <h3 className="font-serif text-3xl leading-tight">
            Equality begins at home
          </h3>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/80 text-pretty">
            <p>
              A few years ago I spent a long time advocating, inside my own
              family, for my sister's equal share in inherited property. The
              law was clear. The convention was not.
            </p>
            <p>
              I'm writing about it here not as a slogan, but because I've come
              to believe that beliefs are cheap until they require a difficult
              conversation with the people you love. Persuasion, patience, and
              refusing to make anyone the villain — that was the work.
            </p>
            <p>
              The outcome mattered. The way we got there mattered more.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-charcoal/10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-coral">
          Travel & observation
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">Bilaspur, Chhattisgarh</h3>
            <p className="mt-2 text-sm text-charcoal/70">
              Where a field visit rewrote a product roadmap.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">A month in the Nilgiris</h3>
            <p className="mt-2 text-sm text-charcoal/70">
              On slowness, and what happens to your thinking when the calendar
              goes quiet.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-charcoal/10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-coral">
          Things I love
        </h2>
        <p className="max-w-[60ch] text-base leading-relaxed text-charcoal/70">
          Long-form nonfiction. Test cricket. Ambedkar and Sen in the same
          bookshelf. Independent bookstores. The particular joy of a spreadsheet
          that tells the truth. Sentences that end too soon.
        </p>
      </section>
    </>
  );
}