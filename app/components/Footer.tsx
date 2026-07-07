import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[90px] border-t border-[#D8B46A] bg-[#171717] text-white">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-4 px-6 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p className="font-serif text-sm">Halo &amp; Pine</p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/80">
          <Link href="/" className="hover:text-[#D8B46A]">Home</Link>
          <Link href="/about" className="hover:text-[#D8B46A]">About</Link>
          <Link href="/services" className="hover:text-[#D8B46A]">Services</Link>
          <Link href="/planner" className="hover:text-[#D8B46A]">Planner</Link>
          <Link href="/contact" className="hover:text-[#D8B46A]">Contact</Link>
        </nav>

        <p className="text-white/75">© 2026 Halo &amp; Pine. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-1 text-white/85 transition duration-300 hover:text-[#D8B46A]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href="mailto:info@haloandpine.ca"
            aria-label="Email"
            className="rounded-full p-1 text-white/85 transition duration-300 hover:text-[#D8B46A]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="5" width="19" height="14" rx="2" />
              <path d="M3.5 6.5L12 13l8.5-6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
