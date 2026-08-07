"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, waLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const TABS = ["All", "New In", "Dresses", "Tops", "Accessories"] as const;

type Tab = (typeof TABS)[number];

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="shop" className="py-14 md:py-20 bg-white">
      <div className="container-gp">
        <div className="text-center">
          <p className="pill-badge">Just Landed</p>
          <h2 className="font-display text-[34px] md:text-[52px] font-medium mt-4 leading-[1.08]">
            New <em className="italic text-[var(--an-gold)]">Arrivals</em>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-[12px] tracking-[0.06em] border transition-colors ${
                activeTab === tab
                  ? "border-[var(--an-ink)] text-[var(--an-ink)] bg-white font-semibold"
                  : "border-black/10 text-[var(--an-ink)]/70 hover:border-[var(--an-ink)]/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 mt-10">
          {filtered.map((p) => (
            <div key={p.name} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f4f0]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {p.tag ? (
                  <span
                    className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white ${
                      p.tag === "Sale" ? "bg-[#e05b4b]" : "bg-[var(--an-ink)]"
                    }`}
                  >
                    {p.tag === "Sale" ? p.price : p.tag}
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-[17px] md:text-[19px] font-semibold text-center mt-4">
                {p.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mt-1">
                {p.compareAtPrice ? (
                  <span className="text-[12.5px] line-through opacity-45">{p.compareAtPrice}</span>
                ) : null}
                <span className="text-[13.5px] font-medium opacity-80">{p.price}</span>
              </div>
              <a
                className="mt-3 inline-flex items-center justify-center gap-2 bg-[var(--an-ink)] text-white text-[11.5px] uppercase tracking-[0.1em] font-semibold py-3 px-4 transition-colors hover:bg-[var(--an-wa)]"
                href={waLink(p.orderMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="w-3.5" /> Order on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[11.5px] opacity-50">
          Demo pieces and prices, replaced with the brand&apos;s real catalog at launch.
        </p>
      </div>
    </section>
  );
}
