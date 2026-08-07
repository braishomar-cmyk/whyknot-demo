import Image from "next/image";
import { PLAN_LINK, PRODUCTS } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const CARD_IMAGES = [
  "/images/fashion/product-slate-top.jpg",
  "/images/fashion/product-oatmeal-knit.jpg",
  "/images/fashion/hero-main.jpg",
  "/images/fashion/product-sage-dress.jpg",
  "/images/fashion/product-wrap-dress.jpg",
];

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-[var(--an-cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[8%] flex justify-center"
      >
        <span className="font-display uppercase font-medium tracking-[0.12em] text-[22vw] leading-none text-[#d9cbb4]/60 select-none">
          Atelier
        </span>
      </div>

      <div className="container-gp relative pt-10 md:pt-14 text-center">
        <p className="pill-badge">The Winter Edit</p>
        <h1 className="font-display text-[34px] md:text-[54px] leading-[1.08] font-medium mt-5 max-w-[680px] mx-auto">
          Dress for the life you <em className="italic text-[var(--an-gold)]">actually live</em>
        </h1>
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a className="btn-solid" href="#shop">
            Shop New In
          </a>
          <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="w-4" /> Order on WhatsApp
          </a>
        </div>

        <div className="relative mx-auto mt-8 w-[300px] md:w-[380px] aspect-[3/4] z-10">
          <Image
            src="/images/fashion/hero-main.jpg"
            alt="Sage green quilted jacket from the winter edit"
            fill
            priority
            sizes="380px"
            className="object-cover rounded-t-[14px]"
          />
        </div>
      </div>

      <div className="relative z-20 -mt-24 md:-mt-40 pb-10">
        <div className="flex gap-4 md:gap-5 justify-start md:justify-center overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CARD_IMAGES.map((src, i) => (
            <a
              key={src + i}
              href="#shop"
              className="relative shrink-0 w-[150px] md:w-[210px] aspect-[3/4] rounded-[12px] overflow-hidden border-[3px] border-white shadow-[0_14px_36px_rgba(35,35,35,0.18)] bg-white transition-transform hover:-translate-y-1.5"
            >
              <Image
                src={src}
                alt={PRODUCTS[i] ? PRODUCTS[i].name : "Atelier piece"}
                fill
                sizes="210px"
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
