import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haloandpine.ca"),
  title: {
    default: "Halo & Pine Wedding Coordination",
    template: "%s | Halo & Pine",
  },
  description: "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Halo & Pine",
    title: "Halo & Pine Wedding Coordination | Wedding Coordinator in Vancouver",
    description: "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
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
    description: "Luxury wedding coordination in Vancouver and the Lower Mainland. Calm, seamless, and beautifully organized wedding days.",
    images: ["/logo.PNG"],
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
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" tabIndex={-1} className="flex-1 page-transition">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
