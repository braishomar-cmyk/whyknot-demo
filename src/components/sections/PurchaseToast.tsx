"use client";

import { useEffect, useState } from "react";

const EVENTS = [
  { name: "Maya from Beirut", item: "Sage Slip Dress", when: "8 minutes ago" },
  { name: "Nour from Jounieh", item: "The Quilted Coat", when: "22 minutes ago" },
  { name: "Rita from Tripoli", item: "Everyday Knit", when: "34 minutes ago" },
  { name: "Lara from Zahle", item: "Structured Blazer", when: "1 hour ago" },
];

export function PurchaseToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const show = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(show);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;
    const hide = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % EVENTS.length);
        setVisible(true);
      }, 9000);
    }, 6000);
    return () => clearTimeout(hide);
  }, [visible, index, dismissed]);

  if (dismissed) return null;
  const e = EVENTS[index];

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-4 md:left-6 z-40 flex items-center gap-3 rounded-[14px] bg-white shadow-[0_12px_32px_rgba(35,35,35,0.18)] border border-black/5 pl-4 pr-3 py-3 max-w-[290px] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--an-gold-light)] text-[var(--an-ink)] text-[13px] font-semibold">
        {e.name.charAt(0)}
      </span>
      <span className="text-[12px] leading-snug">
        <strong className="font-semibold">{e.name}</strong> just ordered the{" "}
        <em className="italic">{e.item}</em>
        <span className="block text-[10.5px] uppercase tracking-[0.1em] opacity-50 mt-0.5">
          {e.when}
        </span>
      </span>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        className="ml-1 self-start text-[14px] leading-none opacity-40 hover:opacity-80"
      >
        ×
      </button>
    </div>
  );
}
