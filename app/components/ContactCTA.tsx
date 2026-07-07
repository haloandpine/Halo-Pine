export default function ContactCTA() {
  return (
    <section className="bg-[#2B2B2B] py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">

        <p className="uppercase tracking-[0.45em] text-[#C8B48A] text-sm">
          Ready to Begin?
        </p>

        <h2 className="mt-6 text-3xl font-serif leading-tight md:text-6xl">
          Let's Create Something Beautiful Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:mt-8 md:text-lg">
          We'd love to hear your story and learn more about your wedding.
          Schedule a complimentary consultation and let's begin planning a day
          you'll always remember.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-block rounded-full bg-[#C8B48A] px-9 py-3.5 text-white transition hover:bg-[#b39c72] md:mt-12 md:px-10 md:py-4"
        >
          Book Your Consultation
        </a>

      </div>
    </section>
  );
}