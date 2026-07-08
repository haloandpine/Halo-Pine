"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import useRevealOnScroll from "../components/useRevealOnScroll";
import PackageDetailsModal from "./PackageDetailsModal";
import type { ServicePackage } from "./servicesData";

type ServicesContentProps = {
  packages: ServicePackage[];
};

export default function ServicesContent({ packages }: ServicesContentProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
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

  useRevealOnScroll(sectionRef);

  return (
    <>
      <section ref={sectionRef} className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div data-reveal className="mb-8 text-center md:mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8A7247]">Services</p>
          <h1 className="mx-auto mt-4 max-w-[26ch] font-serif text-[1.85rem] leading-tight text-[#2B2B2B] md:text-4xl">
            Thoughtful wedding coordination designed to feel polished, seamless, and deeply personal.
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.map((servicePackage) => (
  <article
    key={servicePackage.id}
    data-reveal
    onClick={() => setSelectedPackageId(servicePackage.id)}
    className="group premium-card flex h-full cursor-pointer flex-col overflow-hidden rounded-[26px] border border-[#E8DFCF] bg-white shadow-[0_18px_34px_rgba(31,31,31,0.08)]"
  >
    <div className="relative h-[420px] overflow-hidden">
  <img
    src={
      servicePackage.id === "intimate"
        ? "/custom.jpg"
        : servicePackage.id === "essential"
        ? "/dayof.jpg"
        : "/monthof.jpg"
    }
    alt={servicePackage.title}
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/30" />
</div>

<div className="flex flex-1 flex-col p-8">


              <h2 className="font-serif text-[28px] leading-tight text-[#2B2B2B] md:text-[32px]">
                {servicePackage.title}
              </h2>
              <p className="mt-5 overflow-hidden text-[16px] leading-7 text-[#3F3F3F] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                {servicePackage.shortDescription}
              </p>

              <button
                type="button"
                onClick={() => setSelectedPackageId(servicePackage.id)}
                className="premium-button mt-8 inline-flex min-h-[48px] w-fit items-center justify-center rounded-full bg-[#C8B48A] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.28em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72] md:mt-9 md:px-10 md:py-4"
              >
                Let&apos;s Connect
              </button>
</div>
            </article>
          
          ))}
        </div>
      </section>

      <PackageDetailsModal
        isOpen={Boolean(selectedPackage)}
        servicePackage={selectedPackage}
        onClose={() => setSelectedPackageId(null)}
      />
    </>
  );
}
