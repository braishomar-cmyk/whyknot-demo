"use client";

import { useState } from "react";
import Image from "next/image";
import { SIZE_GUIDE, waLink, type Product } from "@/lib/content";
import { RatingSummary } from "@/components/sections/Reviews";
import { WhatsAppIcon } from "@/components/icons";

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);

  const orderMessage = `Hello Whyknot! I'd like to order the ${product.name} in ${color.name}${
    size ? `, size ${size}` : ""
  }. Is it available?`;

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container-gp grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="relative aspect-[3/4] rounded-[12px] overflow-hidden bg-[#f6f4f0]">
          <Image
            key={color.image ?? product.image}
            src={color.image ?? product.image}
            alt={`${product.name} in ${color.name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {product.tag ? (
            <span
              className={`absolute top-4 left-4 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white ${
                product.tag === "Sale" ? "bg-[#e05b4b]" : "bg-[var(--an-ink)]"
              }`}
            >
              {product.tag}
            </span>
          ) : null}
        </div>

        <div className="max-w-[480px]">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--an-gold)]">
            {product.category}
          </p>
          <h1 className="font-display text-[32px] md:text-[42px] font-medium leading-[1.1] mt-2">
            {product.name}
          </h1>

          <a
            href="#reviews"
            className="mt-2.5 inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
          >
            <RatingSummary rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </a>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-[20px] font-medium">{product.price}</span>
            {product.compareAtPrice ? (
              <span className="text-[15px] line-through opacity-40">
                {product.compareAtPrice}
              </span>
            ) : null}
          </div>

          <p className="mt-5 text-[14px] leading-relaxed opacity-75">{product.description}</p>

          <div className="mt-7">
            <div className="text-[12px] uppercase tracking-[0.14em] font-semibold">
              Color: <span className="font-normal normal-case tracking-normal">{color.name}</span>
            </div>
            <div className="flex gap-2.5 mt-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  aria-label={`Color ${c.name}`}
                  onClick={() => setColor(c)}
                  className={`h-9 w-9 rounded-full border-2 transition-all ${
                    color.name === c.name
                      ? "border-[var(--an-ink)] scale-110"
                      : "border-black/10 hover:border-black/30"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase tracking-[0.14em] font-semibold">
                Size{size ? `: ${size}` : ""}
              </span>
              <button
                type="button"
                onClick={() => setGuideOpen(!guideOpen)}
                className="text-[12px] underline underline-offset-4 decoration-[var(--an-gold)] hover:text-[var(--an-gold)] transition-colors"
              >
                {product.sizes.length === 1 ? "How one-size fits" : "Size guide"}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-[46px] px-3 py-2.5 text-[13px] border transition-colors ${
                    size === s
                      ? "border-[var(--an-ink)] bg-[var(--an-ink)] text-white font-semibold"
                      : "border-black/15 hover:border-[var(--an-ink)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {guideOpen ? (
              <div className="mt-4 rounded-[10px] border border-black/10 overflow-hidden">
                <table className="w-full text-[12.5px] text-center">
                  <thead>
                    <tr className="bg-[var(--an-sand)] uppercase tracking-[0.08em] text-[10.5px]">
                      <th className="py-2.5 font-semibold">Size</th>
                      <th className="py-2.5 font-semibold">Bust (cm)</th>
                      <th className="py-2.5 font-semibold">Waist (cm)</th>
                      <th className="py-2.5 font-semibold">Hips (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(product.sizes.length === 1
                      ? SIZE_GUIDE.filter((r) => r.size === "One Size")
                      : SIZE_GUIDE.filter((r) => r.size !== "One Size")
                    ).map((row) => (
                      <tr key={row.size} className="border-t border-black/5">
                        <td className="py-2 font-semibold">{row.size}</td>
                        <td className="py-2 opacity-75">{row.bust}</td>
                        <td className="py-2 opacity-75">{row.waist}</td>
                        <td className="py-2 opacity-75">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="px-4 py-2.5 text-[11.5px] opacity-60 bg-[var(--an-cream)] border-t border-black/5">
                  Between sizes? Message us your measurements and we&apos;ll recommend the right
                  fit.
                </p>
              </div>
            ) : null}
          </div>

          <a
            className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[var(--an-wa)] text-white text-[13px] uppercase tracking-[0.1em] font-semibold py-4 px-6 rounded-[6px] transition-colors hover:bg-[#18994a]"
            href={waLink(orderMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="w-5" /> Order on WhatsApp
          </a>
          <p className="text-center text-[11.5px] opacity-55 mt-3">
            Your color and size are included in the message automatically.
          </p>

          <div className="mt-8 divide-y divide-black/5 border-t border-black/5">
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-semibold uppercase tracking-[0.1em] [&::-webkit-details-marker]:hidden">
                Fabric &amp; Care
                <span className="font-display text-[18px] text-[var(--an-gold)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed opacity-75">{product.fabric}</p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-semibold uppercase tracking-[0.1em] [&::-webkit-details-marker]:hidden">
                Delivery &amp; Exchanges
                <span className="font-display text-[18px] text-[var(--an-gold)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed opacity-75">
                Delivery across Lebanon in 2 to 4 working days, cash on delivery. Free over $75.
                Easy exchanges within 3 days, arranged on WhatsApp.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
