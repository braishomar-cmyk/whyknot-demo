# Page Topology — greenpeople.co.uk homepage → A Nature rebrand

Target: https://www.greenpeople.co.uk/ (Shopify store, Lato font, no smooth-scroll lib, native scrolling)
Customization directive from user: keep Green People's page structure/layout, replace brand
(logo, colors, fonts), products, and copy with **A Nature** (Lebanese natural beauty,
WhatsApp ordering, +961 76 067 064).

## Section order (top → bottom)

| # | GP section | Height (1440px) | Interaction model | A Nature equivalent |
|---|-----------|-----------------|-------------------|---------------------|
| 1 | Announcement bar (3 rotating messages) | ~40px | time-driven rotation (we ship static single row) | Free delivery >$40 · COD · tagline |
| 2 | Header: centered logo, search pill, account/cart icons | 149px total | sticky, mega-menu dropdowns (we ship simple links) | A Nature logo, search pill (decorative), IG + WhatsApp icons |
| 3 | Quick links: 9 circular category images + labels | 120px | hover scale | 8 A Nature ritual categories |
| 4 | Hero: full-bleed image banner, content bottom-right | 900px desktop | static image + CTA | brand gradient + bottle visuals + headline + CTA |
| 5 | USP bar: 4 items w/ icons | 32px row | static | 500+ clients ★ / 100% pure / free delivery / from Morocco |
| 6 | "Meet our Customers" UGC video slider | 534px | carousel | SKIPPED (needs real UGC videos — Phase-2 upsell) |
| 7 | BESTSELLERS product carousel: 10 cards, arrows | 634px | horizontal scroll/arrows | 6 A Nature products, WhatsApp order buttons |
| 8 | "Our story" split: image left / text right, green CTA | 495px | static | A Nature founder story |
| 9 | "Why organic beauty?" split reversed | 519px | static | "Why pure Moroccan beauty?" |
| 10 | "What you say..." 3 testimonial quotes | 274px | static | 3 client quotes (from IG Feedbacks highlight) |
| 11 | ORGANIC BEAUTY FEATURES: 3 image promo cards | 454px | hover | Argan Trio / Musk El Tahara / Tanning promos |
| 12 | Natural Beauty Blog: 3 article cards | ~600px | hover | Beauty Journal: 3 tip articles |
| 13 | #GreenPeopleUK social strip | small | — | #ANatureLB strip |
| 14 | Newsletter signup w/ bg image | 413px | form | WhatsApp community join CTA |
| 15 | Footer quick links row + mega footer (columns) + tagline | 336+898px | hover | DISCOVER / HELP / CONTACT columns + tagline |

## Layout system
- Max content width: 1440px, side padding 80px desktop / 16px mobile
- Product grid card: ~330px wide, flex column, 12px padding, 4px radius
- Breakpoints observed: mobile layout at ≤~768px (single column, stacked)

## Z-index/fixed layers
- Sticky header (top)
- Floating chat bubble bottom-right (GP: Gorgias) → A Nature: WhatsApp float button
