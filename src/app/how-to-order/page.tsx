import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageShell, InfoSteps } from "@/components/sections/InfoPageShell";

export const metadata: Metadata = {
  title: "How to Order | Whyknot Clothing",
  description:
    "Ordering from Whyknot takes two taps: find your piece, tap order, and we confirm everything on WhatsApp. Cash on delivery across Lebanon.",
};

const STEPS = [
  {
    title: "Find your piece",
    text: "Browse the collection and open anything you like. Every product page shows the colours we have, how the one-size fit works, and the fabric it's made from.",
  },
  {
    title: "Tap order on WhatsApp",
    text: "Every product has an order button. Tapping it opens a WhatsApp chat with the piece, colour and size already written into the message, so you just hit send.",
  },
  {
    title: "We confirm availability",
    text: "We reply with a yes and the total, usually within the hour. If a piece has just sold, we'll show you what else came in that week.",
  },
  {
    title: "Share your address",
    text: "Send us your name, phone number and where you'd like it delivered. Anywhere in Lebanon works.",
  },
  {
    title: "Pay when it arrives",
    text: "Cash on delivery, straight to the courier. No card details, no prepayment, no account to create.",
  },
];

export default function HowToOrderPage() {
  return (
    <InfoPageShell
      eyebrow="Help"
      title="How to Order"
      intro="No account, no checkout, no card details. Everything happens in one WhatsApp conversation."
    >
      <InfoSteps steps={STEPS} />

      <div className="mt-10 rounded-[12px] border border-black/10 p-6">
        <h2 className="font-display text-[20px] font-semibold">Not sure about the size?</h2>
        <p className="mt-2 text-[14px] leading-relaxed opacity-75">
          Ask before you order. Tell us your usual size and we&apos;ll tell you honestly how a
          piece runs. Most of our pieces are one size and cut generously, so they suit a wide
          range of shapes.
        </p>
      </div>

      <p className="mt-8 text-[14px] opacity-75">
        See also{" "}
        <Link href="/delivery" className="underline underline-offset-4 hover:text-[var(--an-gold)]">
          delivery
        </Link>{" "}
        and{" "}
        <Link
          href="/exchanges"
          className="underline underline-offset-4 hover:text-[var(--an-gold)]"
        >
          exchanges
        </Link>
        .
      </p>
    </InfoPageShell>
  );
}
