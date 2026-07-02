import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Image
        src="/services-hero.jpg"
        alt="Wedding"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <p className="uppercase tracking-[0.45em] text-sm text-[#C8B48A]">
          OUR SERVICES
        </p>

        <h1 className="mt-5 text-6xl md:text-7xl font-serif">
          Halo & Pine
        </h1>

        <p className="mt-6 max-w-2xl text-xl">
          Thoughtfully designed coordination packages for every kind of
          celebration.
        </p>
      </div>
    </section>
  );
}