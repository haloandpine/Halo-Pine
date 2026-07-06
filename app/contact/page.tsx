import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Halo & Pine",
  description:
    "Get in touch with Halo & Pine to inquire about wedding coordination services in Vancouver and the Lower Mainland.",
  openGraph: {
    title: "Contact Halo & Pine",
    description:
      "Get in touch with Halo & Pine to inquire about wedding coordination services in Vancouver and the Lower Mainland.",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Halo & Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Halo & Pine",
    description:
      "Get in touch with Halo & Pine to inquire about wedding coordination services in Vancouver and the Lower Mainland.",
    images: ["/logo.PNG"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}