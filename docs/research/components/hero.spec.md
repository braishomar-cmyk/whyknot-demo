# HeroSection Specification

## Overview
- **Target file:** `src/components/sections/HeroSection.tsx`
- **Interaction model:** static
- **GP source:** full-bleed image banner ~900px desktop (image-led, content overlay,
  H2 24px uppercase centered, CTA bottom area)

## A Nature adaptation (no photography yet → rich brand gradient + bottle visuals)
- section relative overflow-hidden, min-h-[560px] md:min-h-[640px], flex items-center
- Background: layered gradients on cream:
  `bg-[radial-gradient(1100px_520px_at_85%_-10%,rgba(185,138,60,0.18),transparent_60%),radial-gradient(900px_500px_at_-10%_110%,rgba(74,93,58,0.16),transparent_60%)] bg-[var(--an-cream)]`
- container-gp grid md:grid-cols-2 gap-12 items-center py-16

### Left column
- Eyebrow: uppercase text-[11px] tracking-[0.28em] font-semibold text-[var(--an-gold)]:
  "Woman-Founded · Beirut, Lebanon"
- H1: .font-display text-[44px] md:text-[64px] leading-[1.08] font-semibold:
  "We derive beauty" then <em class="italic text-[var(--an-olive)]">from Nature.</em>
- Lead: text-[16px] md:text-[17px] opacity-85 max-w-[34rem] mt-5:
  "100% pure Moroccan argan oil, musk el tahara, shea butter and time-honored beauty
  rituals — hand-selected at the source, delivered to your door anywhere in Lebanon."
- CTA row mt-8 flex gap-4 flex-wrap:
  - <a class="btn-wa" href={ORDER_LINK}> WhatsAppIcon w-[18px] + "Order on WhatsApp"
  - <a class="btn-outline" href="#bestsellers"> "Shop Bestsellers"
- Arabic line mt-6 text-[15px] text-[var(--an-terra)] tracking-[0.05em]: "نستمدّ الجمال من الطبيعة"

### Right column (hidden on <md: shown smaller)
- Card: rounded-[28px] bg-gradient-to-br from-[#fdfaf3] to-[var(--an-sand)]
  border border-[var(--an-gold)]/25 shadow-[0_10px_40px_rgba(43,50,38,0.10)] p-10 text-center
- Bottle row (flex justify-center items-end gap-5):
  PumpBottle(width 70,height 150, cap #7a5a2e, neck #8f6c38, body #c98f3f, opacity .9,
  label ARGAN / 100% PURE OIL) ·
  MuskBottle(width 84,height 170, label A NATURE / MUSK EL TAHARA) ·
  Jar(width 70,height 140, lid #8f6c38, body #e6c98a, label SHEA / BUTTER · RAW)
- Below: .font-display text-[20px] font-semibold mt-6 "From the heart of Morocco 🇲🇦"
- Two floating badges (absolute, white rounded-[14px] shadow px-4 py-2 text-[12px] font-semibold):
  top-left -left-4 "🌿 Vegan & Cruelty-Free" (text olive); bottom-right -right-3
  "⭐ 500+ Happy Clients" (text terra). On mobile: static inline-flex under card.
