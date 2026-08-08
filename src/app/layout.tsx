import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, FAQS, INSTAGRAM_URL, LOCATION, WHATSAPP_NUMBER } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Whyknot Clothing | Wear What Moves You",
  description:
    "Curated one-size pieces from Italy and Japan, boho dresses and statement tees, chosen with love in Lebanon. Order in two taps on WhatsApp, cash on delivery.",
  openGraph: {
    title: "Whyknot Clothing | Wear What Moves You",
    description:
      "Curated one-size pieces from Italy and Japan, chosen with love in Lebanon. Order in two taps on WhatsApp, cash on delivery.",
    type: "website",
    locale: "en_US",
    siteName: BUSINESS_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Whyknot Clothing | Wear What Moves You",
    description:
      "Curated one-size pieces from Italy and Japan, chosen with love in Lebanon. Order in two taps on WhatsApp, cash on delivery.",
  },
  // Demo site: stays out of search indexes until the client owns it on their domain
  robots: { index: false, follow: false },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: BUSINESS_NAME,
  slogan: "Wear what moves you!",
  description:
    "Curated womenswear boutique in Lebanon: one-size pieces from Italy and Japan, boho dresses and statement tees, delivered across Lebanon with cash on delivery.",
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION,
    addressCountry: "LB",
  },
  areaServed: "Lebanon",
  sameAs: [INSTAGRAM_URL, "https://www.facebook.com/profile.php?id=61576469431236"],
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
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}>
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
