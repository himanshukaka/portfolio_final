import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CircleDollarSign,
  GraduationCap,
  School,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/zunction")({
  head: () => ({
    meta: [
      { title: "Zunction.in (2023) — Things That Didn't Work Out — Himanshu Tiwari" },
      {
        name: "description",
        content:
          "A reflective product case study about Zunction.in, a 2023 attempt to build a marketplace for shared teaching spaces in India.",
      },
      {
        property: "og:title",
        content: "Zunction.in (2023) — Things That Didn't Work Out",
      },
      {
        property: "og:description",
        content:
          "A product case study about the middle trap in marketplaces for teachers, and the insights that came from customer discovery.",
      },
      { property: "og:url", content: "/zunction" },
    ],
    links: [{ rel: "canonical", href: "/zunction" }],
  }),
  component: ZunctionPage,
});

const stats = [
  { label: "Year", value: "2023" },
  { label: "Category", value: "Marketplace experiment" },
  { label: "Outcome", value: "Did not scale" },
  { label: "Key insight", value: "The middle trap" },
];

const backgroundPoints = [
  "India's EdTech ecosystem was expanding offline, with major players investing in physical centres.",
  "Schools and coaching centres had underused rooms for large parts of the day.",
  "Independent teachers needed classrooms without taking on full lease obligations.",
];

const problemPoints = [
  "Renting an entire coaching centre was expensive.",
  "Setting up classrooms required upfront capital.",
  "Educational infrastructure sat idle for long periods.",
  "Schools were vacant after school hours.",
];

const solutionCards = [
  {
    title: "Schools",
    body: "Monetize after-hours classrooms without changing their core operation.",
    icon: School,
  },
  {
    title: "Coaching centres",
    body: "Unlock unused rooms without taking on a new fixed-cost structure.",
    icon: Building2,
  },
  {
    title: "Teachers",
    body: "Discover nearby classrooms, book hourly slots, and scale without owning space.",
    icon: Users,
  },
  {
    title: "Students",
    body: "Find classes closer to where they already live and travel.",
    icon: GraduationCap,
  },
];

const builtItems = [
  "Customer discovery with educators",
  "Business model exploration",
  "Landing page",
  "Brand identity",
  "Marketplace concept",
  "Website and screenshot archive",
  "Early outreach",
];

const whyItDidntWork = [
  "Weak long-term customer retention.",
  "The target segment was transient.",
  "Marketplace liquidity was difficult.",
  "Supply wasn't the bottleneck.",
  "Demand disappeared once teachers scaled.",
];

const lessons = [
  "Not every inefficiency is a venture opportunity.",
  "Marketplaces require recurring demand.",
  "A customer's success should not eliminate the need for your product.",
  "Customer interviews changed the business more than spreadsheets.",
  "Sometimes killing an idea early is the correct product decision.",
];

function ZunctionPage() {
  return (
    <div className="bg-ivory text-charcoal">
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_22%),radial-gradient(circle_at_top_right,rgba(132,204,22,0.10),transparent_24%),linear-gradient(180deg,#ffffff_0%,#fff7ea_45%,#ffffff_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/50">
              <span className="h-px w-10 bg-terracotta" />
              Things That Didn't Work Out
              <span className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-charcoal/70">
                2023
              </span>
            </div>
            <h1 className="mt-6 font-serif text-6xl leading-[0.94] tracking-tight text-balance lg:text-[7rem]">
              Zunction.in
            </h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-tight text-charcoal/75 text-pretty lg:text-3xl">
              Building a co-working model for teachers.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/72 text-pretty">
              An attempt to build India's first marketplace for shared teaching spaces by using
              underused coaching centres and school infrastructure. The idea did not become a
              company, but it did become a durable product lesson about incentives, liquidity, and
              the shape of the customer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.zunction.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
              >
                Visit Website
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#middle-trap"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
              >
                View Business Thesis
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-charcoal/10 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-charcoal/80">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-charcoal/10 bg-white p-4 shadow-[0_22px_80px_rgba(15,23,42,0.08)] lg:p-6">
            <div className="rounded-[28px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffdf8_0%,#fff5e8_100%)] p-4">
              <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
                <span className="size-3 rounded-full bg-terracotta/70" />
                <span className="size-3 rounded-full bg-marigold/70" />
                <span className="size-3 rounded-full bg-leaf/70" />
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/45">
                  Homepage preview
                </span>
              </div>
              <div className="mt-5 overflow-hidden rounded-[24px] border border-charcoal/10 bg-white">
                <div className="bg-[linear-gradient(180deg,#ffffff,#fff8ef)] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
                        Zunction.in
                      </div>
                      <p className="mt-2 max-w-[24ch] font-serif text-3xl leading-tight text-charcoal">
                        Shared classrooms for independent teachers.
                      </p>
                    </div>
                    <div className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      2023
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-5 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-3">
                    {[
                      "Find nearby classrooms",
                      "Book hourly slots",
                      "Host classes",
                      "Scale without owning infrastructure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-[linear-gradient(180deg,#ffffff,#fffaf3)] px-4 py-3 text-sm text-charcoal/75"
                      >
                        <span className="size-2 rounded-full bg-leaf" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[24px] border border-charcoal/10 bg-charcoal p-4 text-ivory shadow-[0_14px_35px_rgba(15,23,42,0.12)]">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-marigold">
                        Core belief
                      </div>
                      <p className="mt-3 font-serif text-2xl leading-tight text-balance">
                        Co-working transformed offices.
                        <br />
                        Could it work for teachers?
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-charcoal/10 bg-white p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                        Marketplace logic
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-charcoal/70">
                        <p>Schools and coaching centres listed unused space.</p>
                        <p>Teachers booked classrooms when demand appeared.</p>
                        <p>Platform took a percentage of each booking.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-14 lg:pb-28">
        <section className="py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
                Background
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
                A simple question about spare capacity.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/72 text-pretty">
                In 2023, while India's EdTech ecosystem was rapidly expanding into offline centres,
                I explored a different hypothesis: instead of building another coaching institute,
                could we build infrastructure for educators?
              </p>
            </div>
            <div className="grid gap-4">
              {backgroundPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[24px] border border-charcoal/10 bg-white p-5 text-sm leading-relaxed text-charcoal/75 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-[34px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffaf4_0%,#ffffff_100%)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
              <span className="inline-flex size-4 items-center justify-center rounded-full border border-marigold/40">
                !
              </span>
              Problem
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
              The inefficiency was obvious, but the recurring customer was not.
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div className="grid gap-4 md:grid-cols-2">
                {problemPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[24px] border border-charcoal/10 bg-white p-5 text-sm leading-relaxed text-charcoal/75 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="rounded-[30px] border border-charcoal/10 bg-white p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
                  Core flow
                </div>
                <div className="mt-6 space-y-4">
                  {["Idle coaching centre", "Marketplace", "Independent teachers", "Students"].map(
                    (item, index) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-full border border-charcoal/10 bg-[linear-gradient(180deg,#ffffff,#fff8f0)] text-sm font-semibold text-charcoal/70">
                          {index + 1}
                        </div>
                        <div className="flex-1 rounded-2xl border border-charcoal/10 bg-[linear-gradient(180deg,#ffffff,#fffaf3)] px-4 py-3 text-sm font-medium text-charcoal/75">
                          {item}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
            <Users className="size-4" />
            Solution
          </div>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
            A marketplace connecting the rooms, the teachers, and the students.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-charcoal/10 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#fff7ec,#fffdf8)] text-terracotta">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-charcoal">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/72">{card.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="business-model" className="py-12">
          <div className="rounded-[34px] border border-charcoal/10 bg-charcoal p-6 text-ivory shadow-[0_18px_60px_rgba(15,23,42,0.10)] lg:p-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
              <CircleDollarSign className="size-4" />
              Business model
            </div>
            <div className="mt-4 max-w-3xl">
              <h2 className="font-serif text-4xl leading-tight text-balance lg:text-5xl">
                A small percentage on classroom bookings was the starting thesis.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ivory/72 text-pretty">
                The platform would connect teachers to rooms, collect a commission on the booking,
                and eventually expand into the surrounding workflow that a marketplace needs in
                order to become repeatable.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              {[
                "Teacher books classroom",
                "Classroom owner earns",
                "Platform takes percentage",
              ].map((step, index) => (
                <div key={step} className="contents">
                  <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 text-sm leading-relaxed text-ivory/85">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-marigold">
                      Step {index + 1}
                    </div>
                    <p className="mt-2">{step}</p>
                  </div>
                  {index < 2 ? (
                    <div className="hidden justify-center text-2xl text-marigold lg:flex">→</div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
                Future ideas
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Student discovery",
                  "Payments",
                  "Attendance",
                  "Scheduling",
                  "Marketing tools",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-ivory/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
            <BookOpen className="size-4" />
            What I built
          </div>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
            The work was bigger than the landing page.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {builtItems.map((item, index) => (
              <article
                key={item}
                className="rounded-[28px] border border-charcoal/10 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                  0{index + 1}
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal">{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="middle-trap" className="py-12">
          <div className="rounded-[36px] border border-terracotta/20 bg-[linear-gradient(180deg,#fff7ef_0%,#ffffff_100%)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
              <span className="inline-flex size-4 items-center justify-center rounded-full border border-terracotta/30 text-[10px]">
                !
              </span>
              The biggest insight
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-balance text-charcoal lg:text-6xl">
              The Middle Trap
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal/74 text-pretty">
              During interviews I discovered that teachers split into two groups. The
              shared-classroom product only made sense in the narrow middle. That middle existed,
              but it was too small to build a venture-scale marketplace around.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-stretch">
              <div className="rounded-[28px] border border-charcoal/10 bg-white p-6">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                  <School className="size-4 text-leaf" />
                  Segment 1
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal">
                  Small independent tutors
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/72">
                  Mostly home tuition, often small batches, and comfortable teaching from home. Even
                  a few classroom hours were not compelling enough.
                </p>
              </div>

              <div className="rounded-[28px] border-2 border-terracotta/35 bg-[linear-gradient(180deg,#fff,#fff7ee)] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">
                  <span className="size-2 rounded-full bg-terracotta" />
                  Narrow middle band
                </div>
                <h3 className="mt-4 font-serif text-4xl leading-tight text-charcoal">
                  Temporary growth stage
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/72">
                  This was the only segment that might need shared classrooms: teachers growing
                  beyond home tutoring but not yet ready to own a centre.
                </p>
                <div className="mt-6 h-3 rounded-full bg-[linear-gradient(90deg,#e8f5e1_0%,#f9d9b2_50%,#efe7ff_100%)]" />
                <div className="mt-3 flex justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                  <span>Home teaching</span>
                  <span>Marketplace opportunity</span>
                  <span>Large teacher</span>
                </div>
              </div>

              <div className="rounded-[28px] border border-charcoal/10 bg-white p-6">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                  <Building2 className="size-4 text-marigold" />
                  Segment 2
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal">
                  Successful teachers
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/72">
                  Once they had enough students, the economics pushed them past hourly booking and
                  into leasing or renting a full coaching centre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
                Why it didn't work
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
                The infrastructure problem wasn't the real bottleneck.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/72 text-pretty">
                Teacher acquisition and student acquisition mattered far more than classroom
                availability.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyItDidntWork.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-charcoal/10 bg-white p-5 text-sm leading-relaxed text-charcoal/75 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-[34px] border border-charcoal/10 bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
              Product lessons
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-charcoal lg:text-5xl">
              Durable insights from a product that never scaled.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {lessons.map((lesson, index) => (
                <article
                  key={lesson}
                  className="rounded-[28px] border border-charcoal/10 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                    Lesson 0{index + 1}
                  </div>
                  <p className="mt-4 font-serif text-2xl leading-tight text-charcoal">{lesson}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-[34px] border border-charcoal/10 bg-charcoal p-6 text-ivory shadow-[0_18px_60px_rgba(15,23,42,0.10)] lg:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-marigold">
              Looking back
            </div>
            <p className="mt-4 max-w-4xl font-serif text-3xl leading-tight text-balance lg:text-[2.6rem]">
              Although Zunction never became a company, it changed how I think about marketplaces.
              It taught me to look beyond obvious inefficiencies and understand the structural
              incentives of every participant.
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-ivory/72 text-pretty">
              That experience still shapes how I validate product ideas today. The best product
              decisions are not always the ones that create motion quickly. Sometimes the right
              decision is to recognize that the market shape is wrong and stop before the company
              calcifies around it.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-charcoal/10 pt-8">
          <Link
            to="/theses_and_experiments"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
          >
            Back to theses & experiments
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
          >
            See more case studies
          </Link>
        </div>
      </main>
    </div>
  );
}
