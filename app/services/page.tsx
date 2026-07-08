export default function ServicesPage() {
  return (
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">
      <p className="mb-4 uppercase tracking-[0.35em] text-[#C8B48A]">
        Our Services
      </p>

      <h1 className="text-5xl font-serif text-[#3E3A36]">
        How can we work together?
      </h1>
    </div>

    <div className="grid gap-8 md:grid-cols-3">

      {/* Card 1 */}

      <button className="group overflow-hidden rounded-[28px] text-left shadow-lg transition duration-500 hover:-translate-y-2">

        <div className="relative h-[520px]">
          <img
            src="/dayof.jpg"
            alt="Day-of Coordination"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-8 left-8 right-8 text-white">

            <h3 className="mb-3 text-3xl font-serif">
              Day-of
              <br />
              Coordination
            </h3>

            <p className="mb-6 uppercase tracking-[0.2em] text-sm">
              Wedding Day Management
            </p>

            <span className="inline-block border border-white px-5 py-2 text-xs uppercase tracking-[0.25em]">
              Learn More
            </span>

          </div>

        </div>

      </button>

      {/* Card 2 */}

      <button className="group overflow-hidden rounded-[28px] text-left shadow-lg transition duration-500 hover:-translate-y-2">

        <div className="relative h-[520px]">
          <img
            src="/monthof.jpg"
            alt="Month-of Coordination"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-8 left-8 right-8 text-white">

            <h3 className="mb-3 text-3xl font-serif">
              Month-of
              <br />
              Coordination
            </h3>

            <p className="mb-6 uppercase tracking-[0.2em] text-sm">
              Final Planning Support
            </p>

            <span className="inline-block border border-white px-5 py-2 text-xs uppercase tracking-[0.25em]">
              Learn More
            </span>

          </div>

        </div>

      </button>

      {/* Card 3 */}

      <button className="group overflow-hidden rounded-[28px] text-left shadow-lg transition duration-500 hover:-translate-y-2">

        <div className="relative h-[520px]">
          <img
            src="/custom.jpg"
            alt="Custom Wedding Coordination"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-8 left-8 right-8 text-white">

            <h3 className="mb-3 text-3xl font-serif">
              Custom
              <br />
              Coordination
            </h3>

            <p className="mb-6 uppercase tracking-[0.2em] text-sm">
              Tailored Wedding Support
            </p>

            <span className="inline-block border border-white px-5 py-2 text-xs uppercase tracking-[0.25em]">
              Learn More
            </span>

          </div>

        </div>

      </button>

    </div>

  </div>
</section>
  );
}