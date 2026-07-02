export default function ContactPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen py-24 px-8">

      <div className="max-w-3xl mx-auto text-center">

        <p className="uppercase tracking-[0.45em] text-[#C8B48A] text-sm">
          Contact
        </p>

        <h1 className="mt-6 text-6xl font-serif">
          Let's Chat
        </h1>

        <p className="mt-6 text-gray-600 leading-8">
          We'd love to hear about your wedding and how we can help make your day
          feel effortless.
        </p>

      </div>

      <form className="max-w-3xl mx-auto mt-20 space-y-6">

        <input
          className="w-full rounded-2xl border p-5"
          placeholder="Your Name"
        />

        <input
          className="w-full rounded-2xl border p-5"
          placeholder="Email Address"
        />

        <input
          className="w-full rounded-2xl border p-5"
          placeholder="Wedding Date"
        />

        <textarea
          rows={6}
          className="w-full rounded-2xl border p-5"
          placeholder="Tell us about your wedding..."
        />

        <button
          className="w-full rounded-full bg-[#C8B48A] text-white py-5"
        >
          Send Inquiry
        </button>

      </form>

    </main>
  );
}