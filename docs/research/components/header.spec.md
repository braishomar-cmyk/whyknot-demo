# HeaderSection Specification

## Overview
- **Target file:** `src/components/sections/HeaderSection.tsx`
- **Interaction model:** sticky header; static links (mega-menu omitted for demo)
- **GP source:** announcement bar + centered logo row + search pill + uppercase nav

## Structure (GP: header.header--bar, 149px tall total)
1. **Announcement bar** — full-width, bg var(--an-olive-deep), white text, centered,
   text-[12px] tracking-[0.12em] uppercase, py-2.
   Content: "🌿 Free delivery on orders over $40 — everywhere in Lebanon · Cash on delivery"
2. **Logo row** — 3-col flex (container-gp, h-[72px] items-center justify-between), white bg:
   - Left: MenuIcon (w-6, visible < md only) + on md: empty spacer
   - Center: logo — .font-display text-[28px] font-bold tracking-[0.04em]: "A Nature" with
     "Nature" in var(--an-gold). Under it (hidden on mobile) text-[9px] uppercase tracking-[0.3em]
     text-[var(--an-olive)]: "Pure Moroccan Beauty"
   - Right: icons row gap-5: InstagramIcon link (INSTAGRAM_URL), WhatsAppIcon link (ORDER_LINK),
     both w-[22px] text-[var(--an-ink)] hover:text-[var(--an-olive)]
3. **Search pill row** (GP: input radius 22px, border #e0e0e0, padding 11px 24px, 16px text) —
   centered, max-w-[540px] mx-auto w-full px-4, decorative form → links to ORDER_LINK:
   div with SearchIcon (w-4, muted) + span text-[14px] text-[#999]: "I'm looking for..."
   rounded-full border border-[#e0e0e0] bg-white py-[11px] px-6 flex items-center gap-3
4. **Nav row** (desktop only, hidden < md) — centered flex, NAV_LINKS from @/lib/content:
   links uppercase text-[13px] font-medium tracking-[0.06em] px-4 py-[13px]
   hover:text-[var(--an-olive)] hover:underline underline-offset-4
5. Bottom hairline: border-b border-black/10

## Behavior
- Whole header wrapper: sticky top-0 z-50 bg-white (GP header is white)
- "use client" NOT needed (no state; mobile menu = hidden nav, MenuIcon links to #bestsellers)

## Responsive
- Mobile: announcement bar text-[10px]; logo row keeps 3 cols; nav row hidden; search pill full-width px-4
