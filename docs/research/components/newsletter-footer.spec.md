# NewsletterSection + FooterSection + WhatsAppFloat Specification

## NewsletterSection
- **Target file:** `src/components/sections/NewsletterSection.tsx`
- **GP source:** signup banner w/ background image, centered box, email input + submit,
  ~413px tall. A Nature has no email list → WhatsApp community CTA instead.
- section py-16 bg-[var(--an-olive-deep)] relative overflow-hidden
  (add radial gold glow: before/absolute or extra div with
  bg-[radial-gradient(700px_340px_at_50%_-10%,rgba(185,138,60,0.3),transparent_60%)])
- container-gp text-center relative:
  - eyebrow uppercase text-[11px] tracking-[0.28em] font-semibold text-[var(--an-gold-light)]
    "Join the ritual"
  - h2 .font-display text-white text-[30px] md:text-[40px] font-semibold mt-2 max-w-[560px] mx-auto
    "Get first access to new arrivals & offers"
  - p text-white/80 text-[14px] mt-3 max-w-[440px] mx-auto
    "Join our WhatsApp list — we send new products, bundles and offers first to our community.
    No spam, just glow."
  - <a class="btn-wa mt-7 !px-8 !py-4 !text-[13px]" href={waLink("Hi! Add me to the A Nature offers list 🌿")}
    target="_blank" rel="noreferrer"> WhatsAppIcon w-5 + "Join on WhatsApp"

## FooterSection
- **Target file:** `src/components/sections/FooterSection.tsx`
- **GP source:** footer bg #f7f6f5, quick links row + mega footer columns
  (DISCOVER / help etc.) + tagline "THE PIONEERS OF ORGANIC BEAUTY SINCE 1997" + legal row
- footer bg-[var(--an-sand)] pt-14 pb-8
- container-gp:
  - Top tagline centered: uppercase .font-display? NO — GP uses plain uppercase:
    text-center uppercase text-[13px] tracking-[0.24em] font-semibold text-[var(--an-olive-deep)]
    "Pure Moroccan Beauty · Woman-Founded in Lebanon"
  - Columns grid mt-10 grid-cols-2 md:grid-cols-4 gap-8 text-[13px]:
    1. Brand col: logo .font-display text-[24px] font-bold ("A " + gold "Nature");
       p mt-3 opacity-75 "We derive beauty from Nature. 100% pure products from the heart
       of Morocco, delivered across Lebanon." ; Arabic line mt-2 text-[var(--an-terra)]
       "نستمدّ الجمال من الطبيعة"
    2. DISCOVER: heading uppercase text-[12px] tracking-[0.15em] font-semibold mb-3;
       links (block py-1 opacity-75 hover:opacity-100 hover:text-[var(--an-olive)]):
       Our Story → #story · Bestsellers → #bestsellers · Bundles → #features · Reviews → #reviews
    3. HELP: How to order → ORDER_LINK · Delivery info → ORDER_LINK ("Hi! What are your
       delivery areas & fees?") · Ask for prices → ORDER_LINK
    4. CONTACT: WhatsApp +961 76 067 064 → wa.me link · Instagram @anaturelb → INSTAGRAM_URL ·
       "Beirut, Lebanon 🇱🇧"
  - Legal row: mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row gap-2
    items-center justify-between text-[12px] opacity-60:
    "© 2026 A Nature · Beirut, Lebanon" | "#care_of_motherearth" |
    "Demo website — prices are placeholders"

## WhatsAppFloat
- **Target file:** `src/components/sections/WhatsAppFloat.tsx`
- GP has a chat bubble bottom-right (Gorgias). A Nature: fixed bottom-6 right-6 z-50
  w-[60px] h-[60px] rounded-full bg-[var(--an-wa)] text-white flex items-center justify-center
  shadow-[0_8px_26px_rgba(31,179,85,0.45)] hover:scale-108 transition-transform;
  <a aria-label="Order on WhatsApp" href={ORDER_LINK} target="_blank" rel="noreferrer">
  WhatsAppIcon w-[30px]
