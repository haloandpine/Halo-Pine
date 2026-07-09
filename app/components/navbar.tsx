"use client";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const brandFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const scrollThreshold = isAbout ? 80 : isContact ? 80 : 100;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 z-50 w-full bg-[#F8F4EF] transition-all duration-500 ease-out ${scrolled ? "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.22)] border-b border-black/5" : "shadow-none border-b border-transparent"} py-[14px] md:py-[22px]`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 md:px-8">
        <Link
          href="/"
          aria-label="Halo & Pine home"
          className={`${brandFont.className} shrink-0 whitespace-nowrap text-[20px] font-normal leading-none tracking-[0.10em] text-[#222222] md:text-[28px] md:tracking-[0.12em]`}
        >
          HALO &amp; PINE
        </Link>
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((currentState) => !currentState)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D0C5] text-[#222222] transition hover:bg-[#F1ECE4] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        <div className="no-scrollbar hidden w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-[#222222] transition-colors duration-500 sm:gap-6 sm:text-xs md:flex md:w-auto md:justify-center md:gap-6 md:text-sm md:tracking-[0.20em]">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="rounded-full px-3 py-2 transition hover:opacity-70 md:px-2 md:py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="rounded-full px-3 py-2 transition hover:opacity-70 md:px-2 md:py-1"
          >
            About
          </Link>
          <Link
            href="/services"
            aria-current={pathname === "/services" ? "page" : undefined}
            className="rounded-full px-3 py-2 transition hover:opacity-70 md:px-2 md:py-1"
          >
            Services
          </Link>
          <Link
            href="/planner"
            aria-current={pathname === "/planner" ? "page" : undefined}
            className="rounded-full px-3 py-2 text-center transition hover:opacity-70 md:px-2 md:py-1"
          >
            Meet Your Planner
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="rounded-full px-3 py-2 transition hover:opacity-70 md:px-2 md:py-1"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#F8F4EF] px-8 pb-10 pt-28 transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col gap-4 text-sm uppercase tracking-[0.3em] text-[#222222]">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="rounded-full px-2 py-3 transition hover:opacity-70"
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="rounded-full px-2 py-3 transition hover:opacity-70"
          >
            About
          </Link>
          <Link
            href="/services"
            aria-current={pathname === "/services" ? "page" : undefined}
            className="rounded-full px-2 py-3 transition hover:opacity-70"
          >
            Services
          </Link>
          <Link
            href="/planner"
            aria-current={pathname === "/planner" ? "page" : undefined}
            className="rounded-full px-2 py-3 transition hover:opacity-70"
          >
            Meet Your Planner
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="mt-2 inline-flex w-fit rounded-full px-2 py-3 transition hover:opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
