import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, FAQS, INSTAGRAM_URL, LOCATION, WHATSAPP_NUMBER } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atelier | Modern Womenswear, Delivered Across Lebanon",
  description:
    "Considered womenswear made for real days: dresses, tailoring and everyday essentials. Order in two taps on WhatsApp, cash on delivery across Lebanon.",
  openGraph: {
    title: "Atelier | Modern Womenswear, Delivered Across Lebanon",
    description:
      "Considered womenswear made for real days. Order in two taps on WhatsApp, cash on delivery across Lebanon.",
    type: "website",
    locale: "en_US",
    siteName: BUSINESS_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier | Modern Womenswear, Delivered Across Lebanon",
    description:
      "Considered womenswear made for real days. Order in two taps on WhatsApp, cash on delivery across Lebanon.",
  },
  // Demo template: stays out of search indexes until rebranded and sold
  robots: { index: false, follow: false },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: BUSINESS_NAME,
  description:
    "Modern womenswear: dresses, tailoring and everyday essentials, delivered across Lebanon with cash on delivery.",
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION,
    addressCountry: "LB",
  },
  areaServed: "Lebanon",
  sameAs: [INSTAGRAM_URL],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
