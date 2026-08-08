import type { Metadata } from "next";
import { InfoPageShell, InfoRows, InfoSteps } from "@/components/sections/InfoPageShell";

export const metadata: Metadata = {
  title: "Exchanges | Whyknot Clothing",
  description:
    "Something not quite right? Exchange it within 3 days of delivery. Message us on WhatsApp and we'll arrange the swap across Lebanon.",
};

const STEPS = [
  {
    title: "Message us within 3 days",
    text: "Send us a message on WhatsApp with your order number and tell us what you'd like to swap it for. The sooner you write, the more likely your size is still there.",
  },
  {
    title: "Keep it as you received it",
    text: "Unworn, unwashed, with the tags still on and in its original packaging. We check every piece before it goes back out to someone else.",
  },
  {
    title: "We arrange the swap",
    text: "The courier picks up the original piece and brings the new one on the same visit wherever possible, so you only wait once.",
  },
];

const ROWS = [
  { label: "Exchange window", value: "3 days from the day your order is delivered." },
  { label: "Condition", value: "Unworn and unwashed, tags attached, original packaging." },
  { label: "Exchange fee", value: "You cover the courier fee for the swap, a flat $3." },
  {
    label: "Sale pieces",
    value: "Discounted pieces can be exchanged for another size where stock allows, but are not refundable.",
  },
  {
    label: "Faulty pieces",
    value: "If something arrives damaged, send us a photo the same day and we replace it or refund you in full, courier included.",
  },
];

export default function ExchangesPage() {
  return (
    <InfoPageShell
      eyebrow="Help"
      title="Exchanges"
      intro="We want you wearing it, not storing it. If the fit isn't right, here's how to swap it."
    >
      <InfoSteps steps={STEPS} />

      <h2 className="font-display text-[22px] font-semibold mt-12 mb-5">The details</h2>
      <InfoRows rows={ROWS} />

      <div className="mt-10 rounded-[12px] border border-black/10 p-6">
        <h2 className="font-display text-[20px] font-semibold">Not sure before you order?</h2>
        <p className="mt-2 text-[14px] leading-relaxed opacity-75">
          Message us first. Tell us your usual size and what you&apos;re between, and we&apos;ll
          tell you honestly how a piece runs. It saves everyone the swap.
        </p>
      </div>
    </InfoPageShell>
  );
}
