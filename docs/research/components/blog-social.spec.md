# BlogSection + SocialStrip Specification

## BlogSection
- **Target file:** `src/components/sections/BlogSection.tsx`
- **GP source:** "Natural Beauty Blog" H2 + intro line + "View All Articles" link;
  3 article cards (image, category, H3 title, excerpt)
- section py-16 bg-[var(--an-cream)]
- container-gp; h2 class="section-heading" "Beauty Journal"; p center mt-2 text-[14px]
  opacity-70 "Level up your ritual with our natural beauty tips."
- grid md:grid-cols-3 gap-6 mt-10; map BLOG_POSTS from @/lib/content (type BlogPost)
- Card: group bg-white rounded-[16px] overflow-hidden shadow-[0_4px_18px_rgba(43,50,38,0.06)]
  hover:-translate-y-1 transition-transform:
  - Top visual: aspect-[16/9] bg gradients per index
    (0: from-[#c98f3f] to-[#e6c98a], 1: from-[#5877a1] to-[#8fa8c7],
     2: from-[var(--an-olive)] to-[#8faf7a]) flex items-center justify-center;
    .font-display text-white italic text-[22px]: 0 "Liquid Gold", 1 "Blue Nila", 2 "White Musk"
  - Body p-6: category text-[11px] uppercase tracking-[0.15em] text-[var(--an-gold)]
    font-semibold; h3 mt-2 text-[16px] font-semibold leading-snug; p mt-2 text-[13px]
    opacity-75 {excerpt}; "Read more →" text-[12px] uppercase tracking-[0.1em] font-semibold
    mt-3 text-[var(--an-olive-deep)]
- Cards link to INSTAGRAM_URL (target _blank rel noreferrer)

## SocialStrip
- **Target file:** `src/components/sections/SocialStrip.tsx`
- **GP source:** "STAY IN TOUCH WITH #GreenPeopleUK" — two stacked H2 lines, minimal strip
- section py-14 bg-white text-center
- p uppercase text-[13px] tracking-[0.2em] font-medium opacity-80 "Stay in touch with"
- <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"> .font-display text-[34px]
  md:text-[44px] font-semibold text-[var(--an-olive-deep)] hover:text-[var(--an-olive)]
  inline-flex items-center gap-3 mt-1: <InstagramIcon className="w-8" /> #ANatureLB</a>
- Under: text-[13px] opacity-70 mt-2 "Tag us in your ritual — we repost our favorites 🌿"
