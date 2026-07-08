"use client";

import { useEffect, useMemo, useState } from "react";

type ServicePackage = {
  id: string;
  title: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  image: string;
};

const packages: ServicePackage[] = [
  {
    id: "essential",
    title: "The Essential — Day-of Coordination",
    price: "Starting at $1,295",
    image: "/dayof.jpg",
    shortDescription:
      "Perfect for couples who have planned their wedding and want a calm professional lead on the day.",
    fullDescription:
      "A polished day-of coordination package for couples who have completed planning and want a trusted expert to orchestrate logistics, vendors and timing with confidence.",
    includes: [
      "Complimentary consultation",
      "Wedding day timeline review",
      "Vendor confirmations",
      "Ceremony processional planning",
      "Wedding day management (up to 10 hours)",
      "Coordination with all vendors",
      "Emergency kit",
      "Timeline management",
      "Point of contact for family & vendors",
    ],
  },
  {
    id: "signature",
    title: "The Signature — Month-of Coordination",
    price: "Starting at $1,995",
    image: "/monthof.jpg",
    shortDescription:
      "For couples who have done the planning and want experienced leadership in the final stretch.",
    fullDescription:
      "Comprehensive month-of coordination with detailed planning, vendor communication and complete wedding-day oversight.",
    includes: [
      "Everything in The Essential",
      "4–6 weeks of support",
      "Unlimited email support",
      "Detailed timeline",
      "Vendor management",
      "Floor plan review",
      "Ceremony rehearsal",
      "Decor oversight",
    ],
  },
  {
    id: "intimate",
    title: "The Intimate — Elopements & Micro Weddings",
    price: "Starting at $795",
    image: "/custom.jpg",
    shortDescription:
      "Designed for celebrations with up to 40 guests.",
    fullDescription:
      "A refined coordination experience for intimate ceremonies and micro weddings.",
    includes: [
      "Planning consultation",
      "Vendor coordination",
      "Ceremony management",
      "Timeline creation",
      "Up to 6 hours coordination",
    ],
  },
];

export default function ServicesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPackage = useMemo(
    () => packages.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  );

  useEffect(() => {
    if (!selectedPackage) return;

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [selectedPackage]);

  return (
    <>
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

            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedId(pkg.id)}
                className="group overflow-hidden rounded-[28px] text-left shadow-lg transition duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[520px]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="mb-3 text-3xl font-serif">
                      {pkg.title}
                    </h3>

                    <p className="mb-6 text-sm uppercase tracking-[0.2em]">
                      {pkg.shortDescription}
                    </p>

                    <span className="inline-block border border-white px-5 py-2 text-xs uppercase tracking-[0.25em]">
                      Learn More
                    </span>
                  </div>
                </div>
              </button>
            ))}

          </div>
        </div>
      </section>
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-6 backdrop-blur-md"
          onClick={() => setSelectedId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white p-10 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="uppercase tracking-[0.3em] text-[#C8B48A] text-sm">
                  Package
                </p>

                <h2 className="mt-3 font-serif text-4xl text-[#2B2B2B]">
                  {selectedPackage.title}
                </h2>

                <p className="mt-3 text-xl font-medium text-[#8A7247]">
                  {selectedPackage.price}
                </p>
              </div>

              <button
                onClick={() => setSelectedId(null)}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100"
              >
                Close
              </button>
            </div>

            <div className="mt-10 overflow-hidden rounded-[24px]">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="h-[320px] w-full object-cover"
              />
            </div>

            <p className="mt-8 text-lg leading-8 text-neutral-700">
              {selectedPackage.fullDescription}
            </p>

            <h3 className="mt-10 font-serif text-2xl text-[#2B2B2B]">
              What's Included
            </h3>

            <ul className="mt-6 space-y-4">
              {selectedPackage.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[17px] leading-7 text-neutral-700"
                >
                  <span className="mt-1 text-[#C8B48A]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button
                onClick={() => setSelectedId(null)}
                className="rounded-full bg-[#C8B48A] px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-[#b79f72]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}