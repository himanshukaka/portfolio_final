import { Link } from "@tanstack/react-router";

const links: { to: string; label: string; accent?: string }[] = [
  { to: "/work", label: "Work", accent: "hover:text-terracotta" },
  { to: "/experiments", label: "Experiments", accent: "hover:text-marigold" },
  { to: "/questions", label: "Questions", accent: "hover:text-leaf" },
  { to: "/writing", label: "Writing", accent: "hover:text-lavender" },
  { to: "/life", label: "Life", accent: "hover:text-coral" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal/5 bg-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="group flex items-baseline gap-2"
          aria-label="Himanshu Tiwari — home"
        >
          <span className="font-serif text-lg leading-none tracking-tight">
            Himanshu Tiwari
          </span>
          <span className="hidden font-serif text-xs italic text-charcoal/45 sm:inline">
            / Kaka, apparently.
          </span>
        </Link>
        <div className="hidden gap-5 text-sm font-medium text-charcoal/70 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to as "/work"}
              className={`transition-colors ${l.accent ?? "hover:text-charcoal"}`}
              activeProps={{ className: "text-charcoal" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}