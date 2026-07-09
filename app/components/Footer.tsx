import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-h-[90px] border-t border-[#D8B46A] bg-[#171717] text-white">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4 px-6 py-8 text-center md:py-10 md:px-10 lg:px-14">
        <Image
          src="/logo-footer.PNG"
          alt="Halo & Pine"
          width={220}
          height={162}
          sizes="(max-width: 767px) 170px, 220px"
          className="h-auto w-[170px] md:w-[220px]"
        />

        <p className="text-xs text-white/75">© 2026 Halo &amp; Pine. All rights reserved.</p>
      </div>
    </footer>
  );
}
