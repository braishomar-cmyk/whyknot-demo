export const BUSINESS_NAME = "Atelier";
export const WHATSAPP_NUMBER = "96170000000";
export const INSTAGRAM_URL = "https://www.instagram.com/";
export const INSTAGRAM_HANDLE = "@atelier.lb";
export const LOCATION = "Beirut, Lebanon";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PLAN_LINK = waLink("Hello! I'd like to order from your collection ✨");

export const NAV_LINKS = [
  { label: "New In", href: "#shop" },
  { label: "Dresses", href: "#shop" },
  { label: "Outerwear", href: "#shop" },
  { label: "Accessories", href: "#shop" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "/contact" },
];

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  category: "New In" | "Dresses" | "Tops" | "Accessories";
  price: string;
  compareAtPrice?: string;
  tone: string;
  toneTo: string;
  orderMessage: string;
  tag?: string;
  image: string;
  description: string;
  fabric: string;
  colors: ProductColor[];
  sizes: string[];
};

export const SIZE_GUIDE = [
  { size: "XS", bust: "82", waist: "62", hips: "88" },
  { size: "S", bust: "86", waist: "66", hips: "92" },
  { size: "M", bust: "90", waist: "70", hips: "96" },
  { size: "L", bust: "96", waist: "76", hips: "102" },
  { size: "XL", bust: "102", waist: "82", hips: "108" },
];

const STANDARD_SIZES = ["XS", "S", "M", "L", "XL"];

export type FeaturedCategory = {
  name: string;
  piece: string;
  startFrom: string;
  image: string;
};

export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  {
    name: "Outerwear",
    piece: "The Quilted Coat",
    startFrom: "$120",
    image: "/images/fashion/cat-outerwear.jpg",
  },
  {
    name: "Knitwear",
    piece: "Soft Chunky Knits",
    startFrom: "$45",
    image: "/images/fashion/cat-knitwear.jpg",
  },
  {
    name: "Trousers",
    piece: "Wide-Leg Trousers",
    startFrom: "$60",
    image: "/images/fashion/cat-trousers.jpg",
  },
  {
    name: "Dresses",
    piece: "Silk & Linen Dresses",
    startFrom: "$72",
    image: "/images/fashion/cat-dresses.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "sage-slip-dress",
    name: "Sage Slip Dress",
    category: "Dresses",
    price: "$95",
    compareAtPrice: "$120",
    tone: "#8c9a8f",
    toneTo: "#6d7a6f",
    orderMessage: "Hello! I'd like to order the Sage Slip Dress. Which sizes are available?",
    tag: "Sale",
    image: "/images/fashion/product-sage-dress.jpg",
    description:
      "Cut on the bias so it moves the way silk should, with adjustable straps and a soft cowl neckline. The dress that goes from lunch to late without trying.",
    fabric: "92% silk, 8% elastane. Cool hand wash, hang to dry.",
    colors: [
      { name: "Sage", hex: "#8c9a8f" },
      { name: "Ivory", hex: "#efe9dd" },
      { name: "Midnight", hex: "#2c3441" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "linen-wrap-dress",
    name: "Linen Wrap Dress",
    category: "Dresses",
    price: "$72",
    tone: "#c8b9a4",
    toneTo: "#a8977e",
    orderMessage: "Hello! I'd like to order the Linen Wrap Dress. Which sizes are available?",
    image: "/images/fashion/product-wrap-dress.jpg",
    description:
      "A true wrap in breathable washed linen, with a self-tie waist that flatters every figure. Wrinkles beautifully, like linen is supposed to.",
    fabric: "100% washed linen. Machine wash cold, gentle cycle.",
    colors: [
      { name: "Cream", hex: "#e7dcc8" },
      { name: "Sage", hex: "#8c9a8f" },
      { name: "Terracotta", hex: "#b0714f" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "structured-blazer",
    name: "Structured Blazer",
    category: "New In",
    price: "$110",
    tone: "#3b3f46",
    toneTo: "#5a606b",
    orderMessage: "Hello! I'd like to order the Structured Blazer. Which sizes are available?",
    tag: "New",
    image: "/images/fashion/product-blazer.jpg",
    description:
      "Sharp shoulders, relaxed body, single button. Built to sit as well over a tee as it does over a slip dress.",
    fabric: "64% polyester, 34% viscose, 2% elastane. Dry clean.",
    colors: [
      { name: "Charcoal", hex: "#3b3f46" },
      { name: "Oat", hex: "#d8cfc2" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "ribbed-longsleeve",
    name: "Ribbed Longsleeve",
    category: "Tops",
    price: "$49",
    tone: "#5a708a",
    toneTo: "#7d92aa",
    orderMessage: "Hello! I'd like to order the Ribbed Longsleeve. Which sizes are available?",
    image: "/images/fashion/product-slate-top.jpg",
    description:
      "A second-skin rib that holds its shape wash after wash. High neck, long cuffs, endless layering.",
    fabric: "95% cotton, 5% elastane. Machine wash cold.",
    colors: [
      { name: "Slate", hex: "#5a708a" },
      { name: "Ivory", hex: "#efe9dd" },
      { name: "Black", hex: "#232323" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "everyday-knit",
    name: "Everyday Knit",
    category: "Tops",
    price: "$45",
    tone: "#d8cfc2",
    toneTo: "#b8ab99",
    orderMessage: "Hello! I'd like to order the Everyday Knit. Which sizes are available?",
    image: "/images/fashion/product-oatmeal-knit.jpg",
    description:
      "The chunky crew you reach for without thinking. Soft-spun yarn, dropped shoulders, zero itch.",
    fabric: "70% acrylic, 30% wool. Hand wash, dry flat.",
    colors: [
      { name: "Oatmeal", hex: "#d8cfc2" },
      { name: "Blush", hex: "#e3c2bb" },
      { name: "Sage", hex: "#8c9a8f" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "square-neck-tank",
    name: "Square-Neck Tank",
    category: "Tops",
    price: "$32",
    tone: "#eae6df",
    toneTo: "#c9c2b6",
    orderMessage: "Hello! I'd like to order the Square-Neck Tank. Which sizes are available?",
    image: "/images/fashion/product-tank.jpg",
    description:
      "A clean square neckline in thick ribbed cotton that doesn't go sheer. The base layer of every capsule.",
    fabric: "95% cotton, 5% elastane. Machine wash cold.",
    colors: [
      { name: "White", hex: "#f4f2ee" },
      { name: "Black", hex: "#232323" },
      { name: "Mocha", hex: "#8a7361" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "the-quilted-coat",
    name: "The Quilted Coat",
    category: "New In",
    price: "$160",
    tone: "#8f9e83",
    toneTo: "#a9b59e",
    orderMessage: "Hello! I'd like to order The Quilted Coat. Which sizes are available?",
    tag: "New",
    image: "/images/fashion/cat-outerwear.jpg",
    description:
      "Diamond-quilted warmth without the bulk, hitting below the knee. The coat that makes every outfit underneath optional.",
    fabric: "Shell 100% recycled nylon, fill 100% recycled polyester. Machine wash cold.",
    colors: [
      { name: "Sage", hex: "#8f9e83" },
      { name: "Stone", hex: "#c9c2b6" },
      { name: "Black", hex: "#232323" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "wide-leg-trousers",
    name: "Wide-Leg Trousers",
    category: "New In",
    price: "$68",
    tone: "#a99cc0",
    toneTo: "#c3b8d6",
    orderMessage: "Hello! I'd like to order the Wide-Leg Trousers. Which sizes are available?",
    image: "/images/fashion/cat-trousers.jpg",
    description:
      "High-waisted, pleated, and fluid, with a drape that reads tailored from across the room and pajamas from the inside.",
    fabric: "78% viscose, 22% polyester. Machine wash cold, low iron.",
    colors: [
      { name: "Lavender", hex: "#a99cc0" },
      { name: "Cream", hex: "#e7dcc8" },
      { name: "Charcoal", hex: "#3b3f46" },
    ],
    sizes: STANDARD_SIZES,
  },
];

export type Reel = {
  title: string;
  product: string;
  price: string;
  orderMessage: string;
  image: string;
};

export const REELS: Reel[] = [
  {
    title: "Styled 3 ways",
    product: "Sage Knit Set",
    price: "$89",
    orderMessage: "Hello! I saw the Sage Knit Set in your video. Which sizes are available?",
    image: "/images/fashion/reel-walk.jpg",
  },
  {
    title: "Cozy season",
    product: "Everyday Knit",
    price: "$45",
    orderMessage: "Hello! I saw the Everyday Knit in your video. Which sizes are available?",
    image: "/images/fashion/reel-seated.jpg",
  },
  {
    title: "The perfect drape",
    product: "Sage Slip Dress",
    price: "$95",
    orderMessage: "Hello! I saw the Sage Slip Dress in your video. Which sizes are available?",
    image: "/images/fashion/product-sage-dress.jpg",
  },
  {
    title: "From day to night",
    product: "Structured Blazer",
    price: "$110",
    orderMessage: "Hello! I saw the Structured Blazer in your video. Which sizes are available?",
    image: "/images/fashion/product-blazer.jpg",
  },
];

export type StyleCategory = {
  name: string;
  blurb: string;
  image: string;
};

export const STYLES: StyleCategory[] = [
  { name: "Workwear", blurb: "Sharp, easy, all day", image: "/images/fashion/product-blazer.jpg" },
  { name: "Weekend", blurb: "Soft layers, no effort", image: "/images/fashion/cat-knitwear.jpg" },
  { name: "Evening", blurb: "Quiet drama", image: "/images/fashion/cat-dresses.jpg" },
  { name: "Essentials", blurb: "The everyday base", image: "/images/fashion/journal-flatlay.jpg" },
];

export type Testimonial = {
  quote: string;
  who: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The quality surprised me. The coat feels like it costs three times the price, and ordering on WhatsApp took two minutes.",
    who: "Lara M.",
  },
  {
    quote:
      "I ordered the wrap dress for an event and ended up wearing it every week since. True to size and beautifully made.",
    who: "Yasmina K.",
  },
  {
    quote:
      "Fast delivery, lovely packaging, and the blazer fits like it was tailored for me. Already planning my next order.",
    who: "Rania S.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "How do I order?",
    a: "Tap any Order button and a WhatsApp chat opens with the piece already named. Tell us your size, confirm delivery, and it's on the way.",
  },
  {
    q: "How do I know my size?",
    a: "Every piece has a size guide, and we're happy to advise on WhatsApp. Tell us your usual size and we'll confirm the right fit before you order.",
  },
  {
    q: "Do you deliver everywhere in Lebanon?",
    a: "Yes, we deliver across Lebanon within 2 to 4 working days, with cash on delivery.",
  },
  {
    q: "What if it doesn't fit?",
    a: "Easy exchanges within 7 days. Message us on WhatsApp and we'll arrange the swap.",
  },
];

export const BENEFITS = [
  { title: "Free Delivery Over $75", text: "Everywhere in Lebanon" },
  { title: "Cash on Delivery", text: "Pay when it arrives" },
  { title: "Easy Exchanges", text: "7 days, no drama" },
  { title: "WhatsApp Support", text: "Real replies, fast" },
];
