"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 z-50 w-full bg-[#F8F4EF] transition-all duration-500 ease-out ${scrolled ? "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.22)] border-b border-black/5" : "shadow-none border-b border-transparent"} py-[14px] md:py-[22px]`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="shrink-0">
  <Image
    src="/logo.PNG"
    alt="Halo & Pine"
    width={220}
    height={60}
    className="h-10 w-auto object-contain"
    priority
  />
</Link>
        <div className="no-scrollbar flex w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-[#222222] transition-colors duration-500 sm:gap-6 sm:text-xs md:w-auto md:justify-center md:gap-6 md:text-sm md:tracking-widest">
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
            className="rounded-full bg-[#C8B48A] px-4 py-2.5 text-black transition hover:bg-[#b79f72] md:py-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
