export default function ServicesCards() {
  return (
    <section className="bg-[#F8F4EF] py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Essential */}
        <div className="rounded-3xl bg-white shadow-2xl p-10 h-[640px] flex flex-col">
          <p className="uppercase tracking-[0.35em] text-[#C8B48A] text-sm">
            THE ESSENTIAL
          </p>

          <h2 className="mt-5 text-4xl font-serif">
            Day-of Coordination
          </h2>

          <p className="mt-6 text-3xl font-bold">
            Starting at $1,295
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Perfect for couples who have planned everything and simply want to
            enjoy their wedding day.
          </p>

          <button className="mt-auto rounded-full border border-[#C8B48A] py-4 hover:bg-[#C8B48A] hover:text-white transition">
            View Details
          </button>
        </div>

        {/* Signature */}
        <div className="rounded-3xl bg-white shadow-2xl p-10 h-[700px] -mt-8 flex flex-col">
          <span className="inline-block w-fit rounded-full bg-[#C8B48A] px-5 py-2 text-white text-sm">
            Most Popular
          </span>

          <p className="mt-8 uppercase tracking-[0.35em] text-[#C8B48A] text-sm">
            THE SIGNATURE
          </p>

          <h2 className="mt-5 text-4xl font-serif">
            Month-of Coordination
          </h2>

          <p className="mt-6 text-3xl font-bold">
            Starting at $1,995
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our most comprehensive coordination package for a completely
            stress-free wedding.
          </p>

          <button className="mt-auto rounded-full py-4 bg-[#C8B48A] text-white">
            View Details
          </button>
        </div>

        {/* Intimate */}
        <div className="rounded-3xl bg-white shadow-2xl p-10 h-[640px] flex flex-col">
          <p className="uppercase tracking-[0.35em] text-[#C8B48A] text-sm">
            THE INTIMATE
          </p>

          <h2 className="mt-5 text-4xl font-serif">
            Elopements & Micro Weddings
          </h2>

          <p className="mt-6 text-3xl font-bold">
            Starting at $795
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Designed for intimate celebrations with up to 40 guests.
          </p>

          <button className="mt-auto rounded-full border border-[#C8B48A] py-4 hover:bg-[#C8B48A] hover:text-white transition">
            View Details
          </button>
        </div>

      </div>
    </section>
  );
}