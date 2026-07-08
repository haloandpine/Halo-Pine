import ContactCTA from "../components/ContactCTA";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}

      <section className="relative h-[70vh] min-h-[620px] overflow-hidden">
        <img
          src="/contact-hero.jpg"
          alt="Halo & Pine Contact"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <p className="mb-5 uppercase tracking-[0.45em] text-sm">
              HALO & PINE
            </p>

            <h1 className="font-serif text-6xl">
              Get In Touch
            </h1>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="bg-[#F9F7F3] py-28">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#C8B48A] text-sm">
              Contact
            </p>

            <h2 className="mt-5 font-serif text-5xl text-[#3E3A36]">
              We'd love to hear about your wedding.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6B6B6B]">
              Whether you're planning an intimate celebration or a full wedding
              weekend, we'd be honoured to learn more about your vision.
            </p>

            <div className="mt-14 space-y-8">

              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-[#C8B48A]">
                  Email
                </p>

                <p className="mt-2 text-lg text-[#3E3A36]">
                  info@haloandpine.ca
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-[#C8B48A]">
                  Location
                </p>

                <p className="mt-2 text-lg text-[#3E3A36]">
                  Port Coquitlam, British Columbia
                </p>
              </div>

              <div>

                <p className="mt-2 text-lg text-[#3E3A36]">
                  @haloandpine
                </p>
              </div>

            </div>

            <div className="mt-14 overflow-hidden rounded-[28px] shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Vancouver,+BC&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[32px] bg-white p-10 shadow-xl">

            <h3 className="font-serif text-4xl text-[#3E3A36]">
              Wedding Inquiry
            </h3>

            <p className="mt-4 text-[#666]">
              Tell us a little about your day.
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  placeholder="First Name"
                  className="rounded-xl border border-[#DDD] p-4 outline-none"
                />

                <input
                  placeholder="Last Name"
                  className="rounded-xl border border-[#DDD] p-4 outline-none"
                />

              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                placeholder="Phone"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                type="date"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              /><input
                placeholder="Venue / Location"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <select className="w-full rounded-xl border border-[#DDD] p-4 outline-none">
                <option>Select a Package</option>
                <option>The Intimate</option>
                <option>The Essential</option>
                <option>The Signature</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your wedding..."
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <button
                className="w-full rounded-full bg-[#C8B48A] py-4 uppercase tracking-[0.25em] text-sm font-medium transition hover:bg-[#b39b70]"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}