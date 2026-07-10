import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Wedding Coordination in Vancouver",
  description:
    "Halo & Pine offers refined wedding coordination in Vancouver and the Lower Mainland, helping couples enjoy a calm, seamless, and beautifully managed celebration.",
  alternates: {
    canonical: "https://haloandpine.ca/",
  },
  keywords: [
    "wedding coordination Vancouver",
    "day-of wedding coordinator",
    "month-of wedding coordinator",
    "Lower Mainland wedding planner",
    "Halo and Pine weddings",
  ],
  openGraph: {
    url: "https://haloandpine.ca/",
    title: "Wedding Coordination in Vancouver | Halo & Pine",
    description:
      "Halo & Pine offers refined wedding coordination in Vancouver and the Lower Mainland for calm, seamless wedding days.",
    images: [
      {
        url: "/hero.PNG",
        width: 1200,
        height: 630,
        alt: "Elegant wedding reception styling by Halo and Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Coordination in Vancouver | Halo & Pine",
    description:
      "Wedding coordination crafted for calm, polished celebrations across Vancouver and the Lower Mainland.",
    images: ["/hero.PNG"],
  },
};

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://haloandpine.ca/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
    </>
  );
}
