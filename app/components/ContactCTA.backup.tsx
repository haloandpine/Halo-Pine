export default function ContactCTA() {
  return (
    <section className="bg-[#2B2B2B] text-white py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[0.45em] text-[#C8B48A] text-sm">
          Ready to Begin?
        </p>

        <h2 className="mt-6 text-6xl font-serif">
          Let's Create Something Beautiful Together
        </h2>

        <p className="mt-8 text-lg text-gray-300 leading-8 max-w-2xl mx-auto">
          We'd love to hear your story and learn more about your wedding.
          Schedule a complimentary consultation and let's begin planning a day
          you'll always remember.
        </p>

        <a
          href="/contact"
          className="inline-block mt-12 bg-[#C8B48A] hover:bg-[#b39c72] transition px-10 py-4 rounded-full text-white"
        >
          Book Your Consultation
        </a>

      </div>
    </section>
  );
}