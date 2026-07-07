"use client";

import Image from "next/image";
import Link from "next/link";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { FormEvent, useEffect, useRef, useState } from "react";

export default function ContactContent() {
  const controlClassName =
    "w-full h-12 rounded-xl border border-[#CFC3AF] bg-[#FFFCF8] px-4 text-[#2B2B2B] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition focus:border-[#8A7247]";

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedWeddingDate, setSelectedWeddingDate] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarContainerRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const submitErrorRef = useRef<HTMLParagraphElement | null>(null);

  const formatDateValue = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDateLabel = (value: string) => {
    if (!value) return "Select wedding date";
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const selectedDay = selectedWeddingDate
    ? new Date(`${selectedWeddingDate}T00:00:00`)
    : undefined;

  useEffect(() => {
    if (!isSubmitted) return;

    successHeadingRef.current?.focus();

    const timer = window.setTimeout(() => {
      setIsSubmitted(false);
      setSubmitError(null);
      setIsFormOpen(true);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [isSubmitted]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isCalendarOpen &&
        calendarContainerRef.current &&
        !calendarContainerRef.current.contains(target)
      ) {
        setIsCalendarOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCalendarOpen]);

  useEffect(() => {
    if (isFormOpen && !isSubmitted) {
      firstInputRef.current?.focus();
    }
  }, [isFormOpen, isSubmitted]);

  useEffect(() => {
    if (submitError) {
      submitErrorRef.current?.focus();
    }
  }, [submitError]);

  const handleShowFormAgain = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setIsFormOpen(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phoneNumber: String(formData.get("phoneNumber") ?? "").trim(),
      weddingDate: String(formData.get("weddingDate") ?? "").trim(),
      venue: String(formData.get("venue") ?? "").trim(),
      serviceInterestedIn: String(formData.get("serviceInterestedIn") ?? "").trim(),
      guestCount: String(formData.get("guestCount") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.fullName || !payload.email || !payload.weddingDate || !payload.serviceInterestedIn || !payload.message) {
      setSubmitError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitError(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setSelectedWeddingDate("");
      setIsCalendarOpen(false);
      setIsSubmitted(true);
    } catch {
      setSubmitError("Unable to send your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F4EF] pb-24">
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/services-hero.jpg"
          alt="Softly lit wedding ceremony backdrop with florals"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="uppercase tracking-[0.45em] text-sm text-[#C8B48A]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-serif leading-tight md:text-5xl">
            Let&apos;s start planning your wedding.
          </h1>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1200px] px-6 md:mt-9 md:px-10">
        <div className="rounded-[28px] bg-[#FBF8F2] p-8 shadow-[0_22px_50px_rgba(31,31,31,0.10)] md:p-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-7 text-[#2B2B2B]">
              <div className="space-y-4 text-[17px] leading-8 text-[#3F3F3F]">
                <p>📍 Port Coquitlam, BC</p>
                <p>📞 (604) 442-6406</p>
                <p>✉️ info@haloandpine.ca</p>
              </div>

              <div>
                <p className="text-lg font-medium text-[#2B2B2B]">Office Hours</p>
                <p className="mt-3 text-[17px] leading-8 text-[#3F3F3F]">Monday – Friday</p>
                <p className="text-[17px] leading-8 text-[#3F3F3F]">9:00 AM – 6:00 PM</p>
              </div>

              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={() => setIsFormOpen((previous) => !previous)}
                  aria-label={isFormOpen ? "Hide the contact form" : "Open the contact form"}
                  aria-expanded={isFormOpen}
                  aria-controls="contact-form-panel"
                  className="inline-flex items-center justify-center rounded-full bg-[#C8B48A] px-10 py-4 text-sm font-medium uppercase tracking-[0.35em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72]"
                >
                  Get in Touch
                </button>
              ) : null}
            </div>

            <div className="rounded-[24px] border border-[#E8DFCF] bg-white/70 p-6 shadow-[0_12px_30px_rgba(31,31,31,0.08)] md:p-8">
              <p className="text-2xl font-serif text-[#2B2B2B]">Reach Out</p>
              <p className="mt-3 text-[16px] leading-7 text-[#4A4A4A]">
                Share a few details and we will guide you through the next steps with calm, thoughtful coordination.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#4A4A4A]">
                New here? Start with our <Link href="/services" className="underline underline-offset-4">service packages</Link>, then <Link href="/contact" className="underline underline-offset-4">contact us</Link> with your date and details.
              </p>
            </div>
          </div>

          <div
            id="contact-form-panel"
            className={`transition-all duration-500 ease-in-out ${isFormOpen || isSubmitted ? "mt-10 max-h-[1400px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
          >
            <div className="rounded-[24px] border border-[#E8DFCF] bg-white p-6 shadow-[0_18px_35px_rgba(31,31,31,0.08)] md:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center" role="status" aria-live="assertive">
                  <h2 ref={successHeadingRef} tabIndex={-1} className="text-4xl font-serif text-[#2B2B2B]">Thank you!</h2>
                  <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-[#4A4A4A]">
                    We&apos;ve received your inquiry and will get back to you within 24–48 hours.
                  </p>
                  <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#6E6046]">
                    Your message was sent successfully.
                  </p>
                  <button
                    type="button"
                    onClick={handleShowFormAgain}
                    aria-label="Open the contact form to submit another inquiry"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C8B48A] px-10 py-4 text-sm font-medium uppercase tracking-[0.35em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
                  <label htmlFor="contact-name" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Name *</span>
                    <input
                      id="contact-name"
                      ref={firstInputRef}
                      name="fullName"
                      required
                      autoComplete="name"
                      aria-required="true"
                      className={controlClassName}
                    />
                  </label>

                  <label htmlFor="contact-email" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Email *</span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      aria-required="true"
                      className={controlClassName}
                    />
                  </label>

                  <label htmlFor="contact-phone" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Phone</span>
                    <input
                      id="contact-phone"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      className={controlClassName}
                    />
                  </label>

                  <label htmlFor="wedding-date-button" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Wedding Date *</span>
                    <div ref={calendarContainerRef} className="relative">
                      <button
                        id="wedding-date-button"
                        type="button"
                        onClick={() => setIsCalendarOpen((previous) => !previous)}
                        aria-label={selectedWeddingDate ? `Wedding date, ${formatDateLabel(selectedWeddingDate)}` : "Choose your wedding date"}
                        aria-expanded={isCalendarOpen}
                        aria-controls="wedding-date-calendar"
                        aria-haspopup="dialog"
                        className={`${controlClassName} text-left`}
                      >
                        {formatDateLabel(selectedWeddingDate)}
                      </button>
                      <input type="hidden" name="weddingDate" value={selectedWeddingDate} required />

                      <div
                        id="wedding-date-calendar"
                        role="dialog"
                        aria-label="Wedding date calendar"
                        className={`absolute left-0 z-30 mt-3 w-full min-w-[260px] max-w-[340px] rounded-[18px] border border-[#E8D8B7] bg-[#FFF9F1] p-5 shadow-[0_14px_34px_rgba(31,31,31,0.12)] transition-all duration-300 ease-out ${
                          isCalendarOpen
                            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                        }`}
                      >
                        <DayPicker
                          mode="single"
                          selected={selectedDay}
                          onSelect={(date) => {
                            if (!date) return;
                            setSelectedWeddingDate(formatDateValue(date));
                            setIsCalendarOpen(false);
                          }}
                          showOutsideDays
                          className="hp-calendar"
                          classNames={{
                            month: "hp-calendar-month",
                            month_caption: "hp-calendar-caption",
                            nav: "hp-calendar-nav",
                            button_previous: "hp-calendar-nav-button",
                            button_next: "hp-calendar-nav-button",
                            weekdays: "hp-calendar-weekdays",
                            weekday: "hp-calendar-weekday",
                            week: "hp-calendar-week",
                            day: "hp-calendar-day",
                            selected: "hp-calendar-selected",
                            today: "hp-calendar-today",
                          }}
                        />
                      </div>
                    </div>
                  </label>

                  <label htmlFor="contact-venue" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Venue</span>
                    <input
                      id="contact-venue"
                      name="venue"
                      autoComplete="organization"
                      className={controlClassName}
                    />
                  </label>

                  <label htmlFor="contact-service" className="block">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Service Interested In *</span>
                    <select
                      id="contact-service"
                      name="serviceInterestedIn"
                      required
                      defaultValue=""
                      aria-required="true"
                      className={controlClassName}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Day-of Coordination (The Essential)">Day-of Coordination (The Essential)</option>
                      <option value="Month-of Coordination (The Signature)">Month-of Coordination (The Signature)</option>
                      <option value="I'm not sure yet">I&apos;m not sure yet</option>
                    </select>
                  </label>

                  <label htmlFor="contact-guest-count" className="block md:col-span-2">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Guest Count</span>
                    <input
                      id="contact-guest-count"
                      name="guestCount"
                      type="number"
                      min={1}
                      inputMode="numeric"
                      className={controlClassName}
                    />
                  </label>

                  <label htmlFor="contact-message" className="block md:col-span-2">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E6046]">Message *</span>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                      aria-required="true"
                      className="w-full rounded-xl border border-[#CFC3AF] bg-[#FFFCF8] px-4 py-3 text-[#2B2B2B] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition focus:border-[#8A7247]"
                    />
                  </label>

                  {submitError ? (
                    <p ref={submitErrorRef} tabIndex={-1} className="md:col-span-2 rounded-lg border border-[#E7CACA] bg-[#FFF4F4] px-3 py-2 text-sm text-[#8C3A3A]" role="alert" aria-live="assertive">
                      {submitError}
                    </p>
                  ) : null}

                  <div className="pt-2 md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending your message" : "Send your message"}
                      className="inline-flex w-full items-center justify-center rounded-full border border-[#B79F72] bg-[#C8B48A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#1F1F1F] shadow-[0_10px_20px_rgba(183,159,114,0.28)] transition duration-300 hover:bg-[#b79f72] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hp-calendar {
          width: 100%;
          font-family: var(--font-geist-sans), sans-serif;
          color: #2b2b2b;
        }

        .hp-calendar-month {
          width: 100%;
        }

        .hp-calendar-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.22rem;
          letter-spacing: 0.01em;
          color: #2b2b2b;
        }

        .hp-calendar-nav {
          display: flex;
          gap: 6px;
        }

        .hp-calendar-nav-button {
          height: 32px;
          width: 32px;
          border-radius: 9999px;
          border: 1px solid #d9c39a;
          background: #fffdf8;
          color: #b89b6a;
          transition: all 200ms ease;
        }

        .hp-calendar-nav-button:hover {
          border-color: #b89b6a;
          color: #b89b6a;
        }

        .hp-calendar-nav-button:focus-visible {
          outline: 3px solid #8a7247;
          outline-offset: 2px;
        }

        .hp-calendar-weekdays {
          margin-bottom: 8px;
        }

        .hp-calendar-weekday {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #6e6046;
          font-weight: 500;
        }

        .hp-calendar-week {
          margin-bottom: 4px;
        }

        .hp-calendar-day {
          height: 38px;
          width: 38px;
          border-radius: 9999px;
          font-size: 13px;
          transition: all 200ms ease;
        }

        .hp-calendar-day:hover {
          background: rgba(184, 155, 106, 0.18);
          color: #8a7247;
        }

        .hp-calendar-day:focus-visible {
          outline: 3px solid #8a7247;
          outline-offset: 2px;
        }

        .hp-calendar-today {
          background: transparent;
          color: #8e7545;
          box-shadow: inset 0 0 0 1px rgba(184, 155, 106, 0.65);
        }

        .hp-calendar-selected,
        .hp-calendar-selected:hover {
          background: #b89b6a;
          color: #fff;
          box-shadow: 0 8px 18px rgba(184, 155, 106, 0.35);
        }
      `}</style>
    </main>
  );
}