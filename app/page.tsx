import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Halo & Pine Wedding Coordination | Wedding Coordinator in Vancouver",
  description:
    "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
  openGraph: {
    title: "Halo & Pine Wedding Coordination | Wedding Coordinator in Vancouver",
    description:
      "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
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
    title: "Halo & Pine Wedding Coordination | Wedding Coordinator in Vancouver",
    description:
      "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
    images: ["/logo.PNG"],
  },
};

export default function Home() {
  return <Hero />;
}
