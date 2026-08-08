import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { ProductReviews } from "@/components/sections/Reviews";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { PRODUCTS } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Whyknot Clothing" };
  return {
    title: `${product.name} | Whyknot Clothing`,
    description: `${product.description} Order on WhatsApp, delivered across Lebanon with cash on delivery.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug)
    .sort((a, b) => (a.category === product.category ? -1 : 0) - (b.category === product.category ? -1 : 0))
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "Whyknot Clothing" },
    offers: {
      "@type": "Offer",
      price: product.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <HeaderSection />
      <nav aria-label="Breadcrumb" className="bg-[var(--an-cream)] border-b border-black/5">
        <div className="container-gp py-3 text-[12px] opacity-70">
          <Link href="/" className="hover:text-[var(--an-gold)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#shop" className="hover:text-[var(--an-gold)]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="opacity-90">{product.name}</span>
        </div>
      </nav>

      <ProductDetail product={product} />

      <ProductReviews
        rating={product.rating}
        reviewCount={product.reviewCount}
        reviews={product.reviews}
        sizeLabel={
          product.category === "Accessories"
            ? "none"
            : product.sizes.length === 1
              ? "usually wears"
              : "picked"
        }
      />

      <section className="py-12 md:py-16 bg-[var(--an-cream)]">
        <div className="container-gp">
          <h2 className="font-display text-[26px] md:text-[34px] font-medium text-center">
            You may also <em className="italic text-[var(--an-gold)]">love</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden bg-[#f6f4f0]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-display text-[16px] font-semibold text-center mt-3">
                  {p.name}
                </h3>
                <p className="text-center text-[13px] opacity-70 mt-0.5">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsBar />
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
