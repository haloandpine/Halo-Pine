import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Halo & Pine",
  description:
    "Meet Kajal, founder of Halo & Pine, and discover the thoughtful, calm approach behind our wedding coordination services.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about Halo and Pine",
    "wedding coordinator Port Coquitlam",
    "Kajal wedding planner",
    "BC wedding coordination",
  ],
  openGraph: {
    url: "https://www.haloandpine.ca/about",
    title: "About Halo & Pine | Meet Kajal",
    description:
      "Meet Kajal and learn how Halo & Pine delivers calm, polished wedding coordination in Vancouver and the Lower Mainland.",
    images: [
      {
        url: "/about.JPG",
        width: 1200,
        height: 630,
        alt: "Portrait of Kajal, founder of Halo and Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Halo & Pine | Meet Kajal",
    description:
      "Meet the planner behind Halo & Pine and discover the signature approach to wedding coordination.",
    images: ["/about.JPG"],
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://www.haloandpine.ca/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}