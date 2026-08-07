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
  /** Photo of this colorway, shown when the swatch is selected */
  image?: string;
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
    piece: "Boho Maxi Dresses",
    startFrom: "$65",
    image: "/images/whyknot/santorini-maxi-coral.jpg",
  },
  {
    name: "Tees",
    piece: "Statement Tees",
    startFrom: "$32",
    image: "/images/whyknot/evil-eye-tee-white.jpg",
  },
  {
    name: "Shirts",
    piece: "Mimoto Made in Japan",
    startFrom: "$78",
    image: "/images/whyknot/mimoto-crowd-shirt-sky.jpg",
  },
  {
    name: "Summer",
    piece: "Hats & Loungewear",
    startFrom: "$28",
    image: "/images/whyknot/sun-hat-blue.jpg",
  },
];


export const PRODUCTS: Product[] = [
  {
    slug: "santorini-maxi-dress",
    name: "The Santorini Maxi",
    category: "Dresses",
    price: "$78",
    compareAtPrice: "$98",
    tone: "#e08a5f",
    toneTo: "#f0b48f",
    orderMessage: "Hello Whyknot! I'd like to order The Santorini Maxi. Is it available?",
    tag: "Bestseller",
    image: "/images/whyknot/santorini-maxi-coral.jpg",
    description:
      "Tassel-tie straps, a soft V neckline and a skirt that catches every breeze. Cut wide and free so it flows without clinging, this is the dress that turns a walk to dinner into an entrance.",
    fabric: "Lightweight viscose satin. Cool hand wash, hang to dry.",
    colors: [
      { name: "Sunset Coral", hex: "#e08a5f", image: "/images/whyknot/santorini-maxi-coral.jpg" },
      { name: "Aegean Blue", hex: "#5fc6d4", image: "/images/whyknot/santorini-maxi-aegean.jpg" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "amalfi-ikat-maxi",
    name: "The Amalfi Ikat Maxi",
    category: "Dresses",
    price: "$82",
    compareAtPrice: "$105",
    tone: "#4a6fd4",
    toneTo: "#7d9ae8",
    orderMessage: "Hello Whyknot! I'd like to order The Amalfi Ikat Maxi. Is it available?",
    tag: "New",
    image: "/images/whyknot/amalfi-maxi-ikat.jpg",
    description:
      "A painterly ikat print in cobalt, fuchsia and marigold on a tiered silhouette. Fitted at the waist, endless below it, and the kind of dress people stop you to ask about.",
    fabric: "100% viscose. Cool hand wash, line dry in shade.",
    colors: [{ name: "Ikat Multi", hex: "#4a6fd4" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "marrakesh-tiered-dress",
    name: "The Marrakesh Tiered Dress",
    category: "Dresses",
    price: "$74",
    compareAtPrice: "$92",
    tone: "#2b2b2b",
    toneTo: "#6b6355",
    orderMessage: "Hello Whyknot! I'd like to order The Marrakesh Tiered Dress. Is it available?",
    image: "/images/whyknot/marrakesh-tiered-noir.jpg",
    description:
      "An intricate black and sand block print on a tiered midi that swings when you move. The one piece that works for the beach club and the dinner after.",
    fabric: "Rayon blend. Machine wash cold, gentle cycle.",
    colors: [{ name: "Noir Print", hex: "#2b2b2b" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "positano-maxi-dress",
    name: "The Positano Maxi",
    category: "Dresses",
    price: "$85",
    compareAtPrice: "$98",
    tone: "#d63a6a",
    toneTo: "#e8739a",
    orderMessage: "Hello Whyknot! I'd like to order The Positano Maxi. Is it available?",
    tag: "Sale",
    image: "/images/whyknot/positano-maxi-fuchsia.jpg",
    description:
      "Bohemian paisley in fuchsia and turquoise with tassel ties at the bust. Full-skirted, floor-sweeping and unapologetically joyful.",
    fabric: "Rayon. Cool hand wash, hang to dry.",
    colors: [{ name: "Fuchsia Paisley", hex: "#d63a6a" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "capri-paisley-dress",
    name: "The Capri Paisley Dress",
    category: "Dresses",
    price: "$76",
    compareAtPrice: "$95",
    tone: "#2b7fb8",
    toneTo: "#5aa8d8",
    orderMessage: "Hello Whyknot! I'd like to order The Capri Paisley Dress. Is it available?",
    image: "/images/whyknot/capri-paisley-azure.jpg",
    description:
      "Azure paisley with gold-thread detail and a relaxed tie front. Loose through the body, cool in the heat, and effortless with flat sandals.",
    fabric: "Viscose with metallic thread. Cool hand wash.",
    colors: [{ name: "Azure Gold", hex: "#2b7fb8" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "olive-grove-halter",
    name: "The Olive Grove Halter",
    category: "Dresses",
    price: "$72",
    compareAtPrice: "$90",
    tone: "#3d6b4a",
    toneTo: "#7fa886",
    orderMessage: "Hello Whyknot! I'd like to order The Olive Grove Halter. Is it available?",
    image: "/images/whyknot/olive-grove-halter.jpg",
    description:
      "A deep-green damask print on a halter maxi with an open back. Understated from the front, unforgettable from behind.",
    fabric: "Rayon blend. Cool hand wash, line dry.",
    colors: [{ name: "Olive Damask", hex: "#3d6b4a" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "mykonos-halter-dress",
    name: "The Mykonos Halter",
    category: "Dresses",
    price: "$79",
    compareAtPrice: "$99",
    tone: "#2fb5a8",
    toneTo: "#7ad4cb",
    orderMessage: "Hello Whyknot! I'd like to order The Mykonos Halter. Is it available?",
    tag: "New",
    image: "/images/whyknot/mykonos-halter-turquoise.jpg",
    description:
      "Turquoise paisley panels with a contrast placket and rope tassel ties. A halter neckline that flatters shoulders and needs nothing else.",
    fabric: "Rayon. Cool hand wash, hang to dry.",
    colors: [{ name: "Turquoise Multi", hex: "#2fb5a8" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "pure-silk-maxi",
    name: "The Pure Silk Maxi",
    category: "New In",
    price: "$145",
    compareAtPrice: "$180",
    tone: "#a8d8c0",
    toneTo: "#cbe8d8",
    orderMessage: "Hello Whyknot! I'd like to order The Pure Silk Maxi. Is it available?",
    tag: "100% Silk",
    image: "/images/whyknot/silk-mint-front.jpg",
    description:
      "One hundred percent silk in mint and gold, with a plunging halter front and an open tie back. The most special piece we carry, and it feels like water on the skin.",
    fabric: "100% silk. Dry clean only.",
    colors: [{ name: "Mint Gold", hex: "#a8d8c0" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "mimoto-crowd-shirt",
    name: "Mimoto Crowd Shirt",
    category: "Tops",
    price: "$88",
    compareAtPrice: "$110",
    tone: "#2b2b2b",
    toneTo: "#5a5a5a",
    orderMessage: "Hello Whyknot! I'd like to order the Mimoto Crowd Shirt. Is it available?",
    tag: "Made in Japan",
    image: "/images/whyknot/mimoto-crowd-shirt-sky.jpg",
    description:
      "Japanese design at its most playful: a crisp cotton shirt with an illustrated crowd panel down the front and around the back. One size, cut oversized, impossible to ignore.",
    fabric: "100% cotton, made in Japan. Machine wash cold, low iron.",
    colors: [
      { name: "Sky Blue", hex: "#4aa8dd", image: "/images/whyknot/mimoto-crowd-shirt-sky.jpg" },
      { name: "Black", hex: "#2b2b2b", image: "/images/whyknot/mimoto-crowd-shirt-black.jpg" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "mimoto-asymmetric-tee",
    name: "Mimoto Asymmetric Tee",
    category: "Tops",
    price: "$68",
    compareAtPrice: "$85",
    tone: "#c0392b",
    toneTo: "#e05b4b",
    orderMessage: "Hello Whyknot! I'd like to order the Mimoto Asymmetric Tee. Is it available?",
    tag: "Made in Japan",
    image: "/images/whyknot/mimoto-tee-red.jpg",
    description:
      "A soft Japanese cotton tee with a draped asymmetric hem that falls longer on one side. Wear it with anything narrow and let the shape do the work.",
    fabric: "100% cotton, made in Japan. Machine wash cold.",
    colors: [{ name: "Poppy Red", hex: "#c0392b" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "evil-eye-tee",
    name: "The Evil Eye Tee",
    category: "Tops",
    price: "$42",
    compareAtPrice: "$55",
    tone: "#2fb5a8",
    toneTo: "#7ad4cb",
    orderMessage: "Hello Whyknot! I'd like to order The Evil Eye Tee. Is it available?",
    tag: "Bestseller",
    image: "/images/whyknot/evil-eye-tee-white.jpg",
    description:
      "Our most-shared piece: a relaxed white tee with a sequinned turquoise eye that catches the light with every step. Protection has never looked this good.",
    fabric: "100% cotton with sequin embellishment. Hand wash inside out.",
    colors: [{ name: "White", hex: "#f4f2ee" }],
    sizes: ONE_SIZE,
  },
  {
    slug: "cobalt-peplum-shirt",
    name: "The Cobalt Peplum Shirt",
    category: "Tops",
    price: "$62",
    compareAtPrice: "$78",
    tone: "#1668c4",
    toneTo: "#4a92dd",
    orderMessage: "Hello Whyknot! I'd like to order The Cobalt Peplum Shirt. Which size do you have?",
    tag: "Made in Italy",
    image: "/images/whyknot/peplum-shirt-cobalt.jpg",
    description:
      "Italian cotton poplin in a cobalt that photographs even better than it looks. Ruffle detailing, a nipped waist and a soft peplum that skims everything.",
    fabric: "100% cotton poplin, made in Italy. Machine wash cold.",
    colors: [{ name: "Cobalt", hex: "#1668c4" }],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "layered-green-shirt",
    name: "The Layered Green Shirt",
    category: "Tops",
    price: "$58",
    compareAtPrice: "$72",
    tone: "#3faa50",
    toneTo: "#6fc47c",
    orderMessage: "Hello Whyknot! I'd like to order The Layered Green Shirt. Which size do you have?",
    image: "/images/whyknot/layered-shirt-green.jpg",
    description:
      "A double-layer shirt in kelly green cotton, cropped on top with a longer panel beneath. Clever construction that hides everything and flatters everyone.",
    fabric: "100% cotton. Machine wash cold, low iron.",
    colors: [{ name: "Kelly Green", hex: "#3faa50" }],
    sizes: STANDARD_SIZES,
  },
  {
    slug: "riviera-sun-hat",
    name: "The Riviera Sun Hat",
    category: "Accessories",
    price: "$38",
    compareAtPrice: "$48",
    tone: "#1b4fa8",
    toneTo: "#4a7fd4",
    orderMessage: "Hello Whyknot! I'd like to order The Riviera Sun Hat. Which colors do you have?",
    image: "/images/whyknot/sun-hat-blue.jpg",
    description:
      "A wide-brim straw hat with a frayed contrast trim, packable and shady enough for a full beach day. The accessory that makes the photos.",
    fabric: "Woven straw with cotton trim.",
    colors: [
      { name: "Cobalt", hex: "#1b4fa8", image: "/images/whyknot/sun-hat-blue.jpg" },
      { name: "Sunset Orange", hex: "#e0763f", image: "/images/whyknot/sun-hat-orange.jpg" },
    ],
    sizes: ONE_SIZE,
  },
  {
    slug: "sunday-lounge-set",
    name: "The Sunday Lounge Set",
    category: "New In",
    price: "$52",
    compareAtPrice: "$65",
    tone: "#a8a5a0",
    toneTo: "#c9c6c1",
    orderMessage: "Hello Whyknot! I'd like to order The Sunday Lounge Set. Which size do you have?",
    tag: "New",
    image: "/images/whyknot/lounge-set-grey.jpg",
    description:
      "Ribbed cotton tank and drawstring joggers that feel like a day off. Soft enough to sleep in, put-together enough to answer the door.",
    fabric: "95% cotton, 5% elastane. Machine wash cold.",
    colors: [{ name: "Heather Grey", hex: "#a8a5a0" }],
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
    title: "The twirl test",
    product: "The Santorini Maxi",
    price: "$78",
    orderMessage: "Hello Whyknot! I saw The Santorini Maxi in your video. Is it available?",
    image: "/images/whyknot/santorini-maxi-aegean.jpg",
  },
  {
    title: "One size, really",
    product: "Mimoto Crowd Shirt",
    price: "$88",
    orderMessage: "Hello Whyknot! I saw the Mimoto Crowd Shirt in your video. Is it available?",
    image: "/images/whyknot/mimoto-crowd-shirt-sky.jpg",
  },
  {
    title: "Pure silk",
    product: "The Pure Silk Maxi",
    price: "$145",
    orderMessage: "Hello Whyknot! I saw The Pure Silk Maxi in your video. Is it available?",
    image: "/images/whyknot/silk-mint-front.jpg",
  },
  {
    title: "Beach day",
    product: "The Riviera Sun Hat",
    price: "$38",
    orderMessage: "Hello Whyknot! I saw The Riviera Sun Hat in your video. Which colors do you have?",
    image: "/images/whyknot/sun-hat-orange.jpg",
  },
];

export type StyleCategory = {
  name: string;
  blurb: string;
  image: string;
};

export const STYLES: StyleCategory[] = [
  {
    name: "Boho Maxis",
    blurb: "Flowy, printed, free",
    image: "/images/whyknot/positano-maxi-fuchsia.jpg",
  },
  {
    name: "Made in Japan",
    blurb: "Mimoto one-size",
    image: "/images/whyknot/mimoto-crowd-shirt-black.jpg",
  },
  {
    name: "Statement Tees",
    blurb: "Pieces that talk",
    image: "/images/whyknot/evil-eye-tee-white.jpg",
  },
  {
    name: "Summer Days",
    blurb: "Hats, silk, lounge",
    image: "/images/whyknot/sun-hat-blue.jpg",
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
