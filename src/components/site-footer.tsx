import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div
            className="font-serif text-4xl leading-none tracking-tight text-charcoal"
            style={{ fontStyle: "italic" }}
          >
            Kaka<span className="text-terracotta">,</span>
            <span className="ml-1 font-sans text-base not-italic text-charcoal/55">
              apparently.
            </span>
          </div>
          <p className="mt-6 text-sm text-charcoal/70">
            <span className="font-medium text-charcoal">Himanshu Tiwari</span>
            <br />
            Product Manager · Builder · Student of Systems
          </p>
          <p className="mt-6 max-w-sm font-serif text-lg italic text-charcoal/60">
            Still asking questions. Occasionally building answers.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-charcoal/70">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
            Site
          </div>
          <Link to="/work" className="hover:text-terracotta">Work</Link>
          <Link to="/experiments" className="hover:text-marigold">Experiments</Link>
          <Link to="/questions" className="hover:text-leaf">Questions</Link>
          <Link to="/writing" className="hover:text-lavender">Writing & Tenets of 21st Century</Link>
          <Link to="/life" className="hover:text-coral">Life</Link>
          <Link to="/about" className="hover:text-charcoal">About</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm text-charcoal/70">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
            Elsewhere
          </div>
          <a href="mailto:htatdot@gmail.com" className="hover:text-terracotta">
            htatdot@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-tiwari-pm"
            target="_blank"
            rel="noreferrer"
            className="hover:text-terracotta"
          >
            LinkedIn ↗
          </a>
          <a
            href="/Himanshu_Tiwari_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-terracotta"
          >
            Résumé (PDF)
          </a>
          <a href="https://moderntenets.substack.com" target="_blank" rel="noreferrer" className="hover:text-terracotta">Tenets of 21st Century</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-charcoal/10 px-6 pt-6 text-[10px] uppercase tracking-widest text-charcoal/40 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Himanshu Tiwari · kakaapparently.com</span>
        <span className="italic normal-case tracking-normal text-charcoal/45">
          Too many theories. A few products. Some essays.
        </span>
      </div>
    </footer>
  );
}