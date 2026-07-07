"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ServicePackage } from "./servicesData";

type ServicesContentProps = {
  packages: ServicePackage[];
};

export default function ServicesContent({ packages }: ServicesContentProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const selectedPackage = useMemo(
    () => packages.find((pkg) => pkg.id === selectedPackageId) ?? null,
    [packages, selectedPackageId]
  );

  useEffect(() => {
    if (!selectedPackage) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPackageId(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [selectedPackage]);

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-10 md:mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8A7247]">Services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-[#2B2B2B] md:text-5xl">
            Thoughtful wedding coordination designed to feel polished, seamless, and deeply personal.
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.map((servicePackage) => (
            <article
              key={servicePackage.id}
              className="flex h-full flex-col rounded-[26px] border border-[#E8DFCF] bg-white p-7 shadow-[0_18px_34px_rgba(31,31,31,0.08)] md:p-8"
            >
              <h2 className="font-serif text-[34px] leading-tight text-[#2B2B2B]">
                {servicePackage.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8A7247]">
                {servicePackage.subtitle}
              </p>
              <p className="mt-6 text-xl font-semibold text-[#2B2B2B]">{servicePackage.priceLabel}</p>
              <p className="mt-5 text-[16px] leading-7 text-[#3F3F3F]">{servicePackage.shortDescription}</p>

              <ul className="mt-6 space-y-3 text-[#3F3F3F]" aria-label={`${servicePackage.title} features`}>
                {servicePackage.includes.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 leading-7">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8A7247]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPackageId(servicePackage.id)}
                className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-[#C8B48A] px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72]"
              >
                Let&apos;s Connect
              </button>
            </article>
          ))}
        </div>

        <section className="mt-16 border-t border-[#D8CCB5] pt-10 text-[#3F3F3F]">
          <h2 className="font-serif text-3xl text-[#2B2B2B] md:text-4xl">Planning Your Next Step</h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-8">
            Learn more about our approach on the <Link href="/about" className="underline underline-offset-4">About page</Link>, explore package details above, or <Link href="/contact" className="underline underline-offset-4">contact us</Link> to check availability.
          </p>
        </section>
      </section>

      <div
        aria-hidden={!selectedPackage}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setSelectedPackageId(null);
          }
        }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[rgba(24,24,24,0.42)] px-6 backdrop-blur-sm transition-all duration-300 ${
          selectedPackage ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-description"
          className={`w-full max-w-2xl rounded-[30px] border border-[#E8DFCF] bg-[#FBF8F2] p-7 shadow-[0_35px_80px_rgba(20,20,20,0.35)] transition-all duration-300 md:p-10 ${
            selectedPackage ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {selectedPackage ? (
            <>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8A7247]">Package Details</p>
              <h3 id="service-modal-title" className="mt-3 font-serif text-4xl leading-tight text-[#2B2B2B]">
                {selectedPackage.title}
              </h3>
              <p className="mt-5 text-xl font-semibold text-[#2B2B2B]">{selectedPackage.priceLabel}</p>
              <p id="service-modal-description" className="mt-5 text-[17px] leading-8 text-[#3F3F3F]">
                {selectedPackage.shortDescription}
              </p>

              <div className="mt-7">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8A7247]">Everything Included</p>
                <ul className="mt-4 space-y-3 text-[#3F3F3F]">
                  {selectedPackage.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-7">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8A7247]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedPackage.title)}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#C8B48A] px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72]"
                >
                  Book Consultation
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedPackageId(null)}
                  className="inline-flex items-center justify-center rounded-full border border-[#CFC3AF] bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#2B2B2B] transition duration-300 hover:bg-[#F3EDE2]"
                >
                  Close
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
