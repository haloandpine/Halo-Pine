import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/hero.PNG"
        alt="Halo & Pine"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mt-44">
        <img
  src="/logo.png"
  alt="Halo & Pine"
  className="w-72 md:w-[650px] mb-8"
/>

        <p className="-mt-2 text-white text-3xl md:text-5xl font-serif leading-tight">
          Creating calm for
          <br />
          your most meaningful day.
        </p>
<p className="mt-4 uppercase tracking-[0.45em] text-[#E7D8B2] text-lg">
          Wedding Coordination
        </p>

        <button className="mt-10 bg-[#C8B48A] text-white px-10 py-4 rounded-full hover:bg-[#b59f72] transition duration-300">
          Book Consultation
        </button>

      </div>
    </section>
  );
}