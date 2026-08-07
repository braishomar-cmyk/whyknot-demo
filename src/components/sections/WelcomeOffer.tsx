"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { waLink } from "@/lib/content";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";

const STORAGE_KEY = "whyknot-welcome-offer";
const DISCOUNT_CODE = "WELCOME10";

export function WelcomeOffer() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "seen";
    } catch {
      // storage unavailable, show the offer anyway
    }
    if (seen) return;
    const timer = setTimeout(() => setOpen(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setClaimed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // ignore
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome offer"
    >
      <button
        type="button"
        aria-label="Close offer"
        onClick={dismiss}
        className="absolute inset-0 bg-black/50 cursor-default"
      />

      <div className="relative z-10 w-full max-w-[760px] overflow-hidden rounded-[16px] bg-[var(--an-cream)] shadow-2xl grid md:grid-cols-2">
        <button
          type="button"
          aria-label="Close offer"
          onClick={dismiss}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[var(--an-ink)] transition-colors hover:bg-white"
        >
          <CloseIcon className="w-4" />
        </button>

        <div className="relative hidden md:block aspect-[3/4]">
          <Image
            src="/images/whyknot/santorini-maxi-coral.jpg"
            alt="The Santorini Maxi"
            fill
            sizes="380px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-9">
          {claimed ? (
            <>
              <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[var(--an-gold)]">
                You&apos;re in
              </p>
              <h2 className="font-display text-[28px] md:text-[32px] font-semibold leading-tight mt-3">
                Here&apos;s your 10% off
              </h2>
              <div className="mt-5 rounded-[10px] border border-dashed border-[var(--an-ink)]/30 bg-white px-5 py-4 text-center">
                <span className="font-display text-[24px] font-semibold tracking-[0.14em]">
                  {DISCOUNT_CODE}
                </span>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed opacity-70">
                Use it at checkout on your first order. We&apos;ve also sent it to your inbox so
                you don&apos;t lose it.
              </p>
              <button type="button" onClick={dismiss} className="btn-solid mt-6 w-full">
                Start Shopping
              </button>
            </>
          ) : (
            <>
              <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[var(--an-gold)]">
                First order?
              </p>
              <h2 className="font-display text-[30px] md:text-[36px] font-semibold leading-[1.1] mt-3">
                Take <em className="italic text-[var(--an-gold)]">10% off</em> your first piece
              </h2>
              <p className="mt-3 text-[13.5px] leading-relaxed opacity-75">
                Join the Whyknot list for new drops from Italy and Japan, and we&apos;ll send your
                discount code straight away.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="w-full rounded-[8px] border border-black/15 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[var(--an-ink)]"
                />
                <button type="submit" className="btn-solid w-full">
                  Get My 10% Off
                </button>
              </form>

              <a
                href={waLink("Hello Whyknot! I'd like to claim the 10% first-order discount")}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 text-[12px] opacity-70 transition-colors hover:text-[var(--an-gold)] hover:opacity-100"
              >
                <WhatsAppIcon className="w-3.5" /> Or claim it on WhatsApp
              </a>

              <button
                type="button"
                onClick={dismiss}
                className="mt-4 text-[11.5px] uppercase tracking-[0.12em] opacity-50 transition-opacity hover:opacity-90"
              >
                No thanks, I&apos;ll browse
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
