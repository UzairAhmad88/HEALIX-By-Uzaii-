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
    default: "HEALIX | Better Health Begins Here",
    template: "%s | HEALIX"
  },
  description:
    "Healix is a modern pharmacy-first healthcare brand providing verified medications, health essentials, and certified advisory.",
  keywords: [
    "HEALIX",
    "Pharmacy Services",
    "Authentic Medicines",
    "Community Healthcare",
    "Pharmacist Consultation",
    "Everyday Wellness",
    "Preventive Health"
  ],
  authors: [{ name: "HEALIX Team" }],
  creator: "HEALIX",
  publisher: "HEALIX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: "HEALIX | Better Health Begins Here",
    description:
      "Healix is a modern pharmacy-first healthcare brand providing verified medications, health essentials, and certified advisory.",
    url: siteUrl,
    siteName: "HEALIX",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HEALIX | Better Health Begins Here",
    description:
      "Modern pharmacy care designed around your everyday health, with trusted support when you need it.",
    creator: "@healix"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/logo/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/logo/logo.jpeg",
    apple: "/logo/logo.jpeg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HEALIX",
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.jpeg`,
    description: "A modern pharmacy-first healthcare brand providing verified medications, everyday health essentials, and certified advisory.",
    slogan: "Better Health Begins Here"
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo/logo.jpeg" />
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
