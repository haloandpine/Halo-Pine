import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#D8B46A]/70 bg-[#171717] text-white shadow-[0_-1px_0_rgba(216,180,106,0.12)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-7 lg:px-14">
        <div className="flex w-full justify-center md:w-auto md:flex-1 md:justify-start">
          <Image
            src="/logo-footer.PNG"
            alt="Halo & Pine"
            width={220}
            height={162}
            sizes="(max-width: 767px) 170px, 220px"
            className="h-auto w-[170px] md:w-[220px]"
          />
        </div>

        <p className="w-full text-xs tracking-[0.12em] text-white/75 md:w-auto md:flex-1 md:text-center">
          © 2026 Halo &amp; Pine. All rights reserved.
        </p>

        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-1 md:items-end">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:info@haloandpine.ca"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B46A]/45 bg-white/5 px-4 py-2 text-xs font-normal tracking-[0.16em] text-white transition duration-200 hover:border-[#D8B46A] hover:bg-white/10 hover:text-[#F7E9C8]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#D8B46A]"
              >
                <path
                  d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m6.5 7.5 5.5 4.5 5.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Email</span>
            </a>

            <a
              href="https://www.google.com/search?q=Halo+%26+Pine+reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B46A]/45 bg-[#D8B46A]/10 px-4 py-2 text-xs font-normal tracking-[0.16em] text-white transition duration-200 hover:border-[#D8B46A] hover:bg-[#D8B46A]/18 hover:text-[#F7E9C8]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#D8B46A]"
              >
                <path
                  d="m12 3 1.89 4.83 5.11.37-3.9 3.32 1.19 5.06L12 13.97l-4.29 2.61 1.19-5.06-3.9-3.32 5.11-.37L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Google Reviews</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
