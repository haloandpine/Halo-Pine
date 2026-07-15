import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const siteUrl = "https://haloandpine.ca";
const apexSiteUrl = "https://haloandpine.ca";
const organizationId = `${apexSiteUrl}/#organization`;
const localBusinessId = `${apexSiteUrl}/#localbusiness`;

const baseSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Halo & Pine",
      url: apexSiteUrl,
      email: "info@haloandpine.ca",
      logo: `${siteUrl}/logo.PNG`,
    },
    {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: "Halo & Pine",
      image: `${siteUrl}/hero.PNG`,
      url: apexSiteUrl,
      email: "info@haloandpine.ca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port Coquitlam",
        addressRegion: "British Columbia",
        addressCountry: "Canada",
      },
      serviceArea: [
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
          name: "Vancouver, British Columbia, Canada",
        },
        {
          "@type": "Place",
          name: "Lower Mainland, British Columbia, Canada",
        },
      ],
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Halo & Pine",
      url: siteUrl,
      inLanguage: "en-CA",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/services`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Halo & Pine Wedding Coordination",
    template: "%s | Halo & Pine",
  },
  description:
    "Wedding coordination in Vancouver , Port Coquitlam and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
  applicationName: "Halo & Pine",
  keywords: [
  "wedding coordinator Vancouver",
  "wedding planner Vancouver",
  "Port Coquitlam wedding coordinator",
  "month of coordination Vancouver",
  "day of wedding coordinator BC",
  "elopement planner Vancouver",
  "Lower Mainland wedding coordinator",
  "Halo and Pine wedding coordination",
],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Halo & Pine",
    url: siteUrl,
    title: "Halo & Pine Wedding Coordination",
    description:
      "Wedding coordination in Vancouver , Port Coquitlam and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
    images: [
      {
        url: "/hero.PNG",
        width: 1200,
        height: 630,
        alt: "Halo and Pine wedding coordination brand image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo & Pine Wedding Coordination",
    description:
      "Wedding coordination in Vancouver , Port Coquitlam and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
    images: ["/hero.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchemaGraph) }}
        />
        <Navbar />
        <div id="main-content" tabIndex={-1} className="flex-1 page-transition">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
