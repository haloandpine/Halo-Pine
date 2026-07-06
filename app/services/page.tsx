import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Coordination Services",
  description:
    "Explore Halo & Pine wedding coordination packages for day-of, month-of, and intimate weddings in Vancouver and the Lower Mainland.",
  alternates: {
    canonical: "/services",
  },
  keywords: [
    "wedding coordination packages",
    "day-of coordination Vancouver",
    "month-of coordination",
    "micro wedding coordinator",
    "wedding planner services BC",
  ],
  openGraph: {
    url: "https://www.haloandpine.ca/services",
    title: "Wedding Coordination Services | Halo & Pine",
    description:
      "Compare Halo & Pine wedding coordination packages for smooth, beautifully managed wedding days.",
    images: [
      {
        url: "/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding coordination service styling by Halo and Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Coordination Services | Halo & Pine",
    description:
      "View day-of, month-of, and intimate wedding coordination packages by Halo & Pine.",
    images: ["/services-hero.jpg"],
  },
};

type ServicePackage = {
  name: string;
  subtitle: string;
  priceLabel: string;
  intro: string;
  includes: string[];
  bestFor: string;
  image: string;
  cta: string;
};

const packages: ServicePackage[] = [
  {
    name: "The Essential",
    subtitle: "Day-of Wedding Coordination",
    priceLabel: "Starting at $1,295",
    intro:
      "Perfect for couples who have planned their wedding but want to relax and fully enjoy their day.",
    includes: [
      "Complimentary consultation",
      "Wedding day timeline review",
      "Vendor confirmations (1–2 weeks before)",
      "Ceremony processional planning",
      "Wedding day management (up to 10 hours)",
      "Coordination with all vendors",
      "Emergency kit",
      "Timeline and logistics management",
      "Point of contact for family and vendors",
    ],
    bestFor:
      "Couples who have everything planned and need someone to bring it all together.",
    image: "/services-hero.jpg",
    cta: "Let's Connect",
  },
  {
    name: "The Signature",
    subtitle: "Month-of Coordination",
    priceLabel: "Starting at $1,995",
    intro:
      "Everything included in Essential, plus:",
    includes: [
      "Begins approximately 4–6 weeks before the wedding",
      "Final planning meeting",
      "Unlimited email support during the final month",
      "Detailed wedding timeline creation",
      "Vendor communication and confirmations",
      "Floor plan review",
      "Ceremony rehearsal coordination",
      "Décor setup oversight",
      "Assistant coordinator if needed (depending on guest count)",
    ],
    bestFor:
      "Couples who have done the planning but want a professional to take over before the big day.",
    image: "/hero.PNG",
    cta: "Let's Connect",
  },
  {
    name: "The Intimate",
    subtitle: "Elopements & Micro Weddings",
    priceLabel: "Starting at $795",
    intro:
      "Designed for celebrations with up to 40 guests.",
    includes: [
      "Planning consultation",
      "Vendor coordination",
      "Ceremony management",
      "Timeline creation",
      "Up to 6 hours of coordination",
    ],
    bestFor:
      "Intimate weddings, backyard celebrations, and destination-style events throughout the Lower Mainland.",
    image: "/kajal.jpg",
    cta: "Let's Connect",
  },
];

const createMailto = (packageName: string) => {
  const subject = `Inquiry – ${packageName}`;
  const body = `Hi Halo & Pine,\n\nI'm interested in the ${packageName}.\n\nWedding Date:\nVenue / City:\nEstimated Guest Count:\nPhone Number:\n\nAnything you'd like us to know:\n\nI'd love to learn more about availability and pricing.\n\nThank you,`;
  return `mailto:info@haloandpine.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.haloandpine.ca/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.haloandpine.ca/services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "Service",
      position: index + 1,
      name: `${pkg.name} - ${pkg.subtitle}`,
      description: pkg.intro,
      provider: {
        "@type": "Organization",
        name: "Halo & Pine",
      },
      areaServed: "Vancouver and Lower Mainland, BC",
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        priceSpecification: pkg.priceLabel,
      },
      url: "https://www.haloandpine.ca/services",
    })),
  };

  return (
    <main className="min-h-screen bg-[#F8F4EF] pb-24 pt-32 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8A7247]">Services</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#2B2B2B] md:text-6xl">
            Thoughtful wedding coordination designed to feel polished, seamless, and deeply personal.
          </h1>
        </div>

        <div className="space-y-20 md:space-y-24">
          {packages.map((servicePackage, index) => {
            const isImageFirst = index % 2 === 0;

            return (
              <article
                key={servicePackage.name}
                className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative overflow-hidden rounded-[30px] shadow-[0_22px_50px_rgba(31,31,31,0.12)] ${
                    isImageFirst ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={servicePackage.image}
                      alt={`${servicePackage.name} wedding coordination package image`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={isImageFirst ? "order-2" : "order-2 lg:order-1"}>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8A7247]">{servicePackage.name}</p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
                    {servicePackage.subtitle}
                  </h2>
                  <p className="mt-6 text-xl font-semibold text-[#2B2B2B]">{servicePackage.priceLabel}</p>
                  <p className="mt-6 text-[17px] leading-8 text-[#3F3F3F]">{servicePackage.intro}</p>

                  <div className="mt-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#8A7247]">Includes</p>
                    <ul className="mt-4 space-y-4 text-[#3F3F3F]">
                      {servicePackage.includes.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 leading-7">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8A7247]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#8A7247]">Best for</p>
                    <p className="mt-4 text-[17px] leading-8 text-[#3F3F3F]">{servicePackage.bestFor}</p>
                  </div>

                  <a
                    href={createMailto(servicePackage.name)}
                    aria-label={`Email Halo and Pine about the ${servicePackage.name} package`}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C8B48A] px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-[#1F1F1F] transition duration-300 hover:bg-[#b79f72]"
                  >
                    {servicePackage.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-16 border-t border-[#D8CCB5] pt-10 text-[#3F3F3F]">
          <h2 className="font-serif text-3xl text-[#2B2B2B] md:text-4xl">Planning Your Next Step</h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-8">
            Learn more about our approach on the <Link href="/about" className="underline underline-offset-4">About page</Link>, review common questions in our <Link href="/faq" className="underline underline-offset-4">Wedding FAQ</Link>, or <Link href="/contact" className="underline underline-offset-4">contact us</Link> to check availability.
          </p>
        </section>
      </section>
    </main>
  );
}