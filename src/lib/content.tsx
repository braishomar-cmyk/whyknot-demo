export const BUSINESS_NAME = "Whyknot Clothing";
export const WHATSAPP_NUMBER = "9613057408";
export const INSTAGRAM_URL = "https://www.instagram.com/whyknotclothing_lb";
export const INSTAGRAM_HANDLE = "@whyknotclothing_lb";
export const LOCATION = "Lebanon";
export const TAGLINE = "Wear what moves you!";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PLAN_LINK = waLink("Hello Whyknot! I'd like to order from your collection ✨");

export const NAV_LINKS = [
  { label: "New In", href: "#shop" },
  { label: "Dresses", href: "#shop" },
  { label: "Tees", href: "#shop" },
  { label: "One Size", href: "#shop" },
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
  { size: "One Size", bust: "84-102", waist: "64-84", hips: "90-108" },
  { size: "S", bust: "86", waist: "66", hips: "92" },
  { size: "M", bust: "90", waist: "70", hips: "96" },
  { size: "L", bust: "96", waist: "76", hips: "102" },
];

const ONE_SIZE = ["One Size"];
const STANDARD_SIZES = ["S", "M", "L"];

export type FeaturedCategory = {
  name: string;
  piece: string;
  startFrom: string;
  image: string;
};

export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  {
    name: "Dresses",
    piece: "Boho Dresses",
    startFrom: "$45",
    image: "/images/whyknot/boho-dress.jpg",
  },
  {
    name: "Tees",
    piece: "Statement Tees",
    startFrom: "$25",
    image: "/images/whyknot/sun-tee.jpg",
  },
  {
    name: "Shirts",
    piece: "Color-Pop Shirts",
    startFrom: "$35",
    image: "/images/whyknot/green-shirt.jpg",
  },
  {
    name: "One Size",
    piece: "Made in Italy & Japan",
    startFrom: "$30",
    image: "/images/whyknot/linen-shirt.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "boho-maxi-dress",
    name: "Boho Maxi Dress",
    category: "Dresses",
    price: "$55",
    tone: "#7ba05b",
    toneTo: "#a8c686",
    orderMessage: "Hello Whyknot! I'd like to order the Boho Maxi Dress. Is it available?",
    tag: "Our Collection",
    image: "/images/whyknot/boho-dress.jpg",
    description:
      "From our own collection: a flowing maxi in a joyful print that moves with every step. Throw it on with sandals and you're dressed.",
    fabric: "100% viscose. Machine wash cold, hang to dry.",
    colors: [
      { name: "Garden Print", hex: "#7ba05b" },
      { name: "Sunset Print", hex: "#e0763f" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "mimoto-one-size-tee",
    name: "Mimoto One-Size Tee",
    category: "Tops",
    price: "$28",
    tone: "#f4f2ee",
    toneTo: "#d9d5cd",
    orderMessage: "Hello Whyknot! I'd like to order the Mimoto One-Size Tee. Is it available?",
    tag: "Made in Japan",
    image: "/images/whyknot/sun-tee.jpg",
    description:
      "Japanese-made cotton in a relaxed one-size cut that drapes right on everybody. Soft, breathable, and impossible to wear just once a week.",
    fabric: "100% Japanese cotton. Machine wash cold.",
    colors: [
      { name: "White", hex: "#f4f2ee" },
      { name: "Black", hex: "#1c1c1c" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "mimoto-shirt",
    name: "Mimoto One-Size Shirt",
    category: "Tops",
    price: "$38",
    tone: "#8fb4c9",
    toneTo: "#b5cedd",
    orderMessage: "Hello Whyknot! I'd like to order the Mimoto One-Size Shirt. Is it available?",
    tag: "Made in Japan",
    image: "/images/whyknot/linen-shirt.jpg",
    description:
      "An easy oversized shirt from Mimoto that works buttoned, open, tied or tucked. One size, endless ways to wear it.",
    fabric: "Cotton blend. Machine wash cold, low iron.",
    colors: [
      { name: "White", hex: "#f4f2ee" },
      { name: "Sky", hex: "#8fb4c9" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "kelly-green-shirt",
    name: "Kelly Green Cropped Shirt",
    category: "New In",
    price: "$42",
    tone: "#2f9e44",
    toneTo: "#5cb85c",
    orderMessage: "Hello Whyknot! I'd like to order the Kelly Green Cropped Shirt. Which sizes are available?",
    tag: "New",
    image: "/images/whyknot/green-shirt.jpg",
    description:
      "The green that started conversations. A cropped button-up in a color that makes jeans look intentional.",
    fabric: "Cotton poplin. Machine wash cold.",
    colors: [
      { name: "Kelly Green", hex: "#2f9e44" },
      { name: "White", hex: "#f4f2ee" },
    ],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "sequin-eye-tee",
    name: "Statement Eye Tee",
    category: "Tops",
    price: "$32",
    tone: "#3aa8a0",
    toneTo: "#6cc5be",
    orderMessage: "Hello Whyknot! I'd like to order the Statement Eye Tee. Is it available?",
    tag: "Bestseller",
    image: "/images/whyknot/sun-tee.jpg",
    description:
      "Our most-loved graphic tee, hand-finished with a shimmering motif that catches light and compliments all day.",
    fabric: "100% cotton with hand-applied embellishment. Gentle hand wash inside out.",
    colors: [
      { name: "White", hex: "#f4f2ee" },
      { name: "Black", hex: "#1c1c1c" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "leopard-midi-skirt",
    name: "Leopard Midi Skirt",
    category: "New In",
    price: "$48",
    tone: "#b98a3c",
    toneTo: "#8a6b34",
    orderMessage: "Hello Whyknot! I'd like to order the Leopard Midi Skirt. Which sizes are available?",
    image: "/images/whyknot/leopard-skirt.jpg",
    description:
      "A little wild, a lot wearable. Fluid midi length with an elastic waist that goes from desk to dinner.",
    fabric: "Viscose blend. Machine wash cold.",
    colors: [{ name: "Leopard", hex: "#b98a3c" }],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "made-in-italy-set",
    name: "Made in Italy One-Size Set",
    category: "New In",
    price: "$65",
    tone: "#e0763f",
    toneTo: "#eda06f",
    orderMessage: "Hello Whyknot! I'd like to order the Made in Italy One-Size Set. Is it available?",
    tag: "Made in Italy",
    image: "/images/whyknot/boho-dress.jpg",
    description:
      "Italian fabric, easy silhouette, zero guesswork. A matching set that packs like a dream and wears like a hug.",
    fabric: "Italian viscose blend. Machine wash cold.",
    colors: [
      { name: "Print", hex: "#e0763f" },
      { name: "Solid Cream", hex: "#efe7d8" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "beach-day-accessories",
    name: "Beach Day Accessories",
    category: "Accessories",
    price: "$22",
    tone: "#d9c290",
    toneTo: "#c2a468",
    orderMessage: "Hello Whyknot! I'd like to order the Beach Day Accessories. What do you have in stock?",
    image: "/images/whyknot/accessories-flatlay.jpg",
    description:
      "Woven, beaded and sun-ready. The finishing touches that turn an outfit into a mood.",
    fabric: "Mixed natural materials.",
    colors: [{ name: "Natural", hex: "#d9c290" }],
    sizes: ONE_SIZE,
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
    title: "Twirl test",
    product: "Boho Maxi Dress",
    price: "$55",
    orderMessage: "Hello Whyknot! I saw the Boho Maxi Dress in your video. Is it available?",
    image: "/images/whyknot/boho-dress.jpg",
  },
  {
    title: "One size, really",
    product: "Mimoto One-Size Tee",
    price: "$28",
    orderMessage: "Hello Whyknot! I saw the Mimoto Tee in your video. Is it available?",
    image: "/images/whyknot/sun-tee.jpg",
  },
  {
    title: "That green",
    product: "Kelly Green Shirt",
    price: "$42",
    orderMessage: "Hello Whyknot! I saw the Kelly Green Shirt in your video. Which sizes are available?",
    image: "/images/whyknot/green-shirt.jpg",
  },
  {
    title: "Wild card",
    product: "Leopard Midi Skirt",
    price: "$48",
    orderMessage: "Hello Whyknot! I saw the Leopard Midi Skirt in your video. Which sizes are available?",
    image: "/images/whyknot/leopard-skirt.jpg",
  },
];

export type StyleCategory = {
  name: string;
  blurb: string;
  image: string;
};

export const STYLES: StyleCategory[] = [
  { name: "Boho Days", blurb: "Flowy, printed, free", image: "/images/whyknot/boho-dress.jpg" },
  { name: "Statement", blurb: "Tees that talk", image: "/images/whyknot/sun-tee.jpg" },
  { name: "Color Pop", blurb: "Wear the bold thing", image: "/images/whyknot/green-shirt.jpg" },
  {
    name: "Easy Pieces",
    blurb: "One size, all you",
    image: "/images/whyknot/linen-shirt.jpg",
  },
];

export type Testimonial = {
  quote: string;
  who: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The one-size pieces actually fit beautifully. I ordered on WhatsApp in the morning and wore the dress that weekend.",
    who: "Maya K.",
  },
  {
    quote:
      "Quality you can feel, the Japanese tee is the softest thing I own. And the colors are even better in person.",
    who: "Nour H.",
  },
  {
    quote:
      "Finally a Lebanese page with pieces nobody else has. Fast replies, fast delivery, zero complications.",
    who: "Rita S.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "How does one-size fit work?",
    a: "Our one-size pieces are cut relaxed and flowy on purpose, designed in Italy and Japan to drape beautifully on most figures. Not sure? Send us your usual size on WhatsApp and we'll tell you honestly how it fits.",
  },
  {
    q: "How do I order?",
    a: "Tap any Order button and a WhatsApp chat opens with the piece already named. Confirm your choice, share your delivery details, and it's on the way.",
  },
  {
    q: "Do you deliver everywhere in Lebanon?",
    a: "Yes, we deliver across Lebanon with cash on delivery. Delivery usually takes 2 to 4 working days.",
  },
  {
    q: "Where are your pieces from?",
    a: "We curate small quantities from makers in Italy and Japan, alongside pieces from our own collection. When it's gone, it's gone.",
  },
  {
    q: "What if it doesn't suit me?",
    a: "Message us within 3 days and we'll arrange an exchange. We want you wearing it, not storing it.",
  },
];

export const BENEFITS = [
  { title: "Cash on Delivery", text: "Pay when it arrives" },
  { title: "All of Lebanon", text: "Delivered in 2-4 days" },
  { title: "Curated Small Batches", text: "Italy, Japan & our own line" },
  { title: "WhatsApp First", text: "Real replies, fast" },
];
