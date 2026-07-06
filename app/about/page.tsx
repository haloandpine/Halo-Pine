import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Halo & Pine Wedding Coordination",
  description:
    "Meet the founder of Halo & Pine and learn about our approach to calm, intentional wedding coordination.",
  openGraph: {
    title: "About | Halo & Pine Wedding Coordination",
    description:
      "Meet the founder of Halo & Pine and learn about our approach to calm, intentional wedding coordination.",
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
    title: "About | Halo & Pine Wedding Coordination",
    description:
      "Meet the founder of Halo & Pine and learn about our approach to calm, intentional wedding coordination.",
    images: ["/logo.PNG"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}