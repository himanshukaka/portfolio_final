import { Link } from "@tanstack/react-router";

const siteLinks = [
  // { to: "/", label: "Home" },
  { to: "/career", label: "Career" },
  { to: "/online_writing", label: "Online Writing" },
  { to: "/theses_and_experiments", label: "Thesis & Experiments" },
  { to: "/ux_notes", label: "UX Notes" }
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="max-w-xl">
          <div className="font-serif text-3xl leading-none tracking-tight">My Philosophy</div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/72">
            <span className="font-medium text-ivory">Process changes people.</span>{" "}
            People don't experience systems directly. They experience them through processes. The
            work we repeat shapes the way we think. The incentives we live with shape the choices
            we make.
          </p>
          {/* <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/62">
            “Kaka” is what friends call me for my unsolicited and occasionally unasked-for but
            good gyan.
          </p>
          <div className="mt-8 max-w-sm">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/45">
              Hence,
            </div>
            <img
              src="/kaka_apparently.svg"
              alt="Kaka Apparently signature"
              className="mt-3 h-16 w-auto max-w-[18rem] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)]"
            />
          </div> */}
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:justify-end sm:text-left">
          <div className="grid gap-12 sm:grid-cols-2 sm:text-left">
            <div className="flex flex-col gap-3 text-sm text-ivory/72">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
                Navigation
              </div>
              {siteLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to as "/" | "/experiments" | "/ux_notes" | "/online_writing" | "/career"}
                  className="hover:text-ivory"
                >
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
                href="https://www.linkedin.com/in/himanshu-t-6b84b014a/"
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
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-6 py-5 text-[10px] uppercase tracking-widest text-ivory/45 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Himanshu Tiwari</span>
        {/* <span className="normal-case tracking-normal text-ivory/55">
          Product, experiments, notes, and essays.
        </span> */}
      </div>
    </footer>
  );
}
