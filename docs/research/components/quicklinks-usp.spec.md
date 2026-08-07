# QuickLinks + UspBar Specification

## QuickLinks
- **Target file:** `src/components/sections/QuickLinks.tsx`
- **GP source:** #shopify-section-image-quick-links — "Quick Links" heading (visually hidden),
  9 circular 64px category images with small labels beneath, single centered row, 120px tall
- Structure: section bg-white py-5, container-gp; flex row justify-center gap-6 md:gap-10,
  horizontally scrollable on mobile (overflow-x-auto, no scrollbar via [scrollbar-width:none])
- Items: CATEGORIES from @/lib/content (8 items). Each = <a href={cat.href}> flex flex-col
  items-center gap-2 shrink-0:
  - Circle: w-16 h-16 rounded-full bg gradient `bg-gradient-to-br from-[var(--an-sand)] to-[var(--an-gold-light)]`
    flex items-center justify-center, border border-[var(--an-gold)]/20,
    hover:scale-105 transition-transform. Inside: LeafIcon w-6 text-[var(--an-olive-deep)]
    (vary: use index % icons [LeafIcon, StarIcon, GlobeIcon, WhatsAppIcon→no use LeafIcon rotation] —
    keep simple: LeafIcon for all, acceptable)
  - Label: text-[12px] font-medium text-center whitespace-nowrap

## UspBar
- **Target file:** `src/components/sections/UspBar.tsx`
- **GP source:** row of 4 USP items, 32px tall content, container 1440px padding 0 80px,
  text uppercase small; GP items: "60,000+ 5-STAR REVIEWS / CERTIFIED ORGANIC / Free UK delivery
  over £35 / VEGAN & CRUELTY-FREE"
- A Nature content (4 items, icon + label):
  1. StarIcon gold — "500+ Happy Clients"
  2. LeafIcon olive — "100% Pure & Natural"
  3. TruckIcon olive — "Free Delivery Over $40"
  4. GlobeIcon terra — "Sourced From Morocco"
- Structure: section bg-[var(--an-sand)] py-4 border-y border-black/5; container-gp
  grid grid-cols-2 md:grid-cols-4 gap-3; item = flex items-center justify-center gap-2,
  icon w-[18px], label uppercase text-[11px] md:text-[12px] font-semibold tracking-[0.1em]
