"use client";

import { useEffect, useState } from "react";
import DatePicker from "../components/DatePicker";

const initialFormData = {
  fullName: "",
  lastName: "",
  email: "",
  weddingDate: "",
  serviceInterestedIn: "",
  venue: "",
  referralSource: "",
  message: "",
};

const packageMap: Record<string, string> = {
  intimate: "The Intimate — Elopements & Micro Weddings",
  essential: "The Essential — Day-of Coordination",
  signature: "The Signature — Month-of Coordination",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const packageKey = (searchParams.get("package") ?? "").toLowerCase();
    const selectedPackage = packageMap[packageKey] ?? "";

    setFormData((currentFormData) => {
      if (currentFormData.serviceInterestedIn === selectedPackage) {
        return currentFormData;
      }

      return {
        ...currentFormData,
        serviceInterestedIn: selectedPackage,
      };
    });
  }, []);

  useEffect(() => {
    if (submitState !== "success") {
      setShowSuccessCard(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowSuccessCard(true);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [submitState]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (submitState === "success" || submitState === "error") {
      setSubmitState("idle");
      setShowSuccessCard(false);
    }

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitState === "sending") {
      return;
    }

    setSubmitState("sending");
    setShowSuccessCard(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setFormData(initialFormData);
      setSelectedDate(undefined);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
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
              We&apos;d love to hear about your wedding.
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#666]">
              Whether you&apos;re planning an intimate celebration or a full wedding
              weekend, we&apos;d be honoured to learn more about your vision.
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
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
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

              <DatePicker
                value={selectedDate}
                onChange={(date) => {
                  if (submitState === "success" || submitState === "error") {
                    setSubmitState("idle");
                    setShowSuccessCard(false);
                  }

                  setSelectedDate(date);

                  setFormData((currentFormData) => ({
                    ...currentFormData,
                    weddingDate: date
                      ? date.toISOString().split("T")[0]
                      : "",
                  }));
                }}
              />
              <select
                name="serviceInterestedIn"
                value={formData.serviceInterestedIn}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              >
                <option value="">Select Your Package</option>
                <option value="The Intimate — Elopements & Micro Weddings">The Intimate — Elopements & Micro Weddings</option>
                <option value="The Essential — Day-of Coordination">The Essential — Day-of Coordination</option>
                <option value="The Signature — Month-of Coordination">The Signature — Month-of Coordination</option>
              </select>

              <input
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Wedding Venue"
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              />

              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DDD] p-4 outline-none"
              >
                <option value="">How did you hear about us?</option>
                <option value="Google Search">Google</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Friend or Family">Friend / Family</option>
                <option value="Referral">Vendor Referral</option>
                <option value="WeddingWire">WeddingWire</option>
                <option value="Other">Other</option>
              </select>

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
                disabled={submitState === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C8B48A] py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#b69b6b] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : "Send Inquiry"}
              </button>

              {submitState === "success" && !showSuccessCard ? (
                <div className="flex items-center justify-center rounded-2xl border border-[#d6ead8] bg-[#f4fbf5] py-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dff2e2]">
                    <svg
                      className="h-6 w-6 animate-[luxury-check_850ms_ease-out_forwards] text-[#5b8a63]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
              ) : null}

              {submitState === "success" && showSuccessCard ? (
                <div className="rounded-2xl border border-[#d6ead8] bg-[#f7fcf7] px-6 py-5 text-center">
                  <p className="font-serif text-2xl text-[#3E3A36]">Inquiry sent successfully!</p>
                  <p className="mt-2 text-sm leading-7 text-[#6a6a6a]">
                    Thank you for sharing your details. We will be in touch within 24-48 hours.
                  </p>
                </div>
              ) : null}

              {submitState === "error" ? (
                <div className="rounded-2xl border border-[#ead6d6] bg-[#fcf7f7] px-5 py-4 text-center text-sm text-[#7a4b4b]">
                  Something went wrong. Please try again.
                </div>
              ) : null}

            </form>

          </div>

        </div>

      </section>

    </>
  );
}