# Design Tokens — Green People structure × A Nature brand

## Source values extracted from greenpeople.co.uk (getComputedStyle)

- Body font: Lato, Arial, sans-serif — 14px / 400 / lh 24px / ls 0.28px, color #000
- Brand green: rgb(0,105,55) = #006937 (buttons, links, accents)
- Section H2/H3: uppercase, centered, 500 weight, 20–28px, ls 0.4–0.56px, margin-bottom 12–16px
- Primary button: 12px / 600 / ls 1.2px uppercase, padding 13px 24px, radius 6px,
  solid #006937 bg + white text; outline variant: transparent bg, #006937 border+text
- Search input: pill radius 22px, border #e0e0e0 (0.67px), padding 11px 24px, 16px text,
  placeholder "I'm looking for..."
- Nav links: 14px / 500 / ls 0.84px uppercase, padding 13px 16px
- Product card: flex column, ~330px wide, padding 12px, radius 4px, centered container;
  image square, object-fit contain, radius 8px, white bg;
  title 14px / 600 left-aligned, margin 16px 0 8px;
  review count "( 2,483 Reviews )" small muted; price 14px / 600 color #737373
- Footer bg: #f7f6f5; footer tagline "THE PIONEERS OF ORGANIC BEAUTY SINCE 1997"
- Container: max-width 1440px, padding 0 80px desktop
- Quick-link circles: 64px images + small label under

## A Nature brand substitution (what builders must use)

- Ink/text: #2b3226 · Background: #faf6ef (cream) · Section alt bg: #f3ecdf (sand)
- Brand "green people green" replacement → deep olive **#36452b** (solid buttons, footer accents),
  olive #4a5d3a (hovers/links)
- Accent gold: #b98a3c (stars, eyebrows, highlights), gold-light #e9d9b8
- Terra: #a9683f (badges) · WhatsApp green: #1fb355 (order CTAs only)
- Fonts: Jost (body + uppercase UI labels — plays the role of GP's Lato),
  Cormorant Garamond (logo + hero display accents). CSS vars: --font-jost, --font-cormorant
- Button recipe (GP-style): text 12px/600/tracking .1em uppercase, px-6 py-[13px], rounded-[6px];
  solid: bg #36452b text white; outline: border #36452b text #36452b;
  whatsapp: bg #1fb355 text white (order actions only)
- Section heading recipe: uppercase, centered, font-medium, tracking-[0.02em], text-[20px]→[28px]
- Currency: USD ($) — Lebanon market · Ordering: wa.me links, no cart
