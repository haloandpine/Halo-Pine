import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/hero.PNG"
        alt="Romantic wedding reception table setting with candlelight"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/logo.PNG"
            alt="Halo and Pine logo"
            width={650}
            height={240}
            priority
            sizes="(min-width: 768px) 650px, 288px"
            className="w-72 md:w-[650px] h-auto"
          />

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white text-3xl md:text-5xl font-serif leading-tight">
              Creating calm for
              <br />
              your most meaningful day.
            </h1>

            <p className="uppercase tracking-[0.45em] text-[#E7D8B2] text-lg">
              Wedding Coordination
            </p>

            <Link
              href="/contact"
              aria-label="Book a consultation with Halo and Pine"
              className="mt-4 rounded-full bg-[#C8B48A] px-10 py-4 text-[#1F1F1F] transition duration-300 hover:bg-[#b59f72]"
            >
              Book Consultation
            </Link>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
              <Link href="/services" className="underline underline-offset-4 hover:text-[#E7D8B2]">
                Explore Services
              </Link>
              <Link href="/about" className="underline underline-offset-4 hover:text-[#E7D8B2]">
                Meet Your Planner
              </Link>
              <Link href="/faq" className="underline underline-offset-4 hover:text-[#E7D8B2]">
                Wedding FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
