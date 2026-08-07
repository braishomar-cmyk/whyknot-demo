import type { ReactNode } from "react";

export type Product = {
  name: string;
  arabic: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  reviewCount: number;
  orderMessage: string;
  tag?: { label: string; variant?: "green" };
  visual: ReactNode;
};

export type Category = {
  name: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  who: string;
};

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
};

export type FeatureCard = {
  title: string;
  text: string;
  cta: string;
  orderMessage: string;
};
