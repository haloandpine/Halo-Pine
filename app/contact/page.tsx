"use client";

import { useState } from "react";
import ContactCTA from "../components/ContactCTA";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    package: "",
    venue: "",
    referral: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="/contact-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

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

      <section className="bg-[#faf8f4] py-24">

        <div className="mx-auto grid max-w-7xl items-start gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-[#C8B48A]">
              Contact
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#3E3A36]">
              We'd love to hear about your wedding.
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#666]">
              Whether you're planning an intimate celebration or a full wedding
              weekend, we'd be honoured to learn more about your vision.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="uppercase tracking-[0.25em] text-xs text-[#C8B48A]">
                  Email
                </p>

                <p className="mt-2">
                  info@haloandpine.ca
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.25em] text-xs text-[#C8B48A]">
                  Location
                </p>

                <p className="mt-2">
                  Port Coquitlam, British Columbia
                </p>
              </div>

            </div>

            <div className="mt-12 overflow-hidden rounded-[22px] shadow-lg">

              <iframe
                title="map"
                src="https://www.google.com/maps?q=Port+Coquitlam,+BC&output=embed"
                className="h-[260px] w-full"
              />

            </div>

          </div>

          <div className="rounded-[26px] bg-white p-10 shadow-xl">

            <h3 className="font-serif text-4xl text-[#3E3A36]">
              Wedding Inquiry
            </h3>

            <p className="mt-3 text-[#777]">
              Tell us a little about your day.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            ><div className="grid gap-5 md:grid-cols-2">

                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="rounded-xl border border-[#DDD] p-4 outline-none"
                />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="rounded-xl border border-[#DDD] p-4 outline-none"
                />

              </div>

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              >
                <option value="">Select Your Package</option>
                <option>The Intimate</option>
                <option>The Essential</option>
                <option>The Signature</option>
              </select>

              <input
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Wedding Venue"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <input
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                placeholder="How did you hear about us?"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding..."
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#C8B48A] py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#b69b6b]"
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