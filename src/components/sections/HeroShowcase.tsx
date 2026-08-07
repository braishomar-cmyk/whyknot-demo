import Image from "next/image";
import Link from "next/link";
import { PLAN_LINK, PRODUCTS } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const CARD_PRODUCTS = [
  PRODUCTS[3],
  PRODUCTS[4],
  PRODUCTS[0],
  PRODUCTS[1],
  PRODUCTS[6],
  PRODUCTS[2],
];

export function HeroShowcase() {
  const marqueeItems = [...CARD_PRODUCTS, ...CARD_PRODUCTS];

  return (
    <section className="relative overflow-hidden bg-[var(--an-cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[8%] flex justify-center anim-watermark"
      >
        <span className="font-display uppercase font-medium tracking-[0.12em] text-[22vw] leading-none text-[#d9cbb4]/60 select-none">
          Atelier
        </span>
      </div>

      <div className="container-gp relative pt-10 md:pt-14 text-center">
        <p className="pill-badge anim-fade-up">The Winter Edit</p>
        <h1 className="font-display text-[34px] md:text-[54px] leading-[1.08] font-medium mt-5 max-w-[680px] mx-auto anim-fade-up anim-delay-1">
          Dress for the life you <em className="italic text-[var(--an-gold)]">actually live</em>
        </h1>
        <div className="mt-6 flex gap-4 justify-center flex-wrap anim-fade-up anim-delay-2">
          <a className="btn-solid" href="#shop">
            Shop New In
          </a>
          <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="w-4" /> Order on WhatsApp
          </a>
        </div>

        <div className="relative mx-auto mt-8 w-[300px] md:w-[380px] aspect-[3/4] z-10 anim-fade-up anim-delay-3">
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

      <div className="relative z-20 -mt-24 md:-mt-40 pb-10 anim-fade-up anim-delay-4">
        <div className="marquee-track gap-4 md:gap-5 pl-4">
          {marqueeItems.map((p, i) => (
            <Link
              key={p.slug + i}
              href={`/product/${p.slug}`}
              aria-hidden={i >= CARD_PRODUCTS.length ? true : undefined}
              tabIndex={i >= CARD_PRODUCTS.length ? -1 : undefined}
              className="group relative shrink-0 w-[150px] md:w-[210px] aspect-[3/4] rounded-[12px] overflow-hidden border-[3px] border-white shadow-[0_14px_36px_rgba(35,35,35,0.18)] bg-white transition-transform hover:-translate-y-1.5"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="210px"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-left opacity-0 transition-opacity group-hover:opacity-100">
                <span className="block text-white text-[12px] font-semibold leading-tight">
                  {p.name}
                </span>
                <span className="block text-white/85 text-[11px]">{p.price}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
