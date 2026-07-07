import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { packages } from "./servicesData";

export const metadata: Metadata = {
  title: "Wedding Coordination Services in Greater Vancouver",
  description:
    "Explore Halo & Pine wedding coordination packages for day-of, month-of, and intimate weddings in Port Coquitlam, Greater Vancouver, and the Lower Mainland.",
  alternates: {
    canonical: "/services",
  },
  keywords: [
    "wedding coordination packages",
    "day-of coordination Port Coquitlam",
    "Greater Vancouver wedding coordination",
    "month-of coordination",
    "micro wedding coordinator",
    "wedding planner services British Columbia",
  ],
  openGraph: {
    url: "https://www.haloandpine.ca/services",
    title: "Wedding Coordination Services in Greater Vancouver | Halo & Pine",
    description:
      "Compare Halo & Pine wedding coordination packages for smooth, beautifully managed wedding days across Port Coquitlam and Greater Vancouver.",
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
    title: "Wedding Coordination Services in Greater Vancouver | Halo & Pine",
    description:
      "View day-of, month-of, and intimate wedding coordination packages by Halo & Pine in Port Coquitlam and Greater Vancouver.",
    images: ["/services-hero.jpg"],
  },
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
      name: pkg.title,
      description: pkg.shortDescription,
      provider: {
        "@type": "Organization",
        "@id": "https://haloandpine.ca/#organization",
        name: "Halo & Pine",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Port Coquitlam, British Columbia, Canada",
        },
        {
          "@type": "Place",
          name: "Greater Vancouver, British Columbia, Canada",
        },
        {
          "@type": "Place",
          name: "Lower Mainland, British Columbia, Canada",
        },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        priceSpecification: pkg.priceLabel,
      },
      url: "https://www.haloandpine.ca/services",
    })),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://haloandpine.ca/#professionalservice",
    name: "Halo & Pine",
    serviceType: "Wedding Coordination",
    url: "https://haloandpine.ca",
    image: "https://www.haloandpine.ca/hero.PNG",
    telephone: "+1-604-442-6406",
    email: "info@haloandpine.ca",
    areaServed: [
      {
        "@type": "Place",
        name: "Port Coquitlam, British Columbia, Canada",
      },
      {
        "@type": "Place",
        name: "Greater Vancouver, British Columbia, Canada",
      },
      {
        "@type": "Place",
        name: "Lower Mainland, British Columbia, Canada",
      },
    ],
    provider: {
      "@id": "https://haloandpine.ca/#organization",
    },
  };

  return (
    <main className="min-h-screen bg-white pb-24 pt-32 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <ServicesContent packages={packages} />
    </main>
  );
}