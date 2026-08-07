# StorySection + WhySection Specification

## GP source (exact): two split image/text sections, ~495-519px tall.
H2 20px/500 uppercase centered ls 0.4px mb-16px; body text 14px/400 lh 24px;
CTA solid green button (12px/600 ls 1.2px uppercase, radius 6px, padding 13px 24px).
Section 1: image LEFT / text RIGHT. Section 2 reversed.

## StorySection
- **Target file:** `src/components/sections/StorySection.tsx`
- section id="story" py-16 bg-[var(--an-cream)]
- container-gp grid md:grid-cols-2 gap-10 md:gap-16 items-center
- Visual column (order-1): rounded-[16px] overflow-hidden aspect-[4/3] relative,
  bg-gradient-to-br from-[var(--an-olive-deep)] to-[var(--an-olive)],
  centered content: big .font-display text-white — quote-style:
  text-[26px] md:text-[30px] italic leading-snug p-10 text-center
  "“Real beauty doesn't need chemicals.”" + under it text-[12px] uppercase tracking-[0.2em]
  text-[var(--an-gold-light)] "— The A Nature promise"
- Text column (order-2) text-center md:text-left:
  - h2 class="section-heading md:text-left" text "Our Story"
  - p mt-4 text-[15px] leading-relaxed opacity-85:
    "A Nature began with one Lebanese woman's belief that the purest care for skin and hair
    was already perfected by nature — in the argan groves and hammam rituals of Morocco.
    Every bottle is hand-selected at the source, packed with love in Lebanon, and delivered
    to your door."
  - <a class="btn-solid mt-6" href={ORDER_LINK}>Read Our Story</a>

## WhySection
- **Target file:** `src/components/sections/WhySection.tsx`
- section py-16 bg-white
- Same grid, REVERSED: text column first on desktop (md:order-1), visual md:order-2
- Visual: rounded-[16px] aspect-[4/3] bg-gradient-to-br from-[var(--an-sand)]
  to-[var(--an-gold-light)] flex items-center justify-center;
  inside: three mini stat blocks stacked or grid (2x2): each .font-display text-[34px]
  font-bold text-[var(--an-olive-deep)] + label text-[11px] uppercase tracking-[0.15em]:
  "100% Pure ingredients", "0 Parabens & fillers", "48h Delivery in Lebanon", "500+ Happy clients"
- Text column:
  - h2 class="section-heading md:text-left" "Why Pure Moroccan Beauty?"
  - p mt-4 (15px, opacity-85): "With an incredible variety of oils and butters able to nourish,
    soothe and balance, nature already provides everything your skin needs. When you choose
    pure, unmixed Moroccan beauty, you avoid the synthetics — and give your skin food,
    not chemicals."
  - <a class="btn-outline mt-6" href="#bestsellers">Discover The Collection</a>
