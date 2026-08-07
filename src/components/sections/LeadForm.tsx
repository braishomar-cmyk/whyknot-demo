"use client";

import { useState } from "react";
import { waLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const INTERESTS = ["Dresses", "Tops", "Outerwear", "Accessories", "Something specific"];
const SIZES = ["XS", "S", "M", "L", "XL", "Not sure"];

const inputClasses =
  "w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[var(--an-gold)]";

export function LeadForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [size, setSize] = useState(SIZES[5]);
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      `Hello! I'm ${name.trim() || "interested in your collection"}.`,
      `I'm looking for ${interest.toLowerCase()}${size !== "Not sure" ? `, size ${size}` : ""}.`,
    ];
    if (notes.trim()) parts.push(notes.trim());
    window.open(waLink(parts.join(" ")), "_blank", "noopener");
  }

  return (
    <section className="py-16 md:py-20 bg-[var(--an-cream)]">
      <div className="container-gp max-w-[620px]">
        <h2 className="section-heading">Looking For Something?</h2>
        <p className="text-center mt-2 text-[14px] opacity-70">
          Tell us what you need and it opens a WhatsApp chat, ready to send.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white rounded-[18px] border border-black/5 shadow-[0_4px_18px_rgba(35,35,35,0.06)] p-7 md:p-9 space-y-5"
        >
          <div>
            <label htmlFor="lead-name" className="block text-[12px] uppercase tracking-[0.14em] font-semibold mb-2">
              Your Name
            </label>
            <input
              id="lead-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="lead-interest" className="block text-[12px] uppercase tracking-[0.14em] font-semibold mb-2">
                Looking For
              </label>
              <select
                id="lead-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={inputClasses}
              >
                {INTERESTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="lead-size" className="block text-[12px] uppercase tracking-[0.14em] font-semibold mb-2">
                Your Size
              </label>
              <select
                id="lead-size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className={inputClasses}
              >
                {SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="lead-notes" className="block text-[12px] uppercase tracking-[0.14em] font-semibold mb-2">
              Anything Else
            </label>
            <textarea
              id="lead-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="A piece you saw, a color you love, an occasion..."
              className={inputClasses}
            />
          </div>
          <button type="submit" className="btn-wa w-full !py-4 !text-[13px]">
            <WhatsAppIcon className="w-5" /> Send on WhatsApp
          </button>
          <p className="text-center text-[11.5px] opacity-60">
            No account needed. Your message opens in WhatsApp, ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
