"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isServices = pathname === "/services";
  const scrollThreshold = isAbout ? 80 : isContact ? 80 : 100;
  const isTransparent = (isHome || isAbout || isContact) && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${isTransparent ? "bg-transparent py-[26px]" : "bg-white/90 py-[22px] shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] border-b border-slate-200/40 backdrop-blur-xl"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 md:justify-end md:px-8">
        <div className={`flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.24em] sm:gap-6 sm:text-xs md:gap-8 md:text-sm md:tracking-widest transition-colors duration-500 ${isContact && isTransparent ? "text-white" : "text-[#222222]"}`}>
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="rounded-full px-2 py-1 transition hover:opacity-70"
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="rounded-full px-2 py-1 transition hover:opacity-70"
          >
            About
          </Link>
          <Link
            href="/services"
            aria-current={pathname === "/services" ? "page" : undefined}
            className="rounded-full px-2 py-1 transition hover:opacity-70"
          >
            Services
          </Link>
          <Link
            href="/planner"
            aria-current={pathname === "/planner" ? "page" : undefined}
            className="rounded-full px-2 py-1 text-center transition hover:opacity-70"
          >
            Meet Your Planner
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="rounded-full bg-[#C8B48A] px-4 py-2 text-black transition hover:bg-[#b79f72]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
