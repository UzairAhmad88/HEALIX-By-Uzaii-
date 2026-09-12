import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healix Care | Better Health Begins Here",
    template: "%s | Healix Care"
  },
  description:
    "Healix Care brings pharmacy, diagnostic laboratory and clinical care services together through a modern, trusted healthcare experience.",
  keywords: [
    "Healix Care",
    "Healthcare Chain",
    "Pharmacy Services",
    "Diagnostic Laboratory",
    "Clinics Network",
    "Community Healthcare",
    "Preventive Health",
    "Modern Healthcare"
  ],
  authors: [{ name: "Healix Care Team" }],
  creator: "Healix Care",
  publisher: "Healix Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: "Healix Care | Better Health Begins Here",
    description:
      "Healix Care brings pharmacy, diagnostic laboratory and clinical care services together through a modern, trusted healthcare experience.",
    url: siteUrl,
    siteName: "Healix Care",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Healix Care | Better Health Begins Here",
    description:
      "Pharmacy, diagnostic laboratory and clinical care services connected in one modern healthcare destination.",
    creator: "@healixcare"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Healix Care",
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.jpeg`,
    description: "A modern consumer-facing healthcare chain connecting pharmacy, diagnostic laboratory, and clinical care services.",
    slogan: "Better Health Begins Here"
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
      </head>
      <body className={`${manrope.variable} flex min-h-screen flex-col font-sans antialiased`} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
