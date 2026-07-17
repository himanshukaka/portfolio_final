import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Grid2x2, Network, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/employees_skin_in_the_game")({
  head: () => ({
    meta: [
      { title: "Employee's Skin in the Game — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "An unfinished thesis about organizational conviction, measured judgment, and what employees might be able to allocate beyond time.",
      },
      {
        property: "og:title",
        content: "Employee's Skin in the Game",
      },
      {
        property: "og:description",
        content:
          "A long-form thesis on what it would mean for employees to allocate conviction inside organizations.",
      },
    ],
  }),
  component: EmployeesSkinInTheGamePage,
});

function EmployeesSkinInTheGamePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 lg:pb-20 lg:pt-28">
        <div className="space-y-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
            Thesis
          </div>
          <h1 className="max-w-[12ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance lg:text-7xl">
            Employee's Skin in the Game
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-charcoal/72 text-pretty lg:text-xl">
            Investors allocate financial capital.
            <br />
            Founders allocate personal capital.
            <br />
            Executives allocate organizational capital.
            <br />
            Employees often allocate only time.
            <br />
            Should they also be able to allocate conviction?
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-charcoal/55">
            <span>Reading time: 6-8 minutes</span>
            <span className="h-1 w-1 rounded-full bg-charcoal/25" />
            <span>Unfinished thesis</span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16">
          <div className="space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-marigold">
              Observation
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-charcoal/78 text-pretty">
              Organizations know more than their leaders. Knowledge inside companies is fragmented:
              an engineer sees technical debt, support hears customer pain, sales senses changing
              demand, operations notices friction, and finance sees deteriorating economics. No
              single person possesses the complete picture.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-charcoal/78 text-pretty">
              Yet important decisions still move through hierarchy, meetings, and persuasion. The
              company behaves as if judgment is scarce only at the top.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Grid2x2,
                title: "Fragmented knowledge",
                body: "Different teams see different parts of the same system.",
              },
              {
                icon: Network,
                title: "Hierarchy still decides",
                body: "Authority collects the final call even when expertise is distributed.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-border bg-[#fcfbf8] p-6 shadow-[0_12px_36px_rgba(23,23,23,0.04)]"
              >
                <item.icon className="size-5 text-terracotta" />
                <h2 className="mt-4 font-serif text-2xl leading-tight text-charcoal">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-18 lg:py-20">
        <div className="space-y-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
            Problem
          </div>
          <h2 className="max-w-[14ch] font-serif text-4xl leading-tight text-balance lg:text-5xl">
            Employees have opinions, but little skin in the game.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/78 text-pretty">
            <p>
              Employees constantly predict: this project won't ship, customers won't adopt this,
              this architecture won't scale, leadership is underestimating the risk.
            </p>
            <p>
              Most of these predictions disappear into conversations. Being right rarely compounds.
              Being wrong rarely costs anything. That makes organizational conviction hard to see
              and even harder to reward.
            </p>
            <p>What if organizational conviction became measurable?</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#f8f6f1]">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-marigold">
              Thought experiment
            </div>
            <h2 className="font-serif text-4xl leading-tight text-balance text-charcoal">
              Imagine a limited amount of organizational prediction capital.
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/72">
              Not money. Not equity. Conviction.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Will this product succeed?",
              "Will this migration finish on time?",
              "Will this strategy create value?",
              "Correct predictions earn more influence.",
              "Incorrect predictions lose influence.",
              "No voting. No meetings. Only measured judgment.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[22px] border border-border bg-white p-4"
              >
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full border border-charcoal/10 bg-[#f7f3ec] text-[11px] font-semibold text-charcoal/65">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-charcoal/74">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
            Interesting questions
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/78 text-pretty">
            <p>Can organizations discover expertise automatically?</p>
            <p>Can influence emerge from demonstrated judgment instead of hierarchy?</p>
            <p>Can better capital allocation begin before budget allocation?</p>
            <p>Would this create healthier disagreement, or organizational chaos?</p>
            <p>Can employees have meaningful skin in the game without financial incentives?</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-marigold">
                Visual direction
              </div>
              <div className="rounded-[28px] border border-border bg-[#fcfbf8] p-6">
                <div className="space-y-3 text-sm text-charcoal/70">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-4 text-terracotta" />
                    Conviction tokens moving between ideas
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowDown className="size-4 text-terracotta" />
                    Hierarchy slowly turning into a network
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-4 text-terracotta" />
                    Tiny belief ticker with changing probabilities
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-charcoal/74">
              <p>
                Leave the mechanics intentionally undefined. The point is not to prescribe a
                product, but to ask whether organizations are overlooking a mechanism that markets
                have quietly used for centuries.
              </p>
              <p>
                As software makes execution cheaper, judgment becomes more valuable. Maybe the next
                operating system for organizations is not better project management.
              </p>
              <p>Maybe it's giving employees meaningful skin in the game.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta">
            Unfinished thesis
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/78 text-pretty">
            <p>
              I don't know whether this should exist. Perhaps organizations are too complex.
              Perhaps people would simply game the system. Or perhaps companies are missing a
              mechanism that markets have quietly solved for centuries.
            </p>
            <p>
              Employees already make predictions every day. The unanswered question is why
              organizations are designed as though those predictions have no value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
