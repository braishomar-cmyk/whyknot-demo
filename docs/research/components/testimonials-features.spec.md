# TestimonialsSection + FeatureCardsSection Specification

## TestimonialsSection
- **Target file:** `src/components/sections/TestimonialsSection.tsx`
- **GP source:** "What you say..." H2, 3 quote blocks in a row, plain quotes with
  author + "Verified Buyer", ~274px tall, minimal styling
- section id="reviews" py-16 bg-[var(--an-sand)]
- container-gp; h2 class="section-heading" "What You Say..."
- grid md:grid-cols-3 gap-6 mt-10; map TESTIMONIALS from @/lib/content
- Quote card: bg-white rounded-[12px] p-7 shadow-[0_4px_18px_rgba(43,50,38,0.06)]:
  - Stars row: 5× StarIcon w-3.5 text-[var(--an-gold)]
  - Quote: mt-3 italic text-[14px] leading-relaxed opacity-85 "“{quote}”"
  - Author: mt-4 text-[13px] font-semibold {who} + span block text-[11px] uppercase
    tracking-[0.12em] opacity-60 mt-0.5 "Verified Client"

## FeatureCardsSection
- **Target file:** `src/components/sections/FeatureCardsSection.tsx`
- **GP source:** "ORGANIC BEAUTY FEATURES" H2; 3 image promo cards each with H3 uppercase,
  short text, CTA link "SHOP NOW"/"DISCOVER NOW"; ~454px tall
- section id="features" py-16 bg-white
- container-gp; h2 class="section-heading" "A Nature Features"
- grid md:grid-cols-3 gap-6 mt-10; map FEATURE_CARDS from @/lib/content (type FeatureCard)
- Card: group rounded-[16px] overflow-hidden flex flex-col:
  - Top visual: aspect-[4/3] flex items-center justify-center transition-transform
    group-hover:scale-[1.02]; backgrounds per index:
    0: bg-gradient-to-br from-[#e0b360] to-[#b8863b]
    1: bg-gradient-to-br from-[var(--an-olive)] to-[var(--an-olive-deep)]
    2: bg-gradient-to-br from-[#d98a4a] to-[var(--an-terra)]
    inside: .font-display text-white text-[30px] font-semibold italic — short word:
    index 0 "Trio ✨", 1 "Tahara 🤍", 2 "Glow ☀️"
  - Body: bg-[var(--an-cream)] p-6 text-center flex-1 flex flex-col:
    - h3 uppercase text-[15px] font-semibold tracking-[0.08em] {title}
    - p mt-2 text-[13px] opacity-80 flex-1 {text}
    - <a href={waLink(card.orderMessage)} target="_blank" rel="noreferrer"
      class="mt-4 inline-flex items-center justify-center gap-1 uppercase text-[12px]
      font-semibold tracking-[0.12em] text-[var(--an-olive-deep)] underline underline-offset-4
      hover:text-[var(--an-olive)]">{cta} <ArrowRightIcon className="w-3.5" /></a>
