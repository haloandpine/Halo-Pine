import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-neutral-500 mb-6">
              Halo & Pine
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 leading-tight">
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

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="rounded-full bg-[#C8B48A] px-8 py-4 text-sm tracking-[0.2em] uppercase text-white transition hover:opacity-90"
              >
                View Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-neutral-300 px-8 py-4 text-sm tracking-[0.2em] uppercase text-neutral-800 transition hover:bg-neutral-100"
              >
                Book Consultation
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <Image
              src="/kajal-home.jpg"
              alt="Wedding Coordinator"
              width={700}
              height={850}
              className="rounded-3xl object-cover shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}