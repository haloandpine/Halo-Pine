"use client";

import Link from "next/link";
import type { ServicePackage } from "./servicesData";

type PackageDetailsModalProps = {
  isOpen: boolean;
  servicePackage: ServicePackage | null;
  onClose: () => void;
};

export default function PackageDetailsModal({
  isOpen,
  servicePackage,
  onClose,
}: PackageDetailsModalProps) {
  return (
    <div
      aria-hidden={!isOpen}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,20,20,0.56)] px-4 py-6 backdrop-blur-md transition-all duration-500 ease-out md:px-6 md:py-8 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
        className={`premium-modal w-full max-w-[700px] rounded-[32px] border border-[#E8DFCF] bg-[#FBF8F2] p-6 shadow-[0_35px_80px_rgba(20,20,20,0.35)] transition-all duration-500 ease-out md:p-12 ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        {servicePackage ? (
          <div className="max-h-[80vh] overflow-y-auto pr-0.5 md:pr-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A7247]">Package Details</p>
            <h3 id="service-modal-title" className="mt-3 font-serif text-3xl leading-tight text-[#2B2B2B] md:text-4xl">
              {servicePackage.title}
            </h3>
            <p className="mt-5 text-xl font-semibold text-[#2B2B2B]">{servicePackage.priceLabel}</p>
            <p id="service-modal-description" className="mt-5 text-[17px] leading-8 text-[#3F3F3F]">
              {servicePackage.fullDescription}
            </p>

            <div className="mt-7">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8A7247]">Everything Included</p>
              <ul className="mt-4 space-y-3 text-[#3F3F3F]">
                {servicePackage.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 leading-7">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8A7247]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-12 md:gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(servicePackage.title)}`}
                className="premium-button inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#C8B48A] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72] md:min-h-[52px] md:px-10 md:py-4"
              >
                Book Consultation
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="premium-button inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#CFC3AF] bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-[#2B2B2B] transition duration-300 hover:bg-[#F3EDE2] md:min-h-[52px] md:px-10 md:py-4"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
