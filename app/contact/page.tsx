"use client";

import { useState } from "react";
import ContactCTA from "../components/ContactCTA";
export default function ContactPage() {
  const [formData, setFormData] = useState({
  fullName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  weddingDate: "",
  venue: "",
  serviceInterestedIn: "",
  referralSource: "",
  message: "",
});

const [sending, setSending] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSending(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  setSending(false);

  if (res.ok) {
    alert("Inquiry sent successfully.");
  } else {
    alert("Something went wrong.");
  }
};
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
</div>
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

            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 items-start">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps?q=Port+Coquitlam,+BC&output=embed"
    className="h-[320px] w-full"
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

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="First Name"
  className="rounded-xl border border-[#DDD] p-4 outline-none"
/>

                <input
  placeholder="Last Name"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
  className="rounded-xl border border-[#DDD] p-4 outline-none"
/>

              </div>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
/>

              <input
                placeholder="Phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
                ></input>

              <select
                name="serviceInterestedIn"
value={formData.serviceInterestedIn}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              >
  <option value="">Select Your Package</option>
  <option value="intimate">The Intimate</option>
  <option value="essential">The Essential</option>
  <option value="signature">The Signature</option>
</select>

<input
  placeholder="Wedding Venue"
  name="venue"
  value={formData.venue}
  onChange={handleChange}
  className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
/>

<input
  placeholder="How did you hear about us?"
  name="referralSource"
  value={formData.referralSource}
  onChange={handleChange}
  className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
/>

<textarea
  rows={6}
  placeholder="Tell us about your wedding..."
  name="message"
  value={formData.message}
  onChange={handleChange}
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