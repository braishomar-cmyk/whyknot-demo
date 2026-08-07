"use client";

import { useEffect, useState } from "react";
import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const SLIDES = [
  {
    eyebrow: "The Winter Edit",
    title: "Dress for the life you actually live",
    cta: "Shop New In",
    bg: "linear-gradient(120deg,#1a1a1a 0%,#3b3f46 55%,#6b727e 100%)",
  },
  {
    eyebrow: "Soft Tailoring",
    title: "Structure, without the stiffness",
    cta: "Shop Tailoring",
    bg: "linear-gradient(120deg,#6b5748 0%,#8a7361 55%,#b8a48c 100%)",
  },
  {
    eyebrow: "The Essentials",
    title: "Ten pieces, endless outfits",
    cta: "Shop Essentials",
    bg: "linear-gradient(120deg,#8c9a8f 0%,#aab5ac 55%,#d0d6d0 100%)",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = SLIDES[index];

  return (
    <section className="relative overflow-hidden min-h-[540px] md:min-h-[640px] flex items-center text-white">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: slide.bg }}
        />
      ))}
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="container-gp relative">
        <div key={active.title} className="max-w-[640px]">
          <p className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold-light)]">
            {active.eyebrow}
          </p>
          <h1 className="font-display text-[42px] md:text-[64px] leading-[1.05] font-medium mt-4">
            {active.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="btn-solid !bg-white !text-[var(--an-ink)] hover:!bg-[var(--an-gold-light)]"
              href="#shop"
            >
              {active.cta}
            </a>
            <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
