"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutContent() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F4EF] px-5 py-14 md:px-10 md:py-20">
      <section
        ref={sectionRef}
        className={`mx-auto max-w-[1200px] transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div className="order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_24px_70px_rgba(31,31,31,0.14)]">
              <Image
                src="/about.JPG"
                alt="Portrait of Kajal, founder of Halo and Pine"
                width={900}
                height={1150}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover object-[center_22%]"
              />
            </div>
          </div>

          <div className="order-2 text-[#2B2B2B]">
            <h1 className="mt-5 text-4xl font-serif leading-tight md:mt-6 md:text-6xl">
              Hi, I&apos;m Kajal.
            </h1>

            <div className="mt-7 space-y-5 text-[17px] leading-8 text-[#3F3F3F] md:mt-8 md:space-y-6">
              <p>
                I founded Halo &amp; Pine to bring calm, intentional coordination to celebrations that deserve thoughtful care. Every detail is managed with precision so you can stay fully present.
              </p>

              <p>
                My approach blends elegant planning with graceful execution, from timeline stewardship to vendor alignment, so your wedding day feels effortless and beautifully composed.
              </p>

              <p>
                Based in Port Coquitlam, BC, I serve couples across the Lower Mainland who value refinement, warmth, and a seamless guest experience.
              </p>

              <p>
                If you are comparing options, you can explore our <Link href="/services" className="underline underline-offset-4">wedding coordination services</Link> and <Link href="/contact" className="underline underline-offset-4">get in touch</Link> to discuss your day.
              </p>
            </div>

            <Link
              href="/contact"
              aria-label="Book a consultation with Halo and Pine"
              className="mt-9 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#C8B48A] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.35em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72] md:mt-10 md:px-10 md:py-4"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}