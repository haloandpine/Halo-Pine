"use client";

import { useState } from "react";
import { faqItems } from "../faq/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq-content" className="bg-[#F8F4EF] py-32">
      <div className="max-w-4xl mx-auto px-8">

        <p className="uppercase tracking-[0.45em] text-[#C8B48A] text-sm text-center">
          Frequently Asked Questions
        </p>

        <h1 className="mt-5 text-6xl font-serif text-center text-[#2B2B2B]">
          Everything You Need to Know
        </h1>

        <div className="mt-20 space-y-5">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
                aria-controls={`faq-panel-${index}`}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-xl font-medium">
                  {faq.question}
                </span>

                <span aria-hidden="true" className="text-3xl text-[#8A7247]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div id={`faq-panel-${index}`} className="px-8 pb-8 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}