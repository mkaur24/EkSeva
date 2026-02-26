"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

const homeLinks = [
  { label: "Principle", href: "#principle" },
  { label: "Difference", href: "#difference" },
  { label: "Products", href: "#products" },
  { label: "Connect", href: "#connect" }
];

function toHomeAwareHref(pathname: string, href: string) {
  return pathname === "/" ? href : `/${href}`;
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const ctaHref = toHomeAwareHref(pathname, "#products");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-[rgba(248,247,244,0.82)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink hover:text-ink/85"
        >
          <span
            className="nav-logo-mark"
            aria-hidden="true"
            title="Place logo image at /public/ekseva-logo.png"
          />
          EkSeva®
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {homeLinks.map((link) => (
            <Link
              key={link.label}
              href={toHomeAwareHref(pathname, link.href)}
              className="focus-ring text-sm tracking-tight text-mute transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/why"
            className={`focus-ring text-sm tracking-tight transition hover:text-ink ${
              pathname === "/why" ? "text-ink" : "text-mute"
            }`}
          >
            Why EkSeva
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href={ctaHref}>Explore EkSeva</Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/70 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="relative h-4 w-4">
            <span
              className={`absolute left-0 top-1/2 block h-px w-4 bg-current transition ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-4 bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-4 bg-current transition ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        } border-t border-line bg-[rgba(248,247,244,0.96)] backdrop-blur-xl transition`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="container-shell py-4">
          <div className="grid gap-2">
            {homeLinks.map((link) => (
              <Link
                key={link.label}
                href={toHomeAwareHref(pathname, link.href)}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl border border-transparent px-4 py-3 text-base tracking-tight text-ink hover:border-line hover:bg-white/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/why"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-2xl border border-transparent px-4 py-3 text-base tracking-tight text-ink hover:border-line hover:bg-white/70"
            >
              Why EkSeva
            </Link>
            <div className="pt-2">
              <Button href={ctaHref} className="w-full" onClick={() => setOpen(false)}>
                Explore EkSeva
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
