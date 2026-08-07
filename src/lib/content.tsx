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

export type Product = {
  name: string;
  category: "New In" | "Dresses" | "Tops" | "Accessories";
  price: string;
  compareAtPrice?: string;
  tone: string;
  toneTo: string;
  orderMessage: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "The Column Dress",
    category: "Dresses",
    price: "$85",
    tone: "#2b2b2b",
    toneTo: "#4d4a44",
    orderMessage: "Hello! I'd like to order The Column Dress. Which sizes are available?",
    tag: "New",
  },
  {
    name: "Linen Wrap Dress",
    category: "Dresses",
    price: "$72",
    tone: "#c8b9a4",
    toneTo: "#a8977e",
    orderMessage: "Hello! I'd like to order the Linen Wrap Dress. Which sizes are available?",
  },
  {
    name: "Silk Slip Dress",
    category: "Dresses",
    price: "$95",
    compareAtPrice: "$120",
    tone: "#8c9a8f",
    toneTo: "#6d7a6f",
    orderMessage: "Hello! I'd like to order the Silk Slip Dress. Which sizes are available?",
    tag: "Sale",
  },
  {
    name: "Structured Blazer",
    category: "New In",
    price: "$110",
    tone: "#3b3f46",
    toneTo: "#5a606b",
    orderMessage: "Hello! I'd like to order the Structured Blazer. Which sizes are available?",
    tag: "New",
  },
  {
    name: "Everyday Knit Top",
    category: "Tops",
    price: "$45",
    tone: "#d8cfc2",
    toneTo: "#b8ab99",
    orderMessage: "Hello! I'd like to order the Everyday Knit Top. Which sizes are available?",
  },
  {
    name: "Oversized Shirt",
    category: "Tops",
    price: "$55",
    tone: "#eae6df",
    toneTo: "#c9c2b6",
    orderMessage: "Hello! I'd like to order the Oversized Shirt. Which sizes are available?",
  },
  {
    name: "Wool Coat",
    category: "New In",
    price: "$160",
    tone: "#6b5748",
    toneTo: "#8a7361",
    orderMessage: "Hello! I'd like to order the Wool Coat. Which sizes are available?",
    tag: "New",
  },
  {
    name: "Leather Belt Bag",
    category: "Accessories",
    price: "$38",
    tone: "#26211d",
    toneTo: "#453b33",
    orderMessage: "Hello! I'd like to order the Leather Belt Bag.",
  },
];

export type Reel = {
  title: string;
  product: string;
  price: string;
  tone: string;
  toneTo: string;
  orderMessage: string;
};

export const REELS: Reel[] = [
  {
    title: "Styled 3 ways",
    product: "The Column Dress",
    price: "$85",
    tone: "#2b2b2b",
    toneTo: "#57534c",
    orderMessage: "Hello! I saw The Column Dress in your video. Which sizes are available?",
  },
  {
    title: "From day to night",
    product: "Structured Blazer",
    price: "$110",
    tone: "#3b3f46",
    toneTo: "#6b727e",
    orderMessage: "Hello! I saw the Structured Blazer in your video. Which sizes are available?",
  },
  {
    title: "The perfect drape",
    product: "Silk Slip Dress",
    price: "$95",
    tone: "#8c9a8f",
    toneTo: "#aab5ac",
    orderMessage: "Hello! I saw the Silk Slip Dress in your video. Which sizes are available?",
  },
  {
    title: "Winter layering",
    product: "Wool Coat",
    price: "$160",
    tone: "#6b5748",
    toneTo: "#97826f",
    orderMessage: "Hello! I saw the Wool Coat in your video. Which sizes are available?",
  },
];

export type StyleCategory = {
  name: string;
  blurb: string;
  tone: string;
  toneTo: string;
};

export const STYLES: StyleCategory[] = [
  { name: "Workwear", blurb: "Sharp, easy, all day", tone: "#3b3f46", toneTo: "#5a606b" },
  { name: "Weekend", blurb: "Soft layers, no effort", tone: "#c8b9a4", toneTo: "#a8977e" },
  { name: "Evening", blurb: "Quiet drama", tone: "#26211d", toneTo: "#4a3f36" },
  { name: "Essentials", blurb: "The everyday base", tone: "#eae6df", toneTo: "#c9c2b6" },
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
