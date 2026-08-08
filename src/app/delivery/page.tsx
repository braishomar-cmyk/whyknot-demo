import type { Metadata } from "next";
import { InfoPageShell, InfoRows } from "@/components/sections/InfoPageShell";
import { GOVERNORATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Delivery | Whyknot Clothing",
  description:
    "We deliver everywhere in Lebanon in 2 to 4 working days. Flat $3 delivery, free on orders over $75, cash on delivery.",
};

const ROWS = [
  { label: "Where we deliver", value: "Everywhere in Lebanon, all eight governorates." },
  { label: "How long it takes", value: "2 to 4 working days from the moment we confirm your order." },
  { label: "Delivery fee", value: "A flat $3 anywhere in the country." },
  { label: "Free delivery", value: "On every order over $75. We tell you when you qualify." },
  { label: "Payment", value: "Cash to the courier when your order arrives." },
  { label: "Tracking", value: "We message you on WhatsApp when your order leaves us and again on the delivery day." },
];

export default function DeliveryPage() {
  return (
    <InfoPageShell
      eyebrow="Help"
      title="Delivery"
      intro="Everything ships from Lebanon to anywhere in Lebanon. Here are the details, with no small print."
    >
      <InfoRows rows={ROWS} />

      <div className="mt-10">
        <h2 className="font-display text-[22px] font-semibold">Areas we cover</h2>
        <p className="mt-2 text-[14px] opacity-75">
          If your address falls in any of these, we deliver to you.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {GOVERNORATES.map((g) => (
            <li
              key={g}
              className="rounded-full border border-black/12 bg-[var(--an-cream)] px-4 py-2 text-[12.5px]"
            >
              {g}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-[12px] border border-black/10 p-6">
        <h2 className="font-display text-[20px] font-semibold">Delivering abroad?</h2>
        <p className="mt-2 text-[14px] leading-relaxed opacity-75">
          Not through the website yet. If you&apos;re outside Lebanon and want a piece, message us
          and we&apos;ll quote shipping for your country by hand.
        </p>
      </div>
    </InfoPageShell>
  );
}
