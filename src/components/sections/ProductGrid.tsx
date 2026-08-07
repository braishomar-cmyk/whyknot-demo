"use client";

import { useState } from "react";
import { PRODUCTS, waLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const TABS = ["All", "New In", "Dresses", "Tops", "Accessories"] as const;

type Tab = (typeof TABS)[number];

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="shop" className="py-16 md:py-20 bg-[var(--an-cream)]">
      <div className="container-gp">
        <p className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold)] text-center">
          Just Landed
        </p>
        <h2 className="section-heading mt-2">New Arrivals</h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-[11px] font-semibold tracking-[0.14em] px-5 py-2.5 rounded-full border transition-colors ${
                activeTab === tab
                  ? "bg-[var(--an-ink)] text-white border-[var(--an-ink)]"
                  : "border-black/15 hover:border-[var(--an-ink)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {filtered.map((p) => (
            <div key={p.name} className="group flex flex-col">
              <div
                className="relative aspect-[3/4] rounded-[6px] overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${p.tone}, ${p.toneTo})`,
                }}
              >
                {p.tag ? (
                  <span
                    className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
                      p.tag === "Sale"
                        ? "bg-[#8c3a3a] text-white"
                        : "bg-white/90 text-[var(--an-ink)]"
                    }`}
                  >
                    {p.tag}
                  </span>
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
                  <span className="font-display italic text-white/85 text-[15px] md:text-[17px] text-center px-3">
                    {p.name}
                  </span>
                </div>
              </div>

              <div className="mt-3 text-center flex-1 flex flex-col">
                <h3 className="text-[13.5px] font-medium">{p.name}</h3>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="text-[13.5px] font-semibold">{p.price}</span>
                  {p.compareAtPrice ? (
                    <span className="text-[12px] line-through opacity-50">
                      {p.compareAtPrice}
                    </span>
                  ) : null}
                </div>
                <a
                  className="btn-outline mt-3 w-full !py-2.5 !text-[10.5px]"
                  href={waLink(p.orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-3.5" /> Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[11.5px] opacity-50">
          Demo pieces and prices, replaced with the brand&apos;s real catalog at
          launch.
        </p>
      </div>
    </section>
  );
}
