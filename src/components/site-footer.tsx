import { Link } from "@tanstack/react-router";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/experiments", label: "Thesis & Experiments" },
  { to: "/ux_notes", label: "UX Notes" },
  { to: "/online_writing", label: "Online Writing" },
  { to: "/career", label: "Career" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
        <div>
          <div className="font-serif text-3xl leading-none tracking-tight">
            Himanshu Tiwari
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/72">
            Product leader, builder, and student of systems. I care about products that respect
            complexity and writing that makes thinking visible.
          </p>
          <p className="mt-6 font-serif text-lg italic text-ivory/62">
            First principles thinking. Long-term compounding. Creating leverage.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ivory/72">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
            Navigation
          </div>
          {siteLinks.map((link) => (
            <Link key={link.to} to={link.to as "/" | "/experiments" | "/ux_notes" | "/online_writing" | "/career"} className="hover:text-ivory">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm text-ivory/72">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
            Connect
          </div>
          <a href="mailto:htatdot@gmail.com" className="hover:text-ivory">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-tiwari-pm"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ivory"
          >
            LinkedIn
          </a>
          <a
            href="/Himanshu_Tiwari_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ivory"
          >
            Résumé (PDF)
          </a>
          <a
            href="https://moderntenets.substack.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ivory"
          >
            Tenets of 21st Century
          </a>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="text-right text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
            Philosophy
          </div>
          <blockquote className="max-w-xs self-end text-right font-serif text-2xl leading-tight italic text-ivory/82">
            First principles thinking.
            <br />
            Long-term compounding.
            <br />
            Creating leverage.
          </blockquote>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-6 py-5 text-[10px] uppercase tracking-widest text-ivory/45 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Himanshu Tiwari</span>
        <span className="normal-case tracking-normal text-ivory/55">
          Product, experiments, notes, and essays.
        </span>
      </div>
    </footer>
  );
}
