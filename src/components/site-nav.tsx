import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/experiments", label: "Thesis & Experiments" },
  { to: "/ux_notes", label: "UX Notes" },
  { to: "/online_writing", label: "Online Writing" },
  { to: "/career", label: "Career" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-5 px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-serif text-lg leading-none tracking-tight text-charcoal"
          aria-label="Himanshu Tiwari home"
        >
          <span>HT</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to as "/" | "/experiments" | "/ux_notes" | "/online_writing" | "/career"}
              className="transition-colors hover:text-charcoal"
              activeProps={{ className: "text-charcoal" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/85"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
