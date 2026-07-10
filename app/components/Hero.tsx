import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h1 className="text-5xl md:text-7xl font-serif font-light leading-[0.95] tracking-[-0.03em] text-[#3E3A36]">
              Thoughtful
              <br />
              Wedding
              <br />
              Coordination
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
              Creating calm for your most meaningful day through thoughtful,
              intentional coordination across Greater Vancouver.
            </p>

            <div className="md:mt-5 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="rounded-full bg-[#C8B48A] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B7A173] hover:-translate-y-0.5"
              >
                View Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#D8D0C5] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#3E3A36] transition-all duration-300 hover:border-[#C8B48A] hover:bg-[#F8F4EF] hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative h-[620px] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]">

  <Image
    src="/kajal-home.jpg"
    alt="Wedding Coordinator"
    width={800}
    height={1000}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
  />

</div>

        </div>

      </div>
    </section>
  );
}