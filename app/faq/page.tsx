import type { Metadata } from "next";
import FAQ from "../components/FAQ";
import { faqItems } from "./faq-data";

export const metadata: Metadata = {
  title: "Wedding FAQ",
  description:
    "Read frequently asked questions about booking timelines, travel, rehearsals, and wedding coordination with Halo & Pine.",
  alternates: {
    canonical: "/faq",
  },
  keywords: [
    "wedding FAQ",
    "wedding coordination questions",
    "Halo and Pine FAQ",
    "Vancouver wedding planner FAQ",
  ],
  openGraph: {
    url: "https://www.haloandpine.ca/faq",
    title: "Wedding FAQ | Halo & Pine",
    description:
      "Common questions about Halo & Pine wedding coordination services, availability, and planning process.",
    images: [
      {
        url: "/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding FAQ by Halo and Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding FAQ | Halo & Pine",
    description:
      "Get answers to common questions about wedding coordination with Halo & Pine.",
    images: ["/services-hero.jpg"],
  },
};

export default function FAQPage() {
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
        name: "FAQ",
        item: "https://www.haloandpine.ca/faq",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </>
  );
}
