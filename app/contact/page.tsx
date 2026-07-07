import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Halo & Pine in Port Coquitlam",
  description:
    "Contact Halo & Pine to inquire about day-of, month-of, or intimate wedding coordination services in Port Coquitlam, Greater Vancouver, and the Lower Mainland.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "contact wedding planner Vancouver",
    "wedding coordination inquiry",
    "Halo and Pine contact",
    "Port Coquitlam wedding planner",
    "Greater Vancouver wedding coordination",
  ],
  openGraph: {
    url: "https://www.haloandpine.ca/contact",
    title: "Contact Halo & Pine in Port Coquitlam",
    description:
      "Reach out to Halo & Pine for wedding coordination availability, pricing, and next steps in Greater Vancouver.",
    images: [
      {
        url: "/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding ceremony floral backdrop by Halo and Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Halo & Pine in Port Coquitlam",
    description:
      "Inquire about wedding coordination services and availability with Halo & Pine in Greater Vancouver.",
    images: ["/services-hero.jpg"],
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://www.haloandpine.ca/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  );
}