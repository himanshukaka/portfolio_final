import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";

export const Route = createFileRoute("/phone_of_friend")({
  head: () => ({
    meta: [
      { title: "Phone a Friend — AI Conversation Copilot — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A product concept for an AI conversation copilot that quietly helps during important phone calls.",
      },
      {
        property: "og:title",
        content: "Phone a Friend — AI Conversation Copilot",
      },
      {
        property: "og:description",
        content:
          "A product concept, not a shipped product, exploring real-time guidance during high-stakes conversations.",
      },
      { property: "og:url", content: "/phone_of_friend" },
    ],
    links: [{ rel: "canonical", href: "/phone_of_friend" }],
  }),
  component: PhoneAFriendPage,
});

const useCases = [
  {
    title: "Recruiter screening",
    body: "Suggest probing questions, detect bluffing, and verify experience while the call is still live.",
  },
  {
    title: "Sales",
    body: "Detect objections, surface buying signals, and recommend the next response before the moment passes.",
  },
  {
    title: "Negotiation",
    body: "Surface anchoring strategy, counter offers, and risk when the pressure is highest.",
  },
  {
    title: "Customer support",
    body: "Retrieve documentation and suggest an empathetic answer without making the agent search while a customer waits.",
  },
];

const challenges = [
  {
    title: "Regulatory compliance",
    body: "TRAI rules, call recording permissions, and telecom restrictions shape the product surface.",
  },
  {
    title: "Privacy",
    body: "Explicit consent, encryption, enterprise isolation, and on-device processing where possible.",
  },
  {
    title: "Platform constraints",
    body: "Android and iOS both limit call access and background execution in different ways.",
  },
  {
    title: "Enterprise trust",
    body: "Security reviews and user trust are part of the product, not a later implementation detail.",
  },
];

function PhoneAFriendPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        eyebrow="Product concept"
        eyebrowColor="text-marigold"
        title={
          <>
            Phone a Friend
            <br />
            AI Conversation Copilot
          </>
        }
        lede="Never wonder what to say next. This is a speculative product concept, not a shipped product, for helping users during important phone conversations."
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[32px] border border-border bg-white p-6 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Hero
            </div>
            <p className="mt-4 max-w-2xl font-serif text-4xl leading-[1.02] tracking-tight text-balance">
              An AI copilot that listens, understands context, and quietly suggests the next best
              response.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/72">
              From recruiter screening calls to salary negotiations, sales demos, support, and
              investor meetings, the assistant keeps the conversation moving without turning the
              call into a chat app.
            </p>
          </article>

          <aside className="rounded-[32px] border border-border bg-[#fbf8f3] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
              Core question
            </div>
            <p className="mt-4 max-w-md font-serif text-3xl leading-tight text-balance text-charcoal">
              What if your smartest colleague could coach you silently during the call?
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Live transcript", "Suggested response", "Risk detected", "Context retrieved"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-charcoal/10 bg-white px-4 py-3 text-sm font-medium text-charcoal/75"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <h2 className="max-w-[9ch] font-serif text-5xl leading-[0.95] tracking-tight text-balance">
              Important conversations are high stakes.
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Recruiters forgetting screening questions.",
                "Sales reps missing buying signals.",
                "Candidates accepting poor offers.",
                "Support agents searching docs while customers wait.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-charcoal/10 bg-[#fcfaf6] p-5 text-sm leading-relaxed text-charcoal/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
            Universal architecture
          </div>
          <div className="mt-4 space-y-3 rounded-[28px] border border-border bg-white p-6 text-sm font-medium text-charcoal/78 shadow-[0_16px_40px_rgba(23,23,23,0.04)]">
            <div>Phone Call</div>
            <div>↓</div>
            <div>Live Speech Recognition</div>
            <div>↓</div>
            <div>Conversation Understanding</div>
            <div>↓</div>
            <div>Context Retrieval</div>
            <div>↓</div>
            <div>LLM Reasoning</div>
            <div>↓</div>
            <div>Live Suggestions</div>
          </div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-charcoal/72">
          <p>
            The intelligence stays the same while the context changes. Recruiting, sales, support,
            negotiation, and healthcare all need a different source of truth, but the same core
            loop.
          </p>
          <p>
            The hard part is not AI. It is earning permission to participate in live conversations
            and doing it in a way users trust.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-[#f8f6f1]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[28px] border border-border bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
                Use cases
              </div>
              <div className="mt-5 space-y-4">
                {useCases.map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-charcoal/10 p-4">
                    <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/72">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[28px] border border-border bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-marigold">
                Product challenges
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {challenges.map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-charcoal/10 p-4">
                    <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/72">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
