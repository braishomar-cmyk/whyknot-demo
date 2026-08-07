# Bestsellers Specification

## Overview
- **Target file:** `src/components/sections/Bestsellers.tsx`
- **Interaction model:** horizontal scroll carousel with prev/next arrow buttons ("use client")
- **GP source (exact extracted values):** section H3 "BESTSELLERS" 28px/500 uppercase centered
  ls 0.56px mb-12px; 10 cards in horizontal row; card = flex column ~330px wide, padding 12px,
  radius 4px; image square object-contain radius 8px on white; title 14px/600 left,
  margin 16px 0 8px; review "( 2,483 Reviews )" small muted; price 14px/600 #737373;
  Add button = outline pill: 12px/600 ls 1.2px uppercase, border #006937, radius 6px,
  padding 13px 24px, full-ish width

## Build
- section id="bestsellers" py-14 bg-white
- container-gp; h2 class="section-heading" text "Bestsellers"; subtitle center text-[14px]
  opacity-70 mt-2 mb-8: "Ordered every week by women across Lebanon"
- Carousel: relative; scroll container ref: flex gap-5 overflow-x-auto scroll-smooth
  snap-x snap-mandatory pb-2, hide scrollbar ([&::-webkit-scrollbar]:hidden [scrollbar-width:none])
- Arrows (desktop only, hidden <md): absolute -left-4/-right-4 top-[35%], w-10 h-10 rounded-full
  bg-white border border-black/10 shadow flex items-center justify-center
  hover:bg-[var(--an-sand)]; use ArrowRightIcon (rotate-180 for prev); onClick scrollBy ±360
- Card (map PRODUCTS from @/lib/content, type Product): snap-start shrink-0
  w-[280px] md:w-[320px] flex flex-col p-3 rounded-[4px] group
  - Image area: relative aspect-square rounded-[8px] bg-[var(--an-sand)]/60 flex items-center
    justify-center overflow-hidden; renders {product.visual}; hover: subtle scale
    (transition-transform group-hover:scale-[1.03] on inner wrapper)
    - tag badge if product.tag: absolute top-3 left-3 rounded-full px-3 py-1 text-[10px]
      font-semibold uppercase tracking-[0.14em] text-white;
      bg var(--an-terra), or var(--an-olive) when tag.variant === "green"
  - Title: text-[14px] font-semibold text-left mt-4 mb-1 leading-snug {product.name}
  - Arabic: text-[12px] text-[var(--an-terra)] text-left
  - Review row: flex items-center gap-1 mt-1: 5× StarIcon w-3 text-[var(--an-gold)] +
    span text-[12px] opacity-60 "( {product.reviewCount} Reviews )"
  - Price: text-[14px] font-semibold text-[#737373] text-left mt-1 {product.price}
  - Button mt-3: <a href={waLink(product.orderMessage)} target="_blank" rel="noreferrer"
    class="btn-outline w-full"> "Order on WhatsApp"
- Under carousel: centered <a class="btn-solid" href={ORDER_LINK}>Ask for the full price list</a>
